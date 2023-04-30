const bookContainer = document.querySelector('.main');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.new-book')
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');


let myLibrary = [];

function book(title, author, pages, unread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = unread;
}

book.prototype.toggleRead = function(status) {
    this.status = status;
}

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
    let pagesContent = Number(pages.value);
    console.log(pagesContent);
    let newBook = new book(titleContent, authorContent, pagesContent);
    myLibrary.push(newBook);
    let latestItem = myLibrary[myLibrary.length - 1] ;
    if (!titleContent || !authorContent || !pagesContent || typeof(pagesContent) !== 'number') {
        alert('Please enter valid book details');
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
      let status = 'unread'
      newDiv.appendChild(titleDiv);
      newDiv.appendChild(authorDiv);
      newDiv.appendChild(pagesDiv);
      newDiv.appendChild(buttonsContainer);
      buttonsContainer.appendChild(removeButton);
      buttonsContainer.appendChild(statusButton);
      buttonsContainer.classList.add('btns-container');
      removeButton.classList.add('remove-btn', 'card-btn');
      statusButton.classList.add('status-btn', 'card-btn', 'unread');
      removeButton.textContent = 'Remove';
      statusButton.textContent = 'Unread'
      titleDiv.textContent = book.title
      titleDiv.style.fontWeight = 'bold';
      authorDiv.textContent = `Author: ${book.author}`;
      pagesDiv.textContent = `Page Count: ${book.pages}`;
      removeButton.addEventListener('click', removeCard);
      statusButton.addEventListener('click', toggleStatus)

      function removeCard() {
        newDiv.dataset.indexNumber = myLibrary.indexOf(book);
        myLibrary.splice(newDiv.dataset.indexNumber, 1);
        newDiv.remove();
        console.table(myLibrary);
      }

      function toggleStatus() {
        if (status === 'unread') {
            statusButton.classList.remove('unread');
            statusButton.classList.add('read');
            status = 'read';
            statusButton.textContent = 'Read';
            newDiv.dataset.indexNumber = myLibrary.indexOf(book);
            myLibrary[newDiv.dataset.indexNumber].toggleRead(status);
            console.log(myLibrary);
        } else if (status === 'read') {
            statusButton.classList.remove('read');
            statusButton.classList.add('unread');
            status = 'unread';
            statusButton.textContent = 'Unread';
            newDiv.dataset.indexNumber = myLibrary.indexOf(book);
            myLibrary[newDiv.dataset.indexNumber].toggleRead(status);
            console.log(myLibrary);
        }
      }    
}

