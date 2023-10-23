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

const theHobbit = new Book(`The Hobbit`, `J.R.R. Tolkien`, 295, "yep")

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}
