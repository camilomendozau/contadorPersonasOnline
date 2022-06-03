const shareWhatsappButton = document.getElementById("shareWhatsappButton");
shareWhatsappButton.addEventListener("click", shareMessageByWhatsapp);

function shareMessageByWhatsapp() {
  //msgByUser = prompt("Añada su mensaje");
  var msgToshare = "";
  console.log("Enviando mensaje wsp");
  if (listaContadores.length == 1) {
    if (document.getElementById("iM0").value == "") {
      msgToshare =
        "https://wa.me/?text=A%20la%20reunion:%20*sin%20nombre*%20tenia%20*" +
        listaContadores[0].counter +
        "*%20personas";
    } else {
      msgToshare =
        "https://wa.me/?text=En%20la%20reunion:%20*" +
        document.getElementById("iM0").value +
        "*%20tenia%20*" +
        listaContadores[0].counter +
        "*%20personas";
    }
  } else {
    var idInput = "iM";
    var msgToAssemble = "";
    msgToshare = "https://wa.me/?text=A%20las%20reuniones:%20";
    for (let i = 0; i < listaContadores.length; i++) {
      console.log(document.getElementById(idInput + i).value);
      msgToAssemble = getMsgToAsm();
      if (document.getElementById(idInput + i).value == "") {
        msgToAssemble =
          "%0A-%20*sin%20nombre*%20asistieron%20*" +
          listaContadores[i].counter +
          "*%20personas";
      } else {
        msgToAssemble =
          "%0A-%20*" +
          document.getElementById(idInput + i).value +
          "*%20asistieron%20*" +
          listaContadores[i].counter +
          "*%20personas";
      }

      msgToshare = msgToshare + msgToAssemble;
    }
  }
  window.open(msgToshare, "_blank");
}
