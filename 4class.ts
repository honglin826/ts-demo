namespace class1 {
  // 基础类
  class Greeter {
    greeting: string
    constructor(message: string) {
      this.greeting = message
    }
    greet() {
      return "Hello, " + this.greeting
    }
  }

  let greeter = new Greeter("world")
}
console.log('--------- 类的继承 --------')
namespace class2 {
  class Person {
    name: string
    age: number
    constructor(name:string,age:number) {
        this.name=name
        this.age=age
    }
    getName():string {
        return this.name
    }
    setName(name:string): void{
        this.name=name
    }
  }
  // 子类继承
  class Student extends Person{
      no: number
      constructor(name:string,age:number,no:number) {
          super(name,age)
          this.no=no
      }
      getNo():number {
          return this.no
      }
  }
  let s1=new Student('zhangsan',10,1)
  console.log(s1.getName())
}

console.log('-------- 修饰符 --------')
namespace class3 {
  class Father {
    public name: string  //(默认值)类里面 子类 其它任何地方外边都可以访问
    public readonly gender: string
    protected age: number //类里面 子类 都可以访问,其它任何地方不能访问
    private money: number //类里面可以访问， 子类和其它任何地方都不可以访问
    constructor(name:string,age:number,money:number) {
      this.name=name
      this.age=age
      this.money=money
    }
    getName():string {
      return this.name
    }
    setName(name:string): void{
      this.name=name
    }
  }
  class Child extends Father{
    constructor(name:string,age:number,money:number) {
      super(name,age,money)
    }
    desc() {
      //Property 'money' is private and only accessible within class 'Father'.
      console.log(`${this.name} ${this.age} ${this.money}`)
    }
  }
  let p = new Child('zhangsan', 10, 100)
  // Property 'age' is protected and only accessible within class 'Father' and its subclasses
  console.log(p.age)
}
console.log('-------- 存取器 --------')
namespace class4 {
  let passcode = "secret passcode"
  class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }
    // 需满足条件方可重置_fullName
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName
        }
        else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
  }

  let employee = new Employee()
  employee.fullName = "Bob Smith"
  if (employee.fullName) {
      alert(employee.fullName)
  }
}