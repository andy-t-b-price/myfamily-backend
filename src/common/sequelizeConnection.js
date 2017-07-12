export const Sequelize = require('sequelize');
var defaultConfigData = require('./config.json');

export class DatabaseConnection {

  db;

  constructor(database) {
    let env = process.env.ENV ? process.env.ENV : 'development';
    if(database) {
      defaultConfigData[env].database = database;
    }

    this.db = new Sequelize(defaultConfigData[env].database, 
                            defaultConfigData[env].username, 
                            defaultConfigData[env].password, 
                            defaultConfigData[env].config);
  }

  getConnection() {
    return this.db;
  }
}