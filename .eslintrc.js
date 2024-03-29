module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'import/no-named-as-default': 0,
    'no-useless-constructor': 0,
    'import/no-named-as-default-member': 0,
    'no-control-regex': 0
  }
}
