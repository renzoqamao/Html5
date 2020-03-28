// comentarios /* */
function ejecuta(){
  /*for(var i=0 ; i<3; i++){
    document.getElementsByTagName("p")[i].onclick=saludo;
  }*/
  //document.getElementById('importante').onclick=saludo;
  var z = document.getElementsByClassName("importante")[0].onclick=saludo;
}
function saludo(){
  alert("que hay denuevo?");
}
window.onload=ejecuta;
