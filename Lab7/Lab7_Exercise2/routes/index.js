var express = require('express');
var router = express.Router();
var encryptor = require('simple-encryptor');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/secret', function (req, res, next) {
    require('../db/dbconnection').then((db) => {
        const projection = {'_id': 0, 'key': 1, 'message': 1};
        let collection = db.collection('data');
        collection.findOne({}, projection).then((data) => {
            let encrypted = encryptor(data.key);
            let decrypted = encrypted.decrypt(data.message);
            res.send({'message': decrypted});
        });
    });
});
module.exports = router;
