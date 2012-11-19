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

var default_symbol = 'kB',

    symbols = ['k'   , 'M'   , 'G'   , 'T'   , 'P'   , 'E'  , 'Z'    , 'Y'],
    names   = ['kilo', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta'],

    map = {symbols: {}, names: {}};

names   = names  .map(function (name)   {return name   + 'byte';});
symbols = symbols.map(function (symbol) {return symbol + 'B';});

symbols.forEach(function (symbol, index) {
	var name = names[index];

	map.symbols[symbol] = index;
	map.names  [symbol] = name;
});


exports.in_bytes = function (bytes, symbol) {
	return bytes * Math.pow(2, (10 * (map.symbols[symbol || default_symbol] + 1)));
};

exports.symbol_name = function (symbol) {
	return map.names[symbol || default_symbol];
};
