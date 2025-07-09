/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  experimentalOperatorPosition: "start",
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  objectWrap: "preserve",
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-tailwindcss"],
  printWidth: 90,
  proseWrap: "always",
  quoteProps: "consistent",
  semi: true,
  singleAttributePerLine: true,
  singleQuote: false,
  tabWidth: 2,
  tailwindAttributes: ["class", "ui"],
  tailwindConfig: "./.nuxt/tailwind.config.cjs",
  tailwindFunctions: ["tw"],
  trailingComma: "es5",
  useTabs: false,
  vueIndentScriptAndStyle: true,
};

export default config;
