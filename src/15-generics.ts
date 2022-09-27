// function getValue(value:number | string){
//   return  value
// }


function getValue<myType>(value:myType){
  return  value
}

getValue(23).toFixed()
getValue<number>(23).toFixed()

getValue('23').toLowerCase()
getValue<string>('23').toLowerCase()

getValue([]).forEach
getValue<number[]>([]).forEach


function getValue2<myType,myType2>(value:myType, value2:myType2){
  const text = value2
  return  value
}

getValue2(23, "2").toFixed()
getValue2<number,string>(23, "2").toFixed()