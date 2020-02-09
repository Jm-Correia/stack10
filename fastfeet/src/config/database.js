module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    database: 'fastfeet',
    password: 'docker',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
