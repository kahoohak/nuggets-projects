module.exports = () => ({
  name: "exbuild:http",
  setup(build) {
    let https = require("https");
    let http = require("http");
    //拦截CDN请求
    build.onResolve({ filter: /^https?:\/\// }, (args) => ({
      path: new URL(args.path, args.importer).toString(),
      namespace: "http-url",
    }));
    //通过fetch请求加载CDN资源
    build.onLoad({ filter: /.*/, namespace: "http-url" }, async (args) => {
      let contents = await new Promise((resolve, reject) => {
        function fetch(url) {
          console.log(`Downloading: ${url}`);
          let lib = url.startsWith("https") ? https : http;
          let req = lib
            .get(url, (res) => {
              if ([301, 302, 307].includes(res.statusCode)) {
                // 重定向
                fetch(new URL(res.headers.location, url).toString());
                req.abort();
              } else if (res.statusCode === 200) {
                // 响应成功
                let chunks = [];
                res.on("data", (chunk) => chunks.push(chunk));
                res.on("end", () => resolve(Buffer.concat(chunks)));
              } else {
                reject(new Error(`GET ${url} failed: status ${res.statusCode}`));
              }
            })
            .on("error", reject);
        }

        fetch(args.path);
      });

      return { contents };
    });
  },
});
