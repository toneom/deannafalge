const fs = require('fs');
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const lost = require('lost')
const env = process.env.SPIKE_ENV


css = cssStandards({
  parser: sugarss,
  minify: env === 'production',
  warnForDuplicates: env !== 'production'
})
css.plugins.push(lost())

let rawdata = fs.readFileSync('./assets/json/navigation.json');  
const navigationObject = JSON.parse(rawdata); 
console.log(navigationObject);
module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  reshape: htmlStandards({
    parser: sugarml,
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar', navigation: navigationObject } },
    minify: env === 'production'
  }),
  postcss: css,
  babel: jsStandards()
}