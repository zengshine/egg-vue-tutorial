// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-validate';
import 'egg-sequelize';
import 'egg-view-vue-ssr';
import 'egg-view-nunjucks';
import 'egg-webpack';
import 'egg-webpack-vue';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    validate?: EggPluginItem;
    io?: EggPluginItem;
    sequelize?: EggPluginItem;
    vuessr?: EggPluginItem;
    nunjucks?: EggPluginItem;
    webpack?: EggPluginItem;
    webpackvue?: EggPluginItem;
  }
}