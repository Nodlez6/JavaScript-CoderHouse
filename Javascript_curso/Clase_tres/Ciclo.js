
let condicion = true;

while( condicion ){
   let numero = Math.floor(Math.random() * 11); // retorna un numero aleatorio entre 0 y 10

   console.log('Tú número es: ' + numero)

   {(numero == 10) && (condicion = false)}

}

console.log('Excelente, el ciclo terminó, significa que salió un 10')