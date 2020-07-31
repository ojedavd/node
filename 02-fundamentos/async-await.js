// let getNombre = async() => {
//     return 'Victor';
// };

let getNombre = () => {

    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            resolve('Victor');
        }, 2000);
    });
}


let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;

}

saludo().then(mensaje => {
    console.log(mensaje)
})