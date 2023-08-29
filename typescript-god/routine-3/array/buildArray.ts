//根据长度构造数组
type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr["length"] extends Length
  ? Arr
  : BuildArray<Length, Ele, [...Arr, Ele]>;

type Res = BuildArray<5>;

export {};
