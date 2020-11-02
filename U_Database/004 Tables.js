// << Multiple Tables>>

// We will learn SQL commands to help up work with data stored in multiple tables: 

// Info is often spread across multiple tables
// Imagine a magazine company where users have diff types of subscriptions to diff products
// Diff subscriptions could have diff properties
// Each customer would also have associated info which might be repeated across tables - making tables big and unmanageable

// Instead we can split info into three tables:
// orders
//    order_id, customer_id, subscription_id, purchase_date
// subscriptions
//    subscription_id, description, price_per_month, subscription_length
// customers
//    customer_id, customer_name, address

// joining information across tables is called matching
// Combining manually is time-consuming so we use SQL's JOIN

SELECT * 
FROM orders                 // specifies the first table we want to look in 
JOIN customers             // JOIN says we want to combine information from 'orders' with 'customers'
  ON order.customer_id =  // we want to match orders' customer_id column from 'orders'  with customers' customer_id column 
customers.customer_id;   // syntax <table_name.column_name> 

SELECT orders.order_id,       // Eg: if we only wanted to select certain columns, use following query:
   customers.customer_name
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;


// ---------------------------------------------------------
//  Practice Exercise:

// useful to display the tables first: 
SELECT *
FROM orders
LIMIT 10;

SELECT *
FROM subscriptions
LIMIT 10;

// Join orders table and subscriptions table and select all columns.
// Make sure to join on the subscription_id column (which they have in common)
SELECT * 
FROM orders
JOIN subscriptions
  ON orders.subscription_id = 
subscriptions.subscription_id;

// Selects rows from the join where description is equal to ‘Fashion Magazine’.
// Note WHERE goes after JOIN 
SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = 
subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

// ---------------------------------------------------------
// INNER JOINS

// A simple JOIN (inner join) only includes rows that match the ON condition
// If data in one table is out-of-date, that entire column won't be joined. 
// Only the columns that match completely will be joined.

/* 
The Codecademy Times has newspaper & online subscriptions.
Find the no. of subscribers by joining the two tables: 
*/

SELECT COUNT(*) AS 'paper subscribers'
FROM newspaper;
// paper subscribers = 60

SELECT COUNT(*) AS 'online subscribers'
FROM online; 
// online subscribers = 60

SELECT COUNT(*) AS 'total subscribers'
FROM newspaper
JOIN online
  ON newspaper.id = online.id;
// total subscribers = 60

// ---------------------------------------------------------
// LEFT JOINS

// What if we want to combine tables and keep un-matched rows? 
// LEFT JOIN keeps all rows from first table, regardless of whether there is matching row in second 
// (gives precedence to first table - overules, not overwritten)

SELECT *
FROM table1
LEFT JOIN table2
  ON table1.c2 = table2.c2;

// If we want to know the number of users who subscribe to print only

// first we left join the online table to the newspaper 
// it literally glues the two tables together side by side (NOT merging the id columns)
SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = 
  online.id; 

// then SELECTS only rows where there was no corresponding row from the online table
SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = 
  online.id
WHERE online.id IS NULL;

// ---------------------------------------------------------
// PRIMARY KEY vs FOREIGN KEY 

// We have three tables:  orders, subscriptions, customers
// Each table has an id column that uniquely identifies each row of that table:
// order_id, subscription_id, customer_id 

// PRIMARY KEYS: 
// - values must not be NULL
// - each value must be unique 
// - a table can not have more than one primary key column 

// When a primary key for one table appears in a diff table, it's call a FOREIGN KEY
// Eg the subscription_id key might appear in the orders table
// So subcription_id is a PRIMARY key in the subscriptions table but a FOREIGN key in another
// primary keys often are just called 'id' 

// ---------------------------------------------------------
// CROSS JOIN

// Sometimes we just want to combine all rows of one table with another table
// Eg if we had 2 x tables of shirts and pants:

SELECT shirts.shirt_color,
   pants.pants_color
FROM shirts
CROSS JOIN pants; // note CROSS JOIN statements do not require ON as we're not really joining on any columns

// Common usage of CROSS JOIN is to compare each row of a table to a list of values

// ---------------------------------------------------------
// UNION

// allows us to stack two tables (if they have the same column headings) (/ add rows of data):

SELECT *
FROM table1
UNION
SELECT *
FROM table2; 

// Strict rules for appending data:
// Tables must have same no. of columns 
// Columns must have same data types in the same order as the first table
// duplicate rows are excluded 

// ---------------------------------------------------------
// WITH

// allows us to perform a seperate query (such as aggregating customer's subscription)
// for when combining 2 tables but one is a result of another calculation

WITH prev_results AS ( // prev_results is the alias that we use to reference columns from the query 
  SELECT ...
  ...
  ...
  ...
)
SELECT *
FROM previous_results
JOIN customers
 ON _____ = _____;

// Essentially putting the first query inside () and giving it a name
// After that we can use this name as if it's a table, eg:

WITH previous_query AS (
  SELECT customer_id,
     COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT customers.customer_name, 
  previous_query.subscriptions
FROM previous_query
JOIN customers
 ON previous_query.customer_id = customers.customer_id;

// --------
// REVIEW

// We learned abt:
//  - relationships between tables in relational databases
// - to query info from multiple tables using SQL

//  JOIN - combines rows from diff tables ( if join condition is true )

// LEFT JOIN - returns every row in the left table. 
// If join condition not met, NULL value fill columns from the right table

// PRIMARY KEY - serves a unique identifier column for rows in a table 
// when it appears in another table it is a FOREIGN KEY

// CROSS JOIN - combines all rows of two tables

// UNION - stack tables

// WITH - wraps queries in variable names to be used in other queries







