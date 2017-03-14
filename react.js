module.exports = {
  parserOptions : {
    ecmaFeatures : {
      jsx : true
    }
  },
  extends : [
    'xo-react/space'
  ],
  rules : {
    'react/forbid-component-props' : 'off',
    'react/no-danger'              : 'off',
    'react/no-string-refs'         : 'off',
    'react/sort-comp'              : ['error', {
      order : [
        'static',
        'everything-else',
        'handler',
        'lifecycle',
        'rendering'
      ],
      groups : {
        static : [
          'styleguide',
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'defaultProps'
        ],
        handler : [
          '/^on.+$/'
        ],
        lifecycle : [
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        rendering : [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    'react/jsx-closing-bracket-location' : ['error', {
      nonEmpty    : 'tag-aligned',
      selfClosing : 'tag-aligned'
    }],
    'react/jsx-handler-names' : [2, {
      eventHandlerPrefix : 'on'
    }],
    'react/jsx-space-before-closing' : ['error', 'always']
  }
};
