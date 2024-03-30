const { build } = require('esbuild')
const httpImport = require('./plugins/http-import-plugin.js')
const html = require("./plugins/html-plugin.js");

async function runBuild() {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ['./src/index.jsx'],
    outdir: 'dist',
    bundle: true,
    format: 'esm',
    splitting: true,
    sourcemap: true,
    metafile: true,
    // plugins: [httpImport()]
    plugins: [html()]
  }).then(() => {
    console.log("🚀 Build Finished!")
  })
}

runBuild()



