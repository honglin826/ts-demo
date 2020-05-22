namespace a {
  interface Calculate{
    <T>(a:T,b:T):T
  }
  let add:Calculate = function<T>(a:T,b:T){
    return a
  }
  console.log(add<number>(1,2))
}

namespace b {
  interface Calculate<T>{
    list: T[]
  }

  let abc: Calculate<{name: string, age: number}> = {
    list: [
      {
        name: 'zhangsan',
        age: 23
      }
    ]
  }
}