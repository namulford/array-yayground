let books = [
    {   
        name: 'Slaughterhouse Five',
        author: 'Kurt Vonnegut',
        publishDate: 1969,
        isFunny: true
    },{
        name: 'the Republic',
        author: 'Plato',
        publishDate: -380,
        isFunny: false
    },{
        name: 'The Autobiography of Malcolm X',
        author: 'Alex Haley',
        publishDate: 1965,
        isFunny: false
    }
]

//reduce
//use reduce to get the total years of the publishDate's
//then use the total to see when the average of these
//three books was published
// let totalYears = 0;
// for(let i = 0; i < books.length; i++) {
//     totalYears += books[i].publishDate;
// }
//let totalYears = ;

//console.log('Average year of publication', books.reduce((totalAddition, more) => totalAddition + more.publishDate, 0)/books.length)

//map
//use map to print out the author's names for each one of these books
// let authorsNames = [];
// for(let i = 0; i < books.length; i++) {
//      console.log(books[i].author);
// }
//let authorsNames = books.map((book, index, books) => console.log(`${index + 1}. ${book.author}`));


//filter
//use filter to just print the funny books
// let funnyBooks = books.filter(book => book.isFunny === false);
// funnyBooks.map(book => console.log(book.name));





//use filter, and startsWith() to print out the books
//that begin with the word 'the'
books.filter(book => book.name.toLowerCase().startsWith('the')).forEach(book => console.log(book.name));
