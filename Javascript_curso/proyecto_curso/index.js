const suma = (a , b) => {
    return a + b
}
const resta = (a , b) => {
    return a - b
}
const division = (a , b) => {
    return a / b ;
}
const multiplicacion = (a , b) => {
    return a * b;
}

const valorInput = document.getElementById('input-calculadora')


const numeroCalculadora = (numero) => {

    valorInput.value = valorInput.value + numero


}

const instruccionCalculadora = (opcion) => {
    switch(opcion){
        case 'C':
            valorInput.value = ''
            break;
        case 'Borrar':
            break;
        case '=':
            break;
    }

}

const operacionCalculadora = (opcion) => {
    switch(opcion){
        case '+':
            valorInput.value = valorInput.value + ' + '
            break;
        case '-':
            break;
        case 'X':
            break;
        case '/':
            break;
    }
    
}



