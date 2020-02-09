import Sequelize from 'sequelize';

import dataBaseConfig from '../config/databases';
import User from '../app/models/User';
import File from '../app/models/File';

const models = [User, File];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataBaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new DataBase();
