// 接口兼容性
namespace a {
  /**
   * 接口兼容性
   * 源类型 Animal
   * 目标类型 Person, 目标类型的属性只能多了可以，少了不可以
   */
  interface Animal {
    name: string;
    age: number;
  }

  interface Person {
    name: string;
    age: number;
    gender: number;
  }
  // 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
  function getName(animal: Animal): string {
    return animal.name;
  }
  function getPName(person: Person): string {
    return person.name;
  }
  let p: Person = {
    name: 'zhangsan',
    age: 10,
    gender: 0
  }

  let a: Animal = {
    name: 'cat',
    age: 0
  }

  getName(p);

  getPName(a) // 属性少了直接报错

  //只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错
  let a: Animal = {
    name: 'zhangsan',
    age: 10,
    gender: 0 // 直接报错
  }

}
// 类的兼容性
namespace b {
  /**
   * 类的兼容性
   * 目标类的属性只能多了可以，少了不可以
   */
  class Animal{
    name:string
  }
  // Bird 比Animal 属性多不可以
  class Bird extends Animal{
    swing:number
  }
  let a:Animal
  a = new Bird()
  
  let b:Bird
  b = new Animal() // 报错

  // 父子结构相同，可以
  class Tiger extends Animal {}
  let ani:Animal
  ani = new Tiger()
  let bni: Tiger
  bni = new Animal()
}

// 函数兼容性（参数）
namespace c {
  /**
   * 函数兼容性（参数）
   * 目标类型参数少了可以，多了不行
   */
  type sumFunc = (a:number,b:number)=>number
  let sum:sumFunc
  function f1(a:number,b:number):number{
    return a+b
  }
  sum = f1

  //可以省略一个参数
  function f2(a:number):number{
    return a
  }
  sum = f2

  //可以省略二个参数
  function f3():number{
      return 0
  }
  sum = f3

  //多一个参数可不行
  function f4(a:number,b:number,c:number){
      return a+b+c
  }
  sum = f4 // 报错
}

// 函数兼容性 (返回值)
namespace d {
  type GetPerson = ()=>{name:string,age:number}
  let getPerson:GetPerson
  //返回值一样可以
  function g1(){
      return {name:'zhangsan',age:10}
  }
  getPerson = g1;
  //返回值多一个属性也可以
  function g2(){
      return {name:'zhangsan',age:10,gender:'male'}
  }
  getPerson = g2;
  //返回值少一个属性可不行
  function g3(){
      return {name:'zhangsan'}
  }
  getPerson = g3
  //因为有可能要调用返回值上的方法
  getPerson().age.toFixed()
}

// 泛型的兼容性
namespace e {
  //1.接口内容为空没用到泛型的时候是可以的
  interface Empty<T>{}
  let x!:Empty<string>
  let y!:Empty<number>
  x = y

  //2.接口内容不为空的时候不可以
  interface NotEmpty<T>{
    data:T
  }
  let x1!:NotEmpty<string>
  let y1!:NotEmpty<number>
  x1 = y1 // 有具体的类型被使用到，报错

  //实现原理如下,称判断具体的类型再判断兼容性
  interface NotEmptyString{
      data:string
  }

  interface NotEmptyNumber{
      data:number
  }
  let xx2!:NotEmptyString
  let yy2!:NotEmptyNumber
  xx2 = yy2
}

// 枚举兼容性
namespace f {
  //数字可以赋给枚举
  enum Colors {Red,Yellow}
  let c:Colors
  c = Colors.Red
  c = 1
  c = '1'

  //枚举值可以赋给数字
  let n:number
  n = 1
  n = Colors.Red
}