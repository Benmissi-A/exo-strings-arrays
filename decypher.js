let crypted = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'

let splitCrypted = crypted.split(' ')
let uncryptedChar = ''
let uncryptedMsg= ''

//for(let i =  0; i < 26 ; ++i){                   // boucle initiale qui teste toutes les lettres
  let nb=9                                        // la valeur est i , ja'mis 9 car c'est le bon decalage
  for(let index = 0 ; index < splitCrypted.length ; ++index){
    uncryptedChar = ''
    for(let char = 0 ; char < splitCrypted[index].length ; ++char ){
      let x = splitCrypted[index].charCodeAt(char)
      x = ((x-65+nb)%26) // formule magique pour le decalage un modulo du nombre de lettres permet de revenir au debut de l'alphabet
      uncryptedChar += String.fromCharCode(x+65)
  }
  uncryptedMsg += uncryptedChar+' '
}
console.log(uncryptedMsg)
word=''
//}

