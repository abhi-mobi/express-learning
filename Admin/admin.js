const express = require('express');
const path = require('path');
const mainpath = require('../FilePaths.js');

const ExpressRoute = express.Router();

ExpressRoute.use('/addproducts', (req, res, next) => {
  res.sendFile(
    path.join(mainpath, '../', '/Admin', '/HtmlPage', '/AddProducts.html')
  );
});

module.exports = ExpressRoute;
