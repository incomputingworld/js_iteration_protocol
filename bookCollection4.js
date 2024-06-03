// Iterator implementation using generator class.
class Book {
    constructor (bookName, author){
        this.bookName = bookName,
        this.author = author
        this.next = null
    }
}

class BookCollectionIterator{ // Iterator protocol using generator
    constructor (books){
        this.books = books
    }
    *listBooks(){
        let currentBook = this.books
        while(currentBook != null){
            let book = `${currentBook.bookName},  ${currentBook.author}`
            currentBook = currentBook.next
            yield book
        }
    }
}

let myBookCollection = {
    books: null,
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
    [Symbol.iterator] () {
        let booksIterator = new BookCollectionIterator(this.books)
        return booksIterator.listBooks() // returns generator object
    }
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