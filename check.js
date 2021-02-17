let str = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'
let find = 'Javascript'
//let isFound = false
let strTab = str.split(' ')


for(let index=0; index<strTab.length;++index){
  if(strTab[index]==='Javascript'){
    console.log('le mot Javascript est présent dans la phrase en position:'+strTab[index])
  }else{
    //console.log('le mot Javascript n\'est présent dans la phrase')
  }
}