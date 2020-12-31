// /**
//  * @file 主题配置文件
//  */

// import cssVars from 'css-vars-ponyfill';

// import themeVariableMap from '@/config/theme/variable';

// export default function configTheme(type: string) {
//   document.documentElement.setAttribute('data-theme', type);
//   cssVars({
//     watch: true, // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
//     variables: themeVariableMap[type],
//     onlyLegacy: false, // false  默认将css变量编译为浏览器识别的css样式  true 当浏览器不支持css变量的时候将css变量编译为识别的css
//   });
// }
