const Sequelize = require("sequelize");

const connection = new Sequelize('byteguia', 'root', '88388', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    timezone: "-03:00"
});

module.exports = connection;