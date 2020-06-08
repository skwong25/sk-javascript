/** CodeAcademy tutorial - Semantic HTML  >>
 * 
 * Looking at the semantic elements that assist in the structure of a web page  
 */

// Header and Nav >> 
// used INSTEAD of <div>
// <header> is a container for navigational links or introductory content 
// containing <h1> to <h6> headings:

<header>
  <h1>
     Everything you need to know about pizza!
  </h1>
</header>

// The below code uses <div> tag instead of <header> tag
//  <header> tag makes code easier to read

<div id="header">
  <h1>
    Everything you need to know about pizza!
  </h1>
</div>

// <nav> tag defines a block of navigation links such as menus and tables of content
// <nav> can be used instead of <header> element but also on its own, eg:
// again, just eases reading code. 

<header> 
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>      
    </ul>
  </nav>
</header>

// --------------

// Main and Footer >>
// used INSTEAD of <div>
// Two more structural elements: <main> <footer> 
// Help describe where an element is located

// <main> is used to encapsulate dominant content within a webpage
// <main> is seperate from <footer> and <nav> of a web page (non-principal content)
// Allows screen readers/web browsers to better identify where is the main content

<main>
  <header>
    <h1>Types of Sports</h1>
  </header>
  <article>
    <h3>Baseball</h3>
    <p>
      The first game of baseball was played in Cooperstown, New York in the summer of 1839.
    </p>
  </article>
</main>

// <footer> element
// Seperate from <main> element, contains:
// - contact info
// - copyright info
// - terms of use
// - site map
// - ref to top of page links. Eg:

<footer>
  <p>Email me at Codey@Codecademy.com</p>
</footer>


// --------------

// Article & Section >>

// <section> defines elements in a doc, such as chapters, headings.
// A website's home page could be split into sections for the intro, news items and contact info 

// <article> holds content that makes sense on its own 
// content such as articles, blogs, comments, magazines 

// --------------

// Aside Element >>

// <aside> is used to mark additional info that can enhance another element 
// but isn't required to understand the main content (eg Bibliographies, Endnotes)
// can be used alongside <article> or <section> 

// --------------

// Figure & Figcaption >>

// If we want to add an image/illustration:
// <figure> element used to encapsulate media referenced in the main flow of the doc:
// <figcaption> can add a caption to the image

<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>

(</img>)
// --------------

// Audio & Attributes >>

// <audio> element is used to embed audio content 
// <source> tag: 
//      - 'src' specifies URL 
//      - 'type' attribute helps browsers identify easily and determine if supported 
// 'controls' attribute auto displays the audio controls (eg play and mute) 
// 'autoplay' attribute adds autoplay functionality

// Below, the text will only show if browser cannot display video. 

<audio>
  <source src="iAmAnAudioFile.mp3" type="audio/mp3">
    Video not supported
</audio>

(</img>)
// --------------

// Video & Embed >>
//
// <video> element
// 'controls' attribute adds play/pause button, volume control, fullscreen option
// 'autoplay' attribute results in vid auto-playing as soon as page loads
// 'loop' attribute results in vid playing on repeat
// 
// <embed> element can embed any media incl. video, audio, files and gifs from ext. source
// websites with an embed button have some form of media that can be added to other websites
// <embed> is a self-closing tag, whereas <video> is not
// <embed> can add local files as well as media content straight from other websites

<video src="coding.mp4" controls>Video not supported</video>

<embed src="download.gif"/>

// --------------

// Review of Semantic HTML >>
// 
// Semantic HTML introduces meaning, provides content to what is between tags
//  - is a modern and accessible standard (for screen readers eg)
//  - <header>, <nav> , <main> and <footer> creates basic structure of a webpage
//  - <section> defines elements in a docsuch as chapters/headings
//  - <article> holds content that makes sense on its own
//  - <aside> is auxillary info
//  - <figure> encapsulates all types of media, <figcaption> can caption it
//  - <video>, <embed> and <audio> are for media files





