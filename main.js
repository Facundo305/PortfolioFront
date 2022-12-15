fetch('usuarios.json')                  // Llama al JSON existente
.then((response) => response.json())    // Crea una copia temporal del JSON original
.then((usuarios) => {                   // A partir de esa copia nos 
    const nombresDeUsuarios = usuarios.map((userName) => userName.nombre);
    console.log(nombresDeUsuarios);     // Crea una constante "nombresDeUsuarios" que mapea a partir de la copia JSON
});                                     // mapea "nombre" y finaliza imprimiendo en consola la constante

//JSON.stringify -> transforma de js a json
//JSON.parse -> transforma de json a js