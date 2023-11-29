// Data structures

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;  
  this.info = function() {
    let readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
}

// User Interface

const bookGrid = document.querySelector('.book-grid');
const bookStatus = document.querySelector('#status');

const theHobbit = new Book(`The Hobbit`, `J.R.R. Tolkien`, 295, "yep")

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const getBookFromInput = () => {
  const bookInput = document.getElementById('book-name').value;
  const authorInput = document.getElementById('book-author').value;
  const pagesInput = document.getElementById('pages').value;
  return new Book(bookInput, authorInput, pagesInput,)
}

const addNewBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();
  addBookToLibrary(newBook);
  createBookCard(newBook);
}

const form = document.querySelector('form');
form.addEventListener('submit', addNewBook);

function createBookCard(book) {
  const bookCard = document.createElement('div');
  const bookName = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const bookReadStatus = document.createElement('button');

  bookCard.classList.add('single-book');

  bookName.textContent = `${book.title}`;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  bookReadStatus.textContent = bookStatus.value;

  bookGrid.appendChild(bookCard);
  bookCard.appendChild(bookName);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookReadStatus);
}

function changeStatus(book) {
  if (myLibrary[book].read == 'Read') {
    return myLibrary[book].read = 'Not read';
  } else {
    return myLibrary[book].read = 'Read';
  }
}

function deleteBook(book) {
  myLibrary.splice(book, book +1);
}