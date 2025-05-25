// Cifrado Espartano
function cifradoEspartano(texto, columnas) {
    // Quitar espacios y convertir a mayusculas todo
    const textoLimpio = texto.toUpperCase().replace(/\s+/g, '');
    
    // Calcular el numero de filas 
    const filas = Math.ceil(textoLimpio.length / columnas);
    
    // Creacion de la matriz inicial
    let matriz = [];
    let matrizVisual = '';
    let pos = 0;
    
    // Llenar la matriz por filas
    for(let i = 0; i < filas; i++) {
      matriz[i] = [];
      matrizVisual += '\n';
      for(let j = 0; j < columnas; j++) {
        if(pos < textoLimpio.length) {
          matriz[i][j] = textoLimpio[pos++];
        } else {
          matriz[i][j] = ' ';
        }
        matrizVisual += matriz[i][j] + ' ';
      }
    }
    
    // Leer la matriz por columnas
    let resultado = '';
    for(let j = 0; j < columnas; j++) {
      let columna = '';
      for(let i = 0; i < filas; i++) {
        if(matriz[i][j] !== ' ') {
          columna += matriz[i][j];
        }
      }
      //Se agrega al resultado
      if(columna.length > 0) {
        resultado += columna + ' ';
      }
    }
    
    return {
      // Retornar el texto cifrado y matriz 
      textoCifrado: resultado.trim(),
      matriz: matrizVisual.trim()
    };
  }
  
  function descifradoEspartano(textoCifrado, columnas) {
    // Dividir el texto cifrado en columnas
    const columnasTexto = textoCifrado.toUpperCase().split(' ');
    
    // Calcular el numero de filas 
    const filas = Math.max(...columnasTexto.map(col => col.length));
    
    // Crear una matriz vacía 
    let matriz = Array(filas).fill().map(() => Array(columnas).fill(''));
    
    // Llenar la matriz por columnas
    for (let j = 0; j < columnas; j++) {
      if (j < columnasTexto.length) {
        const columna = columnasTexto[j];
        for (let i = 0; i < columna.length; i++) {
          if (i < filas) {
            matriz[i][j] = columna[i];
          }
        }
      }
    }
    
    // Leer la matriz por filas para obtener el mensaje original
    let mensajeOriginal = '';
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        if (matriz[i][j]) {
          mensajeOriginal += matriz[i][j];
        }
      }
    }
    
    return mensajeOriginal;
  }