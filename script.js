const bookContainer = document.querySelector('.main');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.new-book')
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');


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

myLibrary.forEach((obj) => {
   printBook(obj);
}); 

openBtn.onclick = () => { modal.style.display = 'flex'; }
closeBtn.onclick = () => { modal.style.display = 'none'; }
window.onclick = (event) => { 
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

submitBtn.addEventListener('click', submitted);

function submitted(event) {
    event.preventDefault();
    let titleContent = title.value;
    let authorContent = author.value;
    let pagesContent = pages.value;
    let newBook = new book(titleContent, authorContent, pagesContent);
    myLibrary.push(newBook);
    let latestItem = myLibrary[myLibrary.length - 1] ;
    if (!titleContent || !authorContent || !pagesContent) {
        alert('Please enter book details');
    } else {
    modal.style.display = 'none';
    printBook(latestItem);
    }
}

function printBook(book) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('card');
      bookContainer.appendChild(newDiv);  
      let titleDiv = document.createElement('div');
      let authorDiv = document.createElement('div');
      let pagesDiv = document.createElement('div');
      let buttonsContainer = document.createElement('div');
      let removeButton = document.createElement('button');
      let statusButton = document.createElement('button');
      newDiv.appendChild(titleDiv);
      newDiv.appendChild(authorDiv);
      newDiv.appendChild(pagesDiv);
      newDiv.appendChild(buttonsContainer);
      buttonsContainer.appendChild(removeButton);
      buttonsContainer.appendChild(statusButton);
      buttonsContainer.classList.add('btns-container');
      removeButton.classList.add('remove-btn', 'card-btn');
      statusButton.classList.add('status-btn', 'card-btn');
      removeButton.textContent = 'Remove';
      statusButton.textContent = 'Placeholder'
      titleDiv.textContent = book.title
      titleDiv.style.fontWeight = 'bold';
      authorDiv.textContent = `Author: ${book.author}`;
      pagesDiv.textContent = `Page Count: ${book.pages}`;
      removeButton.addEventListener('click', remove);

      function remove() {
        newDiv.dataset.indexNumber = myLibrary.indexOf(book);
        myLibrary.splice(newDiv.dataset.indexNumber, 1);
        newDiv.remove();
        console.table(myLibrary);
      }
}

