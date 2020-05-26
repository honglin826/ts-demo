/**
 * type VS interface
 */

// 1. 两者都可以用来描述对象或函数的类型，但是语法不同
// interface
namespace type1 {
  interface Point {
    x: number
    y: number
  }
  
  interface SetPoint {
    (x: number, y: number): void
  }
  // type
  type Point1 = {
    x: number
    y: number
  };
  
  type SetPoint1 = (x: number, y: number) => void
}

// 2. 与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

namespace type2 {
  // primitive
  type Name = string

  // object
  type PartialPointX = { x: number; }
  type PartialPointY = { y: number; }

  // union
  type PartialPoint = PartialPointX | PartialPointY

  // tuple
  type Data = [number, string]

  // dom
  let div = document.createElement('div')
  type B = typeof div
}

// 3. 两者都可以被extend,但语法不同(有些资料说type不能extend,亲测可用)

namespace type3 {
  // Interface extends interface
  interface PartialPointX { x: number }
  interface Point extends PartialPointX { y: number }

  // Type alias extends type alias
  type PartialPointX1 = { x: number }
  type Point1 = PartialPointX & { y: number }

  // Interface extends type alias
  type PartialPointX2 = { x: number }
  interface Point2 extends PartialPointX { y: number }

  // Type alias extends interface
  interface PartialPointX3 { x: number }
  type Point3 = PartialPointX & { y: number }
}
// 4. 类可以以相同的方式实现接口或类型别名,不能实现联合类型的类型别名

namespace type4 {
  interface Point {
    x: number
    y: number
  }
  
  class SomePoint implements Point {
    x: 1
    y: 2
  }
  
  type Point2 = {
    x: number
    y: number
  };
  
  class SomePoint2 implements Point2 {
    x: 1
    y: 2
  }
  
  type PartialPoint = { x: number; } | { y: number; };
  
  // FIXME: can not implement a union type
  class SomePartialPoint implements PartialPoint {
    x: 1
    y: 2
  }
}

// 5. 与类型别名不同，接口可以定义多次，并将被视为单个接口(合并所有声明的成员)。

namespace type5 {
  interface Point { x: number }
  interface Point { y: number }

  const point: Point = { x: 1, y: 2 }
}

// 6. type 能使用 in 关键字生成映射类型，但 interface 不行。

namespace type6 {
  type Keys = "firstname" | "surname"

  type DudeType = {
    [key in Keys]: string
  }

  const test: DudeType = {
    firstname: "Pawel",
    surname: "Grzybek"
  }

  // 报错
  //interface DudeType2 {
  //  [key in keys]: string
  //}
}

// 7. type不能被直接export

export default interface Config {
  name: string
}

// export default type Config1 = {
//   name: string
// }
// 会报错

type Config2 = {
    name: string
}
// export default Config2