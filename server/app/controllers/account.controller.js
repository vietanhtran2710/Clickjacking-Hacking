const db = require("../models");
const Account = db.account;

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            message: "A content properties cannot be empty"
        })
    }

    // Create an account
    const account = {
        username: req.body.username,
        password: req.body.password,
        accountType: req.body.accountType,
        online: false
    }

    // Save an account in the database
    Account.create(account)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the account."
            })
        })
};