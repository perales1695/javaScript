window.onload = function () {
    verDatos();
}


var objeto;

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "gatos.json", true);
    http.send(null);

    function mostrar() {
        let respuesta = document.getElementById("container");
        //let objetoBackup = objeto;
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            mostrarDatos(objeto);
        }
    }
}

/* function mostrarDatos(obj){ // ejercicio 3
let datos =obj;
console.log(datos.gatos)

let suma=0;
let sumaEdad=0;

datos.gatos.reduce((a,b)=>{
    (b.sexo=="hembra")?suma+=1:0
},0)

datos.gatos.reduce((a,b)=>{
(b.sexo=="macho")?sumaEdad +=b.peso*1:0
},0)
console.log(suma);
console.log("la suma de peso de los gatos macho es: "+sumaEdad+ "que gordos")
} */
/////////////////////////////////

function mostrarDatos(obj){ /* ejercicio 4 */
let datos =obj;
console.log(datos.gatos)

let suma=0;
let sumaEdad=0;

let sexo1;
bouncer(datos.gatos);

/* datos.gatos.filter((a)=>{
    (a.sexo=="macho")? sexo1=true : sexo1=false
},true); */

/* datos.gatos.filter(function(x) { 
    console.log(x === true)
    if(x.sexo=="macho" !== false) {
        return true;
    }
 }); */

} 

function bouncer(arr) {
    return arr.filter(function(x) { console.log(x.raza=="persa" /* || x.sexo=="hembra" */ === true)
       return /* x.sexo=="hembra" || */ x.raza=="persa" !== false;
    });
}
