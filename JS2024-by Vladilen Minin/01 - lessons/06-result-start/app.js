// const car = {
//   model: "Tesla",
//   year: 2022,
//   color: "black",
// };

// const json = JSON.stringify(car);
// const parsed = JSON.parse(json);
// console.log(parsed);

const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
let USERS = [];

filter.addEventListener("input", (e) => {
  const { value } = e.target;
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setTimeout(() => {
      USERS = data;
      render(data);
    }, 1000);
  } catch (error) {
    list.innerHTML = error.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No users";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center"> ${user.name} <span class="badge badge-primary badge-pill">${user.id}</span> </li>`;
}

start();
