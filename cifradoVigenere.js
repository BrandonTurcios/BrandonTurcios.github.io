// Cifrado Vigenère
function cifradoVigenere(texto, clave) {
    // Crear un array con las letras del alfabeto
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Convertir a mayusculas todo
    const textoMayus = texto.toUpperCase();
    const letras = textoMayus.split("");
    // Crear un array con las letras de la clave
    const claveLetras = clave.toUpperCase().split("");
    let indiceClave = 0;
    let resultado = "";

    // Cifrar letras, si la letra es una letra del alfabeto se cifra
    for(let i = 0; i < letras.length; i++) {
      const letra = letras[i];
      const codigo = letra.charCodeAt(0);
      
      if(codigo >= 65 && codigo <= 90) {
        // Calcular la posicion de la letra en el alfabeto
        const posicionFrase = alfabeto.indexOf(letra);
        const letraClave = claveLetras[indiceClave];
        const posicionLetraClave = alfabeto.indexOf(letraClave);
        const total = posicionFrase + posicionLetraClave;
        // Calcular la nueva posicion
        const nuevaPosicion = total % 26;
        // Agregar la letra cifrada al resultado
        resultado = resultado + alfabeto[nuevaPosicion];
        indiceClave = (indiceClave + 1) % claveLetras.length;
      } else {
        resultado = resultado + letra;
      }
    }
    return resultado;
  }
  
  function descifradoVigenere(texto, clave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Convertir a mayusculas todo
    const textoMayus = texto.toUpperCase();
    // Crear un array con las letras del texto
    const letras = textoMayus.split("");
    // Crear un array con las letras de la clave
    const claveLetras = clave.toUpperCase().split("");
    let indiceClave = 0;
    let resultado = "";
    for(let i = 0; i < letras.length; i++) {
      const letra = letras[i];
      const codigo = letra.charCodeAt(0);
      // Si la letra es una letra del alfabeto se descifra
      if(codigo >= 65 && codigo <= 90) {
        // Calcular la posicion de la letra en el alfabeto
        const posicionFrase = alfabeto.indexOf(letra);
        // Calcular la posicion de la letra de la clave en el alfabeto
        const letraClave = claveLetras[indiceClave];
        // Calcular la posicion de la letra de la clave en el alfabeto
        const posicionLetraClave = alfabeto.indexOf(letraClave);
        // Calcular la nueva posicion
        let total = posicionFrase - posicionLetraClave;
        while(total < 0) {
          total = total + 26;
        }
        // Calcular la nueva posicion
        const nuevaPosicion = total % 26;
        resultado = resultado + alfabeto[nuevaPosicion];
        indiceClave = (indiceClave + 1) % claveLetras.length;
      } else {
        resultado = resultado + letra;
      }
    }
    
    return resultado;
  }