module.exports = {
  parser  : 'babel-eslint',
  extends : [
    'xo-space'
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
    'no-negated-condition'        : 'off',
    'object-curly-spacing'        : ['error', 'always'],
    'quote-props'                 : ['error', 'consistent'],
    'space-before-function-paren' : ['error', 'never'],
    // Waiting for the ['nesting'] rule
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/51
    'jsx-a11y/label-has-for'      : 'off'
  }
};
