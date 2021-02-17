let crypted = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'

let splitCrypted = crypted.split(' ')

let uncrypted = ''

//console.log(splitCrypted)


let word = ''

for(let i =  0; i < 1 ; ++i){
  let nb=i
  for(let index = 0 ; index < splitCrypted.length ; ++index){
    uncrypted = ''
    for(let char = 0 ; char < splitCrypted[index].length ; ++char ){
    uncrypted += String.fromCharCode(splitCrypted[index].charCodeAt(char)-nb)
  }
  word += uncrypted+' '
}
console.log(word)
word=''
console.log('')
console.log('')
console.log('')
}