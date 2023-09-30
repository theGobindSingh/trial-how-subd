import typescript from "@rollup/plugin-typescript";
import run from "@rollup/plugin-run";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    }
  ],
  plugins: [typescript(), run()]
};
export default config;
