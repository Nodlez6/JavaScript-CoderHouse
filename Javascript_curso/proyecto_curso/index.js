
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

console.log(historial)
const usuario = JSON.parse(localStorage.getItem('value'))
const newUsuario = new Usuario(usuario.id , usuario.nombre, usuario.email , usuario.contrasenia )
console.log(newUsuario)

const upperCaseFirstLetter = (newUsuario.nombre).charAt(0).toUpperCase() + newUsuario.nombre.slice(1)

$('#usuario__contenedor').append(`<p>Nombre: ${upperCaseFirstLetter}</p>`)
$('#usuario__contenedor').append(`<p>Correo: ${newUsuario.email}</p>`)

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
            $('#historial__card__contenedor').append(`<div class="historial__card">
                <h4>${temp}</h4>
                <p>${valorInput.value}</p>
            </div>`)
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
