interface IFoo {
  name: string;
}

declare const obj: {
  foo: IFoo;
};

const { foo = {} as IFoo } = obj;

//双重断言
const str: string = 'kaho';

(str as unknown as { handler: () => {} }).handler()

//非空断言
declare const fee: {
  func?: () => ({
    prop?: number | null;
  })
};

fee.func!().prop!.toFixed();
fee.func?.().prop?.toFixed();

/***********************************************************************************/

interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

// const obj: IStruct = {};

// 这个例子是不会报错的
const objStruct = <IStruct>{
  bar: {
    baz: {},
  },
};


export {};
