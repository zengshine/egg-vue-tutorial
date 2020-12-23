const Sequelize = require('sequelize');
const DotEnv = require('dotenv');
const path = require('path');
const fs = require('fs');

DotEnv.config();

const {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
} = process.env;

// 递归获取文件夹下所有文件
const getFiles = dir => {
  const fileList = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      // 目录，递归获取
      fileList.push(...getFiles(filePath));
    } else {
      // 文件，直接添加
      fileList.push(filePath);
    }
  });

  return fileList;
};

const createSequelize = (dbName = '') => {
  const sequelize = new Sequelize(dbName, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
  });

  return sequelize;
};

const initDataBase = async () => {
  // 新建sequelize实例，数据库名为空，用于新建数据库
  let sequelize = createSequelize();

  // 新建数据库
  await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
    // 新建数据库后创建新的连接
    sequelize = createSequelize(DB_NAME);
  });

  const modelDir = path.join(__dirname, '../app/model/');

  getFiles(modelDir)
    .filter(filePath => {
      const fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
      return ((fileName !== 'index.js') && (fileName.slice(-3) === '.js'));
    })
    .forEach(filePath => {
      // 引入的是tsc编译后的非标准模块，需要通过default属性获取默认导出
      const model = require(filePath).default;
      model({}, sequelize);
    });

  // 同步所有表格
  sequelize.sync();
};

initDataBase();
