'use strict';

Blockly.JavaScript['text_log'] = function(block) {
  // Log statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  return 'myConsole.log(' + msg + ');\n';
};

