// << Queries >>

// We will learn commands to query a single table in a database 
// One of core purposes is to RETRIEVE information stored - known as querying
// Queries - communicate with database by asking a Q and result a result set with relevant data

//  --------------

// reads selected column from <movies> database: 
SELECT name, genre, year 
FROM movies; 

// renamed column as alias in the result set - note single quotes
SELECT name AS 'Titles' 
FROM movies; 

//  --------------

// FILTERING RESULTS - WHERE and its operators:  

// DISTINCT returns unique values (filters out duplicates)
SELECT DISTINCT genre
FROM movies;

// WHERE conditions
// Operators include = !=  > < >= <=
SELECT *
FROM movies
WHERE imdb_rating > 8;

// LIKE  ( _ and % wildcard chars )
// compares similar values
// LIKE used with WHERE searches for a specific pattern 
SELECT * 
FROM movies
WHERE name LIKE 'Se_en'; 
// 'Se_en' = pattern with wildcard character - Seven and Se7en both match 

// LIKE II
// % matches zero or more missing letters in a pattern
// A% - matches all movies beginning with 'A'
// %e - matches all movies ending with 'e'
// %man% - any movie containing word 'man'
// LIKE is noT CaSe SEnSItivE - Batman & Manowar would both match

// IS NULL 
// Unknown values indicates by NULL
// Can't test for NULL value with comparison operatoes like > or !=
// Use IS NULL and IS NOT NULL 
SELECT *
FROM movies
WHERE imdb_rating IS NOT NULL; 

// BETWEEN
// used in a WHERE clause to filter result set within a certain range 
// accepts two values (number, text (alphbetical), dates)
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999; // inclusive of second value 1999
or
WHERE name BETWEEN 'A' AND 'J';
// returns all names  beginning with A,,B,C,D,E,F,G - only inclusive of the second value J if the movie name is just 'J'! 
// BETWEEN is CASE sensiTIVE

// AND combines conditions
SELECT * 
FROM movies
WHERE year BETWEEN 1990 AND 1999 // inclusive, note. 
AND genre = 'romance';

// OR - displays row if any condition is true
SELECT *
FROM movies
WHERE year > 2014
OR genre = 'action';

//  -------------------------------------------------------

// ORDER BY - sort results alphabetically / numerically
// DESC & ASC
SELECT * 
FROM movies
WHERE name LIKE 'a%'
ORDER BY year DESC

// LIMIT caps number of records - max number of rows the result set will have
// LIMIT goes at the end of a query and is not supported by all SQL databases
SELECT *
FROM movies
LIMIT 10; 

// CASE allows different outputs (usually in SELECT statement)
// SQL's if-then logic
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'         // each WHEN tests a condition
  WHEN imdb_rating > 6 THEN 'Poorly Received'   // THEN gives us a string if condition true
  ELSE 'Avoid at All Costs'                     // ELSE if ALL conditions false 
 END                                            
FROM movies;

// Note order of statements: SELECT, CASE...END FROM ; 
END AS 'Review' // can rename the column 

//  -------------------------------------------------------

// REVIEW

// We learnt how to query database using SQL - Query is retrieving data, we ask the database a Q and receive a corresponding result set 
// We learnt how to filter queries to make them more useful: 
// SELECT 
// AS  - for column alias 
// DISTINCT  - for unique values
// WHERE  - to set filter condition
//      LIKE  - to set condition pattern
//      BETWEEN  - to set range
//      AND / OR  - to combine conditions
// ORDER BY  - sorts result
// LIMIT  - cap rows returned
// CASE  - sets different outputs