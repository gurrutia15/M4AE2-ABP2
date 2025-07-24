document.addEventListener('DOMContentLoaded', function () {

    let mayorEdad = document.getElementById('mayor_edad')
    let ciVigente = document.getElementById('cedula_vigente')
    let ahorroMinimo = document.getElementById('ahorro_minimo')
    let rsh70 = document.getElementById('rsh70')
    let botonValidar = document.getElementById('boton_validar')

    const verdadero = (selectElement) => {
        return selectElement.value === 'si'
    }




        botonValidar.addEventListener('click', (e) => {
            e.preventDefault()

            if (verdadero(mayorEdad) && verdadero(ciVigente) && verdadero(ahorroMinimo) && verdadero(rsh70) === true) {
                alert('Puede optar al beneficio')
            } else {
                alert('Faltan requisitos por cumplir')
            }
        })

    
})