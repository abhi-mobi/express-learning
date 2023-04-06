const express = require('express');

const mainpath = require('../FilePaths.js');
const path = require('path');
const ExpressRouter = express.Router();

ExpressRouter.get('/getCss', (req, res, next) => {
  console.log(req);
  const Miraetheme = {
    RequiredStartColor: '#ED2024',
    ButtonColors: {
      Active: {
        bgcolor: '#ff06ff',
        textcolor: 'red',
      },
      Inactive: {
        bgcolor: 'grey',
        textcolor: 'rgba(0, 0, 0, 0.26)',
      },
    },
    Text: {
      Header: '#660473',
      label: '#730420',
      Error: '#732304',
      NormalInformativeText: {
        Type1: {
          color: 'rgb(4, 59, 115)',
        },
        Type2: {
          color: 'rgb(134, 163, 192)',
        },
      },
      NavigatorText: 'rgba(255, 125, 6, 1)',
      Disclaimer: '#86c096',
    },
    Input: {
      InputBorderColorFocus: ' #FF7D06',
      InputBorderColorNotFocus: '#eff2f5',
      InputTextColor: '#043B73',
      InputBgColor: '#FFFFFF',
      InputDisabledTextColor: '#CBDEF1',
    },
    CheckBox: {
      Type1: 'rgba(255, 125, 6, 1)',
    },
    Button: {
      Succeeding: {
        Active: {
          bgcolor: 'rgba(255, 125, 6, 1)',
          boxShadow: '0px 12px 21px 4px rgba(255, 125, 6, 0.14)',
          color: 'white',
        },
        Inactive: {
          bgcolor: 'grey',
          boxShadow: '0px 12px 21px 4px rgba(255, 125, 6, 0.14)',
          color: 'rgba(0, 0, 0, 0.26)',
        },
      },
      Cancellation: {
        Active: {
          bgcolor: 'rgba(255, 125, 6, 1)',
          boxShadow: '0px 12px 21px 4px rgba(255, 125, 6, 0.14)',
          color: 'white',
        },
      },
    },
  };

  const tosend = JSON.stringify(Miraetheme);
  res.send(tosend);
});

ExpressRouter.use((req, res, next) => {
  res.sendFile(path.join(mainpath, '../', '/DynamicRouting', '/htmlpage.html'));
});

module.exports = ExpressRouter;
