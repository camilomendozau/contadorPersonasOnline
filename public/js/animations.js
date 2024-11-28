const mainTitle = document.getElementById("mainTitle");
const navToggle = document.querySelector(".menu-bar__toggle");
const navMenu = document.querySelector(".nav-bar__links");
// window.onbeforeunload = function () {
//   Swal.fire({
//     text: "",
//     html:
//       "<b class='text-alert'>¿Recargar la pagina? <br>Perdera el avance que tiene</b>",
//     icon: "warning",
//     showDenyButton: true,
//     confirmButtonText: `Continuar`,
//     denyButtonText: `Cancelar`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       window.location.reload();
//     }
//   });
// };
mainTitle.addEventListener("click", function () {
  Swal.fire({
    text: "",
    html:
      "<b class='text-alert'>¿Recargar la pagina?<br>Perdera el avance que tiene</b>",
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: `Continuar`,
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
});
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-bar__visible");
});
//animateShadow(mainTitle);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateShadow(objectDOM) {
  c = 3;
  while (c < 100) {
    //console.log(c);
    objectDOM.style.textShadow = `2px 2px ${c}px #cfd6cf`;
    await sleep(60);
    c++;
    if (c == 100) {
      c = 3;
    }
  }
}
