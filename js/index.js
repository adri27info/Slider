const puntos = document.querySelectorAll(".punto");
const grande = document.getElementById("grande");

function asignarEventos() {
  puntos.forEach((element, indice) => {
    puntos[indice].addEventListener("click", () => {
      let indicePunto = indice;
      let operacion = indicePunto * -50;
      grande.style.transform = `translateX(${operacion}%)`;
      eliminarClase();
      puntos[indicePunto].classList.add("activo");
    });
  });
}

function eliminarClase() {
  puntos.forEach((element, indice) => {
    puntos[indice].classList.remove("activo");
  });
}

asignarEventos();
