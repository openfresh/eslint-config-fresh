module.exports = {
  parser  : 'babel-eslint',
  extends : [
    'xo-space',
    'xo-react/space'
  ],
  env : {
    browser : true,
    mocha   : true
  },
  rules : {
    // Stylistic Issues
    'key-spacing' : ['error', {
      align       : 'colon',
      beforeColon : true,
      afterColon  : true
    }],
    "no-negated-condition"        : "off",
    'object-curly-spacing'        : ['error', 'always'],
    "quote-props"                 : ["error", "consistent"],
    'space-before-function-paren' : ['error', 'never']
  }
};
