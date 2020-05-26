// export default interface Config {
//   name: string
// }

// 1.可直接导出
export type Config1 = {
  name: string
}

// 2.默认导出，报错
// export default type Config2 = {
//   name: string
// }

// 先定义，后导出
type Config3 = {
    name: string
}
export default Config3