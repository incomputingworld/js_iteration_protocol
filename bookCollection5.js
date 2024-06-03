// yield * implemntation

let bookCollection = {
    fiction: ['Pride and Prejudice', 'Nineteen Eighty-Four', 'The Great Gatsby', 'Animal Farm', 'The Fault in Our Stars'],
    comedy: ['Bossypants', 'Is Everyone Hanging Out Without Me?', 'Yes Please', 'Me Talk Pretty One Day', 'Born a Crime'],
    drama: ['The Tempest', 'The Kite Runner', 'As you like it', 'Twelve Angry men', 'Cat on a Hot Tin Roof'],
    staire: ['The Sellout', 'Going Postal', 'Slaughterhouse-five', "Cat's cradle, Brave New World"],
    poetry: ['Thousnd Mornings', 'Leaves of grass', 'Devotions', 'Pillow Thoughts', 'The Vault'],
    humor: ['Cold Comfort Farm', "The Hitchhiker’s Guide to the Galaxy", 'Lamb', 'Good Omens', 'Catch-22'],
}

// generator function. iterates through books of given genre
function* showGenre(genre){
    books = bookCollection[genre]  // get all the books of genre
    for (book of books){  // iterate through the list of books
        yield book 
    }
}
// generator function. iteraties through each genre
function* showAllBooks(){
    for (key in bookCollection){  // enlist genre of the collection
        console.log(key + " - ")  // print genre name
        yield *showGenre(key)  // delegate listing of books as per genre
    }
}

let allBooks = showAllBooks()  // get a generator object
// iterate through all the books. 
for(book of allBooks){ 
    console.log(book)
}