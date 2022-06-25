const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    overlay: false, // 여기서 overlay: false는 오류를 더이상 화면에 표시하지 않겠다는 말임.
  },
});
