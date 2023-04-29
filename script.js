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
},
{
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    pages: '386'
},
{
    title: 'Of Mice and Men',
    author: 'John Steinback',
    pages: '107'
},
{
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    pages: '234'
},
{
    title: 'East of Eden',
    author: 'John Steinback',
    pages: '704'
},
{
    title: 'As I Lay Dying',
    author: 'William Faulkner',
    pages: '208'
},
];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let bookTitle = prompt('Please enter book title', 'Title');
    let bookAuthor = prompt('Please enter author', 'Author');
    let bookPages = prompt('Please enter number of pages', 'Pages');
    let newBook = new book(`${bookTitle}`, `${bookAuthor}`, `${bookPages}`);
    myLibrary.push(newBook);
}

addBookToLibrary();

const bookContainer = document.querySelector('.main');

myLibrary.forEach((book) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('card');
    bookContainer.appendChild(newDiv);

    let titleDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let pagesDiv = document.createElement('div');

    newDiv.appendChild(titleDiv);
    newDiv.appendChild(authorDiv);
    newDiv.appendChild(pagesDiv);

    titleDiv.textContent = book.title;
    titleDiv.style.fontWeight = 'bold';
    authorDiv.textContent = `Author: ${book.author}`;
    pagesDiv.textContent = `Page Count: ${book.pages}`;
}); 

console.log(myLibrary);