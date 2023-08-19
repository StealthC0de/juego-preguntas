var preguntas = [
  {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Londres", "París", "Madrid", "Berlín"],
    respuestaCorrecta: 1,
    imagen: "imagenes/franciaporton.jpg"
  },
  {
    pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
    opciones: ["1939", "1945", "1914", "1941"],
    respuestaCorrecta: 0,
    imagen: "imagenes/guerramundial.jpg"
  },
  {
  pregunta: "¿Cuál es el río más largo del mundo?",
  opciones: ["Nilo", "Amazonas", "Mississippi", "Yangtsé"],
  respuestaCorrecta: 1,
  imagen: "imagenes/rio.jpg"
  },
  {
  pregunta: "¿Cuál es el país más poblado del mundo?",
  opciones: ["India", "Estados Unidos", "China", "Rusia"],
  respuestaCorrecta: 2,
  imagen: "imagenes/gente.jpg"
  },
  {
  pregunta: "¿Quién pintó La Mona Lisa?",
  opciones: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
  respuestaCorrecta: 0,
  imagen: "imagenes/monalisa.jpg"
  },
  {
  pregunta: "¿Cuál es el metal más precioso?",
  opciones: ["Oro", "Plata", "Cobre", "Platino"],
  respuestaCorrecta: 0,
  imagen: "imagenes/metal.jpg"
  },
  {
  pregunta: "¿Cuál es la montaña más alta del mundo?",
  opciones: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Monte McKinley"],
  respuestaCorrecta: 0,
  imagen: "imagenes/mountain.jpg"
  },
  {
    pregunta: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
    opciones: ["Miguel de Cervantes", "Federico García Lorca", "Pablo Neruda", "Gabriel García Márquez"],
    respuestaCorrecta: 0,
    imagen: "imagenes/donki.jpg"
  },
];

var preguntaElement = document.getElementById("pregunta");
var opcionesElement = document.getElementById("opciones-container");
var imagenElement = document.createElement("img");

var preguntashechas = new Set();
var preguntaActual = null;

function mostrarPregunta(pregunta) {
  preguntaElement.textContent = pregunta.pregunta;
  imagenElement.src = pregunta.imagen;
  preguntaElement.appendChild(imagenElement);

  opcionesElement.innerHTML = '';
  pregunta.opciones.forEach(function(opcion, index) {
    var opcionElement = document.createElement("button");
    opcionElement.textContent = opcion;
    opcionElement.classList.add("opcion-style");
    opcionElement.addEventListener("click", function() {
      verificarRespuesta(index, pregunta.respuestaCorrecta);
    });
    opcionesElement.appendChild(opcionElement);
  });
}

function obtenerPreguntaAleatoria() {
  if (preguntashechas.size === preguntas.length) {
    console.log("¡Has respondido todas las preguntas!");
    return null;
  }

  let preguntaNoRepetida;
  do {
    preguntaNoRepetida = preguntas[Math.floor(Math.random() * preguntas.length)];
  } while (preguntashechas.has(preguntaNoRepetida));

  preguntashechas.add(preguntaNoRepetida);
  return preguntaNoRepetida;
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta) {
  if (respuestaSeleccionada === respuestaCorrecta) {
    console.log("Respuesta correcta");
    siguientePregunta();
  } else {
    console.log("Respuesta incorrecta");
  }
}

function siguientePregunta() {
  var nuevaPregunta = obtenerPreguntaAleatoria();
  if (nuevaPregunta) {
    preguntaActual = nuevaPregunta;
    mostrarPregunta(preguntaActual);
  }
}


preguntaActual = obtenerPreguntaAleatoria();
if (preguntaActual) {
  mostrarPregunta(preguntaActual);
}