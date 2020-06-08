/** CodeAcademy tutorial - HTML Intro to Forms >>
 * 
 * A HTML >form< element collects info to send elsewhere
 * Eg typing into a text field like Google search
 * 
 * How a form works:
 * Recap: Internet is a network of computers which send and received info
 * Client sends HTTP requests which instruct receiving servers how to handle the info.
 * 
 * Skeleton for a <form> to send info to example.html as POST request: 
 * (Needs target location and type of HTTP request)
 * Can contain child elements, such as a header <h1> and paragraphs <p>
 */

<form action="/example.html" method="POST">
  <h1>Creating a form</h1>
  <p>Looks like you want to learn how to create an HTML form.</p>
</form>

// --------------

// Text Input >> 

// <input> element
//  
// 'type' attribute determines how it renders and what data it accepts:
// E.g: <input type="text"> renders a text field users can type into 
// 
// 'name' attribute (otherwise <input> data won't send when <form> submitted)

<form action="/example.html" method="POST">
  <input type="text" name="first-text-field">
   </input> 
</form>

// 'value' attribute becomes what is typed into the text field 
// This is paired with the value of 'name' attribute and send as text when form submitted 
// If user typed "burger" in the generated text field, "first-text-field=burger" sends to /example.html

// Can assign a default 'value' so users have a pre-filled text field when they first see the form: 

<form action="/example.html" method="POST">
  <input type="text" name="first-text-field" value="already pre-filled"> </input>
</form> 

// --------------

// Adding a Label >> 

// To identify an <input> we use <label> element 
// <label> has opening & closing tag, displays text in-between
// <label> 'for' attribute links to  <input> 'id' attribute:

<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input type="text" name="food" id="meal"> 
</form>


(</input> </br>)
// --------------

// Password Input >>

// <input> has a type="password" attribute 
// This replaces(obscures) input text with another character (*) or (•)

<form>
  <label for="user-password">Password: </label>
  <input type="password" id="user-password" name="user-password">
</form> 

(</input>)
// --------------

// Number & Range Input >>

// <input type="number" step="1">

// 'step' attribute creates arrows inside the input field to increase/decrease in increments
// defined by value of the 'step' attribute

// type="range" creates a slider (to limit the range of input)
// Define min max attribute values 
// Define smoothness of slider by step attribute value (smaller increments = smoother)

<form>
  <label for="volume"> Volume Control</label>
  <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>

(</input>
// --------------

// Checkbox Input >>

// <input type="checkbox">  
// multiple options and multiple choices  
// 'value' attribute is required as the label is not visible in <input> 
// 'name' attribute is used to group checkboxes together

form>
  <p>Choose your pizza toppings:</p>
  <label for="cheese">Extra cheese</label>
  <input id="cheese" name="topping" type="checkbox" value="cheese">
  <br>
  <label for="pepperoni">Pepperoni</label>
  <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
  <br>
  <label for="anchovy">Anchovy</label>
  <input id="anchovy" name="topping" type="checkbox" value="anchovy">
</form>

(</input></br></input></br>)
// --------------

// Radio Button Input >>

// checkbox with one choice (you click one OR one of the others)

<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <br>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>

(</input></br></input>)
// --------------

// Dropdown list (one choice)>>

// <select> element creates a dropdown list
// Add <option> elements, with 'value' attributes
//      - Although text between tags renders, the 'value' is sent in <form> submission
//      - as the <input> field infomation: <select> name = <input> value
//      - Eg If 'Pizza' selected, info sent is "lunch=pizza"
//      - Note diff in text and 'value' capitalisation


<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>


// --------------

// Datalist Input >>

// <datalist> element is used with <input type="text"> element
// <input> creates a text field that users can type into and filter options from the <datalist> 
// It 'restricts' entries 
// Link <input> with 'link' attribute via <datalist> 'id' attribute (like <label>'s for...id)

<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">

  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>
</form>


(</input>)

// Difference between <select> (dropdown) and <datalist> (search dropdown)
// In <datalist> the options are just SUGGESTIONS, user can still input whatever they like. 
 
// --------------

// Textarea element >>

// <input type="text"> creates a single row input field
// For more info (eg blog post) use <textarea> which allows rows/cols attributes 

<form>
  <label for="blog">New Blog Post: </label>
  <br>
  <textarea id="blog" name="blog" rows="5" cols="30">
    Default text 
  </textarea>
</form>

(</input>)

// When submitted, the value of <textarea> is the text written inside the box.
// Default text can be included within tags, will render as pre-filled. 

// --------------

// Submit Button to submit Form >>

// Use <input> element with type="submit"
// Note 'value' shows up as TEXT on the button (if no value, default is 'Submit')

<form>
  <input type="submit" value="Send">
</form>

(</input>)
// --------------

/** Review >> 
 * 
 * <form> allows users to input info and send it 
 *      - 'action' attribute determines where info goes
 *      - 'method' attribute determines request type (eg POST)
 * <input> adds a single row field for user input
 *      - type='text'
 *        'list' attribute pairs with a <datalist> of options if <datalist>'s 'id' == <input>'s 'list')
 *      - type='password' (censors text input)
 *      - type='number'
 *      - type='range' (slider to select from range of numbers)
 *      - type='checkbox'
 *      - type='radio'
 *      - type='submit' (submit button)
 * <select> renders a dropdown list of <option>s
 * <datalist> works with <input> to search through choices of defined <options> 
 * <textarea> is a text input fiel with customizable area (cols/rows="")
 * 
 * When a form is submitted, the 'name' of <input> fields 
 * and 'value' of those fields are sent as name-value pairs 
 * 
 * --------------
 * 
 */







