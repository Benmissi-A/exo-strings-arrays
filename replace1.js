let str = 'Bonjour, je suis Sofiane.'
let myName = 'Amine.'
let strTab = str.split(' ')
let str2=''


for(let index=0; index<strTab.length;++index){
  if(strTab[index]==='Sofiane.'){
    str2 += 'Amine.'
  }else{
    str2 += strTab[index]+' '
  }
}
console.log(str2)