function isString(input: unknown): input is string {
  return typeof input === "string";
}

type Falsy = false | "" | 0 | null | undefined;
const isFalsy = (val: unknown): val is Falsy => !val;

type Primitive = string | number | boolean | undefined;
const isPrimitive = (val: unknown): val is Primitive => ["string", "number", "boolean", "undefined"].includes(typeof val);

function foo(input: string | number | undefined | symbol) {
  if (isString(input)) {
    // 类型“string | number”上不存在属性“replace”。
    input.replace("linbudu", "linbudu599");
  }
  if (typeof input === "number") {
  }
  // ...
  if (isFalsy(input)) {
    console.log(input);
  }

  if(isPrimitive(input)) {
    console.log(input)
  }
}

export {};
