var opera='';
var res='';
function envnum(arg) {
	alert("Usted ha seleccionado el numero: "+arg);
	opera=opera+arg;
	inserttesxt();
}
function envsig(arg) {
	alert("Usted ha seleccionado la operacion: "+arg);	
	opera=opera+arg;
	inserttesxt();
}
function solu() {
	res=eval(opera);
	alert("El resultado de la operacion es: "+res);	
	finalopera(res);
}
function restore() {
	opera='';
	res='';
	document.getElementById("bonus").innerHTML="";
}
function inserttesxt(){
	document.getElementById("bonus").innerHTML=opera;
}
function finalopera(arg){
	document.getElementById("bonus").innerHTML=opera+"="+res;
}