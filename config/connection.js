const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('tech_blog_db', process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      username: 'root',
      password: 'password',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;