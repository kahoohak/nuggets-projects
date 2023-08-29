//只执行一次
function once(fn, replacer) {
  return function (...args) {
    if (fn) {
      const res = fn.apply(this, args);
      fn = null;
      return res;
    }
    if (replacer) {
      return replacer.apply(this, args);
    }
  };
}

//防抖
function debounce(fn, ms = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      const res = fn.apply(this, args);
      return res;
    }, ms);
  };
}

//节流
function throttle(fn, ms = 100) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      console.log("send message");
      const res = fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, ms);
      return res;
    }
  };
}

//弃用api提示
function deprecate(fn, oldApi, newApi) {
  const message = `The ${oldApi} is deprecated. Please use the ${newApi} instead.`;
  const notice = once(console.warn);

  return function (...args) {
    notice(message);
    return fn.apply(this, args);
  };
}

//拦截器
function intercept(fn, { beforeCall = null, afterCall = null }) {
  return function (...args) {
    //如果命中'前拦截器'返回值为false, 直接return
    if (beforeCall && beforeCall.call(this, args) === false) return;
    const res = fn.apply(this, args);
    //如果命中'后拦截器', 返回处理结果
    if (afterCall) return afterCall.call(this, res);
    return res;
  };
}

//赋予函数批量处理功能
function batch(fn) {
  return function (subject, ...args) {
    if (Array.isArray(subject)) {
      return subject.map((s) => {
        return fn.call(this, s, ...args);
      });
    } else {
      return fn.call(this, subject, ...args);
    }
  };
}

//高阶函数范式
function HOF0(fn) {
  return function (...args) {
    return fn.call(this, ...args);
  };
}

//连续执行的函数
function continus(reducer) {
  return function (...args) {
    return args.reduce((a, b) => reducer(a, b));
  };
}

//如果最后一个参数是数组或类数组，进行解构
function fold(fn) {
  return function (...args) {
    const lastArg = args.pop();
    if (lastArg.length) {
      return fn.call(this, ...args, ...lastArg);
    }
    return fn.call(this, ...args, lastArg);
  };
}

//翻转参数顺序
function reverse(fn) {
  return function (...args) {
    return fn.call(this, ...args.reverse());
  };
}

//把除了第一个的剩余参数整合成数组
function spread(fn) {
  return function (first, ...rest) {
    return fn.call(this, first, rest);
  };
}

//管道函数
function pipe(...fns) {
  return function (input) {
    return fns.reduce((a, b) => {
      return b.call(this, a);
    }, input);
  };
}

//组合出来的batch函数，入参和返回值与原batch函数有些差异
const _batch = pipe(continus, fold, reverse, spread)

//pipe也可以用continus重新定义
const _pipe = continus((prev, next) => {
  return function(input) {
    return next.call(this, prev.call(this, input));
  }
});

const _batch_ = _pipe(continus, fold, reverse, spread)

export { once, debounce, throttle, deprecate, intercept, batch, continus, fold, reverse, spread, pipe, _batch, _pipe, _batch_ };
