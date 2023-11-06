let arregloLineal = [2,6,3,1];

console.log(arregloLineal[1]);


class Pila{
    constructor(){
        this.data = []
    }
    push(element){
        this.data.push(element)
    }
    pop(){
        return this.data.pop()
    }
    peek(){
        return this.data[this.data.length - 1]
    }
    size(){
        return this.data.length
    }
    isEmpty(){
        return this.data.length === 0 ;
    }
    print(){
        console.log(this.data)
    }
}

let pila = new Pila()

pilaPlatos.push("plato1")
pilaPlatos.push("plato2")
pilaPlatos.push("plato3")
pilaPlatos.push("plato4")

pilaPlatos.print()

let elementoEliminado = pilaPlatos.pop()
pilaPlatos.print()
console.log(`el elemento eliminado es: ${elementoEliminado}`)


class PilaObjeto{
    constructor(){
        this.data = {}
        this.contador = 0
    }
    push(element){
        this.data[this.contador] = element
        this.contador ++
    }
    pop(){
        if(this.contador === 0){
            return null
        }
        
            let elemento = this.data[this.contador]
            delete this.data[this.contador]
            return elemento
        }
        peek(){
            return this.data[this.contador-1]
        }
        size(){
            return this.contador
        }
        isEmpty(){
            return this.contador === 0
        }
        print(){
            console.log(this.data)
        }
}