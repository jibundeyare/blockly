'use strict';

// custom console
var myConsole = {
  log: function(text) {
    document.getElementById('myConsoleRenderArea').value += text + '\n';
  }
};

// init blockly
var blocklyArea = document.getElementById('blocklyArea');
var workspace = Blockly.inject(blocklyArea, {
  oneBasedIndex: false,
  toolbox: document.getElementById('toolbox')
});
var resetButton = document.getElementById('resetButton');
var playButton = document.getElementById('playButton');
var clearButton = document.getElementById('clearButton');

Blockly.svgResize(workspace);

// auto render code
function renderCode(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('codeRenderArea').value = code;
}

workspace.addChangeListener(renderCode);

// reset code
function resetCode(event) {
  renderCode(event);
}

resetButton.addEventListener('click', resetCode, false);

// run code
function evalCode(event) {
  var code = document.getElementById('codeRenderArea').value;

  try {
    window.eval(code);
  } catch (e) {
    myConsole.log(e.name + ': ' + e.message);
  }
}

playButton.addEventListener('click', evalCode, false);

// clear console
function clearConsole(event) {
  document.getElementById('myConsoleRenderArea').value = '';
}

clearButton.addEventListener('click', clearConsole, false);

// auto-backup and restore blocks with local storage
BlocklyStorage.backupOnUnload();
window.setTimeout(BlocklyStorage.restoreBlocks, 0);

