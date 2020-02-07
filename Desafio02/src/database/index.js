import Sequelize from 'sequelize';
import User from '../app/models/User';
import dataBaseConfig from '../config/database';

const models = [User];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connetion = new Sequelize(dataBaseConfig);
        models.map(model => model.init(this.connetion));
    }
}

export default new DataBase();
