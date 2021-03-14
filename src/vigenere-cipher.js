const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct;
  alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.#process(message, key, "encrypt");
  }    

  decrypt(message, key) {
    return this.#process(message, key, "decrypt");
  }

  #process(message, key, process) {
    if (!message || !key) throw new CustomError("Wrong parameters");
    //increase key to message.length
    key = key.toUpperCase().repeat( Math.ceil(message.length / key.length) );

    let index = 0;
    let cryptoMessage = message.toUpperCase().split("").map( element => {
      //if not latin alphabet
      if (this.alfabet.indexOf(element) === -1) return element;

      let encryptedIndex;
      if (process === "encrypt") {
        encryptedIndex = this.alfabet.indexOf(element) + this.alfabet.indexOf(key.charAt(index));
        if (encryptedIndex > this.alfabet.length-1) encryptedIndex -= this.alfabet.length;

      } else if (process === "decrypt") {
        encryptedIndex = this.alfabet.indexOf(element) - this.alfabet.indexOf(key.charAt(index));
        if (encryptedIndex < 0) encryptedIndex += this.alfabet.length;

      } else {
        throw new CustomError("Something wrong");
      }

      //increase index on key
      index++;
      return this.alfabet.charAt(encryptedIndex);
    });

    return this.direct ? cryptoMessage.join("") : cryptoMessage.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;

let directMachine = new VigenereCipheringMachine();
let test = directMachine.encrypt('Samelengthkey', 'Samelengthkey')
let test2 = directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');


console.log(test)
console.log("KAYIWIAMMOUIW")