// A. MODEL BASICS
// A model is an abstraction (a process of hiding details of implementation in programs and data) that represents a table in the db. It is responsible for managing the data, logic, and rules of the app. It is independent of the UI.


// B. DESIGNING MODELS
// 1 - What data needs to be stored? 
/*
    Info about books (title, summary, author, genre, ISBN, if multiple copies are available, availability status). Info about the authors.

    Having a separate model for every "object" (groups of related information)

    Having a model to represent selection0list options (via drop-down, etc) to avoid having to hard-code the choices into the site itself - Genre (fantasy, non-fiction, fiction, etc.)
*/
// 2 - What is the relationship between the different objects?
/*
    UML diagrams can be helpful to diagram out relationships.

    - Books (generic details of the book),
    - Book Instances (status of specific physical copies available),
    - Author
*/

// C. DEFINING & CREATING MODELS
// The model will tell the chosen ODM/ORM (Sequelize) about the entity it represents, such as name of the table in the db, its columns, and their data types.

// A model in Sequelize has a name, it doesn't have the be the same name as the table it represents.
// By convention models have singular names, while tables have pluralized names.
    /*
        const User = sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
        }, {
        // Other model options go here
        });
    */

// Auto-generating Models (w/Out Associations) 
// https://github.com/sequelize/sequelize/issues/339#issuecomment-10613291
    /*
    sequelize.getQueryInterface().describeTable(tableName).then( … )
    // => this will result in the structure of a table with all it's attributes

    sequelize.getQueryInterface().showAllTables().then( … )
    // => this will result in an array with all existing table names
    */

const Sequelize = require('sequelize');

// Setup Book Model for Books table
const Book = Sequelize.define('Book', {
    // Table columns are defined by the object that is given as the second argument
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        /*
        references: {
            // This is a reference to another model
            model: Author,
            // This is the column name of the referenced model
            key: 'id' // TODO - Need Full Name (first_name + family_name) of Author
        }*/
    },
    summary: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    ISBN: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        /*references: {
            // This is a reference to another model
            model: Genre,
            // This is the column name of the referenced model
            key: 'name'
        },*/
        allowNull: false
    }
}, {
    // Other model options go here
});


// Book to Author Relationship
// One-to-Many Relationship exists between Book and Author
// with the FK being defined in Source Model Books.
Book.hasMany(Author, {
   foreignKey: 'id' 
});


// Book to Genre Relationship


// D. EXPORT MODEL
module.exports = Book;