const tipo_cambio = 745
let inputDolar= document.getElementById('monto_ingresado')
let botonIngresar = document.getElementById('btn_ingresar')
let resultadoDiv = document.getElementById('resultado')

let validacion = ()=>{
    let valor = inputDolar.value.trim()

    if (valor === ''){
    alert('Debe ingresar un número')
    return false
    }

    let numero = parseFloat(valor)

    if(isNaN(numero)){
        alert('Debe ingresar un número válido')
        return false
    }

    if(numero <=0){
        alert('El monto debe ser mayor a 0')
        return false
    }

    return numero
}

botonIngresar.addEventListener('click', (e)=>{
    e.preventDefault()

    let montoValido = validacion()

    if(montoValido){
        let equivalencia = montoValido * tipo_cambio
        resultadoDiv.innerHTML =`
        <p> Conversión:</p>
        <p> ${montoValido} USD =$${equivalencia.toFixed(2)} CLP</p>
        ` 
    }
})