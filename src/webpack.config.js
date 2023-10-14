const nrwlconfig = require("@nrwl/react/plugins/webpack.js");

module.exports = (config, context) => {
  nrwlconfig(config);

  return {
    ...config,
    node: undefined,
  };
};
