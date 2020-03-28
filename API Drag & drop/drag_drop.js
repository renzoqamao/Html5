
var elem_origen;
var elem_destino;
function comenzar(){
  elem_origen=document.getElementById("imagen");
  elem_destino=document.getElementById("zonadestino");
  //elem_origen.addEventListener("dragstart",function(){alert("comenzo el evento")},false); // dragstart - drag - dragend
  elem_origen.addEventListener("dragstart",comenzamos_arrastrar,false); // dragstart - drag - dragend
  elem_origen.addEventListener("dragend",terminado ,false);


  //elem_destino.addEventListener("dragenter",function(e){ e.preventDefault();},false);

  elem_destino.addEventListener("dragenter",entrar,false);
  elem_destino.addEventListener("dragover",function(e){ e.preventDefault();},false);
  elem_destino.addEventListener("dragleave",saliendo,false);
  elem_destino.addEventListener("drop",soltado,false);
}
function comenzamos_arrastrar(e){
  var codigo=" <img src='  " +elem_origen.getAttribute("src")+ " ' >   ";
  e.dataTransfer.setData("Text",codigo);
}
function soltado(e){
  e.preventDefault();
  elem_destino.innerHTML=e.dataTransfer.getData("Text");
}
function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}
function entrar(e){
  e.preventDefault();
  elem_destino.style.background="rgba(8,252,25,.8)";
}
function saliendo(e){
  e.preventDefault();
  //elem_destino.style.background="#FFFFFF";
  elem_destino.style.visibility="hidden";
}

window.addEventListener("load",comenzar,false);
