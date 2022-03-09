const result = document.querySelector("div#result");
const select = document.querySelector("div#select");
let tabuada = "";

function displayTable() {
  location.reload()
  
}

function calculate(num) {
  select.style.display = "none"
  result.style.marginTop = "-5vh"

  for (i = 0; i <= 10; i++) {
    tabuada += `<p class="tabuada" align="center">${num} x ${i} = ${num * i}</p>`;
    result.innerHTML = tabuada;
  }
}
