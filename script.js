//dar color a una casilla
//document.getElementById("10").style.backgroundColor="blue";
function crearYponerPeon(){
//asigno a una variable una pieza
let peon= "♙";
let torre="♖";
let alfil="♗";
let caballo="♘";
let rei="♕";
let reina="♔";
//CAMBIOS A FUTURO COLOCAR FICHAS CON UN BUCLE
//coloco las fichas blancas
let posicionTorreBLancaIzquierda = document.getElementById("00");
posicionTorreBLancaIzquierda.innerHTML = "<P class=fichasBlancas >"+torre+"</p>";
let posicionCaballoBlancaIzquierda = document.getElementById("01");
posicionCaballoBlancaIzquierda.innerHTML = "<p class=fichasBlancas>"+caballo+"</p>";
let posicionAlfilblancaIzquierda = document.getElementById("02");
posicionAlfilblancaIzquierda.innerHTML = "<p class=fichasBlancas>"+alfil+"</p>";
let posicionReiblanca = document.getElementById("03");
posicionReiblanca.innerHTML = "<p class=fichasBlancas>"+rei+"</p>";
let posicionReinablanca = document.getElementById("04");
posicionReinablanca.innerHTML = "<p class=fichasBlancas>"+reina+"</p>";
let posicionTorreBLancaDerecha = document.getElementById("07");
posicionTorreBLancaDerecha.innerHTML = "<P class=fichasBlancas>"+torre+"</p>";
let posicionCaballoBlancaDerecha = document.getElementById("06");
posicionCaballoBlancaDerecha.innerHTML = "<p class=fichasBlancas>"+caballo+"</p>";
let posicionAlfilblancaDerecha = document.getElementById("05");
posicionAlfilblancaDerecha.innerHTML = "<p class=fichasBlancas>"+alfil+"</p>";
//peones blancos
let posicionPeonBlancas1 = document.getElementById("10");
posicionPeonBlancas1.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas2 = document.getElementById("11");
posicionPeonBlancas2.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas3 = document.getElementById("12");
posicionPeonBlancas3.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas4 = document.getElementById("13");
posicionPeonBlancas4.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas5 = document.getElementById("14");
posicionPeonBlancas5.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas6 = document.getElementById("15");
posicionPeonBlancas6.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas7 = document.getElementById("16");
posicionPeonBlancas7.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
let posicionPeonBlancas8 = document.getElementById("17");
posicionPeonBlancas8.innerHTML = "<p class=fichasBlancas>"+peon+"</p>";
//coloco las fichas Negras
let posicionTorreNegrasIzquierda = document.getElementById("70");
posicionTorreNegrasIzquierda.innerHTML = "<P class=fichasNegras>"+torre+"</p>";
let posicionCaballoNegrasIzquierda = document.getElementById("71");
posicionCaballoNegrasIzquierda.innerHTML = "<p class=fichasNegras>"+caballo+"</p>";
let posicionAlfilNegrasIzquierda = document.getElementById("72");
posicionAlfilNegrasIzquierda.innerHTML = "<p class=fichasNegras>"+alfil+"</p>";
let posicionReiNegras = document.getElementById("73");
posicionReiNegras.innerHTML = "<p class=fichasNegras>"+rei+"</p>";
let posicionReinaNegras = document.getElementById("74");
posicionReinaNegras.innerHTML = "<p class=fichasNegras>"+reina+"</p>";
let posicionTorreNegrasDerecha = document.getElementById("77");
posicionTorreNegrasDerecha.innerHTML = "<P class=fichasNegras>"+torre+"</p>";
let posicionCaballoNegrasDerecha = document.getElementById("76");
posicionCaballoNegrasDerecha.innerHTML = "<p class=fichasNegras>"+caballo+"</p>";
let posicionAlfilNegrasDerecha = document.getElementById("75");
posicionAlfilNegrasDerecha.innerHTML = "<p class=fichasNegras>"+alfil+"</p>";
//peones blancos 
let posicionPeonNegras1 = document.getElementById("60");
posicionPeonNegras1.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras2 = document.getElementById("61");
posicionPeonNegras2.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras3 = document.getElementById("62");
posicionPeonNegras3.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras4 = document.getElementById("63");
posicionPeonNegras4.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras5 = document.getElementById("64");
posicionPeonNegras5.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras6 = document.getElementById("65");
posicionPeonNegras6.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras7 = document.getElementById("66");
posicionPeonNegras7.innerHTML = "<p class=fichasNegras>"+peon+"</p>";
let posicionPeonNegras8 = document.getElementById("67");
posicionPeonNegras8.innerHTML = "<p class=fichasNegras>"+peon+"</p>";

posicionTorreBLancaDerecha.onclick = function (){borrar()};
function borrar(){
posicionTorreBLancaDerecha.innerHTML = "";
mover2();
}
function mover2(reply_click){
  
  posicionTorreBLancaDerecha = document.getElementById(reply_click);
  posicionTorreBLancaDerecha.innerHTML = "<P class=fichasBlancas >"+torre+"</p>";
}

document.getElementById("00").onclick = function() {mover()};
function mover(){
posicionTorreBLancaIzquierda.innerHTML = "";
posicionTorreBLancaIzquierda = document.getElementById("20");
posicionTorreBLancaIzquierda.innerHTML = "<P class=fichasBlancas >"+torre+"</p>";
}
}


function crearTablero(){
  let peon= "P";
for(var i = 0; i < 8; i++){
    document.write("<div class=fila>");
      for(var j =0; j < 8; j++){
          if((i+j)%2==0){
              document.write("<div class='blancas' onclick='reply_click(this.id)' id="+ i.toString() + j.toString() +"></div>");
          }else{
          document.write("<div class='negras' onclick='reply_click(this.id)' id="+ i.toString() + j.toString() +"></div>");
          }
         if(j==0){
           peones = document.getElementsByClassName("")
         } 
        }
    document.write("</div>");
  }
 
}
  crearTablero();
  crearYponerPeon();
