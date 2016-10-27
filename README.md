# what is this ?

This is a pre-configured implementation of Google Blockly.

Now, what is Blockly ?

> Google's Blockly is a web-based, visual programming editor. Users can drag blocks together to build programs. All code is free and open source.

source: [GitHub - google/blockly: The web-based visual programming editor.](https://github.com/google/blockly)

# features

- reponsive display
- all blocks are usable (except `print` wich is replaced with `log`)
- javascript code export
- a text area to display generated code
- a reset button to regenerate code
- a play button to run the code in the browser
- a text area to display the console output
- a clear button to clear the console output
- interception and display of errors in the console output
- auto-backup blocks in local storage
- auto-restore blocks from local storage

# limitations

- only javascript code export (no php, no python, etc)

# requirements

- linux, mac os, windows
- git
- nodejs, npm, bower
- xdg-open (optional for linux)

# copy source from github

    git clone https://github.com/jibundeyare/blockly.git

# install

Launch a terminal and type:

    cd blockly
    bower install

# run

With linux, launch a terminal and type:

    xdg-open index.html

With linux, mac os or windows:
- launch your file explorer
- go to the source directory
- right click on `index.html` and select `open`
- your web browser should open and display blockly

Enjoy ;)

# todo

Write french documentation.
Use sass instead of plain css.

# credits

- Google Blockly
  [Blockly  |  Google Developers] (https://developers.google.com/blockly/)
  [GitHub - google/blockly: The web-based visual programming editor.](https://github.com/google/blockly)
- iconmonstr-video-13-64.png
  source: [Video 13 - PNG - iconmonstr](http://iconmonstr.com/video-13/?png)
- iconmonstr-x-mark-4-64.png
  source: [X Mark 4 - PNG - iconmonstr](http://iconmonstr.com/x-mark-4/?png)
- iconmonstr-recycling-11-64.png
  source: [Recycling 11 - PNG - iconmonstr](http://iconmonstr.com/recycling-11/?png)

