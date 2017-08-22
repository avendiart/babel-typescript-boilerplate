const babel = require('babel-core');

const options = {
  "sourceMaps": "inline",
  "presets": [
    [
      "env", {
        "targets": {
          "node": true,
        },
      },
    ],
    "stage-3",
    "stage-2",
    "stage-1",
    "stage-0",
    "typescript",
  ],
};

module.exports = {
  process: (code) => babel.transform(code, options).code,
};
