export class MyDate {
  private obj = {name:'David'}
  constructor(
    public year:number = 1993,
    private _month:number = 7,
    private _day:number = 9
    ){}

  printFormat():string{
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
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
      this._month += amount
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

  get month(){
    return this._month
  }
  set month(newValue:number){
    try {
      
      if(newValue >= 1 && newValue<= 12){
        this._month = newValue
      }else{
        throw new Error('month out of range')
      }
      
    } catch (error) {
      console.log(error)
    }

  }
}

const myDate = new MyDate(1999,7,12)
myDate.month = 4
console.log('mes 4',myDate.month)
myDate.month = 44
console.log('mes 44',myDate.month)
