// var password = require("./../password.js");

module.exports = {
  // "development": {
  //   "username": "root",
  //   "password": password,
  //   "database": "simply_falafel_db",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"   
  // },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "sg01djm5ujkhewpx",
    "password": "x3bg0mv6lomdar80",
    "database": "n1ex15f3e4osd4f7",
    "host": "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
}