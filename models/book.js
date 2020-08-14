// MODEL BASICS
// A model is an abstraction (a process of hiding details of implementation in programs and data) that represents a table in the db. It is responsible for managing the data, logic, and rules of the app. It is independent of the UI.


// DESIGNING MODELS
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

// DEFINING & CREATING MODELS
// The model will tell the chosen ODM/ORM (Sequelize) about the entity it represents, such as name of the table in the db, its columns, and their data types.
const Sequelize = require('sequelize');
const db = require('../config/database');

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

// Setup Book Model for Books table
const Book = db.define('book', {
    // Table columns are defined by the object that is given as the second argument
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: ,
        references: {
            // This is a reference to another model
            model: Author,
      
            // This is the column name of the referenced model
            key: 'id',
      
            // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
            deferrable: Deferrable.INITIALLY_IMMEDIATE
            // Options:
            // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
            // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
            // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
          }
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
        type: ,
        references: {
            // This is a reference to another model
            model: Genre,
      
            // This is the column name of the referenced model
            key: 'id',
      
            // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
            deferrable: Deferrable.INITIALLY_IMMEDIATE
            // Options:
            // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
            // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
            // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
          }
    }
})

// Export model
module.exports = Book;