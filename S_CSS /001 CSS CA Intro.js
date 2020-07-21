// << CSS Styling >>
https://www.codecademy.com/learn/learn-css/modules/learn-css-selectors-visual-rules/cheatsheet

//---------------------
// Inline styling 
//---------------------

<p style="color: red;">I'm learning to code!</p>
// add style attribute directly to opening tag, set equal to CSS style:

// To inline style, eg multiple <h1> elements, you would have to add and maintain each element manually.
// CSS can ALSO be written between <style> tags, inside of the <head> element.
// Here you can specify which elements to apply the styling to. 

<head>
  <style>
    p {
      color: red;       // changes color of all paragraph text to red 
      font-size: 20px;  // changes size of the text to 20 pixels. 
    }
  </style>
</head>

// Note to render tags: &lt;h1&gt; renders <h1>

//---------------------
// Link HTML and CSS file with a <link/> element in the head:
//---------------------

<head>
<link href="https://www.codecademy.com/stylesheets/style.css" type="text/css" rel="stylesheet"></link>
</head>

//---------------------
// Select HTML by Tag and Class Names:
//---------------------

// To style, we write a CSS declaration inside a CSS selector
// The CSS selector for selecting all <p> tag elements is:
p {
    font-family: Arial;   
}

// The CSS selector for selecting HTML elements with class "brand" is:
<p class="brand">Sole Shoe Company</p>

.brand {
    color: teal;
}

// Mix n match styles: HTML elements can have >1 class:
<h1 class="uppercase bold"> ... </h1> // would be selected by both

.uppercase {
  text-transform: uppercase;
}

// and

.bold {
  font-weight: bold;
}


//---------------------
// Unique Styling - Select HMTL by ID: 
//---------------------

<h1 id="article-title"> ... </h1> // Element has ID attribute

// CSS selects HTML element by ID:
#article-title {
  font-family: cursive;
  text-transform: capitalize;
}
// ID styling overides tag and class styling.


//---------------------
// Specificity 
//---------------------
// Best practice - use the lowest degree. This makes overrides easy. 
// Tag > Class > ID


//---------------------
// Chaining Selectors 
//---------------------
// Combine multiple selectors when we require an HTML element to have more.
h1.special {

} 
// Only selects h1 elements with a class of "special"


//---------------------
// Nested Elements
//---------------------
// CSS also supports chaining selectors to select NESTED HTML elements. 

.main-list li {
  list-style: square;
}

// selects: 

<ul class='main-list'>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>

//---------------------
// !important overides all
//---------------------
// only use when an element appears the same way 100% of the time:

p {
  color: blue !important;
}

//---------------------
// Multiple Selectors
//---------------------

h1 {
  font-family: Georgia;
}

.menu {
  font-family: Georgia;
}

// instead of the above, do: 

h1, 
.menu {
  font-family: Georgia;
}

// Attributes: font type, font size, font-weight, text alignmt, background & foreground color, opacity 
// Add: a background image

p {
  font-family: "New Times Roman";
  font-size: 18px;
  font-weight: bold;
  text-align: right; // defaults to left hand side of the browser - aligns to it's parent element (left/center/right)
  color: red;
  background-color: blue;
  opacity: 0.5; // 0-1 (100% = fully opaque)
  background-image: url("https://www.example.com/image.jpg");
}

//---------------------
// Box Model
//---------------------
https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-4/diagram-boxmodel.svg

// Comprises the set of properties which define parts of an element that takes up space on a web page:
/*
Dims: Width and height — specifies the width and height of the content area.
      px pixels allow you to set the exact size, on all devices. 

Padding — specifies the amount of space between the content area and the border.

Border — specifies the thickness and style of the border surrounding the content area and padding.
        width - thin, medium, thick
        style - web browsers can render any of 10 diff styles: 
        https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values
        color - 140 built-in color keywords:
        https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
        Default border is 'medium none color' (color of existing element)
        Modify corners of an element with border-radius:

Margin — specifies the amount of space between the border and the outside edge of the element.
*/

p {
  height: 80px;
  width: 240px; // can also be percentage, eg 100%
}

div.container {
  border: 3px solid rgb(22, 77, 100);
  border-radius: 5px;
}

// create a border that is a perfect circle by setting the radius equal to the height of the box, or to 100%:

div.container {
  height: 60px;
  width: 60px;
  border: 3px solid rgb(22, 77, 100);
  border-radius: 100%;
}


//---------------------
// Padding property - stop cramping my style:
//---------------------

p.content-header {
  border: 3px solid coral;
  padding: 10px;
}

// Be specific with following properties: 
padding-top
padding-right
padding-bottom
padding-left

// OR specify padding on each side of content in a single declaration:
p.content-header {
  border: 3px solid grey;
  padding: 6px 11px 4px 9px; // top right bottom left
}

// if top/bottom and left/right are equal:
p.content-header {
  padding: 5px 10px;
}


//---------------------
// Margins - the space directly outside of the box
//---------------------

p {
  border: 1px solid aquamarine;
  margin: 20px;
}

// Be specific with the following properties:
margin-top
margin-right
margin-bottom
margin-left

// OR specify padding on each side of content in a single declaration:
p {
  margin: 6px 10px 5px 12px;
}

// if top/bottom and left/right are equal:
p {
  margin: 6px 12px;
}

// Centreing:
div.headline {
  width: 400px;
  margin: 0 auto; // 0 for top and bottom auto centres within the width of that element
}

// Note margins collapse (overlap), not add.


//---------------------
// Min Max Width Height
//---------------------

p {
  min-width: 300px;
  max-width: 600px;
}


//---------------------
// Overflow 
//---------------------
/* an image that has the following dimensions is 364 pixels wide and 244 pixels tall.

    300 pixels wide
    200 pixels tall
    10 pixels padding on the left and right
    10 pixels padding on the top and bottom
    2 pixels border on the left and right
    2 pixels border on the top and bottom
    20 pixels margin on the left and right
    10 pixels margin on the top and bottom

The total dimensions (364px by 244px) are calculated by adding all of the vertical & horizontal dimensions together. 
*/

p {
  overflow: scroll; // hidden, visible
}

//---------------------
// Resetting Defaults
//---------------------

// All major web browsers ave default stylesheets called 'user agent stylesheets'.
// Defaults CSS rules set default values for padding / margin. Devs choose to rest to work with blank slate:
// Often the first CSS rule in an external stylesheet:
* {
  margin: 0; // note, no unit of measurement required
  padding: 0;
}

//---------------------
// Visibility - hidden or visible
//---------------------

<ul>
  <li>Explore</li>
  <li>Connect</li>
  <li class="future">Donate</li>
</ul>

.future {
  visibility: hidden;
}

// The list item with a class of 'future' will be hidden from view in the browser
display: none // element completely removed from web page
visibility: hidden // contents not visible, but space reserved for it remains visible 


//---------------------
// Why Change the Box Model?
//---------------------

box-sizing: content-box //default - same box model affected by border thickness + padding
// but we can reset the entire box and define a new one:
* { 
  box-sizing: border-box;
} // the universal selector * resets the border box for all HTML elements on the web page

h1 {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  padding: 10px;
}

// the height of the box would remain at 200 pixels and the width would remain at 300 pixels. 
// The border thickness and padding would remain entirely inside of the box.
// netto - everything inside! overall dims don't change. 