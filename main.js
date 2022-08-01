const caesarCipher = {
  get charNumDictionary() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const dictionary = {}
    Array.from(alphabet).forEach((letter, index) => {
      dictionary[letter] = index
    })

    return dictionary
  },

  get numCharDictionary() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const dictionary = {}
    Array.from(alphabet).forEach((letter, index) => {
      dictionary[index] = letter
    })

    return dictionary
  },
  



  code(string, key) {

    

    let codedString = ''

    let counter = 0

    Array.from(string.toLowerCase()).forEach(letter => {
      let codedIndex = this.charNumDictionary[letter] + key
      if (!Number.isNaN(codedIndex)) {

        if (string[counter] == string[counter].toUpperCase()) {
          codedString += this.numCharDictionary[codedIndex % 26].toUpperCase()

        }
        else {
          codedString += this.numCharDictionary[codedIndex % 26]

        }

      }
      else {
        codedString += letter
      }

      counter += 1

    }) 

    return codedString
  },

  decode(string, key) {



    let decodedString = ''

    let counter = 0

    Array.from(string.toLowerCase()).forEach((letter) => {
      let decodedIndex = this.charNumDictionary[letter] - key

      if (!Number.isNaN(decodedIndex)) {
        if (string[counter] == string[counter].toUpperCase()) {
          decodedString += this.numCharDictionary[decodedIndex % 26].toUpperCase()

        }
        else {
          decodedString += this.numCharDictionary[decodedIndex % 26]

        }

      }
      else {
        decodedString += letter
      }

      counter += 1
    })

    return decodedString
  }

}


// console.log(caesarCipher.code('abcdefghijklmnopqrstuvwxyz', 1))

module.exports = caesarCipher
