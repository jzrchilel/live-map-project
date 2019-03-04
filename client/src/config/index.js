const ENV_CONF = process.env.NODE_ENV === 'test'
  ? 'development'
  : process.env.NODE_ENV;
module.exports = require(`./environment/${ENV_CONF}`);
