const { User } = require('../models');

const userData = [
    {
        username: 'Jimmy',
        password: 'password123',
    },
    {
        username: 'Madeline',
        password: 'password123',
    },
    {
        username: 'Leslie',
        password: 'password123',
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;