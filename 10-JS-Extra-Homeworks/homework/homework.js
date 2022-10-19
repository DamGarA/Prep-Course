// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let a = Object.keys(objeto)
  let b = [];
  for (let i=0; i<a.length; i++) {
    b.push([a[i], objeto[a[i]]])
  }
  return b
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let a = [...string];
  let suma = 1;
  let obj = {};
  
  for (let i = 0; i<string.length; i++) {
    if (i == string.length-1) {
      if (a[i] == a[i-1]) {
        obj[a[i]] = suma;
        return obj
      } else {
        obj[a[i]] = 1;
        return obj
      }
    }

    for (let j = i+1; j<string.length; j++) {
      if (a[i] == a[j]) {
        a[j] = a[i+1];
        a[i+1] = a[i];
        suma ++;
        j = string.length - 1
      } else if (j == string.length - 1) {
        obj[a[i]] = suma;
        suma = 1;
      }
    }
  }
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let pMay = "";
  let pMin = "";

  for (let i = 0; i<s.length; i++) {
    if(s[i] == s[i].toUpperCase()) {
      pMay = pMay + s[i] 
    } else {
      pMin = pMin + s[i]
    }
  }
  return pMay+pMin
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palinv = ""
  let frase = ""

  for (let i = 0; i<str.length; i++) {
    if (i == str.length - 1) {
      palinv = str[i] + palinv;
      frase = frase + palinv;
      return frase
    } else if (str[i] == " ") {
      frase = frase + palinv + " ";
      palinv = ""
    } else {
      palinv = str[i] + palinv
    }    
  }
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString()
  let numinv = ""
  for (let i = 0; i < num.length; i++) {
    numinv = num[i] + numinv
  }
  if (num == numinv) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str = ""
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] != "a" && cadena[i] != "b" && cadena[i] != "c") {
      str = str + cadena[i]
    }
  }
  return str
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let a = [...arr]
  
  for (let i = 1; i < a.length; i++) {
    if (a[i].length < a[i - 1].length ) {
      let temp = a[i];
      a[i] = a[i - 1];
      a[i - 1] = temp;
      i = i-2;
  
    } 
  }
  return a
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] == arreglo2[j]){
        arr.push(arreglo1[i]);
        j = arreglo2.length
      }
    }
  }
  return arr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

