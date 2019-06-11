module.exports = {
  root: true,

  env: {
    node: true,
  },

  plugins: ["@typescript-eslint"],
  extends: ["plugin:vue/essential", "eslint:recommended"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    strict: "off",
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/typescript"],
}
