export class MyDate {
  public year: number;
  public month: number;
  public day: number
  constructor(year:number,month:number,day:number){
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat():string{
    return `${this.day}/${this.month}/${this.year}`
  }


  add(amount:number,type: 'day'| 'months' | 'years'){
    if(type === 'day'){
      this.day += amount
    }
    if(type === 'months'){
      this.month += amount
    }
    if(type === 'years'){
      this.year += amount
    }
  }
}

const myDate = new MyDate(1999,7,12)
console.log(myDate.printFormat())
myDate.add(2,'day')
console.log(myDate.printFormat())