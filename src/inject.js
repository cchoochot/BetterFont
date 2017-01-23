/*global chrome, FontFace*/
(function (document) {
	'use strict';

	var baseurl = chrome.extension.getURL('/fonts/');

	var addFontFunc = function (face, fontfile) {
		var fontface = new FontFace(face, 'url(' + baseurl + fontfile + ')');
		document.fonts.add(fontface);
		fontface.loaded.then(function () {});
	};

	var processFunc = function () {
		//addFontFunc('Arial', 'Roboto-Regular.ttf');
		addFontFunc('Arial', 'LiberationSans-Regular.ttf');

		addFontFunc('Verdana', 'DejaVuSans.ttf');
		addFontFunc('Tahoma', 'DejaVuSans.ttf');

		addFontFunc('Helvetica', 'texgyreheros-regular.woff');
		addFontFunc('Helvetica Neue', 'texgyreheros-regular.woff');

		document.fonts.ready.then(function () {
			console.info('Better Font: ready to rock!');
		});
	};

	if ("Win32" === navigator.platform) {
		processFunc();
	}
}(document));

/*
Verdana		=> DejaVu Sans
Tahoma		=> DejaVu Sans
Arial		=> Liberation Sans
Helvetica	=> Tex Gyre Heros // FreeSans
*/