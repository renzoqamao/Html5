
var mivideo, reproducir, barra, progreso, maximo;
maximo=600; // la barra mide 600 pixeles
function comenzar(){
  miaudio=document.getElementById("miaudio");
  reproducir=document.getElementById("reproducir");
  barra=document.getElementById("barra");
  progreso=document.getElementById("progreso");

  reproducir.addEventListener("click",clicando,false);

  barra.addEventListener("click",adelantando,false);

}

function clicando(){
    if((miaudio.paused==false) && (miaudio.ended==false)){
        miaudio.pause();
        reproducir.innerHTML="play";
    }
    else {
      miaudio.play();
      reproducir.innerHTML="pause";
      bucle=setInterval(estado,0.1); // el segundo lee cantidad de milisegundos
    }
}
window.addEventListener("load",comenzar,false);

function estado(){
  if (miaudio.ended==false) {
    var total=parseInt((miaudio.currentTime*maximo)/miaudio.duration);
    progreso.style.width=total+"px";
  }
}
function adelantando(posicion){
  if ((miaudio.paused==false) && (miaudio.ended==false)) {
    var ratonX=posicion.pageX-barra.offsetLeft;
    var nuevotiempo= (ratonX*miaudio.duration) / maximo;
    miaudio.currentTime=nuevotiempo;
    progreso.style.width=ratonX+"px";
  }
}
