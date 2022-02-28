
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

const usuario = JSON.parse(localStorage.getItem('value'))
const newUsuario = new Usuario(usuario.id , usuario.nombre, usuario.email , usuario.contrasenia )
console.log(newUsuario)

const upperCaseFirstLetter = (newUsuario.nombre).charAt(0).toUpperCase() + newUsuario.nombre.slice(1);

let historialArray = JSON.parse(localStorage.getItem('historial')) || [];

historialArray.forEach(hist => {
    $('#historial__card__contenedor').append(`<div id="${hist.id}" class="historial__card">
                <span ><i onClick="eliminarOperacion(${hist.id})" class="fa-solid fa-x"></i></span>
                <h4>${hist.operacion}</h4>
                <p>${hist.resultado}</p>
            </div>`)
            $('.historial__card').hide()
            $('.historial__card').fadeIn(1000)
})



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
            const date = new Date()
            const id = date.getMinutes() + date.getSeconds() + date.getMilliseconds();
            console.log(id)
            $('#historial__card__contenedor').append(`<div id="${id}" class="historial__card">
                <span ><i onClick="eliminarOperacion(${id})" class="fa-solid fa-x"></i></span>
                <h4>${temp}</h4>
                <p>${valorInput.value}</p>
            </div>`)
            $('.historial__card').hide()
            $('.historial__card').fadeIn(1000)

            historialArray.push({
                id: id,
                operacion: temp,
                resultado: valorInput.value
            })
            localStorage.setItem('historial' , JSON.stringify(historialArray) )
            
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

let data = {};
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=30&order=market_cap_desc",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "5dd0733e4emsh6fdd597a6ca7a88p17c758jsnc499c45df7c3"
	}
};

$.ajax(settings).done(function (response) {
    console.log(response)
   
	response.forEach((elem, index) => {
        let aux = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td><img style="margin-right: 1rem;" width="20px" src="${elem.image}" />${elem.id}</td>
                        <td>${elem.current_price}</td>
                        <td>${elem.high_24h}</td>
                        <td>${elem.low_24h}</td>
                        <td><button onClick="send(${elem.current_price})" class="btn btn-primary">
                            <img width="33px" src="./assets/calculadora.png"/>
                        </button></td>
                      </tr>`

        $('#data-crypto').append(aux)
    });
});

//$('data-crypto').append(table)

const send = (valor_crypto) => {
    valorInput.value = valor_crypto
}

const eliminarOperacion = (id) => {
    historialArray = historialArray.filter(hist => hist.id !== id) 
    $(`#${id}`).remove();
    localStorage.setItem('historial' , JSON.stringify(historialArray) )
}