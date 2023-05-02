const bookContainer = document.querySelector('.main');
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.new-book');
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');
const titleSelector = document.querySelector('#title');
const authorSelector = document.querySelector('#author');
const pagesSelector = document.querySelector('#pages');
const statusCheck = document.querySelector('#read-check');

let readStatus = '';
let statusContent = '';

const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// eslint-disable-next-line func-names
Book.prototype.toggleRead = function (status) {
  this.status = status;
};

//  open and close module
openBtn.onclick = () => {
  modal.style.display = 'flex';
};
closeBtn.onclick = () => {
  modal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

//  display books objects when created and add event listeners
//  to remove or toggle read status
function printBook(book) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('card');
  bookContainer.appendChild(newDiv);
  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pagesDiv = document.createElement('div');
  const buttonsContainer = document.createElement('div');
  const removeButton = document.createElement('button');
  const statusButton = document.createElement('button');
  newDiv.appendChild(titleDiv);
  newDiv.appendChild(authorDiv);
  newDiv.appendChild(pagesDiv);
  newDiv.appendChild(buttonsContainer);
  buttonsContainer.appendChild(removeButton);
  buttonsContainer.appendChild(statusButton);
  buttonsContainer.classList.add('btns-container');
  removeButton.classList.add('remove-btn', 'card-btn');
  statusButton.classList.add('status-btn', 'card-btn');

  if (readStatus === 'read') {
    statusButton.classList.add('read');
    statusButton.textContent = 'Read';
  } else {
    statusButton.classList.add('unread');
    statusButton.textContent = 'Unread';
  }

  removeButton.textContent = 'Remove';
  titleDiv.textContent = book.title;
  titleDiv.style.fontWeight = 'bold';
  authorDiv.textContent = `Author: ${book.author}`;
  pagesDiv.textContent = `Page Count: ${book.pages}`;

  function removeCard() {
    newDiv.dataset.indexNumber = myLibrary.indexOf(book);
    myLibrary.splice(newDiv.dataset.indexNumber, 1);
    newDiv.remove();
  }

  function toggleStatus() {
    newDiv.dataset.indexNumber = myLibrary.indexOf(book);
    if (myLibrary[newDiv.dataset.indexNumber].status === 'unread') {
      statusButton.classList.remove('unread');
      statusButton.classList.add('read');
      readStatus = 'read';
      statusButton.textContent = 'Read';
      myLibrary[newDiv.dataset.indexNumber].toggleRead(readStatus);
    } else if (myLibrary[newDiv.dataset.indexNumber].status === 'read') {
      statusButton.classList.remove('read');
      statusButton.classList.add('unread');
      readStatus = 'unread';
      statusButton.textContent = 'Unread';
      myLibrary[newDiv.dataset.indexNumber].toggleRead(readStatus);
    }
  }

  removeButton.addEventListener('click', removeCard);
  statusButton.addEventListener('click', toggleStatus);
}

// create new object from form and then call print function
function submitted(event) {
  event.preventDefault();
  const titleContent = titleSelector.value;
  const authorContent = authorSelector.value;
  const pagesContent = Number(pagesSelector.value);
  if (statusCheck.checked === true) {
    statusContent = 'read';
  } else {
    statusContent = 'unread';
  }
  const newBook = new Book(
    titleContent,
    authorContent,
    pagesContent,
    statusContent
  );
  myLibrary.push(newBook);
  const latestItem = myLibrary[myLibrary.length - 1];
  if (
    !titleContent ||
    !authorContent ||
    !pagesContent ||
    typeof pagesContent !== 'number'
  ) {
    // eslint-disable-next-line no-alert
    alert('Please enter valid book details');
  } else {
    if (statusCheck.checked === true) {
      readStatus = 'read';
    } else {
      readStatus = 'unread';
    }
    modal.style.display = 'none';
    printBook(latestItem);
  }
}

submitBtn.addEventListener('click', submitted);
