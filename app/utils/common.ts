const path = require('path');
const fs = require('fs');

/**
 * 变量文件夹下的文件，类webpack的require.context()方法
 *
 * @param {String} directory 文件目录
 * @param {Boolean} recurse 是否递归查询子目录，默认false
 * @param {RegExp} regexp 文件名匹配正则表达式
 *
 * @return {Array} 返回结果
 */
export const requireContext = (directory, recurse, regexp) => {
  const modelContext: object = {};
  const fileList = fs.readdirSync(directory);
  fileList.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && recurse) {
      // 递归解析子文件夹
      const subModelContext = requireContext(fullPath, recurse, regexp);
      Object.assign(modelContext, subModelContext);
    } else if (regexp.test(fullPath)) {
      // 加载模块
      const model = require(fullPath);
      modelContext[fullPath] = model;
    }
  });

  return modelContext;
};
