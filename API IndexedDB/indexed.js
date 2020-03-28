// JavaScript Document
var bd;
function iniciar(){

	zonadatos=document.getElementById("zonadatos");

	boton=document.getElementById("grabar");

	boton.addEventListener("click",agregarobjeto, false);

	var solicitud=indexedDB.open("DataBase2");

	solicitud.onsuccess=function(e){ // e= llamado a la base de datos

		bd=e.target.result; // el objeto es la base de datos


	}

	solicitud.onupgradeneeded=function(e){ // si es necesaria actualsizar cree la tabla

				bd=e.target.result;
		bd.createObjectStore("gente", {keyPath: "clave"}); // crea un almacen de datos

	}

}

function agregarobjeto(){

	var clave=document.getElementById("clave").value;

	var titulo=document.getElementById("texto").value;

	var Fecha=document.getElementById("fecha").value;

	var transaccion=bd.transaction(["gente"], "readwrite"); // alamcen de datos , tipo

	var almacen=transaccion.objectStore("gente"); // la transaccion en gente se almacena e nel almacen

	var agregar=almacen.add({clave: clave, titulo: titulo, Fecha: Fecha});

	agregar.addEventListener("success", mostrar, false);


	document.getElementById("clave").value=""

	document.getElementById("texto").value=""

	document.getElementById("fecha").value=""
}

function mostrar(){

	zonadatos.innerHTML="";

	var transaccion=bd.transaction(["gente"],"readonly");// solo leer

	var almacen=transaccion.objectStore("gente");

	var cursor=almacen.openCursor();

	cursor.addEventListener("success", mostrarDatos, false);

}

function mostrarDatos(e){

	var cursor=e.target.result;

	if(cursor){
		zonadatos.innerHTML+="<div>" + cursor.value.clave + " - " + cursor.value.titulo + " - " + cursor.value.Fecha + "</div>"+'<br><button onclick="eliminaritem('+cursor.value.clave+')">Eliminar</button></div>';
		cursor.continue();
	}
}

function eliminaritem(clave){
	if (confirm("Estas Seguro?")) {
		var transaccion=bd.transaction(["gente"], "readwrite"); // alamcen de datos , tipo

		var almacen=transaccion.objectStore("gente"); // la transaccion en gente se almacena e nel almacen

		var borrar = almacen.delete(clave);
		borrar.onsuccess = function(event){
			console.log("borrado con éxito!"+clave);
		}
		borrar.addEventListener("success", mostrar, false);
	}
}
window.addEventListener("load", iniciar, false);
