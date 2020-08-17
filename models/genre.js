const Sequelize = require('sequelize');
const { Model } = require('sequelize');

const Genre = Sequelize.define('Genre', {
    name: {type: Sequelize.STRING},
}, {
    // Other Model Options
});

module.exports = Genre;