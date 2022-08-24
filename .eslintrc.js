module.exports = {
  plugins: ['ejs'],
  extends: ['airbnb'],
  rules: {
    semi: ['error', 'never'],
  },
  globals: {
    document: true,
    foo: true,
    window: true,
    CustomEvent: true,
  },
}
