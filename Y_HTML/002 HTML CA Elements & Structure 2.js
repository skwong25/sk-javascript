/** CodeAcademy tutorial - HTML (Hyper-Text Markup Language) II >>
 * 
 * In previous chapter, we covered most of the common HTML elements
 * Now we will learn how to set up a HTML file: 
 *    - declare to browser that code is HTML via <!DOCTYPE html>
 *    - add <HTML> element to contain rest of code  
 *    - <head> contains metadata incl. <title>
*/


// --------------


// Document Types Declaration >>
// is an instruction, must be first line of code in the HTML doc
// Informs web browsers to expect HTML type doc and version ( assumes current version HTML5 ) 
// HTML code is always saved in file with .html extension
<!DOCTYPE html>

// To create HTML structure & content, add opening & closing <html> tags after declaration
// Anything between the <html> tags will be interpreted as HTML code.
<html></html>

// --------------


// The Head element  >>
// contains the METADATA for a webpage (ie info about the page itself, not displayed)
<head> </head>

// Such as <title>:
//         A Browser's tab displays the title specified in <title>, always inside the <head> 

<!DOCTYPE html>
<html>
  <head>
    <title>My Coding Journal</title>
  </head>
</html> 

// --------------

// Linking to Other Web Pages Hyperlinks>> 
// Add links by adding ANCHOR element <a> incl. 'href' (hyperlink reference) attribute 
// href is used to link to a PATH or address where the file is located, often a URL 

<a>This Is A Link To Wikipedia</a>
<a href="https://www.wikipedia.org/">This Is A Link To Wikipedia</a>


// --------------

// Opening Links in a New Window >> 
// via <a> element's 'target' attribute, added directly to opening tag of anchor element like href  
// It requires a value of "_blank" for link to open in new window (tab)

<a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">The Brown Bear</a>


// --------------

// Linking to Relative Page >> 
// Linking to INTERNAL web pages like 'Home', 'About', 'Contact'
// First establish where files are stored - often store in a ROOT DIRECTORY (main folder) 
// Eg: 3 files in one folder allows us to link web pages together using a RELATIVE PATH: 

project-folder/
|—— about.html
|—— contact.html
|—— index.html

<a href="./contact.html">Contact</a> // './' tells browser to look in current folder 

// A relative path is a filename that shows local file path (file on same website
// vs. absolute path (full URL like https://... ) which is stored in a diff folder)


// --------------

// Linking at Will >>
// Turn any element (eg images) into linkS by wrapping in an anchor element 

<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank">
  <img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>
 

// --------------

// Linking to Same Page >>
// In order to link to a TARGET on the same page, we must give the target an 'id'
// An id can be added to most elements on a webpage, should be descriptive.
// Corresponding target link is a string of # + target element's id 

<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>

<ol>
  <li><a href="#top">Top</a></li>
  <li><a href="#bottom">Bottom</a></li>
</ol>
 

// --------------

// Whitespace and Indentation >>
// As code in HTML increases, becomes difficult to keep track of how elements are related
// Use two tools to visualise relationship between elements: whitespace & indentation

<body><p>Paragraph 1</p><p>Paragraph 2</p></body>

//  can be rewritten as: 

<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</body>

// note browser renders both as: 

Paragraph 1
Paragraph 2

// --------------

// Comments >>
// Comments being with <!-- and end with --> 
<!-- This is a comment that the browser will not display. -->


// --------------

// Review >> 
// Full list of tags here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
// <!DOCTYPE html> declaration should be first line of HTML file
// <html> element will contain all HTML code
// <head> element contains metadata, including <title> element, to appear in browser's tab
// <a> anchor tags link to internal, external or points on same page, by adding id's 
// whitespace, indentation (2 spaces) and <!-- comments --> aid readibility 









