// << Aggregate Functions >>

// We will learn how to perform calcs in SQL
// Calculations performed on multiple rows of a table are called aggregates:
// COUNT() - counts no. of rows
// SUM()    - sum of the values in column 
// MAX()/ MIN()  - largest/smallest value
// AVG()    - average of values in column 
// ROUND()  - rounds values in column

// COUNT()
// ------
// counts how many apps are in the table
SELECT COUNT(*)
FROM fake_apps
WHERE price = 0;

// SUM()
// ----
SELECT SUM(downloads) // takes column name as arg
FROM fake_apps; 


// MIN()/ MAX()
// ------------
// returns most/least number of times an app has been downloaded
SELECT MIN(downloads) // takes column name as arg
FROM fake_apps; 


// AVG()
// -----
SELECT AVG(downloads) // takes column name as arg
FROM fake_apps;


// ROUND()
// -----
// By default, SQL tries to be as precise as possible without rounding
// but we can make the result table easier to read by rounding
SELECT ROUND(price, 0) // arg1: column name arg2: integer indicating no. of decimal place
FROM fake_apps; 

// rounds the average price to 2dp: 
SELECT ROUND( AVG(price), 2)
FROM fake_apps; 

// GROUP BY I 
// ----------
// to calculate an aggregate for data with certain characteristics
// Eg mean IMDb ratings for all movies each year: 

SELECT AVG(imdb_rating)
FROM movies; 
WHERE year = 1990

SELECT AVG(imdb_rating)
FROM movies; 
WHERE year = 1990

SELECT AVG(imdb_rating)
FROM movies; 
WHERE year = 1990

// OR

// 100 years of romantic film 
SELECT year, AVG(imdb_rating)
FROM movies
WHERE genre = 'romance'
GROUP BY year
ORDER BY year; 
LIMIT 100;

// GROUP BY arranges identical data into groups 
// in essence, it splits up the data by price, or genre, or whatever - showing one row for each GROUP. 
// GROUP BY comes after WHERE but before ORDER BY or LIMIT

// one column lists the no. of apps at what price (downloaded more than 20,000 times) 
SELECT price, COUNT(*)
FROM fake_apps
WHERE downloads > 20000
GROUP BY price; 


// GROUP BY II
// -----------
// Sometimes we want to GROUP BY a calculation done on a column 
// 
// Eg we might want to know how many movies have IMDb ratings that round to 1,2,3,4,5:
// Although this query time-consuming & prone to error... 

SELECT ROUND(imdb_rating), COUNT(name)  // results have two columns. The imdb_ratings rounded, and how many titles of each.
FROM movies                 
GROUP BY ROUND(imdb_rating)            // grouped by rounded rating
ORDER BY ROUND(imdb_rating);           // in numerical order

// OR

SELECT ROUND(imdb_rating), COUNT(name)
FROM movies
GROUP BY 1
ORDER BY 1;

// SQL lets us use column reference(s) in our GROUP BY 
// 1 is first column selected (ROUND(imdb_ratings))
// 2 is second column selected
// 3 is third column selected ... and so on ...


// Second Eg:

SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;

// OR

SELECT category, price, AVG(downloads)
FROM fake_apps
GROUP BY 1, 2; // groups first by category. Then groups in subgroups by price. 

// -----------------------------------

// HAVING to filter which groups to include / exclude
// Eg maybe want to see how many movies of diff genres produced each yr - but only care about years and genres with at least 10 movies
// WHERE filters rows but we want to filter groups
// HAVING is similar to WHERE - all clauses used with WHERE can be used with HAVING (Eg COUNT())
SELECT year,
   genre,
   COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;

// Order: 
GROUP BY 
HAVING
ORDER BY 
LIMIT

// -----------------------------------

// REVIEW
// ------
// We learned how to use aggregate functions to perform calcs on columns of data. 
COUNT()
SUM()
ROUND()
MIN(), MAX()
AVG()

GROUP BY // either column or an aggregate function of a column or column reference / clause used with aggregate functions to combine data from one or more columns.
HAVING // limits results by filtering groups, not rows
