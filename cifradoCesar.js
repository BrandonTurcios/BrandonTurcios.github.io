// Cifrado César
function cifradoCesar(texto, desplazamiento) {
    // Convertir a mayusculas todo
    const textoMayus = texto.toUpperCase();
    const letras = textoMayus.split("");
    // Crear un array con las letras del texto
    const resultado = letras.map(function(letra) {
      const codigo = letra.charCodeAt(0);
      let nuevaLetra = letra;
      // Cifrar letras
      if(codigo >= 65 && codigo <= 90) {
        const posicion = codigo - 65;
        let nuevaPosicion = posicion + desplazamiento;
        while(nuevaPosicion < 0) {
          nuevaPosicion = nuevaPosicion + 26;
        }
        while(nuevaPosicion >= 26) {
          nuevaPosicion = nuevaPosicion - 26;
        }
        nuevaLetra = String.fromCharCode(nuevaPosicion + 65);
      }
      
      return nuevaLetra;
    });
    
    return resultado.join("");
  }
  
  function descifradoCesar(texto, desplazamiento) {
    return cifradoCesar(texto, -desplazamiento);
  }