const Sequelize = require('sequelize');

const Author = Sequelize.define('Author', {
    first_name: {type: Sequelize.STRING},
    family_name: {type: Sequelize.STRING},
    date_of_birth: {type: Sequelize.DATE},
    date_of_death: {type: Sequelize.DATE},
    name: {type: Sequelize.STRING, allowNull: false},
    lifespan: {type: Sequelize.STRING}
}, {
    // Other Model Options
});

module.exports = Author;