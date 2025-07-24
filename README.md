Repositorio: https://github.com/gurrutia15/M4AE2-ABP2.git

Esta actividad consta de 2 ejercicios:

# Ejercicio 1
## Contexto 
Crear una función que recibe como parámetros el monto total en dólares de la cuenta corriente de un cliente y devuelve su equivalente en pesos chilenos, considerando un tipo de cambio a 745.

## Requerimiento
Construir una pieza de código Javascript para que solo reciba montos
correctos, es decir, solo números, teniendo en cuenta que al ser dólares,
se podría encontrar con montos que incluyen centavos.

### Archivos
- HTML: `index.html`
- JS: `index.js`

## Desarrollo
El index.html cuenta con un formulario formado por un input que recibe el monto en USD y que contiene las primeras validaciones para cumplir con los requerimientos:

- Atributo `type="number"` 
- Atributo `min="0.001"` (considerando los centavos)

En el archivo index.js lo primero es capturar los diferentes elementos del DOM para luego crear la función de validación. Por último la función que desencadena el evento

# Ejercicio 2
## Contexto
El estado de Chile posee un beneficio denominado “Subsidio de arriendo
de vivienda”, el cual consiste en un aporte mensual de 4,2 Unidades de
Fomento (UF) por un máximo de 170 UF, el cual podrá ser utilizado de
manera consecutiva o fragmentada en un plazo de 8 años.

## Requerimiento
Para optar a este beneficio, se debe cumplir lo siguiente:
- Ser mayor de 18 años al momento de postular.
- Contar con cédula de identidad vigente. Las personas extranjeras
deben presentar cédula de identidad para extranjeros.
- Acreditar ahorro mínimo de 4 UF al momento de postular, en una
cuenta de ahorro para la vivienda a nombre del postulante, su
cónyuge o conviviente civil.
- Pertenecer hasta el 70% más vulnerable de la población, según la calificación socioeconómica del Registro Social de Hogares.

### Archivos
- HTML: `index_subsidio.html`
- JS: `subsidio_arriendo.js`

## Desarrollo
El index_subsidio.html cuenta con un formulario formado por 4 select, uno por cada opción a evaluar que contiene 2 opciones: sí y no

En el archivo subsidio_arriendo.js lo primero que se hace es capturar los elementos del DOM necesarios para la manipulación de éste.
Se construye la función de validación que se usará más adelante como parte del evento