module.exports = app => {

  const account = require("../controllers/account.controller.js");

  var router = require("express").Router();

  // Create a new account
  router.post("/", account.create);

  app.use('/api/account', router);
};
