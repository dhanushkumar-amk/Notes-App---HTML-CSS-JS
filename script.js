const notesContainer = document.querySelector('.notes__container');
const createBtn = document.querySelector('.btn');

const notes = document.querySelectorAll('.input-box');

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('note');
}
showNotes();

function updateStorage() {
  localStorage.setItem('note', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let image = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  image.src = 'delete.png';
  notesContainer.appendChild(inputBox).appendChild(image);
});

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    note = document.querySelectorAll('.input-box');
    note.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.execCommand(insertLineBreak);
    event.preventDefault();
  }
});
