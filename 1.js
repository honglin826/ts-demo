"use strict";
(function (name, age) {
    console.log(name + "\u4ECA\u5E74" + age + "\u5C81");
})('zhangsan', 234);
// // class Person {
// //   name: string
// //   age: number
// //   constructor (name: string, age: number) {
// //     this.name = name
// //     this.age = age
// //   }
// //   getName (): string {
// //     return this.name
// //   }
// //   setName (newName: string) {
// //     this.name = newName
// //   }
// // }
// // class Student extends Person {
// //   stuNum: number
// //   constructor (name: string, age: number, stuNum: number) {
// //     super(name, age)
// //     this.stuNum = stuNum
// //   }
// // }
// // enum Gender {
// //   MALE,
// //   FEMALE
// // }
// namespace a {
//   function enhance(target: typeof Person) {
//     return class extends target {
//       id: string = '';
//       constructor (age:number ,name: string, id: string) {
//         super(age, name);
//         this.id = id;
//       }
//     }
//   }
//   function tarenhance(target: typeof Person) {
//     return class extends target {
//       id: string = '';
//       constructor (age:number ,name: string, tar: string) {
//         super(age, name);
//         this.id = tar;
//       }
//     }
//   }
//   class Person {
//     age: number = 10;
//     name: string = '';
//     id: string = '';
//     constructor (age: number, name: string) {
//       this.name = name;
//       this.age = age;
//     }
//   }
//   let NewStudent = enhance(Person);
//   let NewTar = tarenhance(Person);
//   let p = new NewStudent(10, 'hon hong', 'test');
//   let t = new NewTar(10, 'hon hong', '公安局');
//   console.log(p);
//   console.log(t);
// }
// let stu: string | number
// stu = 'zhangsan'
// console.log(stu.length)
// stu = 12
// stu.toFixed(2)
// let obj: any = {}
// function getObj(val1: string, val2: string): void
// function getObj(val1: number, val2: number): void
// function getObj(val1: string | number, val2: string | number ): void {
//   if (typeof val1 === 'string' && typeof val2 === 'string') {
//     console.log(val1, val2)
//   } else if (typeof val1 === 'number' && typeof val2 === 'number') {
//     console.log(val1, val2)
//   } else {
//     // 无法达到的结果
//     console.log(val1, val2)
//   }
// }
// class Father {
//   public name: string  //类里面 子类 其它任何地方外边都可以访问
//   protected age: number //类里面 子类 都可以访问,其它任何地方不能访问
//   private money: number //类里面可以访问， 子类和其它任何地方都不可以访问
//   constructor(name:string,age:number,money:number) {
//       this.name=name
//       this.age=age
//       this.money=money
//   }
//   getName():string {
//       return this.name
//   }
//   setName(name:string): void{
//       this.name=name
//   }
// }
// class Child extends Father{
//   constructor(name:string,age:number,money:number) {
//       super(name,age,money)
//   }
//   desc() {
//       console.log(`${this.name} ${this.age} ${this.money}`)
//   }
// }
