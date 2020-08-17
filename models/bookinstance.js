const Sequelize = require('sequelize');

const BookInstance = Sequelize.define('BookInstance', {
    book: {},
    imprint: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING, allowNull: false },
    due_back: { type: Sequelize.DATE }
}, {
    // Other Model Options
});

module.exports = BookInstance;