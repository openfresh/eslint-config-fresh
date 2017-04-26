module.exports = {
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
    'capitalized-comments'        : 'off',
    'object-curly-spacing'        : ['error', 'always'],
    'quote-props'                 : ['error', 'consistent'],
    'space-before-function-paren' : ['error', 'never']
  }
};
