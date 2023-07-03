const especialistas = [
    {nombre: 'Luis Navas', especialidad: 'Css'},
    {nombre: 'Damaris Palacios', especialidad: 'Html'},
    {nombre: 'Pablo Marino', especialidad: 'JS'},
    {nombre: 'Benjamin Cappeta', especialidad: 'React'},
    {nombre: 'Elon Musk', especialidad: 'Base de Datos'},
    {nombre: 'Mark Zuckerberg', especialidad: 'Python'},
    {nombre: 'Pepe Luis', especialidad: 'C++'},

]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');


const filtrar = ()=>{

    resultado.innerHTML = ''

    const texto = formulario.value.toLowerCase();

    for(let esp of especialistas){
        let nombre = esp.nombre.toLowerCase();

        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${esp.nombre} - Especialidad: ${esp.especialidad} </li>
            `
        }

    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
             <li>No se encontraron coincidencias... </li>
            `

    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();

const formulario2 = document.querySelector('#formulario2');
const boton2 = document.querySelector('#boton2');
const resultado2 = document.querySelector('#resultado2');

const filtrar2 = ()=>{

    resultado2.innerHTML = ''

    const texto = formulario2.value.toLowerCase();

    for(let esp of especialistas){
        let especialidad = esp.especialidad.toLowerCase();

        if(especialidad.indexOf(texto) !== -1){
            resultado2.innerHTML += `
            <li>${esp.especialidad} - Especialista: ${esp.nombre} </li>
            `
        }

    }

    if(resultado2.innerHTML === ''){
        resultado2.innerHTML += `
             <li>No se encontraron coincidencias... </li>
            `

    }
}

boton2.addEventListener('click', filtrar2)
formulario2.addEventListener('keyup', filtrar2)

filtrar2();


