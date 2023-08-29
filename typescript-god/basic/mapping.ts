//映射类型，用于对索引类型做修改，相当于把一个集合映射到另一个集合
type MapType<T> = {
  [K in keyof T]?: [T[K], T[K]];
};

type Res = MapType<{ a: 1; b: 2 }>;

//重映射
type MapReloadType<T> = {
  [K in keyof T as `${K & string}${K & string}${K & string}`]: [T[K], T[K]]
}