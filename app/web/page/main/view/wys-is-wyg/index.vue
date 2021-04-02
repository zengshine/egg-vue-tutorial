<template>
  <div class="contenteditable-editor__wrapper">
    <div class="handler-bar__wrapper">
      <button>undo</button>
      <button>redo</button>
    </div>
    <div class="contenteditable-element"
         contenteditable="true" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import { Stack } from './util/undo';
import EditCommand from './util/editCommand';

const editStack = new Stack();

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
const $ = document.querySelector.bind(document);

export default defineComponent({
  name: 'WYSISWYG',

  setup(props) {
    console.log('props=========================>', props);
  },

  mounted() {
    this.initDom();
    this.initObserver();
  },

  methods: {
    initObserver() {
      const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
          const { type } = mutation;
          console.log('mutation type=========================>', type, mutation);
        }
        editStack.commands.push(new EditCommand(mutations));
      });

      const editorEle = $('.contenteditable-element');
      editorEle.addEventListener('keypress', evt => {
        if (evt.which === 13) evt.preventDefault();
      });
      observer.observe(editorEle, {
        attributes: true,
        childList: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true
      });
    },

    initDom() {
      console.log('Stack=========================>', Stack);
    }
  }
});
</script>
<style lang='scss' scoped>
.contenteditable-editor__wrapper {
  padding: 10px;
}

.contenteditable-element {
  height: 200px;
  border: 1px solid gray;
  margin-top: 10px;
}
</style>
