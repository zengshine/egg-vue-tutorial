<template>
  <html>
    <head>
      <title>{{ title }}</title>
      <meta
        name="keywords"
        :content="keywords">
      <meta
        name="description"
        :content="description">
      <meta
        http-equiv="content-type"
        content="text/html;charset=utf-8">
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      <link
        rel="shortcut icon"
        href="/favicon.ico"
        type="image/x-icon">
      <!-- iconfont link -->
      <link rel="preload"
            href="http://at.alicdn.com/t/font_2338836_6zdbftqphqb.js"
            as="script"
            onload="var script = document.createElement('script'); script.src = this.href; document.body.appendChild(script);">
    </head>
    <body>
      <div id="app">
        <slot />
      </div>
    </body>
  </html>
</template>

<script>

export default {
  name: 'ServerTpl',

  props: {
    title: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    keywords: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
    };
  }
};
</script>
<style lang='scss' scoped>
</style>
