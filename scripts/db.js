/* eslint-disable @typescript-eslint/no-var-requires */

const Sequelize = require('sequelize');

require('dotenv').config();

const {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
} = process.env;

// create the sequelize instance, omitting the database-name arg
const sequelize = new Sequelize('', DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
});

return sequelize.query(`CREATE DATABASE ${DB_NAME};`).then(data => {
  // code to run after successful creation.
  console.log('create database success', data);
});
