var express = require('express');
var router = express.Router();
var axios = require('axios');
var url = require('url');

async function getUsersAsync(pagenumber){
  try{
    let res = await axios.get('https://randomuser.me/api/?results=10&page='+pagenumber);
    return JSON.stringify(res.data);
  }
  catch (e) {
    console.log(e);
  }
}


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let urlString = url.parse(req.url,true);
  let pagenumber = urlString.query.page;
  let data = await getUsersAsync(pagenumber);
  res.set('Cache-Control', 'public, max-age = 86400');
  let pagingInfo = 'http://localhost:3000/users?page=pagenumber';
  res.set('Paging', pagingInfo);
  res.send(data);
});


module.exports = router;
