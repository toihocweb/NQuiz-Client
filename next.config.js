const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  lessVarsFilePath: "./styles/antd-custom.less",
  webpack(config) {
    return config;
  },
});
