# readme

#### 生成tsconfig.json
```sh
tsc --init
```

#### code runner 运行ts文件
```sh
sudo npm i typescript -g
sudo npm i ts-node -g
```

### interface

任意属性
```ts
// 第一种写法
interface Props {
  name: string,
  age: number,
  [propName: string]: any // 任意属性
}
// 第二种写法
interface Props extends Record<string, any> {
  name: string,
  age: number
}
let props: Props = {
  name: 'lin',
  age: 12,
  home: 'sd'
}
```