var nameUser = "Anonimo";
var marcador_usuario = document.getElementById("puntos_usuario").innerText;
var marcador_cpu = document.getElementById("puntos_cpu").innerText;


const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";


function resultado(user, cpu) {
  var opcion1;
  var opcion2;
  var opcion3;
  var empate;

  if (user != cpu) {
    if (user === PIEDRA && cpu === PAPEL) {
      opcion1 = true;  
     
    } 
    else if (user === PAPEL && cpu === TIJERA) {
      opcion2 = true;  
      
    } 
    else if (user === TIJERA && cpu === PIEDRA) {
      opcion3 = true;  
      
    } 
    
    if (opcion1 || opcion2 || opcion3) {
      marcador_cpu++;
      document.getElementById("puntos_cpu").innerText = marcador_cpu;
     
    } 
    else if (empate) {
      alert("EMPATE!!!");
    }  
    else {
      marcador_usuario++;
      document.getElementById("puntos_usuario").innerText = marcador_usuario;
    }
  }

}


function jugar(jugadaUsuario) {
  resultado(jugadaUsuario, obtenerJugadaCPU());
}

function obtenerJugadaCPU() {
  let jugadaCPU = "";
  let random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      jugadaCPU = PIEDRA;
      break;

    case 2:
      jugadaCPU = PAPEL;
      break;

    case 3:
      jugadaCPU = TIJERA;
      break;
  }

  return jugadaCPU;
}

function establecerJugador() {
  nameUser = document.getElementById("user").value;
  if (nameUser) {
    alert("Hola, ahora estás jugando como " + nameUser + " !!!");
  } else {
    nameUser = "Anonimo";
  }
}