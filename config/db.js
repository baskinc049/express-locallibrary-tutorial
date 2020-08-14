// INTERACTING WITH A DATABASE
/*
2 Common Approaches:
1 - Using the db's native query language (sql, etc)
     1a - Provides the best performance.
2 - Using an "Object Data Model" (ODM) or "Object Relational Model" (ORM). An ODM/ORM represents the site's data as JavaScript objects, which are then mapped to the underlying db.
     2a - Often slower but allows for devs to continue to think in JavaScript objects rather than db semantics
     2b - Provides place to perform data validation
*/

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

// CONNECTING TO THE DB



// DEFINING & CREATING MODELS
