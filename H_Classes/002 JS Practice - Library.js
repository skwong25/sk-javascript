// << BUILD A LIBRARY >>

/*  We will be:
  - creating a parent class 'Media'
  - with 3 subclasses: Book, Movie and CD with the following properties: 

  BOOK: 
  Properties: author (string), title (string), pages (no.), isCheckedOut (boolean, initially false), ratings (array, initially empty)
  Own Properties: author (string), pages (no.)
  Getters: all properties have a getter
  Methods: .getAverageRating(), .toggleCheckOutStatus() and .addRating() 

  MOVIE:
  Properties: director (string), title (string), runTime (no.), isCheckedOut(boolean, intially false), ratings (array, initially empty)
  Own Properties: director (string), runTime (no.)
  Getters: all properties have a getter
  Methods: .getAverageRating(), .toggleCheckOutStatus() and .addRating() 

  CD:
  Properties: artist (string), title (string), isCheckedOut(boolean, intially false), ratings (array, initially empty), songs (array of strings)
  Own Properties: artist (string), songs (array of strings)
  Getters: all properties have a getter
  Methods: .getAverageRating(), .toggleCheckOutStatus() and .addRating() 

  Parent Class 
  Properties: title, isCheckedOut(boolean), ratings
  Methods: Getter for the above 3 properties, .getAverageRating(), .toggleCheckOutStatus() and .addRating() 

*/

class Media {
  constructor (title) {
    this._title = title;
    this.isCheckedOut = false;
    this.ratings = [];
  }

  get getTitle() {
    return this._title;
  }

  get isItCheckedOut() {
    return this.isCheckedOut;
  }

  get getRatings() {
    return this.ratings;
  }

  get getAverageRating() {
    let ratings = this.getRatings;
    let average = ratings.reduce((total, currentValue, index) => {
      total += currentValue;
      if (index === ratings.length - 1) {return total / ratings.length 
      } else {return total}; 
    },0) 
    return (Math.round(average*10))/10; // round to 1dp
  }

  toggleCheckedOutStatus() {
    this.isItCheckedOut? this.isCheckedOut = false : this.isCheckedOut = true ;
  } // ternary operator evaluates for a truthy
 
  set addRating (rating) {
    if (typeof rating === 'number' && rating >= 1 && rating <= 10) {
    this.ratings.push(rating)
    } else {console.log("please enter a valid number")}
  } // Ensures input is between 1 and 5
  
}

const newspaper = new Media ('Daily Mail')

/* TESTING - check that the superclass 'Media' works 

console.log(newspaper); // Output: Media { _title: 'Daily Mail', isCheckedOut: false, ratings: [] }
console.log(newspaper.getTitle); // Getter Output: Daily Mail
console.log(newspaper.isItCheckedOut); // Getter Output: false
newspaper.toggleCheckedOutStatus(); 
console.log(newspaper.isItCheckedOut); // Getter Output: true
newspaper.addRating = 5; 
newspaper.addRating = 9.5; 
newspaper.addRating = 6; 
console.log(newspaper.getRatings); // Getter Output: [ 5, 9.5, 6 ]
console.log(newspaper.getAverageRating); // Output: 6.8

// LESSON! Remember to call methods with () unless it's a getter / setter */

// Creation of a subclass: 

class Book extends Media {
  constructor (name, author, pages) {
    super (name) // super calls the parent's constructor and passes the name argument 
    this._author = author;
    this._numberPages = pages;
  }

    get getAuthor () {
      if (this._author.length > 0) {return this._author
      } else { return "Information Unavailable";  
      }
    }

    get getNumberPages () {
      if (this._numberPages) {return this._numberPages
      } else { return "Information Unavailable"; 
      }
    }
}
 
const book01 = new Book ('Shantaram', 'A.Binks', 569 ) 

// Creates new Object instance using the Book subclass, saved to Book01 variable

