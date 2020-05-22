/**
 * interface
 */
/**
 * 接口继承
 */
namespace abc {
  interface Speakable {
    speak(): void
  }
  interface Eatable {
    eat(): void
  }
  interface SpeakChinese extends Speakable {
    speakChinese(): void
  }
  // 接口可继承多个
  interface SpeakEnglish extends Speakable, Eatable {
    speakChinese(): void
  }
  // 类实现接口
  class Person implements SpeakChinese {
    // 实现的接口预定义的方法需满足类型检测
    speak() {
        console.log('Person')
    }
    speakChinese(language = 'asd') {
      console.log(language)
    }
    // 可以继续拓展自己的属性方法
    speakEnglish() {
      console.log('speakEnglish')
    }
  }
  let p = new Person()
  p.speakEnglish()
}
namespace abc1 {
  interface Speakable {
    speak(): void
  }
  interface Eatable {
    eat(): void
  }
  // 一个类只能继承一个父类，却能实现多个接口
  class Person implements Speakable,Eatable {
    speak(): void {
      throw new Error("Method not implemented.")
    }
    eat(): void {
      throw new Error("Method not implemented.")
    }
  }
}
/**
 * 对象接口
 * 任意属性的两种写法
 * 1、[propName: string]: any
 * 2、继承内置接口Records<string, any>
 */
interface Props {
  name: string,
  age: number,
  [propName: string]: any
}
interface Props2 extends Record<string, any> {
  name: string,
  age: number
}
let props: Props = {
  name: 'lin',
  age: 12,
  home: 'sd'
}
/**
 * 函数类型接口: 对传入的参数类型和返回值类型进行约束
 */
interface Discount {
  (price: number): number
}
let det: Discount = function(price: number) {
  return price
}
/**
 * 可索引接口: 描述那些能够“通过索引得到”的类型，如数组和对象
 */
interface IUser {
  [index: number]: string // 定义一个索引为number，值为string的数组或对象
}
let arr = ['1', '3', '3']

/**
 * 类接口: 对类进行约束
 * 1、约束类的实例
 * 2、约束类的构造函数
 */

// 约束类的实例
namespace g1 {
  interface Animal {
    speak(): void
  }
  class Dog implements Animal {
    speak(): void {
      throw new Error("Method not implemented.")
    }
  }
}
// 约束类的构造函数
namespace h {
  class Animal {
    constructor (public name: string) {

    }
  }
  interface withClassName {
    new(name: string): Animal // 约束类的构造函数
  }
  // demo
  function createAnimal(clazz: withClassName, name: string) {
    return new clazz(name)
  }
  let animal = createAnimal(Animal, 'dog')
  console.log(animal.name)
}
