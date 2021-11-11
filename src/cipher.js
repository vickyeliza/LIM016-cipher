window.cipher = {
    encode: (string, offset) => {
  
      if (isNaN(offset) || offset === null || offset === 0) {
          throw new TypeError(); /* TypeError se usa cuando un parametro no es valido*/
        }
  
        //mensaje recibido donde i= valor del abecedario codigo Acci
        let msgCipher = "";
        for (let i = 0; i < string.length; i++) {
            let character = string[i];
            if (character.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    msgCipher += String.fromCharCode(textChar);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    msgCipher += String.fromCharCode(textChar);
                }
            } else {
                msgCipher += character;
            }
        }
        return msgCipher;
    },
    decode: (string, offset) => {
  
      if (isNaN(offset) || offset === null || offset === 0) {
          throw new TypeError(); /* TypeError se usa cuando un parametro no es valido*/
        }
  
        //mensaje recibido
        let msgDecipher = "";
  
        //inicio recorrido de caracteres, el indice de los caracteres del abecedario se incrementa en uno //
        for (let i = 0; i < string.length; i++) {
            let characterD = string[i];
            //identificacion de espacios vacios
            if (characterD.match(/[a-z]/i)) {
                console.log(string.charCodeAt(i));
  
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                    msgDecipher += String.fromCharCode(textChar);
                    console.log("entra");
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    msgDecipher += String.fromCharCode(textChar);
                }
  
  
  
            } else {
                msgDecipher += characterD;
            }
        }
        //retornar respuesta
        return msgDecipher;
    }
  }