let body = document.querySelector('body');
const container = document.createElement("div");

body.prepend(container);
container.className = "container";

const squareNumberButton = document.createElement("button");
body.prepend(squareNumberButton)
squareNumberButton.innerText = "select-number"

squareNumberButton.addEventListener('click' , () => {

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  
  let limit = prompt("how many squares do you want",)
  limitPro = limit **2
  for (i=0; i<limitPro; i++) {
    let testdiv = document.createElement("div")
    testdiv.className = "grid-square"
    container.appendChild(testdiv)
  
    testdiv.addEventListener('mouseover', () => {
      testdiv.style.backgroundColor = "#F88A87";
    })
    
  }
})







