import Sequelize from 'sequelize';

import dataBaseConfig from '../config/databases';
import User from '../app/models/User';

const models = [User];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataBaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new DataBase();
