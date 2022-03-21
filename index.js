import './modules/book.js';
import './modules/library.js';
import showBlock from './modules/navbar.js';

const displayTime = () => {
  document.getElementById('date').innerText = new Date().toLocaleString();
  setTimeout(displayTime, 1000);
};
displayTime();
const links = document.querySelectorAll('.links');
links.forEach((element) => {
  element.addEventListener('click', function () {
    showBlock(element.id);
    const [current] = document.getElementsByClassName('active');
    current.className = current.className.replace(' active', '');
    this.className += ' active';
  });
});
