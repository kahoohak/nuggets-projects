//判断类型兼容性的方式
type Result = 'kaho' extends string ? 1 : 2

//通过赋值来进行兼容性检查的方式
declare let source: string

declare let anyType: any
declare let neverType: never

anyType = source
neverType = source

/***********************************************************************************/

//联合类型
type Result13 = 'linbudu' extends 'linbudu' | '599'
  ? 'linbudu' | '599' extends string
    ? 2
    : 1
  : 0;

/***********************************************************************************/

//装箱类型
type Result14 = string extends String ? 1 : 2; // 1
type Result15 = String extends {} ? 1 : 2; // 1
type Result16 = {} extends object ? 1 : 2; // 1
type Result18 = object extends Object ? 1 : 2; // 1

type Tmp = string extends object ? 1 : 2; // 2

type Result22 = Object extends any ? 1 : 2; // 1
type Result23 = Object extends unknown ? 1 : 2; // 1

type Result24 = any extends Object ? 1 : 2; // 1 | 2
type Result25 = unknown extends Object ? 1 : 2; // 2

/***********************************************************************************/

//类型层级链
type TypeChain = never extends 'kaho'
  ? 'kaho' extends 'kaho' | 'ohak'
  ? 'kaho' | 'ohak' extends string
  ? string extends String
  ? String extends Object
  ? Object extends any
  ? any extends unknown
  ? unknown extends any
  ? 8
  : 7
  : 6
  : 5
  : 4
  : 3
  : 2
  : 1
  : 0

type VerboseTypeChain = never extends 'kaho'
  ? 'kaho' extends 'kaho' | 'ohak'
  ? 'kaho' | 'ohak' extends string
  ? string extends {}
  ? string extends String
  ? String extends {}
  ? {} extends object
  ? object extends {}
  ? {} extends Object
  ? Object extends {}
  ? object extends Object
  ? Object extends object
  ? Object extends any
  ? Object extends unknown
  ? any extends unknown
  ? unknown extends any
  ? 8
  : 7
  : 6
  : 5
  : 4
  : 3
  : 2
  : 1
  : 0
  : -1
  : -2
  : -3
  : -4
  : -5
  : -6
  : -7
  : -8


export {}