const express = require('express');
const fs = require('fs');
const MainPath = require('../FilePaths.js');
const path = require('path');

const ExpressRoute = express.Router();
ExpressRoute.use('/products', (req, res, next) => {
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
            sendString += `<h1>${data.productname || ''}</h1>`;
          });
          // res.setHeader('text/html');
          res.send(sendString);
        }
      );
    }
  );
});

module.exports = ExpressRoute;
