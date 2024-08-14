const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "Записать блок про массивы",
    completed: false,
  },
  {
    title: "Привет из Будущего",
    completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = `<p>Нет Элементов</p>`;
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
  //   for (let note of notes) {
  //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  //   }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote); // добавляем новую заметку в конец массива
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
      console.log("toggle", index);
    } else if (type === "delete") {
      notes.splice(index, 1);
    }
  }
  render();
};

function getNoteTemplate(note, index) {
  return `<li
          class="list-group-item d-flex mb-1 mt-1 justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="delete">&times;</span>
          </span>
        </li>`;
}
