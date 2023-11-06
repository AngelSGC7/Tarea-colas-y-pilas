//Ejercicio 1//
function Ej1(pila,num){
    if(num < 0){
        return "el numero debe ser mayor o igual a 0";
    }
    if(num > pila.length){
        return "el numero supera la longitud de la pila";
    }
    let resultado = [];
    for(let i = 0; i < num; i++){
        resultado.push(pila[i]);
    }
    return resultado;
}

let resultado = Ej1(["pera","piña","sandia","manzana","naranja"],5)
console.log(resultado);

//Ejercicio 2//
function remplazar(pila,nuevo,viejo){
    if(pila[i] === viejo){
        pila[i] = nuevo;
    }
}
let result = [];
for(var x = 0; x < i; x++ ){
    result.push(pila[x]);
}
return result;


//Ejercicio 3//
function muestraCamino(origen,destino,pueblos){
    let caminoIda = origen;
    let caminoVuelta = destino;

    for(let i=0; i < pueblos.length; i++){
        caminoIda += "->" + pueblos[i];
        caminoVuelta = pueblos[i] + "->" + caminoVuelta;
    }

    caminoVuelta += "->" + origen;

    console.log("Camino:" + caminoIda);
    console.log("Devuelta:" + caminoVuelta);
}

muestraCamino("mi casa","la ecuela",["pueblo1","pueblo2"]);

//Ejercicio 4//

class Pila {
    constructor() {
      this.items = [];
    }
  
    apilar(elemento) {
      this.items.push(elemento);
    }
  
    desapilar() {
      if (this.items.length === 0) {
        return "La pila está vacía";
      }
      return this.items.pop();
    }
  
    mostrarPila() {
      return this.items;
    }
  }
  
  
  let pilaContenedores = new Pila();
  pilaContenedores.apilar(1);
  pilaContenedores.apilar(2);
  pilaContenedores.apilar(3);
  
  console.log("Pila inicial: ", pilaContenedores.mostrarPila());
  

  let contenedorRetirado = pilaContenedores.desapilar();
  console.log("Contenedor retirado: ", contenedorRetirado);
  console.log("Pila actualizada: ", pilaContenedores.mostrarPila());

//Ejercicio 5//

class Cola {
    constructor() {
        this.items = [];
    }

    encolar(elemento) {
        this.items.push(elemento);
    }

    desencolar() {
        if (this.items.length === 0) {
            return "La cola está vacia";
        }
        return this.items.shift();
    }

    imprimir() {
        return this.items;
    }
}

const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "morado", "blanco"];
const colaPares = new Cola();
const colaNones = new Cola();

colaOriginal.forEach((color, index) => {
    if (index % 2 === 0) {
        colaPares.encolar(color);
    } else {
        colaNones.encolar(color);
    }
});

console.log("Cola original: ", colaOriginal);
console.log("Cola 1: ", colaPares.imprimir());
console.log("Cola 2: ", colaNones.imprimir());

//Ejercicio 6//

class Cola {
    constructor() {
        this.items = [];
    }

    encolar(elemento) {
        this.items.push(elemento);
    }

    desencolar() {
        if (this.items.length === 0) {
            return "La cola esta vacia";
        }
        return this.items.shift();
    }

    imprimir() {
        return this.items;
    }
}

const colaInicial = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true },
];

const cola = new Cola();
const retirados = [];

colaInicial.forEach((persona) => {
    if (persona.ticket) {
        cola.encolar(persona);
    } else {
        retirados.push(persona);
    }
});

console.log("Cola inicial: ", colaInicial);
console.log("Elementos retirados: ", retirados);
console.log("Cola final: ", cola.imprimir());

