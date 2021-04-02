/*
 * Undo.js - A undo/redo framework for JavaScript
 *
 * http://jzaefferer.github.com/undo
 *
 * Copyright (c) 2011 Jörn Zaefferer
 *
 * MIT licensed.
 */
(function() {

  // based on Backbone.js' inherits
  const ctor = function() {};
  const inherits = function(parent, protoProps) {
    let child;

    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function() { return parent.apply(this, arguments); };
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    if (protoProps) extend(child.prototype, protoProps);

    child.prototype.constructor = child;
    child.__super__ = parent.prototype;
    return child;
  };

  function extend(target, ref) {
    let name,
      value;
    for (name in ref) {
      value = ref[name];
      if (value !== undefined) {
        target[ name ] = value;
      }
    }
    return target;
  }

  const Undo = {
    version: '0.1.15'
  };

  Undo.Stack = function() {
    this.commands = [];
    this.stackPosition = -1;
    this.savePosition = -1;
  };

  extend(Undo.Stack.prototype, {
    execute(command) {
      this._clearRedo();
      command.execute();
      this.commands.push(command);
      this.stackPosition++;
      this.changed();
    },
    undo() {
      this.commands[this.stackPosition].undo();
      this.stackPosition--;
      this.changed();
    },
    canUndo() {
      return this.stackPosition >= 0;
    },
    redo() {
      this.stackPosition++;
      this.commands[this.stackPosition].redo();
      this.changed();
    },
    canRedo() {
      return this.stackPosition < this.commands.length - 1;
    },
    save() {
      this.savePosition = this.stackPosition;
      this.changed();
    },
    dirty() {
      return this.stackPosition != this.savePosition;
    },
    _clearRedo() {
      // TODO there's probably a more efficient way for this
      this.commands = this.commands.slice(0, this.stackPosition + 1);
    },
    changed() {
      // do nothing, override
    }
  });

  Undo.Command = function(name) {
    this.name = name;
  };

  const up = new Error('override me!');

  extend(Undo.Command.prototype, {
    execute() {
      throw up;
    },
    undo() {
      throw up;
    },
    redo() {
      this.execute();
    }
  });

  Undo.Command.extend = function(protoProps) {
    const child = inherits(this, protoProps);
    child.extend = Undo.Command.extend;
    return child;
  };

  // AMD support
  // eslint-disable-next-line no-undef
  if (typeof define === 'function' && define.amd) {
    // Define as an anonymous module
    // eslint-disable-next-line no-undef
    define(Undo);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Undo;
  } else {
    this.Undo = Undo;
  }
}).call(this);
