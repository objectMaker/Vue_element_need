module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', //不需要使用2015那个解析包了 直接使用这个
  ],
  "plugins": [["component", //babel-plugin-component的简写形式
    {     //这里要使用对象而不是数组
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]
}
