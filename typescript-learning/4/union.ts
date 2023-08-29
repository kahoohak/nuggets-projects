interface Tmp {
  user: {
    vip: true,
    enjoy: true
  } | {
    vip: false,
    lie: true
  }
}

declare const tmp: Tmp

if(tmp.user.vip) {
  console.log(tmp.user.enjoy)
}

export {}