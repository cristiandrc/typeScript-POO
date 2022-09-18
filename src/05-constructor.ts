export class MyDate {
  constructor(
    public year:number = 1993,
    public month:number = 7,
    private day:number = 9
    ){}

  printFormat():string{
    const day = this.addPadding(this.day)
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
      this.day += amount
    }
    if(type === 'months'){
      this.month += amount
    }
    if(type === 'years'){
      this.year += amount
    }
  }

  getDay(){
    return this.day
  }
}

const myDate = new MyDate(1999,7,12)
console.log(myDate.printFormat())