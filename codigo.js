// let nota = prompt('Ingrese su nota del 1 al 10')

// if(nota <=3){
//     alert('Muy deficiente')
// } 
// else if (nota > 3 && nota <= 5){
//     alert('Insuficiente')
// }
// else if (nota >5 && nota <=7){
//     alert('Bien')
// }
// else if (nota >7 && nota <=9){
//     alert('Notable')
// }
// else {
//     alert('Sobresaliente')
// }

// const persona1 = { nombre:'Leandro', edad:21, direc:'Lomas de tafi'}

// console.log(persona1['nombre'])

// function User (nombre, edad, calle){
//     this.nombre = nombre
//     this.edad = edad
//     this.calle = calle
// }

// const persona1 = new User ('Leandro', 21,  'Lomas de tafi')
// const persona2 = new User ('Camila', 20, 'Asuncion')
// const persona3 = new User ('Daiana', 21, 'Mercedes Sosa')
// console.log(persona1,persona2,persona3)

// for (const propiedad in persona1){
//     console.log(persona2)
// }


const arr = []
const dolar = 275

function ingresarUsuario(){
    alert('Bienvenido/a!')
    alert('Este es un convertidor de monedas (Pesos a Dolares)')
    const nombre = prompt('Ingrese su nombre')
    const apellido = prompt('Ingrese su apellido')
    const edad = parseInt(prompt('Ingrese su edad'))
    if(edad < 18){
        alert('Cambio de divisas solo para mayores de 18 años!')
    } else alert(`Hola ${nombre +' '+ apellido}`+ '!')


    const usuario = {nombre,apellido,edad}
    arr.push(usuario)
    }



function ingresarMonto(){
let cantidadDePesos = parseInt(prompt('Ingrese la cantidad de pesos que desea cambiar a dolares'))

    if(cantidadDePesos > 100){
        alert('La cantidad ingresada es de $' + cantidadDePesos)
        
    } else (alert('Por favor, ingrese un monto superior a $100'))


const cantidadConfirmada = parseInt(prompt('¿Desea realizar el cambio? \n 1-Si \n 2-No'))
const cantidadConvertida = cantidadDePesos/dolar;
const dolarFixeado = parseFloat(cantidadConvertida.toFixed(2))
if(cantidadConfirmada === 1){
    alert(`Ahora usted tiene: USD ${dolarFixeado}`)
} else (alert('No se ingresó ningun monto'))

const transaccion = {cantidadDePesos,cantidadConvertida:dolarFixeado,dolar}

arr.push(transaccion)
console.log(arr)
console.log(arr[1].cantidadConvertida)
}


window.addEventListener('DOMContentLoaded', function(){
ingresarUsuario()
ingresarMonto()
})

