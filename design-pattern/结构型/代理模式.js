// 未知妹子
const girl = {
  // 姓名
  name: "小美",
  // 自我介绍 （大家自行脑补吧）
  aboutMe: "...",
  // 年龄
  age: 24,
  // 职业
  career: "teacher",
  // 假头像 (新垣结衣的图片地址）
  fakeAvatar: "xxxx",
  // 真实头像 (自己的照片地址)
  avatar: "xxxx",
  // 手机号
  phone: 123456,
};

// 用户（同事A）对象实例
const user = {
  // ...(一些必要的个人信息)
  isValidated: true,
  isVIP: false,
};

// 普通私密信息
const baseInfo = ["age", "career"];
// 最私密信息
const privateInfo = ["avatar", "phone"];

// 掘金婚介所登场了
const juejinLovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert("您还没有完成验证哦");
      return;
    }

    // 此处我们认为只有验证过的用户才可以购买VIP
    if (user.isValidated && privateInfo.indexOf(key) && !user.isVIP) {
      alert("只有VIP才可以查看该信息哦");
      return;
    }
  },
});
