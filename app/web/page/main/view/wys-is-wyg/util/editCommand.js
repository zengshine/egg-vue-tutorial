import Undo from './undo';

function constructor(mutations) {
  this.mutations = mutations;
}

export default Undo.Command.extend({
  constructor,

  execute() {
    console.log('=========================>');
  },

  undo() {
    console.log('=========================>');
  },

  redo() {
    console.log('=========================>');
  }
});