/* TESTING - check that the superclass 'Book' works 

console.log(book01.getTitle); // Getter Output: Shantaram
console.log(book01.isItCheckedOut); // Getter Output: false
book01.toggleCheckedOutStatus(); 
console.log(book01.isItCheckedOut); // Getter Output: true
book01.addRating = 5
book01.addRating = 9.5; 
book01.addRating = 6; 
console.log(book01.getRatings); // Getter Output: [ 5, 9.5, 6 ]
console.log(book01.getAverageRating); // Output: 6.8
console.log(book01.getAuthor); // Getter Output: [ 5, 9.5, 6 ]
console.log(book01.getNumberPages); // Output: 6.8

// Practicing DESTRUCTURING TECHNIQUES (destructured assignment & destructuring detault values)

const { getRatings: scores, getAverageRating: rating } = book01; 
// Destructured assignment extracts multiple properties to respective variables of different naming; 
console.log(`Scores: ${scores}, Average Score: ${rating}`);
//  Note that if the property does not exist, the variable will be created but returns 'undefined' 
//  In that case we can set a fallback (default) value: 
let { cover = 'hardback' } = book01;
console.log(cover); */

class Movie extends Media {
  constructor (name, director, runtime) {
    super (name) // super calls the parent's constructor and passes the name argument 
    this._director = director;
    this._runTime = runtime;
  }

    get getDirector () {
      if (this._director.length > 0) {return this._director
      } else { return "Information Unavailable";  
      }
    }

    get getRunTime () {
      if (this._runTime) {return this._runTime
      } else { return "Information Unavailable"; 
      }
    }
}
 
class CD extends Media {
  constructor (name, artist, songs) {
    super (name) // super calls the parent's constructor and passes the name argument 
    this._artist = artist;
    this._songs = songs; 
  }

    get getArtist () {
      if (this._artist.length > 0) {return this._artist
      } else { return "Information Unavailable";  
      }
    }

    get getSongs () {
      if (this._songs.length > 0) {return this._songs
      } else { return "Information Unavailable"; 
      }
    }

    shuffle () {
    // console.log(cd01.getSongs);
    let copyPlaylist = this.getSongs;
    let y = copyPlaylist.length
    let newPlaylist = [];
    for (let i = 0; i < y; i++) {
      let x = Math.floor(Math.random() * copyPlaylist.length);
      // console.log("Random Index: " + x)
      newPlaylist.push(" " + copyPlaylist[x]); // adds song to new playlist 
      copyPlaylist.splice(x,1); // removes song from available songs to choose from next iteration
      // console.log(copyPlaylist) // This should reduce by 1 every iteration 
    } return newPlaylist;
  }
}

const movie01 = new Movie ('The Swan Princess', 'Derek', 102 ) 
const cd01 = new CD ('Fearless', 'Taytay', ['Track1', 'Track2', 'Track3','Track4', 'Track5','Track6', 'Track7']) 



// EXTRA PRACTICE: 

// 01 
// Create a method called shuffle for the CD class. 
// The method returns a randomly sorted array of all the songs in the songs property.

shufflePlaylist = cd01.shuffle();
console.log("Shuffle order: " + shufflePlaylist);

/* Output:

['Track1', 'Track2', 'Track3', 'Track4', 'Track5', 'Track6', 'Track7']
Random Index: 3
[ 'Track1', 'Track2', 'Track3', 'Track5', 'Track6', 'Track7' ]
Random Index: 2
[ 'Track1', 'Track2', 'Track5', 'Track6', 'Track7' ]
Random Index: 0
[ 'Track2', 'Track5', 'Track6', 'Track7' ]
Random Index: 2
[ 'Track2', 'Track5', 'Track7' ]
Random Index: 1
[ 'Track2', 'Track7' ]
Random Index: 0
[ 'Track7' ]
Random Index: 0
[] 
Shuffle order:  Track4, Track3, Track1, Track6, Track5, Track2, Track7 */

// We used .push() method because it is Mutating
// Note that it mutates the array it pushes INTO, not the array it is pushing FROM 
// So we also used .splice() to 'remove' the element from the original array also

// 02
// Create class called Catalog that holds all of the Media items in our library.

// LESSON RE. ROUNDING:
// Math.floor rounds down to nearest integer
// Math.round rounds up or down depending on which side of 0.5 its on
// Note when generating random numbers Math.floor has a more even distribution








