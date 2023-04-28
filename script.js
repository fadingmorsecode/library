let myLibrary = [];

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