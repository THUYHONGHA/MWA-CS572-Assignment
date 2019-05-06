const express = require('express');
const app = express();

const requiredJsonContent = function (req, res, next)  {
    if (req.headers['content-type'] != 'application/json') {
        // res.status(400).send('Server requires an application/json type.');
        next(new Error('Server requires an application/json type.'))
    } else {
        next();
    }
};
module.exports = requiredJsonContent;