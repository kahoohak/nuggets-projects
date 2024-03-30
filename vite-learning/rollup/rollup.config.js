import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ["src/index.js", "src/util.js"],
  output: [
    {
      // 产物输出目录
      dir: "dist/es",
      // 产物格式
      format: "esm",
    },
    {
      // 产物输出目录
      dir: "dist/cjs",
      // 产物格式
      format: "cjs",
    }
  ],
  // 通过 plugins 参数添加插件
  plugins: [resolve(), commonjs()],
};

export default buildOptions;