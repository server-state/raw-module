const raw = require('../src');

describe('raw-module', () => {
	it('should reject with an error when no commands are passed', async (done) => {
		await expect(raw()).rejects.toThrow();
		await expect(raw([])).rejects.toThrow();
		await expect(raw({})).rejects.toThrow();
		done();
	});

	it('should correctly handle a single command', async (done) => {
		expect(await raw(['ls'])).toHaveProperty('ls');
		done();
	});

	it('should correctly hande multiple commands', async (done) => {
		const res = await raw(['ls', 'ls -l']);

		expect(res).toHaveProperty('ls');
		expect(res).toHaveProperty('ls -l');

		done();
	});

	it('should reject when a command gets run two times', async (done) => {
		await expect(raw(['ls', 'ls'])).rejects.toThrow();
		done();
	});

});
