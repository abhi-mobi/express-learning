const express = require('express');
const fs = require('fs');
const MainPath = require('../FilePaths.js');
const path = require('path');

const ExpressRoute = express.Router();
ExpressRoute.post('/products', (req, res, next) => {
  fs.readFile(
    path.join(MainPath, '../', 'Data', '/products.json'),
    (error, filedata) => {
      if (error) {
        res.send('Error');
      }
      const Allready = JSON.parse(filedata);
      let products = [];

      for (let i = 0; i < Allready.length; i++) {
        products.push(Allready[i]);
      }
      req.body.id = Math.random();
      products.push(req.body);

      fs.writeFile(
        path.join(MainPath, '../', 'Data', '/products.json'),
        JSON.stringify(products),
        (error) => {
          if (error) {
            res.send('Error in Writtting');
          }
          console.log('Flie Update');
          let sendString = '';
          products.forEach((data) => {
            if (data.productname) {
              sendString += `<h1>${data.productname}<a href='/user/products/${data.id}' >${data.id}</a></h1>`;
            }
          });
          // res.setHeader('text/html');
          res.send(sendString);
        }
      );
    }
  );
});

ExpressRoute.get('/products/:productid', (req, res, next) => {
  console.log(req.params.productid);
  res.send(req.params.productid);
});

module.exports = ExpressRoute;
