module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
        username: {
            type: Sequelize.STRING(30),
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING(100)
        },
    }, {
        timestamps: false
    });
    
    return Account;

};