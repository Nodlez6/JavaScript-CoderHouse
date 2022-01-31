class Persona {
    constructor(nombre, apellido, edad) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    get edad(){
        return this._edad
    }
  }

const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
const edad = prompt("Ingrese su edad")

const persona = new Persona(nombre , apellido , edad)
console.log(persona.nombre)