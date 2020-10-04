import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// importando a model
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

// array com todos os models da aplicação
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    // chama o metodo mongo
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // acessar todas as models
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  // mongodb
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/cardFlow',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    );
  }
}

export default new Database();
