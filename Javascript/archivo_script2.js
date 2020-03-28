// comentarios /* */
function ejecuta(){
  //document.querySelector(".importante").onclick=saludo;
  //document.querySelectorAll(".importante")[1].onclick=saludo;
  //document.querySelector("#principal p:last-childs").onclick=saludo;
  //var elementos=document.querySelectorAll("#principal p")[0].onclick=saludo;
var elementos=document.querySelectorAll("#principal p,span");
  for(var i=0;i< elementos.length ;i++){

    elementos[i].onclick=saludo;
  }
}
function saludo(){
  alert("que hay denuevo?");
}
window.onload=ejecuta;
