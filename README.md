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
To use the module, you'll need to pass a configuartion object containing the connect information to the [*SMF*](https://github.com/server-state/specs/blob/master/terminology/server-module-function.md).

Since the module uses `mysql2`, which is *mostly API-compatible with `mysqljs/mysql`*, you may refer to https://github.com/mysqljs/mysql#connection-options for specifications. In most cases, though, you'll need to pass a `host`, a `user`, a `password` and possibly a `port`:

```js
serverState.registerModule('raw', require('@server-state/raw-module'), [
    'ls',
    'whoami',
    'echo Hello'
]);
```

Example return object:
```json
{
    "ls":{"stdout":"[...]","stderr":"","cmd":"ls","code":0},
    "whoami":{"stdout":"[...]","stderr":"","cmd":"whoami","code":0},
    "echo Hello":{"stdout":"Hello","stderr":"","cmd":"echo Hello","code":0}
}
```
