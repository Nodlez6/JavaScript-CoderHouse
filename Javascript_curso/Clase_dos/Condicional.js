let puntaje_matematica = prompt("Ingresa tu puntaje de la PSU de matemáticas");
let puntaje_leguaje = prompt("Ingresa tu puntaje de la PSU de lenguaje");

if( puntaje_matematica >= 700 && puntaje_leguaje >= 600){
    alert('Con tu puntaje lograste entrar a ingeniería civil en informática')
}
else if( puntaje_matematica >= 700 && puntaje_leguaje < 600){
    alert('Tu puntaje de lenguaje es menor al solicitado (600)')
}
else if( puntaje_matematica < 700 && puntaje_leguaje > 600){
    alert('Tu puntaje de matemática es menor al solicitado (700)')
}
else{
    alert('No cumples con los puntajes mínimos')
}

const a = 1 == '1'

console.log(a)

