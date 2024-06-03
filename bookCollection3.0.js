// Iterable iterator implementation using generator class.

class Book {
    constructor (bookName, author){
        this.bookName = bookName,
        this.author = author
        this.next = null
    }
}

let myBookCollection = {
    books: null,
    currentBook: null,
    addNewBook(bookName,author){
        let newBook = new Book(bookName, author)
        if (this.books == null){
            this.books = newBook
        }
        else{
            let current = this.books
            while(current.next != null)
                current = current.next
            current.next = newBook
        }
    },
    [Symbol.iterator]: function * () { // iterable protocol implements a generator function
        this.currentBook = this.books
        for(; this.currentBook != null;){
            let book = `${this.currentBook.bookName},  ${this.currentBook.author}`
            this.currentBook = this.currentBook.next
            yield book
        }
    },
}

// Test code 
myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")

// Get hold of the generator object
let booksIter = myBookCollection[Symbol.iterator]()

// Call next() to iterate books collection
console.log("booksIter - ", booksIter.next())
console.log("booksIter - ", booksIter.next())
console.log("booksIter - ", booksIter.next())
console.log("booksIter - ", booksIter.next())
console.log("booksIter - ", booksIter.next())
console.log("booksIter - ", booksIter.next())