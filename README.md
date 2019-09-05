# raw-module
A module for the server-state project.

This module allows to run commands specified on the server-side and return their output to gather data not covered by
another module. Commands may **not** get called multiple times and the order of execution of the commands is not specified.
