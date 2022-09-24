console.log(Math.PI)
console.log(Math.max(1,2,3,3,4,5,2,56))

class myMath {
  static readonly PI = 3.1415

  static  max(...number:number[]):number{
    return number.reduce((a:number,i:number) => a <= i ? a : i)
  }
}

console.log('myMath',myMath.PI)
console.log('myMath max',myMath.max(1,2,3,3,4,5,2,56))