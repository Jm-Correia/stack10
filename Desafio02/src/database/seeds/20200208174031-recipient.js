module.exports = {
    up: queryInterface => {
        return queryInterface.bulkInsert(
            'recipients',
            [
                {
                    userId: 1,
                    address_line: '58 Dias Cardoso Street',
                    city: 'Recife',
                    state: 'Permanbuco',
                    zipcode: '50000-100',
                    country: 'BR',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('recipients', null, {});
    },
};
