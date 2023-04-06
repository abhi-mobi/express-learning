const express = require('express');
const app = express();
const port = 3010;
const bodyParser = require('body-parser');
const AdminRoutes = require('./Admin/admin.js');
const UserRoutes = require('./User/user.js');
const DynamicRoute = require('./DynamicRouting/DynamicRoute.js');
const path = require('path');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
express.static(path.join(__dirname, 'static'));
app.use('/user', UserRoutes);
app.use('/admin', AdminRoutes);
app.use('/DynamicRoute', DynamicRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
