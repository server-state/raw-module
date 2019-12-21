const shellExec = require('shell-exec');

/**
 * A module for the server-state system
 *
 * Executes commands in the shell within the current context. The order of commands is not fixed.
 *
 * @throws if no commands get passed to the function
 * @throws if a command gets passed two times
 *
 * @returns {object|array|string|number|boolean} A JSON-serializable (via `JSON.stringify()`) version information about the server state
 */
module.exports = async function (commands) {
    if (!commands || !commands.length)
        throw new Error('No commands specified for the "raw-module".');

    const result = {};
    for (let cmd of commands) {
        if (result[cmd])
            throw new Error(`Command already run: "${cmd}"`);
        result[cmd] = await shellExec(cmd);
    }

    return result;
};

