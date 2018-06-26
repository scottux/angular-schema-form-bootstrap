const config = require('./webpack.config.js');
const path = require('path');

config.entry = {
  'angular-schema-form-spark': [ path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-spark-bundled': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-spark.min': [ path.join(__dirname, 'src', 'module') ],
  'angular-schema-form-spark-bundled.min': [ 'angular-schema-form', path.join(__dirname, 'src', 'module') ],
};

module.exports = config;
