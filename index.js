const express = require('express');
const app = express();
const port = 3010;
const bodyParser = require('body-parser');
const AdminRoutes = require('./Admin/admin.js');
const UserRoutes = require('./User/user.js');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/user', UserRoutes);
app.use('/admin', AdminRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
