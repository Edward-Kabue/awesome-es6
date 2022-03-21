import { DateTime } from './node_modules/luxon/src/luxon.js';
import Books from './modules/book.js';
import showBlock from './modules/navbar.js';
import { displayBook, removeBk } from './modules/showBook.js';

// display date and time

const time = document.getElementById('date');
setInterval(() => {
  time.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
}, 1000);

//  display all the books;

if (localStorage.getItem('books') !== null) {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((element) => {
    displayBook(element);
  });
}

// add book

const title = document.getElementById('title');
const author = document.getElementById('author');

document.querySelector('#book-form').addEventListener('submit', (e) => {
  if (title.value === '' || author.value === '') {
    const error = document.getElementById('error');
    error.textContent = 'Title and Author fields must be filled out';
    error.style.color = 'red';
    e.preventDefault();
  } else {
    const addBk = new Books(title.value, author.value);
    addBk.addBook();
  }
});

// Remove the book

const btn = document.querySelectorAll('.btn');
btn.forEach((element) => {
  element.addEventListener('click', removeBk);
});

// navbar section

const links = document.querySelectorAll('.links');
links.forEach((element) => {
  element.addEventListener('click', function () {
    showBlock(element.id);
    const [current] = document.getElementsByClassName('active');
    current.className = current.className.replace(' active', '');
    this.className += ' active';
  });
});
