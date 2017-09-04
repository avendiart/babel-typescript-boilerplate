const babel = require('babel-core');

module.exports = {
  process: (code, path) => babel.transform(code, { retainLines: true, filename: path }),
};
