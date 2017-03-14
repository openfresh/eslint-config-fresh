'use strict';

const validator = require('eslint/lib/config/config-validator');
const index = require('./index');
const jsxa11y = require('./jsx-a11y');
validator.validate(index, 'index.js');
validator.validate(jsxa11y, 'jsx-a11y.js');
