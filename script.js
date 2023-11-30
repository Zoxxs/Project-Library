// Data structures


class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title)
  }
}

const library = new Library();

// User Interface

const bookGrid = document.querySelector('.book-grid');
const bookStatus = document.querySelector('#status');

const theHobbit = new Book(`The Hobbit`, `J.R.R. Tolkien`, 295, "yep")

function addBookToLibrary(newBook) {
  library.push(newBook);
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
  library.addBook(newBook);
  printMyLibrary();
}

function printMyLibrary() {
  resetBookGrid();
  for (let book of library.books) {
    createBookCard(book);
  }
}

function resetBookGrid() {
  bookGrid.innerHTML = '';
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

  bookCard.append(bookName, bookAuthor, bookPages, bookReadStatus);
  bookGrid.append(bookCard);
}

function changeStatus(book) {
  if (library[book].read == 'Read') {
    return library[book].read = 'Not read';
  } else {
    return library[book].read = 'Read';
  }
}

function deleteBook(book) {
  library.splice(book, book +1);
}