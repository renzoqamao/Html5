function comenzar(){
  var boton= document.getElementById("grabar");
  boton.addEventListener("click",itemnuevo,false);
}
function itemnuevo(){
  var clave=document.getElementById("clave").value;
  var valor=document.getElementById("valor").value;
  //sessionStorage.setItem(clave,valor);
  localStorage.setItem(clave,valor);
  //sessionStorage[clave]=valor; // hace lo mismo con session localStorage
  leer_mostrar(clave);
  document.getElementById("clave").value="";
  document.getElementById("valor").value="";
}
function leer_mostrar(clave){
  var zonadatos=document.getElementById("zonadatos");
  zonadatos.innerHTML='<div><button onclick="eliminarTodo()">EliminarTodo</button></div>';
  //var elvalor=sessionStorage.getItem(clave);
  //var elvalor=sessionStorage[clave];
  for (var i = 0; i < localStorage.length; i++) {
    //var clave=sessionStorage.key(i);
    //var elvalor=sessionStorage.getItem(clave);
    var clave=localStorage.key(i);
    var elvalor=localStorage.getItem(clave);
    zonadatos.innerHTML+='<div>clave:'+clave+'--'+'Valor:'+elvalor+'<br><button onclick="eliminaritem(\''+clave+'\')">Eliminar</button></div>';
  }
}

function eliminarTodo(){

  if (confirm("Estas Seguro?")) {
    //sessionStorage.clear();
    localStorage.clear();
    leer_mostrar();
  }
}

function eliminaritem(clave){
  if (confirm("Estas Seguro?")) {
    //sessionStorage.removeItem(clave);
    localStorage.removeItem(clave);
    leer_mostrar();
  }
}
window.addEventListener("load",comenzar,false);
/* Almacenar informacion
api web storage
sessionStorage: almacenar en el dispositivo temporalmente
localStorage: almacenamiento en el dispositivo permanente
metodos: setItem y getItem*/
