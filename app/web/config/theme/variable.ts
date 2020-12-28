/**
 * @file 主题颜色变量
 */

const keyMap = {

  // 背景
  pageBgColor: '--page-bg-color',
  headerBgColor: 'header-bg-color',
  navBarBgColor: '--nav-bar-bg-color',
  navMenuBgColor: '--nav-menu-bg-color',
  blockBgColor: '--block-bg-color',
  infoBlockBgColor: '--info-block-bg-color',

  // 文本
  linkTextColor: '--link-text-color',
  textNav: '--text-nav',
  titleColor: '--title-color',
  normalTextColor: '--normal-text-color',

  // 边框
  borderColor: '--border-color',
};

const light = {
  [keyMap.headerBgColor]: '#fff',
  [keyMap.navBarBgColor]: '#fff',
  [keyMap.blockBgColor]: '#fff',
  [keyMap.infoBlockBgColor]: '#F5F6F7',

  [keyMap.titleColor]: '#0D0D0D',
  [keyMap.linkTextColor]: '#297AFF',
  [keyMap.normalTextColor]: '#818181',

  [keyMap.borderColor]: '#CECECE',
};

const dark = {};

export default {
  dark,
  light,
};
