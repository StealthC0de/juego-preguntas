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

var preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
var preguntaElement = document.getElementById("pregunta");
var opcionesElement = document.getElementById("opciones-container");
var imagenElement = document.createElement("img");
imagenElement.src = preguntaAleatoria.imagen;

preguntaElement.textContent = preguntaAleatoria.pregunta;
preguntaElement.appendChild(imagenElement);

preguntaAleatoria.opciones.forEach(function(opcion, index) {
  var opcionElement = document.createElement("button");
  opcionElement.textContent = opcion;
  opcionElement.classList.add("opcion-style");
  opcionElement.addEventListener("click", function() {
    verificarRespuesta(index, preguntaAleatoria.respuestaCorrecta);
  });
  opcionesElement.appendChild(opcionElement);
});

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta) {
  if (respuestaSeleccionada === respuestaCorrecta) {
    console.log("Respuesta correcta");
    siguientePregunta();
  } else {
    console.log("Respuesta incorrecta");
  }
}


function siguientePregunta() {
  preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
  preguntaElement.textContent = preguntaAleatoria.pregunta;
  
  imagenElement = document.createElement("img");
  imagenElement.src = preguntaAleatoria.imagen + '?cache=' + new Date().getTime();
  preguntaElement.appendChild(imagenElement);
  
  opcionesElement.innerHTML = '';
  preguntaAleatoria.opciones.forEach(function(opcion, index) {
    var opcionElement = document.createElement("button");
    opcionElement.textContent = opcion;
    opcionElement.classList.add("opcion-style");
    opcionElement.addEventListener("click", function() {
      verificarRespuesta(index, preguntaAleatoria.respuestaCorrecta);
    });
    opcionesElement.appendChild(opcionElement);
  });
}
