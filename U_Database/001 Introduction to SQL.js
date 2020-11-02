// << Introduction to SQL >>

// Structured Query Language is a programing language designed to manage data stored in relational databases.
// Widely used across web frameworks & database applications
// Explore your data, empower better decisions
// SQL concepts apply to many other data storage systems

// SQL operates through simple, declarative statements
// This keeps data accurate & secure
// This helps maintain the integrity of databases (regardless of size)

// Statements here use SQLite Relational Database Management Systems (RDBMS)
// Note the file for the exercise is named 'test.sqlite'    
// Glossary of all SQL commands: 
https://www.codecademy.com/articles/sql-commands

//  --------------

// Our first SQL command:

SELECT * FROM celebs;  // celebs is the table name 
// returns information from a relational database

// What is a Relational Database?
//  ----------------------------
// A database that organises info into one or more tables


// How are Relational Databases organised?
//  --------------------------------------------
// A table is a collection of data organised into rows and columns
// Tables are sometimes referred to as 'relations'
// A column is a set of data values of a particular type, eg 'age' name' 'id'
// A row is a single record in a table. Eg An id of '1'. A name of 'Beyonce'. An age of '22'.
// All data stored in a relational database is:
// - INTEGER + or - whole number
// - TEXT string
// - DATE in format YYYY-MM-DD
// - REAL, a decimal value


// SQL STATEMENTS 
// -------------

// [Create, Read, Update, Delete] = [INSERT INTO or ALTER TABLE, SELECT <> FROM, UPDATE,  DELETE FROM] ; 
// WHERE allows a condition. 

// Eg ( though structures differ) :

CREATE TABLE table_name (
    column_1 data_type, 
    column_2 data_type, 
    column_3 data_type
 );

//  CREATE TABLE is a clause (also referred to as commands)
// Clauses perform specific tasks in SQL. Always in CAPS.

// table_name refers to the table the command is applied to.

// () is the parameter.
// Parameter is a list of columns, data types, or values passed to a clause as an argument
// Here, is list of column names and associatated data type


// SQL STATEMENTS
// -------------

// CREATE statements allow us to create a table in a database:
// -----
// creates new table call 'celebs'
CREATE TABLE celebs (
    id INTEGER, 
    name TEXT, 
    age INTEGER
 );

 // the argument passed is a list of parameters defining each column and its data type.
//  Eg: id is the first column and stores values of data type integer



// INSERT inserts a new row (record) into a table
// -----
// inserts a record for Justin Biebs into the 'celebs' table:
INSERT INTO celebs (id, name, age) 
VALUES (1, 'Justin Bieber', 22);

//  VALUES indicates the data being inserted. 

// SELECT fetch data from databases
// -----

// returns data in the 'name' column from 'celebs' database:
SELECT name FROM celebs;

// returns all data from 'celebs' database:
SELECT * FROM celebs;

// SELECT indicates the statement is a query
// SELECT statements always return a new table called the 'result set'


// ALTER TABLE adds a new column to a table
// -----------

// adds new column to 'celebs' table
ALTER TABLE celebs 
ADD COLUMN twitter_handle TEXT;     // note lack of semicolon after first line - this whole thing is a single statement

// ALTER TABLE lets you make a specified change
// TEXT is the data type of that column's values

// Note that NULL in SQL represents missing / unknown data
// The new rows created in column 'twiter_handle' will be filled with ∅ NULL values 


// UPDATE statement edits a row in a table - use to change existing records
// -----------

// updates the record with 'id' value of 4 to have 'twitter_handle' of '@taylorswift13'
UPDATE celebs                             // clause indicates action (edit) and which table 
SET twitter_handle = '@taylorswift13'    // indicates which column to update 
WHERE id = 4;                           // indicates which row to update with new column value

SELECT * FROM celebs;                  // to be able to see change in record


// DELETE FROM statement deletes 1+ row/s from a table - use to delete existing records
// -----------

// deletes all records with no twitter handle:
DELETE FROM celebs 
WHERE twitter_handle IS NULL; // indicates which rows to delete, rows which IS NULL condition returns true



// CONSTRAINTS
// -----------

// Constraints are invoked after specifing data type for a column
// Eg: database to reject inserted data that is non-compliant to restrictions

// creates table, setting constraints: 
CREATE TABLE celebs (
    id INTEGER PRIMARY KEY,     // PRIMARY KEY columns used to uniquely identify the row - attempts to insert a row with identical value results in constraint violation
    name TEXT UNIQUE,          // UNIQUE columns have diff value for every row for every row - similar to PRIMARY KEY cept a table can have multiple    
    date_of_birth TEXT NOT NULL, // NOT NULL column must have value, attempts to insert a row without value is constraint violation
    date_of_death TEXT DEFAULT 'Not Applicable' // DEFAULT takes additional arg as assumed value for an inserted row if value unspecified for that column 
 );

/*
// REVIEW
// ------

// SQL is a programming lang to manipulate / manage data stored in relational databases.
// Relational database is a database organised in tables
// A table is collection of data stored in rows & columns
// Six SQL clauses (commands) : 

CREATE TABLE creates a new table.
INSERT INTO adds a new row to a table.
SELECT queries data from a table.
ALTER TABLE changes an existing table.
UPDATE edits a row in a table.
DELETE FROM deletes rows from a table.
*/

//  Egs: 
CREATE TABLE <table_name> (
    column DATATYPE CONSTRAINT,
    column DATATYPE CONSTRAINT,   
    column DATATYPE CONSTRAINT,
);

INSERT INTO <table_name> (column1, column2, column3)    // inserts a row (record) 
VALUES (value1, value2, value3);

ALTER TABLE <table_name> 
ADD COLUMN <column_name> DATATYPE;   // inserts new column

UPDATE <table_name>          // updates a row value 
SET column2 = value
WHERE column1 = value;

DELETE FROM <table_name>         // deletes row 
WHERE column1 IS NULL;

SELECT column1 FROM <table_name>;selec  // reads column
SELECT * FROM <table_name>;      // read everything

