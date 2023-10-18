function limpiarDocumento() {
  document.body.innerHTML = '';
}

function mostrarRojo() {
  var rojo = "./colores/Rojo.png"
  document.write('<img src="' + rojo + '">')
}

function mostrarNaranja() {
  var naranja = "./colores/Amarillo.png"
  document.write('<img src="' + naranja + '">')
}

function mostrarVerde() {
  var verde = "./colores/Verde.png"
  document.write('<img src="' + verde + '">')
}


function cambiarColor(color) {
  switch (color) {
    case "rojo":
      mostrarRojo();
      setTimeout(function () {
        limpiarDocumento();
        cambiarColor("verde");
      }, 5000); // Cambiar a verde después de 5 segundos
      break;

    case "verde":
      mostrarVerde();
      setTimeout(function () {
        limpiarDocumento();
        cambiarColor("amarillo");
      }, 5000); // Cambiar a amarillo después de 5 segundos
      break;

    case "amarillo":
      mostrarNaranja();
      setTimeout(function () {
        limpiarDocumento();
        cambiarColor("rojo");
      }, 2000); // Cambiar a rojo después de 2 segundos
      break;

    default:
      console.log("Color inválido");
      break;
  }
}

// Iniciar el cambio de color del semáforo
cambiarColor("rojo");