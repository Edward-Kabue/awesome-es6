import { DateTime } from './node_modules/luxon/src/luxon.js';
import './modules/book.js';
import './modules/library.js';
import showBlock from './modules/navbar.js';

const time = document.getElementById('date');
setInterval(() => {
  time.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
}, 1000);

const links = document.querySelectorAll('.links');
links.forEach((element) => {
  element.addEventListener('click', function () {
    showBlock(element.id);
    const [current] = document.getElementsByClassName('active');
    current.className = current.className.replace(' active', '');
    this.className += ' active';
  });
});
