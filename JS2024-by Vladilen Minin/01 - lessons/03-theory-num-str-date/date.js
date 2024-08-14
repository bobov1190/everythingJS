// console.log(new Date());
// console.dir(Date);

// const now = new Date().toLocaleTimeString();
// const start = new Date(1000 * 60 * 60 * 24 * 365);
// const date = new Date(2011, 5, 1, 12, 34, 45);
// console.log(date);
// get and set
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMonth());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.setSeconds(2));
// console.log(now.setMilliseconds(2));

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

let mode = "time";
const output = document.getElementById("output");
const full = document.getElementById("full");
const date = document.getElementById("date");
const time = document.getElementById("time");

update();

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

full.onclick = bindMode("full");
date.onclick = bindMode("date");
time.onclick = bindMode("time");

setInterval(update, 100);

function update() {
  output.textContent = format(mode);
}

// Pure Function and Currying
function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();

    default:
      return now.toLocaleTimeString();
  }
}
