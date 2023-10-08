//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres(cadena) {
    // Usamos la propiedad length de la cadena para obtener su longitud.
    var longitud = cadena.length;
    return longitud;
  }
  
  // Ingresamos dato
  var texto = "Hola Mundo";
  var resultado = contarCaracteres(texto);
  console.log(`El número de caracteres en '${texto}' es: ${resultado}`);

//2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortarTexto(cadena, caracteres) {
    // Usamos el método slice() para recortar la cadena hasta el número de caracteres especificados.
    var textoRecortado = cadena.slice(0, caracteres);
    return textoRecortado;
  }
  
  // Ejemplo de uso:
  var texto = "Hola Mundo";
  var caracteres = 4;
  var resultado = recortarTexto(texto, caracteres);
  console.log(`El texto recortado de '${texto}' es: '${resultado}'`);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function dividirTexto(cadena, separador) {
    // Usamos el método split() para dividir la cadena en un array utilizando el separador.
    var arregloDeTexto = cadena.split(separador);
    return arregloDeTexto;
  }
  
  // Ejemplo 
  var texto = 'hola que tal';
  var separador = ' ';
  var resultado = dividirTexto(texto, separador);
  console.log(resultado);
  

//4) Programa una fucion para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.
function calcularPrecioConDescuento(precioOriginal, descuento) {
    // Calculamos el precio con descuento restando el descuento al precio original.
    var precioConDescuento = precioOriginal - (precioOriginal * (descuento / 100));
    return precioConDescuento;
  }
  
  //Se ingresan los datos
  var precioOriginal = 1000;
  var descuento = 20;
  var precioConDescuento = calcularPrecioConDescuento(precioOriginal, descuento);
  console.log(`El precio con descuento es: ${precioConDescuento}`);
  

//5) Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.
function calcularEdad(fechaNacimiento) {
    var fechaActual = new Date(); // Obtenemos la fecha actual.
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear(); // Restamos los años.
    
    // Verificamos si ya ha pasado su cumpleaños este año.
    if (
      fechaActual.getMonth() < fechaNacimiento.getMonth() ||
      (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      edad--; // Restamos un año si aún no ha cumplido años este año.
    }
    
    return edad;
  }
  
  // Ejemplo 
  var fechaNacimiento = new Date(1988, 8, 1); // Los meses en JavaScript son indexados desde 0 (enero) hasta 11 (diciembre).
  var edad = calcularEdad(fechaNacimiento);
  console.log(`La edad es: ${edad} años`);

//6) Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV
function decimalARomano(numero) {
    if (numero < 1 || numero > 1000) {
      return "El número debe estar entre 1 y 1000";
    }
  
    var unidadesRomanas = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var decenasRomanas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var centenasRomanas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var milesRomanos = ["", "M", "MM", "MMM"];
  
    var unidades = numero % 10;
    var decenas = Math.floor((numero % 100) / 10);
    var centenas = Math.floor((numero % 1000) / 100);
    var miles = Math.floor(numero / 1000);
  
    var numeroRomano =
      milesRomanos[miles] +
      centenasRomanas[centenas] +
      decenasRomanas[decenas] +
      unidadesRomanas[unidades];
  
    return `El ${numero} es ${numeroRomano}`;
  }
  
  // Ejemplo 
  var numero = 15;
  var resultado = decimalARomano(numero);
  console.log(resultado); // Debería imprimir "El 15 es XV"

//7) progrma conviete decimal a binario. ejemplo: 1000 = 1111101000.
function decimalABinario(numero) {
    if (numero === 0) {
      return "0";
    }
  
    var binario = "";
    while (numero > 0) {
      // Calculamos el residuo al dividir el número por 2.
      var residuo = numero % 2;
  
      // Agregamos el residuo al inicio de la representación binaria.
      binario = residuo + binario;
  
      // Dividimos el número por 2 para continuar con el siguiente bit.
      numero = Math.floor(numero / 2);
    }
  
    return binario;
  }
  
  // Ejemplo
  var numeroDecimal = 1000;
  var binario = decimalABinario(numeroDecimal);
  console.log(`El número binario de ${numeroDecimal} es: ${binario}`);

//8) Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.
function contarVocales(cadena) {
    // Expresión regular para buscar vocales (mayúsculas y minúsculas) en la cadena.
    var expresionRegular = /[aeiouAEIOU]/g;
    
    // Usamos el método match() para encontrar todas las coincidencias de la expresión regular.
    var coincidencias = cadena.match(expresionRegular);
    
    // Si no se encuentran coincidencias, el resultado es 0; de lo contrario, contamos las coincidencias.
    var numeroVocales = coincidencias ? coincidencias.length : 0;
    
    return numeroVocales;
  }
  
  // Ejemplo 
  var texto = "Hola Mundo";
  var resultado = contarVocales(texto);
  console.log(`El número de vocales en '${texto}' es: ${resultado}`);

//9) Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.
function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas y eliminamos los espacios en blanco.
    palabra = palabra.toLowerCase().replace(/\s/g, "");
  
    // Revertimos la palabra.
    var palabraRevertida = palabra.split("").reverse().join("");
  
    // Comparamos la palabra original con la palabra revertida para determinar si es un palíndromo.
    return palabra === palabraRevertida;
  }
  
  // Ejemplo
  console.log(esPalindromo("Salas")); // Debería devolver true
  console.log(esPalindromo("Hola"));  // Debería devolver false

