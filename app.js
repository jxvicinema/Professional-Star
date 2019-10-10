const texts = ["Students Trades Arts and Research Institute"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let deleteLetter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector("#tw-effect").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 150);
})();
