export class Animal{
  constructor(public name: string ){}

  move(){
    console.log('Moving Along!')
  }

  greeting(){
    return `Hello, I'm ${this.name}`
  }

}

export class Dog extends Animal{

  constructor(name:string,public owner:string){
    super(name)
  }

  woof(times:number):void{
    for(let i = 0; i <= times;i++){
      console.log('woof!')
    }
  }
}


const lion = new Dog('Lion','David')
lion.move()
lion.greeting()
lion.woof(3)