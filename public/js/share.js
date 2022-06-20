const shareWhatsappButton = document.getElementById("shareWhatsappButton");
shareWhatsappButton.addEventListener("click", shareMessageByWhatsapp);

function shareMessageByWhatsapp() {
  //msgByUser = prompt("Añada su mensaje");
  var msgToshare = "";
  var counterName = "";
  console.log("Enviando mensaje wsp");
  if (listaContadores.length == 1) {
    counterName = deleteSpacesIfHaveIt(document.getElementById("iM0").value);
    if (counterName == "") {
      msgToshare =
        "https://wa.me/?text=En%20la%20reunion:%20*sin%20nombre*%20habia%20*" +
        listaContadores[0].counter +
        "*%20personas";
    } else {
      msgToshare =
        "https://wa.me/?text=En%20la%20reunion:%20*" +
        counterName +
        "*%20habia%20*" +
        listaContadores[0].counter +
        "*%20personas";
    }
  } else {
    var idInput = "iM";
    var msgToAssemble = "";
    msgToshare = "https://wa.me/?text=En%20las%20reuniones:%20";
    for (let i = 0; i < listaContadores.length; i++) {
      counterName = document.getElementById(idInput + i).value;
      console.log(counterName);
      if (counterName == "") {
        msgToAssemble =
          "%0A-%20*sin%20nombre*%20habia%20*" +
          listaContadores[i].counter +
          "*%20personas";
      } else {
        counterName = deleteSpacesIfHaveIt(
          document.getElementById(idInput + i).value
        );
        msgToAssemble =
          "%0A-%20*" +
          counterName +
          "*%20habia%20*" +
          listaContadores[i].counter +
          "*%20personas";
      }

      msgToshare = msgToshare + msgToAssemble;
    }
  }
  window.open(msgToshare, "_blank");
}

function deleteSpacesIfHaveIt(text) {
  var newText = text;
  if (text[text.length - 1] == " ") {
    newText = text.slice(0, -1);
  }
  return newText;
}
