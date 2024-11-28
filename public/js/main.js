const addNewCounterButton = document.getElementById("addNewCounterButton");
addNewCounterButton.addEventListener("click", addNewCounter);

var numeroEquipos = 0;

const containerCounters = document.getElementById("counterContainer");

const listaContadores = [];
var newCounter = new Counter(1, numeroEquipos);
listaContadores[numeroEquipos] = newCounter;

containerCounters.insertAdjacentHTML(
  "beforeend",
  newCounter.generateHTMLStructure()
);

var numberContainer = document.getElementById(newCounter.getIdNameH2());
const listaNumberContainer = [];
listaNumberContainer[numeroEquipos] = numberContainer;

var buttonIncrement = document.getElementById(
  newCounter.getButtonIncrementId()
);
buttonIncrement.addEventListener("click", incrementCounter);

function incrementCounter(event) {
  var contadorAsignado = parseInt(event.target.id.split("bM")[1]);
  var contenedorNumero = listaNumberContainer[contadorAsignado];
  contenedorNumero.innerText = listaContadores[contadorAsignado].getCounter();
}
function addNewCounter(event) {
  numeroEquipos++;
  newCounter = new Counter(1, numeroEquipos);
  listaContadores[numeroEquipos] = newCounter;
  containerCounters.insertAdjacentHTML(
    "beforeend",
    newCounter.generateHTMLStructure()
  );
  buttonIncrement = document.getElementById(newCounter.getButtonIncrementId());
  buttonIncrement.addEventListener("click", incrementCounter);

  numberContainer = document.getElementById(newCounter.getIdNameH2());
  listaNumberContainer[numeroEquipos] = numberContainer;
  //console.log("card anadida");
}
