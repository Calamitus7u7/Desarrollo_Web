/* Esta función debe de cambiar en la parte del else cuando el fomrulario es válido, se debe mandar
   a guardar a base de datos y limpiar la cache.*/

function saveRegister(event){ 
    if(event) event.preventDefault();
    //Se usa event para crear un evento cada nuevo cada que se realice un nuevo registro
    //Se toman todos los identificadores del DOM, es decir, de la página en que nos encontramos
    const identificadoresDOM = ['nombre', 'apellido-p', 'apellido-m', 'phonenumber', 'email'];
    //Se genera un objeto usuario el cual recibe toda la informacion de los id's del DOM
    const usuario = {};
    let formularioValido = true;

    //Revisa que todos los campos hayan sido rellenados, en caso de que uno no este retorna una alerta.
    identificadoresDOM.forEach(id => {const valor = document.getElementById(id).value.trim();
    if (valor === "") formularioValido = false; 
    usuario[id] = valor});

    if(!formularioValido){
        alert("Por favor ingresa los datos solicitados en el formulario");
        return;
    }
    //Aquí es donde se debe mandar el registro a base, pero sera cuando este terminada en Postgresql y generados 
    // los controladores y metodos en node.
    console.log("Usuario generado correctamente")
}
