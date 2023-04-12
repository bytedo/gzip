## @bytedo/gzip
> 浏览器端的gzip库, fork于[pako](https://github.com/nodeca/pako), 仅调整语法为esm, 并只保留gzip的导出。

### 版本同步状态: 

pako: ![pako](https://img.shields.io/npm/v/pako.svg)
@bytedo/gzip: ![@bytedo/gzip](https://img.shields.io/npm/v/@bytedo/gzip.svg)


### 安装&使用

```bash
npm install @bytedo/gzip
```


或直接使用cdn地址: 

```js

import { gzip , ungzip } from '@bytedo/gzip' // use importmap
// or
import { gzip , ungzip } from '//jscdn.ink/@bytedo/gzip/latest/index.js'


let res = gzip('hello world')  // return Uint8Array object

let txt = ungzip(res) // return Uint8Array object

```


### 开源协议

- MIT - 除 `/lib/zlib` 目录以外的所有文件
- ZLIB - `/lib/zlib` 目录
