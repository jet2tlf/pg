import { build } from "esbuild";

build({
    bundle: true,
    platform: "node",
    logLevel: "info",
    minifyWhitespace: true,
    outfile: "dist/build.js",
    entryPoints: ["./src/index.ts"],
});