//10) Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".
function eliminarEspacios(cadena) {
    // Utilizamos el método replace() con una expresión regular para reemplazar todos los espacios en blanco por una cadena vacía.
    var cadenaSinEspacios = cadena.replace(/\s+/g, "");
    
    return cadenaSinEspacios;
  }
  
  // Ejemplo de uso:
  var texto = "Hola Mundo";
  var textoSinEspacios = eliminarEspacios(texto);
  console.log(`Texto sin espacios: '${textoSinEspacios}'`);
  
//11) Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".
function obtenerInicialesMayusculas(cadena) {
    // Dividimos la cadena en palabras utilizando el espacio como separador.
    var palabras = cadena.split(" ");
    
    // Inicializamos una cadena vacía para almacenar las iniciales.
    var iniciales = "";
    
    // Iteramos a través de las palabras y agregamos la primera letra de cada palabra a las iniciales en mayúsculas.
    for (var i = 0; i < palabras.length; i++) {
      var palabra = palabras[i];
      if (palabra.length > 0) {
        iniciales += palabra[0].toUpperCase();
      }
    }
    
    return iniciales;
  }
  
  // Ejemplo 
  var texto = "Yoni Escobar";
  var inicialesMayusculas = obtenerInicialesMayusculas(texto);
  console.log(`Las iniciales en mayúsculas son: '${inicialesMayusculas}'`);

//12) Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.
function contarPalabras(cadena) {
    // Utilizamos la función split() para dividir la cadena en palabras.
    var palabras = cadena.split(/\s+/);
    
    // Eliminamos posibles elementos vacíos del array de palabras.
    palabras = palabras.filter(function(palabra) {
      return palabra.trim() !== "";
    });
    
    // Devolvemos la longitud del array de palabras, que representa la cantidad de palabras.
    return palabras.length;
  }
  
  // Ejemplo 
  var texto = "Hola Mundo";
  var cantidadPalabras = contarPalabras(texto);
  console.log(`El número de palabras en '${texto}' es: ${cantidadPalabras}`);
  


//13) Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".
function capitalizarPrimerasLetras(cadena) {
    // Dividimos la cadena en palabras utilizando el espacio como separador.
    var palabras = cadena.split(" ");
    
    // Inicializamos una cadena vacía para almacenar el resultado.
    var resultado = "";
    
    // Iteramos a través de las palabras y se coloca mayuscula la primera letra de cada palabra.
    for (var i = 0; i < palabras.length; i++) {
      var palabra = palabras[i];
      if (palabra.length > 0) {
        if (i > 0) {
          resultado += " "; // Agregamos un espacio antes de la palabra, excepto para la primera palabra.
        }
        resultado += palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
      }
    }
    
    return resultado;
  }
  
  // Ejemplo 
  var texto = "hola mundo";
  var textoCapitalizado = capitalizarPrimerasLetras(texto);
  console.log(`Texto mayuscula: '${textoCapitalizado}'`);

//14) Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".
function invertirCadena(cadena) {
    // Utilizamos el método split() para dividir la cadena en un array de caracteres.
    var caracteres = cadena.split("");
  
    // Utilizamos el método reverse() para invertir el array de caracteres.
    var caracteresInvertidos = caracteres.reverse();
  
    // Utilizamos el método join() para unir los caracteres en una cadena nuevamente.
    var cadenaInvertida = caracteresInvertidos.join("");
  
    return cadenaInvertida;
  }
  
  // Ejemplo 
  var texto = "Hola Mundo";
  var textoInvertido = invertirCadena(texto);
  console.log(`Texto invertido: '${textoInvertido}'`);

