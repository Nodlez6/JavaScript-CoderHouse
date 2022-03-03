import data from './data.json' assert {type: "json"}


const input_email = document.getElementById("email")
const input_pass = document.getElementById("password")

let dataUsuario;

$('#boton_login').on("click" , () => {
  
    let validUsuario = false

    data.map((usuario) => {
        if(usuario.email === input_email.value && usuario.contrasenia === input_pass.value){
            validUsuario = !validUsuario
            dataUsuario = usuario
            localStorage.setItem('value' , JSON.stringify(dataUsuario) )
        }
    })


    if (validUsuario){
        window.location.pathname = "/coderHouse/Javascript_curso/proyecto_curso/index.html"
    }
    else{
        swal("Error", "Credenciales no válidas", "error");
    }

    input_email.value = ''
    input_pass.value = ''
    
    
})

export function myDataUsuario(){
    return dataUsuario;
}

