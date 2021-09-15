const shareWhatsappButton = document.getElementById("shareWhatsappButton");
shareWhatsappButton.addEventListener("click", shareMessageByWhatsapp);

function shareMessageByWhatsapp() {
  var msgToshare = "";
  console.log("Enviando mensaje wps");
  if (listaContadores.length == 1) {
    msgToshare =
      "https://wa.me/?text=En%20la%20reunion:%20*" +
      document.getElementById("iM0").value +
      "*%20tenia%20*" +
      listaContadores[0].counter +
      "*%20personas";
  } else {
    var idInput = "iM";
    var msgToAssemble = "";
    msgToshare = "https://wa.me/?text=A%20las%20reuniones:%20";
    for (let i = 0; i < listaContadores.length; i++) {
      console.log(document.getElementById(idInput + i).value);
      msgToAssemble =
        "%0A-%20*" +
        document.getElementById(idInput + i).value +
        "*%20asistieron%20*" +
        listaContadores[i].counter +
        "*%20personas";
      msgToshare = msgToshare + msgToAssemble;
    }
  }
  window.open(msgToshare, "_blank");
}
