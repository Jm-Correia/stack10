import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
    static init(sequelize) {
        super.init(
            {
                address_line: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                zipcode: Sequelize.STRING,
                country: Sequelize.STRING,
                user_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Recipients;
