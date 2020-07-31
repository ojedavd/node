function saludar(nombre) {
    
    let mensaje = `Hola ${ nombre}`;

    return mensaje
}

let saludo = saludar('Victor');

console.log(saludo);