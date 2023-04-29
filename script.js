let myLibrary = [{
    title: 'The Grapes of Wrath',
    author: 'John Steinback',
    pages: '530'
},
{
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: '130'
},
{
    title: 'Ethan Frome',
    author: 'Edith Wharton',
    pages: '195'
},
{
    title: 'Farenheit 451',
    author: 'Ray Bradbury',
    pages: '158'
}
];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

/*
function addBookToLibrary() {
    let bookTitle = prompt('Please enter book title', 'Title');
    let bookAuthor = prompt('Please enter author', 'Author');
    let bookPages = prompt('Please enter number of pages', 'Pages');
    let newBook = new book(`${bookTitle}`, `${bookAuthor}`, `${bookPages}`);
    myLibrary.push(newBook);


addBookToLibrary();
*/
console.log(myLibrary);