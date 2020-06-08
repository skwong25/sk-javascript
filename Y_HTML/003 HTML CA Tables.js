/** CodeAcademy tutorial - HTML Tables >>
 * 
*/

// Create a Table element>> 
// We will create rows, columns & cells that hold data 

<table> </table>

// Add rows using table row element <tr> 

// Each cell element must also be defined in HTML. Add data using table data element <td> 
// Two data points are entered below in one row that exists. We create two cells of data.
// If below table displayed in browser, would show a table with one row and two columns.

<table> 
  <tr> 
    <td>73</td>
    <td>81</td>
  </tr>
  <tr> 
  </tr>
</table>

// --------------

// Table Headings >> 
// To add titles to rows and columns, use table heading element <th> 
// Use like <td> element except with a title, must be placed in a row.
// Note the scope attribute, defines its a heading for eithers 'row' or 'col'  

<table>
  <tr>
    <th></th>
    <th scope="col">Saturday</th>
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Temperature</th>
    <td>73</td>
    <td>81</td>
  </tr>
</table>

// --------------

// Table Borders >> 
// In older HTML, now-deprecated border attribute set to an 'border thickness' integer:

<table border="1">
  <tr>
    <td>73</td>
    <td>81</td>
  </tr>
</table>

// Use CSS to add style to HTML docs, seperating the page structure from how it looks
// Same border effect achieved by CSS: 

table, td {
    border: 1px solid black;
  }

// --------------

// Spanning Rows & Columns in <td> tag >>

// 'colspan' 'attribute accepts an integer (>=1) to denote no. columns it spans across 
// 'rowspan' attribtue accepts an  integer (>=1) to denote no. rows it spans across 

<table>
  <tr> <!-- Row 1 -->
    <th></th>
    <th>Saturday</th>
    <th>Sunday</th>
  </tr>
  <tr> <!-- Row 2 -->
    <th>Morning</th>
    <td rowspan="2">Work</td>
    <td rowspan="3">Relax</td>
  </tr>
  <tr> <!-- Row 3 -->
    <th>Afternoon</th>
    <td colspan="2">Out of Town</td>
    <td>Back in Town</td>
  </tr>
  <tr> <!-- Row 4 -->
    <th>Evening</th>
    <td>Dinner</td>
  </tr>
</table>

// --------------

// Table Body >> 3 parts

// Long tables can be sectioned off via the table body element <tbody> 
// This should contain all of the table's data, excluding table headings. 
// Table COLUMN headings should be contained with <thead> (still require row <tr>)
// Additionally 'scope' attribute on <th> indicates if its a "row" heading or a "col" heading
//  Bottom part of a long table can also be sectioned off using <tfoot> element 

<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Morning</th>
      <td rowspan="2">Work</td>
      <td rowspan="3">Relax</td>
    </tr>
    <tr>
     <th scope="row">Afternoon</th>
    </tr>
    <tr>
      <th scope="row">Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
  <tfoot>
    <td></td>
    <td></td>
  </tfoot>
</table>

// --------------

// Styling with CSS >>
// Example of style.css file: 

body {
  background: #EEE;
  margin: 0;
  padding: 0;
}

/* Navigation */

.navigation {
  box-sizing: border-box;
  background-color: #3587A4;
  overflow: auto;
  padding: 18px 50px;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 999;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  color: #FFF;
  display: inline-block;
  font-family: 'Oxygen', sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2px;
  margin: 0;
  padding: 20px 18px 10px 18px;
  text-transform: uppercase;
}

.active {
  color: #88CCF1;
}

/* Table */

table {
  height: 40%;
  left: 10%;
  margin: 20px auto;
  overflow-y: scroll;
  position: static;
  width: 80%;
}

thead th {
  background: #88CCF1;
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
  text-transform: uppercase;
}

tr {
  background: #f4f7f8;
  border-bottom: 1px solid #FFF;
  margin-bottom: 5px;
}

th, td {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 18px;
  padding: 20px;
  text-align: left;
  width: 33.3333%;
}

.search {
  background-color: #FFF;
  border: 1px solid #DDD;
  border-radius: 3px;
  color: #AAA;
  padding: 20px;
  margin: 50px auto 0px auto;
  width: 77%;
}

// --------------

/**  Review >>
 * 
 * <table> element creates a table
 * <tr> element adds rows
 * <td> adds data to rows (creates cells)
 * <th> creates cells that are table headings
 * rowspan or colspan=">=1" attribute spans rows & columns
 * Tables can be split into a head <thead> , body <tbody> and a footer <tfoot> 
 * Tables can be styled using CSS. 
  */

// --------------

