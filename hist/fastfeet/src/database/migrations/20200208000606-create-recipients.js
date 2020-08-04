module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('recipients', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'users',
                    },
                    key: 'id',
                },
                allowNull: false,
            },
            address_line: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            zipcode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('recipients');
    },
};
