enum Gender {
  GIRL,
  BOY
}
console.log(`张三是个${Gender[1]}`)

enum Week {
  MONDAY= 1,
  TUESDAY= 2,
  WEDNESDAY= 3
}
console.log(`Today is ${Week[2]}`)

const enum Colors {
  Red=3,
  Yellow,
  Blue
}

let myColors = [Colors.Red, Colors.Yellow, Colors.Blue];
console.log(myColors)


// const enum Color {Red, Yellow, Blue = "blue".length};