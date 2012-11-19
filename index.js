/*
	SI NAME   | SYMB | DEC   | BIN  | IEC NAME | SYMB  | BIN
	----------+------+-------+------+----------+-------+-----
	kilobyte  | (kB) | 10^3  | 2^10 | kibibyte | (KiB) | 2^10
	megabyte  | (MB) | 10^6  | 2^20 | mebibyte | (MiB) | 2^20
	gigabyte  | (GB) | 10^9  | 2^30 | gibibyte | (GiB) | 2^30
	terabyte  | (TB) | 10^12 | 2^40 | tebibyte | (TiB) | 2^40
	petabyte  | (PB) | 10^15 | 2^50 | pebibyte | (PiB) | 2^50
	exabyte   | (EB) | 10^18 | 2^60 | exbibyte | (EiB) | 2^60
	zettabyte | (ZB) | 10^21 | 2^70 | zebibyte | (ZiB) | 2^70
	yottabyte | (YB) | 10^24 | 2^80 | yobibyte | (YiB) | 2^80
*/

"use strict";

var symbols = ['k'   , 'M'   , 'G'   , 'T'   , 'P'   , 'E'  , 'Z'    , 'Y'],
    names   = ['kilo', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta'],

    map = {symbols: {}, names: {}};

names   = names  .map(function (name)   {return name   + 'byte';});
symbols = symbols.map(function (symbol) {return symbol + 'B';});

symbols.forEach(function (symbol, index) {
	var name = names[index],
	    lower = symbol.toLowerCase();

	map.symbols[symbol] = index;
	map.names  [symbol] = name;

	map.symbols[lower] = index;
	map.names  [lower] = name;
});

map.names  ['KB'] = map.names  ['kB'];
map.symbols['KB'] = map.symbols['kB'];

exports = module.exports = function (value, fromSymbol) {
	var bytes = exports.to_bytes(value, fromSymbol);

	function convert_to (toSymbol) {
		return exports.from_bytes(bytes, toSymbol);
	}

	Object.keys(map.symbols).forEach(function (apiSymbol) {
		convert_to['to_' + apiSymbol] = function () {return convert_to(apiSymbol);};
	});

	return convert_to;
};

exports.from_bytes = function (bytes, symbol) {
	return symbol ? bytes / exports.to_bytes(1, symbol) : bytes;
};

exports.to_bytes = function (value, symbol) {
	return symbol ? value * Math.pow(2, (10 * (map.symbols[symbol] + 1))) : value;
};

exports.symbol_name = function (symbol) {
	return symbol ? map.names[symbol] : 'byte';
};
