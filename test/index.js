var in_bytes = require('../index').in_bytes;

module.exports = require('spc').describe('Convert byte size', function () {
	it('should traslate bytes to kilobytes', function () {
		expect(in_bytes(10)).to.equal(10 * Math.pow(2, 10));
	});

	it('should traslate bytes to megabytes', function () {
		expect(in_bytes(10, 'MB')).to.equal(10 * Math.pow(2, 20));
	});

	it('should traslate bytes to gigabytes', function () {
		expect(in_bytes(10, 'GB')).to.equal(10 * Math.pow(2, 30));
	});

	it('should traslate bytes to terabytes', function () {
		expect(in_bytes(10, 'TB')).to.equal(10 * Math.pow(2, 40));
	});

	it('should traslate bytes to petabytes', function () {
		expect(in_bytes(10, 'PB')).to.equal(10 * Math.pow(2, 50));
	});

	it('should traslate bytes to exabytes', function () {
		expect(in_bytes(10, 'EB')).to.equal(10 * Math.pow(2, 60));
	});

	it('should traslate bytes to zettabytes', function () {
		expect(in_bytes(10, 'ZB')).to.equal(10 * Math.pow(2, 70));
	});

	it('should traslate bytes to yottabytes', function () {
		expect(in_bytes(10, 'YB')).to.equal(10 * Math.pow(2, 80));
	});
});

require('spc/reporter/dot')(module.exports);
