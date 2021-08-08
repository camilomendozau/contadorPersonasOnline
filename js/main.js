const addNewCounterButton = document.getElementById("addNewCounterButton");
addNewCounterButton.addEventListener("click", addNewCounter);

const listaContadores = [];
var numeroEquipos = 0;
numeroEquipos++;

var newCounter = new Marker(1, numeroEquipos);

const containerCounters = document.getElementById("counterContainer");

containerCounters.insertAdjacentHTML(
  "beforeend",
  newCounter.generateHTMLStructure()
);

const numberContainer = document.getElementById(newCounter.getIdNameH2());
const buttonIncrement = document.getElementById(
  newCounter.getButtonIncrementId()
);
buttonIncrement.addEventListener("click", incrementCounter);

function incrementCounter() {
  numberContainer.innerText = newCounter.getCounter();
}

function addNewCounter(event) {
  numeroEquipos++;
  newCounter = new Marker(1, numeroEquipos);
  containerCounters.insertAdjacentHTML(
    "beforeend",
    newCounter.generateHTMLStructure()
  );

  console.log("card anadida", event);
}
