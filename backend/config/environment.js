var _ = require('lodash');

var localEnvVars = {
  TITLE:      'blontourage',
  SAFE_TITLE: 'blontourage',
  superSecret: 'blontourageforever'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
