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

let valor_uno = parseInt(prompt("Ingrese el primer valor"))

let valor_dos = parseInt(prompt("Ingrese el segundo valor"))

alert("Que quiere calcular? 1- Suma , 2- Resta , 3- Division , 4- Multiplicacion")
const opcion = prompt("Ingrese opción");



switch(opcion){

    case "1":
        console.log(suma(valor_uno , valor_dos))
        break; 
    case "2":
        console.log(resta(valor_uno , valor_dos))
        break; 
    case "3":
        console.log(division(valor_uno , valor_dos))
        break; 
    case "4":
        console.log(multiplicacion(valor_uno , valor_dos))
        break; 
    default:
        break;
        
}


