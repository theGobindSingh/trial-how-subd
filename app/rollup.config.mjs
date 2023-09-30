import typescript from "@rollup/plugin-typescript";
import run from "@rollup/plugin-run";

const watchMode = process.env.ROLLUP_WATCH;

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    }
  ],
  plugins: [typescript(), watchMode && run()]
};
export default config;
