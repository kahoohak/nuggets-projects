module.exports = () => ({
  name: 'exbuild:http',
  setup(build) {
    //拦截CDN请求
    build.onResolve({ filter: /^https?:\/\// }, (args) => ({
      path: args.path,
      namespace: 'http-url'
    }))
    //通过fetch请求加载CDN资源
    build.onLoad({ filter: /.*/, namespace: 'http-url' }, async (args) => {
      let content = await new Promise((resolve, reject) => {
        function fetch(url) {}
        
        fetch(args.path)
      })

      return { contents }
    })
  }
})