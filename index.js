var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var darkModeBtn = document.getElementById("darkModeBtn");
var lightModeBtn = document.getElementById("lightModeBtn");
var fontButtonsContainer = document.getElementById("fontButtons");
var statusIconsContainer = document.getElementById("statusIcons");
var textToChange = document.getElementById("textToChange");
var buttonToChange = document.getElementById("buttonToChange");
var statusSelectedContainer = document.getElementById("statusSelected");

// Abrir o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Se clicar fora da caixa do modal ele fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Dark-mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
}

// Light-mode
function enableLightMode() {
  document.body.classList.remove("dark-mode");
}

// Fontes
function applyFont(font) {
  textToChange.style.fontFamily = font;
  buttonToChange.style.fontFamily = font;
}

// Status do usuário
function applyStatus(icon) {
  statusSelectedContainer.innerHTML = "";
  var statusImage = document.createElement("img");
  statusImage.src = icon;
  statusImage.alt = "Selected Status";
  statusSelectedContainer.appendChild(statusImage);
}


darkModeBtn.onclick = enableDarkMode;
lightModeBtn.onclick = enableLightMode;

var fontButtons = document.querySelectorAll(".fontButton");
fontButtons.forEach(function(button) {
  button.onclick = function() {
    var font = button.getAttribute("data-font");
    applyFont(font);
  };
});

var statusButtons = document.querySelectorAll(".statusButton");
statusButtons.forEach(function(button) {
  button.onclick = function() {
    var icon = button.getAttribute("data-icon");
    applyStatus(icon);
  };
});

var colorButtons = document.querySelectorAll(".colorButton");
colorButtons.forEach(function(button) {
  button.onclick = function() {
    var color = button.getAttribute("data-color");
    textToChange.style.color = color;
    buttonToChange.style.backgroundColor = color;
  };
});