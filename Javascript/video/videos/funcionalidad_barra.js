
var mivideo, reproducir, barra, progreso, maximo;
maximo=600; // la barra mide 600 pixeles
function comenzar(){
  mivideo=document.getElementById("mivideo");
  reproducir=document.getElementById("reproducir");
  barra=document.getElementById("barra");
  progreso=document.getElementById("progreso");

  reproducir.addEventListener("click",clicando,false);

  barra.addEventListener("click",adelantando,false);

}

function clicando(){
    if((mivideo.paused==false) && (mivideo.ended==false)){
        mivideo.pause();
        reproducir.innerHTML="play";
    }
    else {
      mivideo.play();
      reproducir.innerHTML="pause";
      bucle=setInterval(estado,0.1); // el segundo lee cantidad de milisegundos
    }
}
window.addEventListener("load",comenzar,false);

function estado(){
  if (mivideo.ended==false) {
    var total=parseInt((mivideo.currentTime*maximo)/mivideo.duration);
    progreso.style.width=total+"px";
  }
}
function adelantando(posicion){
  if ((mivideo.paused==false) && (mivideo.ended==false)) {
    var ratonX=posicion.pageX-barra.offsetLeft;
    var nuevotiempo= (ratonX*mivideo.duration) / maximo;
    mivideo.currentTime=nuevotiempo;
    progreso.style.width=ratonX+"px";
  }
}
