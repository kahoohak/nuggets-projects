interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
}

declare const res: Res

res.code
res.status

export {}