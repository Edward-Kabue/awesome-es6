import Book from './book.js';

const books = document.querySelector('.books');
const addBtn = document.querySelector('.add-btn');
const inputAuthor = document.querySelector('.author');
const inputTitle = document.querySelector('.title');

export default class Library {
  localStorage = [];

  constructor() {
    addBtn.addEventListener('click', this.addBook.bind(this));
    books.addEventListener('click', this.clickToremove.bind(this));
    this.getLocalStorage();
  }

  setLocalStorage = () => {
    localStorage.setItem('localStorage', JSON.stringify(this.localStorage));
  };

  getLocalStorage = () => {
    /* eslint-disable */
    localStorage.getItem('localStorage')
      ? (this.localStorage = JSON.parse(localStorage.getItem('localStorage')))
      : [];
    /* eslint-enable */
    this.displayBook();
  };

  displayBook = () => {
    books.innerHTML = '';
    this.localStorage.forEach((doc, i) => {
      /* eslint-disable */
      const html = `
			
		  		<td class="book-title">${doc.title}</td>
		  		<td class="author">${doc.author}</td>
		  		<td><button class="remove-btn" data-id=${i}>Remove</button></td>
	  		`;
      /* eslint-enable */
      books.insertAdjacentHTML('afterbegin', html);
    });
  };

  addBook = () => {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    if (author && title) {
      const book = new Book(title, author);
      this.localStorage.push(book);
      this.setLocalStorage(this.localStorage);
      this.displayBook();
    }
    inputTitle.value = '';
    inputAuthor.value = '';
  };

  removeList = (doc) => {
    this.localStorage.splice(doc, 1);
    this.setLocalStorage();
    this.displayBook();
  };

  clickToremove = (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const removeBtn = +e.target.dataset.id;
      this.removeList(removeBtn);
    }
  };
}
/* eslint-disable */
const library = new Library();
