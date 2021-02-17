let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let splitStr = str.trim().split(' ')
let newStr = ''

for(let index=0 ; index < splitStr.length ; ++index){
  newStr += splitStr[index]+' ' 
}


for(let index = 0; index < splitStr.length ;++index){
  if(splitStr[index].toLowerCase()==='bob'){
    console.log('bob is here')
  }else{
    //console.log('le mot Javascript n\'est présent dans la phrase')
  }
}