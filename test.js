#! /usr/bin/env node

/*
 * UglifyCSS
 * Port of YUI CSS Compressor from Java to NodeJS
 * Author: Franck Marcia - https://github.com/fmarcia
 *
 * Based on parts of:
 * YUI Compressor
 * Author: Julien Lecomte - http://www.julienlecomte.net/
 * Author: Isaac Schlueter - http://foohack.com/
 * Author: Stoyan Stefanov - http://phpied.com/
 * Copyright (c) 2009 Yahoo! Inc. All rights reserved.
 * The copyrights embodied in the content of this file are licensed
 * by Yahoo! Inc. under the BSD (revised) open source license.
 */


var	sys = require('sys'),
	uglifycss = require('uglifycss'),
	options = {
		maxLineLen: 0,
		expandVars: false,
		cuteComments: true
	},
	content =
		'/*!\n' +
		' * UglifyCSS test\n' +
		' */\n' +
		'.class {\n' +
		'	font-family : Helvetica Neue, Arial, Helvetica, \'Liberation Sans\', FreeSans, sans-serif;\n' +
		'	color : #000000;\n' +
		'	margin: 0 0 0 0;\n' +
		'	font-size : 12px;\n' +
		'	font-weight :bold;\n' +
		'	padding : 5px;\n' +
		'	position : absolute;\n' +
		'	z-index : 100000;\n' +
		'}\n';


sys.print(uglifycss.processString(content, options) + '\n');
//uglifycss.processFiles(filenames, options) + '\n');
