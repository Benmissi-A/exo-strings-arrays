let crypted = 'Hello world'

const cypher = ( string , codeNumber ) =>{
  
  let msg = string.toUpperCase().split(' ')
  let nb = codeNumber 
  let cypherMsg =''
  
  for(let index = 0 ; index < msg.length ; ++index){
    str = ''
    for( let char = 0 ; char < msg[index].length ; ++char ){
      let x = (((msg[index].charCodeAt(char))-65+nb)%26) // formule magique pour le decalage un modulo du nombre de lettres permet de revenir au debut de l'alphabet
      //console.log(char.charCodeAt(e))
      str += String.fromCharCode(x+65)
    }
  cypherMsg += str + ' '
}
return cypherMsg
}
console.log('cypher  '+cypher(crypted,1))




