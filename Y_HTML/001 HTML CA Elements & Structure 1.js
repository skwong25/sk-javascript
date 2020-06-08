/** CodeAcademy tutorial - HTML (Hyper-Text Markup Language) Intro >> 
 *
 * A MARKUP language is a computer language that defines the structure and presentation of raw text
 * It allows computers to interpret RAW text wrapped in HTML elements
 * HYPERTEXT is text displayed on a device that provides access to other text via links aka hyperlinks
 * 
 * Likely, we will layer HTML with CSS and JS to create websites
 * For now, we will learn how to add/modift basic content on a page: 
 *  - headings, paragraphs, lists and spans (text elements)
 *  - images, videos 
 *
 * -------------- */

//  HTML Anatomy is composed of ELEMENTS that structure the webpage and define its content.

// --------------


// Paragraph element >> 
// opening tag - content - closing tag (note / )

<p> Hello World </p>


// --------------


// Body element >> 
// can hold text, images, buttons but only content within the body tags is displayed on-screen.
// HTML structure is organised as a collection of family tree relationships
// Child elements are nested within parent elements, may inherit behaviour/styling. 
// Heirarchy = relationship between ancestor/descendent elements 

<body>
    <p> Hello World </p> 
 </body>

// 6 diff Heading Elements: <h1> main hedings to <h6>  
// 
// Division element <div> is a container that divides the page into sections
// Can contain any text or HTML elements such as links, images, vids. Good for grouping elements!


// --------------


// Attributes >> 
// To expand an element's tag, use an ATTRIBUTE. 
// It is content added to the opening tag of an element, 2 parts: name & value. 
// Common attribute is 'id', used to identify / specify content.

<div id="intro">
  <h1>Introduction</h1>
</div>


// --------------


// Displaying Text >> 
// paragraph <p> for block of plain text 
// <span>   - Contain short pieces of text or other HTML.
//          - Use when want to target a specific piece of content that is INLINE (on same line)
//          - If content is to be divided into blocks, better to use <div>

<div>
  <p><span>Self-driving cars</span> are anticipated to replace up to 2 million jobs over the next two decades.</p>
</div>


// --------------


// Styling Text >> 
// Note when you style websites, you decide how browsers display content with tags
// Browsers have built-in style sheets that will style in following ways: 

<em> </em> 
// tag emphasizes text (italic) 

<strong> </strong>
// tag highlights important text (bold)

<p><strong>The Nile River</strong> is the <em>longest</em> river in the world, 
measuring over 6,850 kilometers long (approximately 4,260 miles).</p>


// --------------

// Line Break Element >> 
<br> </br>
// only composed of a starting tag


// --------------

// Unordered Lists >>

<ul></ul>
// unordered list tag, outlines individual LIST ITEMS with a bullet point
// does not hold raw text, won't auto format raw text into an unordered list
// Individual list items must be added using the <li> tag, used to describe an item on the list: 

<ul>
  <li>Limes</li>
  <li>Tortillas</li>
  <li>Chicken</li>
</ul>

//  --------------

// Ordered Lists >>

<ol></ol>
// Like unordered lists, except each list item is numbered. 
// Useful when we need to list diff steps in a process or rank items from 1st to last. 

<ol>
  <li>Preheat the oven to 350 degrees.</li>
  <li>Mix whole wheat flour, baking soda, and salt.</li>
  <li>Cream the butter, sugar in separate bowl.</li>
  <li>Add eggs and vanilla extract to bowl.</li>
</ol>

/* Output: 

1. Preheat the oven to 350 degrees.
2. Mix whole wheat flour, baking soda, and salt.
3. Cream the butter, sugar in separate bowl.
4. Add eggs and vanilla extract to bowl. */

//  --------------

// Adding Images >> 

<img> </img>

<img src="image-location.jpg" />

// Is a self-closing tag - note that the end of <img> has a forward slash
// Has a required attribute called 'src' 
// to be set to the image's source ie the image's URL (uniform resource locator) 

//  --------------

// Images Alts >> 
// What happens when assistive tech such as screen readers come across image tags? 

// Add the 'alt' (alternative text) attribute to the image tag with an image description: 

<img src="#" alt="A field of yellow sunflowers" />

// Following purposes:
//  - If image fails to load, user can hover mouse over and read descrip. 
//  - Visually impaired users use screen reading software that will read aloud
//  - Inform search engines for Search Engine Optimization (SEO)

//  --------------

// Videos >> 

<video> </video>

//  - requires opening and closing tag, unlike <img/> 
//  - requires 'src' attribute (src can be a video file hosted on the webpage or URL to another webpage)
//  - 'width / height' attributes set the size of the video displayed 
//  - 'controls' attribute instructs browser to invlude basic video controls: pause, play, skip

<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>

// "Video not supported" only displays if browser is unable to load the video 

//  --------------

// Review >> 

// HTML (Hyper Text Markup Language) is used to create the structure & content of webpages
// Most HTML elements consist of opening and closing tags, containing raw text or nested HTML child elements 
// Visible content should be placed within <body> tags 
// Headings and sub-headings: <h1> to <h6> used to enlarge text
// <p> <span> <div> used to specify text or blocks
// <em> <strong> used to emphasize text
// Line break breated with <br>
// Ordered list <ol> are numbered, unordered lists <ul> are bulleted
// Images (<img>) and videos (<video>) added by linking to existing source 