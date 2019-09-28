# raw-module

[![Build Status](https://travis-ci.com/server-state/raw-module.svg?branch=master)](https://travis-ci.com/server-state/raw-module)
![GitHub](https://img.shields.io/github/license/server-state/raw-module)
[![npm version](https://badge.fury.io/js/%40server-state%2Fraw-module.svg)](https://badge.fury.io/js/%40server-state%2Fraw-module)
[![Coverage Status](https://coveralls.io/repos/github/server-state/raw-module/badge.svg?branch=master)](https://coveralls.io/github/server-state/raw-module?branch=master)
![module type: official](https://img.shields.io/badge/module%20type-official-%23015ba0)

A module for the server-state project.
This module allows running "raw" terminal commands and getting their output to
stdout and stderr. Commands do **not** get run in chronological order and each
command may only get run once per *SM*.

### Example
As `options`, the `raw-module` *SMF* takes an array of commands (`string[]`)
that get executed:
```js
serverState.registerModule('raw', require('@server-state/raw-module'), [
    'ls',
    'whoami',
    'echo Hello'
]);
```

It then returns the outputs of these commands in a key-value-pair object where
the commands serve as keys (this is also the reason why duplicate commands
aren't allowed).

Example return object:
```json
{
    "ls":{"stdout":"[...]","stderr":"","cmd":"ls","code":0},
    "whoami":{"stdout":"[...]","stderr":"","cmd":"whoami","code":0},
    "echo Hello":{"stdout":"Hello","stderr":"","cmd":"echo Hello","code":0}
}
```
