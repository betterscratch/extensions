(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Tab Size extension must run unsandboxed');
  }

  class TabInfo {
    getInfo() {
      return {
        id: 'tabinfo',
        name: 'Tab Info',
        blocks: [
          {
            opcode: 'getTabWidth',
            blockType: Scratch.BlockType.REPORTER,
            text: 'tab width'
          },
          {
            opcode: 'getTabHeight',
            blockType: Scratch.BlockType.REPORTER,
            text: 'tab height'
          }
        ],
      };
    }

    getTabWidth(args, callback) {
      return window.innerWidth;
    }

    getTabHeight(args, callback) {
      return window.innerHeight;
    }
  }

  Scratch.extensions.register(new TabInfo());
})(Scratch);
