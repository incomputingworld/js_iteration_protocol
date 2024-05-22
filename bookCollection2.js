// Iterable Iterator implemenation

class Book {
    constructor (bookName, author){
        this.bookName = bookName,
        this.author = author
        this.next = null
    }
}

let myBookCollection = {
    books: null,
    addNewBook(bookName, author){
        let newBook = new Book(bookName, author)
        if (this.books == null){
            this.books = newBook
        }
        else{
            let current = this.books
            while (current.next != null)
                current = current.next
            current.next = newBook
        }
    },
    [Symbol.iterator] () {  // iterable protocol
        let booksIterator = new BookCollectionIterator(this.books)
        return booksIterator
    },
}

class BookCollectionIterator{
    constructor(books){
        this.books = books
        this.currentBook = this.books
    }
    next() {  // iterator protocol
        if (this.currentBook != null){
            let book = `${this.currentBook.bookName}, ${this.currentBook.author}`
            this.currentBook = this.currentBook.next
            return {value: book, done: false}
        }
        else
            return {value: undefined, done: true}
    }
}


myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")


// Test code - 1 
// for(book of myBookCollection){
//     console.log(book)
// }


// Test code - 2
let booksIter1 = myBookCollection[Symbol.iterator]()
let booksIter2 = myBookCollection[Symbol.iterator]()

console.log("booksIter1 - ", booksIter1.next())
console.log("booksIter2 - ", booksIter2.next())
console.log("booksIter1 - ", booksIter1.next())
console.log("booksIter2 - ", booksIter2.next())
console.log("booksIter1 - ", booksIter1.next())
console.log("booksIter2 - ", booksIter2.next())
console.log("booksIter1 - ", booksIter1.next())
console.log("booksIter2 - ", booksIter2.next())
console.log("booksIter1 - ", booksIter1.next())
console.log("booksIter2 - ", booksIter2.next())
console.log("booksIter1 - ", booksIter1.next())
console.log("booksIter2 - ", booksIter2.next())