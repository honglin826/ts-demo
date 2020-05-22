// 类装饰器
namespace a {
  interface Student {
    name: string,
    doSomething: any
  }
  /**
   * @param target 目标类
   */
  function enhancer(target: any) {
    target.prototype.name = 'zhangsan'
    target.prototype.doSomething = function () {
      console.log('doSomething')
    }
  }

  @enhancer
  class Student {
    constructor() {}
  }

  let stu: Student = new Student()
  console.log(stu.name)
  stu.doSomething()
}
console.log('--------- 属性、方法装饰器 ----------')
// 属性、方法装饰器
namespace b {
  /**
   * 属性装饰器
   * @param target 目标类
   * @param propertyKey 属性名称
   */
  function upperCase (target: any, propertyKey: string) {
    let value = target[propertyKey]
    const getter = function () {
      return value
    }
    const setter = function (newValue: string) {
      value = newValue.toUpperCase()
    }
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      })
    }
  }
  /**
   * 方法装饰器
   * @param target 目标类
   * @param property 方法名称
   * @param descriptor 方法描述符
   */
  function toNumber (target: any, property: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value
    descriptor.value = function (...args: any[]) {
      args = args.map(item => parseFloat(item))
      return method.apply(this, args)
    }
  }
  class Student {
    // 类属性装饰器
    @upperCase
    name: string = 'zhangsan'
    constructor () {}
    getName() {
      console.log(this.name)
    }
    // 类方法装饰器
    @toNumber
    sum(...args: any) {
      return args.reduce((accu: number, item: number) => accu + item, 0)
    }
  }

  let stu: Student = new Student()
  stu.name = 'zhangsan'
  stu.getName()
  console.log(stu.sum('1', '2', '3'))
}
console.log('--------- 参数装饰器 ----------')

namespace c {
  interface Student {
    age: number
  }
  /**
   * 参数装饰器
   * @param target 目标类
   * @param methodName  方法名称
   * @param paramsIndex  参数下标
   */
  function addAge(target: any, methodName: string, paramsIndex: number) {
    target.age = 10
  }
  class Student {
    login(username: string, @addAge password: string) {
      console.log(this.age, username, password)
    }
  }
  let stu: Student = new Student()
  stu.login('zhangsan', '123456')
}

console.log('--------- 组合装饰器执行顺序 ----------')

// 装饰器工厂模式
// function f() {
//   console.log("f(): evaluated")
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("f(): called")
//   }
// }

// function g() {
//   console.log("g(): evaluated")
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("g(): called")
//   }
// }

function f (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("f(): called")
}

function g (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("g(): called")
}

class C {
  @f
  @g
  method() {}
}