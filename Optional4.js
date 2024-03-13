const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const button = document.querySelector(".btn");
const background = document.querySelector(".color");
const text = document.querySelector(".info");
const copy = document.querySelector(".copy");

button.addEventListener("click", () => {
  let color = "#";
  for (let index = 0; index < 6; index++) {
    let select = arr[Math.floor(Math.random() * arr.length)];
    color = color + select;
  }
  console.log(color);
  background.style.backgroundColor = color;
  text.textContent = color;
});

function classRemover() {
  copy.classList.remove("hide");
}

function copyToClipboard() {
  navigator.clipboard.writeText(text.textContent);
  alert("copied");
  console.log("Text copied");
}
