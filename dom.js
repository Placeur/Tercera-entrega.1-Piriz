//Creamos un elemento (p)

let divAModificar = document.getElementById("parrafo");

let parrafo = document.createElement("p");

parrafo.innerHTML = "Esto es un parrafo creado dinamicamente"

console.log(divAModificar)
divAModificar.append(parrafo);

//Agregar input al documento


let inputNombre = document.createElement("input");
let inputEdad = document.createElement("input");

divAModificar.appendChild(inputNombre);
divAModificar.appendChild(inputEdad);

inputNombre.id = "Nombre";
inputEdad.id = "Edad";

inputNombre.value = "Roberto";
inputEdad.value = 28;

//Crear lista

const padre = document.getElementById("padre");

const personas = ["Pedro", "Juan", "Roberto", "Lucas"];

for (const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.appendChild(li);
}


//Plantillas Literales

let producto = {id: 1, nombre: "Remera", precio: 1500};

let concatenando = "ID= " + producto.id + " El nombre del producto es " + producto.nombre +
" y su precio es de $ " + producto.precio

console.log(concatenando);

const container = document.createElement("div");

const miMain = document.getElementById("miMain");

container.innerHTML = `
                        <h3>ID: ${producto.id}</h3>
                        <p>Nombre del Producto: ${producto.nombre}</p>
                        <h4>Precio: ${producto.precio}</h4>
                        `

miMain.appendChild(container);


//EVENTOS:
//Capturar eventos:

const cuerpo = document.body;
const boton1 = document.querySelector("#boton1");

//Forma 1
//Elemento.addEventListener("Tipo de evento", la funcion)

boton1.addEventListener("click", () =>{
    //console.log("Se hizo click en el boton1");
    cuerpo.style.backgroundColor = "black";
})

cuerpo.addEventListener("click", () =>{
    //console.log("Se hizo click en el boton1");
    boton1.style.backgroundColor = "black";
})

//Forma 2

const boton2 = document.querySelector("#boton2");

boton2.onclick = () => {
    console.log("Cambiando nombre");
}


//Agregar a Local Storage:

const catalogo = {
    nombre: "Pantalon",
    precio: 1200,
}

localStorage.setItem("catalogo", catalogo);



//Operador Ternario
//Condicion ? true : false
//Condicion ? cosa1 : cosa2

let edad = parseInt(prompt("Ingrese una edad"));

edad <= 30 ? console.log("Joven") : console.warm("No tan joven");

//Otro ejemplo con Sugar Syntax

const usuario = {
    nombre : "Lucas",
    edad : 21
}

const habilitacion = (usuario.edad >= 18) ? console.log(`El usuario ${usuario.nombre} está habilitado para su licencia de conducir`) :
console.warm(`El usuario ${usuario.nombre} aún no está habilitado para su licencia de conducir`);

//Operadores Logicos
//Ejemplo con &&

const carritoCompra = [0];

carritoCompra.length === 0 && console.log("El Carrito está vacío");

//Ejemplo con OR

const usuario3 = {
    nombre : "Lucas",
    edad : 21
}

const usuario4 = null;
console.log(usuario3 || "El usuario no existe");
console.log(usuario4 || "El usuario no existe");

//Desestructuración

const usuario5 = {
    nombre : "Lucas",
    edad : 21,
    cursos: {
        desarrolloWeb: "Aprobado"
        javascript: "En curso"
    }
};

const usuario6 = {
    nombre : "Robert",
    edad : 18,
    cursos: {
        desarrolloWeb: "Aprobado";
        javascript: "En curso"
    }
};

//Imprimir nombre y edad

//let nombre = usuario5.nombre;
//let edad = usuario5.edad;

let {nombre, edad} = usuario5;
console.log(nombre, edad);

let {nombre, edad, cursos: {javascript}} = usuario5;
console.log(nombre, edad, javascript);



//Funcion para desestructurar

const desestructurarUsuario = (usuario) => {
    const {nombre, edad} = usuario;
    console.log(nombre, edad);
}

desestructurarUsuario(usuario3);
desestructurarUsuario(usuario4);










