
class Usuario{

    constructor(ID, nombre , email , contrasenia){
        this._ID = ID;
        this._nombre = nombre;
        this._email = email;
        this._contrasenia = contrasenia;
    }
    get email(){
        return this._email
    }
    get nombre(){
        return this._nombre
    }
    get contrasenia(){
        return this._contrasenia
    }
}
const valorInput = document.getElementById('input-calculadora')
const historial = document.getElementById('historial__card__contenedor')
const usuarioReference = document.getElementById('usuario__contenedor')

console.log(historial)
const usuario = JSON.parse(localStorage.getItem('value'))
const newUsuario = new Usuario(usuario.id , usuario.nombre, usuario.email , usuario.contrasenia )
console.log(newUsuario)

const upperCaseFirstLetter = (newUsuario.nombre).charAt(0).toUpperCase() + newUsuario.nombre.slice(1)

const nombre = document.createElement('p')
nombre.textContent = `Nombre: ${upperCaseFirstLetter}` 

const correo = document.createElement('p')
correo.textContent = `Correo: ${newUsuario.email}` 

usuarioReference.append(nombre);
usuarioReference.append(correo);


const resuelve = (operacionIngresada) => {
    operacionIngresada = operacionIngresada.replace('X', '*')
    return eval(operacionIngresada)
}



  
const numeroCalculadora = (numero) => {
    valorInput.value = valorInput.value + numero

}

const instruccionCalculadora = (opcion) => {
    switch(opcion){
        case 'C':
            valorInput.value = ''
            break;
        case 'Borrar':
            valorInput.value = valorInput.value.slice(0 , valorInput.value.length - 1)
            break;
        case '=':
            const temp = valorInput.value
            valorInput.value = resuelve(valorInput.value)
            const newDiv = document.createElement('div');
            newDiv.classList.add('historial__card');
            const h4Card = document.createElement('h4');
            h4Card.textContent = temp;
            const pCard = document.createElement('p')
            pCard.textContent = valorInput.value
            
            historial.append(newDiv)
            newDiv.append(h4Card)
            newDiv.append(pCard)
            break;
    }

}

const operacionCalculadora = (opcion) => {
    switch(opcion){
        case '+':
            valorInput.value = valorInput.value + ' + '
            break;
        case '-':
            valorInput.value = valorInput.value + ' - '
            break;
        case 'X':
            valorInput.value = valorInput.value + ' X '
            break;
        case '/':
            valorInput.value = valorInput.value + ' / '
            break;
    }
    
}
