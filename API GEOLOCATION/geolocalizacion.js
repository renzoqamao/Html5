function comenzar(){
  var miboton=document.getElementById("dame_ubicacion");
  miboton.addEventListener("click",obtener,false);
}
function obtener(){
  var parametros={enableHighAccuracy:true,timeout:10000,maximumAge:60000};
  //navigator.geolocation.getCurrentPosition(mostrar_posicion,gestion_errores,parametros);
  navigator.geolocation.watchPosition(mostrar_posicion,gestion_errores,parametros);

}
function mostrar_posicion(posicion){
  var ubicacion=document.getElementById("ubicacion");
  /*var miubicacion="";
  miubicacion+= "latitud:"+ posicion.coords.latitude + "<br>";
  miubicacion+= "longitud:"+ posicion.coords.longitude + "<br>";
  miubicacion+= "exactitud:"+ posicion.coords.accuracy + "<br>"; */
  //var mimapa="http://maps.googleapis.com/maps/api/staticmap?center" + posicion.coords.latitude +","+posicion.coords.longitude+","+"&zoom=12&size=400x400&sensor=false&markers="+posicion.coords.latitude+","+posicion.coords.longitude;
  //ubicacion.innerHTML=miubicacion;
  //ubicacion.innerHTML="<div>< img src=' "+ mimapa +" ' ></div>";
  var mimapa = "http://maps.googleapis.com/maps/api/staticmap?center" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;


 ubicacion.innerHTML="<div><img src= '"+ mimapa +"'></div>";
}
function gestion_errores(error){
  //alert("ha habido un error"+error.code+ " " + error.message);
  // if error.code==1 o error.code==2 o error.code==3
  if(error.message=="User denied Geolocation"){
    alert("Debes permitir el uso de la geolocation en tu navegador");
  }
}
window.addEventListener("load",comenzar,false);
