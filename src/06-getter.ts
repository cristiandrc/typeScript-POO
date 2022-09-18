export class MyDate {
  private obj = {name:'David'}
  constructor(
    public year:number = 1993,
    public month:number = 7,
    private _day:number = 9
    ){}

  printFormat():string{
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value:number){
    if(value < 10){
      return `0${value}`
    }
    return `${value}`
  }

  add(amount:number,type: 'day'| 'months' | 'years'){
    if(type === 'day'){
      this._day += amount
    }
    if(type === 'months'){
      this.month += amount
    }
    if(type === 'years'){
      this.year += amount
    }
  }

  get day(){
    //code
    return this.obj
  }

  get isLeapYear():boolean{
    //code
    const { year } = this;
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
}

const myDate = new MyDate(1999,7,12)
console.log(myDate.printFormat())
console.log(myDate.day)
console.log('1999',myDate.isLeapYear)

const myDate2 = new MyDate(2000,7,12)
console.log(myDate2.printFormat())
console.log(myDate2.day)
console.log('2000',myDate2.isLeapYear)

console.log(myDate2.day)
let names = myDate2.day
names.name = 'pepe'
console.log(myDate2.day)
