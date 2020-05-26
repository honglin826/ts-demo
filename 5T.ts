/**
 * 泛型：宽泛的、不具体的类型
 */

function createArray (length: number, value: any): Array<any> {
  let result: any = []
  for (var i=0; i <= length; i++) {
    result[i] = value
  }
  return result
}
namespace fas {
  // 默认泛型number
  function createArray<T = number> (length: number, value: T): Array<T> {
    let result: T[] = []
    for (var i=0; i <= length; i++) {
      result[i] = value
    }
    return result
  }
  // console.log(createArray<number>(3, 10))
}

/**
 * 类数组
 */
function sum(...rest: any[]) {
  let args: IArguments = arguments
  for(var i=0; i < args.length; i++) {
    console.log(args[i])
  }
}
// sum(1,3,5,6)

namespace a {
  // let root: HTMLElement | null = document.getElementById('div')
  // let child:HTMLCollection | undefined = root?.children
  // 插播个知识点
  // root!.child 默认root为非空，强制ts执行
  // root?.child 三元运算符的新语法糖 => root ? root.child : undefined
}

/**
 * 泛型类
 */
namespace b {
  class MyArray<T> {
    private list: T[] = []
    add(item: T) {
      this.list.push(item)
    }
    getMax() {
      let _result: T = this.list[0]
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] > _result) {
          _result = this.list[i]
        }
      }
      return _result
    }
  }
  let myArray = new MyArray<number>()
  myArray.add(1)
  myArray.add(29)
  // console.log(myArray.getMax())
}

/**
 * 泛型接口
 */
namespace c {
  interface Calculate {
    <T = number>(a: T, b: T): T
  }
  let cal: Calculate = function<T>(a: T, b: T): T {
    return a
  }
  console.log(cal(2, 4))
}

/**
 * 泛型接口
 */

interface Cart<T> {
  lists: T[]
}
interface Product {
  id: number
  name: string
}

let cart: Cart<Product> = {
  lists: [{id: 1, name: 'linlin'}]
}

// 多个类型参数
function swap<A, B> (tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]]
}

let result = swap<number, string>([1, 'a'])
// console.log(result)

/**
 * 泛型的约束
 */
interface LengthWise {
  length: number
}
function logger<T extends LengthWise> (val: T) {
  return val.length
}



// console.log(logger([23,3,5]))
// 相当于
class Length implements LengthWise {
  length!: number
}
let len = new Length()
logger(len)

/**
 * type 泛型类型的别名
 */

type Cart1<T> = {lists: T[]} | T[]
let cart1: Cart1<number> = {lists: [0]}
let cart2: Cart1<number> = [9]

type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

let t: Point = {
  x: 1,
  y: 3
} 