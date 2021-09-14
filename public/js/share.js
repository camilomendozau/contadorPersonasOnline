const shareWhatsappButton = document.getElementById("shareWhatsappButton");
shareWhatsappButton.addEventListener("click", () => {
  console.log("Enviando mensaje wps");
  window.open(
    "https://wa.me/?text=La%20reunion%20*sacramental*%20habia%20*" +
      listaContadores[0].counter +
      "*%20personas",
    "_blank"
  );
});

//function sendMessageByWhatsapp() {}
