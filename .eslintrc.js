module.exports = {
  extends: [
    'plugin:vue/recommended',
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  rules: {
    semi: ['error', 'never'],
    'no-unreachable': ['error'],
    'no-unexpected-multiline': ['error'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/require-v-for-key': 'off'
  },
  globals: {
  }
}
