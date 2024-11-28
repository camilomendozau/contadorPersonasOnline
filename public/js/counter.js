class Counter {
  constructor(increment, idMarker) {
    this.counter = 0;
    this.increment = parseInt(increment);
    this.teamIdNameH2 = "e" + idMarker + "H2";
    this.buttonIncrementId = "bM" + idMarker;
    this.inputCounterName = "iM" + idMarker;
  }
  generateHTMLStructure() {
    return (
      '<div class="counter__card"><input class="counter__card--name" type="text" value="" placeholder="Ingresa un nombre" id=' +
      this.inputCounterName +
      '></input><h2 id="' +
      this.teamIdNameH2 +
      '" class="counter__card--number">' +
      this.counter +
      "</h2>" +
      this.generateHTMLButtonsStructure() +
      "</div>"
    );
  }
  generateHTMLButtonsStructure() {
    return (
      '<div class="buttons-container"><input type="button" class="button-increment" value="' +
      "+ " +
      this.increment +
      '" id="' +
      this.buttonIncrementId +
      '" /></div>'
    );
  }
  getIdNameSpan() {
    return this.teamIdNameSpan;
  }
  getIdNameH2() {
    return this.teamIdNameH2;
  }
  getCounter() {
    this.counter++;
    return this.counter;
  }
  getButtonIncrementId() {
    return this.buttonIncrementId;
  }
}
