'use strict';

Blockly.Blocks['text_log'] = {
  /**
   * Block for log statement.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": 'log %1',
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Afficher le texte, le nombre ou une autre valeur spécifié dans la console.",
      "helpUrl": ''
    });
  }
};

