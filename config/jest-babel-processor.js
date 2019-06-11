
/** 
 * For Jest to use Babel 7, we need to create a custom transformer to use the babel config
 * see https://github.com/facebook/jest/issues/3845 and https://github.com/facebook/jest/pull/7288 and https://github.com/facebook/jest/issues/1468#issuecomment-361260279
 */
const path = require('path');
module.exports = require('babel-jest').createTransformer(require(path.resolve(__dirname, "../.babelrc.json")));
