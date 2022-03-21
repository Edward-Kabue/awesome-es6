import './modules/time.js';
import './modules/book.js';
import './modules/library.js';
import showBlock from './modules/navbar.js';

const links = document.querySelectorAll('.links');
links.forEach((element) => {
  element.addEventListener('click', function () {
    showBlock(element.id);
    const [current] = document.getElementsByClassName('active');
    current.className = current.className.replace(' active', '');
    this.className += ' active';
  });
});
