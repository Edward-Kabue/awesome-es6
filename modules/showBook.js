import Books from './book.js';

export const displayBook = (book) => {
  const list = document.querySelector('#form-list');
  const row = document.createElement('tr');
  row.innerHTML = ` <td>${book.Btitle}</td> 
    <td>${book.Bauthor}</td> <td>
    <button type="submit" id="${book.Id}" class="btn">Remove</button></td> `;
  list.appendChild(row);
};
// Remove book function

export function removeBk() {
  const Book = new Books();
  Book.removeBook(this.id);
  this.parentNode.parentNode.remove();
}
