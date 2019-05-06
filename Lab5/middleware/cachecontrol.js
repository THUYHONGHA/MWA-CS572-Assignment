const express= require('express');
const app = express();

const cachecontrol = (req, res, next) =>{
  res.set('Cache-Control', 'private, max-age = 86400');
  next();
};

module.exports = cachecontrol;