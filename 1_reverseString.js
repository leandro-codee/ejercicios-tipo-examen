/**
 * Crea una función que, dada una 
 * cadena de texto como parámetro, 
 * devuelva esa cadena invertida.
 * Ejemplos:
 *   - "hola"  -> "aloh"
 *   - "mundo" -> "odnum"
 */

function reverseString(str) {
    return str.split("").reverse().join('')
}

const result1 = reverseString("hola")
const result2 = reverseString("mundo")
console.log(result1)
console.log(result2)