//15) Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".
function suma(...numeros) {
    var total = 0;
  
    for (var i = 0; i < numeros.length; i++) {
      total += numeros[i];
    }
  
    return `La suma de todos los números es ${total}.`;
  }
  
  // Ejemplo 
  var resultado = suma(10, 20, 30, 40, 50);
  console.log(resultado); // Debería imprimir "La suma de todos los números es 150."

//16) Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".
function encontrarMayorYMenorEdad(...edades) {
    if (edades.length === 0) {
      return "No se proporcionaron edades";
    }
  
    var edadMayor = edades[0];
    var edadMenor = edades[0];
  
    for (var i = 1; i < edades.length; i++) {
      if (edades[i] > edadMayor) {
        edadMayor = edades[i];
      }
      if (edades[i] < edadMenor) {
        edadMenor = edades[i];
      }
    }
  
    return `La edad mayor es ${edadMayor} y la edad menor es ${edadMenor}.`;
  }
  
  // Ejemplo 
  var resultado = encontrarMayorYMenorEdad(10, 20, 30, 40, 50);
  console.log(resultado); // "La edad mayor es 50 y la edad menor es 10."

//17) programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".
function escalaDeNotas(nota) {
    if (nota < 0 || nota > 10) {
      return "Nota fuera de rango";
    } else if (nota <= 5) {
      return "Pésimo";
    } else if (nota <= 7) {
      return "Regular";
    } else if (nota <= 9) {
      return "Bueno";
    } else {
      return "Excelente";
    }
  }
  
  // Ejemplo 
  var nota = 7;
  var resultado = escalaDeNotas(nota);
  console.log(`La nota ${nota} corresponde a: ${resultado}`);

//18) programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.
function contarCifras(numero) {
    // Convertimos el número a una cadena de texto y calculamos su longitud.
    var numeroComoTexto = numero.toString();
    var longitud = numeroComoTexto.length;
    
    return longitud;
  }
  
  // Ejemplo 
  var numero = 1234;
  var cantidadCifras = contarCifras(numero);
  console.log(`El número ${numero} tiene ${cantidadCifras} cifras.`);
  

//19) programa que muestre los numeros primos de 1 a 1000.
function mostrarNumerosPrimos() {
    for (var numero = 2; numero <= 1000; numero++) {
      var esPrimo = true;
  
      for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          esPrimo = false;
          break;
        }
      }
  
      if (esPrimo) {
        console.log(numero);
      }
    }
  }
  
  // Llamamos a la función para mostrar los números primos en el rango de 1 a 1000.
  mostrarNumerosPrimos();

//20) Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".
function jugarPiedraPapelTijera(jugador1, jugador2) {
    // Definimos las reglas del juego.
    var reglas = {
      "Piedra": "Tijera",
      "Tijera": "Papel",
      "Papel": "Piedra"
    };
  
    // Verificamos si las jugadas son válidas.
    if (!reglas.hasOwnProperty(jugador1) || !reglas.hasOwnProperty(jugador2)) {
      return "Jugada no válida";
    }
  
    // Determinamos el resultado del juego.
    var resultado = "";
    if (jugador1 === jugador2) {
      resultado = "Empate";
    } else if (reglas[jugador1] === jugador2) {
      resultado = jugador1 + " gana.";
    } else {
      resultado = jugador2 + " gana.";
    }
  
    return `Jugador 1: ${jugador1}, Jugador 2: ${jugador2}, Resultado: ${resultado}`;
  }
  
  // Ejemplo 
  var jugador1 = "Piedra";
  var jugador2 = "Tijera";
  var resultado = jugarPiedraPapelTijera(jugador1, jugador2);
  console.log(resultado);


//21) Programa con temporizador que muestre un mensaje cada cierto tiempo. Ejemplo: "Hola Mundo" cada 3 segundos.
function mostrarMensaje() {
    console.log("Hola Mundo");
  }
  
  // Configuramos un temporizador para llamar a la función mostrarMensaje cada 3 segundos (3000 milisegundos).
  setInterval(mostrarMensaje, 3000);

  
  
  
  
  
  
  
  