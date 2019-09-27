# raw-module

[![Build Status](https://travis-ci.com/server-state/raw-module.svg?branch=master)](https://travis-ci.com/server-state/raw-module)
![GitHub](https://img.shields.io/github/license/server-state/raw-module)
[![npm version](https://badge.fury.io/js/%40server-state%2Fraw-module.svg)](https://badge.fury.io/js/%40server-state%2Fraw-module)
[![Coverage Status](https://coveralls.io/repos/github/server-state/raw-module/badge.svg?branch=master)](https://coveralls.io/github/server-state/raw-module?branch=master)
![module type: official](https://img.shields.io/badge/module%20type-official-%23015ba0)

A module for the server-state project.

This module allows to run commands specified on the server-side and return their output to gather data not covered by
another module. Commands may **not** get called multiple times and the order of execution of the commands is not specified.
