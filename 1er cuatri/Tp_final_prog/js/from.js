
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#email");
let tel = document.querySelector("#telefono");
let consulta = document.querySelector("#consulta");
let btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); 

    let nombreValue = nombre.value;
    let apellidoValue = apellido.value;
    let emailValue = email.value;
    let telValue = tel.value;
    let consultaValue = consulta.value;

    //VALIDAR DATOS
    if (nombreValue === "" || apellidoValue === "" || emailValue === "" || telValue === "" || consultaValue === "") {
        alert("Todos los campos deben ser completados.");
        return; 
    }

    let contenido = `Nombre: ${nombreValue}\nApellido: ${apellidoValue}\nEmail: ${emailValue}\nTeléfono: ${telValue}\nConsulta: ${consultaValue}`;
    
    let blob = new Blob([contenido], {type: "text/plain;charset=utf-8"}); 

    let nombreArchivo = "consulta.txt";
    
    saveAs(blob, nombreArchivo);

    nombre.value = "";
    apellido.value = "";
    email.value = "";
    tel.value = "";
    consulta.value = "";
    
    alert("La información ha sido guardada exitosamente.");
});
