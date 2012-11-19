var convert_bytesize = require('../index'),
    from_bytes = convert_bytesize.from_bytes,
    to_bytes = convert_bytesize.to_bytes;

module.exports = require('spc').describe('Convert byte size', function () {
	it('should traslate bytes to bytes', function () {
		expect(to_bytes(10)).to.equal(10);
	});

	it('should traslate kilobytes to bytes', function () {
		expect(to_bytes(10, 'KB')).to.equal(10 * Math.pow(2, 10));
	});

	it('should traslate megabytes to bytes', function () {
		expect(to_bytes(10, 'MB')).to.equal(10 * Math.pow(2, 20));
	});

	it('should traslate gigabytes to bytes', function () {
		expect(to_bytes(10, 'GB')).to.equal(10 * Math.pow(2, 30));
	});

	it('should traslate terabytes to bytes', function () {
		expect(to_bytes(10, 'TB')).to.equal(10 * Math.pow(2, 40));
	});

	it('should traslate petabytes to bytes', function () {
		expect(to_bytes(10, 'PB')).to.equal(10 * Math.pow(2, 50));
	});

	it('should traslate exabytes to bytes', function () {
		expect(to_bytes(10, 'EB')).to.equal(10 * Math.pow(2, 60));
	});

	it('should traslate zettabytes to bytes', function () {
		expect(to_bytes(10, 'ZB')).to.equal(10 * Math.pow(2, 70));
	});

	it('should traslate yottabytes to bytes', function () {
		expect(to_bytes(10, 'YB')).to.equal(10 * Math.pow(2, 80));
	});



	it('should traslate bytes in bytes', function () {
		expect(from_bytes(10)).to.equal(10);
	});

	it('should traslate bytes in kilobytes', function () {
		expect(from_bytes(10, 'kB')).to.equal(10 / Math.pow(2, 10));
	});

	it('should traslate bytes in megabytes', function () {
		expect(from_bytes(10, 'MB')).to.equal(10 / Math.pow(2, 20));
	});

	it('should traslate bytes in gigabytes', function () {
		expect(from_bytes(10, 'GB')).to.equal(10 / Math.pow(2, 30));
	});

	it('should traslate bytes in terabytes', function () {
		expect(from_bytes(10, 'TB')).to.equal(10 / Math.pow(2, 40));
	});

	it('should traslate bytes in petabytes', function () {
		expect(from_bytes(10, 'PB')).to.equal(10 / Math.pow(2, 50));
	});

	it('should traslate bytes in exabytes', function () {
		expect(from_bytes(10, 'EB')).to.equal(10 / Math.pow(2, 60));
	});

	it('should traslate bytes in zettabytes', function () {
		expect(from_bytes(10, 'ZB')).to.equal(10 / Math.pow(2, 70));
	});

	it('should traslate bytes in yottabytes', function () {
		expect(from_bytes(10, 'YB')).to.equal(10 / Math.pow(2, 80));
	});
});

require('spc/reporter/dot')(module.exports);
