var babel = require('@babel/core');
var buble = require('buble');
var cosmiconfig = require('cosmiconfig');

var explorer = cosmiconfig('buble', {
  sync: true
}).load();
var options = explorer ? explorer.config : {}


module.exports = {
  process: src => {
    var { code } = babel.transformSync(src, {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    });

    return buble.transform(code, options).code;
  }
};
