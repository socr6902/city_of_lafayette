/*
The following errors were found when attempting to minify this file:
- Line 1699: Parse error. syntax error
- Line 1704: Parse error. syntax error
- Line 1705: Parse error. syntax error
- Line 1706: Parse error. 'try' without 'catch' or 'finally'
- Line 1708: Parse error. syntax error
- Line 1710: Parse error. syntax error
- Line 1712: Parse error. syntax error
- Line 1713: Parse error. missing ; before statement
- Line 1716: Parse error. syntax error
- Line 1718: Parse error. syntax error
- Line 1719: Parse error. syntax error
- Line 1720: Parse error. invalid return
- Line 1721: Parse error. syntax error
- Line 5026: Parse error. illegal character
- Line 5026: Parse error. missing ; before statement
- Line 5026: Parse error. missing ; before statement
- Line 5026: Parse error. unterminated regular expression literal
- Line 5028: Parse error. missing ; before statement
- Line 5029: Parse error. syntax error
- Line 5033: Parse error. syntax error
- Line 5035: Parse error. missing ; before statement
- Line 5038: Parse error. syntax error
- Line 5039: Parse error. syntax error
- Line 5045: Parse error. syntax error
- Line 5047: Parse error. missing ; before statement
- Line 5050: Parse error. syntax error
- Line 5051: Parse error. syntax error
- Line 5057: Parse error. syntax error
- Line 5059: Parse error. missing ; before statement
- Line 5062: Parse error. syntax error
- Line 5063: Parse error. syntax error
- Line 5066: Parse error. syntax error
- Line 5069: Parse error. missing ; before statement
- Line 5075: Parse error. syntax error
- Line 5077: Parse error. missing ; before statement
- Line 5082: Parse error. syntax error
- Line 5084: Parse error. missing ; before statement
- Line 5085: Parse error. missing ; before statement
- Line 5087: Parse error. syntax error
- Line 5089: Parse error. syntax error
- Line 5100: Parse error. invalid return
- Line 5101: Parse error. syntax error
- Line 5104: Parse error. missing ; before statement
- Line 5105: Parse error. syntax error
- Line 5124: Parse error. syntax error
- Line 5126: Parse error. missing ; before statement
- Line 5127: Parse error. missing ; before statement
- Line 5128: Parse error. syntax error
- Line 5129: Parse error. syntax error
- Line 5131: Parse error. missing ; before statement
- Line 5135: Parse error. syntax error
- Line 5141: Parse error. syntax error
- Line 5143: Parse error. missing ; before statement
- Line 5151: Parse error. invalid return
- Line 5177: Parse error. syntax error
- Line 5947: Parse error. missing ; before statement
- Line 5948: Parse error. missing ; before statement
- Line 5949: Parse error. missing ; before statement
- Line 5950: Parse error. missing ; before statement
- Line 5951: Parse error. missing ; before statement
- Line 5952: Parse error. missing ; before statement
- Line 7010: Parse error. missing ; before statement
- Line 7017: Parse error. syntax error
- Line 7040: Parse error. illegal character
- Line 7040: Parse error. illegal character
- Line 7040: Parse error. missing ) after argument list
- Line 7040: Parse error. missing ; before statement
- Line 7040: Parse error. illegal character
- Line 7040: Parse error. syntax error
- Line 7042: Parse error. syntax error
- Line 9499: Parse error. syntax error
- Line 9509: Parse error. missing ) in parenthetical
- Line 9511: Parse error. syntax error
- Line 9514: Parse error. invalid return
- Line 9519: Parse error. invalid return
- Line 9532: Parse error. illegal character
- Line 9532: Parse error. missing ; before statement
- Line 9532: Parse error. illegal character
- Line 9535: Parse error. illegal character
- Line 9535: Parse error. missing ; before statement
- Line 9535: Parse error. illegal character
- Line 9540: Parse error. illegal character
- Line 9540: Parse error. missing ; before statement
- Line 9540: Parse error. illegal character
- Line 9543: Parse error. syntax error
- Line 9545: Parse error. syntax error
- Line 9546: Parse error. missing ; before statement
- Line 9548: Parse error. syntax error
- Line 9550: Parse error. syntax error
- Line 9551: Parse error. missing ; before statement
- Line 9588: Parse error. syntax error
- Line 9590: Parse error. syntax error
- Line 9603: Parse error. invalid return
- Line 9609: Parse error. invalid return
- Line 9623: Parse error. syntax error
- Line 9627: Parse error. invalid return
- Line 9628: Parse error. syntax error
- Line 9631: Parse error. invalid return
- Line 9637: Parse error. invalid return
- Line 9638: Parse error. syntax error
- Line 9640: Parse error. syntax error
- Line 9643: Parse error. invalid return
- Line 9648: Parse error. invalid return
- Line 9653: Parse error. syntax error
- Line 9654: Parse error. missing ; before statement
- Line 9656: Parse error. syntax error
- Line 9658: Parse error. missing ; before statement
- Line 9663: Parse error. syntax error
- Line 9666: Parse error. syntax error
- Line 9677: Parse error. invalid return
- Line 9680: Parse error. syntax error
- Line 9681: Parse error. missing ; before statement
- Line 9682: Parse error. syntax error
- Line 9685: Parse error. syntax error
- Line 9694: Parse error. invalid return
- Line 9695: Parse error. syntax error
- Line 9697: Parse error. syntax error
- Line 9700: Parse error. invalid return
- Line 9704: Parse error. invalid return
- Line 9706: Parse error. syntax error
- Line 9707: Parse error. syntax error
- Line 9708: Parse error. syntax error
- Line 9711: Parse error. syntax error
- Line 9712: Parse error. missing ; before statement
- Line 9715: Parse error. syntax error
- Line 9716: Parse error. syntax error
- Line 9718: Parse error. syntax error
- Line 9719: Parse error. syntax error
- Line 9722: Parse error. syntax error
- Line 9724: Parse error. syntax error
- Line 9726: Parse error. syntax error
- Line 9728: Parse error. syntax error
- Line 9730: Parse error. syntax error
- Line 9733: Parse error. syntax error
- Line 9739: Parse error. syntax error
- Line 9742: Parse error. missing ; before statement
- Line 9743: Parse error. missing ; before statement
- Line 9744: Parse error. syntax error
- Line 9748: Parse error. continue must be inside loop
- Line 9753: Parse error. invalid return
- Line 9754: Parse error. syntax error
- Line 9760: Parse error. syntax error
- Line 9761: Parse error. syntax error
- Line 9762: Parse error. invalid return
- Line 9762: Parse error. illegal character
*/
/// <reference name="MicrosoftAjax.js" />
/// <reference name="Util.js" />
/// <reference path="GlobalJSFunctionsDetail.js" />
/// <reference path="/Scripts/jquery-1.4.4-vsdoc.js"/>

//Callback global variables for Slideshow.
var callbackfnDocumentCenter = null;
var callbackfnSlideshowSave = null;
var $popUp_Slideshow = null;
var parentID_Slideshow = null;
var slideshowFolderDefault = '';
var numbersOnly = new RegExp('^[0-9]*$');
//Global variable for ThemeProperties modal
var $popup_ThemeProperties = null;
//Callback variables for Slideshow.
var SetCursorPosition = null;

// Prevents errors for Internet Explorer (modes prior to 9).
// They will occur unless the developer tools are open.
if (!window.console) {
	var noop = function () { };

	// Note: MSIE will override this once the dev. tools are open.
	window.console = {
		log: noop, clear: noop, warn: noop, error: noop, assert: noop,
		dir: noop, count: noop, profile: noop, profileEnd: noop,
		trace: noop, info: noop, memoryProfile: noop, memoryProfileEnd: noop,
		exception: noop, debug: noop, dirxml: noop, group: noop, groupEnd: noop,
		markTimeline: noop, time: noop, timeEnd: noop, groupCollapsed: noop
	};
}

// User-agent sniffing for functions that rely on the user-agent
// to determine version of Safari. Avoid using this variable and
// check for the presence of features instead (best-practice).
var isWebKit = (navigator.userAgent.toLowerCase().indexOf('webkit') > -1);

// Determines if an array contains an object.
// Uses == equality, case-sensitive. a containsExact() could do === equality.
if (!Array.prototype.contains) {
	Array.prototype.contains = function (item) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == item)
				return true;
		}
		return false;
	}
}

// Gets index of an item if it is present in the array, else returns -1.
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (item) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == item)
				return i;
		}
		return -1;
	}
}

// Implement ECMAScript 5 String.trim() and friends for browsers that
// don't have it (e.g. Firefox prior to 3.5, Internet Explorer 6, 7, 8).
if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+/g, "").replace(/\s+$/g, "");
	}
	String.prototype.trimLeft = function () {
		return this.replace(/^\s+/g, "");
	}
	String.prototype.trimRight = function () {
		return this.replace(/\s+$/g, "");
	}
}

// Implement .NET-style left-padding method.
String.prototype.padLeft = function (desiredLength, paddingChar) {
	paddingChar += '';
	desiredLength = parseInt(desiredLength);

	if (paddingChar.length > 1)
		paddingChar = paddingChar.charAt(0);
	else if (paddingChar.length < 1)
		return this;

	if (this.length >= desiredLength)
		return this;
	else {
		var arr = new Array();
		var padNum = desiredLength - this.length;

		for (var i = 0; i < padNum; i++)
			arr.push(paddingChar);

		return arr.join('') + this;
	}
}

// Implement .NET-style right-padding method.
String.prototype.padRight = function (desiredLength, paddingChar) {
	paddingChar += '';
	desiredLength = parseInt(desiredLength);

	if (paddingChar.length > 1)
		paddingChar = paddingChar.charAt(0);
	else if (paddingChar.length < 1)
		return this;

	if (this.length >= desiredLength)
		return this;
	else {
		var arr = new Array();
		var padNum = desiredLength - this.length;

		for (var i = 0; i < padNum; i++)
			arr.push(paddingChar);

		return this + arr.join('');
	}
}

String.isNullOrEmpty = function (text) {
	return (text == null || text == '');
}

// Adds static method to regular expressions that escapes meta-characters.
if (!RegExp.metaEscape) {
	RegExp.metaEscape = function (text) {
		if (text == null)
			return null;
		else if (typeof (text) != "string")
			text += '';

		return text.replace(/(\\|\/|\<|\>|\:|\.|\*|\+|\?|\$|\[|\]|\(|\)|\{|\}|\||\&)/g, '\\$1');
	};
}

// Copies text data to clipboard in WebKit browsers (Chrome/Safari).
function toWebkitClipboard(text) {
	// Create element in DOM with text to copy.
	var tmp = document.createElement('div');
	tmp.textContent = text;
	document.body.appendChild(tmp);

	// Get current user selection, and remove selection current ranges.
	var curSelection = window.getSelection();
	curSelection.removeAllRanges();

	// Create new selection range with DOM element containing text to copy.
	var textRange = document.createRange();
	textRange.selectNode(tmp);
	curSelection.addRange(textRange);

	// Execute COPY DHTML command.
	document.execCommand("Copy");

	// Clean-up.
	document.body.removeChild(tmp);
}

// Copies value in stringVal to the clipboard, displaying the successMessage if hideAlert is false.
// NOTE: Replace this with something like toWebkitClipboard() at some point.
function toClipboardEx(stringVal, hideAlert, successMessage) {
	if (window.clipboardData) {		// Internet Explorer
		if (!window.clipboardData.setData("Text", stringVal) && !hideAlert)
			hideAlert = true;
	}
	else if ((window.WebKitPoint || !window.netscape) && !window.opera) {
		toWebkitClipboard(stringVal);
	}
	else if (window.netscape) {	// Mozilla Firefox and derivitives (Netscape, Seamonkey)...
		try {
			// Request full access to the XPCOM (Cross-Platform COM) API.
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		}
		catch (e) {
			// Unable to obtain access, user rejected or setting in about:config not set right.
			alert('Please type "about:config" in your browser and press enter. Type "signed.applets.codebase_principal_support" in Filter. Double click to change the value to "true". Then come back and click on the link again.\n\nIf you have already performed this action, make sure when you are asked whether to allow or deny the browser permission, that you are allowing it.');
			return;
		}

		// Create an instance of the clipboard class.
		var clipBoard = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);

		// Create an instance of the Transferable class (used to talk to the clipboard).
		var clipTrans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

		// Set clipboard format for text only.
		clipTrans.addDataFlavor('text/unicode');

		// Create XPCOM string, set data to copy of stringVal.
		var clipString = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copyText = stringVal;
		clipString.data = copyText;

		// Note: This code may be bugged in some scenarios! 1 char does not always equal 2 bytes in UTF-16!
		// Set data to transfer to the clipboard (length * 2, since 1 char is usually 2 bytes in UTF-16).
		clipTrans.setTransferData("text/unicode", clipString, copyText.length * 2);

		// Transfer data to the global clipboard.
		clipBoard.setData(clipTrans, null, clipBoard.kGlobalClipboard);
	}

	if (!hideAlert)
		alert(successMessage);

	return true;
}

function toClipboard(stringVal, hideAlert) {
	return toClipboardEx(stringVal, hideAlert, "The link has been copied to your clipboard.");
}

function getClipboard() {
	if (window.clipboardData) {
		return window.clipboardData.getData('Text');
	} else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		}
		catch (e) {
			alert('Please type "about:config" in your browser and press enter. Type "signed.applets.codebase_principal_support" in Filter. Double click to change the value to "true". Then come back and click on the link again.\n\nIf you have already performed this action, make sure when you are asked whether to allow or deny the browser permission, that you are allowing it.');
			return;
		}

		// Create instances of the Clipboard and Transferable objects.
		var clipBoard = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		var clipTrans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

		// Get data from global clipboard, place in clipTrans object.
		clipTrans.addDataFlavor('text/unicode');
		clipBoard.getData(clipTrans, clipBoard.kGlobalClipboard);

		// Create objects to pass to getTransferData, which uses XPCOM String
		// and Integer classes instead of those normally used by JavaScript.
		var objStr = new Object(); var objNumBytes = new Object();
		try {
			clipTrans.getTransferData('text/unicode', objStr, objNumBytes);
		}
		catch (error) {
			return '';
		}

		// Query whichever interface is available, opting to use nsISupportsWString.
		if (objStr) {
			if (Components.interfaces.nsISupportsWString)
				objStr = objStr.value.QueryInterface(Components.interfaces.nsISupportsWString);
			else if (Components.interfaces.nsISupportsString)
				objStr = objStr.value.QueryInterface(Components.interfaces.nsISupportsString);
			else
				objStr = null;
		}

		// Note: This code may be bugged in some scenarios! 1 char does not always equal 2 bytes in UTF-16!
		// Get data out of the XPCOM string and into a normal JS string.
		if (objStr)
			return (objStr.data.substring(0, objNumBytes.value / 2));
	}
	return;
}

// Gets the computed style of an element (browser-independent).
var getCurrentStyle = (document.defaultView ?
	function (elem) {
		return document.defaultView.getComputedStyle(elem, '');
	} :
	function (elem) {
		return elem.currentStyle;
	}
);

// Gets children nodes of an HTML DOM element matching the tag name specified.
function getChildNodesByTag(domElement, tagName) {
	var cn = domElement.childNodes;
	var nodesPresent = 0, retVal = new Array();
	retVal.length = cn.length;

	tagName = tagName.toUpperCase();
	for (var cv = 0; cv < cn.length; cv++) {
		if (cn[cv].nodeType == 1 && cn[cv].nodeName == tagName)
			retVal[nodesPresent++] = cn[cv];
	}

	return retVal.slice(0, nodesPresent);
}

// Returns true on Safari browsers 1.3.4 and older (bad date object behavior in old Safari).
// Check does not work properly if user-agent has been modified by user.
var isSafariVersion13OrOlder = (isWebKit ?
	function () {
		var navAppVersion = navigator.appVersion;
		var phraseToFind = 'AppleWebKit/';
		var foundStartAt = navAppVersion.indexOf(phraseToFind) + phraseToFind.length;
		var foundEndAt = navAppVersion.indexOf(' ', foundStartAt + 1);
		return (parseInt(navAppVersion.substring(foundStartAt, foundEndAt)) < 320);
	} :
	function () {
		return false;
	}
);

// Returns true on Safari browsers 2.0.4 and older (textbox/button not stylable before 3.x).
// Check does not work properly if user-agent has been modified by user.
var isSafariVersion20OrOlder = (isWebKit ?
	function () {
		var navAppVersion = navigator.appVersion;
		var phraseToFind = 'AppleWebKit/';
		var foundStartAt = navAppVersion.indexOf(phraseToFind) + phraseToFind.length;
		var foundEndAt = navAppVersion.indexOf(' ', foundStartAt + 1);
		return (parseInt(navAppVersion.substring(foundStartAt, foundEndAt)) < 525);
	} :
	function () {
		return false;
	}
);

// Returns true if an event fired too soon after another event.
// Mechanism used on older Safari browsers to prevent
// double-fire problems (especially with key presses).
function safariEventRateLimitBlock() {
	if (isWebKit && isSafariVersion13OrOlder()) {
		if (safariRateLimited != 0)
			return true;
		else {
			safariRateLimited = setTimeout('safariRateLimited = 0;', 10);
			return false;
		}
	}
}

// Get coordinates relative to document (works out container issues).
// Wrote this so it works in quirks or standards mode.
function getDocumentCoordinates(element) {
	var htmlElem = document.body.parentNode;
	var bodyElem = document.body;
	var pos = { "x": 0, "y": 0 };
	pos.toString = function () { return this.x + ', ' + this.y; }
	while (element != null) {
		pos.x += element.offsetLeft;
		pos.y += element.offsetTop;
		switch (element.offsetParent) {
			case htmlElem:
			case bodyElem:
			case null:
				return pos;
		}
		element = element.offsetParent;
	}
}

// Attach an event handler to an object (browser-independent).
// First clause is W3C DOM method, second is DHTML (IE).
var addEvent = (window.addEventListener ?
	function (obj, evType, fn, useCapture) {
		try {
			obj.addEventListener(evType, fn, useCapture);
		} catch (e) { }
		return true;
	} :
	function (obj, evType, fn, useCapture) {
		try {
			return obj.attachEvent('on' + evType, fn);
		} catch (e) { }
	}
);

// Release an event handler from an object (browser-independent).
// First clause is W3C DOM method, second is DHTML (IE).
var removeEvent = (window.removeEventListener ?
	function (obj, evType, fn, useCapture) {
		try {
			obj.removeEventListener(evType, fn, useCapture);
		} catch (e) { }
		return true;
	} :
	function (obj, evType, fn, useCapture) {
		try {
			obj.detachEvent('on' + evType, fn);
		} catch (e) { }
		return true;
	}
);

// Stops a DOM event from propagating further than the current handler.
// Note: Returning false from event handlers in IE 6/7/8 does the same thing.
function stopEventPropagation(evObj) {
	if (evObj.preventDefault)
		evObj.preventDefault();

	// Calling cancelButton after stopPropagation
	// may negate the stopPropagation so do not do it. -KB
	if (evObj.stopPropagation)
		evObj.stopPropagation();
	else if (evObj.cancelBubble)
		evObj.cancelBubble();
}

// These functions assists in obscuring email addresses:
function mailTo(obj) {
	//alert('mailto:'+eval(obj.getAttribute('id')));
	obj.setAttribute('href', 'mailto:' + eval(obj.getAttribute('id')));
}

function js_mail(obj, Emails) {
	var mail_link = Emails[0];
	for (var email = 1; email < Emails.length; email++)
		if (Emails[email] != null && Emails[email] != '' && Emails[email].substr(1, 4) != 'href') mail_link = mail_link + Emails[email];

	obj.setAttribute('href', 'mailto:' + mail_link);
}

// Used to prevent right-click menu from appearing for some clients that wanted this ability.
function antiContextMenuHook() {
	// Note: Opera is not hookable.
	var showAlert = function () { alert('All images are protected by Copyright. Do not use without permission.'); }
	var mdClick = function (e) {
		if (!document.all) {
			if (e.button == 2 || e.button == 3)
				showAlert();
		}
		else if (event && event.button == 2)
			showAlert();
	}
	var cmClick = function (e) {
		if (navigator.userAgent.toLowerCase().indexOf('khtml') > -1) {
			// Safari, Konquerer
			if (e.preventDefault)
				e.preventDefault();
			showAlert();
		}
		if (e.stopPropagation)
			e.stopPropagation(); // Mozilla Firefox 2.0
		return false; // IE 6.0 and 7.0
	}
	document.onmousedown = mdClick;
	document.oncontextmenu = cmClick;
}

// Form validation functions:
function RegExValidate(expression, value, param) {
    var re = new RegExp(expression, param);
    if (value != '' && value != undefined) {
        if (value.match(re)) return true;
        else return false;
    }
    else return true;
}

// Used for validating emailaddress for special scenarios like continuous periods. - VB
function checkSpecialScenarios(s) {
    var bugchars = '!#$^&*()|}{[]?><~%:;/,=`"'; 
	var i;
	var lchar = "";
	// Search through string's characters one by one.
	// If character is not in bag.
	for (i = 0; i < s.length; i++) {
		// Check that current character isn't whitespace.
		var c = s.charAt(i);
		if (i > 0) lchar = s.charAt(i - 1)
		if (bugchars.indexOf(c) != -1 || (lchar == "." && c == ".")) return false;
	}
	return true;
}

// JavaScript version of CivicPlus.CMS.Site.Validation.IsValidEmailAddress();
function emailValidate(emailAddress) {
	var emailAddressTrimmed = TrimString(emailAddress + "");
	if (emailAddressTrimmed != "") {
		if (checkSpecialScenarios(emailAddressTrimmed) == false)
			return false;
		if (emailAddressTrimmed.replace(/[^@]/g, '').length > 1)
			return false;
		var parts = emailAddressTrimmed.splitRemoveEmpties('@');
		if (emailAddressTrimmed.substr(emailAddressTrimmed.length - 1) == '@')
			return false;
		if (parts.length == 2) {
			for (var i = 0; i < parts.length; i++) {
				if (((!RegExValidate('^[A-Z0-9]$', parts[i].substr(0, 1), 'i') || !RegExValidate('^[A-Z0-9]$', parts[i].substr(parts[i].length - 1), 'i')) && i == 1) || (!RegExValidate('^[A-Z0-9_%-\\.]+$', parts[i].substr(0, parts[i].length - 1), 'i')))
					return false;
			}
			var lastDotPos = parts[1].lastIndexOf('.');
			if (lastDotPos < 0 || parts[1].substr(lastDotPos).length < 3 || (!RegExValidate('^[A-Z]+$', parts[1].substr(lastDotPos + 1), 'i')))
				return false;
			else
				return true;
		}
		else
			return false;
	}
	else
		return false;
}

// Returns: 0 - success, 1 - illegal value, 2 - too large, 3 - too small, 4 - blank.
function intValidateWithRange(value, min, max) {
	if (value == '' || value == null) return 4;
	if (RegExValidate('^(-|)[0-9]*$', value, 'i')) {
		try { var pint = parseInt(value); } catch (ex) { return 1; }
		if (pint < min) return 3; else if (pint > max) return 2; return 0;
	} else
		return 1;
}

// Split function that remotes empty entries.
String.prototype.splitRemoveEmpties = function (separator, howmany) {
	var splitArr;
	var returnArr = new Array();

	if (arguments.length == 2)
		splitArr = this.split(separator, howmany);
	else
		splitArr = this.split(separator);

	for (var i = 0; i < splitArr.length; i++) {
		if (splitArr[i] != '')
			returnArr.push(splitArr[i]);
	}

	return returnArr;
}

// JavaScript equivalent of a function in GlobalFunctionsDetail.aspx.
// Do not use this function unless you have a good reason (e.g. textarea length on client must match size on server).
// KNOWN: Does not do entities properly, matches server behavior (where's the semi-colon?).
function SQLSafe(strInput) {
	return strInput.replace(/\'/g, "&#39").replace(/\"/g, "&#34");
}

// Returns true if the string is empty. Will blow up on NULLs.
function FieldIsEmpty(strInput) {
	if (strInput == undefined)
		return true;
	return TrimString(strInput).length == 0;
}

// Removes leading and trailing white space from a string. Will blow up on NULLs.
function TrimString(strInput) {
	return strInput.replace(/^\s+/g, "").replace(/\s+$/g, "");
}

// Returns true if the value is an integer value.
function isInteger(strInput) {
	var leadingZeros = calculateLeadingZeroStrings(strInput);

	return leadingZeros == strInput || (strInput == leadingZeros + parseInt(strInput).toString());
}

// Returns true if the value is a real number.
function isRealNumber(strInput) {
	var leadingZeros = calculateLeadingZeroStrings(strInput);

	return leadingZeros == strInput || (strInput == leadingZeros + parseFloat(strInput));
}

function calculateLeadingZeroStrings(strInput) {
	var leadingZeros = "";

	if (strInput != null) {
	for (var i = 0; i < strInput.length; i++) {
		if (strInput[i] == "0") {
			leadingZeros += "0";
		}
		else {
			break;
		}
	}
	}

	return leadingZeros;
}

// Date validator class.
function dateValidator() {
	this.firstValidDate = new Date('01/01/1753');
	this.lastValidDate = new Date('01/01/3000');
	this.strStartDateID = 'Start/Begin Date';
	this.strEndDateID = 'End/Stop/Expiration Date';
	this.strStartTimeID = 'Start Time';
	this.strEndTimeID = 'End Time';
	this.ysnRequireStartDateIfEndSpecified = false;
	this.ysnStartDateRequired = false;
	this.ysnEndDateRequired = false;
	this.ysnStartTimeRequired = false;
	this.ysnEndTimeRequired = false;
	this.ysnAllowEqualDates = false;
	this.ysnAllowTimeOnly = false;
	this.ysnCent = false; //Allow only four digit years
	var dtiEndDate;
	var dtiStartDate;
	var dtiStartTime;
	var dtiEndTime;
	this.timesAlreadyValidated = false;
	this.datesAlreadyValidated = false;

	this.setStartDate = function (date) {
		dtiStartDate = this.cleanDate(date);
	}

	this.setEndDate = function (date) {
		dtiEndDate = this.cleanDate(date);
	}

	this.setStartDateRequired = function (required) {
		this.ysnStartDateRequired = required;
	}

	this.setEndDateRequired = function (required) {
		this.ysnEndDateRequired = required;
	}

	this.setRequireStartDateIfEndSpecified = function (required) {
		this.ysnRequireStartDateIfEndSpecified = required;
	}

	this.cleanDate = function (date) {
		if (date) {
			if (typeof isMobileView != 'undefined' && isMobileView) {
				date = this.ChangeDateFormatForMobileView(date);
			}
			else if (RegExValidate('^([0-9\-\\\/]*?)([0-9]{2,4})$', date, 'i')) {
				var year = RegExp.$2;
				if (year.length == 2) {
					if (year >= 50) date = RegExp.$1 + "19" + year;
					else date = RegExp.$1 + "20" + year;
				}
				date = date.replace('\-', '/', 'g');
			}
		}
		return date;
	}

	this.ChangeDateFormatForMobileView = function (date) {
		var rxDatePattern = /^\d{4}\-\d{1,2}\-\d{1,2}$/; //Regex for yyyy-mm-dd format
		var match = date.match(rxDatePattern);
		if (match != null) {
			var dateArray = date.split('-');
			var dateFormat = getDateFormat().toLowerCase();
			if (dateFormat == "mm/dd/yyyy")
				date = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
			else if (dateFormat == "dd/mm/yyyy")
				date = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
		}
		return date;
	}

	this.dateValidate = function (dtiDate, ysnRequired, strID) {
		if (!ysnRequired && (dtiDate == null || dtiDate == '')) return true;
		else if (ysnRequired && (dtiDate == null || dtiDate == '')) {
			if (strID) this.error = strID + ' cannot be blank.';
			else this.error = ' cannot be blank';
			this.errorNumber = 1;
			return false;
		}
		else if (RegExValidate('^(1[0-2]|0?[1-9])(\/|\-)(0?[1-9]|[1-2][0-9]|3[0-1])\\2([0-9]{4}|[0-9]{2})$', dtiDate, 'i')) {
			var month = RegExp.$1;
			var day = RegExp.$3;
			var year = RegExp.$4;

			if (year.length == 2 && this.ysnCent == true) {
				if (strID) this.error = strID + ' requires a four digit year';
				else this.error = 'Please use a four digit year';
				return false;
			}
			if (year.length == 4 && (year > 3000 || year < 1753)) {
				this.error = dtiDate + '\nis outside of the date range.';
				this.errorNumber = 2;
				return false;
			}
			if (day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
				this.error = 'This month doesn\'t have 31 days';
				this.errorNumber = 3;
				return false;
			}
			if (day >= 30 && month == 2) {
				this.error = 'February doesn\'t have ' + day + ' days';
				this.errorNumber = 4;
				return false;
			}
			if (month == 2 && day == 29 && !(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) {
				this.error = 'This is not a leap year\nFebruary doesn\'t have 29 days.';
				this.errorNumber = 5;
				return false;
			}
			return true;
		} else {
			if (strID) this.error = strID + ' is not a valid date format.\nPlease use ' + getDateFormat().toUpperCase() + '.';
			else this.error = dtiDate + '\n is an invalid date format.\nPlease use ' + getDateFormat().toUpperCase() + '.';
			this.errorNumber = 6;
			return false;
		}
		return false;
	}

	this.dateOrderValidate = function () {
		if (this.dateValidate(dtiStartDate, this.ysnStartDateRequired, this.strStartDateID) && this.dateValidate(dtiEndDate, this.ysnEndDateRequired, this.strEndDateID)) {
			if (this.ysnRequireStartDateIfEndSpecified && !dtiStartDate && dtiEndDate) {
				this.error = 'A Start Date must be specified if an End Date was entered.';
				this.errorNumber = 9;
				return false;
			}
			if (!dtiStartDate || !dtiEndDate) return true;
			else {
				var StartDate = new Date(dtiStartDate);
				var EndDate = new Date(dtiEndDate);
			}
			if (StartDate.getTime() < EndDate.getTime()) return true;
			else if (StartDate.getTime() == EndDate.getTime() && this.ysnAllowEqualDates == true) {
				this.ysnDatesAreEqual = true;
				return true;
			} else {
				this.error = 'The End Date must be after the Start Date.';
				this.errorNumber = 7;
				return false;
			}
		}
		else return false;
	}

	this.dateValidateNew = function (dtiDate, ysnRequired, strID) {
		var month;
		var day;
		var year;
		if (dtiDate === undefined)
			dtiDate = '';

        if (!ysnRequired && (dtiDate == '' || !dtiDate)) return true;

		if (ysnRequired && dtiDate == '') {
			if (strID) this.error = strID + ' is required';
			else this.error = ' is required';
			this.errorNumber = 1;
			return false;
		}

		var dateFormat = getDateFormat().toLowerCase();

		if (typeof isMobileView != 'undefined' && isMobileView) {
			dtiDate = this.ChangeDateFormatForMobileView(dtiDate);
		}

		if ((dateFormat == "mm/dd/yyyy") && (RegExValidate('^(1[0-2]|0?[1-9])(\/|\-)(0?[1-9]|[1-2][0-9]|3[0-1])\\2([0-9]{4}|[0-9]{2})$', dtiDate, 'i'))) {
			month = RegExp.$1;
			day = RegExp.$3;
			year = RegExp.$4;

			return this.validDateParts(month, day, year);
		}

		if ((dateFormat == "dd/mm/yyyy") && (RegExValidate('^(0?[1-9]|[1-2][0-9]|3[0-1])(\/|\-)(1[0-2]|0?[1-9])\\2([0-9]{4}|[0-9]{2})$', dtiDate, 'i'))) {
			month = RegExp.$3;
			day = RegExp.$1;
			year = RegExp.$4;

			return this.validDateParts(month, day, year);
		}

		if (strID) this.error = strID + ' is not a valid date format.\nPlease use ' + dateFormat.toUpperCase() + '.';
		else this.error = dtiDate + '\n is an invalid date format.\nPlease use ' + dateFormat.toUpperCase() + '.';
		this.errorNumber = 6;

		return false;
	}

	this.validDateParts = function (month, day, year) {
		if (year.length == 2 && this.ysnCent == true) {
			if (strID) this.error = strID + ' requires a four digit year';
			else this.error = 'Please use a four digit year';
			return false;
		}
		if (year.length == 4 && (year > 3000 || year < 1753)) {
			this.error = dtiDate + '\nis outside of the date range.';
			this.errorNumber = 2;
			return false;
		}
		if (day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
			this.error = 'This month doesn\'t have 31 days';
			this.errorNumber = 3;
			return false;
		}
		if (day >= 30 && month == 2) {
			this.error = 'February doesn\'t have ' + day + ' days';
			this.errorNumber = 4;
			return false;
		}
		if (month == 2 && day == 29 && !(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) {
			this.error = 'This is not a leap year\nFebruary doesn\'t have 29 days.';
			this.errorNumber = 5;
			return false;
		}
		return true;
	}

	this.dateOrderValidateNew = function () {
		//If sending in US format run dateValidateNew first becuase it expects dates in daybeforemonth format
		if (this.datesAlreadyValidated || (this.dateValidateNew(dtiStartDate, this.ysnStartDateRequired, this.strStartDateID) && this.dateValidateNew(dtiEndDate, this.ysnEndDateRequired, this.strEndDateID))) {
			if (this.ysnRequireStartDateIfEndSpecified && !dtiStartDate && dtiEndDate) {
				this.error = 'A Start Date must be specified if an End Date was entered.'
				this.errorNumber = 9; return false;
			}
			if (!dtiStartDate || !dtiEndDate || dtiEndDate == "NaN/NaN/NaN" || dtiStartDate == "NaN/NaN/NaN") return true;
			else {
				//Expects dates in US format 
				var StartDate = new Date(dtiStartDate);
				var EndDate = new Date(dtiEndDate);
			}
			if (StartDate.getTime() < EndDate.getTime()) return true;
			else if (StartDate.getTime() == EndDate.getTime() && this.ysnAllowEqualDates == true) {
				this.ysnDatesAreEqual = true;
				return true;
			}
			else {
				this.error = 'The End Date must be after the Start Date.';
				this.errorNumber = 7; return false;
			}
		}
		else return false;
	}

	this.getStandardDate = function (dateText) {
		$.ajax({
			url: '/Utility/GetDate?dateText=' + dateText,
			async: false,
			type: 'GET',
			dataType: 'json',
			success: function (data) {
				dateText = data.date;
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});

		return dateText;
	}

	this.smallDateTimeMaxValueValidate = function () {
		var StartDate = new Date(dtiStartDate);
		var EndDate = new Date(dtiEndDate);
		var MaxDate = new Date('05/06/2079 23:59:59');
		var result = true;
		if (StartDate <= MaxDate && EndDate <= MaxDate) {
			result = true;
		}
		else if (StartDate > MaxDate) {
			this.error = "The Start Date must be less than '5/6/2079'.";
			this.errorNumber = 2;
			result = false;
		}
		else if (EndDate > MaxDate) {
			this.error = "The End Date must be less than '5/6/2079'.";
			this.errorNumber = 3;
			result = false;
		}
		return result;
	}

	this.format = function (format, date) {
		if (!date) date = new Date();
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		return format.toLowerCase().replace(/dd/g, day).replace(/mm/g, month).replace(/y{1,4}/g, year)
	}

	this.timeValidate = function (ditTime, ysnRequired, strID) {
		if (!ysnRequired && ditTime == '') return true;
		else if (ysnRequired && ditTime == '') {
			if (strID) this.error = strID + ' is required';
			else this.error = 'Time is required';
			this.errorNumber = 1;
			return false;
		}
		else if (RegExValidate('^(1[0-2]|0?[1-9]):([0-5]?[0-9])(:([0-5][0-9]))?$', ditTime, 'i')) return true;
		else {
			if (strID) this.error = strID + ' is not a valid time format. Please use HH:MM.';
			else this.error = ' is not a valid time format. Please use HH:MM.';
			this.errorNumber = 8;
			return false;
		}
	}

	this.timeValidate24Hour = function (ditTime, ysnRequired, strID) {
		if (!ysnRequired && ditTime == '') return true;
		else if (ysnRequired && ditTime == '') {
			if (strID) this.error = strID + ' is required';
			else this.error = 'Time is required';
			this.errorNumber = 1;
			return false;
		}
		else if (RegExValidate('^([01]?[0-9]|2[0-3]):([0-5]?[0-9])(:([0-5][0-9]))?$', ditTime, 'i')) return true;
		else {
			if (strID) this.error = strID + ' is not valid.';
			else this.error = ' is not valid.';
			this.errorNumber = 8;
			return false;
		}
	}
	this.timeOrderValidate = function () {
		if (!this.ysnAllowTimeOnly && ((!dtiStartDate && this.dtiStartTime) || (!dtiEndDate && this.dtiEndTime))) {
			this.error = 'You only submited a time.\nPlease provide a day as well.';
			this.errorNumber = 10;
			this.startDateBlank = (!dtiStartDate && this.dtiStartTime);
			this.endDateBlank = (!dtiEndDate && this.dtiEndTime);
			return false;
		}
		if (this.timesAlreadyValidated || (this.timeValidate(this.dtiStartTime, this.ysnStartTimeRequired, this.strStartTimeID) && this.timeValidate(this.dtiEndTime, this.ysnEndTimeRequired, this.strEndTimeID))) {
			if (!this.ysnDatesAreEqual) return true;

			if (!this.dtiStartTime && !this.ysnStartTimeRequired) return true;
			if (!this.dtiEndTime && !this.ysnEndTimeRequired) return true;
			
			var dtiStartTime = this.convertTo24Hour(this.dtiStartTime, this.strStartAMPM, dtiStartDate);
			var dtiEndTime = this.convertTo24Hour(this.dtiEndTime, this.strEndAMPM, dtiEndDate);

			if (dtiStartTime.getTime() < dtiEndTime.getTime()) return true;
			else if (dtiStartTime.getTime() == dtiEndTime.getTime() && this.ysnAllowEqualTimes == true) {
				this.ysnTimesAreEqual = true;
				return true;
			}
			else {
				this.error = 'The End Time must be after the Start Time if the Start and End Dates are the same.'
				this.errorNumber = 9;
				return false;
			}
		}
		return false;
	}

	this.convertTo24Hour = function (time, AMPM, date) {
		if (!date) date = "1/1/70";

		var dtTime = time.indexOf(AMPM) == -1 ? new Date(date + " " + time + " " + AMPM) : new Date(date + " " + time);
		if (dtTime == 'Invalid Date') {
			var dayBeforeMonthOn = getDateFormat().toLocaleLowerCase() == "dd/mm/yyyy" ? true : false;
			if (dayBeforeMonthOn) {
				var dateArray = date.split('/');
				date = dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2];
				dtTime = time.indexOf(AMPM) == -1 ? new Date(date + " " + time + " " + AMPM) : new Date(date + " " + time);
			}
		}
		return dtTime;
	}
}

// Helper function for inputAlert().
function inputEmailValidate(obj, required) {
	if (required == null || required == false)
		return (obj.value == '' || emailValidate(obj.value) == true)
	else
		return (obj.value != '' && emailValidate(obj.value) == true)
}

// Note: This function does not match standard validation behavior! Users are supposed to see
// a summary of problems with their inputs and not be alerted multiple times!
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Calls another validation routine, and determines success/failure on result of call (true/false).
// Displays error message on validation failure. Returns result of call.
function inputAlert(call, obj, required, errorMessage) {
	call = eval('input' + call + 'Validate');
	if (call(obj, required) == false) {
		if (errorMessage == null)
			errorMessage = 'Please enter a single valid email address without any extra body, subject, etc. information (ie user@domain.com).';
		obj.setAttribute('autocomplete', 'off');
		obj.focus();
		obj.setAttribute('autocomplete', 'on');
		alert(errorMessage);
		return false;
	}
	else
		return true;
}

// Takes array of required fields and checks whether they have a value or not
// If empty fields found, formats a javascript alert to inform the user and returns true
function checkRequiredFieldsEmpty(requiredFieldList) {
	var badList = new Array();
	for (var i = 0, len = requiredFieldList.length; i < len; i++) {
		var $this = requiredFieldList[i];
		var $fieldId = $('#' + $this);
		if (($fieldId.length > 0) && (FieldIsEmpty($fieldId.val()))) {
			var $label = $('label[for=' + $this + ']');
			if ($label.length > 0)
				badList.push($label.text().trim());
			else
				badList.push($this);
		}
	}
	if (badList.length > 0) {
		var msg = badList.join(" cannot be blank.\r\n");
		msg += " cannot be blank.";
		msg = msg.replace(/\*/g, '');
		alert(msg);
		return true;
	}
	return false;
}
// End Form Validation functions.

// Begin AJAX functions:
// See http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
// If you are curious why the XMLHTTP versions specified are and why others are not.
function makeErrorRequest(url, status) {
	var http_error_request = false;
	var origin = location.pathname;

	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7
		http_error_request = new XMLHttpRequest();
		if (http_error_request.overrideMimeType)
			http_error_request.overrideMimeType("text/html");
	} else if (window.ActiveXObject) { // IE6
		try {
			http_error_request = new ActiveXObject("Msxml2.XMLHTTP.6.0");
		} catch (e) {
			try {
				http_error_request = new ActiveXObject("Msxml2.XMLHTTP"); // Version 3.0
			} catch (e) { }
		}
	}

	http_error_request.onreadystatechange = function () { }
	http_error_request.open("GET", "/AJAX-error.ashx?url=" + escape(url) + "&status=" + status + "&origin=" + escape(origin), true);
	http_error_request.send(null);
	//if(status == 403)
	//window.location = '/admin/AccessDenied.aspx?fromURL=' + window.location.pathname.substr(7);
}

// Makes AJAX request, additionally supporting POST data (makeHttpRequest doesn't).
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Note: It's YOUR responsibility as a developer to make sure data
// placed in formData is formatted as it should be. Form data should be
// in Query String format with the value portions escape()'d. -KB
function makeHttpRequestEx(URL, formData, callbackFunc, ysnReturnXML) {

	URL = window.location.origin + URL;

	if (formData != null) {
		$.ajax({
			type: 'POST',
			url: URL,
			data: formData,
			success: callbackFunc
		});
	}
	else {
		$.ajax({
			type: 'GET',
			url: URL,
			success: callbackFunc
		});
}
}

// NOTE: Do not use this in new code, use $.ajax() instead.
// Makes AJAX request. Used in n-menu code.
function makeHttpRequest(url, callback_function, return_xml) {
	var http_request = false;

	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType && !return_xml)
			http_request.overrideMimeType("text/html");
	} else if (window.ActiveXObject) { // IE6
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP.6.0");
		} catch (e) {
			try {
				http_request = new ActiveXObject("MSxml2.XMLHTTP"); // Version 3
			} catch (e) { }
		}
	}

	if (!http_request) {
		alert("Unfortunately, your browser doesn't support this feature.");
		return false;
	}

	http_request.onreadystatechange = function () {
		if (http_request.readyState == 4) {
			--ajax_call_counter;

			//try {
			if (http_request.status == 200) {
				if (return_xml)
					eval(callback_function + ', http_request.responseXML)');
				else {
					if (http_request.responseText.search(/<form action='error.asp' method=post>/i) < 0)
						eval(callback_function + ', http_request.responseText)');
					else
						makeErrorRequest(url, http_request.status);
				}
			}
			else if (http_request.status)
				makeErrorRequest(url, http_request.status);
			//} catch (e) {
			// If this happens, there is no way to notify anyone
			// of the previous error. It might be their connection died,
			// or failed in some other way.

			//alert('An error occured while reporting the previous error.');
			//var USER_EXPLAIN_ERR_EN = '\n\nTechnical Details:\n' + e.name + ' - ';
			// IE 6 & 7: No Line Number, No Filename
			//if (document.all && !window.opera) {
			//	alert(USER_EXPLAIN_ERR_EN + e.description + ' (line unavailable, code: ' + e.number + ')' + '\n\nJavaScript Callback:\n' + callback_function + ', <responseData>);');
			//}
			// Opera and Firefox 1.5+: Line Number + Filename
			//else {
			//	alert(USER_EXPLAIN_ERR_EN + e.message + '\n' + e.fileName + ', line ' + e.lineNumber + '\n\nJavaScript Callback:\n' + callback_function + ', <responseData>);');
			//}
			//}

			http_request = null;
		}
	}

	http_request.open("GET", url, true);
	http_request.send(null);
}
// Invoked on window.onunload for pages using synchronous AHAH.
// Catches switches to different pages and window closes.
// -=-=-=-=-
// Note: It is synchronous instead of asynchronous to ensure
// the operation completes before a close. This is SHAH.
//
function destroyAHAH(e) {
	var http_request;

	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType("text/html");
		}
	} else if (window.ActiveXObject) { // IE6
		try {
			http_request = new ActiveXObject("MSXML2.XMLHTTP.6.0");
		} catch (e) {
			try {
				http_request = new ActiveXObject("MSXML2.XMLHTTP"); // Version 3
			} catch (e) { }
		}
	}

	if (!http_request) return;
	http_request.open("GET", 'http://' + window.location.host + '/AJAX-NMenuLoader.ashx?clearCache=1', false);
	http_request.send(null);
	//alert(http_request.status + ': if 200, the session cache object was term\'d where needed be.');
}
// End AJAX functions.

//
//  slideShow class
//  vars:
//  slideShowId						constructor param for the id of the image that will have the Slide Show
//  slideShowLink					constructor param for the id of the link that will be around the image that has Slide Show, use '' for no link
//  slideShowSpeed					optional constructor param for the speed of the slide show, default = 5000
//  filterName						optional constructor param for the IE filter, default = blendTrans
//  filterAttr1						optional constructor param for the IE filter, default = duration=3
//  filterAttr2						optional constructor param for the IE filter
//  filterAttr3						optional constructor param for the IE filter
//  j								counter for the object
//  picArr							array of pictures
//  altArr							array of alt text
//  linkArr							array of links
//  methods:
//  addImage(n, img, alt, caption, lngCaption, link)	add an image with alt text and a link, n specifies which postion in the arrays
//  runSlideShow()					continually calls nextSlide to run the Slide Show
//  nextSlide()						applies the transition and advances the Slide Show image 1 spot in the arrays
//  mouseOver()						detects and loads that image to the Main Image Display & draws border around the slected image & removed border from the Other small image icons
function slideShow(slideShowId, slideShowLink, slideShowSpeed, filterName, filterAttr1, filterAttr2, filterAttr3, slideShowLinkTarget, layout, externalLink) {
	if (!slideShowLinkTarget || slideShowLinkTarget == null || slideShowLinkTarget == "undefined" || slideShowLinkTarget == "")
		slideShowLinkTarget = "_self";
	if (!layout || layout == null || layout == "undefined")
		layout = 1;

	this.slideShowId = document.getElementById(slideShowId);

	this.picArr = new Array();
	this.altArr = new Array();
	this.captionArr = new Array();
	this.lngCaptionArr = new Array();
	this.linkArr = new Array();
	this.linkTargetArr = new Array();
	this.showExternalLinkPrompts = new Array();
	var useStyle = false;
	var captionFilter = "";
	var cssRule = false;
	var pos = 0;

	//Get The filter for IE.//
	for (i = 0; i < document.styleSheets.length; i++) {
		var styles = document.styleSheets[i];
		do {
			if (styles.href && styles.href.indexOf("style.css") > -1) {
				if (styles.cssRules) {
					cssRule = styles.cssRules[pos];
				}
				else if (styles.rules) {
					cssRule = styles.rules[pos];
				}
			}
			if (cssRule && cssRule.selectorText != undefined && cssRule.selectorText.indexOf('slideCaption') != -1) {
				useStyle = true;
				captionFilter = cssRule.style.filter;
				break;
			}
			pos++;
		} while (cssRule && !useStyle)
		if (useStyle) break;
	}
	var useStyle = $('.slideCaption').attr('class') == 'slideCaption';

	// If junk data causes one slideshow to fail the others should not.
	if (this.slideShowId == null) {
		this.addImage = function (n, img, alt, link, linkTarget, caption, lngCaption, externalLink) { }
		this.runSlideShow = function () { }
		this.nextSlide = function () { }
		this.mouseOver = function (elem, imgPath, altText) { }
		return;
	}

	var tmpElem = document.createElement('a');
	if (slideShowLink && slideShowLink != '') {
		do {
			slideShowLink = (slideShowLink).replace("%38", "&");
		} while ((slideShowLink).indexOf("%38") != -1)
		tmpElem.href = slideShowLink;
		if (slideShowLinkTarget && slideShowLinkTarget != '')
			tmpElem.target = slideShowLinkTarget;

		var ssID = this.slideShowId.id.replace("cvpSlideShowImage", "");
		var capt = document.getElementById('slideCaption' + ssID);
		if (externalLink == "True" && $('#ShowLeavingPageForExternalLinks') == "True") {
			tmpElem.setAttribute("onclick", "return showExternalSiteDialog(this);");
			tmpElem.onclick = function () { return showExternalSiteDialog(this); };
			if (capt) {
				capt.children[0].setAttribute("onclick", "return showExternalSiteDialog(this);");
			}
		}
		else {
			tmpElem.onclick = "";
			if (capt)
				capt.children[0].removeAttribute("onclick");
		}
	}
	else
		tmpElem.removeAttribute('href');

	this.j = 1;
	if (slideShowSpeed == null || slideShowSpeed == '')
		this.slideShowSpeed = 4000;
	else
		this.slideShowSpeed = slideShowSpeed * 1000;
	if (filterAttr1 == null || filterAttr1 == '')
		filterAttr1 = 2;
	if (filterName == null || filterName == '' || filterName.toLowerCase() == 'blendtrans')
		this.filterName = 'BlendTrans(duration=' + filterAttr1;
	else if (filterName.toLowerCase() != 'none')
		this.filterName = 'progid:DXImageTransform.Microsoft.' + filterName + ', duration=' + filterAttr1;
	if (filterAttr2 != null && filterAttr2 != '' && filterAttr2 != 'null')
		this.filterName = this.filterName + ',' + filterAttr2;
	if (filterAttr3 != null && filterAttr3 != '' && filterAttr3 != 'null')
		this.filterName = this.filterName + ',' + filterAttr3;
	if (filterName.toLowerCase() == 'none')
		this.filterName = filterName;
	else
		this.filterName = this.filterName + ')';

	switch (layout) {
		case 1: // Standard
			tmpElem.style.border = 'none';
			tmpElem.style.background = 'transparent';
			//tmpElem.style.border = 'medium none';
			//tmpElem.style.background = 'transparent none repeat scroll 0% 0%';
			tmpElem.id = slideShowId + '_link';
			this.slideShowLink = tmpElem;
			this.slideShowId.parentNode.insertBefore(tmpElem, this.slideShowId);
			this.slideShowId.parentNode.removeChild(this.slideShowId);
			this.slideShowLink.appendChild(this.slideShowId);
			break;
		case 5: // StandardFiveBottom
			//DO NOT COPY for this case - follow 12 for a better code.
			//tmpElem.style.border = 'none';
			//tmpElem.style.background = 'transparent';
			tmpElem.style.border = 'medium none';
			tmpElem.style.background = 'transparent none repeat scroll 0% 0%';
			tmpElem.id = slideShowId + '_link';
			this.slideShowLink = tmpElem;
			this.slideShowId.parentNode.insertBefore(tmpElem, this.slideShowId);
			//this.slideShowId.parentNode.removeChild(this.slideShowId);
			this.slideShowLink.appendChild(this.slideShowId);
			var tmpElemHTML = this.slideShowLink.innerHTML;

			var td = this.slideShowId.parentNode.parentNode;
			this.slideShowId.parentNode.parentNode.removeChild(this.slideShowId.parentNode);

			var newSection = document.createElement("div");
			newSection.setAttribute("id", "SubSection1");

			var cpSlideShowWrapper1 = document.createElement("div");
			cpSlideShowWrapper1.setAttribute("id", "cpSlideShowWrapper1");
			cpSlideShowWrapper1.style.padding = "5px";
			cpSlideShowWrapper1.style.background = "rgb(70, 43, 16) none repeat scroll 0% 0%";
			cpSlideShowWrapper1.style.position = "relative";
			cpSlideShowWrapper1.style.width = "416px";
			//cpSlideShowWrapper1.style.-moz-background-clip = "border";
			//cpSlideShowWrapper1.style.-moz-background-origin = "padding";
			//cpSlideShowWrapper1.style.-moz-background-inline-policy = "continuous";
			cpSlideShowWrapper1.style.height = "254px";

			var imageHead = document.createElement("div");
			imageHead.style.padding = "4px";
			imageHead.style.background = "rgb(241, 239, 234) none repeat scroll 0% 0%";
			imageHead.style.align = "left";
			imageHead.style.width = "406px";
			//-moz-background-clip: border;
			//-moz-background-origin: padding;
			//-moz-background-inline-policy: continuous;
			imageHead.style.float = "left";
			imageHead.style.height = "198px";
			imageHead.style.align = "left";

			imageHead.innerHTML = tmpElemHTML;
			cpSlideShowWrapper1.appendChild(imageHead);

			var imageRows = document.createElement("div");
			imageRows.setAttribute("id", "imageRows");
			imageRows.style.position = "relative";
			imageRows.style.align = "left";
			imageRows.style.margin = "5px 0px 0px 0px";
			imageRows.style.width = "416px";
			imageRows.style.float = "left";
			imageRows.style.height = "42px";
			imageRows.style.clear = "both";

			cpSlideShowWrapper1.appendChild(imageRows);
			newSection.appendChild(cpSlideShowWrapper1);
			td.appendChild(newSection);

			this.slideShowId = document.getElementById(slideShowId);
			if (isie) {
				this.slideShowId.style.height = "100%";
				this.slideShowId.style.width = "100%";
			}
			else {
				this.slideShowId.setAttribute("height", "100%");
				this.slideShowId.setAttribute("width", "100%");
			}
			break;
		case 12: //This case would handle the new 12 image slideshow without Rotation. & with mouseover
			tmpElem.id = slideShowId + '_link';
			this.slideShowLink = tmpElem;
			this.slideShowId.parentNode.insertBefore(tmpElem, this.slideShowId);
			this.slideShowLink.appendChild(this.slideShowId);
			var tmpElemHTML = this.slideShowLink.innerHTML;

			var td = this.slideShowId.parentNode.parentNode;

			// If the slideshow is in the middle of the page's content, we
			// have to keep track of its next sibling, so we put the 12-thumbnail
			// content in the new location.
			var nextSibling = this.slideShowLink.nextSibling;

			this.slideShowId.parentNode.parentNode.removeChild(this.slideShowId.parentNode);

			var newSection = document.createElement("div");
			newSection.setAttribute("id", "SubSectionFor" + slideShowId);

			var cpSlideShowWrapper1 = document.createElement("div");
			cpSlideShowWrapper1.setAttribute("id", "cpSlideShowWrapper" + slideShowId);

			//Remove these in-line style Height and Width after CSS changes
			cpSlideShowWrapper1.style.width = "441px";
			cpSlideShowWrapper1.style.height = "190px";
			cpSlideShowWrapper1.style.padding = "5px";
			cpSlideShowWrapper1.style.position = "relative";
			cpSlideShowWrapper1.style.clear = "both";

			var imageHead = document.createElement("div");
			imageHead.setAttribute("id", "imageHead");
			//Remove these in-line style Height and Width after CSS changes
			imageHead.style.width = "201px"; //185 px
			imageHead.style.height = "168px";
			imageHead.style.padding = "8px";
			imageHead.style.align = "left";
			imageHead.style.styleFloat = "left";
			imageHead.style.cssFloat = "left";
			imageHead.innerHTML = tmpElemHTML;
			cpSlideShowWrapper1.appendChild(imageHead);

			var imageRowsHeader = document.createElement("div");
			imageRowsHeader.setAttribute("id", "imageRowsHeader");
			imageRowsHeader.style.position = "relative";
			imageRowsHeader.style.align = "right";
			imageRowsHeader.style.styleFloat = "right";
			imageRowsHeader.style.cssFloat = "right";
			imageRowsHeader.style.width = "216px"; //247px
			imageRowsHeader.style.height = "18px";

			//Image Link
			var slideImageHeaderLink = document.createElement("a");
			slideImageHeaderLink.setAttribute("href", "/gallery.aspx");

			//Image Header
			var slideImageHeader = document.createElement("img");
			slideImageHeader.setAttribute("id", slideShowId + "Header");
			slideImageHeader.setAttribute("src", "/images/pages/ImageHeader.jpg");
			slideImageHeader.setAttribute("target", "_blank");
			slideImageHeader.style.width = "198px"; //247px
			slideImageHeader.style.height = "18px";
			slideImageHeader.setAttribute("border", "0");

			slideImageHeaderLink.appendChild(slideImageHeader);
			imageRowsHeader.appendChild(slideImageHeaderLink);

			cpSlideShowWrapper1.appendChild(imageRowsHeader);

			var imageRows = document.createElement("div");
			imageRows.setAttribute("id", "imageRows");
			imageRows.style.position = "relative";
			imageRows.style.align = "right";
			//imageRows.style.margin = "28px 0px 0px 0px";
			imageRows.style.styleFloat = "right";
			imageRows.style.cssFloat = "right";
			imageRows.style.width = "216px"; //247px
			imageRows.style.height = "145px";
			imageRows.style.padding = "4px";

			cpSlideShowWrapper1.appendChild(imageRows);
			newSection.appendChild(cpSlideShowWrapper1);

			var scriptTag = td.firstChild;
			while (scriptTag) {
				if (scriptTag.nodeType == 1 && scriptTag.tagName == 'SCRIPT')
					break;
				scriptTag = scriptTag.nextSibling;
			}
			if (nextSibling != null)
				td.insertBefore(newSection, nextSibling);
			else
				td.insertBefore(newSection, scriptTag);

			this.slideShowId = document.getElementById(slideShowId);
			//Remove these in-line style Height and Width after CSS changes
			if (isie) {
				this.slideShowId.style.height = "100%";
				this.slideShowId.style.width = "100%";
			}
			else {
				this.slideShowId.setAttribute("height", "100%");
				this.slideShowId.setAttribute("width", "100%");
			}
			break;
		default:
			break;
	}

	this.addImage = function (n, img, alt, link, linkTarget, caption, lngCaption, isExternal) {
		if (layout == 12 && n > 11)
			return; // Allow only upto 12 thumbnail images for Standard 12 Bottom layout

		if (!linkTarget || linkTarget == null || linkTarget == "undefined" || linkTarget == "")
			linkTarget = "_self";

		this.picArr[n] = new Image();
		this.picArr[n].src = img;
		this.showExternalLinkPrompts[n] = (isExternal == "True" && $('#ShowLeavingPageForExternalLinks').val() == "True");
		do {
			alt = (alt).replace("%39", "'");
		} while ((alt).indexOf("%39") != -1)
		this.altArr[n] = alt;
		this.captionArr[n] = caption;
		this.lngCaptionArr[n] = lngCaption;

		do {
			link = (link).replace("%38", "&");
		} while ((link).indexOf("%38") != -1)
		this.linkArr[n] = link;

		this.linkTargetArr[n] = linkTarget;

		switch (layout) {
			case 5:
				var slideImage = document.createElement("img");
				slideImage.setAttribute("id", slideShowId + n);
				if (isie) {
					slideImage.style.height = "40";
					slideImage.style.width = "40";
				}
				else {
					slideImage.setAttribute("height", "40");
					slideImage.setAttribute("width", "40");
				}
				if (n == 0)
					slideImage.setAttribute("border", "1");
				else
					slideImage.setAttribute("border", "0");
				slideImage.style.borderStyle = "solid";
				slideImage.style.borderColor = "#FFFF00";
				slideImage.setAttribute("src", img);
				slideImage.setAttribute("alt", alt);
				slideImage.setAttribute("link", link);
				slideImage.setAttribute("target", linkTarget);
				slideImage.setAttribute("class", "photoGalleryImgArray");

				if (n == 0)
					slideImage.style.margin = "0px 0px 0px 0px";
				else
					slideImage.style.margin = "0px 0px 0px 6px";
				this.imageRows = document.getElementById("imageRows");
				this.imageRows.appendChild(slideImage);
				break;
			case 12: //This case would handle the new 12 image slideshow without Rotation. & with mouseover
				var slideImage = document.createElement("img");
				slideImage.setAttribute("id", slideShowId + n);
				//Remove these in-line style 'Padding' after CSS changes
				if (n == 0) {
					if (isie)
						slideImage.style.cssText = "margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px; height:30px; width:30px;";
					else
						slideImage.setAttribute('style', 'margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px; height:30px; width:30px;');
				}
				else {
					if (isie)
						slideImage.style.cssText = "margin:6px 6px; border: 2px solid transparent ; background-color: white; padding: 3px; height:30px; width:30px;";
					else
						slideImage.setAttribute('style', 'margin:6px 6px; border: 2px solid transparent ; background-color: white; padding: 3px;height:30px; width:30px;');
				}
				slideImage.setAttribute("src", img);
				slideImage.setAttribute("alt", alt);
				slideImage.setAttribute("link", link);
				slideImage.setAttribute("target", linkTarget);
				slideImage.setAttribute("class", "photoGalleryImgArray");
				var siObj = eval(slideShowId.replace("Image", ""));
				slideImage.onmouseover = function () { siObj.mouseOver(slideShowId + n, img, alt); };

				this.imageRows = document.getElementById("imageRows");
				this.imageRows.appendChild(slideImage);
				break;
			default:
				break;
		}
	}

	this.mouseOver = function (elem, imgPath, altText) {
		//Set the Main Display image to mouseOver Image
		this.slideShowId.setAttribute("src", imgPath);
		this.slideShowId.alt = altText;

		//Loop through all other images and set the border to 1
		this.ImageRows = document.getElementById("imageRows");
		this.ImageRows.Images = this.ImageRows.getElementsByTagName("img");
		var j = 0;
		while (j < this.ImageRows.Images.length) {
			if (this.ImageRows.Images[j] == document.getElementById(elem)) {
				if (isie)
					this.ImageRows.Images[j].style.cssText = "margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px; height:30px; width:30px;";
				else
					this.ImageRows.Images[j].setAttribute('style', 'margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px;height:30px; width:30px;');
			}
			else {
				if (isie)
					this.ImageRows.Images[j].style.cssText = "margin:6px 6px; border: 2px solid transparent; background-color:white; padding: 3px;height:30px; width:30px;";
				else
					this.ImageRows.Images[j].setAttribute('style', 'margin:6px 6px; border: 2px solid transparent; background-color:white; padding: 3px;height:30px; width:30px;');
			}
			j++;
		}
	}

	this.runSlideShow = function () {
		switch (layout) {
			case 12:
			case 5:
				//Do nothing, do not run a slideshow
				break;
			default:
				if (this.picArr.length > 1) {
					var self = this; 					//  reference to get around context loss of this during setTimeout()
					this.timeoutId = setTimeout(function () { self.nextSlide(); self.runSlideShow(); }, this.slideShowSpeed);
				}
				break;
		}
	}

	this.nextSlide = function () {
		var ssID = this.slideShowId.id.replace("cvpSlideShowImage", "");
		var capt = document.getElementById('slideCaption' + ssID);
		var lngCapt = document.getElementById('slideCaptionLng' + ssID);
		if (document.all && this.slideShowId.filters && this.slideShowId.filters.length > 0 && this.filterName.toLowerCase() != 'none') {
			this.slideShowId.style.filter = this.filterName;
			this.slideShowId.filters.item(0).apply();
			if (capt) {
				capt.style.filter = captionFilter + " " + this.filterName;
				capt.filters.item(capt.filters.length - 1).apply();
				if (lngCapt) {
					lngCapt.style.filter = captionFilter + " " + this.filterName;
					lngCapt.filters.item(lngCapt.filters.length - 1).apply();
				}
			}
		}
		this.slideShowId.setAttribute('src', this.picArr[this.j].src);
		this.slideShowId.setAttribute('alt', this.altArr[this.j]);
		this.slideShowId.setAttribute('title', this.altArr[this.j]);

		var height = '';
		var marginTop = useStyle ? "-61px" : "0px";
		var paddingTop = "3px";
		if (this.captionArr[this.j] == "") {
			height = "0px";
		}
		else if (this.lngCaptionArr[this.j] == "") {
			height = "31px";
			marginTop = useStyle ? "-35px" : "0px";
			paddingTop = useStyle ? "-4px" : "0px";
		}
		else
			height = useStyle ? "55px" : "";

		if (capt) {
			capt.innerHTML = useStyle ? this.captionArr[this.j] : "<strong>" + this.captionArr[this.j] + "</strong>";
			capt.style.marginTop = marginTop;
			capt.style.height = height;
			capt.style.paddingLeft = useStyle ? "15px" : "5px";
			capt.style.paddingRight = useStyle ? "10px" : "5px";
			capt.style.paddingTop = paddingTop;

			if (height != "0px" && lngCapt != null) {
				lngCapt.innerHTML = this.lngCaptionArr[this.j];
				lngCapt.style.marginTop = useStyle ? "-38px" : "0px";
				lngCapt.style.paddingLeft = useStyle ? "15px" : "5px";
				lngCapt.style.paddingRight = useStyle ? "10px" : "5px";
				lngCapt.style.paddingTop = paddingTop;
				lngCapt.style.overflow = 'hidden';
			}
			else if (lngCapt != null) {
				lngCapt.style.marginTop = "0px";
				lngCapt.innerHTML = "";
				lngCapt.height = "0px";
			}
		}

		var slideLink = this.linkArr[this.j]
		var slideLinkTarget = this.linkTargetArr[this.j]
		if (slideLink && slideLink != '') {
			tmpElem.href = slideLink;
			if (this.showExternalLinkPrompts[this.j] == true) {
				this.slideShowLink.setAttribute("onclick", "return showExternalSiteDialog(this);");
				tmpElem.onclick = function () { return showExternalSiteDialog(this); };
			}
			else {
				this.slideShowLink.removeAttribute("onclick");
				tmpElem.onclick = "";
			}
			if (capt)
				if (this.showExternalLinkPrompts[this.j] == true) {
					capt.innerHTML = useStyle ? "<a class = 'slideCaptionHyperlink' onclick=\"return showExternalSiteDialog(this);\" href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>" :
                                             "<a class = 'Hyperlink' onclick=\"return showExternalSiteDialog(this);\" href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>";
				}
				else {
					capt.innerHTML = useStyle ? "<a class = 'slideCaptionHyperlink' href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>" :
                                             "<a class = 'Hyperlink' href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>";
				}
			if (slideLinkTarget && slideLinkTarget != '')
				tmpElem.target = slideLinkTarget;
		}
		else {
			tmpElem.removeAttribute('href');
			if (capt)
				capt.removeAttribute('href');
		}
		if (document.all && this.slideShowId.filters && this.slideShowId.filters.length > 0 && filterName.toLowerCase() != 'none') {
			this.slideShowId.filters.item(0).play();
			if (capt) {
				capt.filters.item(capt.filters.length - 1).play();
				lngCapt.filters.item(lngCapt.filters.length - 1).play();
			}
		}

		var slideImageId, slideImage;
		if (layout == 5) {
			// Set the selected image's border
			if (this.j == 0)
				slideImageId = slideShowId + (this.picArr.length - 1);
			else
				slideImageId = slideShowId + (this.j - 1);
			slideImage = document.getElementById(slideImageId);
			slideImage.setAttribute("border", "0");

			slideImageId = slideShowId + this.j;
			slideImage = document.getElementById(slideImageId);
			slideImage.setAttribute("border", "1");
		}

		this.j++;
		if (this.j >= this.picArr.length)
			this.j = 0;
	}
}

function validateMultiFileUpload(el, useWhiteList) {
	try {
		const fileNames = [...el.files].map(file => file.name);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', '/Utility/AreValidFileNames', false);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		const data = new FormData();
		fileNames.forEach(fileName => {
			data.append("paths[]", fileName);
		})

		xhr.send(data);
		const response = JSON.parse(xhr.responseText);
		const isValid = response.every(x => x === true);

		for (const fileName of fileNames) {
			if (!isAllowedFileExtension(fileName, useWhiteList) || !isValid) {
				return false;
			}
		}
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}

//el is the pointer to the input type="file"
//example usage: <input type="file" size="38" name="txtFile" onChange="validateFileUpload(this);">
function validateFileUpload(el, useWhiteList) {
	var val = el.value;
	var cbox = document.getElementById(el.name + "_pdf");
	if (cbox) {
		cbox.disabled = true;
		cbox.checked = false;
	}
	if (val.length > 0) {
		var isValid = false;
		if (val.indexOf(':\\fakepath\\') > -1)
			val = val.substring(12);
		$.ajax({
			async: false,
			type: "POST",
			url: '/Utility/IsValidFileName',
			data: { path: val },
			dataType: "json",
			success: function (response) {
				if (typeof (response.d) != "undefined") {
					response = response.d;
				}
				if (response.result == "True")
					isValid = true;
			}
		});
		if (!isAllowedFileExtension(val, useWhiteList) || !isValid) {
			alert("The file you are trying to upload is not an allowed file type or has an invalid file name. These are the accepted characters: A-z 0-9 ~ ! ( ) - + = [ ] { } , . _");
			var tempElem = el.cloneNode(false);
			tempElem.value = "";
			el.parentNode.replaceChild(tempElem, el);
			el.focus();
			return false;
		}
		if (cbox) {
			cbox.disabled = !isAllowedFileExtensionPDF(val);
			if (cbox.disabled) cbox.checked = false;
		}
	}
	return true;
}

// Recommended you use isAllowedFileExtensionWhiteList() instead. Do not use this method
// where useWhiteList is false or null, that is not secure (uses blacklist rather than whitelist).
function isAllowedFileExtension(filename, useWhiteList) {
	if (filename + '' == '')
		return true;

	// Cut out the path portion (why not use lastIndexOf()?).
	while (filename.indexOf("/", 0) > 0)
		filename = filename.substr(filename.indexOf("/", 0) + 1, filename.length - filename.indexOf("/", 0))
	while (filename.indexOf("\\", 0) > 0)
		filename = filename.substr(filename.indexOf("\\", 0) + 1, filename.length - filename.indexOf("\\", 0))

	var lastPeriod = filename.indexOf(".", 0);
	var i = lastPeriod;

	while (lastPeriod > 0) {
		i = lastPeriod;
		lastPeriod = filename.indexOf(".", i + 1);
	}

	var fileExtension = (i > 0 ? filename.substr(i + 1, filename.length - i) : "");

	if (useWhiteList)
		return isAllowedFileExtensionWhiteList('.' + fileExtension)
	else {
		switch (fileExtension.toUpperCase()) {
			case "ASA":
			case "ASAX":
			case "ASBX":
			case "ASCX":
			case "ASP":
			case "ASPX":
			case "BAT":
			case "CAB":
			case "CF":
			case "CFM":
			case "CGI":
			case "COM":
			case "CONFIG":
			case "DLL":
			case "EXE":
			case "HTA":
			case "LHA":
			case "LHZ":
			case "MIM":
			case "PIF":
			case "PL":
			case "SYS":
			case "UUE":
			case "VBS":
			case "VXD":
			case "WEBINFO":
			case "WIZ":
			case "WSH":
				{
					return false;
					break;
				}
			default:
				{
					return true;
					break;
				}
		}
	}
}

// Makes sure a file being uploaded for PDF conversion is supported.
// Note: Server logic should additionally chop out paths and other evil things (e.g. Windows Device Names like 'CON', 'AUX', etc).
function isAllowedFileExtensionPDF(filename) {
	//cut out the path portion
	while (filename.indexOf("/", 0) > 0)
		filename = filename.substr(filename.indexOf("/", 0) + 1, filename.length - filename.indexOf("/", 0))
	while (filename.indexOf("\\", 0) > 0)
		filename = filename.substr(filename.indexOf("\\", 0) + 1, filename.length - filename.indexOf("\\", 0))

	var lastPeriod, i, fileExtension;
	lastPeriod = filename.indexOf(".", 0);
	i = lastPeriod;
	while (lastPeriod > 0) {
		i = lastPeriod;
		lastPeriod = filename.indexOf(".", i + 1);
	}

	if (i > 0)
		fileExtension = filename.substr(i + 1, filename.length - i).toUpperCase();
	else
		fileExtension = "";

	switch (fileExtension) {
		case "HTM":
		case "HTML":
		case "DOC":
		case "DOCX":
		case "XLS":
		case "XLSX":
		case "TXT":
			{
				return true;
				break;
			}
		default:
			{
				return false;
				break;
			}
	}
}

// returns true if it is a valid US or Canadian zip code.
// supports ZIP, ZIP+4 and Canadian zip code format
// * intCountryCode is a ISO 3166-1 numeric value.
function isZipCode(strInput, intCountryCode) {
	var countryCodeRe = {
		840: /^\d{5}([\-]\d{4})?$/, // USA
		124: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, //Canada
		36: /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/ //Australia
	};
	if (intCountryCode in countryCodeRe) {
		return countryCodeRe[intCountryCode].test(strInput);
	}
	return strInput.length > 0;
}

// returns name to assign postal/zip code.
function getZipCodeName(intCountryCode) {
	if (intCountryCode == 840) // USA
		return 'Zip';
	else// if (intCountryCode == 124) // Canada
		return 'Postal';
}

function updateAddressPlaceholdersForCanadinaClients(zipElementId, stateElementId) {
	document.getElementById(stateElementId).setAttribute('placeholder', 'Province');
	document.getElementById(stateElementId).style.width = '5em';
	document.getElementById(zipElementId).setAttribute('placeholder', 'Postal Code');
}

function getLowerCaseStateString() {
	if (intCountryCode == 124)
		return "province";
	else// if (intCountryCode == 840) <- neutral setting (en-US).
		return "state";
}

// Gets card type. Will return one of the following values (or an empty string for unknown/invalid cards):
// * Master = M
// * Visa = V
// * Discover = D
// * American Express = A
function getCreditCardType(cardNumber) {
	switch (cardNumber.substr(0, 2)) {
		case "50":
		case "51":
		case "52":
		case "53":
		case "54":
		case "55":
			return "M";
		case "65":
			return "D";
	}
	switch (cardNumber.substr(0, 1)) {
		case "4":
			return "V";
	}
	switch (cardNumber.substr(0, 4)) {
		case "6011":
			return "D";
	}
	switch (cardNumber.substr(0, 2)) {
		case "34":
		case "37":
			return "A";
	}

	// Card unknown/invalid.
	return '';
}

// Validates credit card numbers. cardType is an optional argument.
function isValidCreditCardNumber(cardNumber, cardType) {
	var isValid = false;
	var ccCheckRegExp = /[^\d ]/;

	isValid = !ccCheckRegExp.test(cardNumber);

	if (isValid) {
		// Get card type if not explicitly specified.
		if (cardType == null)
			cardType = getCreditCardType(cardNumber);

		// If unknown/unsupported/invalid card type, abort/fail.
		if (cardType == '')
			return false;

		var cardNumbersOnly = cardNumber.replace(/ /g, "");
		var cardNumberLength = cardNumbersOnly.length;
		var lengthIsValid = false;
		var patternIsValid = false;
		var patternRegExp;

		switch (cardType) {
			case "V":
				{ // visa
					lengthIsValid = (cardNumberLength == 13 || cardNumberLength == 16);
					patternRegExp = /^4/;
					break;
				}
			case "M":
				{ // mastercard
					lengthIsValid = (cardNumberLength == 16);
					patternRegExp = /^5[0-5]/;
					break;
				}
			case "A":
				{ // amercian express
					lengthIsValid = (cardNumberLength == 15);
					patternRegExp = /^3[4,7]/;
					break;
				}
			case "D":
				{ // discover
					lengthIsValid = (cardNumberLength == 16);
					patternRegExp = /^6011/;
					break;
				}
				/*case "J":
				{ // jcb
				lengthIsValid = (cardNumberLength == 15) || (cardNumberLength == 16);
				patternRegExp = /^[3,1800,2131]/;
				break;
				}
				case "C":
				{ // diner's club
				lengthIsValid = (cardNumberLength == 14);
				patternRegExp = /^3[0,6,8]/;
				break;
				}*/
			default:
				patternRegExp = /^$/;
		}

		patternIsValid = patternRegExp.test(cardNumbersOnly);
		isValid = patternIsValid && lengthIsValid;
	}

	if (isValid) {
		var numberProduct;
		var numberProductDigitIndex;
		var checkSumTotal = 0;

		for (digitCounter = cardNumberLength - 1; digitCounter >= 0; digitCounter--) {
			checkSumTotal += parseInt(cardNumbersOnly.charAt(digitCounter));
			digitCounter--;
			numberProduct = String((cardNumbersOnly.charAt(digitCounter) * 2));
			for (var productDigitCounter = 0; productDigitCounter < numberProduct.length; productDigitCounter++)
				checkSumTotal += parseInt(numberProduct.charAt(productDigitCounter));
		}

		isValid = (checkSumTotal % 10 == 0);
	}

	return isValid;
}

// Confirms data given is legal.
function isDate(varDateToCheck) {
	var objDate = new dateValidator();
	return objDate.dateValidate(varDateToCheck, true, 'Date');
}

// Confirms data given is legal.
function isDateNew(varDateToCheck) {
	var objDate = new dateValidator();
	return objDate.dateValidateNew(varDateToCheck, true, 'Date');
}

// TODO: JavaScript - Remove this function. Better ways to handle this.
// Date comparison function.
function dateDiff(dtiDateEntered, dtiDateToday) {
	var date1 = new Date();
	var date2 = new Date();
	var diff = new Date();
	// Initialize the first date
	var date1temp = new Date(dtiDateEntered);
	date1.setTime(date1temp.getTime());
	// Initialize the second date
	var date2temp = new Date(dtiDateToday);
	date2.setTime(date2temp.getTime());
	// sets difference date to difference of first date and second date
	diff.setTime(date1.getTime() - date2.getTime());
	timediff = diff.getTime();
	days = Math.floor(timediff / (86400000)); // 1000 * 60 * 60 * 24
	timediff -= days * (86400000);
	return days;
}

// .NET JavaScript debugging function.
// TO-DO: Add sections for 'add_' and 'remove_' event prefixes.
function debugDisplayMembers(obj) {
	var getters = new Array();
	var setters = new Array();
	var others = new Array();
	var sKey;

	for (var key in obj) {
		sKey = key + "";
		if (!((sKey.length > 0) && (sKey[0] == '_'))) {
			switch (sKey.substr(0, 4)) {
				case 'get_':
					getters.push(key);
					break;
				case 'set_':
					setters.push(key);
					break;
				default:
					others.push(key);
			}
		}
	}

	getters.sort();
	setters.sort();
	others.sort();

	alert(others.join(", ") + "\r\n\r\n" +
		getters.join(", ") + "\r\n\r\n" +
		setters.join(", "));
}

// BEGIN PSEUDO-FORMS CODE
// Do not call any of these methods directly in your application code.
// Pseudo-forms are transparent, you shouldn't need to use these methods.
addEvent(window, 'load', initializePseudoForms, false);

// Allows IE to recognize tag "subform". You cannot legally nest
// FORM tags inside FORM tags and at least Firefox pretends they're not
// in the DOM period. This is problematic, so the tag was renamed.
// Done for FORMS inside of FORMs trick to get around ASP.NET form limitations
// for content we cannot control (User Pages, Info Advanced HTML, etc).
document.createElement('subform');

// Initialize pseudo-forms. Called on window load.
function initializePseudoForms() {
	// Make sure we're in an HTML document (not XUL).
	if (document.body) {
		var subForms = document.body.getElementsByTagName('subform');
		for (var i = 0; i < subForms.length; i++)
			setupPseudoForm(subForms[i]);
	}
}

// Sets up pseudo-form.
function setupPseudoForm(pseudoFormElement) {
	// Re-routes form submission elements (no javascript used/necessary).
	// (those being input.type=submit, button.type=submit, and input.type=image)
	var rerouteElement = function (input, pseudoFormElement, newTagName, newType, copyInnerHTML) {
		var replacement = document.createElement(newTagName);
		replacement.setAttribute('type', newType);
		var onClickDest, onClickSrc = replacement.getAttribute('onclick');
		if (onClickSrc != null)
			replacement.removeAttribute('onclick');
		cloneAttributes(input, replacement);
		if (onClickSrc != null) {
			eval("window.tmp = function(event) { " + onClick + " }");
			onClickSrc = window.tmp;
			window.tmp = null;
			onClickDest = function (ev) {
				ev = (window.event ? window.event : ev);
				if (onClickSrc(ev) == false)
					return;
				pseudoFormElement._submitter = replacement;
				pseudoFormElement._submevent = ev;
				pseudoFormElement.submit();
			}
		}
		else {
			onClickDest = function (ev) {
				ev = (window.event ? window.event : ev);
				pseudoFormElement._submitter = replacement;
				pseudoFormElement._submevent = ev;
				pseudoFormElement.submit();
			}
		}

		// Return replacement routine.
		var fn = function () {
			var inputParent = input.parentNode;
			var inputRightAfter = input.nextSibling;
			var inputDisabled = input.disabled; // For Internet Explorer (it forgets).
			var inputHTML = (copyInnerHTML ? input.innerHTML : null);
			inputParent.removeChild(input); input = null;
			if (copyInnerHTML)
				replacement.innerHTML = inputHTML;
			inputParent.insertBefore(replacement, inputRightAfter);
			replacement.disabled = inputDisabled;
			addEvent(replacement, 'click', onClickDest, false);
		}
		return fn;
	}

	// Re-route submits (needs to be done early on).
	var inputs, input, inc, repls;
	repls = new Array();
	inputs = pseudoFormElement.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		switch (input.type.toLowerCase()) {
			case 'submit':
				repls.push(rerouteElement(input, pseudoFormElement, 'input', 'button', false));
				break;
			case 'image':
				repls.push(rerouteElement(input, pseudoFormElement, 'img', 'image', false));
				break;
		}
	}
	inputs = pseudoFormElement.getElementsByTagName('button');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		switch (input.type.toLowerCase()) {
			case 'submit':
				repls.push(rerouteElement(input, pseudoFormElement, 'button', 'button', true));
				break;
		}
	}
	for (var i = 0; i < repls.length; i++)
		repls[i]();

	// Implement properties for pseudo-form.
	var name = pseudoFormElement.getAttribute('name');
	if (name && name != '') {
		document[name] = pseudoFormElement;
		document.forms[name] = pseudoFormElement;
	}
	pseudoFormElement.method = pseudoFormElement.getAttribute('method');
	if (pseudoFormElement.method == null || pseudoFormElement.method == '')
		pseudoFormElement.method = 'get';
	pseudoFormElement.enctype = pseudoFormElement.getAttribute('enctype');
	if (pseudoFormElement.enctype == null || pseudoFormElement.enctype == '')
		pseudoFormElement.enctype = 'application/x-www-form-urlencoded';
	pseudoFormElement.target = pseudoFormElement.getAttribute('target');
	pseudoFormElement.action = pseudoFormElement.getAttribute('action');
	pseudoFormElement.acceptCharset = pseudoFormElement.getAttribute('accept-charset');

	// Initialize.
	var elements = new Array(); // elements in pseudo-form (for form.elements).
	var simpleInputs = new Array(); // simple value inputs and textareas, no additional logic.
	var stateInputs = new Array(); // checkboxes and radiobuttons.
	var dropdowns = new Array(); // drop-downs and lists.
	pseudoFormElement.elements = elements;
	pseudoFormElement._simple = simpleInputs;
	pseudoFormElement._state = stateInputs;
	pseudoFormElement._dropdown = dropdowns;

	// Registers element for the pseudo-form.
	var registerElement = function (input) {
		// Add to elements array.
		elements.push(input);
		// Add as property.
		if (input.name != '' && input.name != null) {
			obj = pseudoFormElement[input.name];
			if (obj == null)
				pseudoFormElement[input.name] = input;
			else if (obj instanceof Array)
				obj.push(input);
			else {
				var arr = new Array();
				arr.push(obj);
				arr.push(input);
				pseudoFormElement[input.name] = arr;
			}
		}
	}

	// Add methods (can be overridden by form elements /w same names, just like real forms).
	pseudoFormElement.submit = function () { submitPseudoForm(this, false); }
	pseudoFormElement.reset = document.aspnetForm.reset; // HACK (we'll fix it if someone complains)

	// Register elements, and categorize them for form submission.
	inputs = pseudoFormElement.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		switch (input.type.toLowerCase()) {
			case 'checkbox':
			case 'radio':
				stateInputs.push(input);
				registerElement(input);
				break;
			case 'text':
			case 'hidden':
			case 'password':
				simpleInputs.push(input);
				registerElement(input);
				break;
			default:
				registerElement(input);
		}
	}
	inputs = pseudoFormElement.getElementsByTagName('textarea');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		simpleInputs.push(input);
		registerElement(input);
	}
	inputs = pseudoFormElement.getElementsByTagName('select');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		dropdowns.push(input);
		registerElement(input);
	}
	inputs = pseudoFormElement.getElementsByTagName('button');
	for (var i = 0; i < inputs.length; i++)
		registerElement(inputs[i]);
}

// Copies attributes from one element to another. Copy should occur
// before destElement is added to the DOM, as some things become read-only.
// ID and CLASS need to be handled specially for compatiblity reasons.
// Warning: TYPE is not supported (blame IE)!
function cloneAttributes(srcElement, destElement) {
	var attr;
	for (var i = 0; i < srcElement.attributes.length; i++) {
		attr = srcElement.attributes[i];
		switch (attr.name.toLowerCase()) {
			case 'name':
				if ((attr.value + '').toLowerCase() == 'submit')
					destElement.setAttribute('name', 'submit_button');
				else
					destElement.setAttribute('name', attr.value);
				break;
			case 'class':
				destElement.className = attr.value;
				break;
			case 'id':
				destElement.id = attr.value;
				break;
			case 'type':
			case 'form':
				break;
			default:
						try { destElement.setAttribute(attr.name, attr.value); }
						catch (e) { }
		}
	}
}

// Called by pseudo-form when submit() is invoked.
function submitPseudoForm(pseudoFormElement, debugMode) {
	var inputs, input;
	var spawner = pseudoFormElement._submitter;
	var spawnerEvent = pseudoFormElement._submevent;
	pseudoFormElement._submitter = null;
	pseudoFormElement._submevent = null;

	// Destroy form if it already exists (possible if target not implicit/explicit "_self").
	if (pseudoFormElement._form != null)
		document.body.removeChild(pseudoFormElement._form);
	pseudoFormElement._form = null;

	// Fire pseudo-onsubmit event (remember that just like in real forms, only fires on non-J/S submits).
	var onsubmit = pseudoFormElement.getAttribute('onsubmit');
	if (onsubmit != null && onsubmit != '' && spawnerEvent) {
		eval("window.tmp = function(event) { " + onsubmit + " }");
		onsubmit = window.tmp;
		window.tmp = null;
		if (onsubmit(spawnerEvent) == false)
			return false;
	}

	// Create actual form to forward submission to.
	var newForm = document.createElement('form');
	pseudoFormElement._form = newForm;

	// Transfer some standard HTML/XHTML attributes.
	newForm.dir = pseudoFormElement.dir;
	newForm.lang = pseudoFormElement.lang;
	newForm.title = pseudoFormElement.title;

	// Setup actual form action, accept, accept-charset, encoding, method, and target.
	var action = pseudoFormElement.getAttribute('action');
	var method = pseudoFormElement.getAttribute('method');
	var target = pseudoFormElement.getAttribute('target');
	var enctype = pseudoFormElement.getAttribute('enctype');
	var accept = pseudoFormElement.getAttribute('accept');
	var acceptCharset = pseudoFormElement.getAttribute('accept-charset');
	if (action)
		newForm.action = action;
	if (method)
		newForm.method = method;
	if (target)
		newForm.target = target;
	if (enctype)
		newForm.enctype = enctype;
	if (accept)
		newForm.accept = accept;
	if (acceptCharset)
		newForm.acceptCharset = acceptCharset;

	// Method used to create hidden input copies.
	var newHiddenInput = function (name, value) {
		var ret = document.createElement('input');
		ret.type = 'hidden';
		ret.value = value;
		ret.name = name;
		newForm.appendChild(ret);
	}

	// Create element for spawner if one exists (submitted w/o JS, e.g. input.type=submit).
	if (spawner && spawner.name != null && spawner.name != '')
		newHiddenInput(spawner.name, spawner.value);

	// Forward text, textarea, hidden, and password input values.
	inputs = pseudoFormElement._simple;
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		if ((!input.disabled) && (input.style.display != 'none'))
			newHiddenInput(input.name, input.value);
	}

	// Forward checkbox and radio-button values.
	inputs = pseudoFormElement._state;
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		if ((!input.disabled) && (input.style.display != 'none')) {
			if (input.checked)
				newHiddenInput(input.name, input.value);
		}
	}

	// Forward drop-down/list selections.
	// Blame for text/value condition and necessity of options loop lies with IE.
	// 1) Specifically, IE 7  and IE 7 mode don't give the implicit value if it's left off.
	// 2) IE 8 should support retrieval of all values from the select.value prop, but doesn't.
	inputs = pseudoFormElement._dropdown;
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		if ((!input.disabled) && (input.style.display != 'none')) {
			for (var j = 0; j < input.options.length; j++) {
				if (input.options[j].selected) {
					if (input.options[j].value == '')
						newHiddenInput(input.name, input.options[j].text);
					else
						newHiddenInput(input.name, input.options[j].value);
				}
			}
		}
	}

	document.body.appendChild(newForm);
	if (debugMode)
		alert(newForm.innerHTML);
	newForm.submit();
}
// END PSEUDO-FORMS CODE

function phoneStripFormatting(value) {
	/// <summary>Strips formatting characters (for display purposes only) from the NANP phone number given.</summary>
	/// <param name="value" type="String">Phone number.</summary>
	/// <returns type="String">Phone number with formatting cahracter removed.</returns>
	return (value + '').replace(/\(/g, '').replace(/\)/g, '').replace(/\s/g, '').replace(/\-/g, '');
}

function phoneReformat(value, delim) {
	/// <summary>Reformats a number for display purposes using delimiter specified.</summary>
	/// <param name="value" type="String">The phone number.</summary>
	/// <param name="delim" type="String">The delimiter used. If argument is not passed, a hyphen is used.</summary>
	/// <returns type="String">Reformatted phone number.</returns>
	value = phoneStripFormatting(value);

	if (delim == null)
		delim = '-';

	return value.substr(0, 3) + delim + value.substr(3, 3) + delim + value.substr(6)
}

function phoneObfuscate(value, secret, delim) {
	/// <summary>Reformats a number for display purposes, obfuscating the first 6 digits.</summary>
	/// <param name="value" type="String">The phone number.</summary>
	/// <param name="secret" type="String">The obfuscation character or string to use in place of a digit in the number. If argument is not pased, a asterisk is used.</summary>
	/// <param name="delim" type="String">The delimiter used. If argument is not passed, a hyphen is used.</summary>
	/// <returns type="String">Reformatted, obfuscated phone number.</returns>
	value = phoneStripFormatting(value);

	if (secret == null)
		secret = '*';

	if (delim == null)
		delim = '-';

	secret = secret + secret + secret + delim;
	return secret + secret + value.substr(6);
}

function phoneValidate(value, intCountryCode) {
	/// <summary>Validates that phone numbers appear to adhere to the NANP format (North American Numbering Plan).</summary>
	/// <remarks>
	/// Expects area code to be present, and no country code (e.g. 555-555-0123 is valid, 1-555-555-0123 is not).
	/// Does not validate that numbers are legal (e.g. area code 123 is invalid, area codes cannot begin with 1).
	/// </remarks>
	/// <param name="value" type="String">Phone number.</summary>
	/// <returns type="Boolean">Whether or not number passed a basic format validation.</returns>
	value = phoneStripFormatting(value);
	if (value.length == 10)
		return numbersOnly.test(value);
	else if (value.length == 8 && intCountryCode == 36) //For Australia
		return numbersOnly.test(value);
	else
		return false;
}

//gets the cookie, if it exists
function getCookieValue(cookiename) {
	var ck = document.cookie;
	var cn = cookiename + "=";
	var pos = ck.indexOf(cn);

	if (pos != -1) {
		var start = pos + cn.length;
		var end = ck.indexOf(";", start);
		if (end == -1) end = ck.length;
		var cookieValue = ck.substring(start, end);
		return (cookieValue);
	}

	return (null);
}

window['getCookieValue'] = getCookieValue;

function setCookieValue(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

//Gets no of days between 2 dates provided in a string format('mm/dd/yyyy')
function dayDifference(first, second) {
	return Math.floor((Date.parse(first) - Date.parse(second)) / 86400000);
}

// Returns whether or not file extension given is acceptable.
// Client-side version of FileSystemSafety.IsAllowedFileExtension().
function isAllowedFileExtensionWhiteList(ext) {

	// Check if the URL contains the string "Admin"
	const allowed = window.location.pathname.toLowerCase().startsWith("/admin") ? 1 : 0;

	if (!window.acceptedFileExtensions) {
		window.acceptedFileExtensions =
		{
			'.123': 1, '.3g2': 1, '.3gp': 1, '.3gp2': 1, '.7z': allowed, '.aac': 1, '.abw': 1, '.abx': 1, '.accdb': 1, '.accde': 1,
			'.accdr': 1, '.accdt': 1, '.accfl': 1, '.ace': allowed, '.ade': 1, '.adp': 1, '.aeh': 1, '.ai': 1, '.aif': 1, '.aiff': 1,
			'.amr': 1, '.apng': 1, '.arc': allowed, '.art': 1, '.asc': 1, '.asf': 1, '.asx': 1, '.atom': 1, '.au': 1, '.avi': 1,
			'.awt': 1, '.azw': 1, '.azw1': 1, '.b64': 1, '.backup': 1, '.bin': 1, '.bmp': 1, '.bz': 1, '.bz2': 1, '.bzip': 1,
			'.bzip2': allowed, '.cab': allowed, '.cad': 1, '.caf': 1, '.cal': 1, '.cgm': 1, '.crtx': 1, '.css': 1, '.csv': 1, '.cwk': 1, '.dap': 1, '.db': 1,
			'.dbf': 1, '.dcr': 1, '.dds': 1, '.dex': 1, '.dib': 1, '.dif': 1, '.diz': 1, '.dmg': 1, '.doc': 1, '.docm': 1,
			'.docx': 1, '.dot': 1, '.dotm': 1, '.dotx': 1, '.drw': 1, '.ds_store': 1, '.dv': 1, '.dvr-ms': 1, '.dwf': 1, '.dwg': 1,
			'.dxf': 1, '.emf': 1, '.eml': 1, '.emlx': 1, '.emz': 1, '.eot': 1, '.eps': 1, '.fbp': 1, '.fdp': 1, '.fhtml': 1,
			'.file': 1, '.flac': 1, '.flc': 1, '.fli': 1, '.flp': 1, '.flv': 1, '.fm': 1, '.fm2': 1, '.fm3': 1, '.fm5': 1,
			'.fmp': 1, '.fnt': 1, '.fon': 1, '.fp': 1, '.fp3': 1, '.fp5': 1, '.fp7': 1, '.fphtml': 1, '.fpt': 1, '.fpweb': 1,
			'.fpx': 1, '.gg': 1, '.gif': 1, '.gnumeric': 1, '.gra': 1, '.gsm': 1, '.gz': allowed, '.hdmov': 1, '.hdp': 1, '.hqx': 1,
			'.htm': 1, '.html': 1, '.ical': 1, '.icns': 1, '.ico': 1, '.ics': 1, '.ifo': 1, '.indd': 1, '.isf': 1, '.isu': 1,
			'.ivs': 1, '.jbf': 1, '.jfif': 1, '.jpe': 1, '.jpeg': 1, '.jpf': 1, '.jpg': 1, '.jxr': 1, '.key': 1, '.kml': 1, '.kmz': 1,
			'.knt': 1, '.kth': 1, '.lhz': 1, '.lit': 1, '.log': 1, '.lrc': 1, '.lrf': 1, '.lrx': 1, '.lst': 1, '.lyr': 1,
			'.m4a': 1, '.m4b': 1, '.m4p': 1, '.m4r': 1, '.mdb': 1, '.mde': 1, '.mht': 1, '.mhtml': 1, '.mid': 1, '.midi': 1,
			'.mim': 1, '.mix': 1, '.mng': 1, '.mobi': 1, '.mod': 1, '.moi': 1, '.mov': 1, '.movie': 1, '.mp3': 1, '.mp4': 1,
			'.mpa': 1, '.mpc': 1, '.mpe': 1, '.mpeg': 1, '.mpg': 1, '.mpv2': 1, '.msg': 1, '.mswmm': 1, '.mxd': 1, '.numbers': 1,
			'.odb': 1, '.odf': 1, '.odg': 1, '.ods': 1, '.odx': 1, '.ofm': 1, '.oft': 1, '.ogg': 1, '.ogm': 1, '.ogv': 1,
			'.one': 1, '.onepkg': 1, '.opx': 1, '.osis': 1, '.ost': 1, '.otf': 1, '.oth': 1, '.p65': 1, '.p7b': 1, '.pages': 1,
			'.pbm': 1, '.pcast': 1, '.pcf': 1, '.pcm': 1, '.pct': 1, '.pcx': 1, '.pdc': 1, '.pdd': 1, '.pdf': 1, '.pdp': 1,
			'.pfx': 1, '.pgf': 1, '.pic': 1, '.pict': 1, '.pkg': 1, '.pmd': 1, '.pmf': 1, '.png': 1, '.pot': 1, '.pothtml': 1,
			'.potm': 1, '.potx': 1, '.ppam': 1, '.pps': 1, '.ppsm': 1, '.ppsx': 1, '.ppt': 1, '.ppthtml': 1, '.pptm': 1, '.pptx': 1,
			'.prc': 1, '.ps': 1, '.psd': 1, '.psp': 1, '.pspimage': 1, '.pst': 1, '.pub': 1, '.pubhtml': 1, '.pubmhtml': 1, '.qbb': 1,
			'.qcp': 1, '.qt': 1, '.qxd': 1, '.qxp': 1, '.ra': 1, '.ram': 1, '.ramm': 1, '.rar': allowed, '.raw': 1, '.rax': 1,
			'.rm': 1, '.rmh': 1, '.rmi': 1, '.rmm': 1, '.rmvb': 1, '.rmx': 1, '.rp': 1, '.rss': 1, '.rt': 1, '.rtf': 1,
			'.rts': 1, '.rv': 1, '.sbx': 1, '.sdf': 1, '.sea': 1, '.shs': 1, '.sit': 1, '.sitx': 1, '.smil': 1, '.snapfireshow': 1,
			'.snp': 1, '.stc': 1, '.svg': 1, '.svgz': 1, '.swf': 1, '.sxc': 1, '.sxi': 1, '.tab': 1, '.tar': allowed, '.tex': 1,
			'.tga': 1, '.thmx': 1, '.tif': 1, '.tiff': 1, '.tpz': 1, '.tr': 1, '.trm': 1, '.tsv': 1, '.ttf': 1, '.txt': 1,
			'.uue': 1, '.vcf': 1, '.vob': 1, '.vrml': 1, '.vsc': 1, '.vsd': 1, '.wab': 1, '.wav': 1, '.wax': 1, '.wbk': 1,
			'.wbmp': 1, '.wdp': 1, '.webarchive': 1, '.webloc': 1, '.wk1': 1, '.wk3': 1, '.wm': 1, '.wma': 1, '.wmf': 1, '.wmmp': 1,
			'.wmv': 1, '.wmx': 1, '.wpd': 1, '.wps': 1, '.wri': 1, '.wvx': 1, '.xbm': 1, '.xcf': 1, '.xg0': 1, '.xg1': 1,
			'.xg2': 1, '.xg3': 1, '.xg4': 1, '.xht': 1, '.xhtm': 1, '.xhtml': 1, '.xif': 1, '.xlam': 1, '.xlb': 1, '.xlc': 1,
			'.xld': 1, '.xlk': 1, '.xlm': 1, '.xls': 1, '.xlsb': 1, '.xlshtml': 1, '.xlsm': 1, '.xlsmhtml': 1, '.xlsx': 1, '.xlt': 1,
			'.xlthtml': 1, '.xltm': 1, '.xltx': 1, '.xlv': 1, '.xlw': 1, '.xml': 1, '.xpi': 1, '.xps': 1, '.xsf': 1, '.xsn': 1,
			'.xtp': 1, '.zabw': 1, '.zip': allowed, '.zipx': allowed
		};
	}

	return (window.acceptedFileExtensions[(ext + '').toLowerCase()] === 1);
}

function handleServiceMethodError(error) {
	throw new Error('A server-side error occurred during the execution of an AJAX request (' +
		error.get_exceptionType() +
		')!\r\n\r\nAdditional Information:\r\n' +
		error.get_message() +
		'\r\n\r\nStack Trace:\r\n' +
		error.get_stackTrace().trim());
}

function toggleDisplay(elem) {
	elem.style.display =
		(elem.style.display == 'none' ? '' : 'none');
}

// BEGIN Old Character Counter
var APENDED_TEXT_LEN = typeof intCountryCode !== 'undefined' && intCountryCode === 840 && typeof FeatureToggles !== 'undefined' && FeatureToggles.isActive("CivicPlus.SendNotificationSmsViaCPNotify") ? 9 : 0;
var MAX_MESSAGE_SIZE_SMS = 160 - APENDED_TEXT_LEN;
var trackLengths = new Array();

function registerCharCounter(input, outputElemID, maxMessageSize) {
	var outputElem = document.getElementById(outputElemID);
	var id = input.id;
	var tracker;

	tracker = new Object();
	tracker.oldLength = -1;
	tracker.outputElem = outputElem;
	tracker.input = input;
	trackLengths[id] = tracker;

	setInterval(
		'var tracker = trackLengths[\'' + id + '\'];\r\n' +
		'var newLength = (tracker.input.value + \'\').length;\r\n' +
		'if (newLength != tracker.oldLength) {\r\n' +
		'	if (newLength > ' + maxMessageSize + ')' +
		'		tracker.outputElem.innerHTML = (newLength - ' + maxMessageSize + ') + " Characters Over";\r\n' +
		'	else\r\n' +
		'		tracker.outputElem.innerHTML = (' + maxMessageSize + ' - newLength) + " Characters Remaining";\r\n' +
		'	\r\n' +
		'	tracker.oldLength = newLength;\r\n' +
		'}\r\n', 100);
}
// END Old Character Counter

function elemInsideOrEq(elemFirst, elemSecond) {
	/// <summary>Gets whether or not second element specified is inside or is equal to first element.</summary>
	/// <param name="elemFirst" type="domElement">First element.</param>
	/// <param name="elemSecond" type="domElement">Second element.</param>
	if (elemFirst == elemSecond)
		return true;

	if (elemFirst && elemSecond) {
		elemSecond = elemSecond.parentNode;

		while (elemSecond != null) {
			if (elemSecond == elemFirst)
				return true;

			elemSecond = elemSecond.parentNode;
		}
	}

	return false;
}

// Do not use in new code. Use jQuery with event.preventDefault().
function hookAnchorClick(anchor, fn) {
	/// <summary>Hooks an anchor onclick and prevents default HREF behavior.</summary>
	/// <param name="anchor" type="domElement">The DOM element to attach the event handler for.</param>
	/// <param name="fn" type="Function">Function to be called when anchor is clicked. Should have sender and event argument, in that order.</param>
	var clickHandler = function (event) {
		var sender;

		if (window.event) {
			event = window.event;
			sender = event.srcElement;
		}
		else
			sender = event.target;

		fn(sender, event);

		if (event.stopPropagation)
			event.stopPropagation();
		else
			event.cancelBubble = true;

		return false;
	}

	// HACK: MSIE/Opera onclick fails to operate correctly.
	if (isie || isie8 || isie7 || isie6 || (document.documentMode < 8) || window.opera)
		anchor.onmousedown = clickHandler;
	else
		anchor.onclick = clickHandler;
}

// For ClientCharacterCounter control.
var registeredCounters = null;
function registerCounter(assocElem, counterElem, fmtStandard, fmtOver, maxChars) {
	if (assocElem == null || counterElem == null || maxChars == null || fmtStandard == null || fmtOver == null)
		return;

	if (registeredCounters == null) {
		registeredCounters = [];

		setInterval(function () {
			for (var i = 0, l = registeredCounters.length; i < l; i++) {
				if (registeredCounters[i].counter && registeredCounters[i].input) {
					var len;
					if (typeof registeredCounters[i].input.value === 'undefined')
						len = registeredCounters[i].input.val().length;
					else
						len = registeredCounters[i].input.value.length;
					var prevLen = registeredCounters[i].prevLen;

					if (len == prevLen)
						continue;
					else {
						registeredCounters[i].prevLen = len;

						var max = registeredCounters[i].maxChars;
						var numToDisplay = max - len;

						var fmtToUse = (numToDisplay >= 0
							? registeredCounters[i].fmtStandard
							: registeredCounters[i].fmtOver);

						if (numToDisplay >= 0)
							registeredCounters[i].counter.className = 'counterUnderLimit';
						else
							registeredCounters[i].counter.className = 'counterOverLimit';

						numToDisplay = Math.abs(numToDisplay);

						registeredCounters[i].counter.innerHTML = fmtToUse
							.replace(/\{0\}/g, numToDisplay)
							.replace(/\{1\}/g, (numToDisplay == 1 ? '' : 's'));
					}
				}
			}
		}, 100);
	}

	registeredCounters.push({
		"fmtStandard": fmtStandard,
		"fmtOver": fmtOver,
		"counter": counterElem,
		"input": assocElem,
		"prevLen": -1,
		"maxChars": maxChars
	});
}

// Detects if nextElementSibling/previousElementSibling are present.
function detectElementSiblingSupport() {
	var p = document.createElement('div');
	var c1 = document.createElement('div');
	var c2 = document.createElement('div');

	p.appendChild(c1);
	p.appendChild(c2);

	return (c1.nextElementSibling != null);
}

// Gets next sibling element. Version for browsers missing nextElementSibling DOM property.
function nextElementSibling(elem) {
	elem = elem.nextSibling;

	while (elem != null) {
		if (elem.nodeType == 1)
			return elem;

		elem = elem.nextSibling;
	}

	return null;
}

// Gets previous sibling element. Version for browsers missing previousElementSibling DOM property.
function previousElementSibling(elem) {
	elem = elem.previousSibling;

	while (elem != null) {
		if (elem.nodeType == 1)
			return elem;

		elem = elem.previousSibling;
	}

	return null;
}

// Gets first child element. Version for browsers missing firstElementChild DOM property.
function firstElementChild(elem) {
	elem = elem.firstChild;

	while (elem != null) {
		if (elem.nodeType == 1)
			return elem;

		elem = elem.nextSibling;
	}

	return null;
}

if (detectElementSiblingSupport()) {
	// If browsers support built-in DOM properties, just use those.
	nextElementSibling = function (elem) { return elem.nextElementSibling; }
	previousElementSibling = function (elem) { return elem.previousElementSibling; }
	firstElementChild = function (elem) { return elem.firstElementChild; }
}

function haltEvent(event, windowEvent) {
	if (windowEvent & !window.opera)
		windowEvent.cancelBubble();
	else {
		if (event.stopPropagation)
			event.stopPropagation();

		if (event.preventDefault)
			event.preventDefault();
	}
}

// Gets absolute left offset.
function absoluteOffsetLeft(oElem) {
	var oLeft = 0;

	while (oElem != null) {
		oLeft += oElem.offsetLeft;
		oElem = oElem.offsetParent;
	}

	return oLeft;
}

function imposeMaxLength(e, Object, MaxLen) {
	//Truncate to maximum length
	if (Object.value.length > MaxLen)
		Object.value = Object.value.substring(0, MaxLen);

	//ALLOW:        BACKSPACE           DELETE                  LEFT ARROW              UP ARROW            RIGHT ARROW             DOWN ARROW
	if ((e.keyCode == '8') || (e.keyCode == '46') || (e.keyCode == '37') || (e.keyCode == '38') || (e.keyCode == '39') || (e.keyCode == '40'))
		return true;

	return (Object.value.length <= MaxLen);
}

function checkURL(val, showAlert) {
	val = TrimString(val);
	if (val != '' && (val.substr(0, 7) != 'http://' && val.substr(0, 8) != 'https://' && val.substr(0, 6) != 'ftp://' && val.substr(0, 1) != '/')) {
		if (arguments.length == 1 || showAlert)
			alert('All URLs must begin with http:// or https:// or ftp://.\nAll internal links must start with a /.');

		return false;
	}
	return true;
}

function toSQLSafe(formvar) {
	var s = String(formvar);
	s = (s.replace(/'/gi, "&#39")).replace(/"/gi, "&#34");
	return s;
}

function cancelFE(needsConfirm) {
	if (needsConfirm) {
		if (!confirm("You will discard any unsaved changes. Do you want to proceed?"))
			return;
	}
	window.parent.closeModalDialog('editItemBehavior');
	return false;
}

function getThumbNailPath(path, width, height) {
	var lastSlashPos = path.lastIndexOf('/');
	var filename = path.substr(lastSlashPos + 1);
	var directory = path.substr(0, lastSlashPos);
	var lastDotPos = filename.lastIndexOf('.');
	var filenameWithOutExtension = filename.substr(0, lastDotPos)
	var fileExtension = filename.substr(lastDotPos)
	return directory + "/ThumbNails/" + filenameWithOutExtension + "_" + width + "x" + height + "_thumb" + fileExtension;
}

function measureHtml(html, fontStyle) {
	var tmp = document.createElement('span');
	tmp.style.display = 'inline';
	tmp.style.position = 'absolute';
	tmp.style.top = '-1000px';
	tmp.style.left = '-1000px';
	tmp.style.font = fontStyle;
	tmp.innerHTML = html;

	document.body.appendChild(tmp);
	var retVal = { width: tmp.clientWidth, height: tmp.clientHeight };
	document.body.removeChild(tmp);

	return retVal;
}

function fileValidateError(errorType) {
	if (errorType == 1)
		alert("A file you tried to upload was not of a permitted type. Only *.jpeg, *.jpg, *.gif, *.png, *.bmp are allowed");
	else
		alert("You have an invalid character in your filename. These are the accepted characters: a-z 0-9 ~ !( ) - + = [ ] { } , . $");
}

function getNumericThousandsSeparator() {
	var dummy = new Number(11111111);
	var thousandSep = dummy.toLocaleString().replace(/1/g, '');
	return (thousandSep.length > 0 ? thousandSep.charAt(0) : ',');
}

function getNumericDecimalSeparator() {
	var dummy = new Number(1.1);
	var thousandSep = dummy.toLocaleString().replace(/1/g, '');
	return (thousandSep.length > 0 ? thousandSep.charAt(0) : '.');
}

function JSSafe(txtString) {
	var myRegExp = new RegExp("'", "g");
	return (txtString).replace(myRegExp, "\\'");
}


function ChangeDateFormat(elem) {
	if (elem.value != "") {
		var Error = false;
		var dateSplit = (elem.value).split("/");

		if (dateSplit.length == 3) {
			if (dateSplit[0] <= 12 && dateSplit[1] <= 31) {
				var d = new Date(elem.value);
				var currentDate = new Date();

				var selectedDate = d.getDate();
				var selectedMonth = d.getMonth();
				var SelectedYear = d.getFullYear();

				if (isNaN(selectedDate))
					Error = true;
				else if (isNaN(selectedDate))
					Error = true;
				else if (isNaN(selectedDate))
					Error = true;
				if (Error == false) {
					if (selectedDate.toString().length == 1)
						selectedDate = '0' + selectedDate;

					selectedMonth++;

					if (selectedMonth.toString().length == 1)
						selectedMonth = '0' + selectedMonth;

					currentYear = currentDate.getFullYear();

					if (SelectedYear.toString().substr(0, 2) < 20)
						SelectedYear = currentYear;
					elem.value = selectedMonth + '/' + selectedDate + '/' + SelectedYear;
				}
			}
			else
				Error = true;
		}
		else
			Error = true;

		if (Error == true) {
			alert('Date should be in the format MM/DD/YYY');
			elem.value = "";
		}
	}
}

function ChangeDateFormatNew(elem) {
	return isDateNew(elem.value);
}

function isSilverlightInstalled() {
	var isSilverlightInstalled = false;
	try {
		//check on IE
		try {
			var slControl = new ActiveXObject('AgControl.AgControl');
			isSilverlightInstalled = true;
			isSilverlightInstalled = true;
		}
		catch (e) {
			//either not installed or not IE. Check Firefox.
			if (navigator.plugins["Silverlight Plug-In"]) {
				isSilverlightInstalled = true;
			}
		}
	}
	catch (e) {
		//we don't want to leak exceptions. However, you may want
		//to add exception tracking code here.
	}
	return isSilverlightInstalled;
}

function setModalClass(cssClass, behaviorID) {
	var modalContainer = document.getElementById(behaviorID._PopupControlID);

	if (modalContainer)
		modalContainer.className = 'modalContainer modalContainerCP ' + cssClass;
}

function setModalClassFE(cssClass, behaviorID) {
	var modalContainer = document.getElementById(behaviorID._PopupControlID);

	if (modalContainer)
		modalContainer.className = 'modalContainer ' + cssClass;
}

//------------------- Copy Link ---------------------//
function showCopyLinkWindow(relatedLink, absoluteAddress, behavior, ifrID) {
	if (behavior) {
		setModalClass('modalCopyLink', behavior);
		var iFrame = document.getElementById(ifrID);
		iFrame.src = '/common/admin/CopyLink.aspx?relatedLink=' + encodeURIComponent(relatedLink) + '&absoluteAddress=' + encodeURIComponent(absoluteAddress);
		iFrame.style.display = 'block';
		behavior.show();
	} else {
		openCpModal({
			title: 'Copy Link',
			className: 'modalCopyLink',
			isFrontEnd: false,
			useIframe: true,
			url: '/common/admin/CopyLink.aspx?relatedLink=' + encodeURIComponent(relatedLink) + '&absoluteAddress=' + encodeURIComponent(absoluteAddress)
		});
	}
}

function showCopyLinkWindowUsingAddress(absoluteAddress) {
	var relatedUrl = absoluteAddress.replace(window.location.host, '');
	relatedUrl = relatedUrl.replace(window.location.protocol + '//', '');

	var behavior = $find('copyLinkBehavior');
	if (behavior)
		showCopyLinkWindow(relatedUrl, absoluteAddress, behavior, 'copyLinkDialog');
	else
		showCopyLinkWindow(relatedUrl, absoluteAddress, $find('editItemBehavior'), 'liveEditDialog');
}

function showCopyLinkWindowUsingRelatedLink(relatedUrl) {
	var absoluteUrl = window.location.protocol + '//' + window.location.host + relatedUrl;

	var behavior = $find('copyLinkBehavior');
	if (behavior)
		showCopyLinkWindow(relatedUrl, absoluteUrl, behavior, 'copyLinkDialog');
	else
		showCopyLinkWindow(relatedUrl, absoluteUrl, $find('editItemBehavior'), 'liveEditDialog');
}

function closeCopyModal() {
	var behavior = $find('copyLinkBehavior');
	if (behavior)
		behavior.hide();
	else {
		behavior = $find('editItemBehavior');
		if (behavior)
			behavior.hide();
		else
			closeCpModal();
	}
}
//------------------- Copy Link End---------------------//

//Parses the query string for the specified paramter and returns the value
//Returns "" if the parameter is not found
function GetQueryStringParameter(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "";
	else
		return results[1];
}

function setModalTitle(title, behaviorID) {
	if (behaviorID) {
		$('#' + behaviorID._PopupControlID).find('.modalTitle').text(title);
	}
	else {
		//if behaviorID is not provided, do the same as setModalTitle on FrontEnd.js
		var titleElem = document.getElementById('ctl00_LiveEditModalTitle');

		if (titleElem == null)
			titleElem = document.getElementById('ctl00_ct100_LiveEditModalTitle');

		if (titleElem == null)
			titleElem = document.getElementById('ctl00_ctl00_NotifyMeModalTitle');

		if (titleElem)
			titleElem.innerHTML = title;
	}
}

//------------------- Copy Link End---------------------//

function isNull(object, replacement) {
	return object == null ? replacement : object;
}

// Validates domain of email with service (ensures MX record present, DNS name valid, acceptable format).
// The callbacks object should contain the following methods:
// * badFormat - Email format invalid. Will also be thrown for null/empty email addresses.
// * mxMissing - MX record missing for the domain.
// * dnsError - A DNS error occurred (domain invalid, invalid characters in domain, etc).
// * success - The email appears to be valid.
function validateEmailDomain(emailAddress, callbacks) {
	$.ajax({
		type: "POST",
		url: "/Services/ValidateEmail.ashx",
		data: { email: emailAddress },
		success: function (data, textStatus, jqXHR) {
			switch (data.d) {
				case 1:
					callbacks.badFormat(emailAddress);
					break;
				case 2:
					callbacks.mxMissing(emailAddress);
					break;
				case 3:
					callbacks.dnsError(emailAddress);
					break;
				case 0:
				default:
					callbacks.success(emailAddress);
					break;
			}
		}
	});
}

//Called when opening action menu.
function openPopUp(id, event) {
	var $popUp = $(document.getElementById(id));

	if ($popUp.hasClass('popped')) {
		//do not do anything if popup is already open.
		return false;
	}

	//Hide all popups already open if nesessary.
	$('.popUp').fadeOut(200).removeClass('popped');
	$('.popUpParent').removeClass('popped');

	//Open popup
	$popUp.fadeIn(200);
	$popUp.addClass('popped');
	$popUp.parents('.popUpParent').addClass('popped');

	//prevent triggering any other event.
	if (window.event)
		window.event.cancelBubble = true;
	else
		event.stopPropagation();
}

function SignIn() {
	window.location.href = '/MyAccount?from=url&url=' + window.location.pathname + window.location.search;
}

function SignOut() {
	window.location.href = '/publiclogin.aspx?out=true&txtRedirect=' + window.location.pathname.substring(1) + window.location.search;
}

function removeIEParagraphs(editor) {
	editor.attachEventHandler("onkeyup", function (e) {
		if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 13) {
			var result = '';
			var re = new RegExp("<[P]>&nbsp;<\\/[P]>", "gi");

			var m = re.exec(editor.get_html(true));

			if (m == null) {
				return;
			} else {
				result = editor.get_html(true).replace(re, '<BR>');
				editor.set_html(result);
			}
		}
	});
}

//To toggle the slide show and image manger menu items based on if the img is a from a slide show or not.
function setMenuItems(editor) {
	var contextMenu = editor.getContextMenuByTagName("IMG");
	if (!contextMenu) return;

	//Attach to the context menu show event, obtain editor selection and determine which tools to show
	contextMenu.add_show(function () {
		//Must be an image, the context menu would not fire
		var sel = editor.getSelectedElement();

		//An array of menu item objects
		var menuItems = contextMenu.get_items();
		var menuItem = null;

		//reset to show all and then disable the menu item based on currently selection
		for (i = 0; i < menuItems.length; i++) {
			menuItems[i].get_element().style.display = "";
			menuItems[i].get_element().parentNode.style.display = "";
		} //end for

		if (sel.getAttribute("slideshowimage")) {
			menuItem = menuItems[menuItems.length - 3];
			menuItem.get_element().style.display = "none";
			menuItem.get_element().parentNode.style.display = "none";

			menuItem = menuItems[menuItems.length - 2];
			menuItem.get_element().style.display = "none";
			menuItem.get_element().parentNode.style.display = "none";
		} else {
			menuItem = menuItems[menuItems.length - 1];
			menuItem.get_element().style.display = "none";
			menuItem.get_element().parentNode.style.display = "none";
		}
	});
}

function integersOnly(e, input) {
	var charCode = (e.which) ? e.which : e.keyCode;

	var keyChar = String.fromCharCode(charCode);
	var currentValue = $(input).val();
	var allowNegativeSign = !$(input).hasClass("positive") && currentValue.indexOf('-') == -1 && (currentValue.length == 0 || currentValue == window.getSelection().toString());
	if (keyChar == '-' && allowNegativeSign)
		return true;

	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}

function decimalOnly(e, input, skipSelected) {
	skipSelected = (skipSelected == undefined || skipSelected == null) ? false : skipSelected;

	var charCode = (e.which) ? e.which : e.keyCode;

	var keyChar = String.fromCharCode(charCode);
	var currentValue = $(input).val();
	var hasDecimalPoint = currentValue.indexOf('.') != -1;
	if ((keyChar == '.' && !hasDecimalPoint))
		return true;

	if (!skipSelected && isTextSelected(input))
		return true;

	return integersOnly(e, input);
}

function isTextSelected(input) {
	if (typeof input.selectionStart == "number") {
		return input.selectionStart == 0 && input.selectionEnd == input.value.length;
	} else if (typeof document.selection != "undefined") {
		input.focus();
		return document.selection.createRange().text == input.value;
	}
}

function validFileName(e) {
	var charCode = (e.which) ? e.which : e.keyCode;
	var keyChar = String.fromCharCode(charCode);
	var invalidCharacters = "\\/:*?\"<>|',";

	return invalidCharacters.indexOf(keyChar) < 0;
}

function isValidURL(value) {
	return /^(https?:\/\/|ftp:\/\/|\/).+/i.test(value);
}
function isValidAbsoluteURL(value) {
	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}

function validateLink(link) {
	if (link != '') {
		if ((link.indexOf('http://') == -1) &&
		 (link.indexOf('https://') == -1) &&
		 (link.substr(0, 1) != '/')) {
			return false;
		}
	}
	return true;
}

// Check if string is a whole number(digits only).
function isWholeNumber(val) {
	return String(val).search(/^(([1-9]{1}\d{0,2},(\d{3},)*\d{3})|([1-9]{1}\d{0,}))$/) != -1;
}

// Checks that an input string is a decimal number
function isDecimalOrZero(val) {
	isDecimal_re = /^\d{1,5}(\.\d{1,2})?$/;
	return String(val).search(isDecimal_re) != -1;
}

//Allows login to CPC
function RebuildCSS(menu) {
	if (confirm('This will take some time\nand the site may look funny during the process.\nAre you sure?')) {
		var frmARC = document.forms.frmAdminRebuldCSS;
		frmARC.ysnNeedInclude.value = '1';
		frmARC.intMenu.value = menu;
		frmARC.submit();
	}
}

//Allows login to CPC
function adminGetHelp(helpUrl, newWindow) {
	var cpcDomain = $('#cpcDomain').val();
	if (cpcDomain.indexOf('https://') == -1)
		cpcDomain = 'https://' + cpcDomain
	document.cpconnect.action = cpcDomain + '/MyAccount?from=url&url=' + helpUrl;
	cpconnecttLogin();
}

function connectCPC() {
	var cpcDomain = $('#cpcDomain').val();
	if (cpcDomain.indexOf('https://') == -1)
		cpcDomain = 'https://' + cpcDomain
	document.cpconnect.action = cpcDomain + '/MyAccount';
	var ifr = document.createElement('iframe');
	ifr.name = "submitCPCFrame";
	ifr.id = "submitCPCFrame";
	ifr.style.display = 'none';
	var frm = $(document.cpconnect).clone().get(0);
	frm.name = "iframeCPCConnect"
	frm.target = 'submitCPCFrame';
	ifr.appendChild(frm);
	document.body.appendChild(ifr);
	frm.submit();
}

function showFeatureNotAvailablePopup(hypothesisID) {
	var data = {
		id: hypothesisID
	};

	$('.emailPage').removeClass('emailPage');

	$.ajax({
		url: '/FeatureNotAvailable/Popup',
		type: 'GET',
		data: {
			hypothesisID: hypothesisID
		},
		cache: false,
		success: function (response) {
			if (response.action == 'modal') {
				openCpModal({
					title: 'Feature Not Yet Available',
					className: 'featureNotAvailableModal moduleContentNew modalContainer',
					htmlContent: response.html,
					autoAdjust: true,
					isFrontEnd: true,
					elementID: 'featureNotAvailableModal'
				});
			} else {
				window.location = '/FeatureNotAvailable?hypothesisID='
                    + hypothesisID
                    + '&referrerUrl=' + window.location;
			}
		},
		beforeSend: function () {
			ajaxPostBackStart('Loading');
		},
		complete: function () {
			ajaxPostBackEnd();
		}
	});
}

function getDateFormat() {
	if (!gDateFormat) {
		$.ajax({
			url: "/GetDateFormat",
			type: "GET",
			success: function (response) {
				if (response.DateFormat)
					gDateFormat = response.DateFormat;
			},
			error: function (xhr, textStatus, exception) {
				gDateFormat = "MM/dd/yyyy";
			},
			async: false
		});
	}

	return gDateFormat == null ? "MM/dd/yyyy" : gDateFormat;	

}

function getdDateFormat() {
	var dateFormat;

	$.ajax({
		url: '/Utility/GetdDateFormat',
		async: false,
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			dateFormat = data.dateFormat;
		},
		error: function (jqXHR, textStatus, errorThrown) {
			dateFormat = "mm/dd/yyyy";
		}
	});

	return dateFormat;
}

function getDateFromInput(datePickerID, keepDayBeforeMonth) {
	var datePicker = $(datePickerID);
	var date;
	var dateFormat = keepDayBeforeMonth ? getDateFormat() : "mm/dd/yyyy";
	//See if datepicker if so becuase of UK format we cannot just grab the value
	if (!isNaN(datePicker.data('tDatePicker')) && datePicker.data('tDatePicker') && datePicker.data('tDatePicker').value()) {
	    var dateValTmp = new dateValidator();
		date = dateValTmp.format(dateFormat,new Date(datePicker.data('tDatePicker').value()));
	} else {
		if (datePicker.val()) {
			var dayBeforeMonthOn = getDateFormat().toLocaleLowerCase() == "dd/mm/yyyy" ? true : false;
			//Check if valid date before trying to format            			
			var dateString = checkDateFormatReturnUSString(datePicker.val(), dayBeforeMonthOn);
			var dateVal = new dateValidator();
			if (dateVal.dateValidateNew(dateString, false)) {
				date = dateVal.format(dateFormat,new Date(checkDateFormatReturnUSString(dateString, false)));
			} else {
				//Send the date string formatted eventhough invalid date. Allow date validation to return approiate error
				if (keepDayBeforeMonth) {
					date = dateString;
				} else {
					date = checkDateFormatReturnUSString(dateString, true);
				}
			}
		}
	}
	return date;
}

function formatUkDateReturnUSString(dateStr, isForce) {
	var retVal;
	if (isForce || getDateFormat().toLocaleLowerCase() == "dd/mm/yyyy") {
		dateStr = dateStr.replace(/\-/g, '/');
		dateStr = dateStr.split("/");
		retVal = dateStr[1] + "/" + dateStr[0] + "/" + dateStr[2];
	} else {
		retVal = dateStr;
	}
	return retVal;
}

function formatRFC3339DateReturnString(dateStr, keepDayBeforeMonth) {
	var retVal;
	var dateStrMod = dateStr.replace(/\-/g, '/');
	dateStrMod = dateStr.split("/");
	if (dateStrMod.length == 3 && dateStrMod[0].length == 4) {
		if (keepDayBeforeMonth && getDateFormat().toLowerCase() == "dd/mm/yyyy") {
			retVal = dateStrMod[2] + "/" + dateStrMod[1] + "/" + dateStrMod[0];
        } else {
			retVal = dateStrMod[1] + "/" + dateStrMod[2] + "/" + dateStrMod[0];
		}
	} else {
		retVal = dateStr;
	}
	return retVal;
}

function checkDateFormatReturnUSString(dateStr, keepDayBeforeMonth) {
	var retVal;
	if (dateStr) {
		var splitDate = dateStr;
		dateStr = dateStr.replace(/\-/g, '/');
		splitDate = dateStr.split("/");
		if (splitDate.length == 3) {
			if (splitDate[0].length == 4) {
				retVal = formatRFC3339DateReturnString(dateStr, keepDayBeforeMonth);
			} else if (keepDayBeforeMonth) {
				retVal = dateStr;
			} else {
				var dateVal = new dateValidator();
				retVal = formatUkDateReturnUSString(dateVal.cleanDate(dateStr));
			}
		} else {
			retVal = dateStr;
		}
	}
	return retVal;
}

//IE no longer displays as IE by design code to determin if it is IE11
function isIE11() {
	var trident = !!navigator.userAgent.match(/Trident\/7.0/);
	var net = !!navigator.userAgent.match(/.NET4.0E/);
	return trident && net;
}

function isValidUrl(url) {
	return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}

function isValidAbsoluteUrl(value) {
	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}

//Replaces the given tag with the tag to replace inside the element for all occurences of the tag within the element.
//$element - The element to perform the replace to
//tagToReplace - Tag to be replaced replace provided as string, ex: "i", "b", "strong" etc
//tagToReplaceWith - Tag to replace with, provided as string, ex: "i", "b", "strong" etc
function replaceTag($element, tagToReplace, tagToReplaceWith) {
    var $tagElemsToReplace = $element.find(tagToReplace);
    $tagElemsToReplace.each(function () {
        var $tagElem = $(this);
        var tagElemeHtml = $tagElem.html();
        $tagElem.replaceWith('<' + tagToReplaceWith + '>' + tagElemeHtml + '</' + tagToReplaceWith + '>');        
    });
}

window.addEventListener("load", function () {
	if (MutationObserver != null) {
		if ($('.contentContainerOld').length > 0 && ($('.spellchecker').length > 0 || $('[id^="DialogOpener"]').length > 0)) {
			var observer = new MutationObserver(function moveTelerikModalOverlay(mutations) {
				mutations.forEach(function (mutation) {
					if (!mutation.addedNodes) return;

					for (var i = 0; i < mutation.addedNodes.length; i++) {
						// do things to your newly added nodes here
						var node = mutation.addedNodes[i];

						if (node.classList != null && node.classList.contains("TelerikModalOverlay")) {
							$('.contentContainerOld').after(node);
						}
					}
				});
			});

			observer.observe(document.getElementsByClassName('contentContainerOld')[0], {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false
			});
		}
	}
});

if (!Array.prototype.includes) {
	Array.prototype.includes = function (searchElement) {
		'use strict';
		if (this == null) {
			throw new TypeError('Array.prototype.includes called on null or undefined');
		}

		var O = Object(this);
		var len = parseInt(O.length, 10) || 0;
		if (len === 0) {
			return false;
		}
		var n = parseInt(arguments[1], 10) || 0;
		var k;
		if (n >= 0) {
			k = n;
		} else {
			k = len + n;
			if (k < 0) { k = 0; }
		}
		var currentElement;
		while (k < len) {
			currentElement = O[k];
			if (searchElement === currentElement ||
			   (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
				return true;
			}
			k++;
		}
		return false;
	};
}

function isMsie() {
	ua = navigator.userAgent;
	/* MSIE used to detect old browsers and Trident used to newer ones*/
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

	return is_ie;
}

function isMozilla() {
	return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

function browserVersion() {
	ua = navigator.userAgent;
	var browserVersion = null;
	var verOffset = null;
	if (isMsie()) {
		verOffset = ua.indexOf("rv:");
		browserVersion = ua.slice(verOffset + 3).slice(0, 4);
	}
	else if (isMozilla()) {
		verOffset = ua.indexOf("Firefox")
		browserVersion=  ua.substring(verOffset + 8)
	}
	return browserVersion;
}

function setDatepickerHighlightedDate(date, datePickerId) {
	var dateFormat = getdDateFormat();
	var momentDate = moment(date, dateFormat.toUpperCase()).format('MM/DD/YYYY');
	if (momentDate.toLowerCase() !== "invalid date") {
		$('#' + datePickerId).pickadate('picker').set('highlight', date, { format: dateFormat });
	}
}
;
/// <reference path="../../Common/Controls/jquery-ui-1.14.1/jquery-ui.js" />
if (!window.Core) {
	window.Core = new CoreNamespace();
}

function AJAX(url, type, json, callBack, showLoadingMessage, contentType, forceCallBack, suppressErrorMessage) {
	contentType = contentType || 'application/x-www-form-urlencoded; charset=UTF-8';
	showLoadingMessage = showLoadingMessage == null ? true : showLoadingMessage;
	forceCallBack = forceCallBack == null ? false : forceCallBack;
	if (typeof (suppressErrorMessage) === 'undefined') suppressErrorMessage = false;
	$.ajax({
		url: url,
		type: type,
		contentType: contentType,
		data: json,
		success: function (response) {
			if (response.ErrorMessage && !forceCallBack) {
				if (response.ErrorMessage.indexOf('You do not have permission to perform this action.') != -1 && !isUserLoggedIn()) { // 079B4F43 
					alert('You are not logged in. Please login to continue.');
					location.href = '/myaccount?from=url&url=' + window.location.pathname;
				} else {
					alert(response.ErrorMessage);
				}
			}
			else if (response.RedirectURL && !forceCallBack)
				window.location.href = response.RedirectURL;
			else if (callBack)
				callBack(response);
		},
		beforeSend: function () {
			if (showLoadingMessage) {
				ajaxPostBackStart('Loading');
			}
		},
		complete: function () {
			if (showLoadingMessage) {
				ajaxPostBackEnd();
			}
		},
		error: function (xhr, textStatus, exception) {
			if (!suppressErrorMessage) {
				alert('Error: ' + xhr.statusText + '\nStatus: ' + xhr.status);
			}
		}
	});
}

function isUserLoggedIn() {
	var result = true; // if there is an error lets not show the login message.
	$.ajaxSetup({ async: false, ignoreEditor: true });
	$.post('/Utility/IsUserLoggedIn', function (data) {
		result = data;
	});
	$.ajaxSetup({ async: true, ignoreEditor: false });
	return result;
}

///Method to pause a javascript execution for x seconds, works like sleep(). VB
function sleep(seconds) {
	var max_sec = new Date().getTime();
	while (new Date() < max_sec + seconds * 1000) { }
	return true;
}

if (!String.prototype.format) {
	String.prototype.format = function () {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
		});
	};
}

if (!String.prototype.isNullOrWhiteSpace) {
	String.prototype.isNullOrWhiteSpace = function () {
		return this == null || this.trim() == '';
	};
}

function isValidMoney(value) {
	var isValid = false;
	if (value && value != '')
		isValid = /^\$?\s*\d+(,\d{3})*(\.\d{1,2})?$/.test(value);
	return isValid;
};

if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.slice(0, str.length) == str;
	};
}

String.prototype.format = String.prototype.f = function () {
	var s = this,
		i = arguments.length;

	while (i--) {
		s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
	}
	return s;
};

//Creates a javascript namespace, if one already exists, just returns that namespace.
function createNamespace(namespaceString) {
	var parts = namespaceString.split('.'),
		parent = window,
		currentPart = '',
		nsLength = parts.length;

	for (var i = 0, length = nsLength; i < length; i++) {
		currentPart = parts[i];
		parent[currentPart] = parent[currentPart] || {};
		parent = parent[currentPart];
	}
	return parent;
}
$(function () {

	// Ensures a dependency exists. If it doesn't acquire it.
	function ensure(dependencyExists, dependencyUrl, onceItExistsCallback) {
		if (dependencyExists) {
			onceItExistsCallback();
			return;
		}
		$.getScript(dependencyUrl, onceItExistsCallback);
	}

	var ajaxControlToolkit = window.AjaxControlToolkit;
	// This is hack override in order to fix problems with Ajax Toolkit Drag and Drop in newer browsers. It substitutes in jQuery Draggable if it is available.
	// A more proper fix is ideal, but extremely expensive as it would require replacing over a hundred instances of invocations of the old modal.
	// There isn't a clean way to integrate in the new modal system. JE
	// https://system.netsuite.com/app/crm/support/issuedb/issue.nl?id=3809568&l=T
	if (ajaxControlToolkit && ajaxControlToolkit.ModalPopupBehavior) {
		ajaxControlToolkit.ModalPopupBehavior.prototype._attachPopup = function () {
			/// <summary>
			/// Attach the event handlers for the popup
			/// </summary>

			if (this._DropShadow && !this._dropShadowBehavior) {
				this._dropShadowBehavior = $create(ajaxControlToolkit.DropShadowBehavior, {}, null, null, this._popupElement);
			}

			var _this = this;
			// Drag and Drop Replacement. Acquire any dependencies on the fly.
			ensure($.ui, "/Common/Controls/jquery-ui-1.14.1/jquery-ui.min.js", function () {
				$("#" + _this._PopupControlID).draggable({ handle: '#' + _this._PopupDragHandleControlID });
				$("#" + _this._PopupDragHandleControlID).css('cursor', 'move');
			});

			$addHandler(window, 'resize', this._resizeHandler);
			$addHandler(window, 'scroll', this._scrollHandler);
			this._windowHandlersAttached = true;
		}
	}
});

String.prototype.replaceAll = function (search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

function executeViewMapPostClickActions($element) {
	//Hide the view map element post click(to avoid clicking repeatedly)
	$element.hide('fast');
	
	//Collect analytics around map clicks
	var url = '/CollectGoogleMapClicks/Execute';
	var moduleId = $element.data('moduleid');
	$.ajax({
		url: url,
		type: 'POST',
		data: {
			url: window.location.href,
			moduleId: moduleId
		},
		success: function (json) {
			//send data to telemetry
			appInsights.trackEvent("googlemapclicked", json);
		},
		error: function (xhr, textStatus, exception) {
			alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
		}
	});
}

function importModal(options) {
	if (window.ImportModalInstance === undefined) {
		var script = document.createElement("script");
		script.onload = function () {
			window.ImportModalInstance.init(options);
		};
		script.src = "/Assets/Scripts/ImportModal.js";
		document.head.appendChild(script);
	}
	else
		window.ImportModalInstance.init(options);
}

function exportModal(options) {
	if (window.ExportModalInstance === undefined) {
		var script = document.createElement("script");
		script.onload = function () {
			window.ExportModalInstance.init(options);
		};
		script.src = "/Assets/Scripts/ExportModal.js";
		document.head.appendChild(script);
	}
	else
		window.ExportModalInstance.init(options);
}

document.addEventListener("DOMContentLoaded", function () {
	var modal = document.querySelector(".importModal");
	if (modal !== null) {
		try {
			if (!modal.classList.contains("processed")) {
				var options = modal.dataset.importconfig;
				if (options) {
					modal.addEventListener("click",
						function (e) {
							e.preventDefault();
							importModal(JSON.parse(options));
						});
					//Avoid further processing if the event gets triggered multiple times during page load
					modal.classList.add("processed");
				}
			}
		} catch (err) {
			console.error("Unable to initialize import modal");
		}
	}
	var modalExport = document.querySelector(".exportModal");
	if (modalExport !== null) {
		try {
			if (!modalExport.classList.contains("processed")) {
				var options = modalExport.dataset.exportconfig;
				if (options) {
					modalExport.addEventListener("click",
						function (e) {
							e.preventDefault();
							exportModal(JSON.parse(options));
						});
					//Avoid further processing if the event gets triggered multiple times during page load
					modalExport.classList.add("processed");
				}
			}
		} catch (err) {
			console.error("Unable to initialize export modal");
		}
	}
});


;
$(document).ready(function () {
	if (window.isResponsiveEnabled && !window.pageHandleResponsive) {
		function executeRWDResizeEvents(event) {
			var listener = function (e) {
				if ($('#hdnPageID').length == 0) {
					var breakpointWidth = 600,
					viewportWidth = $(window).width(),
					currentCookieValue = getCookieValue('viewportWidth');
					currentCookieValue = currentCookieValue == null || currentCookieValue == '' ? 0 : Number(currentCookieValue);
					document.cookie = 'viewportWidth=' + viewportWidth + '; path=/';
					if ((viewportWidth < breakpointWidth && currentCookieValue >= breakpointWidth) ||
					(viewportWidth >= breakpointWidth && currentCookieValue < breakpointWidth)) {
						window.location.reload();
					}
				}
			};

			if (window.addEventListener) {
				window.addEventListener(event, listener, false);
			} else if (window.attachEvent) {
				window.attachEvent("on" + event, listener);
			}
		}

		executeRWDResizeEvents('resize');
	}
	
	// Always reset the viewport width now that the document is fully loaded and we can make it more accurate.
	// (Sometimes on load it comes back much wider than it should)	
	document.cookie = 'viewportWidth=' + $(window).width() + '; path=/';
});
;
function Animations() {
	const animationsJsonEl = $('.activeWidgetSkinComponentsOnPageJson');
	const animationsJson = animationsJsonEl.html();
	if (animationsJson)
		this.components = JSON.parse(animationsJson);
	this.selectors = [
		'', '.widgetHeader', '.widgetBody', '.widgetItem', '.widgetTitle', '.widgetMeta', '.widgetBody .bullets',
		'a:link', '.readOn:link', '.widgetViewAll:link', '.widgetRSS:link', '.widgetFooter', '.cpTabs',
		'.cpTabs > li > a:link', '.cpTabPanel',
		'.separated .half:after, .separated .third:after, .separated .fourth:after, .separated .fifth:after, .separated.cpGrid .col:after ', '.miniCalendarHeader', '.miniCalendar > table', '.miniCalendar th', '.miniCalendar td > span', '.miniCalendar td > a', '.miniCalendar .today > span', '.miniCalendar .not > span', '.miniCalendar'
	];
	animationsJsonEl.remove();
}

Animations.prototype.Apply = function () {
	var self = this;
	self.addClassToContainers();
	self.bindContainerTriggers();
	self.addClassAndTriggerToSkinComponents();
};

/// Gets the css class to be applied from the hidden element already present on the page and applies the css class to the Container(Structural/Content)
Animations.prototype.addClassToContainers = function () {
	var $hiddenAnimationElements = $('.hiddenAnimations');
	if ($hiddenAnimationElements != null) {
		$hiddenAnimationElements.each(function () {
			//Get hidden element
			var $hiddenAnimationElement = $(this);
			//Get css class from it
			var cssClass = $hiddenAnimationElement.data('animationclass');
			var startCssClass = cssClass + '_Start';
			var triggerData = $hiddenAnimationElement.data('trigger');
			//Apply that class to parent container, depending on container type
			//For Strctural container
			if ($hiddenAnimationElement.parent('[data-cprole=structuralContainer]') != null) {
				$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').addClass(startCssClass);
				$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').addClass(triggerData);
				setTimeout(function () {
						$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').addClass(cssClass);
						$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').removeClass(startCssClass);
					},
					10);
			}
			//For Content Container
			if ($hiddenAnimationElement.parent('[data-cprole=contentContainer]') != null) {
				$hiddenAnimationElement.parent('[data-cprole=contentContainer]').addClass(startCssClass);
				$hiddenAnimationElement.parent('[data-cprole=contentContainer]').addClass(triggerData);
				setTimeout(function () {
						$hiddenAnimationElement.parent('[data-cprole=contentContainer]').addClass(cssClass);
						$hiddenAnimationElement.parent('[data-cprole=contentContainer]').removeClass(startCssClass);
					},
					10);
			}
		});
	}
};

//Apply animation class to widget skin components on page
Animations.prototype.addClassAndTriggerToSkinComponents = function () {
	var self = this;
	var $widgetsHavingSkinsApplied = $("[class*='skin']");

	if ($widgetsHavingSkinsApplied != null) {
		//array of unique skin ids
		var $uniqueSkinIds = [];
		$widgetsHavingSkinsApplied.each(function () {
			//Get skin class
			var skinClass = $(this).attr('class').match(/.skin\d+/g)[0];
			//Parse skinId off of skin class
			var skinId = parseInt(skinClass.match(/\d+/)[0]);
			//Insert if not there in array
			if ($.inArray(skinId, $uniqueSkinIds) === -1)
				$uniqueSkinIds.push(skinId);
		});

		$.each($uniqueSkinIds, function (index, value) {
			var skinId = value;
			for (var i = 0; i < self.selectors.length; i++) {
				//Find all widget skincomponents on the page using this skin.
				var $skinComponentsOnPageUsingThisSkin = $('.skin' + skinId + ' ' + self.selectors[i] + '');
				var animationClass = self.classAndTrigger(skinId, i).className;
				var animationTrigger = self.classAndTrigger(skinId, i).triggerName;
				var scrollOffset = self.classAndTrigger(skinId, i).scrollOffset;
				if (animationClass !== undefined) {
					//Apply animation class
					$skinComponentsOnPageUsingThisSkin.addClass(animationClass + '_Start').addClass(animationClass).removeClass(animationClass + '_Start');
				}
				if (animationTrigger !== undefined && animationTrigger !== 'hover') {
					//Apply animation trigger
					$skinComponentsOnPageUsingThisSkin.addClass(animationTrigger + 'AnimationTrigger');
					$skinComponentsOnPageUsingThisSkin.data("scrolloffset", scrollOffset);
				}
			}
		});
	}
};

///Get animation class given the component and skin Id
Animations.prototype.classAndTrigger = function (skinId, componentTypeId) {
	var self = this;
	var components = self.components;
	var classAndTrigger = {};
	if (components && components.length > 0) {
		for (var i = 0; i < components.length; i++) {
			if (components[i].WidgetSkinID === skinId && components[i].ComponentType === componentTypeId) {
				classAndTrigger.className = components[i].AnimationClass;
				classAndTrigger.triggerName = components[i].TriggerNameLowerCase;
				classAndTrigger.scrollOffset = components[i].ScrollOffset;
				return classAndTrigger;
			}
		}
	}
	return classAndTrigger;
};

/// Gets the css class to be applied from the hidden element already present on the page and applies the css class to the Nav container(Main/Side)
Animations.prototype.applyAnimationClassToNavContainers = function ($olSubMenu, menuType) {
	var mainMenu = 2;
	var sideMenu = 1;
	var cssClass;
	var triggerData;
	var $mainNavHiddenElement = $('#mainNav').children('[class*="hiddenAnimations"]');
	var $secondaryNavHiddenElement = $('#secondaryNav').children('[class*="hiddenAnimations"]');

	if ($('#mainNav').length > 0 && menuType === mainMenu) {
		cssClass = $mainNavHiddenElement.data('animationclass');
		triggerData = $mainNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass);
		setTimeout(function () {
				$olSubMenu.addClass(cssClass);
				$olSubMenu.addClass('animation-triggered');
				$olSubMenu.removeClass(cssClass + '_Start');
			},
			10);
	};
	if ($('#secondaryNav').length > 0 && menuType === sideMenu) {
		cssClass = $secondaryNavHiddenElement.data('animationclass');
		triggerData = $secondaryNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass);
		setTimeout(function () {
			$olSubMenu.addClass(cssClass);
			$olSubMenu.addClass('animation-triggered');
			$olSubMenu.removeClass(cssClass + '_Start');
		},
			10);
	};
};

Animations.prototype.applyAnimationClassToMegaMenuContainer = function ($megaMenuContainer, timeOut) {
	var cssClass;
	var $megaMenuHiddenElement = $('.megaMenuContainer').children('[class*="hiddenAnimations"]');

	$megaMenuContainer.mouseleave(function () {
		if (!$('.megaMenuContainer').children('.pinned').length > 0) {
			$(this).removeClass('animation-triggered');
		}
	});

	if ($('.megaMenuContainer').length > 0) {
		cssClass = $megaMenuHiddenElement.data('animationclass');
		setTimeout(function () {
				$megaMenuContainer.addClass('animation-triggered');
				$megaMenuContainer.removeClass(cssClass + '_Start');
			},
			timeOut);
	};
};

/// Gets the css class to be applied from the hidden element already present on the page and applies the css class to the Nav container(Main/Side)
Animations.prototype.applyInitial = function ($olSubMenu, menuType) {
	var mainMenu = 2;
	var sideMenu = 1;
	var cssClass;
	var triggerData;
	var $mainNavHiddenElement = $('#mainNav').children('[class*="hiddenAnimations"]');
	var $secondaryNavHiddenElement = $('#secondaryNav').children('[class*="hiddenAnimations"]');
	if ($('#mainNav').length > 0 && menuType === mainMenu) {
		cssClass = $mainNavHiddenElement.data('animationclass');
		triggerData = $mainNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass + '_Start').addClass(triggerData);
	};
	if ($('#secondaryNav').length > 0 && menuType === sideMenu) {
		cssClass = $secondaryNavHiddenElement.data('animationclass');
		triggerData = $secondaryNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass + '_Start').addClass(triggerData);
	};
};

Animations.prototype.bindContainerTriggers = function () {
	$(document)
		.delegate('[class*="clickAnimationTrigger"]',
			'click',
			function () {
				$(this).addClass('animation-triggered');
			});

	$(window).scroll(function () {
		$('.scrollAnimationTrigger').not('.cpCarousel .widgetItem.scrollAnimationTrigger').each(function () {
			var scrollOffsetPercentage = $(this).data('scrolloffset') / 100;
			if (isNaN(scrollOffsetPercentage))
				scrollOffsetPercentage = $(this).children().first().data('scrolloffset') / 100;
			if (scrollOffsetPercentage != 0 && ($(window).scrollTop() + ($(window).height() * (1 - scrollOffsetPercentage))) >
				$(this).offset().top && ($(this).offset().top + $(this).height()) > $(window).scrollTop())
				$(this).addClass('animation-triggered');
		});

		$('.cpCarousel .widgetItem.scrollAnimationTrigger').each(
			function () {
				$(this).addClass('animation-triggered');
			}
		);
	});
};
function StickyStructuralContainers() {
	//Add sticky class to structuralStructuralContainer
	var stickyContainers = $('div.stickyInnerDiv.sticky');
	if (stickyContainers.length > 0) {
		stickyContainers.each(function () {
			$(this).parent().addClass('stickyStructuralContainer stickySticky');
		});
		if ($("#divToolbars")[0]) {
			$(".stickyStructuralContainer.stickySticky").css('top',
				($("#divToolbars")[0].getBoundingClientRect().height + parseInt($('#divToolbars').css('margin-top'))) + "px");
		}
	}

	//Add sticky class to structural container inside of stickyStructualContainer
	var structuralContainersUnderSticky = $('div.structuralUnderStickyInnerDiv');
	if (structuralContainersUnderSticky.length > 0) {
		structuralContainersUnderSticky.each(function () {
			$(this).parent().addClass($(this).attr('class'));
		});
	}
}

StickyStructuralContainers.prototype.init = function () {
	var self = this;
	var stickyContainers = $('div.stickyInnerDiv.sticky');
	var paddingCalc = $("#divToolbars").outerHeight() - parseInt($("#divToolbars").css('padding-top'));
	if (stickyContainers.length > 0) {
		var bottomOfSticky = $('.stickyStructuralContainer.stickySticky').outerHeight();
		$('#bodyWrapper').addClass('noTransition');
		$('.stickyStructuralContainer.stickySticky').next().css('padding-top', bottomOfSticky + 'px');
	}

	//Adjusted / re - calculate the padding for sibling of sticky structural container.
	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	window.Pages.onResizeHandlers.push(function () {
		$('.stickySticky').each(function () {
			var padding = $(this).outerHeight() - 1 + 'px';
			var self = this;
			if ($('.stickySticky').next().attr('data-cprole') == "banner") {
				$('.stickySticky').next().find('[id^="structuralContainer"]').first().css('padding-top', padding);
			} else {
				window.setTimeout(function () {
					$(self).next().css('padding-top', padding);
				}, 500);
			}
		});
	});

	//set up scroll events
	var stickyCollapsedContainers = $('div.stickyInnerDiv.stickyCollapsedWhenScrolled');
	if (stickyCollapsedContainers.length > 0 && !window.isMobileBrowserIncludingTablets) {
		stickyCollapsedContainers.each(function () {
			$(this).parent().addClass('stickyStructuralContainer stickyStickyCollapsedWhenScrolled');
			if ($(this).hasClass('stickyFadeAnimation')) {
				$(this).parent().addClass('stickyStickyFadeAnimation');
			} else if ($(this).hasClass('stickySlideDownAnimation')) {
				$(this).parent().addClass('stickyStickySlideDownAnimation');
			}
		});

		var bottomOfStickyCollapsed = $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled').offset().top +
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled').outerHeight() -
			$("#divToolbars").height();
		var hideWhenExpandedHeights = self.getAllHeights($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded'));
		var hideWhenCollapsedHeights = self.getAllHeights($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed'));

		var scrollDownTrigger = self.getStickyScrollBreakpoint(bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights);

		self.showHideStickyContainers(true, scrollDownTrigger, paddingCalc);

		self.bindScrollForSticky(bottomOfStickyCollapsed,
			hideWhenExpandedHeights,
			hideWhenCollapsedHeights);
	}
	else {
		stickyContainers = $('div.stickyInnerDiv');
		if (stickyContainers.length > 0 && stickyContainers.find('.structuralUnderStickyInnerDiv.showInMobile').length > 0) {
			stickyContainers.find('.structuralUnderStickyInnerDiv').not('.showInMobile')
				.each(function () {
					$(this).hide();
				});
		}
	}
}

StickyStructuralContainers.prototype.bindScrollForSticky = function (bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights) {
	var self = this;
	var scrollDownTrigger = self.getStickyScrollBreakpoint(bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights);
	var paddingCalc = $("#divToolbars").outerHeight() - parseInt($("#divToolbars").css('padding-top'));

	$(window)
		.scroll(function () {
			self.showHideStickyContainers(false, scrollDownTrigger, paddingCalc);
		});
}

StickyStructuralContainers.prototype.showHideStickyContainers = function (initialLoad, scrollDownTrigger, paddingCalc) {
	var $stickyStructuralContainer = $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled');
	var wS = $(window).scrollTop();

	if (wS >= scrollDownTrigger + paddingCalc) {
		$stickyStructuralContainer.addClass('stickyCollapsed');

		$(".stickyStructuralContainer.stickyStickyCollapsedWhenScrolled")
			.css('top', $("#divToolbars").outerHeight() + "px");

		//Structrual overrides content container so show/hide if content container doesn't have a structural container around it
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded')
			.each(function () {
				if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
					$(this).show();
				}
			});

		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed')
			.each(function () {
				if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
					$(this).hide();
				}
			});

		//Structrual overrides content container so show/hide structural containers and any content containers under it that would be opposite behavior
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').hide();
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').show();
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').find('.hideWhenCollapsed').show();
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').find('.hideWhenExpanded').hide();

		//Animate the slide down
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickyFadeAnimation.stickyCollapsed')
			.addClass('stickyAnimFade');
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickySlideDownAnimation.stickyCollapsed')
			.addClass('stickyAnimSlideDown');

		if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').length > 0 &&
			!$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').hasClass('stickyAnimComplete')
		) {
			setTimeout(function () {
				$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed')
					.addClass('stickyAnimComplete');
			},
				0);

			$('#stickyPlaceholder').css('height', scrollDownTrigger + paddingCalc + 'px');
			if (!window.isRemoveSetHeights)
				SetHeights();
		}

	} else {
		if (($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').hasClass('stickyAnimComplete'))
			|| initialLoad) {
			$(".stickyStructuralContainer.stickyStickyCollapsedWhenScrolled").css('top', 'auto');

			//Structrual overrides content container so show/hide if content container doesn't have a structural container around it
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded')
				.each(function () {
					if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
						$(this).hide();
					}
				});

			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed')
				.each(function () {
					if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
						$(this).show();
					}
				});

			//Structrual overrides content container so show/hide structural containers and any content containers under it that would be opposite behavior
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').hide();
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').show();
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').find('.hideWhenCollapsed').hide();
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').find('.hideWhenExpanded').show();

			$('#stickyPlaceholder').css('height', '0');

			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickyFadeAnimation.stickyCollapsed')
				.removeClass('stickyAnimFade');
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickySlideDownAnimation.stickyCollapsed')
				.removeClass('stickyAnimSlideDown');
			$stickyStructuralContainer.removeClass('stickyCollapsed stickyAnimComplete');
			if (!window.isRemoveSetHeights)
				SetHeights();
		}
	}
}

StickyStructuralContainers.prototype.getAllHeights = function (elements) {
	var heights = 0;
	if (elements && elements.length > 0) {
		elements.each(function () {
			if ($(this).parents('.structuralUnderStickyInnerDiv.hideWhenExpanded').length === 0
				&& $(this).parents('.structuralUnderStickyInnerDiv.hideWhenCollapsed').length === 0)
				heights += $(this).height();
		});
	}
	return heights;
}


StickyStructuralContainers.prototype.getStickyScrollBreakpoint = function (bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights) {
	var scrollDownTrigger;
	var $stickyStructuralContainer = $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled');
	var toolBarAndStickyHeight = $stickyStructuralContainer.outerHeight() -
		$("#divToolbars").height();

	//Logic for when there are structural containers
	if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0
		|| $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
		//If page loaded and already collapsed and has both show and hide containers
		if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight - hideWhenExpandedHeights;
			//If page loaded and NOT collapsed and has both show and hide containers
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
			//If page loaded and collapsed and has only visible containers when collapsed
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight - hideWhenExpandedHeights;
			//If page loaded and collapsed and has only visible containers when expanded
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight;
			//If page loaded and NOT collapsed and has only one style of visible container (collapsed or non)
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0 ||
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
		} else {
			scrollDownTrigger = toolBarAndStickyHeight;
		}
		//Logic for when there are only content containers. Same scenarios as strucrual
	} else {
		if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenExpanded').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight - hideWhenExpandedHeights;
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight - hideWhenExpandedHeights;
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenCollapsed').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight;
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').length > 0 ||
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
		} else {
			scrollDownTrigger = toolBarAndStickyHeight;
		}
	}

	return scrollDownTrigger;
};
var commonLocalization = null;
var userAgent = window.navigator.userAgent;
var iOSSafari = userAgent.match(/iP(ad|hone)/i) && userAgent.match(/WebKit/i) && !userAgent.match(/CriOS/i);
var hashRegex = /^(#cc[A-z0-9]{8}-[A-z0-9]{4}-[A-z0-9]{4}-[A-z0-9]{4}-[A-z0-9]{12})$/;
var stickyStructuralContainers = null;

if (window.location.hash && hashRegex.test(window.location.hash)) {
	var targetHash = window.location.hash;
	window.location.hash = '';
	scroll(0, 0);
	setTimeout(function () {
		scroll(0, 0);
	}, 1);
}

if (window.isResponsiveEnabled) {
	loadMediaFramework();
}

function loadMediaFramework() {
	Modernizr.load([
		//test old browsers to use polyfills
		{
			test: window.addEventListener,
			nope: "/Assets/Scripts/RWD/eventListener.js"
		},
		{
			test: window.matchMedia,
			nope: "/Assets/Scripts/RWD/media.match.js"
		},
		{
			test: Modernizr.touch,
			yep: "/Assets/Scripts/RWD/quo.debug.js"
		},
		//Load Media Framework after polyfills if needed
		getAbsoluteUrl("/Assets/Scripts/RWD/MediaFramework.js")
	]);
}

(function () {
	var timer = 4000;
	var incrementTimer = function () { timer = timer * 1.25; };

	var timeOutFunction = function () {
		setTimeout(timeOutFunction, timer);
		setBannerHeights();
		incrementTimer();
	};
	timeOutFunction();
}());

$(document).ready(function () {

	if (!window.isResponsiveEnabled) {
		//Setup execution of events when resizing
		var timeout = 250; //time out to debounce event
		window.Pages = window.Pages || {};
		window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];

		if (typeof updateMegaMenusOnBrowserResize === 'function')
			window.Pages.onResizeHandlers.push(updateMegaMenusOnBrowserResize);

		if ($('#hdnWidgetManager').length == 0 && typeof rearrangeFlyoutsOnResizeEvents === 'function')
			window.Pages.onResizeHandlers.push(rearrangeFlyoutsOnResizeEvents);

		function executeResizeEvents(event) {
			var timer;
			var listener = function (e) {
				//Execute the handlers for resize events.
				timer && clearTimeout(timer);
				timer = setTimeout(function () {
					for (var i = 0; i < window.Pages.onResizeHandlers.length; i++) {
						if (typeof (window.Pages.onResizeHandlers[i]) === 'function') {
							window.Pages.onResizeHandlers[i]();
						}
					}
				}, timeout);
			};

			if (window.addEventListener) {
				window.addEventListener(event, listener, false);
			} else if (window.attachEvent) {
				window.attachEvent("on" + event, listener);
			}
		}

		executeResizeEvents('resize');
		executeResizeEvents('orientationChange');
	}

	if (window.isResponsiveEnabled) {
		//Inserts data-label on each table cell in froala editor. Needed for responsive view
		$.each($.find('.fr-view table'), function (tableIndex, tableValue) {
			$(tableValue).parent().addClass('responsiveEditor');
			if($(tableValue).find('thead th').length === 1) {
				$(this).addClass('singleHeaderTable');
			}
			$.each($(tableValue).find('thead th'), function (headerIndex, headerValue) {
				$.each($(tableValue).find('tbody tr'), function (rowIndex, rowValue) {
					$($(rowValue).find('td')[headerIndex]).attr('data-label', headerValue.textContent);
				});
			});
		});
	}

	$('#divToolbars').css('overflow-x', 'visible');
	$('#divToolbars').css('overflow-y', 'visible');

	browserFailOvers();

	var GetCookie = function (cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

	var IsLiveEditOn = function () {
		return GetCookie("enableLiveEdit") === "true";
	};

	if (IsLiveEditOn() && isUserLoggedIn()) {
		$('body').addClass('liveEditOn');
	}

	setTimeout(function () {
		$('.mobile.header .mobileMenu').css('top', $('#divToolbars .mobileAlertBar').outerHeight(true));
	}, 10);

	$('div.mobile.header > a.mobileMenu').unbind().click(function (e) {
		e.preventDefault();
		$('#menuPanel').css('top', $('#divToolbars').outerHeight(true));
		$('#menuPanel').toggle('slide');
		window.scrollTo(0, 0);
	});

	// Set Heights really fast at first then after 4 seconds slow it down.
	if (typeof SetHeights === 'function') {

		var stretchContainers = (typeof window.dynamicStretchContainers === 'function');
		var setHeightInterval = setInterval(function () {
			if (!window.isRemoveSetHeights)
				SetHeights();
			if (stretchContainers) window.dynamicStretchContainers();
		}, 50);

		setTimeout(function () {
			clearInterval(setHeightInterval);
			if (IsLiveEditOn()) {
				setInterval(function () {
					if (!window.isRemoveSetHeights)
						SetHeights();
					if (stretchContainers) window.dynamicStretchContainers();
				}, 2000);
			}
		}, 4000);

	}

	//Do not execute for WidgetManager, it has a slightly different logic thats handled in WidgetManager code itself.
	if ($('#hdnWidgetManager').length == 0) {
		if (typeof rearrangeFlyouts === 'function') {
			setTimeout(function () {
				setInterval(function () {
					rearrangeFlyouts(false);
				}, 2000);
			}, 2000);
		}
	}

	window.setTimeout(function () { moveMegaMenusInDOM({ direction: $('#megaMenuPopupDirection').val() }); }, 50);

	frontEnd_removeAttributesFromGraphicLinks();

	if ($('.viewArchiveLink').length > 0) {
		$('body').addClass('cpViewArchiveOn');
	}

	//workaround to make legacy LE modal to be centered correctly
	$("body").append($("#ctl00_ctl00_MainContent_ctl00_liveEditPopupWindow")).append($("#editItemBehavior_backgroundElement"));

	//Workaround to adjust the toolbar dropdowns dynamically based on the .cpToolbar height + some other initialization stuff for Layout.
	Core.Layout.toggleFeatureColumn();

	Core.Layout.attachTabbedWidgetTabHandlers();

	//when clicking on error details links
	$("a.errorDetails").on("click.errorDetails", function (e) {
		e.preventDefault();
		$(this).next("div").slideToggle('fast');
	});

	$("img.imageHover").on("mouseenter.imageHover", function () {
		$(this).attr('src', $(this).data("hover"));
	}).on("mouseleave.imageHover", function () {
		$(this).attr('src', $(this).data("image"));
	});

	// Setup handlers for My Account toolbar
	var $Favorites = $('#favoritesList');
	var $UserMenu = $('.cpToolbar .userMenu .popOut');
	$Favorites.hide();
	$UserMenu.hide();

	$('a[href="#favoritesList"]').click(function (e) {
		e.preventDefault();
		if ($Favorites.hasClass('open')) {
			$Favorites.slideUp(200);
		} else {
			slideToggle($Favorites, true, 200);
		}
		$Favorites.toggleClass('open');
	});

	$('.cpToolbar .popOutContainer > a').click(function (e) {
		if ($UserMenu.hasClass('open')) {
			$UserMenu.slideUp(200);
		} else {
			$UserMenu.slideDown(200);
		}
		$UserMenu.toggleClass('open');
	});

	//Authentication
	$('.requireSignIn').on("keypress", function () {
		$(this).click();
	});

	$('.requireSignIn').on("mouseup", function (event) {
		event.preventDefault();
		$(this).click(function (event) { event.preventDefault(); });
		var $self = $(this);
		$.ajax({
			url: '/Saml/IsSamlLoginEnabled?loginPage=LoginPageMyAccount',
			type: 'GET',
			success: function (response) { RequireSignInSuccess(response, $self) },
			async: false
		});
	});

	function RequireSignInSuccess(response, $elem) {
		if (response.IsSamlLoginEnabled) {
			window.location = '/Admin/Saml/LogonRequest?RelayState=' + window.location.pathname.substring(1);
		}
		else {
			var popupBasedAuthenticationJs = new PopupBasedAuthentication();
			popupBasedAuthenticationJs.requireLoggedIn($elem.attr('href'), '');
		}
	}

	flipHandlesIfNecessary();
	$(window).scroll(function () {
		$('.flipHandles').removeClass('flipHandles');
	});

	if (location.search.toLowerCase().indexOf('preview=yes') > -1 || location.search.toLowerCase().indexOf('print=yes') > -1) {
		$('body').addClass('printPreview');
	}
	else {
		$('body').removeClass('printPreview');
	}

	$('#viewFullWebsiteOnMobile').unbind('click').click(function () {
		var curDate = new Date();
		curDate.setHours(curDate.getHours() + 2);
		var curDateInUTCStringFormat = curDate.toUTCString();
		document.cookie = "forceMobileOff=true; expires=" + curDateInUTCStringFormat + "; path=/";
	});

	$('#backToMobileView').unbind('click').click(function () {
		//expire the cookie
		document.cookie = "forceMobileOff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	});

	if ($("iframe").length > 0) {
		$.getScript('/Assets/Scripts/attrchange.js', function () {
			$.getScript('/Assets/Scripts/attrchange_ext.js', function () {
				$("iframe").attrchange({ callback: function (event) { if (!window.isRemoveSetHeights) SetHeights(); } });
			});
		});
	}

	//Apply classes to parent containers and initialize the stickyStructuralContainers class
	if (typeof (StickyStructuralContainers) === 'function') {
		stickyStructuralContainers = new StickyStructuralContainers();
	}

	var liveEditEnabled = getCookieValue("enableLiveEdit") === "true";
	if (typeof (Animations) === 'function') {
		var animations = new Animations();
		//If live edit enabled, give it a delay for animation classes to apply properly.
		if (liveEditEnabled) {
			setTimeout(function () {
				animations.Apply();
			},
				100);
		} else {
			//Apply animation classes and triggers
			animations.Apply();
		}
	}

	//Fixes image cache problem on iOS safari
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		$(".graphicButtonLink").removeAttr("onmouseover");
	}

	$('.cp-modificationProhibited').on("click", function () {
		if ($(this).hasClass('cp-modificationProhibited')) {
			showWidgetDisabledPopUp();
		}
	});

	$('.pageCopyEditWidgetModal').on("click", function () {
		savePageCopy();
	});

	$('.closeEditWidgetModal').on("click", function () {
		closeModal();
	});

	$('.viewMap, .viewMapAsLink').on("click", function () {
		executeViewMapPostClickActions($(this));
	});
});

$(window).on("load", function () {
	if (stickyStructuralContainers) {
		stickyStructuralContainers.init();
		// Fire resize handlers to recalculate any height adjustments required after sticky container setup.
		var resizeHandlers = window.Pages && window.Pages.onResizeHandlers || [];
		resizeHandlers.forEach(function (handler) { handler(); });
	}
	$('[class*="pageloadAnimationTrigger"]').each(
		function () {
			$(this).addClass('animation-triggered');
		});

	setTimeout(function () {
		//Fix for blank target elements with rel attributes to avoid phishing attack.
		var blankTargetElements = $("[target='_blank']");
		$.each(blankTargetElements, function (index, element) {
			$(element).attr("rel", "noopener");
		});
	}, 175);

	$('body').find('table').removeAttr('border');
	$('body').find('table').removeAttr('cellspacing');
	$('body').find('table').removeAttr('cellpadding');
});

function flipHandlesIfNecessary() {
	$('.widget').unbind('mouseover').mouseover(function (e) {
		var $this = $(this);
		var $innerCol = $this.parents('div.inner.col');
		if ($innerCol != null && !$innerCol.hasClass('flipHandles') && $('#ysnEnableLiveEdit').is(':checked')) {
			var $removeHandle = $innerCol.find('.handle.remove');
			var $toolbarHeight = $('.cpToolbars').outerHeight(true);
			var $removeHandleHeight = $removeHandle.outerHeight();
			if ($removeHandle.length > 0) {
				var $removeHandleTop = $removeHandle.offset().top - $(document).scrollTop();
				if (parseFloat($toolbarHeight - $removeHandleTop) >= parseFloat($removeHandleHeight / 3))
					$innerCol.addClass('flipHandles');
				else
					$innerCol.removeClass('flipHandles');
			}
		}
	});
}

function reinitCarousels() {
	if (window.carouselsToInit && window.carouselsToInit != undefined) {
		for (var i = 0; i < window.carouselsToInit.length; i++) {
			carouselsToInit[i]();
		}
	}
}

function SetHeights() {
	if ($('body').hasClass('mobile') || $('.pageContent.dragging').length > 1 || !window.Core.performSetHeights) {
		return;
	}

	var originalScrollPosition = $('body').scrollTop();
	if (!originalScrollPosition) {
		originalScrollPosition = $('html').scrollTop();
	}

	// Grow the heights and set them in place.
	$('.inner.col, .outer.col, .resize, .indicator.vertical, div.widgetSpacer').css('height', 'auto');

	var adjustColumnHeights = function () {
		if (typeof CustomAdjustHeights === 'function') {
			CustomAdjustHeights();
			return;
		}
		$('.row.nest.wide').each(function () {
			var height = $(this).outerHeight();
			if (height < 15) {
				height = 15;
			}
			$(this).children('.inner.col, .resize, .indicator.vertical').css('height', height + "px");
		});

		$('.row.outer.wide:not(.autoWidths)').each(function () {
			var height = $(this).outerHeight();
			if (height < 15) {
				height = 15;
			}
			$(this).children('.outer.col, .resize, .indicator.vertical, .row.nest.first.last > .inner.col')
				.css('height', height + "px");
			$(this).find('.outer.col > .row.nest.first.last > .inner.col').css('height', height + "px");

		});
	};

	adjustColumnHeights();

	var autoWidthRowsHandler = function ($this) {
		var height = 15;
		$this.children('.col').each(function () {
			var columnHeight = $(this).outerHeight();
			if (columnHeight > height) {
				height = columnHeight;
			}
		});
		$this.find('.indicator.vertical').height(height);
	};

	$('.outer.row.autoWidths.wide').each(function () {
		autoWidthRowsHandler($(this));

		$(this).find('.row').each(function () {
			autoWidthRowsHandler($(this));
		});
	});

	if (!window.isResponsiveEnabled || getCookieValue("enableLiveEdit") === "true") {
		$('div.widgetSpacer').each(function () {
			var $spacer = $(this);
			var $innerCol = $spacer.parent(),
				$innerRow = $innerCol.parent();

			if ($innerRow.hasClass("first") && $innerRow.hasClass("last")) {
				var outerRowHeight = $innerRow.parent().parent().height(),
					innerColPadding = $innerCol.css("padding-top").replace("px", ""),
					spacerHeight = outerRowHeight - (2 * parseInt(innerColPadding, 10));
				$spacer.height(spacerHeight);
				$innerCol.height(spacerHeight);
			} else {
				var innerColHeight = $innerCol.innerHeight();
				if (innerColHeight > 30)
					$spacer.height(innerColHeight);
				else
					$spacer.height(30); //default spacer height
			}
		});
	}

	adjustColumnHeights();

	$('.outer.col').height('auto');
	if (!iOSSafari) {
		$('html,body').scrollTop(originalScrollPosition);
	}
	setBannerHeights();
	reinitCarousels();
}

function frontEnd_removeAttributesFromGraphicLinks() {
	$('.widgetGraphicLinks li.GraphicLinks > a > img').removeAttr('height').removeAttr('width');
}

function closeModalDialog(behaviourID) {
	var behavior = $find(behaviourID);

	if (behavior)
		behavior.hide();
	else
		closeCpModal();
}

function SetMegaMenuToOpenAbove() {
	moveMegaMenusInDOM({ direction: '1' });
}
function SetMegaMenuToOpenBelow() {
	moveMegaMenusInDOM({ direction: '0' });
}

function changeModalDialogHeight(height, showDetails) {
	var ifr = document.getElementById('liveEditDialog');
	if (ifr)
		ifr.style.height = height + 'px';
	if (showDetails != '')
		document.cookie = "showAddDetails=" + showDetails + ";";
}

function setModalClassForEditItemBehavior(cssClass, showDetails) {
	var behaviorID = $find('editItemBehavior');
	var modalContainer = document.getElementById(behaviorID._PopupControlID);
	if (modalContainer)
		modalContainer.className = 'modalContainer modalContainerCP ' + cssClass;
	if (showDetails != '')
		document.cookie = "showAddDetails=" + showDetails + ";";
}

function loadStyleSheet(href, id) {
	var styleSheet = document.createElement('link');
	styleSheet.type = 'text/css';
	styleSheet.rel = 'stylesheet';
	styleSheet.setAttribute('href', href);
	if (id) {
		styleSheet.setAttribute('id', id);
	}
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(styleSheet);
}

function enableLiveEdit(checked) {

	var $liveEditTabs = $('#liveEditTabs');
	if (checked) {
		document.cookie = "enableLiveEdit=true; expires=12/31/2999; path=/";
		$('.handle').show();
		$('#bodyWrapper').removeClass('noTransition');
		$('#LiveEditCSS').prop('disabled', false);
		var versionTitle = $('#versionHeadLine').text();
		$('#versionHeadLine').html('<a id="versionHeadLineOptionsHandle" href="#" class="handle options" title="Version Options">Version Options</a>');
		$('#versionHeadLine').append('<span contenteditable="true" data-versiontitle="' + versionTitle + '">' + versionTitle + '</span>');
		$('#versionHeadLineOptionsHandle').unbind().click(function () {
			versionActions(ContentCollectionInstance.VersionID, 'edit', { "pageID": ContentCollectionInstance.PageID, "versionID": ContentCollectionInstance.VersionID });
		});
		if ($('#404Content').length > 0 || $('#pagePageID').val() === '') {
			location.reload();
		} else if ($liveEditTabs.length > 0) {
			redrawContextualInnerToolbar(window.ContentCollectionInstance.PageID, window.ContentCollectionInstance.VersionID);
			window.ContentCollectionInstance.reloadContent();
			InitializeContainers();
			setTimeout(window.ContentCollectionInstance.refreshNavContainers, 10);
			refreshMegaMenusForLiveEdit();
			showLiveEditElement($liveEditTabs);
			if (liveEditTabs.currentState !== 'closed') {
				liveEditTabs.setBodyPadding();
			}
		} else {
			$.ajax({
				url: '/LiveEditMarkup',
				type: 'GET',
				cache: false,
				async: false,
				success: function (response) {
					var $body = $('body');
					$body.append(response).addClass('liveEditOn');
					loadStyleSheet('/Areas/Pages/Assets/Styles/Home.css');
					loadStyleSheet('/Assets/AdminRefresh/LiveEdit/Styles/LiveEdit.css', 'LiveEditCSS');
					if (!window.ContentCollectionInstance) {
						window.ContentCollectionInstance = new ContentCollectionClass();
						window.ContentCollectionInstance.init();
					}

					if (!window.ResizeData) {
						window.ResizeData = new ResizeClass();
					}
					redrawContextualInnerToolbar(window.ContentCollectionInstance.PageID, window.ContentCollectionInstance.VersionID);
					var moduleID = $('#pageModuleID').val();
					if (moduleID == '') {
						moduleID = 76;
					} else {
						moduleID = Number(moduleID);
					}
					renderLiveEditTabs(moduleID);

					window.ContentCollectionInstance.reloadContent();
					InitializeContainers();
					setTimeout(window.ContentCollectionInstance.refreshNavContainers, 10);
					refreshMegaMenusForLiveEdit();
				},
				error: function (xhr, textStatus, exception) {
					alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
				}
			});
		}
		triggerStickyStructuralInitLogic();
		//no responsive when live edit enabled, so default to wide view
		$('.widget.narrow').each(function () {
			var $this = $(this);
			$this.removeClass('narrow').addClass('wide');
		});
		$('.tabbedWidgetNarrow.cpTabs:not(.accordion)').hide();
		$('.tabbedWidget.cpTabs').show();
		Core.Layout.attachTabbedWidgetTabHandlers();
		if ($('script:contains("audioeye.com")').length >= 1) {
			$('script:contains("audioeye.com")').remove();
		}
	}
	else {
		document.cookie = "enableLiveEdit=false; expires=12/31/2999; path=/";
		$('#liveEditMenu').hide();
		setTimeout(window.ContentCollectionInstance.refreshNavContainers, 10);
		refreshMegaMenusForLiveEdit();
		var publishedVersion = $liveEditTabs.length > 0 && $('#hdnVersionStatus').val() === '40';
		var isPublishedVersionAndContainsTabbedWidget = publishedVersion && $('.widgetTabbed').length > 0;
		if (!publishedVersion || isPublishedVersionAndContainsTabbedWidget)
			location.reload();

		$('body.liveEditOn').removeClass('liveEditOn').addClass('liveEditOff');
		window.ContentCollectionInstance.reloadContent(null, null, true);
		loadMediaFramework();
		$('#bodyWrapper').attr('style', '');
		$('#versionHeadLineOptionsHandle').remove();
		$('#versionHeadLine').html($('#versionHeadLine').text());
		$('a.editCustomHtml').hide();
		hideLiveEditElement($liveEditTabs);
		hideLiveEditElement($('#innerToolbar'));
		triggerStickyStructuralInitLogic();
		setTimeout(function () {
			$('#LiveEditCSS').prop('disabled', true);
		}, 666);
		//For some reason, loadMediaFramework doesnt load MediaFramework.js on disabling live edit, this forces it to download it again hence fixing a responsive issue.
		if (window.cpMedia) {
			window.cpMedia = undefined;
			var scriptSrc = '';
			var script = document.createElement('script');
			script.async = false;
			script.type = 'text/javascript';
			scriptSrc = '/Assets/Scripts/RWD/MediaFramework.js';
			script.src = scriptSrc;
			document.body.appendChild(script);
		}
		Core.Layout.attachTabbedWidgetTabHandlers();
		$.ajax({
			url: '/IncludeScript/AudioEyeScript/',
			type: 'GET',
			cache: false,
			async: false,
			success: function (response) {
				if (response) {
					var scriptText = $(response)[2].innerText;
					var s = document.createElement("script");
					s.type = "text/javascript";
					s.text = scriptText;
					document.body.appendChild(s);
				}
			},
			error: function (xhr, textStatus, exception) {
				alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
			}
		});
	}

	//If IE, simply perform location.reload in order to execute _rootfrontend file again to render the IE meta tag according to settings. This tag cannot be 
	//added dynamically, so a reload is required for (https://civicplus.tpondemand.com/entity/29964).
	if (window.isie) {
		location.reload();
		return;
	}

}

function refreshMegaMenusForLiveEdit() {
	setTimeout(function () {
		var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
			.map(function () {
				$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
				return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
			}).toArray();
		window.Pages.megaMenuLoaded.resolve();
		reloadSharedContentContainers(megaMenuContentContainers);
	}, 200);
}

function showHideUnpublishedItems(checked) {
	if (checked) {
		document.cookie = "showAll=true; expires=12/31/2999 23:59:59; path=/";
		document.getElementById('ysnLiveEditShowMyActionItems').checked = true;
		document.getElementById('ysnLiveEditShowMyActionItems').disabled = true;
	}
}

function showHideUnpublishedItems(checked) {
	var actionItemsCheckbox = document.getElementById('ysnLiveEditShowMyActionItems');
	document.cookie = `showAll=${checked}; expires=12/31/2999 23:59:59; path=/`;

	if (actionItemsCheckbox) {
		actionItemsCheckbox.checked = checked;
		actionItemsCheckbox.disabled = checked;
		showHideActionItems(checked);
	}
}

function showHideActionItems(checked) {
	if (checked)
		document.cookie = "showActionItems=true; expires=12/31/2999 23:59:59; path=/";
	else
		document.cookie = "showActionItems=false; expires=12/31/2999 23:59:59; path=/";

	if (typeof redrawContent == 'function')
		redrawContent();
	else
		location.reload(true);
}

function showHideLiveEditControl(checked) {
	if (checked)
		document.cookie = "showLiveEditControls=true; expires=12/31/2999 23:59:59;";
	else
		document.cookie = "showLiveEditControls=false; expires=12/31/2999 23:59:59;";

	//if (typeof redrawContent == 'function' && !$.browser.msie)
	//	redrawContent();
	//else
	location.reload(true);
}

function disableCustomHtmlRendering(checked) {
	if (checked)
		document.cookie = "disableCustomHtmlRendering=true; expires=12/31/2999 23:59:59; path=/";
	else
		document.cookie = "disableCustomHtmlRendering=false; expires=12/31/2999 23:59:59; path=/";

	location.reload(true);
}

// Print preview.
function pPreview(mode) {
	var printStr = 'PREVIEW=YES';
	if (mode == 1)
		printStr = 'PRINT=YES';
	var url = document.URL.split("#")[0];
	window.open(url + (url.indexOf("?") == -1 ? '?' : '&') + printStr, '_blank');
}

function Navigate(txtAction) {
	if (txtAction.lastIndexOf("&") == txtAction.length - 1)
		txtAction = txtAction.slice(0, -1);
	document.frmNavigate.action = txtAction;
	location.href = txtAction;
}

function showExternalSiteDialog(anchor) {
	if ($(anchor).closest('[contenteditable=true]').length) { // Don't do anything for content editables
		return false;
	}

	window.externalUrl = anchor.href;
	window.externalTarget = anchor.target;

	openCpModal({
		title: 'Leaving Site',
		className: 'externalLinkDialog',
		url: '/Common/Modules/LeavingSite/Dialog.aspx',
		useIframe: true,
		iframeHeight: '370px',
		scrolling: true
	});
	return false;
}

// todo: rename to openModalDialog, to match closeModalDialog
function openGenericModalDialog(height, className, title, src) {
	document.getElementById('ctl00_LiveEditModalTitle').innerHTML = title;

	behavior = $find('editItemBehavior');

	if (behavior) {
		var ifr = document.getElementById('liveEditDialog');
		var target = document.getElementById('ctl00_ctl00_MainContent_ctl00_liveEditPopupWindow');

		ifr.src = src;

		if (className)
			target.className = 'modalContainer ' + className;
		if (height)
			ifr.style.height = height;

		ifr.style.display = 'block';

		behavior.show();
	}
}

function expandCollapseCategory(catID) {
	if (commonLocalization == null) {
		commonLocalization = GetJson('/Localization/Index');
	}

	if (document.getElementById(catID).style.display == 'none') {
		$('#cat' + catID + ' > a').attr('title', commonLocalization.CollapseThisCategory);
		document.getElementById(catID).style.display = 'block';
		document.getElementById('a_' + catID).innerHTML = '&#9660;';
	}
	else {
		$('#cat' + catID + ' > a').attr('title', commonLocalization.ExpandThisCategory);
		document.getElementById(catID).style.display = 'none';
		document.getElementById('a_' + catID).innerHTML = '&#9658;';
	}
}

function slideToggle(element, bShow, duration) {
	var $el = $(element)
		, visible = $el.is(":visible");

	// if the bShow isn't present, get the current visibility and reverse it
	if (arguments.length == 1) bShow = !visible;

	// if the current visiblilty is the same as the requested state, cancel
	if (bShow == visible) return false;

	$.each($el, function (i, e) {
		var $e = $(e);
		var visible = $e.is(":visible");
		var height = $e.show().height();
		if (!$e.data("originalHeight")) {
			$e.data("originalHeight", height);
		};
		if (!visible) $e.hide().css({ height: 0 });
	});

	// expand the knowledge (instead of slideDown/Up, use custom animation which applies fix)
	if (bShow) {
		$.each($el, function (i, e) {
			$e = $(e);
			$e.show().animate({ height: $e.data("originalHeight") }, { duration: duration });
		});
	} else {
		$el.animate({ height: 0 }, {
			duration: duration, complete: function () {
				$el.hide();
			}
		});
	}
	$el.queue(function () { $el.height('auto'); $(this).dequeue(); });
}


$(window).on("load", function () {
	removeEmptyFeaturedAreas();
	//Run these once here since window.load invokes after images are loaded as well in the DOM. This fixes one of the issues where the landscape version of the page on ipad etc has images all messed up
	//since SetHeights run before the images are loaded in the DOM
	if (window.isResponsiveEnabled) {
		if (typeof SetHeights === 'function' && !window.isRemoveSetHeights)
			SetHeights();
		if (typeof dynamicStretchContainers === 'function')
			dynamicStretchContainers();
	}
});

function GetSignIn() {
	$.get('Services/ForgotPassword.ashx?Username=' + encodeURIComponent(userName), function (data) {
		if (data == -1)
			alert($("#Localization_AccountDoesNotExist").val());
		else
			alert($("#Localization_PasswordReminder").val());
	});
}

function PerformSignIn() {
	var userName = $('#UserName').val();
	var password = $('#Password').val();
	var rememberMe = $('#RememberMe').val();
	var emailAddress = $('#UserName').val();
	var url;
	$.post('/MyAccount/SignInJson?' +
		'UserName=' + userName +
		'&Password=' + password +
		'&RememberMe=' + rememberMe +
		'&EmailAddress=' + emailAddress
		, function (data) {
			if (data.status != 1)
				alert(data.msg);
			else {
				if (data.HasAcceptedTerms == true) {
					url = getParameterByName('url');
					url = url == '' ? window.location.href : url;
					window.location.href = url;
				}
				else {
					window.location.href = '/MyAccount/Terms';
				}
			}
		});
}

function SignIn() {
	window.location.href = '/MyAccount?from=url&url=' + window.location.pathname + window.location.search;
}

function SignOut() {
	(function ($) {
		$.QueryString = (function (a) {
			if (a == "") return {};
			var b = {};
			for (var i = 0; i < a.length; ++i) {
				var p = a[i].split('=');
				if (p.length != 2) continue;
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
			}
			return b;
		})(window.location.search.substr(1).split('&'))
	})(jQuery);

	var url = '/publiclogin.aspx?out=true&txtRedirect=' + window.location.pathname.substring(1) + window.location.search;
	var dn = $.QueryString['dn'];
	if (dn != undefined) {
		if (!dn.toLowerCase().startsWith('http'))
			dn = 'http://' + dn;
		url = dn + url;
	}

	window.location.href = url;
}

function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

//Share current page url using common mvc modal (only for mvc modules)
function openShareEmailPageModal(subject) {
	var emailSubject = (subject && subject != '') ? subject : document.title;
	openCpModal({
		type: 'POST',
		data: {
			subject: emailSubject
		},
		title: 'Email This Page',
		className: 'emailPage',
		url: '/EmailPage/Home/EmailPageModal'
	});
}

function openShareEmailPageModalWithReferrel(subject, urlReferrer) {
	var emailSubject = (subject && subject != '') ? subject : document.title;
	openCpModal({
		type: 'POST',
		data: {
			subject: emailSubject,
			specificUrlReferrer: urlReferrer
		},
		title: 'Email This Page',
		className: 'emailPage',
		url: '/EmailPage/Home/EmailPageModalWithSpecificUrl',
		elementID: 'mvcModal'
	});
}

//Share current page url redirecting to email page (for legacy pages do not support new mvc modal)
function openShareEmailPage(subject) {
	var emailSubject = (subject && subject != '') ? subject : document.title;
	window.location.href = '/EmailPage/?subject=' + escape(emailSubject);
}

//Layout Banners
function renderBanner(bannerPlaceHolderID, bannerSlotID, bannerOption, bannerImage, imageFolder, imageTag) {
	var $bannerSlot = $('#' + bannerSlotID);
	var $bannerPlaceHolder = $('#' + bannerPlaceHolderID);
	var images = bannerOption.BannerImages;
	const sequenceId = Date.now() % (images.length || 1);
	bannerImage = bannerOption.BannerMode === 2 ? images[sequenceId] : bannerImage;
	//render external banner
	$bannerPlaceHolder.replaceWith(createBannerExternalMarkup($bannerSlot, bannerOption, bannerImage, imageFolder, imageTag));
	var stickyContainers = $('div.stickyInnerDiv.sticky');
	if (stickyContainers.length > 0) {
		$('#bodyWrapper .bannerObject.external').css('top', '0');
	}
	setTimeout(function () {
		if (!window.isRemoveSetHeights)
			SetHeights();
	}, 5500);
}

function centerImage(parentWidth, parentHeight, imageWidth, imageHeight) {
	var left = 0;
	//Adjust width to view port proportionally
	var proportionRatio = 1;
	if (imageWidth > parentWidth) {
		proportionRatio = (imageWidth - parentWidth) / imageWidth;
		imageHeight -= imageHeight * proportionRatio;
	} else if (imageWidth < parentWidth) {
		proportionRatio = (parentWidth - imageWidth) / imageWidth;
		imageHeight += imageHeight * proportionRatio;
	}
	imageWidth = parentWidth;

	if (imageHeight < parentHeight) {
		//Readjust Height to view port proportionally
		proportionRatio = (parentHeight - imageHeight) / imageHeight;
		imageWidth += imageWidth * proportionRatio; imageHeight = parentHeight;
		left = -1 * (imageWidth - parentWidth) / 2; //move left to center image
	}

	return { imageWidth: imageWidth, imageHeight: imageHeight, left: left };
}

function createBannerExternalMarkup($bannerSlot, bannerOption, bannerImage, imageFolder, imageTag) {
	if (!window.isRemoveSetHeights)
		SetHeights();
	if (typeof window.dynamicStretchContainers === 'function') window.dynamicStretchContainers();

	var parentHeight = $bannerSlot.parent().outerHeight(true);
	var windowHeight = $(window).height();
	var imageHeight = bannerImage.Height;
	var isBackgroundBanner = $bannerSlot.parent().attr("id") == "bodyWrapper" || $bannerSlot.parent().parent().attr("id") == "bodyWrapper";
	var left = 0;

	if (isBackgroundBanner && windowHeight > parentHeight) {
		parentHeight = windowHeight;
	}

	var imageWidth = bannerImage.Width;
	if (bannerOption.ImageScale) {
		var parentWidth = $bannerSlot.outerWidth(true);
		if (isBackgroundBanner) {
			parentHeight = windowHeight;
		}
		var centerValues = centerImage(parentWidth, parentHeight, imageWidth, imageHeight);
		imageWidth = centerValues.imageWidth;
		parentHeight = centerValues.imageHeight;
		left = centerValues.left;
	}

	if (bannerImage.FileName.startsWith('/')) {
		imageFolder = '';
	}

	var $img = (!imageTag)
		? $('<img class="bannerObject" src="' + imageFolder + bannerImage.FileName + '" alt="">')
		: $(imageTag);
	$img.attr("width", imageWidth + "px");
	$img.css("position", "absolute");

	switch (bannerOption.ImageAlignment) {
		case 1:
		case "Left":
			$img.css("left", "0");
			$img.css("margin", "0");
			break;
		case 2:
		case "Center":
			$img.css("left", "50%");
			$img.css("margin", "0 0 0 -" + Math.round(bannerImage.Width / 2) + "px");
			break;
		case 3:
		case "Right":
			$img.css("right", "0px");
			$img.css("margin", "0");
			break;
	}

	var position = 'position: ' + (bannerOption.ImageScroll ? 'absolute;' : 'fixed;');
	var $bodyWrapper = $("#bodyWrapper");
	if (!bannerOption.ImageScroll) {
		left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
	}

	var html = '<div class="bannerObject external" id="bannerDiv' + $bannerSlot.attr('id') + '" style="min-height: ' + parentHeight + 'px ;top: 0px; left: ' + left + 'px; right: 0; ' + position + ' overflow: hidden; z-index: -999999; padding: 0px;"></div>';

	var $html = $(html).append($img);
	$html.attr('data-image-scale', bannerOption.ImageScale);

	var oldScreenHeight = screen.height;
	var oldScreenWidth = screen.width;
	//bind windows resize event if needed
	$(window).unbind('resize.banner' + bannerOption.SlotName);
	if (bannerOption.ImageScale) {
		$(window).bind('resize.banner' + bannerOption.SlotName, function () {
			if (screen.height !== oldScreenHeight && screen.width !== oldScreenWidth) {
				oldScreenHeight = screen.height;
				oldScreenWidth = screen.width;
				resize($bannerSlot);
			}
		});
	}
	///private function that takes care of resizing when image scale
	var resize = function ($bannerSlotContainer) {
		var parentHeight = $bannerSlotContainer.parent().outerHeight(true);
		var windowHeight = $(window).height();
		var left = 0;

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		var imageWidth = bannerImage.Width;
		if (bannerOption.ImageScale) {
			var parentWidth = $bannerSlotContainer.outerWidth(true);
			if (isBackgroundBanner) {
				parentHeight = windowHeight;
			}
			var centerValues = centerImage(parentWidth, parentHeight, imageWidth, imageHeight);
			imageWidth = centerValues.imageWidth;
			parentHeight = centerValues.imageHeight;
			left = centerValues.left;
		}

		if (!bannerOption.ImageScroll) {
			left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
		}

		$html.css("left", left);
		$html.find('img.bannerObject').width(imageWidth);
		$html.css("min-height", parentHeight + "px");
	};

	window.Pages = window.Pages || {};
	window.Pages.Banners = window.Pages.Banners || {};
	$(window.Pages.Banners).bind('ExternalBannersResize', function () { resize($bannerSlot); }); // resize external banners

	if (jQuery.resize) {
		$bannerSlot.children(":not(.bannerObject, script)").unbind("resize").bind("resize", function () { $(window.Pages.Banners).trigger('ExternalBannersResize'); });
	}

	if (bannerOption.ImageScale) {
		window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
		window.Pages.onResizeHandlers.push(function () {
			$(window.Pages.Banners).trigger('ExternalBannersResize');
		});
	}

	setTimeout(function () {
		if (!window.isRemoveSetHeights)
			SetHeights();
	}, 8000);
	return $html;
};

function setBannerHeights() {
	$('div.bannerObject.external').each(function () {
		var $this = $(this);
		var isBackgroundBanner = $this.parent().attr("id") == "bodyWrapper" || $this.parent().parent().attr("id") == "bodyWrapper";
		var parentHeight = parentHeight = $this.parent().outerHeight(true);
		var windowHeight = $(window).height();

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		if ($this.attr('data-image-scale') === "true") {
			$this.css('min-height', $this.find('img').height());
		} else {
			$this.css('min-height', parentHeight);
		}
	});
}

//Creates slideshow markup for external banners.
function createBannerExternalMarkupForSlideshow($bannerSlot, bannerOption, imageFolder, bannerImagesJSON, bannerMode, rotatingSequence) {
	if (!window.isRemoveSetHeights)
		SetHeights();
	if (typeof window.dynamicStretchContainers === 'function') window.dynamicStretchContainers();

	var parentHeight = $bannerSlot.parent().outerHeight(true);
	var parentWidth = $bannerSlot.outerWidth(true);
	var windowHeight = $(window).height();
	var isBackgroundBanner = $bannerSlot.parent().attr("id") == "bodyWrapper" || $bannerSlot.parent().parent().attr("id") == "bodyWrapper";
	var greaterImageWidth = 0, greaterImageHeight = 0;
	var left = 0;

	if (isBackgroundBanner && windowHeight > parentHeight) {
		parentHeight = windowHeight;
	}

	var img = '';
	for (var i = 0; i < bannerImagesJSON.length; i++) {
		var bannerImage = bannerImagesJSON[i];
		var imageWidth = bannerImagesJSON[i].Width;
		if (imageWidth > greaterImageWidth)
			greaterImageWidth = imageWidth;
		if (bannerImagesJSON[i].Height > greaterImageHeight)
			greaterImageHeight = bannerImagesJSON[i].Height;
		var alignmentCss = "";
		switch (bannerOption.ImageAlignment) {
			case 1:
			case "Left":
				alignmentCss += 'left: 0;  margin: 0;';
				break;
			case 2:
			case "Center":
				alignmentCss += ' left: 50%; margin: 0 0 0 -' + Math.round(bannerImage.Width / 2) + 'px;';
				break;
			case 3:
			case "Right":
				alignmentCss += ' right: 0px; margin: 0;';
				break;
		}
		if (bannerOption.ImageScale) {
			imageWidth = parentWidth;
		}

		var tempImageFolder = imageFolder;
		if (bannerImagesJSON[i].FileName.startsWith('/')) {
			tempImageFolder = '';
		}

		if (bannerMode === 'Slideshow') {
			if (i > 0) {
				img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute; display: none;' + alignmentCss + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-is-delayed="true" data-delayed-image="' + tempImageFolder + bannerImagesJSON[i].FileName + '" alt="">';
			} else {
				img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="' + tempImageFolder + bannerImagesJSON[i].FileName + '" data-is-delayed="false" alt="">';
			}
		}
		else if (bannerMode === 'Rotating') {
			if (rotatingSequence < 0) {
				rotatingSequence = 0;
			}
			var rotSeqLessOne = rotatingSequence === 0 ? bannerImagesJSON.length - 1 : rotatingSequence - 1;
			var rotSeqPlusOne = rotatingSequence === bannerImagesJSON.length - 1 ? 0 : rotatingSequence + 1;
			if (bannerOption.SlideshowControlsPosition === 0 || bannerOption.SlideshowControlsPosition === 'None') {
				if (i === rotatingSequence) {
					img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="' + tempImageFolder + bannerImagesJSON[i].FileName + '" data-is-delayed="false" alt="">';
				}
			} else {
				if (i === rotSeqLessOne || i === rotatingSequence || i === rotSeqPlusOne) {
					img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="' + tempImageFolder + bannerImagesJSON[i].FileName + '" data-is-delayed="false" alt="">';
				} else {
					img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-is-delayed="true" data-delayed-image="' + tempImageFolder + bannerImagesJSON[i].FileName + '" alt="">';
				}
			}
		}

	}

	var position = 'position: ' + (bannerOption.ImageScroll ? 'absolute;' : 'fixed;');
	var $bodyWrapper = $("#bodyWrapper");
	if (!bannerOption.ImageScroll) {
		left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
	}
	var html = '<div class="bannerObject external" id="bannerDiv' + $bannerSlot.attr('id') + '" style="min-height: ' + parentHeight + 'px ;top: 0; left: ' + left + 'px; right: 0; ' + position + ' overflow: hidden; z-index: -999999; padding: 0px;">'
		+ img + '</div>';

	var $html = $(html);
	$html.attr('data-image-scale', bannerOption.ImageScale);

	///private function that takes care of resizing when image scale
	var resize = function ($bannerSlotContainer) {
		var parentHeight = $bannerSlotContainer.parent().outerHeight(true);
		var windowHeight = $(window).height();
		var left = 0;

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		var imageWidth = greaterImageWidth;
		if (bannerOption.ImageScale) {
			var parentWidth = $bannerSlotContainer.outerWidth(true);
			if (isBackgroundBanner) {
				parentHeight = windowHeight;
			}
			var centerValues = centerImage(parentWidth, parentHeight, imageWidth, greaterImageHeight);
			imageWidth = centerValues.imageWidth;
			parentHeight = centerValues.imageHeight;
			left = centerValues.left;
		}

		if (!bannerOption.ImageScroll) {
			left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
		}

		$html.css("left", left);
		$html.find('img.bannerObject').width(imageWidth);
		$html.css("min-height", parentHeight + "px");
	};

	var displayArrows = function ($bannerSlotContainer) {
		var $bannerSlideshowControls = $('#bannerSlideshowControls_' + $bannerSlotContainer[0].id);
		var windowWidth = $(window).width();
		if ($bannerSlideshowControls.length > 0 && windowWidth < 416) {
			$bannerSlideshowControls.hide();
			$html.removeClass('fixedBanner');
		} else if ($bannerSlideshowControls.length > 0 && windowWidth >= 416 && !$bannerSlideshowControls.hasClass("none")) {
			$bannerSlideshowControls.show().removeAttr('style');
			$html.addClass('fixedBanner');
		}
	}

	//bind windows resize event if needed
	$(window).unbind('resize.banner' + bannerOption.SlotName);
	if (bannerOption.ImageScale) {
		window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
		window.Pages.onResizeHandlers.push(function () {
			resize($bannerSlot);
		});
		resize($bannerSlot);
	}

	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	window.Pages.onResizeHandlers.push(function () {
		displayArrows($bannerSlot);
	});

	var $bannerSlideshowControls = $('#bannerSlideshowControls_' + $bannerSlot[0].id);
	if ($bannerSlideshowControls.length > 0) {
		$html.addClass('fixedBanner');
	}

	return $html;
}

//Render Slideshow for External banners.
function renderExternalBannerSlideshow(bannerSlotID, bannerOption, imageFolder, bannerMode) {
	var bannerImagesJSON = bannerOption.BannerImages;

	if (!bannerOption.SlideShowSlideTiming) {
		bannerOption.SlideShowSlideTiming = 1;
	}
	if (!bannerOption.SlideShowTransitionTiming) {
		bannerOption.SlideShowTransitionTiming = 1;
	}
	
	const rotatingSequence = bannerMode === 'Rotating' ? Date.now() % (bannerImagesJSON.length || 1) : 0;

	var slideTransitionTiming = parseFloat(bannerOption.SlideShowSlideTiming) * 1000;
	var transitionTiming = parseFloat(bannerOption.SlideShowTransitionTiming) * 1000;

	var $bannerSlot = $('#' + bannerSlotID);
	var imagesHtml = createBannerExternalMarkupForSlideshow($bannerSlot, bannerOption, imageFolder, bannerImagesJSON, bannerMode, rotatingSequence);

	var $imagesHtml = $(imagesHtml);
	$imagesHtml.insertAfter($('#bannerImagesJSON' + bannerOption.BannerOptionID));

	var images = null;
	images = $('div#bannerDiv' + bannerSlotID).find('img.bannerObject');

	if (bannerOption.SlideshowTransition == '1') // 1 corresponds to "none"
	{
		transitionTiming = 0; // A 0 transition time is the same as no transition.
	}

	//Moves banner controls to the body level of the DOM to avoid layout issues with z-index
	if ($('.bannerSlideshowControlsNew.centered.container').length > 0) {
		var $banner = $('#' + bannerSlotID);
		$banner.prepend($('#bannerSlideshowControls_' + bannerSlotID));
	}
	else {
		$(document.body).append($('#bannerSlideshowControls_' + bannerSlotID));
	}

	var ss = new SimpleSlideshow(images, transitionTiming, slideTransitionTiming, bannerMode, parseInt(rotatingSequence));

	if (window.FeatureToggles.isActive("CMS.DesignCenter.EnablePauseAndPlayForBannerSlideshow")) {
		$('#bannerSlideshowPlayPauseBtn_' + bannerSlotID).click(function () {
			ss.togglePause();
		});
	}
}

function SimpleSlideshow($images, transitionTime, slideTime, bannerMode, rotatingSequence) {
	"use strict";
	var slideshowRef = this;
	var $imageToBeShown = null;
	var $currentImage = null;
	var $nextImage = null;
	var $previousImage = null;
	//Setting the imageToShowIndex = -1 make sure that the 1st image showing in the slideshow is the 1st image in the slideshow.
	var imageToShowIndex = -1;
	var nextImageIndex = -1;
	var previousImageIndex = 0;
	var paused = false;
	var numberOfImages = $images.length;
	var onLoad = false;
	//Setting imageToShowIndex as the next rotating sequence if slideshow enhancements are enabled and option is refreshing
	if (bannerMode === 'Rotating' && numberOfImages > 1) {
		imageToShowIndex = rotatingSequence - 1;
		onLoad = true;
	}

	var DEBUG = false;
	var diag = function (msg) {
		if (DEBUG) {
			console.log('[Simple Slideshow] ' + msg);
		}
	};

	slideshowRef.autoFadeNext = function () {
		if (!paused && bannerMode == 'Slideshow') {
			slideshowRef.goToNext();
		}
	};

	slideshowRef.goToNext = function () {
		imageToShowIndex = imageToShowIndex >= (numberOfImages - 1) ? 0 : imageToShowIndex + 1;
		previousImageIndex = imageToShowIndex == 0 ? numberOfImages - 1 : imageToShowIndex - 1;
		nextImageIndex = imageToShowIndex < numberOfImages - 1 ? imageToShowIndex + 1 : 0;

		$imageToBeShown = $($images[imageToShowIndex]);
		$nextImage = $($images[nextImageIndex]);
		if ($nextImage.data('is-delayed') == true) {
			$nextImage.attr('src', $nextImage.data('delayed-image'));
			(new Image()).src = $nextImage.data('delayed-image');
			$nextImage.data('is-delayed', 'false');
			$nextImage.data('delayed-image', '');
		}
		$currentImage = $($images[previousImageIndex]);
		diag('Automatic transition next. Image To Show Index: ' +
			imageToShowIndex +
			', Previous Image Index: ' +
			previousImageIndex);
		slideshowRef.sendBehindFront($imageToBeShown).show();

		if (!onLoad) {

			if (numberOfImages == 1) {
				slideshowRef.sendToFront($currentImage).show();
			}
			else if (numberOfImages > 1) {
				slideshowRef.sendToFront($currentImage)
					.show()
					.fadeOut(transitionTime,
						function () {
							diag('Fade out.');
							setTimeout(slideshowRef.autoFadeNext, slideTime);
						});
			}
		}
	};

	slideshowRef.goToPrevious = function () {
		imageToShowIndex = imageToShowIndex == 0 ? numberOfImages - 1 : imageToShowIndex - 1;
		previousImageIndex = imageToShowIndex == 0 ? numberOfImages - 1 : imageToShowIndex - 1;
		nextImageIndex = imageToShowIndex < numberOfImages - 1 ? imageToShowIndex + 1 : 0;

		$imageToBeShown = $($images[imageToShowIndex]);
		$previousImage = $($images[previousImageIndex]);
		if ($previousImage.data('is-delayed') == true) {
			$previousImage.attr('src', $previousImage.data('delayed-image'));
			(new Image()).src = $previousImage.data('delayed-image');
			$previousImage.data('is-delayed', 'false');
			$previousImage.data('delayed-image', '');
		}
		$currentImage = $($images[nextImageIndex]);

		diag('Automatic transition next. Image To Show Index: ' +
			imageToShowIndex +
			', Previous Image Index: ' +
			nextImageIndex);
		slideshowRef.sendBehindFront($imageToBeShown).show();
		slideshowRef.sendToFront($currentImage)
			.show()
			.fadeOut(transitionTime,
				function () {
					diag('Fade out.');
					setTimeout(slideshowRef.autoFadeNext, slideTime);
				});

	};

	this.pause = function () {
		paused = true;
		togglePlayPauseButton();
	}

	this.play = function () {
		paused = false;
		togglePlayPauseButton();
		slideshowRef.autoFadeNext();
	};

	this.togglePause = function () {
		if (paused) {
			this.play();
		} else {
			this.pause();
		}
	};

	function togglePlayPauseButton() {
		if (paused) {
			$('#slideshowPlayIcon').show();
			$('#slideshowPauseIcon').hide();
			$('.bannerSlideshowPlayPause-btn').attr('aria-label', 'Play Slideshow');
		} else {
			$('#slideshowPlayIcon').hide();
			$('#slideshowPauseIcon').show();
			$('.bannerSlideshowPlayPause-btn').attr('aria-label', 'Pause Slideshow');
		}
	}

	this.sendToFront = function ($image) {
		$image.css('z-index', '3');
		return $image;
	};

	this.sendBehindFront = function ($image) {
		$image.css('z-index', '2');
		return $image;
	};

	window.setTimeout(function () {
		slideshowRef.autoFadeNext();
	}, 500);

	if (bannerMode == 'Rotating' && numberOfImages > 1) {
		this.goToNext();
	}

	var disabledNext = false;
	var disabledPrevious = false;
	$('a[id*="arrowNext_"],button[id*="arrowNext_"]').click(function (e) {
		if (disabledNext) {
			e.preventDefault();
			return false;
		}
		slideshowRef.pause();
		slideshowRef.goToNext();
		disabledNext = true;
		setTimeout(function () {
			disabledNext = false;
		}, 1000);
		e.preventDefault();
	});

	$('a[id*="arrowPrev_"],button[id*="arrowPrev_"]').click(function (e) {
		if (disabledPrevious) {
			e.preventDefault();
			return false;
		}
		slideshowRef.pause();
		slideshowRef.goToPrevious();
		disabledPrevious = true;
		setTimeout(function () {
			disabledPrevious = false;
		}, 1000);
		e.preventDefault();
	});
	onLoad = false;
}

//External banner for videos
function renderBannerVideo(bannerPlaceHolderID, bannerSlotID, bannerVideo, videoTag) {
	if (bannerVideo == null)
		return;
	var $bannerSlot = $('#' + bannerSlotID);
	var $bannerPlaceHolder = $('#' + bannerPlaceHolderID);
	var isBackgroundBanner = $bannerSlot.parent().attr("id") == "bodyWrapper" || $bannerSlot.parent().parent().attr("id") == "bodyWrapper";

	var html = '<div class="bannerObject external" id="bannerDiv' + $bannerSlot.attr('id') + '" style="top: 0; left: 0px; right: 0; position: absolute; overflow: hidden; z-index: -999999; padding: 0px;"></div>';
	var $html = $(html);

	// Inserting html elements before resizing because they need to be on DOM beforehand.
	$bannerPlaceHolder.after($html);
	// Workaround. videotag needs to be added with jquery html() function in order to prevent issues with cache JQuery version has
	$bannerPlaceHolder.next().html(videoTag);

	///private function that takes care of resizing for video
	var resize = function ($bannerSlotContainer) {
		var parentHeight = $bannerSlotContainer.parent().outerHeight(true);
		var windowHeight = $(window).height();
		var left = 0;

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		var videoHeight = bannerVideo.VideoHeight;
		var videoWidth = bannerVideo.VideoWidth;
		//by default video will always scale
		var parentWidth = $bannerSlotContainer.outerWidth(true);
		if (isBackgroundBanner) {
			parentHeight = windowHeight;
		}
		var centerValues = centerImage(parentWidth, parentHeight, videoWidth, videoHeight);
		videoWidth = centerValues.imageWidth;
		parentHeight = centerValues.imageHeight;
		left = centerValues.left;

		var $html = $bannerPlaceHolder.next();
		$html.css("left", left);
		$html.find('video').css("width", videoWidth + "px");
		$html.find('img').css("width", videoWidth + "px");
		$html.css("min-height", parentHeight + "px");
	};

	//bind windows resize event if needed
	$(window).unbind('resize.banner' + bannerSlotID);
	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	window.Pages.onResizeHandlers.push(function () {
		resize($bannerSlot);
	});
	//adjust resize first time
	resize($bannerSlot);

	// Pause/Play button event binding

	if (window.FeatureToggles.isActive("CMS.DesignCenter.EnablePauseAndPlayForBannerVideo") && $('button[id*="bannerVideoToggleBtn_"]').length) {
		$('button[id*="bannerVideoToggleBtn_"]').click(function (e) {
			e.preventDefault();
			toggleVideoPlayPause($bannerSlot)
		});
	}

	if (window.FeatureToggles.isActive("CMS.DesignCenter.EnablePauseAndPlayForBannerVideo")){
		$(document).on('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleVideoPlayPause($bannerSlot);
			}
		});
	}
}

function toggleVideoPlayPause($bannerSlot) {
	let playIcon = $("#videoPlayIcon");
	let pauseIcon = $("#videoPauseIcon");
	let iconTitle = $("#videoIconTitle");
	let button = $(".bannerVideoToggle-btn");
	let $bannerObject = $bannerSlot.children('.bannerObject');
	let video = $bannerObject.find('video')[0];
	if (video) {
		if (video.paused) {
			video.play();
			playIcon.hide();
			pauseIcon.show();
			button.attr("aria-label", "Pause Video");
			iconTitle.text("Pause Video");
		} 
		else {
			video.pause();
			playIcon.show();
			pauseIcon.hide();
			button.attr("aria-label", "Play Video");
			iconTitle.text("Play Video");
		}
	}
}

//removes empty feature areas
function removeEmptyFeaturedAreas() {
	$('div[id^="featureArea"]').each(function () {
		if ($(this).html().trim() == "") {
			$(this).parent().css("display", "none");
		}
	});

	$('div[id^="featureContent"]').each(function () {
		if ($(this).html().trim() == "") {
			$(this).css("display", "none");
		}
	});
}

function setWidgetServiceHovering($widgetHeader, bindKeyPress, additionalLogic) {
	if (window.isMobileBrowserIncludingTablets) {
		setWidgetServiceClicking($widgetHeader, bindKeyPress, additionalLogic);
		return;
	}
	var $widgetBody = $widgetHeader.next();
	var $parent = $widgetHeader.parent();
	var timeOutID = null;
	var hideDelay = 400;
	var showDelay = 300;
	$widgetHeader.bind("mouseenter.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			if (!$widgetBody.is(':visible'))
				adjustFlyoutPosition($parent, $widgetBody);
			$widgetBody.show();
			additionalLogic();
		}, showDelay);
	});
	$widgetHeader.bind("mouseleave.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			$widgetBody.hide();
			additionalLogic();
		}, hideDelay);
	});
	$widgetBody.children().bind("mouseenter.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			if (!$widgetBody.is(':visible'))
				adjustFlyoutPosition($parent, $widgetBody);
			$widgetBody.show();
			additionalLogic();
		}, showDelay);
	});
	$widgetBody.children().bind("mouseleave.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			$widgetBody.hide();
			additionalLogic();
		}, hideDelay);
	});

	if (bindKeyPress) {
		$widgetHeader.unbind("keypress").bind("keypress", function (e) {
			if (e.which === 13) {
				$widgetHeader.trigger("mouseenter.services");
			}
		});
	}
}

function setWidgetServiceClicking($widgetHeader, bindKeyPress, additionalLogic) {
	var $widgetBody = $widgetHeader.next();
	var $parent = $widgetHeader.parent();

	var click = function (e) {
		e.stopPropagation();
		e.preventDefault();
		//If the Flyout is for a megamenu, add a class of forMegaMenu.
		if ($widgetHeader.parents('.megaMenu').length > 0)
			$widgetBody.addClass('forMegaMenu');
		if (!$widgetBody.is(':visible'))
			adjustFlyoutPosition($parent, $widgetBody);
		$widgetBody.toggle();
		if (!window.isRemoveSetHeights)
			SetHeights();

		additionalLogic();
	};

	$widgetHeader.unbind("click").bind("click", click);

	if (bindKeyPress) {
		$widgetHeader.unbind("keypress").bind("keypress", function (e) {
			if (e.which === 13) {
				click(e);
			}
		});
	}
}

function setWidgetSearchClicking($widgetHeader) {
	var $widgetBody = $widgetHeader.next();
	$widgetHeader.unbind("click").bind("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
		$widgetBody.toggle();
		if (!window.isRemoveSetHeights)
			SetHeights()
	});
}

//removes empty feature content areas for IE7
function removeEmptyFeaturedAreas() {
	$('div[class^="html5aside"]').each(function () {
		if ($(this).html().trim() === "") {
			$(this).remove();
		}
	});
}

//Usage:  Core.Layout.attachTabbedWidgetTabHandlers();
LayoutClass.prototype.attachTabbedWidgetTabHandlers = function () {
	window.Pages.tabChangeHandlers = window.Pages.tabChangeHandlers || [];

	// Hiding all panels, then showing the first one
	$('.tabbedWidget.cpTabPanel').hide();
	$('.tabbedWidget.cpTabPanel.showing').show();

	$('.tabbedWidget.cpTabs, .tabbedWidgetNarrow.cpTabs').each(function (e) {
		var $tabs = $(this);

		// When a tab is clicked
		$tabs.find('li:not(.newTab) > a').unbind('click').click(function (e) {
			e.preventDefault();
			var $selectedTab = $(this);
			var selectedTabHref = attrOrProps($selectedTab, 'href');
			var hashTabOffset = selectedTabHref.indexOf('#');
			var target = selectedTabHref.slice(hashTabOffset);
			var anchor = this;
			var $target = $('div' + target);
			var $targetli = $selectedTab.parent();
			var isNarrow = $selectedTab.parent().parent().hasClass('tabbedWidgetNarrow');
			var isAccordion = $selectedTab.parent().parent().hasClass('accordion');
			var $parentTab = $selectedTab.parent().parent().parent();
			var tabAriaAttribute = isAccordion ? "aria-expanded" : "aria-selected";

			var showTab = function () {
				$target.addClass('showing').slideDown(function () {
					doAfterSwitchingTabs($target);
					if (document.body.classList.contains("narrow")) {
						anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
					}
				}).css({'overflow': ''});
			}
			// Checking to see if it's showing already
			if (!$target.hasClass('showing') || isAccordion === true) {
				// Making the current tab inactive, and the new one active
				var $widget = $selectedTab.parents('.widget.widgetTabbed');
				
				if(isAccordion === false)
				{
					if ($widget.hasClass('narrow')) {
						$selectedTab.parent().parent().siblings('ol').find('li.active').removeClass('active');
						$selectedTab.parent().parent().siblings('ol').find('a[' + tabAriaAttribute + '="true"]').attr(tabAriaAttribute, "false")
					} else {
						$parentTab.children().first().find('li.active').removeClass('active');
						$parentTab.children().first().find('a[' + tabAriaAttribute + '="true"]').attr(tabAriaAttribute, "false")
					}
				}

				var tabButton = $widget.find('a[href="' + target + '"]');

				if (isNarrow && isAccordion === false) {
					tabButton.attr(tabAriaAttribute, "true");
					tabButton.parent().addClass('active');
				}
				// Hiding the current panel, showing the new one
				if (!isNarrow) {
					tabButton.attr(tabAriaAttribute, "true");
					tabButton.parent().addClass('active');
					$target.siblings('.showing').removeClass('showing').hide();
					$target.addClass('showing').show();
					doAfterSwitchingTabs($target);
				} else {
					if(isAccordion === false)
					{
						$target.siblings('.showing').removeClass('showing').slideUp();
						
						showTab();
					}
					else
					{
						if ($targetli.hasClass('active')) { 
							$targetli.removeClass('active');
							$targetli.find("a").attr(tabAriaAttribute, "false");
						} else {
							$targetli.addClass('active');
							$targetli.find("a").attr(tabAriaAttribute, "true");
						}
						$target.hasClass('showing') ? $target.removeClass('showing').slideUp() : showTab();
					}
				}

				var $arr = ($target).contents().find('.videoPlayer');
				if ($arr.length > 0) {
					($target).contents().find('.videoPlayer').children('iframe').trigger('onload');
				}
			}
			//Checking any on tab change handlers were added
			if (window.Pages.tabChangeHandlers.length > 0) {
				window.Pages.tabChangeHandlers.forEach(function (car) { car(); });
			}
		});
	});

	$('.nextAction.tabName').unbind('click').click(function (e) {
		e.preventDefault();
	});

	$.fn.hasData = function (prop) {
		return this.filter(
			function () { return $(this).data(prop) != null; }
		);
	};

	var doAfterSwitchingTabs = function ($target) {
		fireMediaQueriesIfNeeded($target);
		if (!window.isRemoveSetHeights)
			SetHeights();
	};
};


LayoutClass.prototype.debouncedStyleSheetUpdate = (function () {
	var writeStylesTimeouts = {};
	var DEBUG = false;

	var diag = DEBUG && console && console.log ?
		function (msg) {
			console.log('[Debounced Stylesheet Update] ' + msg);
		}
		: function () { };


	// Original Function We are Debouncing to update stylesheet.
	var updateStylesheet = function (styleSheetID, styles, isEditor) {
		diag('Debounced Call');
		var styleSheet = document.getElementById(styleSheetID);
		isEditor = isEditor === undefined ? false : isEditor;
		if (!isEditor) {
			//Include misc styles from Theme properties.
			if ($('#hdnThemePropertiesMiscStyles').length > 0 && $('#hdnThemePropertiesMiscStyles').html() != '')
				styles += $('#hdnThemePropertiesMiscStyles').html();
		}
		if (styleSheet == null) {
			styleSheet = document.createElement('style');
			styleSheet.id = styleSheetID;
			styleSheet.setAttribute('type', 'text/css');
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(styleSheet);
		}
		if (styleSheet.styleSheet) {
			styleSheet.styleSheet.cssText = styles; //IE only
		} else {
			styleSheet.innerHTML = styles;
		}
	};

	return function (styleSheetID, styles) {
		diag('Bounce Call');
		if (writeStylesTimeouts[styleSheetID]) {
			clearTimeout(writeStylesTimeouts[styleSheetID]);
		}
		writeStylesTimeouts[styleSheetID] = setTimeout(function () { updateStylesheet(styleSheetID, styles); }, 100);
	};
}());

LayoutClass.prototype.updateStylesheet = function (styleSheetID, styles) {
	this.debouncedStyleSheetUpdate(styleSheetID, styles);
};

//Usage:  Core.Layout.toggleFeatureColumn();
LayoutClass.prototype.toggleFeatureColumn = function () {
	if ($('#pageShowFeatureColumn').val() == 'True') {
		$('body').addClass('withFeatureColumn');
		$('#featureColumn').show();
	} else {
		$('body').removeClass('withFeatureColumn');
		$('#featureColumn').hide();
	}

	if (typeof SetHeights == 'function' && !window.isRemoveSetHeights) {
		SetHeights();
	}
};

//Usage:  Core.Layout.stretchContainers(containerSelectors);
LayoutClass.prototype.stretchContainers = function (containerSelectors) {
	this.unstretchContainers(containerSelectors);
	$(containerSelectors).each(function () {
		var $container = $(this);
		var height = $container.outerHeight();
		$container.siblings().each(function () {
			var $sibling = $(this);
			if ($sibling.css('float') != 'none') {
				var siblingHeight = $sibling.outerHeight();
				height = siblingHeight > height ? siblingHeight : height;
			}
		});
		if (height >= ($container.outerHeight())) {

			var desiredContainerHeight = height;
			var $innermostWrapper = $container;

			//The paddings of the container itself needs to be considered as well since we allow for paddings on the structural containers too. 
			//This fixes the height issues we have been having with several sites(neighboring containers dont match height) Vishal
			var $wrappers = $innermostWrapper;

			while ($innermostWrapper.children('.inner').length) {
				$wrappers = $wrappers.add($innermostWrapper.children('.inner'));
				$innermostWrapper = $innermostWrapper.children('.inner');
			}

			var paddingHeight = 0;

			$wrappers.each(function () {
				$this = $(this);
				paddingHeight += parseFloat($this.css('paddingTop')) + parseFloat($this.css('paddingBottom')) + parseFloat($this.css('borderBottomWidth')) + parseFloat($this.css('borderTopWidth'));
			});

			var calculatedHeight = desiredContainerHeight - paddingHeight;
			var heightString = calculatedHeight.toString() + 'px';
			$innermostWrapper.css('min-height', heightString);
		}
	});

	setTimeout(function () {
		if (!window.isRemoveSetHeights)
			SetHeights();
	}, 8000);
};

//Usage:  Core.Layout.unstretchContainers(containerSelectors);
LayoutClass.prototype.unstretchContainers = function (containerSelectors) {
	$(containerSelectors).each(function () {
		var $container = $(this);
		$container.css('min-height', '0');
		$('.inner', $container).css('min-height', '0');
	});
};

//Usage:  Core.Layout.dynamicJavascript(javaScriptCode);
LayoutClass.prototype.dynamicJavascript = function (javaScriptCode) {
	var code = javaScriptCode.replace(/\\'/g, "'").replace(/\\\"/g, "\"").replace(/\\\t/g, "\t").replace(/\\\r/g, "\r").replace(/\\\n/g, "\n").replace(/\\\f/g, "\f").replace(/\\\\/g, "\\");
	var myFucn = new Function(code);
	myFucn();
};

//Usage:  Core.Layout.setColumnWidth($widget);
LayoutClass.prototype.setColumnWidth = function ($widget) {
	var width = $('input.auto.update.widgetOption.common[name=WidgetWidth]').val();
	$widget.closest('div.outer.col').css('width', width ? width + '%' : "");
};

function LayoutClass() {
	this.filter = null;
}

if (!window.Core.Layout) {
	window.Core.Layout = new LayoutClass();
}
// Handles polling login status after ajax requests lazily, and notifying the user if they should be notified.
//  The whole intention of this block of code is to alert the user they aren't logged in after executing an AJAX request 
//  without colliding with other AJAX requests or affecting user experience. This is only done if the user is initially logged in.
$(function () {
	var DEBUG = false;

	var diag = function (msg) {
		if (DEBUG) {
			console.log("[Send User Home If Logged Out] " + msg);
		}
	};

	// We want to be able to start/load this at a specific time (after all of the initial ajax calls complete) so I wrapped it in a function.
	var isLoggedInModule = function () {
		"use strict";
		diag('Initializing Send User Home If Logged Out module.');
		var ns = this;
		var notLoggedInMessage = 'You are no longer logged in. Please login to continue.';
		var loginCheckPending = false;

		ns.initiallyLoggedInWithLiveEdit = $('[href="#liveEditMenu"]').hasClass('on');

		if (!ns.initiallyLoggedInWithLiveEdit) {
			diag('Initialization Stopped - Not initially logged in with Live Edit On.');
			return; // We don't need to notify them they aren't logged in, if they aren't logged in initially.
		}

		$.ajaxSetup({
			beforeSend: function () {
				ns.isAjaxOccuring = true;
			},
			complete: function () {
				diag('Ajax Call Completed (hook) - ' + (loginCheckPending ? 'Login Check is Pending.' : 'Login Check is not already Pending.'));
				ns.isAjaxOccuring = false;
				// If an ajax call is already occuring wait until it is finished. We don't want to affect the user experience with normal AJAX calls.
				if (!loginCheckPending) {
					lazyExecute(
						alertIfUserNotLoggedIn,
						function () { return !ns.isAjaxOccuring; },
						2000
					);
				}
			}
		});

		// Executes a function based on a condition lazily, checking a given predicate at a set interval. 
		var lazyExecute = function (fn, executeWhenPredicate, pollingTime) {
			diag('Lazy Execution Triggered.');
			loginCheckPending = true;
			var intervalExecuter = null;
			var internalHandler = function () {
				diag('Attempting to execute login check.');
				if (executeWhenPredicate()) {
					fn();
					clearInterval(intervalExecuter);
					diag('Login check is no longer pending. Login check invoked.');
					loginCheckPending = false;
				} else {
					diag('AJAX request in progress. Trying again in a short bit.');
				}
			};

			intervalExecuter = setInterval(internalHandler, pollingTime);
		}

		var alertIfUserNotLoggedIn = function () {
			if (!isUserLoggedIn()) {
				alert('You are no longer logged in. Please login to continue.');
				location.href = '/myaccount?from=url&url=' + window.location.pathname;
			}
		}
	}

	// We don't need to start checking if the user is logged in until after everything is probably loaded. I went with 10 seconds
	setTimeout(isLoggedInModule, 6000);
});

//Begin Authentication
if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.host;
}

function popupSignIn(redirectUrl, parameterSet, jsCallback) {
	var popupBasedAuthenticationJs = new PopupBasedAuthentication();

	popupBasedAuthenticationJs.setupJsCallback(jsCallback);
	popupBasedAuthenticationJs.requireLoggedIn(redirectUrl, parameterSet);
};

function internetExplorerMessagingHandlerForPopup(data) {
	var popupBasedAuthenticationJs = new PopupBasedAuthentication();
	popupBasedAuthenticationJs.internetExplorerMessageHandling(data);
};

///Matches the rest of the tab's height with the highest tab in a tabbed widget.
function setTabbedWidgetsTabHeight(tabWrapperID) {
	if (tabWrapperID == null || typeof tabWrapperID == 'undefined') {
		$('.tabbedWidget.cpTabs').not('.left,.right').each(function (e) {
			var $this = $(this);
			$this.find('li').each(function () {
				var $thisLi = $(this);
				if ($thisLi.css('height') != '0px')
					$thisLi.find('a').css('height', $thisLi.css('height'));
			})
		});
	}
	else {
		var $wrapper = $('#' + tabWrapperID);
		$wrapper.find('ol.tabbedWidget.cpTabs').not('.left,.right').find('li').each(function () {
			var $thisLi = $(this);
			if (!$thisLi.is(':hidden')) {
				if ($thisLi.css('height') != '0px')
					$thisLi.find('a').css('height', $thisLi.css('height'));
			}
		});
	}
}

var internetExplorerVersion = (function () {
	var undef;

	var agent = navigator.userAgent;
	var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
	var matches = agent.match(reg);
	if (matches != null) {
		return matches[1];
	}
	return undef;
}());
//End authentication

/********************************************************************************
Logic for moving mega menus in DOM and updating their attributes.
/*******************************************************************************/
function moveMegaMenusInDOM(data) {
	//Grab all the flyouts that are not moved yet and are not tooltips and not in WidgetManager
	var $megaMenus = $('.megaMenuContainer').not('.moved');
	var $megaMenusAlreadyMoved = $('.megaMenuContainer.moved');

	var parentID;
	var marginLeft, marginTop;
	$megaMenus.each(function (e) {
		$(this).appendTo('body');
		$(this).addClass('moved').addClass('megaMenu');
		$(this).css('position', 'absolute');
		$(this).css('z-index', '100');
		updateMegaMenuAttributes($(this), data);
	});
	$megaMenusAlreadyMoved.each(function (e) {
		updateMegaMenuAttributes($(this), data);
	});
}

function updateMegaMenusOnBrowserResize() {
	var $megaMenus = $('.megaMenuContainer');
	$megaMenus.each(function () {
		updateMegaMenuAttributes($(this));
	});
}

function updateMegaMenuAttributes($this, data) {
	//Enums
	var MegaMenuWidthReferenceEnum = { MainNavigation: 0, SitesContent: 1 };
	var MegaMenuPopupDirectionEnum = { Below: 0, Above: 1 };
	var widthReference = $('#megaMenuWidthReference').val();
	var direction = $('#megaMenuPopupDirection').val();

	//If data has been provded, use it!.
	if (data != null) {
		if (data.widthReference != null)
			widthReference = data.widthReference;
		if (data.direction != null)
			direction = data.direction;
	}

	//Get the main nav.
	var $mainNav = $('.siteNav.mainNav');
	//Get the closest parent having a siteWrap class.
	var $siteWrap = $mainNav.closest('.siteWrap');

	var $referenceElem = null;
	if (widthReference == MegaMenuWidthReferenceEnum.MainNavigation)
		$referenceElem = $mainNav;
	else
		$referenceElem = $siteWrap;

	if ($referenceElem != null && $referenceElem.length > 0) {
		//Set left position of megamenu
		$this.css('left', $referenceElem.offset().left + parseFloat($referenceElem.css('padding-left')));
		//Set width of megamenu
		$this.css('width', $referenceElem.width());
	}
	if (direction == null || direction == MegaMenuPopupDirectionEnum.Below) {
		//Set top position of megamenu. 
		//NOTE: Even if the widthReference is set to SitesContent, the top position is calculated always using siteNav.mainNav since thats where the megamenu needs to be displayed. 
		//The siteWrap is some scenarios contains all the content pushing the megamnus to show even below the footer. Vishal
		$this.css('top', $mainNav.offset().top + $mainNav.height());
	}
	else {
		//Set top position of megamenu
		$this.css('top', '-' + ($this.height() - $('#divToolbars').height()) + 'px');
	}
}

function adjustMegaMenuDisplay(widthReference, direction) {
	var $megaMenu = $('#sampleMegaMenu');
	updateMegaMenuAttributes($megaMenu, { widthReference: widthReference, direction: direction });
}
/********************************************************************************
Logic for moving mega menus in DOM and updating their attributes.
/*******************************************************************************/

/***********************************************************************************************************
Common editor rendering functions used in multiple widgets(editor and InfoAdvanced so far)
/**********************************************************************************************************/
function renderSlideshowIfApplicable($element) {
	var $slideshow = $element.find('.cpSlideshowImages');
	$slideshow.each(function (e) {
		var $this = $(this);
		var imgWidth = $this.attr('data-width');
		var className = $this.attr('class');
		var id = $this.attr('id');
		var html = getSlideshowContent(id);

		$this.replaceWith(html);

		// Froala specific data
		//Add froala related classes and image attributes only after html is replaced.
		if (className.indexOf('fr-') > -1) {
			var inlineStyles = $this.attr("style");
			var $images = $('.cpSlideshowJS' + id + ' img[data-delayed-image]');
			$images.each(function (index) {
				var $image = $(this);
				$image.attr("style", inlineStyles);
			});

			// In-line and block classes
			if (this.classList.contains('fr-dib'))
				$('.cpSlideshowJS' + id).addClass('fr-dib');
			else if (this.classList.contains('fr-dii'))
				$('.cpSlideshowJS' + id).addClass('fr-dii');
			// Alignment classes
			if (this.classList.contains('fr-fil'))
				$('.cpSlideshowJS' + id).addClass('fr-fil');
			else if (this.classList.contains('fr-fir'))
				$('.cpSlideshowJS' + id).addClass('fr-fir');
		}

		//If the slideshow has an alignment set in the editor, that alignment needs to be applied to the ol surrounding the images in slideshow.
		if (className.indexOf('float') > 0) {
			var applyClass = '';
			switch (className) {
				case 'cpSlideshowImages floatRight':
					applyClass = 'floatRight';
					break;
				case 'cpSlideshowImages floatLeft':
					applyClass = 'floatLeft';
					break;
				case 'cpSlideshowImages floatCenter':
					applyClass = 'floatCenter';
					break;
				case 'cpSlideshowImages floatJustify':
					applyClass = 'floatJustify';
					break;
			}
			$('.cpSlideshowJS' + id).addClass(applyClass);
		}

		// Changing the container size for an inline slideshow
		var $container = $('#divSlideshow' + id);
		var hasDii = $container.hasClass('fr-dii');
		var hasFil = $container.hasClass('fr-fil');
		var hasFir = $container.hasClass('fr-fir');

		if (hasDii && (hasFil || hasFir || (!hasFil && !hasFir))) {
			$container.css('width', imgWidth);
			$container.css('margin-right', '5px 5px 5px 0px');
		}
	});
}

function getSlideshowContent(slideshowID) {
	var slideshowHtml = '';
	$.ajax({
		url: location.protocol + '//' + window.location.hostname + '/Slideshow/Render/' + slideshowID,
		type: 'POST',
		cache: false,
		async: false,
		success: function (response) {
			slideshowHtml = response;
		},
		error: function (xhr, textStatus, exception) {
			alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
		}
	});
	return slideshowHtml;
}
/*****************************************************************************************************************
Common editor rendering functions used in multiple widgets(editor and InfoAdvanced so far) Ends
/****************************************************************************************************************/

///Gets absolute Url when given a relative Url. Useful for certain scenarios where http call is made under https hood and it fails.
function getAbsoluteUrl(relativeUrl) {
	var myAccount = $('#MyAccountLoginPage').val();

	if (myAccount != null && myAccount.toLowerCase() == "true") {
		var basePath = location.protocol + '//' + location.hostname + (typeof (location.port) !== 'undefined' && location.port != '' && location.port != '80' ? ':' + location.port : '');
		return basePath + relativeUrl;
	}

	return relativeUrl;
}

function fireMediaQueriesIfNeeded($parent) {
	if (window.cpMedia) {
		fireMediaElementQueriesOfChildren($parent);
	}
}

function loadMaps() {
	downloadGoogleMapsCustomScript();
}

function googleMapsCustomScriptDownloaded() {
	$('.googleMap').each(function (index, item) {
		new CivicPlus.Maps().LoadMap(item);
	});
}

function downloadGoogleMapsCustomScript() {
	if (typeof (CivicPlus) !== 'undefined')
		CivicPlus.Maps = {};
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (script.readyState) {  //IE
		script.onreadystatechange = function () {
			if (script.readyState === "loaded" || script.readyState === "complete") {
				script.onreadystatechange = null;
				if (window.googleMapsMode !== 2)//dynamic but lazy loaded
					googleMapsCustomScriptDownloaded();
			}
		};
	} else {  //Others
		script.onload = function () {
			if (window.googleMapsMode !== 2)//dynamic but lazy loaded
				googleMapsCustomScriptDownloaded();
		};
	}

	script.src = '/Assets/Scripts/GoogleMaps.js';
	document.getElementsByTagName("head")[0].appendChild(script);
}

function loadGoogleMapsScript(mode, callback) {
	var script;
	window.googleMapsMode = mode;
	if ($('div.widgetStaffDirectory').length > 0 || $('.DirectoryNormalText .mapWrap .googleMap').length > 0) {
		if ($('#GoogleMapsJS').length == 0) {
			script = document.createElement('script');
			var key = document.getElementById('GoogleMapsKey').value;
			script.id = 'GoogleMapsJS';
			script.type = 'text/javascript';
			if (key != null) {
				script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=' + key + '&callback=';
			}
			else {
				script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=';
			}
			script.src += mode !== 2 ? callback : 'downloadGoogleMapsCustomScript';
			document.body.appendChild(script);
		} else {
			if (window.google && window.google.maps) {
				loadMaps();
			}
		}
	}
}
$(window).on("load", function () {
	if (typeof targetHash !== "undefined" && targetHash) {
		smoothScroll(targetHash);
	}

	$("a[href*='#']:not(a[href^='/#'], [href='#'])").click(function () {
		var $this = $(this)[0];
		if (hashRegex.test($this.hash)) {
			if ($this.target !== '_blank') {
				if (location.pathname
					.replace(/^\//, '') ===
					this.pathname.replace(/^\//, '') &&
					location.hostname === this.hostname) {
					return smoothScroll(this.hash);
				}
			}
		}
	});
	if (window.location && window.location.hash && $(window.location.hash.replace('/', '\\/')).offset()) {
		setTimeout(function () {
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top - calculateTotalFixedHeight()
			}, 300);
		}, 2000);
	}
});
//Calculates the total fixed length
function calculateTotalFixedHeight() {
	var totalHeight = 0;

	if ($('.fixedTop_ts').height()) {
		totalHeight += $('.fixedTop_ts').height();
	}
	if ($('#divToolbars').height()) {
		totalHeight += $('#divToolbars').height();
	}
	if ($('div.cp-Toolbars').height()) {
		totalHeight += $('div.cp-Toolbars').height();
	}
	if ($('.stickyStructuralContainer').height()) {
		totalHeight += $('.stickyStructuralContainer').height();
	}

	return totalHeight;
}

function smoothScroll(hash) {
	var target = $(hash);
	target = target.length ? target : $('[name=' + hash.slice(1) + ']');
	if (!target.length) {
		return false;
	}
	var speed = target[0].getAttribute('data-smoothscrolling') ? 1333 : 1;
	$('html, body').animate({
		scrollTop: target.offset().top - ($('#divToolbars').height() + $('div.cp-Toolbars').height())
	}, speed);
	window.location.hash = ''; // Fixes chrome focus bug
	window.location.hash = hash;
	return false;
}

function hideLiveEditElement(target) {
	target.addClass('hide');
	setTimeout(function () {
		target.hide();
	}, 666);
}

function showLiveEditElement(target) {
	target.show();
	setTimeout(function () {
		target.removeClass('hide');
	}, 1);
}

function redrawContextualInnerToolbar(pageID, versionID) {
	if (versionID > 0) {
		var url = '/Pages/Toolbar/Contextual?pageID=' + pageID + '&versionID=' + versionID;
		$.ajax({
			url: url,
			type: 'GET',
			cache: false,
			success: function (response) {
				$('#informativeToolBar').remove();
				var $toolbar = $('#innerToolbar');
				if ($toolbar.length > 0) {
					$toolbar.replaceWith(response);
				} else {
					$('#divToolbars').append(response);
				}
				var toolbarHeight = $('#divToolbars').height() + 'px';
				$('#bodyWrapper').css('padding-top', toolbarHeight);
				if (window.liveEditTabs != null && typeof (window.liveEditTabs.updateMaxHeightTabs) == "function")
					window.liveEditTabs.updateMaxHeightTabs();
				InitializeToolbar();
				if (window.Toolbars && window.Toolbars.ContextualToolbar) {
					$(window.Toolbars.ContextualToolbar).trigger('Loaded');
				}
				$('.widgetSpacer').each(function () {
					var $this = $(this);
					if (!$this.hasClass('adminWrap')) {
						$this.addClass('adminWrap');
					}
				});
			},
			error: function (xhr, textStatus, exception) {
				if (xhr.status !== 0 && xhr.readyState !== 0)
					alert('Error: ' + xhr.statusText + '\nStatus: ' + xhr.status);
			}
		});
	}
}

function InitializeToolbar() {
	$('#lnkVersionSaveAsCopy', '#ulVersionToolBar').unbind('click').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('inactive')) {
			SaveAsCopy();
		}
	});
	$('#lnkVersionCancel', '#ulVersionToolBar').unbind('click').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('inactive')) {
			AbandonWorkingCopy();
		}
	});
	$('#layoutPageSelector', "#LayoutToolBar").unbind('change').change(function () {
		window.location.href = "/" + $(this).val();
	});
}

function triggerStickyStructuralInitLogic() {
	setTimeout(function () {
		new StickyStructuralContainers().init();
	}, 666);
}

//Function to toggle for widget link.
function toggleWidgetsLink(isEnabled) {
	var widgetLink = $('#innerLnkwidgets');

	if (widgetLink) {
		if (isEnabled) {
			widgetLink.prop('disabled', false).removeClass('cp-modificationProhibited');
			widgetLink[0].href = '#liveEditTab_widgets';
			addClassToWidgets(true);
		}
		else {
			widgetLink.prop('disabled', true).addClass('cp-modificationProhibited');
			widgetLink[0].href = '#';
			addClassToWidgets(false);
		}
	}
}

//Function to show/hide widget disabled popup.
function showWidgetDisabledPopUp() {
	var options = {
		title: 'Widget Edit',
		elementID: 'widgetDisabledPopup',
		autoAdjust: false,
		className: 'adminWrap accountActivation widgetPopUp popup-position',
		isFrontEnd: false,
		htmlContent: '<div class="modalScreen socialSignIn"><p>To modify this content, you\'ll have to create a copy of the page first.</p><p><a class="widget-disable socialButton twitter toTwitterPageSelect pageCopyEditWidgetModal cursor-pointer"><span class="socialButton-override">Copy Page</span></a><a class="widget-disable socialButton twitter toTwitterPageSelect closeEditWidgetModal cursor-pointer" style="padding-left:20px;"><span class="socialButton-override">Cancel</span></a></p></div>',
		draggable: true
	}

	openCpModal(options);
}

//Function to save page copy.
function savePageCopy() {
	SaveAsCopy();
	closeModal();
}

//Function to close the modal
function closeModal() {
	hideModal('.modalContainer.modalContainerCP');
}

//Function to add class to widgets
function addClassToWidgets(isEnabled) {
	var pageContent = $('.pageContent div');
	$.each(pageContent, function (index, item) {
		if (isEnabled) {
			$(item).removeClass('cp-modificationProhibited');
		}
		else {
			$(item).addClass('cp-modificationProhibited');
		}
	});
};
/**** Functions to handle Main/Left Menu on Front-end. *****/
//Global variables
var MAIN_MENU = 2;
var SIDE_MENU = 1;
var menuManager = new MenuManager();

//setup RWD menu
window.Pages = window.Pages || {};
$.when(window.Pages.rwdReady, menuManager.mainMenuReady).done(function () {
	menuManager.initRWD();
	var isLoggedBackendUser = $('#helpMenu').length == 1;
	var mql = matchMedia(window.mainMenuMediaQuery);
	var isFirstTimeRun = true;
	var executeOnce = function () {
		fireAllMediaElementQueries();
		if (typeof rearrangeFlyouts === 'function')
			rearrangeFlyouts(false);
		window.Pages.onResizeHandlersExecute();
		window.Pages.toolBarDeferred.resolve();
	};
	if (!mql.matches) {
		executeOnce();
		isFirstTimeRun = false;
	}
	cpMedia.register(window.mainMenuMediaQuery, {
		setup: function () {
			if (isLoggedBackendUser)
				$('div.cpToolbar.user').removeClass('public').addClass('admin adminWrap');
		},
		match: function () {
			$('body').addClass('narrow').removeClass('wide');
			if (isLoggedBackendUser)
				$('div.cpToolbar.user').removeClass('admin adminWrap').addClass('public');
			menuManager.moveToMobile();
			resetBodyPadding && resetBodyPadding();
			if (isFirstTimeRun) {
				executeOnce();
			}
			isFirstTimeRun = false;
		},
		unmatch: function () {
			$('body').addClass('wide').removeClass('narrow');
			if (isLoggedBackendUser)
				$('div.cpToolbar.user').removeClass('public').addClass('admin adminWrap');
			menuManager.moveToDesktop();
		}
	});
});

//Defines menu class to handle Main/Left Menu on Front-end.
function MenuManager() {
	//object variables
	this.$divListSubMenus = null; //hide div where submenus are be placed.
	//this.$containerSubMenus = $('#containerSubMenus'); ; //no hidden div to hold the submenus of main menu being displayed. Workaround to solve z-index issues. could be removed along with its related code after redo layout project!
	this.menuTimeoutID = null;
	this.mainMenuMaxSubMenuLevels = 0;
	this.sideMenuMaxSubMenuLevels = 0;
	this.popdownDelaySideMenu = 500;
	this.popdownDelayTopMenu = 500;
	this.popupDelaySideMenu = 300;
	this.popupDelayTopMenu = 300;
	this.isMainMenuEditable = false;
	this.isMainMenuBeingDragged = false;
	this.isSideMenuEditable = false;
	this.isSideMenuBeingDragged = false;
	this.sideMenuHasCustomLinks = false;
	this.bouncing = true;
	this.initialized = false;
	this.setupDraggable = false;
	this.mobileMainNav = false;
	this.mainMenuInit = false;
	this.mainMenuReady = $.Deferred();
	this.$mainNavHolderMobile = null;
	this.$mainNav = null;
	this.$mainNavMenu = null;
	this.rwdInitNavOpenButton = false;
	this.mainMenuTextResizer = false;
	this.mainMenuTextResizerRatio = 0.5;
	this.isAdjustingMainMenuItemsWidth = false;

	//Initialize menu manger after document was load
	this.init = function () {
		var self = this; // Reference to current object
		if (!self.initialized) {
			self.initialized = true;
			this.resetSubMenus();

			// Hide all submenus after clicking any menu item
			$('li.subMenuItem > a.navMenuItem, li.topMenuItem > a.navMainItem').on("click", function () {
				menuManager.hideAllSubMenus(MAIN_MENU);
				menuManager.hideAllSubMenus(SIDE_MENU);
			});

			// Hide all submenus when the Escape key is pressed
			document.addEventListener('keydown', function(event) {
				if (event.key === "Escape") {
					if (!document.activeElement.closest('#secondaryNav, #mainNav, .mainNavMegaMenu, .secondarySubMenu')) {
						return;
					}

					// Keep track of the previously focused element
					let menuButton = null;
					const previouslyFocusedElement = document.activeElement;

					// If the previously focused element happens to be a menu item within the menu that is about to be closed,
					// then find its corresponding main-nav menu-button
					const menuContainer = previouslyFocusedElement.closest("aside[id^='mainNavMegaMenu'], ol[id^='ParentMainItem']");
					if (menuContainer) {
						const itemID = menuContainer.id.match(/\d+$/)?.[0];
						menuButton = findMainNavButton(itemID);
					}

					// Hide the mega menus
					menuManager.hideAllSubMenus(MAIN_MENU);
					menuManager.hideAllSubMenus(SIDE_MENU);

					// Return focus to the button that opened the closed menu, if applicable
					if (menuButton) {
						menuButton.focus();
						return;
					}
				}
			});

			/*
				Recursively traverses the menu hierarchy to find the main navigation button corresponding to a given menu item ID.

				@param {string} itemID - The ID of the menu item to find the button for.
				@returns {HTMLElement|null} - The main navigation button element, or null if not found.
			*/
			function findMainNavButton(itemID) {
				const menuItem = document.querySelector(`#MainItem${itemID}`);
				const parent = menuItem && menuItem.closest("ol[id^='ParentMainItem']");
				const parentID = parent && parent.id.match(/\d+$/)?.[0];

				if (parentID) {
					return findMainNavButton(parentID);
				} else {
					return menuItem.querySelector('a');
				}
			}
		}
		if (self.setupDraggable)
			self.attachDragAndDropHandlers();
	};

	this.initRWD = function () {
		var self = this; // Reference to current object
		self.$mainNavHolderMobile = $("#mainNavHolderMobile");
		self.$mainNav = $("#mainNav");
		self.$mainNavMenu = $("#mainNavMenu");
		if (self.isAdjustingMainMenuItemsWidth) {
			self.resetMainItemsWidth("#mainNavMenu");
			self.adjustMainItemsWidth("#mainNavMenu");
		}
		if (self.mainMenuTextResizer)
			self.$mainNavMenu.responsiveMenuText({ ratio: self.mainMenuTextResizerRatio });
	};

	this.resetSubMenus = function () {
		var self = this; // Reference to current object
		if (self.$divListSubMenus != null)
			self.$divListSubMenus.remove();
		var $divListSubMenus = $('<div id="divListSubMenus" style="display:block; visibility:hidden; position:absolute; left:-9999px; top:-9999px;" class="siteNav"></div>');
		//Trick to get width from hidden elements needed to calculate bouncing. If above styles creates problems use hack from http://stackoverflow.com/questions/1472303/jquery-get-width-of-element-when-not-visible-display-none
		var docFrag = $(document.createDocumentFragment());
		docFrag[0].appendChild($divListSubMenus[0].cloneNode(true));
		self.$divListSubMenus = docFrag.children();
		$divListSubMenus.remove();
	};

	/*var $body = $("body");
	this.isNarrowSite = function () {
		//return $body.hasClass("narrow");
		return true;
	};*/
}

MenuManager.prototype.moveToMobile = function () {
	var menusToClose = document.getElementsByClassName("megaMenuContainer");
	for (i = 0; i < menusToClose.length; i++) {
		menusToClose[i].style.display = "none";
	}

	var self = this; // Reference to current object
	if (!self.mobileMainNav) {
		self.mobileMainNav = true;
		if (self.mainMenuTextResizer && self.$mainNavMenu.data('responsiveMenuText'))
			self.$mainNavMenu.responsiveMenuText('dispose');
		if ($("#nav-open-btn").length === 0) {
			$('#divToolbars').append($('<a class="nav-btn" id="nav-open-btn" href="#nav" aria-haspopup="true" role="menu">Menu</a>'));
			self.applyResponsiveMenuSettings();
			self.initNavOpenButton();
		}
		self.$mainNav.before($('<div id="mainNavOriginalPosition" style="display:none;"></div>'));
		self.$mainNavHolderMobile.append(self.$mainNav);
		self.$mainNavMenu.wrap('<div id="rwd-menu" class="rwd-menuwrapper">');
		self.$mainNavMenu.attr('aria-hidden', 'true');
		var $menu = $('#rwd-menu');

		$menu.rwdmenu();

		$menu.onclick = function () { };

		if (self.isAdjustingMainMenuItemsWidth)
			self.resetMainItemsWidth("#mainNavMenu");
	}
};

MenuManager.prototype.applyResponsiveMenuSettings = function () {
	var signInBar = $('.cpToolbar.user.public');
	var adminToolbar = $('.cp-Admin-Legacy-Toolbar');
	var alertBar = $('.alertToolbar');
	var navButton = $("#nav-open-btn");
	var fullWidth = window.fullWidthResponsiveMenu;
	var fixedMenu = window.fixedResponsiveMenu;

	var responsiveMenuButtonHeight = window.responsiveMenuHeight !== '' ? window.responsiveMenuHeight : "34";
	var responsiveMenuButtonHeightWithPx = "";
	if (responsiveMenuButtonHeight.indexOf('px') === -1) responsiveMenuButtonHeightWithPx = responsiveMenuButtonHeight + 'px';

	if (responsiveMenuButtonHeight > 34) //dont assign any inline styles if height < 34
	{
		responsiveMenuButtonHeight -= (signInBar.length && 8);
		var responsiveMenuButtonHeightNavbtnWithpx = "";
		if (responsiveMenuButtonHeight.toString().indexOf('px') === -1) responsiveMenuButtonHeightNavbtnWithpx = responsiveMenuButtonHeight + 'px';

		// Set the button height
		if (responsiveMenuButtonHeight !== "px") navButton.css("height", responsiveMenuButtonHeightNavbtnWithpx).css("line-height", responsiveMenuButtonHeightNavbtnWithpx);
	}

	var responsiveMenuFontSize = window.responsiveMenuFontSize;
	if (responsiveMenuFontSize.indexOf('px') === -1) responsiveMenuFontSize += 'px';
	// Set the button font-size
	if (responsiveMenuFontSize !== 'px') navButton.css('font-size', responsiveMenuFontSize);

	if ((fullWidth || alertBar.length) && !signInBar.length) {
		// Apply styles for the full-width button
		navButton.css("right", "0");
		navButton.css("bottom", "auto");
	}

	// Special case: Forces full-width in order to avoid empty gap on right side of hamburger menu - see bug https://civicplus.tpondemand.com/entity/77390-an-extra-spacing-appears-below-the
	if (!fixedMenu && !fullWidth && !alertBar.length && !signInBar.length) {
		// Apply styles for the full-width button
		navButton.css("right", "0");
		navButton.css("bottom", "auto");
	}
	if (adminToolbar && adminToolbar.length != 0) {
		navButton.css("margin-top", "71px");
	}
	if (signInBar.length) {
		// Fix sign in bar height
		signInBar.css("height", responsiveMenuButtonHeightWithPx);

		// Fix sign in button height
		signInBar.find(".button").css("height", responsiveMenuButtonHeightWithPx).css("line-height", responsiveMenuButtonHeightWithPx);

		if (window.fixedResponsiveMenu && $('#nav-open-btn').length) {
			$('.cpToolbar.user.public').css("z-index" , "101");
		}
	}

	if (fixedMenu) {
		// Move the menu button and menu to #outer-wrap (outside of transform)
		$("#nav-open-btn, #mainNavHolderMobile").appendTo("#outer-wrap");

		// Make fixed
		navButton.css("position", "fixed");

		// Prevent overlapping in the menu
		$("#mainNavHolderMobile").css("position", "fixed").css("top", responsiveMenuButtonHeightWithPx).css("left", "0").css("right", "0").css("bottom", "0");

		// Remove main nav transform, fix z-index issues
		$("<style>.js-navopen #mainNav { transform: none; } .mainNavHolderMobile{ z-index: -1;}.js-navopen .mainNavHolderMobile{z-index: 1;}</style>").appendTo("body");

		// Prevent overflow of the menu
		$("#mainNav").css("overflow-y", "auto");

		if (signInBar.length) {
			// Move the sign in bar to #outer-wrap (outside of transform)
			signInBar.appendTo("#outer-wrap");
			signInBar.css("top", "0").css("left", "0").css("right", "0").css("position", "fixed");
		}

		if (fullWidth || signInBar.length || alertBar.length) {
			// Add padding-top to #outer-wrap (prevent the button/sign in bar from overlapping stuff)
			$("#outer-wrap").css("padding-top", responsiveMenuButtonHeightWithPx);
		}
	}
};

MenuManager.prototype.moveToDesktop = function () {
	var self = this; // Reference to current object
	if (self.mobileMainNav) {
		self.mobileMainNav = false;
		$("#mainNavOriginalPosition").replaceWith(self.$mainNav);
		self.$mainNavMenu.unwrap().rwdmenu('destroy');
		if (self.isAdjustingMainMenuItemsWidth)
			self.adjustMainItemsWidth("#mainNavMenu");
		if (self.mainMenuTextResizer)
			self.$mainNavMenu.responsiveMenuText({ ratio: self.mainMenuTextResizerRatio });
		self.$mainNavMenu.attr('aria-hidden', 'false');
		self.$mainNav.css("overflow-y", "");
	}
};

MenuManager.prototype.initNavOpenButton = function () {
	var self = this; // Reference to current object
	if (self.rwdInitNavOpenButton)
		return;
	self.rwdInitNavOpenButton = true;

	var trim = function (str) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	};

	var hasClass = function (el, cn) {
		return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
	};

	var addClass = function (el, cn) {
		if (!hasClass(el, cn)) {
			el.className = (el.className === '') ? cn : el.className + ' ' + cn;
		}
	};

	var removeClass = function (el, cn) {
		el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
	};

	var hasParent = function (el, id) {
		if (el) {
			do {
				if (el.id === id) {
					return true;
				}
				if (el.nodeType === 9) {
					break;
				}
			}
			while ((el = el.parentNode));
		}
		return false;
	};

	var doc = document.documentElement;

	var transform_prop = window.Modernizr.prefixed('transform'),
		transition_prop = window.Modernizr.prefixed('transition'),
		transition_end = (function () {
			var props = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd otransitionend',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			};
			return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
		})();

	var inner = $("#inner-wrap")[0];
	var nav_open = false;
	var nav_class = 'js-navopen';

	var closeNavEnd = function (e) {
		if (e && e.target === inner) {
			document.removeEventListener(transition_end, closeNavEnd, false);
		}
		nav_open = false;
	};

	var closeNav = function () {
		if (nav_open) {
			// close navigation after transition or immediately
			var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
			if (duration > 0) {
				document.addEventListener(transition_end, closeNavEnd, false);
			} else {
				closeNavEnd(null);
			}
		}
		removeClass(doc, nav_class);
		$('ol#mainNavMenu').find('li.rwd-close').remove();
		$('ol#mainNavMenu').attr('aria-hidden', 'true');
	};

	var openNav = function () {
		if (nav_open) {
			return;
		}
		addClass(doc, nav_class);
		$('ol#mainNavMenu').attr('aria-hidden', 'false');
		var $firstItem = $('ol#mainNavMenu').find('li > a').first();
		if (!$firstItem.hasClass('backMenuLink') && !$firstItem.hasClass('closeMenuLink')) {
			var $close = $('<li class="rwd-close"><a href="#" style="z-index:2;" class="navMenuItem closeMenuLink" aria-haspopup="false" role="menuitem">Close Menu</a></li>');
			$('#mainNavMenu').prepend($close);
			$firstItem = $('ol#mainNavMenu').find('li > a').first();
			$firstItem.bind('click', function (e) {
				e.preventDefault();
				closeNav();
			});
		}
		$firstItem.focus();
		nav_open = true;
	};

	var toggleNav = function (e) {
		if (nav_open && hasClass(doc, nav_class)) {
			closeNav();
		} else {
			openNav();
		}
		if (e) {
			e.preventDefault();
		}
	};

	// open nav with main "nav" button
	document.getElementById('nav-open-btn').addEventListener('click', toggleNav, false);

	/* close nav with main "close" button
	document.getElementById('nav-close-btn').addEventListener('click', toggleNav, false);
	*/

	// close nav by touching the partial off-screen content
	document.addEventListener('click', function (e) {
			if (nav_open && !hasParent(e.target, 'mainNav') && !hasClass(e.target, 'nav-btn')) {
				e.preventDefault();
				closeNav();
			}
		},
		true);
};

//Configure a menu. This function should be call only inside $(document).ready
MenuManager.prototype.setupMenu = function (menuID, menuContainerID, menuType, setupDraggable, urlToGetHiddenMenus) {
	var self = this; // Reference to current object
	self.setupDraggable = setupDraggable;

	//Initialize menu manger after DOM elements are loaded
	self.init();

	$('#' + menuID).data('menu', { type: menuType, level: 1, parentID: null });

	//mouse over on menu items from first level
	$("li.topMenuItem", '#' + menuID).mouseover(function (e) {
		e.stopPropagation();
	});

	//mouse enter on menu items from first level
	$("li.topMenuItem", '#' + menuID).mouseenter(function () {
		var $li = $(this);
		self.menuMouseOver($li);
		//return false; //do not bubble mouse over events on other nested li tags
	});



	//mouse out on menu items from first level
	$("li.topMenuItem", '#' + menuID).mouseleave(function () {
		var $li = $(this);
		self.menuMouseOut($li);
	});

	$.ajax({
		url: urlToGetHiddenMenus,
		type: 'get',
		async: true, //let the page continue loading/processing meanwhile submenus are loaded
		cache: false,
		dataType: 'html',
		success: function (response) {
			if (response.ErrorMessage)
				alert(response.ErrorMessage);
			else {
				//Append submenus into divListSubMenus and bind menuMouseOut function on mouseleave event for all <li>.
				//create temporary container.
				var tempContainerID = 'dummyDivTemp' + menuID;
				var $tempContainer = $('<div id="' + tempContainerID + '" style="display:block;"></div>').append(response);

				//set up hasChildren class on top level items
				$('#' + menuID + ' li').each(function () {
					var $this = $(this);
					var id = $this.attr('id'); //.replace(/item|leftItem/i, '');
					if (id != null) {
						var $olSubMenu = $tempContainer.find('#Parent' + id).find('li').not(".addPage");
						if ($olSubMenu.length > 0) {
							var $targetElement = $this.children('a').length ? $this.children('a') : $this;
							$targetElement.attr('aria-haspopup', 'true');
							$targetElement.attr('aria-expanded', 'false');
							//for secondary menus, set up withChildren class on top level items
							if (menuType === SIDE_MENU && $this.data("displayMainItemSubMenuIndicators") == "True") {
								$this.children('a.secondaryNavItem').addClass('withChildren');
							}
						}
					}
				});

				//This needs to be executed once to bind draggable to main and side menu's root elements.
				if (setupDraggable) {
					//init drag and drop for menu items
					$('#' + menuID).find("li").each(function () {
						//set as droppable all submenu items on main menu
						self.setupDroppableElement($(this), menuType);
					});

					$('#' + menuID).find(".grippy").each(function () {
						//setup grip icons as draggable elements for main menu sub items.
						self.setupDraggableElement($(this), menuType, '#' + menuContainerID);
					});
				}

				//move submenus to main submenus container.
				self.$divListSubMenus.append($tempContainer.children()/*$('#' + tempContainerID + ' ol')*/);
				$tempContainer.remove();
			}
		},
		error: function (xhr, textStatus, exception) {
			if (xhr.status != 0)
				alert("Error retrieving sub-menus for menuID '" + menuID + "' : " + xhr.statusText + "\ntextStatus: " + xhr.status);
		}
	});
};

//Handles mouse over event on menu items
MenuManager.prototype.menuMouseOver = function ($li) {
	var self = this; // Reference to current object
	if (self.mobileMainNav || ($('.pageContent.cpGrid.dragging').length > 0) || ($('.pageContent.cpGrid.pinned').length > 0)) {
		return;
	}
	this.resetMouseOvers();
	$li.addClass('mouseover');
	$li.parentsUntil('#mainNavMenu').children('a').addClass('mouseover');
	clearTimeout(self.menuTimeoutID);

	var $parent = $li.parent();
	var menuData = $parent.data('menu');

	
	//bail when is currently dragging an item to a different type of menu only if there is not custom links on side menu
	if (!self.sideMenuHasCustomLinks && self.isMainMenuBeingDragged && menuData.type === SIDE_MENU)
		return;
	if (!self.sideMenuHasCustomLinks && self.isSideMenuBeingDragged && menuData.type === MAIN_MENU)
		return;

	if ((menuData.type === MAIN_MENU && self.isMainMenuEditable && (self.isMainMenuBeingDragged || self.isSideMenuBeingDragged) && $li.hasClass('liDropabble') && !$li.hasClass('beingDragged'))
		|| (menuData.type === SIDE_MENU && self.isSideMenuEditable && (self.isMainMenuBeingDragged || self.isSideMenuBeingDragged) && $li.hasClass('liDropabble') && !$li.hasClass('beingDragged'))) {
		//set elements settings when element is over
		$li.addClass('hover');
	}

	$('#mainNav').css('z-index', '10');

	//hide if needed submenus from siblings
	if ($li.hasClass('topMenuItem')) {
		//for top level menu items hide all the submenus before displaying another level
		self.hideAllSubMenus(menuData.type, $li);
	} else {
		//for all other submenus which are naturally inside DOM elements
		$parent.children().each(function () {
			if ($(this) != $li)
				self.hideSubMenu($(this));
		});
	}

	//When opening different type of menu, hide submenus from the other types menu
	if (menuData.type === MAIN_MENU) {
		self.hideAllSubMenus(SIDE_MENU);
	} else if (menuData.type === SIDE_MENU) {
		self.hideAllSubMenus(MAIN_MENU);
	}

	// As the sub-menu is displayed, we let the screen reader know the menu has expanded.
	var $anchor = $li.find('a');
	if ($anchor.length && $anchor.attr('aria-haspopup') === 'true') {
		$anchor.attr('aria-expanded', 'true');
	}
	else if ($anchor.length && $anchor.attr('aria-haspopup') != 'true') {
		return;
	}
	

	if (!$li.hasClass('beingDragged')) {
		var id = $li.attr('id'); //.replace(/item|leftItem/i, '');
		var pageID = $li.data('pageid');
		var displayMegaMenu = $li.data('displaymegamenu');
		var delay = $li.hasClass('topMenuItem') ? self.popupDelayTopMenu : self.popupDelaySideMenu;

		//This is to pick the list with with the most sub menus and remove the rest. Prevents issue with not displaying all submenus when there is more than one of the same
		//submenu being rendered, since the first rendered sub menu will be used for all submenu duplicates even though it may not have all the submenus included.
		//https://civicplus.tpondemand.com/entity/22126
		var maxSubMenus = 0;
		var maxResult;
		if (self.$divListSubMenus.find('#Parent' + id).length > 1) {
			$(self.$divListSubMenus.find('#Parent' + id)).each(function () {
				if ($(this).children().length > maxSubMenus) {
					maxSubMenus = $(this).children().length;
					maxResult = this;
				}
				$(this).addClass('removal');
			});
		}
		$(maxResult).removeClass('removal');
		self.$divListSubMenus.remove(".removal");
		self.$divListSubMenus.children().append(maxResult);

		var $olSubMenu = self.$divListSubMenus.find('#Parent' + id);
		$('.megaMenuContainer.hover').hide().removeClass('hover');
		if (displayMegaMenu == 'True') {
			if (menuData.type === MAIN_MENU) {
				//Hack to get the heights of the megaMenu elements correctly, in state of display none, incorrect height is being returned. Vishal
				var $megaMenuContainer = $('.mainNavMegaMenu.megaMenuContainer.pageID_' + pageID);
				$megaMenuContainer.css('visibility', 'hidden');
				$megaMenuContainer.css("overflow", "hidden");
				$megaMenuContainer.css("height", "0");
				$megaMenuContainer.css("padding", "0");
				$megaMenuContainer.show();


				//Apply menu animation's start state
				var applyAnimation = function ($megaMenuContainer, timeout) {
					if (typeof (Animations) === 'function') {
						var animations = new Animations();
						animations.applyAnimationClassToMegaMenuContainer($megaMenuContainer, timeout);
					}
				}

				var timeout = delay ? delay : 0;
				self.menuTimeoutID = window.setTimeout(function () {
					updateMegaMenuAttributes($megaMenuContainer);
					fireMediaQueriesIfNeeded($megaMenuContainer);
					$megaMenuContainer.show();
					$megaMenuContainer.css("visibility", "");
					$megaMenuContainer.css("overflow", "");
					$megaMenuContainer.css("height", "");
					$megaMenuContainer.css("padding", "");
					applyAnimation($megaMenuContainer, timeout);
					if (!window.isRemoveSetHeights)
						SetHeights();
				}, timeout);
			}
			else {
				delay ? self.menuTimeoutID = setTimeout(function () {
					$('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).show();
					if (!window.isRemoveSetHeights)
						SetHeights();
				}, delay) : $('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).show();
			}
		}

		//For side menu, there isnt a mega menu, so render regular sub menu irrespective of displayMegaMenu setting.
		if (displayMegaMenu != 'True' || menuData.type === SIDE_MENU) {
			if ($olSubMenu.length > 1) {
				//remove duplicates. they might have been added by different menu (main/side)
				$olSubMenu.slice(1).remove();
				$olSubMenu = self.$divListSubMenus.find('#Parent' + id);
				$olSubMenu.removeClass('takenIntoAccount');
			}
			if ($olSubMenu.length == 1) {
				$olSubMenu.removeClass('takenIntoAccount');
				$olSubMenu.data('menu', { type: menuData.type, level: menuData.level + 1, parentID: $parent.attr('id') });
				var allowedToShow = ($olSubMenu.data('menu').type === MAIN_MENU) ? $olSubMenu.data('menu').level <= self.mainMenuMaxSubMenuLevels : $olSubMenu.data('menu').level <= self.sideMenuMaxSubMenuLevels;
				if (allowedToShow) {
					delay ? self.menuTimeoutID = setTimeout(function () { self.showSubMenu($li, $olSubMenu); }, delay) : self.showSubMenu($li, $olSubMenu);
				}
			}
		}

		if (displayMegaMenu == 'True' && !window.isRemoveSetHeights) {
			SetHeights();
		}
	}
};

//Display submenu items
MenuManager.prototype.showSubMenu = function ($li, $olSubMenu) {
	var self = this; // Reference to current object
	var menuType = $olSubMenu.data('menu').type;
	var animations = null;

	//Apply menu animation's start state
	if (typeof (Animations) === 'function') {
		animations = new Animations();
		animations.applyInitial($olSubMenu, menuType);
	}

	//Bind mouseenter for second level submenus
	//Also set the tab index for each <li>
	$olSubMenu.children().each(function () {
		if (self.type != "hidden") {
			var $input = $(this);
		}
		//mouse over on menu items from second and subsequent levels.
		$(this).bind("mouseenter.menu", function () {
			var $li = $(this);
			self.menuMouseOver($li);
			return false; //do not bubble mouse over events on other nested li tags
		});
	});

	//Bind mouseleave for second level submenus
	$olSubMenu.children().each(function () {
		//mouse over on menu items from second and subsequent levels.
		$(this).bind("mouseleave.menu", function () {
			var $li = $(this);
			self.menuMouseOut($li);
			//self.hideAllSubMenus(menuType, $li);
		});
	});

	var bouncing = self.bouncing &&
		((menuType === MAIN_MENU && $olSubMenu.data('menu').level > 2)
			|| (menuType === SIDE_MENU));

	var $parentOl = $li.parent();
	var parentLeftLi = $li.offset().left;

	self.moveSubMenuInDOM($olSubMenu, menuType);

	if (bouncing) {
		//logic to bounce submenu to be opened if needed.
		var subMenuWidth = $olSubMenu.outerWidth(); //get width from submenu which is hidden (required to add extra styles on divListSubMenus)

		var isOpeningToRight = !$parentOl.hasClass('flipLeft');
		if (isOpeningToRight) {
			var winWidth = $(window).width();
			var parentWidthLi = $parentOl.outerWidth();

			if ((winWidth - parentLeftLi - parentWidthLi) <= (subMenuWidth + 3)) {
				$olSubMenu.addClass('flipLeft');
			}
		} else {
			if ((parentLeftLi) <= (subMenuWidth + 3)) {
				$olSubMenu.addClass('flipRight');
			} else {
				$olSubMenu.addClass('flipLeft');
			}
		}
	}
	self.positionSubMenuInDOM($olSubMenu, $li, menuType);

	if (self.setupDraggable) {
		//init drag and drop for menu items
		$olSubMenu.find("li").each(function () {
			//set as droppable all submenu items on main menu
			self.setupDroppableElement($(this), menuType);
		});

		$olSubMenu.find(".grippy").each(function () {
			//setup grip icons as draggable elements for main menu sub items.
			self.setupDraggableElement($(this), menuType, menuType == MAIN_MENU ? '#mainNav' : '#secondaryNav');
		});
	}

	//If Animation manager toggled on, implement the menu animations
	if (animations != null) {
		animations.applyAnimationClassToNavContainers($olSubMenu, menuType);
	}
};

//Handles mouse out event on menu items
MenuManager.prototype.menuMouseOut = function ($li) {
	var self = this; // Reference to current object
	var menuType = $li.attr('id') != null ? ($li.attr('id').match(/MainItem/) != null ? MAIN_MENU : SIDE_MENU) : (($li.hasClass('secondaryNavItem') || $li.parents('ol').attr('id').match(/SideItem/) != null) ? SIDE_MENU : MAIN_MENU);

	if (self.mobileMainNav) return;
	//log("popdownDelaySideMenu" + popdownDelaySideMenu);
	var delay = $li.hasClass('topMenuItem') ? self.popdownDelayTopMenu : self.popdownDelaySideMenu;
	if (self.isMainMenuBeingDragged || self.isSideMenuBeingDragged) {
		//reset elements settings
		$li.removeClass('hover');
	}

	$('#mainNav').css('z-index', '');

	clearTimeout(self.menuTimeoutID);
	self.menuTimeoutID = setTimeout(function () {
		/*if ($li.parent().data('menu').type == MAIN_MENU)
		self.hideAllSubMenus(MAIN_MENU); //workaround related with containerSubMenus
		else*/
		$('#bodyWrapper').animate({ 'padding-bottom': 0 }, 'fast');
		$('#bodyWrapper').data('maxPaddingBottom', '0');
		$('.takenIntoAccount').removeClass('takenIntoAccount');
		if (!$li.hasClass('topMenuItem'))
			self.hideAllSubMenus(menuType, $li);
		else
			self.hideSubMenu($li);
	}, delay);
};

MenuManager.prototype.hideAllSubMenus = function (menuType, $currentLi) {
	var self = this; // Reference to current object
	switch (menuType) {
		case SIDE_MENU: //hide sub menus for left menu
			$("li.topMenuItem", ".secondaryNav ol.rootNavMenu").each(function () {
				if ($currentLi && $(this).attr('id') === $currentLi.attr('id'))
					return true; //continue. don't hide current top menu item opened if provided
				self.hideSubMenu($(this));
			});
			break;
		case MAIN_MENU: //hide sub menus for main menu
			/*var openMenuID = self.$containerSubMenus.find('ol:first').attr('id');
			if ($currentLi && openMenuID === ('Parent' + $currentLi.attr('id')))
			return true; //continue. don't hide current top menu item opened if provided
			self.hideSubMenu(self.$containerSubMenus);*/
			$("li.topMenuItem", "#mainNavMenu").each(function () {
				if ($currentLi && $(this).attr('id') === $currentLi.attr('id'))
					return true; //continue. don't hide current top menu item opened if provided
				self.hideSubMenu($(this));
			});
			break;
		default: //hide submenus for all type of menus
			//self.hideSubMenu(self.$containerSubMenus);
			$("li.topMenuItem", "#mainNavMenu").each(function () {
				self.hideSubMenu($(this));
			});
			$("li.topMenuItem", "#sideNavMenu").each(function () {
				self.hideSubMenu($(this));
			});
			break;
	}
};

MenuManager.prototype.hideSubMenu = function ($li) {
	var self = this; // Reference to current object

	// As the sub-menu is closed, we let the screen reader know that the menu is no longer expanded.
	var $anchor = $li.find('a');
		if ($anchor.length && $anchor.attr('aria-haspopup') === 'true') {
		$anchor.attr('aria-expanded', 'false');
	}

	var displayMegaMenu = $li.data('displaymegamenu');
	var mainMenu = $li.parents('nav').hasClass('mainNav') | $li.parents('ol').hasClass('mainSubMenu');
	//When a menu item is set to display as mega menu, we still display regular sub menu for secondary nav, since it doesnt have a megamenu. So while hiding, hide the regular submenu for side navigation.
	if (displayMegaMenu != 'True' || !mainMenu) {
		if ($('#mainNavMenu').find('.navMenu').length == 0) {
			$('#mainNavMenu li a.mouseover').removeClass('mouseover');
		}
		var id = $li.attr('id');
		var $olSubMenu = $('#Parent' + id);
		if ($olSubMenu.length == 1) {
			//moves sub menu to hidden div
			$olSubMenu.appendTo(self.$divListSubMenus);
			//reset data of the menu
			$olSubMenu.removeData('menu');
			if (self.bouncing) {
				//remove bouncing classes
				$olSubMenu.removeClass('flipLeft flipRight');
			}
			$olSubMenu.css({ position: '', top: '', left: '', zIndex: '' });
			//moves recursively its children if needed
			$olSubMenu.children().each(function () {
				self.hideSubMenu($(this));
				$(this).unbind("mouseenter.menu");
			});

			//Remove animation trigger class
			$olSubMenu.removeClass('animation-triggered');
		}
	} else {
		var pageID = $li.data('pageid');
		var megaMenuContainer = $('.mainNavMegaMenu.megaMenuContainer.pageID_' + pageID);
		if (!megaMenuContainer.hasClass('hover') && $('.megaMenuContainer .handle.pin.pinned').length === 0) {
			//$('#megaMenu').hide();
			megaMenuContainer.hide();
			$('#mainNav').css('z-index', '');
			$('.megaMenuContainer').css("display", "none");
			$('.megaMenuContainer').removeClass('animation-triggered');
		}
		if (!$('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).hasClass('hover')) {
			$('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).hide();
		}
	}
};

//Supports legacy code to set delays when opening/close submenus
MenuManager.prototype.setMOMMode = function (mommode, menuType) {
	//support legacy code
	if (menuType === MAIN_MENU) {
		switch (mommode) {
			case 0:
				self.popdownDelayTopMenu = 3;
				self.popupDelayTopMenu = false;
				self.mainMenuMaxSubMenuLevels = 0;
				break;
			case 2:
				self.popdownDelayTopMenu = 500;
				self.popupDelayTopMenu = 500;
				break;
			case 3:
				self.popdownDelayTopMenu = 500;
				self.popupDelayTopMenu = false;
				break;
		}
	} else if (menuType === SIDE_MENU) {
		switch (mommode) {
			case 0:
				self.popdownDelaySideMenu = 3;
				self.popupDelaySideMenu = false;
				self.sideMenuMaxSubMenuLevels = 0;
				break;
			case 2:
				self.popdownDelaySideMenu = 500;
				self.popupDelaySideMenu = 500;
				break;
			case 3:
				self.popdownDelaySideMenu = 500;
				self.popupDelaySideMenu = false;
				break;
		}
	}
};

MenuManager.prototype.adjustMainItemsWidth = function (menuSelector) {
	this.isAdjustingMainMenuItemsWidth = true;
	return adjustMainItemsWidth(menuSelector);
};

function adjustMainItemsWidth(menuSelector) {
	var widths = [];
	var $items = [];
	$(menuSelector).data('autowidth', true).find(".topMenuItem").each(function () {
		widths.push($(this).outerWidth());
		$items.push($(this));
	});
	if (widths.length > 0) {
		var totalWidth = 0;
		var i;
		for (i = 0; i < widths.length; i++) {
			totalWidth += widths[i];
		}
		var menuWidth = $(menuSelector).outerWidth();
		var availableWidth = menuWidth - totalWidth;
		var paddingPerItem = availableWidth / $items.length;
		for (i = 0; i < $items.length; i++) {
			var width = (100 * (widths[i] + paddingPerItem) / menuWidth);
			//This is to account for the anomoly of the last menu item wrapping for one client (Anoka County) only in Mac Safari
			//A site-specific solution was sought but none found that was acceptable
			if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf('Chrome') == -1 && i == $items.length - 1) {
				width = width - 1;
			}
			$items[i].outerWidth(width + "%");
		}
	}
}

MenuManager.prototype.resetMainItemsWidth = function (menuSelector) {
	$(menuSelector).find(".topMenuItem").each(function () {
		$(this).css("width", "auto");
	});
};

function log(text) {
	console.log(text);
}

/**** End-Functions to handle Main/Left Menu on Front-end. *****/

/***** Drag and Drop functions to handle main/side menus  ********/

//Handles when an element was dropped
MenuManager.prototype.dragHandler = function ($element, dragInfo) {
	var self = this; // Reference to current object

	//var miLeave = 0;
	var menuItemLeave = function ($menuItemOver) {
		$menuItemOver.removeClass('hover');
		//miLeave++;
		//log("Leave event " + (miLeave) + ", liID=" + $menuItemOver.attr('id') + ", class=" + $menuItemOver.attr('class'));
		//$('#log3').val("Leave event " + (miLeave) + ", liID=" + $menuItemOver.attr('id') + ", class=" + $menuItemOver.attr('class'));
	};

	if ($element.length != 0 && !$element.hasClass('thingToDrag')) { //workaround to avoid executing drag handler when mouse pointer is over drag helper
		//resetElementOver();
		//dragInfo.currentElementOver = { $element: null, $li: null, isAddPage: null, $ol: null };
		dragInfo.resetCurrentElementOver();
		// This element will hold info to keep track of the current element that the mouse pointer is over.
		dragInfo.currentElementOver.$element = $element;
		//$('#log1').val('element  ID:' + $element.attr('id') + ', class=' + $element.attr('class') + ", tag=" + $element.get(0).nodeName + "html=" + $element.html());

		if ($element.hasClass('inside')) {
			//when mouse is over any DOM element inside an LI MenuItem
			var $li = $element.closest('li');

			dragInfo.currentElementOver.$li = $li;
		} else if ($element.hasClass('liDropabble')) {
			//when mouse is over LI form field element
			dragInfo.currentElementOver.$li = $element;
		}

		if (dragInfo.currentElementOver.$li != null && dragInfo.currentElementOver.$li.hasClass('liDropabble')) {
			//Over a valid droppable li
			dragInfo.currentElementOver.$ol = dragInfo.currentElementOver.$li.parent();
			//$('#log2').val("inside.. . currentLI=" + dragInfo.currentElementOver.$li.attr('id'));
		}

		// Logic to determines if mouse pointer is out of a menu item.
		if (dragInfo.$prevMenuItemOver != null && (dragInfo.currentElementOver.$li == null || dragInfo.currentElementOver.$li[0] != dragInfo.$prevMenuItemOver[0])) {
			//fire menu item leave event
			menuItemLeave(dragInfo.$prevMenuItemOver);
		}
		dragInfo.$prevMenuItemOver = dragInfo.currentElementOver.$li;

		//mouse is over a valid form field to resize.??
	}
};

///Handles when an element was dropped
MenuManager.prototype.dropHandler = function (dragInfo) {
	var self = this; // Reference to current object

	var validPosition = false;
	if (dragInfo.currentElementOver != null && dragInfo.currentElementOver.$li != null && dragInfo.currentElementOver.$li.hasClass('liDropabble') && !dragInfo.currentElementOver.$li.hasClass('beingDragged')) {
		var $liTarget = dragInfo.currentElementOver.$li;
		$liTarget.removeClass('hover');

		if (self.sideMenuHasCustomLinks || dragInfo.$draggedElement.data('drag').menuType === $liTarget.data('drag').menuType) {
			validPosition = true;
			//var msgSource = "ID=" + dragInfo.$draggedElement.data('drag').itemID + ",parentID=" + dragInfo.$draggedElement.data('drag').parentID + ",prevItemID=" + dragInfo.$draggedElement.data('drag').prevItemID + ",isAddPage=" + dragInfo.$draggedElement.data('drag').isAddPage;
			//var msgTarget = "ID=" + $liTarget.data('drag').itemID + ",parentID=" + $liTarget.data('drag').parentID + ",prevItemID=" + $liTarget.data('drag').prevItemID + ",isAddPage=" + $liTarget.data('drag').isAddPage;
			//alert("dropped source=" + msgSource + "\nOn target=" + msgTarget);
			var url = '';
			var addingPage = false;
			if (dragInfo.$draggedElement.data('drag').isAddPage) {
				//Creating a new page in a specific menu position
				addingPage = true;
				url = "/Pages/Page/Add";
			} else {
				//Moving an existing menu item on different position
				url = "/Pages/PageStatus/Move/" + dragInfo.$draggedElement.data('drag').itemID;
			}
			//logic to build position where menu item was dropped
			url += "?parentID=" + $liTarget.data('drag').parentID;
			if ($liTarget.data('drag').isAddPage) {
				if ($liTarget.data('drag').prevItemID != null)
					url += "&refPageID={1}&position=Next".replace("{1}", $liTarget.data('drag').prevItemID);
				else
					url += "&position=Child";
			} else {
				url += "&refPageID={1}&position=Previous".replace("{1}", $liTarget.data('drag').itemID);
				if ($liTarget.hasClass('topMenuItem') && $liTarget.data('drag').menuType == MAIN_MENU) {
					//Check whether or not is possible to copy layout from top sibling page
					var message = '';
					$.ajax({
						url: '/Layout/CopyAssociation/CheckTopPages?copyLayoutFrom={0}'
							.replace('{0}', $liTarget.data('drag').itemID),
						type: 'POST',
						async: false, //Needs to be a sync request
						success: function (response) {
							if (response.ErrorMessage) {
								alert(response.ErrorMessage);
							} else if (response.Message) {
								message = response.Message;
							}
						},
						error: function (xhr, textStatus, exception) {
							alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
						}
					});
					if (message.length > 0 && confirm(message)) {
						url += "&copyLayoutFrom=" + $liTarget.data('drag').itemID;
					}
				}
			}

			if (addingPage) {
				window.location.href = url;
			} else {
				$.ajax({
					url: url,
					type: 'POST',
					success: function (response) {
						if (response.ErrorMessage) {
							alert(response.ErrorMessage);
							ajaxPostBackEnd();
						} else if (response.RedirectURL && response.RedirectURL !== location.href) {
							location.href = response.RedirectURL;
						} else {
							location.reload(true);
						}
					},
					beforeSend: function () {
						ajaxPostBackStart('Loading');
					},
					error: function (xhr, textStatus, exception) {
						alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
						ajaxPostBackEnd();
					}
				});
			}
		}
	}
};

MenuManager.prototype.setupDraggableElement = function ($element, menuType, containerSelectorToAppend) {
	var self = this; // Reference to current object

	//Unbind the event before binding it again. Both solutions below work.
	$element.unbind('draginit dragstart drag dragend');
	//$element.drag('destroy');
	// Prevents IE from selecting text while starting a drag.
	$element.bind('selectstart', function (event) {
		event.preventDefault();
		return false;
	});

	var dragInfo = null;

	var relativeContainerOffSet = { top: 0, left: 0 };
	var draggedRelativeElementOffset = { top: 0, left: 0 };
	var isAddPageElem = $element.hasClass('addPage');

	//jquery event drag 2.0 plugin.
	$element.drag("start", function () {
		if (self.mobileMainNav) return false;
		self.isMainMenuBeingDragged = (menuType == MAIN_MENU);
		self.isSideMenuBeingDragged = (menuType == SIDE_MENU);

		var $draggedElement = null;
		if ($(this).hasClass('grippy'))
			$draggedElement = $(this).parent('li'); //page menu items
		else if ($(this).hasClass('addPage'))
			$draggedElement = $(this); //Add Page menu items

		$draggedElement.addClass('beingDragged');

		/*if ($draggedElement.hasClass('topMenuItem') && (menuType == MAIN_MENU)) {
		//workaround to hide top level menu items on main menu. (hideMenu don't work since submenus are not naturally on DOM)
		self.hideAllSubMenus(MAIN_MENU);
		}
		else*/
		self.hideSubMenu($draggedElement);

		dragInfo = {
			$draggedElement: $draggedElement,
			currentElementOver: { $element: null, $li: null, isAddPage: null, $ol: null },
			$prevMenuItemOver: null,
			resetCurrentElementOver: function () {
				this.currentElementOver.$element = null;
				this.currentElementOver.$li = null;
				this.currentElementOver.$ol = null;
				this.currentElementOver.isAddPage = null;
			}
		};

		//If container for thing to drag has relative position, gets its offset to subtract coordinates while dragging.
		relativeContainerOffSet = ($(containerSelectorToAppend).css("position") == "relative") ? $(containerSelectorToAppend).offset() : { top: 0, left: 0 };

		var hasChildren = $draggedElement.hasClass('hasChildren');
		var menuText = $draggedElement.children('a.navMenuItem, a.navMainItem').text();
		if (menuText == '') {
			menuText = $draggedElement.children('div.accordionNavItem').children('a.navMenuItem').text();
		}
		var html = '<a style="z-index:1002;" class="thingToDrag navMenuItem' + (hasChildren ? ' withChildren' : '') + '">' + menuText + '</a>';
		var $dragHelper = $(html);
		return $dragHelper.appendTo(containerSelectorToAppend);
	}).drag(function (e, dd) {
		//if draggable element has relative position, gets the offset where the mouse was clicked to add coordinates while dragging.
		draggedRelativeElementOffset = (isAddPageElem) ? { top: dd.startY - dd.originalY, left: dd.startX - dd.originalX } : { top: 0, left: 0 };

		$(dd.proxy).css({
			top: (dd.offsetY + draggedRelativeElementOffset.top - relativeContainerOffSet.top) + 15,
			left: (dd.offsetX + draggedRelativeElementOffset.left - relativeContainerOffSet.left) - 10
		});
		//$('#log4').val('dd.offsetX=' + dd.offsetX + ',dd.offsetY=' + dd.offsetY + ',e.clientX=' + e.clientX + ',e.clientY=' + e.clientY + ',e.pageX=' + e.pageX + ',e.pageY=' + e.pageY);
		var $elementOver = $(document.elementFromPoint(e.originalEvent.clientX, e.originalEvent.clientY));
		// Execute drag handler
		if (dragInfo != null)
			self.dragHandler($elementOver, dragInfo);
	}, { relative: false })
		.drag("end", function (ev, dd) {
			if (self.mobileMainNav) return false;
			$(dd.proxy).remove();

			if (dragInfo != null) {
				self.dropHandler(dragInfo);
				dragInfo.$draggedElement.removeClass('beingDragged');
				dragInfo.$draggedElement = null;
				dragInfo.$prevMenuItemOver = null;
				dragInfo = null;
			}
			self.isMainMenuBeingDragged = false;
			self.isSideMenuBeingDragged = false;
		});
};

MenuManager.prototype.setupDroppableElement = function ($element, menuType) {
	var self = this; // Reference to current object
	if (!self.mobileMainNav && $element.find('div.indicator').length == 1 && !$element.hasClass('liDropabble')) {
		$element.addClass('liDropabble');

		//initialize drag jquery data for droppable elements
		var isAddPage = $element.hasClass('addPage');
		var itemID = !isAddPage ? $element.attr('id').replace(/MainItem|SideItem/i, '') : '';
		var prevItemID = ($element.prev().length == 1) ? $element.prev().attr('id').replace(/MainItem|SideItem/i, '') : null;
		var parentID = $element.parent().attr('id').replace(/ParentMainItem|ParentSideItem/i, '');
		if (isNaN(parentID)) //for top level menu items
			parentID = $element.parent().data('parent');

		$element.data('drag', { itemID: itemID, parentID: parentID, prevItemID: prevItemID, isAddPage: isAddPage, menuType: menuType });

		/// Setups recursively all children DOM elements with class needed by drag algorithm to recognize which element mouse pointer is
		var setUpChildren = function ($children) {
			if ($children.length > 0) {
				$children.each(function () {
					$children.addClass('inside');
					setUpChildren($(this).children());
				});
			}
		};

		setUpChildren($element.children());
	}
};

MenuManager.prototype.setupDroppableAccordionElement = function ($element) {
	var self = this;
	if (!self.mobileMainNav && $element.find('div.indicator').length > 0 && !$element.hasClass('liDropabble')) {
		$element.addClass('liDropabble');

		//initialize drag jquery data for droppable elements
		var isAddPage = $element.hasClass('addPage');
		var itemID = !isAddPage ? $element.attr('id').replace(/MainItem|SideItem/i, '') : '';
		var prevItemID = ($element.prev().length == 1) ? $element.prev().attr('id').replace(/MainItem|SideItem/i, '') : null;
		var $parent = $element.parents('li:first');
		if ($parent.length == 0) {
			$parent = $element.parents('ol:first');
		}
		var parentID = $parent.attr('id').replace(/ParentMainItem|ParentSideItem/i, '');
		if (isNaN(parentID)) //for top level menu items
			parentID = $element.parent().data('parent');

		$element.data('drag', { itemID: itemID, parentID: parentID, prevItemID: prevItemID, isAddPage: isAddPage, menuType: SIDE_MENU });

		/// Setups recursively all children DOM elements with class needed by drag algorithm to recognize which element mouse pointer is
		var setUpChildren = function ($children) {
			$children.each(function () {
				$children.addClass('inside');
				setUpChildren($(this).children());
			});
		};

		setUpChildren($element.children());
	}

	$element.unbind('mouseenter').mouseenter(function (e) {
		e.stopPropagation();
		if (self.isSideMenuBeingDragged) {
			$element.addClass('hover');
		}
	});

	$element.unbind('mouseleave').mouseleave(function (e) {
		$element.removeClass('hover');
	});
};

///Moves the submenu to be displayed at the bottom of the DOM.
MenuManager.prototype.moveSubMenuInDOM = function ($submenu, menuType) {

	//Remove any old .pop elements from the DOM to reload the new one.
	if ($('body').find($submenu).length > 0)
		$('body').find($submenu).remove();

	//$submenu is the ol, $parent is the li.
	$submenu.addClass('subMenuMoved').appendTo('body');

	var className = menuType == MAIN_MENU ? 'mainSubMenu' : 'secondarySubMenu';
	$submenu.addClass(className);
	$submenu.addClass('moved');

	$submenu.css('position', 'absolute');
	$submenu.css('z-index', '100');
}

///Updates the position of submenus in the DOM.
MenuManager.prototype.positionSubMenuInDOM = function ($submenu, $li, menuType) {
	var topMainNavigationLink = menuType == MAIN_MENU && $li.hasClass('topMenuItem');
	var self = this;
	self.updateSubMenuPositionAttributes($submenu, topMainNavigationLink, menuType);
	//If after the submenu is positioned, it has a class of flipLeft, remove it since that causes some display issues on the front-end. Vishal
	if ($submenu.hasClass('flipLeft'))
		$submenu.removeClass('flipLeft').addClass('flippedLeft');
};

MenuManager.prototype.updateSubMenuPositionAttributes = function ($submenu, topMainNavigationLink, menuType) {
	//Get the main nav.
	var parentID = $submenu.attr('id').replace(/Parent/, '');
	var $parent = $('#' + parentID);

	$submenu.removeClass('flippedLeft');

	if ($('#bodyWrapper').data('maxPaddingBottom') == undefined)
		$('#bodyWrapper').data('maxPaddingBottom', 0);

	//Reset bottom-padding on body wrapper to allow accurate calculation
	$('#bodyWrapper').css('padding-bottom', $('#bodyWrapper').data('maxPaddingBottom'));

	var docHeight = $(document).height();
	var menuVisibleSpaceAvailable = docHeight - $parent.offset().top;
	var submenuHeight = $submenu.height();

	//If the parent submenu opened in towards left, let all the subsequent submenus open in the same flow.
	if ($parent.length > 0 && $parent.parents('ol.subMenuMoved').hasClass('flippedLeft'))
		$submenu.addClass('flipLeft');

	if (menuVisibleSpaceAvailable < submenuHeight && !$submenu.hasClass('takenIntoAccount')) {
		//20 is just a default safe padding apart from the calculations.
		$('#bodyWrapper').css('padding-bottom', (submenuHeight - menuVisibleSpaceAvailable + parseFloat($('#bodyWrapper').data('maxPaddingBottom')) + 20));
		$('#bodyWrapper').data('maxPaddingBottom', $('#bodyWrapper').css('padding-bottom'));
		$submenu.addClass('takenIntoAccount');
		if (!$submenu.hasClass('safePaddingApplied')) {
			//Add a padding-bottom of 10px to the submenu to be more presentable
			$submenu.css('padding-bottom', '10px');
			$submenu.addClass('safePaddingApplied');
		}
	}
	if (menuType == MAIN_MENU) {
		//Set top position of main submenu
		$submenu.css('top', $parent.offset().top + (topMainNavigationLink ? $parent.height() : 0));

		if ($submenu.hasClass('flipLeft')) {
			var width = $submenu.find('li:first').width();
			//Set left position of side submenu
			$submenu.css('left', $parent.offset().left - width);
		}
		else {
			//Set left position of main submenu
			$submenu.css('left', $parent.offset().left + (topMainNavigationLink ? 0 : $parent.width()));
		}
	}
	else {
		//Set top position of side submenu
		$submenu.css('top', $parent.offset().top);

		if ($submenu.hasClass('flipLeft')) {
			var width = $submenu.find('li:first').width();
			//Set left position of side submenu
			$submenu.css('left', $parent.offset().left - width);
		}
		else {
			//Set left position of side submenu
			$submenu.css('left', $parent.offset().left + $parent.width());
		}
	}
};
/***** End - Drag and Drop functions to handle main/side menus  ********/

/***** Start - Mega Menu methods  ********/
MenuManager.prototype.pinMegaMenuOpen = function ($this) {
	var $megaMenuGrid = $this.parents('.megaMenuContainer').children('.pageContent.cpGrid');
	if ($megaMenuGrid.is(':visible')) {
		$('#mainNav').css('z-index', '10');
		$megaMenuGrid.addClass('pinned');
		$megaMenuGrid.find('.handle.pin').addClass('pinned');
		if (typeof PageEditLocalization != 'undefined') {
			$megaMenuGrid.find('.handle.pin').attr('title', pageEditLocalization.UnpinMegaMenu);
		}
	}
};

MenuManager.prototype.resetMouseOvers = function () {
	$('#mainNav').css('z-index', '').find('*').removeClass('mouseover');
	$('#secondaryNav').find('*').removeClass('mouseover');
};

/// Setup
MenuManager.prototype.initializeMegaMenus = function () {
	var self = this;
	if (typeof window.DesignCenter === 'undefined' || typeof window.DesignCenter.themeJSON === 'undefined') { // If we aren't in design center....
		$('#megaMenu,.megaMenuContainer').unbind('mouseenter').mouseenter(function (e) {
			e.stopPropagation();
			var $megaMenuContainer = $(this).attr('id') == 'megaMenu' ? $('.megaMenuContainer:visible') : $(this);
			var pageID = $megaMenuContainer.attr('id').match(/\d+$/)[0];
			$('#mainNav [data-pageid=' + pageID + ']  a').addClass('mouseover');

			$megaMenuContainer.addClass('hover');
		});

		$('.megaMenuContainer').unbind('mouseleave').mouseleave(function (e) {
			var $megaMenuContainer = $(this);
			var visible = $(this).is(':visible');
			if (visible) {
				if ($megaMenuContainer.hasClass('optionOpen') && !$('.cpPopOver.common').is(':visible')) {
					$megaMenuContainer.removeClass('optionOpen');
				}
				if (!$megaMenuContainer.hasClass('handleHover') && !$megaMenuContainer.hasClass('optionOpen') && !$megaMenuContainer.find('.pageContent.cpGrid').hasClass('dragging') && !$megaMenuContainer.find('.pageContent.cpGrid').hasClass('pinned')) {
					$megaMenuContainer.hide().removeClass('hover');
					//$('#megaMenu').hide();
					$('.megaMenu').hide();

					//While mousing out of mega menu, if it contains any flyout widgets, hide them.
					$('.flyOut.moved.forMegaMenu').hide();

					self.resetMouseOvers();
				}
			}
		});

		$('.megaMenuContainer .handle.remove, .megaMenuContainer .handle.move, .megaMenuContainer .handle.inheritance').unbind('mouseenter').mouseenter(function (e) {
			e.stopPropagation();
			$(this).parents('.megaMenuContainer').addClass('handleHover');
		});

		$('.megaMenuContainer .handle.remove, .megaMenuContainer .handle.move, .megaMenuContainer .handle.inheritance').unbind('mouseleave').mouseleave(function (e) {
			$(this).parents('.megaMenuContainer').removeClass('handleHover');
		});

		$('.megaMenuContainer .handle.pin').unbind('click').click(function (e) {
			$(this).toggleClass('pinned');
			$(this).parent().toggleClass('pinned');
			if (typeof PageEditLocalization != 'undefined') {
				$(this).attr('title', $(this).hasClass('pinned') ? pageEditLocalization.UnpinMegaMenu : pageEditLocalization.PinMegaMenu);
			}
		});
	}
};

MenuManager.prototype.attachDragAndDropHandlers = function () {
	//Make mega menu items draggable
	var $currentDraggables = $('.megaMenuContainer').find('li.level1.ui-draggable, li.level2.ui-draggable');
	if ($currentDraggables.length) {
		$currentDraggables.draggable('destroy');
	}

	$('.megaMenuContainer').find('li.level1, li.level2').draggable({
		helper: function (event) {
			var html = '<ol class="semeanticList" style="white-space: nowrap">';
			html += $('<div>').append($(this).clone()).html() + '</ol>';
			return $(html);
		},
		start: function (event, ui) {
			$('.megaMenuContainer .pageContent').addClass('megaMenudragging');
		},
		stop: function (event, ui) {
			$('.megaMenuContainer .pageContent').removeClass('megaMenudragging');
		},
		cursorAt: { top: 5, right: 5 },
		cursor: 'move',
		handle: '.grippy'
	});

	//Attach drop target handlers
	var $currentDroppables = $('.megaMenuTarget.ui-droppable', '.megaMenuContainer.ui-droppable');
	if ($currentDroppables.length) {
		$currentDroppables.droppable('destroy');
	}
	$('.megaMenuTarget', '.megaMenuContainer').droppable({
		over: function (event, ui) {
			$(this).parent().addClass('hover');
		},
		out: function (event, ui) {
			$(this).parent().removeClass('hover');
		},
		drop: function (event, ui) {
			var $target = $(this),
				targetPageID = $target.data('pageid'),
				targetPosition = $target.data('position'),
				parentID = $target.data('parentid'),
				pageID = $(ui.helper).children('li').data('pageid');

			$target.parent().removeClass('hover');

			var url = "/Pages/PageStatus/Move/" + pageID;
			url += "?parentID=" + parentID;
			url += "&refPageID={0}&position={1}".replace("{0}", targetPageID).replace("{1}", targetPosition);

			$.ajax({
				url: url,
				type: 'POST',
				success: function (response) {
					if (response.ErrorMessage) {
						alert(response.ErrorMessage);
						ajaxPostBackEnd();
					} else {
						location.href = response.RedirectURL;
					}
				},
				beforeSend: function () {
					ajaxPostBackStart('Loading');
				},
				error: function (xhr, textStatus, exception) {
					alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
					ajaxPostBackEnd();
				}
			});
		},
		tolerance: 'pointer'
	});
};

/***** End - Mega Menu methods  ********/

/***** Start - Class/functions to handle custom links ********/
function MenuCustomLinksManager(confirmCustomLinksDeletion, pageID, moduleID) {
	this.pageID = pageID;
	this.moduleID = moduleID;
	this.checkOrphanFeatureLinks = function () {
		if (confirmCustomLinksDeletion && confirmCustomLinksDeletion.length > 0) {
			return confirm(confirmCustomLinksDeletion);
		}
		return true;
	};

	this.updateSideMenu = function (actionUrl) {
		$.ajax({
			url: actionUrl,
			type: 'post',
			cache: false,
			success: function (response) {
				if (response.ErrorMessage) {
					alert(response.ErrorMessage);
					ajaxPostBackEnd();
				} else if (response.RedirectURL)
					window.location.href = response.RedirectURL;
				else {
					//update side menu UI.
					window.location.reload(true);
				}
			},
			beforeSend: function () {
				ajaxPostBackStart('Loading');
			},
			error: function (xhr, textStatus, exception) {
				ajaxPostBackEnd();
				alert("Error choosing default side menu: " + xhr.statusText + "\nStatus: " + xhr.status);
			}
		});
	};
}

/// open modal to chose page to associate with current page/module as custom link
MenuCustomLinksManager.prototype.chosePage = function () {
	var self = this; // Reference to current object
	if (self.checkOrphanFeatureLinks()) {
		openCpModal({
			title: 'Choose Page',
			className: 'notContent choosePageForLinks',
			isFrontEnd: false,
			url: '/Pages/CustomLinks/ChoosePage/?pageID=' + self.pageID + '&moduleID=' + self.moduleID
		});
	}
};

/// Call back to execute after choosing a page on modal.
MenuCustomLinksManager.prototype.chosePageExecute = function (chosenPageID) {
	var self = this; // Reference to current object
	closeCpModal();
	//Update side nav.
	self.updateSideMenu('/Pages/CustomLinks/ChangeSideMenu/?pageID=' + self.pageID + '&moduleID=' + self.moduleID + '&chosenPageID=' + chosenPageID);
};

/// Creates a new empty root feature link for specific page/module
MenuCustomLinksManager.prototype.createNewCustomLink = function () {
	var self = this; // Reference to current object
	if (self.checkOrphanFeatureLinks()) {
		self.updateSideMenu('/Pages/CustomLinks/CreateCustomFeatureLinks/?pageID=' + self.pageID + '&moduleID=' + self.moduleID);
	}
};

/// Make default side menu for current page/module (remove custom link previously assigned).
MenuCustomLinksManager.prototype.choseDefaultSideMenu = function () {
	var self = this; // Reference to current object
	if (self.checkOrphanFeatureLinks()) {
		self.updateSideMenu('/Pages/CustomLinks/ChoseDefaultSideMenu/?pageID=' + self.pageID + '&moduleID=' + self.moduleID);
	}
};

/***** End - Class/functions to handle feature links on Secondary menus ********/

/***** Start - Class/functions to handle Main Menu Options ********/
function MainMenuOptions(pageID, mainMenuRootID) {
	var wasCheckBoxChanged = function ($checkbox) {
		if ($checkbox.is(":checked"))
			return $checkbox.data('original') != 'True';
		else
			return $checkbox.data('original') == 'True';
	};

	var closeMainMenuPopover = function ($handler, doNotResetCheckboxes) {
		$handler.data("cpPopover").hide();
		if (doNotResetCheckboxes)
			return;

		//reset checkbox selections
		$('div.menuOptions input[type=checkbox]').each(function () {
			if ($(this).data("original") == "True")
				$(this).prop("checked", true);
			else
				$(this).prop("checked", false);
		});
	};

	var initializeMainMenuPopup = function ($handler) {
		$('#cancelMainNavOptions', "#modalMainNavOptions")
			.unbind('click.mainMenuOptions').bind("click.mainMenuOptions", function (e) {
			e.preventDefault();
			closeMainMenuPopover($handler, false);
		});

		$('#saveMainNavOptions', "#modalMainNavOptions")
			.unbind('click.mainMenuOptions').bind("click.mainMenuOptions", function (e) {
			e.preventDefault();

			var useThisPageAsMainMenu = null;
			var displayMegaMenu = [];

			$('div.menuOptions input.DisplayMegaMenu').each(function () {
				if (wasCheckBoxChanged($(this)))
					displayMegaMenu.push({ PageID: $(this).data('pageid'), DisplayMegaMenu: $(this).is(':checked') });
			});

			if ($('#ysnUseThisPagesSubpages', 'div.menuOptions').length == 1 && wasCheckBoxChanged($('#ysnUseThisPagesSubpages'), 'div.menuOptions'))
				useThisPageAsMainMenu = $('#ysnUseThisPagesSubpages', 'div.menuOptions').is(':checked');

			var data = JSON.stringify({ pageID: pageID, versionID: $('#hdnVersionID').val(), useThisPageAsMainMenu: useThisPageAsMainMenu, displayMegaMenu: displayMegaMenu, structureID: $('#hdnStructureID').val() });

			AJAX("/Pages/Menu/MainMenuOptionsSave", 'POST', data, function (response) {
				window.location.reload(true);
			}, true, 'application/json');

			closeMainMenuPopover($handler, true);
		});
	};

	var $handlerMainMenu = $('#mainNavMenuHandleOptions');
	if ($('#hdnIsLayoutPage').val() === "True" || $('#hdnVersionID').length === 0 || $('#hdnVersionID').val() == "0") {
		$handlerMainMenu.remove();
	} else {
		$handlerMainMenu.cpPopover({
			url: '/Pages/Menu/MainMenuOptions',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ pageID: pageID, mainMenuRootID: mainMenuRootID }),
			className: 'options adminWrap admin menuOptions',
			onInit: function () {
				initializeMainMenuPopup($handlerMainMenu);
			},
			onClose: function (e) {
				e.preventDefault();
				closeMainMenuPopover($handlerMainMenu, false);
			}
		});
	}
}

/***** End - Class/functions to handle Main Menu Options ********/

function showHideAccordionMenuForSecondaryNav($elem) {
	var secondaryMenu = 1;
	var hasAccordionSubmenu = $elem.next('a.openAccordionNav').length > 0;
	if (hasAccordionSubmenu)
		$elem = $elem.next('a.openAccordionNav');
	var $container = $elem.parent().siblings('.accordionNavContainer');
	var $secondaryNavHiddenElement = $('#secondaryNav').children('[class*="hiddenAnimations"]');
	var animations = null;
	//Apply initial animation state before the sliding happens to open the accordion submenu
	if (!$elem.hasClass('accordionNavOpened')) {
		if (typeof (Animations) === 'function') {
			animations = new Animations();
			animations.applyInitial($container, secondaryMenu);
		}
	} else {//reset the container by removing animation classes.
		if ($secondaryNavHiddenElement.length > 0 && $secondaryNavHiddenElement.data('animationClass') != undefined)
			$container.removeClass($secondaryNavHiddenElement.data('animationclass'));
		$container.removeClass('animation-triggered');
	}

	$elem.toggleClass('accordionNavOpened');
	$container.css('overflow', 'hidden');
	$container.slideToggle("333ms");

	if ($container.attr('aria-hidden') == 'true') {
		$container.attr('aria-hidden', 'false');
	} else {
		$container.attr('aria-hidden', 'true');
	}

	setTimeout(function () {
		$container.css('overflow', '');
		if ($elem.hasClass('accordionNavOpened')) {
			//If Animation manager toggled on, implement the menu animations
			if (animations != null)
				animations.applyAnimationClassToNavContainers($container, 1);
		}

	}, 400);

	if (typeof dynamicStretchContainers === 'function') {
		setTimeout(dynamicStretchContainers, 400);
	}
}

$(document).ready(function () {
	//Mega menus handlers
	$('.megaMenuContainer')
		.hide()
		.removeClass('hidden')
		.find('.handle.inheritance').remove();
	menuManager.initializeMegaMenus();
});
;
/*Strategy pattern
AccessibleMenu: Abstract class with default implementation for bindHandlers, initialize
MainAccessibleMenu: Concrete implementation of Accessible menu
SecondaryAccessibleMenu: Concrete implementation of Accessible menu
AccordionAccessibleMenu: Concrete implementation of Accessible menu
accordionMenuStack: A stack to maintain hierarchy of accordion menu items so that traversing them back(Up arrow) becomes super easy*/
var stack = [];
var AccessibleMenu = function () {
	this.menuItem = "";
};

//Static field
AccessibleMenu.accordionMenuStack = [];

AccessibleMenu.prototype = {
	initialize: function (mainMenuItem, accordionMenu) {
		if (mainMenuItem)
			this.setStrategy(new MainAccessibleMenu());
		else {
			if (accordionMenu)
				this.setStrategy(new AccordionAccessibleMenu());
			else
				this.setStrategy(new SecondaryAccessibleMenu());
		}
	},
	setStrategy: function (menuItem) {
		this.menuItem = menuItem;
	},
	bindHandlers: function ($elem) {
		var self = this;
		$elem.off('keydown.Menu').on('keydown.Menu', function (e) {
			if (e.which == 37) {//left
				self.left($elem);
				e.preventDefault();
			}
			if (e.which == 38) {//up
				self.up($elem);
				e.preventDefault();
			}
			if (e.which == 39) {//right
				self.right($elem);
				e.preventDefault();
			}
			if (e.which == 40) {//down
				self.down($elem);
				e.preventDefault();
			}
			if (e.which === 13 && $elem.hasClass("mainNavItem") && $elem.closest(".rwd-menu").length === 0 && $elem.attr("aria-haspopup") === "true") {
				e.preventDefault();
				var expanded = $elem.attr("aria-expanded") === "true";
				var $li = $elem.closest("li");
				if (expanded) {
					menuManager.menuMouseOut($li);
				} else {
					menuManager.menuMouseOver($li);
				}
			}
		});
	},
	left: function ($elem) {
		this.menuItem.left($elem);
	},
	up: function ($elem) {
		this.menuItem.up($elem);
	},
	right: function ($elem) {
		this.menuItem.right($elem);
	},
	down: function ($elem) {
		this.menuItem.down($elem);
	}
};

//MainAccessibleMenu concrete class
var MainAccessibleMenu = function () {
	this.left = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//move to the next main menu item
			$elem.parent('li').prev('li').find('a:first').focus();
		}
		else {
			var parentOlId = $elem.parents('ol').attr('id');
			var parentMenuItemId = parentOlId.slice('Parent'.length);
			$('#' + parentMenuItemId).find('a:first').focus();
		}
	};

	this.up = function ($elem) {
		var $firstSubmenuItemOfMainMenuItem = $elem.parents('.mainSubMenu').find('a:first');
		var currentElemIsfirstSubmenuItemOfMainMenuItem = $firstSubmenuItemOfMainMenuItem[0] == $elem[0];
		if (currentElemIsfirstSubmenuItemOfMainMenuItem) {
			//find the top level menu item
			var $olParent = $elem.parents('.mainSubMenu');
			var parentMenuItemId = $olParent.attr('id').slice('Parent'.length);
			$('#' + parentMenuItemId).find('a:first').focus();
		}
		else {
			//find prev sibling
			var $prev = $elem.parent('li').prev('li').find('a:first');
			if ($prev != null)
				$prev.focus();
		}
	};

	this.right = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//move to the next main menu item
			$elem.parent('li').next('li').find('a:first').focus();
		}
		else {
			var $parentLi = $elem.parent('li');
			var $parentId = "Parent" + $parentLi.attr('id');
			var $firstAnchorOfSubmenu = $('ol[id=' + $parentId + '] a:first');
			$firstAnchorOfSubmenu.focus();
		}
	};

	this.down = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//find on basis of submenu
			var $parentLi = $elem.parent('li');
			var $parentId = "Parent" + $parentLi.attr('id');
			var $firstAnchorOfSubmenu = $('ol[id=' + $parentId + '] a:first');
			$firstAnchorOfSubmenu.focus();
		}
		else {
			//find on basis of sibling
			var $next = $elem.parent('li').next('li').find('a:first');
			if ($next != null)
				$next.focus();
		}
	};
};

//SecondaryAccessibleMenu concrete class
var SecondaryAccessibleMenu = function () {
	this.left = function ($elem) {
		var parentOlId = $elem.parents('ol').attr('id');
		var parentMenuItemId = parentOlId.slice('Parent'.length);
		$('#' + parentMenuItemId).find('a:first').focus();
	};

	this.up = function ($elem) {
		var $prev = $elem.parent('li').prev('li').find('a:first');
		if ($prev != null)
			$prev.focus();
	};

	this.right = function ($elem) {
		var $parentLi = $elem.parent('li');
		var $parentId = "Parent" + $parentLi.attr('id');
		var $firstAnchorOfSubmenu = $('ol[id=' + $parentId + '] a:first');
		$firstAnchorOfSubmenu.focus();
	};

	this.down = function ($elem) {
		var $next = $elem.parent('li').next('li').find('a:first');
		if ($next != null)
			$next.focus();
	};
};

//AccordionMenu concrete class
var AccordionAccessibleMenu = function () {
	this.left = function ($elem) {
		//do nothing
	};

	this.up = function ($elem) {
		var $popped = AccessibleMenu.accordionMenuStack.pop();
		if($popped != null)
			$popped.focus();
	};

	this.right = function ($elem) {
		//do nothing
	};

	this.down = function ($elem) {
		AccessibleMenu.accordionMenuStack.push($elem);
		var hasAccordionSubmenu = $elem.next('a.openAccordionNav').length > 0;
		var accordionSubmenuAlreadyOpen = $elem.next('a.openAccordionNav').hasClass('accordionNavOpened');
		var $nextElementToFocus = '';
		if (hasAccordionSubmenu && !accordionSubmenuAlreadyOpen) {
			$nextElementToFocus = $elem.parents('.topMenuItem').next('li').find('a:first');
			$nextElementToFocus.focus();
			return;
		}
		if (hasAccordionSubmenu) {
			$nextElementToFocus = $elem.parents('[role=menuitem]:first').children('ol.accordionNavContainer').find('a:first');
			$nextElementToFocus.focus();
		} else {
			var $nextSiblingLi = $elem.parents('[role=menuitem]').next('li:first');
			if ($nextSiblingLi != null && $nextSiblingLi.length > 0) {
				$nextElementToFocus = $nextSiblingLi.find('a:first');
				$nextElementToFocus.focus();
			} else {
				$nextElementToFocus = $elem.parents('.topMenuItem').next('li').find('a:first');
				$nextElementToFocus.focus();
			}
		}
	};
};

//Self invloked function
(function () {
	var isClick = false;
	$("a.navMainItem, a.navMenuItem").on("mousedown", function () {
		//Set isClick true if clicked on secondary nav menu item.
		isClick = true;
	});

	function menuHandler(e) {
		var $this = $(this);
		var accessibleMenu = new AccessibleMenu();
		var mainMenuItem = $this.parents('nav').hasClass('mainNav') | $this.parents('ol').hasClass('mainSubMenu');
		var accordionMenu = false;
		var $topmostAccordionMenuItem = $this.parents('nav').find('a:first');
		if ($this[0] === $topmostAccordionMenuItem[0]) {
			//Reset the stack
			AccessibleMenu.accordionMenuStack = [];
		}
		if (!mainMenuItem)
			accordionMenu = $this.parent('div').hasClass('accordionNavItem');
		accessibleMenu.initialize(mainMenuItem, accordionMenu);
		if (!accordionMenu)  {
			//show sub menu
			menuManager.menuMouseOver($this.parent('li'));
			window.lastMegaMenuOpen = $this.parent('li');
		}
		accessibleMenu.bindHandlers($this);
	}

	$(document).on("focusin", "a.navMainItem, a.navMenuItem", menuHandler);

	//hide last main menu item on tabbing through the menu item.
	$(".siteWrap").on("focusin", function (e) {
		menuManager.hideAllSubMenus(MAIN_MENU);
	});
}());
;
/*Strategy pattern
AccessibleMegaMenu: Abstract class with default implementation for bindHandlers, initialize
FormattedMegaMenu: Concrete implementation of Accessible mega menu*/
var AccessibleMegaMenu = function () {
	this.megaMenuItem = "";
	this.depth = 1;
	this.cols = 1;
};

AccessibleMegaMenu.prototype = {
	initialize: function (format) {
		this.setStrategy(new FormatedMegaMenu());
	},
	setStrategy: function (megaMenuItem) {
		this.megaMenuItem = megaMenuItem;
	},
	bindHandlers: function ($elem) {
		var self = this;
		var LEFT = 37;
		var UP = 38;
		var RIGHT = 39;
		var DOWN = 40;
		$elem.off('keydown.MegaMenu').on('keydown.MegaMenu', function (e) {
			if (e.which == LEFT) {
				self.left($elem);
				e.preventDefault();
			}
			if (e.which == UP) {
				self.up($elem);
				e.preventDefault();
			}
			if (e.which == RIGHT) {
				self.right($elem);
				e.preventDefault();
			}
			if (e.which == DOWN) {
				self.down($elem);
				e.preventDefault();
			}
		});
	},
	exitMegaMenu: function ($elem) {
		this.megaMenuItem.exitMegaMenu($elem);
	},
	left: function ($elem) {
		this.megaMenuItem.left($elem);
	},
	up: function ($elem) {
		this.megaMenuItem.up($elem);
	},
	right: function ($elem) {
		this.megaMenuItem.right($elem);
	},
	down: function ($elem) {
		this.megaMenuItem.down($elem);
	}
};

//Format 1,2,3,4 concrete implementation
var FormatedMegaMenu = function () {
	var self = this;
	this.left = function ($elem) {
		var rootTopLevelItem = $elem.closest('li').hasClass('topMenuItem');
		if (rootTopLevelItem) {
			$elem.closest('li.topMenuItem').prev().find('a:first').focus();
			return;
		}
		var $prev = $elem.closest('div.col').prev().find('li.widgetItem:first').find('a:first');
		if ($prev.length === 0)
		{
			// If we are as far left as we can go, select the mega menu root item:
			var rootItem = '';
			var closestMenu = $elem.closest('.mainNavMegaMenu');
			if (closestMenu.length > 0) {
				rootItem = closestMenu.attr('id');
				if (rootItem && rootItem.startsWith('mainNavMegaMenu')) {
					rootItem = rootItem.slice('mainNavMegaMenu'.length);
					if (!isNaN(parseInt(rootItem))) {
						rootItem = $('#MainItem' + rootItem + ' a');
						rootItem && rootItem.focus();
					}
				}
			}
		}
		else
		{
			$prev.focus();
		}
	};
	this.up = function ($elem) {
		var isWidgetItemElement = $elem.closest('li').hasClass('widgetItem');
		var rootTopLevelItem = $elem.closest('li').hasClass('topMenuItem');
		if (isWidgetItemElement)
			var topLevelMenuItem = $elem[0] == $elem.closest('li').parent('ol').children('li:first').find('a:first')[0];
		if (rootTopLevelItem) {
			var id = $elem.closest('li').attr('id');
			$('#mainNavMegaMenu' + id).removeClass('hover');
			menuManager.menuMouseOut($elem.closest('li'));
			return;
		}
		const isMegaMenuHeader = $elem.closest("header").length > 0;
		if (isMegaMenuHeader) {
			var MainItemId = '#MainItem' + $elem.closest('aside').attr('id').slice('mainNavMegaMenu'.length);
			$(MainItemId).find('a:first').focus();
			return;
		}
		if (topLevelMenuItem) {
			var $firstLink = $elem.closest('section').find("header a");
			$firstLink.focus();
			return;
		}
		var isLiHasParentOl = $elem.closest('li').parent('ol');
		if (isLiHasParentOl.length > 0 && isLiHasParentOl.children('li:first').children('a')[0] == $elem[0]) {
			isLiHasParentOl.parent('li').find('a:first').focus();
			return;
		}
		var prevLi = $elem.closest('li').prev('li');
		var $next = null;
		if (prevLi.hasClass('widgetItem')) {
			if (prevLi.children('ol').length > 0) {
				$next = $elem.closest('li').prev('li').children('ol').children('li:last').find('a:first');
			}
			else {
				$next = $elem.closest('li').prev('li').find('a:first');
			}
		}
		else
			$next = $elem.closest('li').prev('li').find('a:first');

		$next.focus();
	};
	this.right = function ($elem) {
		var rootTopLevelItem = $elem.closest('li').hasClass('topMenuItem');
		if (rootTopLevelItem) {
			$elem.closest('li.topMenuItem').next().find('a:first').focus();
			return;
		}
		var $next = $elem.closest('div.col').next().find('li.widgetItem:first').find('a:first');
		if ($next.length !== 0)
		{
			$next.focus();
		}
	};
	this.down = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//find on basis of submenu
			var $parentLi = $elem.parent('li');
			var $parentId = "mainNavMegaMenu" + $parentLi.attr('data-pageid');
			var $firstLink = $('aside[id=' + $parentId + '] a[role="menuitem"]').first();
			$firstLink.focus();
			return
		}
		const isMegaMenuHeader = $elem.closest("header").length > 0;
		if (isMegaMenuHeader) {
			var $firstSubmenuLink = $elem.closest("section").find('.megaMenuItem a[role="menuitem"]').first();
			$firstSubmenuLink.focus();
			return;
		}

		//find on basis of sibling
		var isWidgetItemElement = $elem.closest('li').hasClass('widgetItem');
		var $next = null;
		if (isWidgetItemElement) {
			var isLiHasChildren = $elem.closest('li').children('ol');
			if (isLiHasChildren.length > 0)
				$next = isLiHasChildren.children('li:first').children('a');
			else
				$next = $elem.closest('li').next('li').find('a:first');
		}
		else {
			$next = $elem.closest('li').next('li').find('a:first');//.children('li:first').children('a');
			if ($next.length <= 0) {
				$next = $elem.parents('li.widgetItem').next('li').find('a:first');
			}
		}

		if ($next != null && $next.length > 0)
		{
			$next.focus();
		}

	};
	this.exitMegaMenu = function ($elem) {
		var asideContainerId = $elem.parents('.megaMenuContainer.megaMenu').attr('id').slice('mainNavMegaMenu'.length);
		var $li = $('#MainItem' + asideContainerId);
		$elem.parents('.megaMenuContainer.megaMenu').removeClass('hover');
		menuManager.menuMouseOut($li);
		$elem.focus();
	};
};

//Self invloked function
(function () {
	$(document).on('focusin', '.megaMenuContainer h4.widgetTitle, .megaMenuContainer header a, #mainNav a.navMainItem , li.megaMenuItem a', function (e) {
		var $this = $(this);
		var execute = true;
		var topMenuItem = $this.hasClass('navMainItem');
		if (topMenuItem) {
			var $parent = $this.parent('li');
			if ($parent != null) {
				//Logic for flyout menu is in AccessibleMenu.js, so do not execute the logic below for the same
				if ($parent.data('displaymegamenu') == 'False')
					execute = false;
			}
		}
		if (execute) {
			var depth = $this.parents('.widgetPages').find('.depth').html();
			var cols = $this.parents('.widgetPages').find('.cols').html();
			var accessibleMegaMenu = new AccessibleMegaMenu();
			var mainMenuItem = true;
			//If top menu item(and has megamenu which is already checked above), replicate the logic for "mouse near" to load the mega menus
			if (topMenuItem) {
				var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
					.map(function () {
						$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
						return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
					}).toArray();
				reloadSharedContentContainers(megaMenuContentContainers);
			}
			accessibleMegaMenu.initialize(depth, cols);
			accessibleMegaMenu.bindHandlers($this);
		}
	});
}());
;
var AccessibleAnchors = function () {
	
};

AccessibleAnchors.prototype =
{
	configure: function (config) {
		var self = this;
		self.OPEN_IN_NEW_WINDOW_TEXT = ' Opens in new window';
		if (config.type === 'popup') {
			this.bindPopupHandlers(self);
		}
		if (config.type === 'extend') {
			this.bindExtendHandlers(self);
		}
		if (config.type === 'both') {
			this.bindPopupHandlers(self);
			this.bindExtendHandlers(self);
		}
		$(document).ready(function () {
			var anchors_TargetBlank = $('a[target=_blank]');
			$.each(anchors_TargetBlank, function () {
				var $this = $(this);
				self.setAriaLabelAndAlt($this);
			});
		});
	},
	bindExtendHandlers: function (self) {
		$('a[target=_blank]').on("focusin mouseenter", function (e) {
			var $this = $(this);
			self.setAriaLabelAndAlt($this);
		});		
	},
	setAriaLabelAndAlt: function ($this) {
		//If anchor has an image inside it
		if (this.hasImage($this)) {
			var $img = $this.children('img');
			if ($img.length == 0)
				$img = $this.children('span').children('img');
			var alt = $img.attr('alt');
			if (alt) {
				if (alt.indexOf(this.OPEN_IN_NEW_WINDOW_TEXT) === -1)
					$img.attr('alt', alt + this.OPEN_IN_NEW_WINDOW_TEXT);
			}
			else {
				$img.attr('alt', $img.attr('title') + this.OPEN_IN_NEW_WINDOW_TEXT);
			}
			this.setAriaLabel($this, $img.attr('alt'));
		}
		else {
			this.setAriaLabel($this, $this.text() + this.OPEN_IN_NEW_WINDOW_TEXT);
		}
	},
	bindPopupHandlers: function (self) {
		$('a[target=_blank]').on("focusin mouseenter", function (e) {
			var $this = $(this);
			$this.trigger('focusout');
			$this.append($('<span aria-hidden="false" aria-label="opens in new window" title="opens in new window" class="newWindowIndicator"></span>'));
		});	

		$('a[target=_blank]').on("focusout mouseleave", function (e) {
			$('.newWindowIndicator').remove();
		});		
	},
	setAriaLabel: function($anchor, ariaLabelText){
		var ariaLabel = $anchor.attr('aria-label');
		if (ariaLabel) {
			if (ariaLabel.indexOf(this.OPEN_IN_NEW_WINDOW_TEXT) == -1)
				$anchor.attr('aria-label', ariaLabelText);
		}
		else {
			$anchor.attr('aria-label', ariaLabelText);
		}
	},
	hasImage: function ($anchor) {
		var hasImage = false;
		if ($anchor.children('img') != null && $anchor.children('img').length > 0)
			return true;
		else if ($anchor.children('span') != null && $anchor.children('span').length > 0) {
			return $anchor.children('span').children('img') != null && $anchor.children('span').children('img').length > 0;
		}
	}

};

//Self invloked function
(function () {
	//Add a warning span to body for anchors that open in new window
	$(
		new AccessibleAnchors().configure({ type: 'extend' })
	);
}());



;
/* File Created: February 11, 2013 by Vishal Bhatia*/

function rearrangeFlyouts(clearDOM) {
    if (clearDOM) {
        //Remove any old .pop elements from the DOM to reload the new one.
        $('.flyOut.moved').remove();
    }
    //Grab all the flyouts that are not moved yet and are not tooltips and not in WidgetManager
    var $flyOutDivs = $('.flyOut').not('.moved').not('.helpTip').not('.widgetManager');
    var parentID;
    var marginLeft, marginTop;
    $flyOutDivs.each(function (e) {
        parentID = $(this).parent('.flyOutParent').attr('id');

        //If the element does not have a flyOutParent, display it on the center of the screen.
        if (parentID == undefined) {
            marginLeft = '-' + $(this).outerWidth() / 2 + 'px';
            marginTop = '-' + $(this).outerHeight() / 2 + 'px';

            $(this).css('left', '50%');
            $(this).css('margin-left', marginLeft);
            $(this).css('top', '50%');
            $(this).css('margin-top', marginTop);

            $(this).appendTo('body');
            $(this).addClass('moved');
            //TODO: Confirm from Kyle and remove 2 lines below since they are being done through css.
            $(this).css('position', 'absolute');
            $(this).css('z-index', '100');
        }
        else {
            //Remove any pre existing copies of this element from the DOM.
        	$('[data-parentID=' + parentID + ']').remove();
			//Remove margin styles if the element has a flyOutParent.
            $(this).css({ 'margin-left': '', 'margin-top': '' });
            $(this).appendTo('body');
            $(this).addClass('moved');
            //TODO: Confirm from Kyle and remove 2 lines below since they are being done through css.
            $(this).css('position', 'absolute');
            $(this).css('z-index', '100');
            $(this).attr('data-parentID', parentID);
            adjustFlyoutPosition($('#' + parentID), $(this));
        }
    });
}

///Executes when the browser is being resized or the screen orientation changes(portrait/landscape).
function rearrangeFlyoutsOnResizeEvents() {
	//Grab all the flyouts that are not moved yet and are not tooltips and not in WidgetManager
	var $flyOutDivs = $('.flyOut').not('.helpTip').not('.widgetManager').not('.mainNavMegaMenu.megaMenuContainer');;
	var parentID;
	var marginLeft, marginTop;
	$flyOutDivs.each(function (e) {
		parentID = $(this).data('parentid');
		//If the element does not have a flyOutParent, display it on the center of the screen.
		if (parentID == undefined) {
			marginLeft = '-' + $(this).outerWidth() / 2 + 'px';
			marginTop = '-' + $(this).outerHeight() / 2 + 'px';
			$(this).css('margin-left', marginLeft);
			$(this).css('margin-top', marginTop);
		}
		else {			
			adjustFlyoutPosition($('#' + parentID), $(this));
		}
	});
}

///Checks if any ancestor of a flyout element is fixed positioned.
function anyAncestorFixedPositioned($parent) {
	var anyAncestorFixedPosition = false;
	if ($parent.css('position') === 'fixed')
		anyAncestorFixedPosition = true;
	if (!anyAncestorFixedPosition) {
		$parent.parents().each(function () {
			if (!anyAncestorFixedPosition) {
				if ($(this).css('position') === 'fixed')
					anyAncestorFixedPosition = true;
			}
		});
	}
	return anyAncestorFixedPosition;
}

function adjustFlyoutPosition($parent, $this) {
    var $parentElem = $parent;    
    if ($parentElem != null) {        
        var parentWidth = $parent.outerWidth(false);
        var parentHeight = $parent.outerHeight(false);
        var offset = $parent.offset();        
        if (offset != null) {
            var offsetLeft = offset.left;
            //Take into account scroll height if the document has been scrolled, to compute the top distance from viewport. VB
            var offsetTop = $this.css('position') === 'fixed' ? offset.top - $(document).scrollTop() : offset.top; // Take into account if the item is fixed or absolutely positioned.                        
                        
			if (anyAncestorFixedPositioned($parent))
				$this.css('position', 'fixed');

            var offsetRight;
            var offsetBottom;

            if ($this.hasClass('left') || $this.hasClass('leftCorner')) {
                offsetLeft = offsetLeft - $this.outerWidth(false);
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('right') || $this.hasClass('rightCorner')) {
                offsetLeft = offsetLeft + parentWidth;
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('top') || $this.hasClass('topCorner')) {
                offsetBottom = offsetTop - $this.outerHeight(false);
                $this.css('top', offsetBottom);
            }

            if ($this.hasClass('bottom') || $this.hasClass('bottomCorner')) {
                offsetTop = offsetTop + parentHeight;
                $this.css('top', offsetTop);                
            }

            if ($this.hasClass('leftEdge')) {
                $this.css('left', offsetLeft);

                if ($this.hasClass('rightEdge')) {
                    $this.css('width', parentWidth);
                }                
            }

            if ($this.hasClass('rightEdge')) {
                offsetLeft = offsetLeft + parentWidth - $this.outerWidth(false);
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('topEdge')) {
                $this.css('top', offsetTop);

                if ($this.hasClass('bottomEdge')) {
                    $this.css('height', parentHeight);
                }
            }

            if ($this.hasClass('bottomEdge')) {
                offsetTop = offsetTop + parentHeight - $this.outerHeight(false);                
                $this.css('top', offsetTop);
            }

            if ($this.hasClass('center') && ($this.hasClass('top') || $this.hasClass('bottom'))) {
                offsetLeft = offsetLeft + (parentWidth / 2) - ($this.outerWidth(false) / 2);
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('center') && ($this.hasClass('left') || $this.hasClass('right'))) {
                offsetTop = offsetTop + (parentHeight / 2) - ($this.outerHeight(false) / 2);
                $this.css('top', offsetTop);
            }
        }
    }
};
// Note some of this functionality is in Menu.js as well

// Deferred Loading for mega menus
$(function () {
	"use strict";

	var thisRef = {};

	thisRef.initialized = false;

	var LOAD_TRIGGER_DISTANCE = 200; // in px
	var $megaMenus = $('[data-displaymegamenu="True"]');
	function isNear(element, distance, event) {
		var left = element.offset().left - distance,
			top = element.offset().top - distance,
			right = left + element.width() + 2 * distance,
			bottom = top + element.height() + 2 * distance,
			x = event.pageX,
			y = event.pageY;

		return (x > left && x < right && y > top && y < bottom);
	};

	$('body:not(.mobile)').bind('mousemove.megaMenuLazyLoad', function (e) {
		$megaMenus.each(function (index) {
			var mouseIsNear = isNear($(this), LOAD_TRIGGER_DISTANCE, e);
			if (mouseIsNear) {
				if (!thisRef.initialized) {
					$('body').unbind('.megaMenuLazyLoad');
					thisRef.initialized = true;
					var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
					.map(function () {
						$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
						return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
					}).toArray();

					window.Pages.megaMenuLoaded.resolve();
					reloadSharedContentContainers(megaMenuContentContainers);
				}
			} 
		});
	});
});

var reloadSharedContentContainers = function (containerIDs) {
	if (containerIDs.length > 0) {
		// Reload all mega menus?
		var url = getAbsoluteUrl('/Content/Load?contentCollectionID=' + $('#hdnContentCollectionID').val() + "&StructureID=" + $('#hdnStructureID').val() + "&themeID=" + $('#hdnThemeID').val());
		if ($('body').hasClass('preview'))
			url += "&preview=true";
		$.ajax({
			url: url,
			type: 'POST',
			data: JSON.stringify({ "contentContainerIDs": containerIDs }),
			contentType: 'application/json',
			cache: false,
			async: true,
			ignoreEditor: true, //prevent for executing global editor event
			error: function (xhr, textStatus, exception) {
				if (xhr.status != 0) {
					alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
				}
			},
			success: function (response) {
				if (response.PageModified !== undefined && response.PageModified === true && response.PageModifiedMessage) {
					if (confirm(response.PageModifiedMessage)) {
						document.cookie = "refresh=true; max-age=5";
						location.reload();
					}
				}
				else if (response.ErrorMessage)
					alert(response.ErrorMessage);
				else {
					//Replace content containers HTML
					var root = document.createElement("div");
					root.innerHTML = response;
					$(root).find('#fb-root').remove();
					$('head').append($(root).find('.bundledStyles'));
					var allChilds = root.childNodes;
					for (var i = 0; i < containerIDs.length; i++) {
						var contentContainerID = containerIDs[i];
						//Grab Content Container HTML from response
						var contentContainerHtml = null;
						for (var j = 0; j < allChilds.length; j++) {
							if (allChilds[j].id && allChilds[j].id == 'cc' + contentContainerID) {
								contentContainerHtml = allChilds[j].outerHTML;
								break;
							}
						}
						if (contentContainerHtml != null) {
							var $contentContainer = $('#cc' + contentContainerID);
							$contentContainer.empty().replaceWith(contentContainerHtml);
						} else {
							//ContentContainer Html was not found. This might happen when we have a html version and switch (Refresh containers) to a linked version on the same page.
						}
					}

					if (window.cpMedia) {
						$('.mainNavMegaMenu.megaMenuContainer').each(function () {
							applyElementQueryToChildren($(this));
						});
					}

					//TODO: unbind/destroy events/drag/drop on elements before initialize containers
					if (typeof InitializeContainers == 'function' && getCookieValue("enableLiveEdit") === "true") {
						InitializeContainers({ hidePopover: false });
						$('.mainNavMegaMenu.megaMenuContainer').find('.pinned').removeClass('pinned');
						setTimeout(function () { // It is unfortunate to use  timeout here, but there is a very difficult to reproduce race condition in FF where it is still getting unpinned by something
							$('.mainNavMegaMenu.megaMenuContainer').find('.pinned').removeClass('pinned');
						},300);
					}
					if (menuManager && typeof menuManager.attachDragAndDropHandlers == 'function') {
						menuManager.attachDragAndDropHandlers();
					}

					//Execute this function or else the click event wont be registered for tabbed widgets inside megamenus.
					Core.Layout.attachTabbedWidgetTabHandlers();
				}
			}
		});
	}
};

// Handle touchstart event for touch devices. First click will load the megamenus if they haven't been loaded and show the mega menu. Second click will navigate to the menu link itself.
$('[data-displaymegamenu="True"]').bind('touchstart', function (e) {
	e.stopPropagation(); // prevent this event from bubbling up and triggering the handler on document below!
	if (($(this).closest('.mainNavHolderMobile')[0] !== undefined) || ($('body:not(.mobile)').length === 0)) { // Return if mobile menu is being shown
		return;
	}
	if (window.lastMegaMenuOpen === this) { // Used to do the second click navigation if the same menu is clicked twice.
		return;
	}
	e.preventDefault();
	if (!window.megaMenuInitializedForTouch) {
		$('body').unbind('.megaMenuLazyLoad');
		window.megaMenuInitializedForTouch = true;
		var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
		.map(function () {
			$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
			return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
		}).toArray();

		window.Pages.megaMenuLoaded.resolve();
		reloadSharedContentContainers(megaMenuContentContainers);
	}

	menuManager.menuMouseOver($(this)); 
	window.lastMegaMenuOpen = this;
});

$(document).bind('touchstart click', function (e) {
	if (window.lastMegaMenuOpen === undefined || window.lastMegaMenuOpen === this || !isResolvedOrState(window.Pages.megaMenuLoaded)) {
		return;
	}
	//Skip menumouseout method if user slide up the expanded mega menu to scroll
	if (!e.target.id.startsWith("mainNavMegaMenu")) {
		if (!$(e.target).parents("aside[id^='mainNavMegaMenu']").length) {
			menuManager.menuMouseOut($(window.lastMegaMenuOpen));
		}
	}
});
(function () {
	const focusableSelector = 'a:not([disabled]):not([aria-hidden="true"]),input:not([disabled]):not([type="hidden"])';
	const toggleEl = (target, toggleable) => {
		const display = target.getAttribute("aria-expanded") === "false";
		toggleable.style.display = display ? "block" : "none";
		target.setAttribute("aria-expanded", display);

		if (display) {
			target.classList.add("active");
		} else {
			target.classList.remove("active");
		}
	};

	const repositionPopover = (target) => {
		const elId = target.getAttribute("aria-controls");
		if (!elId) {
			return;
		}

		const popover = document.getElementById(elId);
		if (!popover) {
			return;
		}

		const popoverWidth = popover.offsetWidth;
		const rect = target.getBoundingClientRect();
		const targetHeight = target.offsetHeight;
		const distanceFromRight = window.innerWidth - rect.left;
		const parent = target.parentElement;
		const parentWidth = parent.offsetWidth;

		if (distanceFromRight < popoverWidth && parentWidth < popoverWidth) {
			popover.classList.add("flip");
			const shift = parentWidth - popoverWidth;
			popover.style.left = `${shift}px`;
		} else {
			popover.classList.remove("flip");
			popover.style.left = `0px`;
		}

		const parentRect = parent.getBoundingClientRect();
		const distanceFromParentBottom = parentRect.bottom - rect.bottom;
		popover.style.bottom = `${distanceFromParentBottom + targetHeight}px`;
		popover.style.zIndex = 1;
		popover.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest"});
	};

	const handleCpNavKeydown = (event, focusables) => {
		if (focusables.length < 1) {
			return;
		}

		const currentFocusedIndex = focusables.findIndex(element => element === document.activeElement);
		let nextFocusIndex = -1;
		switch (event.key) {
			case 'ArrowLeft':
			case 'ArrowUp':
				event.preventDefault();
				if (currentFocusedIndex > 0) {
					nextFocusIndex = currentFocusedIndex - 1;
				} else {
					nextFocusIndex = focusables.length - 1;
				}
				break;
			case 'ArrowRight':
			case 'ArrowDown':
				event.preventDefault();
				if (currentFocusedIndex < focusables.length - 1) {
					nextFocusIndex = currentFocusedIndex + 1;
				} else {
					nextFocusIndex = 0;
				}
				break;
			case 'Home':
				event.preventDefault();
				nextFocusIndex = 0;
				break;
			case 'End':
				event.preventDefault();
				nextFocusIndex = focusables.length - 1;
				break;
			default:
				break;
		}

		if (nextFocusIndex > -1) {
			focusables[currentFocusedIndex].setAttribute('tabindex', '-1');
			focusables[nextFocusIndex].setAttribute('tabindex', '0');
			focusables[nextFocusIndex].focus();
		}
	};

	const handleCpNav2DKeydown = (e, focusables) => {
		const map = {
			"ArrowLeft": { pos: "left", sign: 1, finder: "findLast", ctrl: false },
			"ArrowRight": { pos: "left", sign: -1, finder: "find", ctrl: false },
			"ArrowUp": { pos: "top", sign: 1, finder: "findLast", ctrl: false },
			"ArrowDown": { pos: "top", sign: -1, finder: "find", ctrl: false },
			"Home": { pos: "left", sign: 1, finder: "find", ctrl: e.ctrlKey },
			"End": { pos: "left", sign: -1, finder: "findLast", ctrl: e.ctrlKey }
		};

		const settings = map[e.key];

		if (!settings) {
			return;
		}

		const current = e.target.closest(focusableSelector);

		if (!current) {
			return;
		}

		e.preventDefault();

		const pos = settings.pos;
		const offsetConst = pos === "top" ? "left" : "top";
		const sign = settings.sign;
		const ctrlKey = settings.ctrl;
		const rectCurrent = current.getBoundingClientRect();
		const tolerance = pos === "top" ? current.offsetHeight / 3 : current.offsetWidth / 3;

		const finder = settings.finder;

		const elFound = focusables[finder](el => {
			const rect = el.getBoundingClientRect();
			const currentDistance = sign * (rectCurrent[pos] - rect[pos]);
			const offset = Math.abs(rectCurrent[offsetConst] - rect[offsetConst]);
			return (offset < tolerance && currentDistance > 0) || ctrlKey;
		});

		if (!elFound) {
			return;
		}

		current.setAttribute("tabindex", "-1");
		elFound.setAttribute("tabindex", "0");
		elFound.focus();
		return elFound;
	}

	const handleEl = (target) => {
		const elId = target.getAttribute("aria-controls");
		if (!elId) {
			return;
		}

		const toggleable = document.getElementById(elId);
		if (!toggleable) {
			return;
		}

		toggleEl(target, toggleable);

		const handleFocusout = (e) => {
			if (toggleable.contains(e.relatedTarget) || target.getAttribute("aria-expanded") !== "true") {
				return;
			}

			if (toggleable.contains(e.currentTarget) && target.contains(e.relatedTarget)) {
				// Exclude the case where the focus is moving from popup back to button (e.g. when closing the currently focused popup with a left-mouse click on the button)
				// The popup will be closed within the keydown handleEl(); failure to exclude this case will cause a bug where toggleEl() is called twice, making it difficult to close the popup.
				// https://civicplus.tpondemand.com/entity/182413-211-calendar-month-view-remove-menu
				return;
			}

			toggleEl(target, toggleable);
		};

		if (!target["data-cp-toggle"]) {
			target["data-cp-toggle"] = true;
			toggleable.addEventListener("focusout", handleFocusout);
			target.addEventListener("focusout", handleFocusout);
		}

		const closeActionEl = toggleable.querySelector(".close");

		if (!closeActionEl) {
			return toggleable;
		}

		const handleClose = (e) => {
			if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
				e.preventDefault();
				toggleEl(target, toggleable);
				target.focus();
			}
		};

		if (!closeActionEl["data-cp-toggle"]) {
			closeActionEl["data-cp-toggle"] = true;
			closeActionEl.addEventListener("click", handleClose);
			closeActionEl.addEventListener("keydown", handleClose);
		}

		return toggleable;
	};

	const handleDropdown = (target, func) => {
		const toggleable = handleEl(target);
		if (!toggleable) {
			return;
		}
		const focusables = Array.from(toggleable.querySelectorAll(focusableSelector));
		if (focusables.length === 0) {
			return;
		}
		focusables.forEach( (item, index) => {
			item.setAttribute("tabindex", -!!index|0);
		});
		if (!target["data-cp-toggle-navkeys"]) {
			target["data-cp-toggle-navkeys"] = true;
			target.addEventListener("keydown", e => {
				if (e.key === "ArrowDown" && target.getAttribute("aria-expanded") === "true") {
					focusables[0].focus();
				}
			});
			toggleable.addEventListener("keydown", e => {
				func(e, focusables);
			});
		}
	}

	const handleDropdown1D = (target) => {
		return handleDropdown(target, handleCpNavKeydown);
	}

	const handleDropdown2D = (target) => {
		return handleDropdown(target, handleCpNav2DKeydown);
	}

	const handlePopover = (target) => {
		handleEl(target);
		repositionPopover(target);
	};

	/**
	 * From the given toggle button's aria-controls elements returns active and total panel count
	 * @target  {Element} foo [description]
	 */
	const getPanels = (target) => {
		const elIds = target.getAttribute("aria-controls");
		const panelIds = elIds.split(' ');
		let activePanels = 0;
		let totalPanels = 0;
		for (const panelId of panelIds) {
			const panel = document.getElementById(panelId);
			if (!panel) {
				continue
			}
			totalPanels += 1
			activePanels += Number(!!( panel.offsetWidth || panel.offsetHeight || panel.getClientRects().length ))
		}

		return [activePanels, totalPanels];
	}

	/**
	 * Get total height of the given element's children
	 * @collapsable  {Element} foo [description]
	 */
	const collapsableHeight = (collapsable) => {
		const totalHeight = Array.from(collapsable.children).reduce((acc, child) => acc + child.offsetHeight, 0);
		return `calc(${totalHeight}px + 2px)`
	}

	const handleCollapsar = (target) => {
		const elIds = target.getAttribute("aria-controls");
		if (!elIds) {
			return;
		}

		const collapsables = elIds.split(' ').filter(x => document.getElementById(x));

		const expand = target.getAttribute("aria-expanded") === "false";

		for (const collapsableId of collapsables) {

			const collapsable = document.getElementById(collapsableId);
			collapsable.style.overflow = "hidden";
			collapsable.style.transition = "all 300ms ease-in";

			// get all the buttons those are responsible for the given panel
			const controllers = document.querySelectorAll(`[aria-controls^="${collapsableId}"],[aria-controls*=" ${collapsableId} "],[aria-controls$="${collapsableId}"]`);

			if (expand) {
				collapsable.style.height = "0";
				collapsable.style.display = "block";
				collapsable.style.height = collapsableHeight(collapsable);
				let nextFocus = null;
				for (const controller of controllers) {
					const [activePanels, totalPanels] = getPanels(controller);
					if (activePanels !== totalPanels) {
						continue;
					}
					nextFocus = document.getElementById(controller.dataset.cpToggleFocus);
					controller.setAttribute("aria-expanded", "true");
					controller.classList.add("active");
					if (controller.dataset.cpToggleActiveTitle) {
						controller.innerHTML = controller.dataset.cpToggleActiveTitle;
					}
				}

				window.setTimeout(() => {
					collapsable.style.removeProperty("height");
					collapsable.style.removeProperty("overflow");
					nextFocus && nextFocus.focus();
				}, 300);
				continue;
			}

			collapsable.style.height = collapsableHeight(collapsable);
			collapsable.style.overflow = "hidden";
			window.setTimeout(() => {
				collapsable.style.height = "0";
			}, 0);

			window.setTimeout(function () {
				collapsable.style.display = "none";
				for (const controller of controllers) {
					const [activePanels, _] = getPanels(controller);
					if (activePanels !== 0) {
						continue;
					}
					controller.setAttribute("aria-expanded", "false");
					controller.classList.remove("active");
					if (controller.dataset.cpToggleInactiveTitle) {
						controller.innerHTML = controller.dataset.cpToggleInactiveTitle;
					}
				}
			}, 300);
		}
	};

	const handleCpToggles = (e) => {
		if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
			const target = e.target.closest("[data-cp-toggle]");
			if (!target) {
				return;
			}
			e.preventDefault();
			// target.focus(); // focus element so that focusout is fired to close other open menus.

			const actionDescriptor = target.dataset.cpToggle;
			switch (actionDescriptor) {
				case "popover":
					handlePopover(target);
					break;
				case "collapse":
					handleCollapsar(target);
					break;
				case "dropdown":
					handleDropdown1D(target);
					break
				case "dropdown-2d":
					handleDropdown2D(target);
					break
				default:
					handleEl(target);
			}
		}

		const escTargets = new Set(["dropdown", "dropdown-2d"]);

		if (e.type === "keydown" && e.key === "Escape") {
			const toggles = document.querySelectorAll('[data-cp-toggle][aria-expanded="true"]');
			for (const target of toggles) {
				const toggleType = target.dataset.cpToggle;
				if (escTargets.has(toggleType)) {
					const elId = target.getAttribute("aria-controls");
					if (!elId) {
						continue;
					}

					const toggleable = document.getElementById(elId);
					if (!toggleable) {
						continue;
					}

					const refocus = toggleable.contains(document.activeElement);

					toggleEl(target, toggleable);

					if (refocus) {
						target.focus();
					}
				}
			}
		}
	};

	document.addEventListener("click", handleCpToggles);
	document.addEventListener("keydown", handleCpToggles);
})();
;
/* Responsive Menu Font Sizing
 * Joshua Enfield
 *  -------------
 * This resizes menus responsively. It takes into account the original font size.
 * If auto widths are on font sizes are adjusted based on the size left in menu items. 
 * If auto widths are off font sizes are adjusted based on the size left in the main nav.
 * ---------------
 * Common Usage: $('menuOLSelector').responsiveMenuText();
 * jQuery Usage expects markup in the form of ol > li > a
 */
(function ($, window, undefined) {

	'use strict';

	var DEBUG = false;
	var diag = function (msg) {
		if (DEBUG) {
			window.console.log('[ Responsive Menus ] ' + msg);
		}
	};
	
	$.MenuTextResizer = function (options, element) {
		this.$mainNavMenu = $(element);
		this.$topLevelMenuItems = this.$mainNavMenu.find('a');
		this._init(options);
	};

	// the options
	$.MenuTextResizer.defaults = {
		ratio: 0.5,
		timeout: 120,
		numberOfFontSizes: 20,
		tolerance: 0.00
	};

	$.MenuTextResizer.prototype = {
		_init: function (options) {
			// options
			this.options = $.extend(true, {}, $.MenuTextResizer.defaults, options);

			// local variables
			var self = this;
			this.timer = null;
			this.autoCreatedWrapper = false;
			createInnerWrappersIfWrappersDoNotExist();
			var desktopFontSize = parseFloat(this.$topLevelMenuItems.css('font-size')); // Initial Font Size. When at maximum size font-size should be this.
			var numberOfFontSizes = this.options.numberOfFontSizes;
			var fontSizes = getFontSizes();
			var currentFontIndex = fontSizes.length - 1;
			var tolerance = this.options.tolerance;
			var autoWidths = this.$mainNavMenu.data('autowidth') == true;

			var ratioToTriggerResize = autoWidths ? { menuRatio: 1.00, itemRatio: self.options.ratio } : { menuRatio: self.options.ratio, itemRatio: 1.00 };
			//var ratioToTriggerResize = { menuRatio: 0.68, itemRatio: 1.00 };
			//var ratioToTriggerResize = { menuRatio: 1.00, itemRatio: 0.70 };

			if (autoWidths)
				diag('Auto Widths Detected.');
			else {
				diag('Auto Widths Turned Off.');
			}

			diag('Font Sizes: ' + fontSizes);

			// Gets list of font sizes to resize amongst

			function getFontSizes () {
				var fontSizes = [];

				// Linear Scale
				for (var i = 0; i < numberOfFontSizes; i++) {
					fontSizes[i] = Math.floor(desktopFontSize / numberOfFontSizes * (i + 1));
				}

				// Exponential Decay
				/*
				fontSizes[numberOfFontSizes - 1] = desktopFontSize;
				for (var i = (numberOfFontSizes-2); i > 0; i--) {
					fontSizes[i] = Math.floor(0.95 * fontSizes[i+1]);
				}*/

				return fontSizes;
			}

			// Increases font size.
			var increaseFontSize = function () {
				var wasFontSizeIncreased = false;

				if (currentFontIndex < (fontSizes.length - 1)) {
					currentFontIndex++;
					wasFontSizeIncreased = true;
					// ratioToTriggerResize.itemRatio -= 0.1;
				}

				self.$topLevelMenuItems.css('font-size', fontSizes[currentFontIndex]);
				diag('INCREASE IN SIZE TRIGGERED (sizeIndex: ' + currentFontIndex + (currentFontIndex == (numberOfFontSizes - 1) ? '(MAX)' : '') + ' ,' + fontSizes[currentFontIndex] + ')');
				return wasFontSizeIncreased;
			};

			// Decreases font size.
			var decreaseFontSize = function () {
				var wasFontSizeDecreased = false;

				if (currentFontIndex > 0) {
					currentFontIndex--;
					wasFontSizeDecreased = true;
					//  ratioToTriggerResize.itemRatio += 0.1;
				}

				self.$topLevelMenuItems.css('font-size', fontSizes[currentFontIndex]);

				diag('DECREASE IN SIZE TRIGGERED (sizeIndex: ' + currentFontIndex + ',' + fontSizes[currentFontIndex] + ')');
				return wasFontSizeDecreased;
			};

			// Wraps menu Items with a span if spans are not already wrapping them.
			function createInnerWrappersIfWrappersDoNotExist () {
				if (self.$topLevelMenuItems.find('span').length === 0) {
					self.$topLevelMenuItems.removeAttr('style').wrapInner('<span/>').find('span').css('display', 'inline');
					self.autoCreatedWrapper = true;
				}
			}

			// Get the ratios of space taken to space available for menu items and the menu itself
			function getRatio () {
				var getItemRatio = function ($item) { return $item.find('span').width() / $item.width(); };
				var itemRatio = getItemRatio(self.$topLevelMenuItems.first());

				var widthConsumedByMenuItems = 0;
				self.$topLevelMenuItems.each(function () {
					widthConsumedByMenuItems += $(this).outerWidth(true);

					var currentItemRatio = getItemRatio($(this));
					if (currentItemRatio > itemRatio) {
						itemRatio = currentItemRatio;
					}

				});

				var menuRatio = widthConsumedByMenuItems / self.$mainNavMenu.width();
				var result = {
					menuRatio: menuRatio.toFixed(2),
					itemRatio: itemRatio.toFixed(2)
				};

				return result;
			}

			// Conditions
			var predicates = (function () {
				// Should return true when an increase in size should occur.
				var shouldIncreaseInSize = function () {
					var currentRatio = getRatio();
					diag(JSON.stringify(currentRatio));
					if (autoWidths) {
						return currentRatio.itemRatio < (ratioToTriggerResize.itemRatio - tolerance);
					} else {
						return currentRatio.menuRatio < (ratioToTriggerResize.menuRatio - tolerance);
					}
				};

				// Should return true when a decrease in size should occur.
				var shouldDescreaseInSize = function () {
					var currentRatio = getRatio();
					diag(JSON.stringify(currentRatio));
					if (autoWidths) {
						return currentRatio.itemRatio > (ratioToTriggerResize.itemRatio - tolerance);
					} else {
						return currentRatio.menuRatio > (ratioToTriggerResize.menuRatio - tolerance);
					}
				};

				return {
					shouldIncreaseInSize: shouldIncreaseInSize,
					shouldDescreaseInSize: shouldDescreaseInSize
				};

			}());

			// Function that actually adjusts menu font sizes.
			this.adjustMenuFontSize = function () {
				while (predicates.shouldIncreaseInSize() && increaseFontSize()) ;
				while (predicates.shouldDescreaseInSize() && decreaseFontSize()) ;
			};

			this._initDefault();
		},
		_initDefault : function () {
			// Setup and bind menu resizing logic
			var self = this;
			var timeout = self.options.timeout || 100; //debouncing
			$(window).bind('resize.responsiveMenuText', function () {
				self.timer && clearTimeout(self.timer);
				
				self.timer = setTimeout(function () {
					self.adjustMenuFontSize();
				}, timeout);
			});
			self.adjustMenuFontSize();
		},
		dispose: function () {
			var self = this;
			clearTimeout(self.timer);
			$(window).unbind('.responsiveMenuText');
			if (self.autoCreatedWrapper) {
				self.$topLevelMenuItems.find('span').contents().unwrap();
				setTimeout(function () { self.$topLevelMenuItems.removeAttr('style'); }, 200);
			}
		}
	};

	/* jQuery Plugin Support
	   Expected Markup structure: ol > li > a
	   Menu Text is dynamically wrapped by a span if it isn't already.
	*/
	$.fn.responsiveMenuText = function (options) {
		if (typeof options === 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				var instance = $.data(this, 'responsiveMenuText');
				if (!instance) {
					diag("cannot call methods on responsiveMenuText prior to initialization; " +
					"attempted to call method '" + options + "'");
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					diag("no such method '" + options + "' for responsiveMenuText instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		}
		else {
			this.each(function () {
				var instance = $.data(this, 'responsiveMenuText');
				if (instance) {
					instance._init(options);
				}
				else {
					instance = $.data(this, 'responsiveMenuText', new $.MenuTextResizer(options, this));
				}
			});
		}

		return this;
	};

})(jQuery, window);
/**
 * Based on  jquery.rwdmenu.js v1.0.1
 * http://www.codrops.com
 *
 */
; (function ($, window, undefined) {

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $('body');

	$.RWDMenu = function (options, element) {
		this.$el = $(element);
		this._init(options);
	};

	// the options
	$.RWDMenu.defaults = {
		// classes for the animation effects
		animationClasses: { classin: 'rwd-animate-in', classout: 'rwd-animate-out' },
		// callback: click a link that has a sub menu
		// el is the link element (li); name is the level name
		onLevelClick: function (el, name) { return false; },
		// callback: click a link that does not have a sub menu
		// el is the link element (li); ev is the event obj
		onLinkClick: function (el, ev) { return false; }
	};

	$.RWDMenu.prototype = {
		_init: function (options) {

			// options
			this.options = $.extend(true, {}, $.RWDMenu.defaults, options);
			// cache some elements and initialize some variables
			this._config();

			var animEndEventNames = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'msAnimation': 'MSAnimationEnd',
				'animation': 'animationend'
			},
				transEndEventNames = {
					'WebkitTransition': 'webkitTransitionEnd',
					'MozTransition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'msTransition': 'MSTransitionEnd',
					'transition': 'transitionend'
				};
			// animation end event name
			this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.rwdmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.rwdmenu',
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations,
			this.supportTransitions = Modernizr.csstransitions;

			var self = this;
			this.clickMenuItem = function (event) {
				//if (!menuManager.mobileMainNav) return true;

				event.stopPropagation();

				var $li = $(this),
					$submenu = $li.children('ol.rwd-submenu');

				if ($submenu.length == 0) {
					var id = $li.attr('id'); //.replace(/item|leftItem/i, '');
					var $olSubMenu = menuManager.$divListSubMenus.find('#Parent' + id);
					if ($olSubMenu.length > 1) {
						//remove duplicates. they might have been added by different menu (main/side)
						$olSubMenu.slice(1).remove();
						$olSubMenu = menuManager.$divListSubMenus.find('#Parent' + id);
					}
					if ($olSubMenu.length == 1) {
						var $back = $('<li class="rwd-back"><a href="#" style="z-index:2;" class="navMenuItem backMenuLink" aria-haspopup="true" role="menuitem">Back</a></li>');
						$back.bind('click.rwdmenu', self.clickBack);
						$olSubMenu.prepend($back);
						$olSubMenu.addClass('rwd-submenu');
						$olSubMenu.find('li:not(.rwd-back)').bind('click.rwdmenu', self.clickMenuItem);
						$li.append($olSubMenu);
						$submenu = $olSubMenu;
					}
				}

				if ($submenu.length > 0) {

					var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
						onAnimationEndFn = function () {
							self.$menu.unbind(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('rwd-subview');
							$('.rwd-subviewopen').children('ol').attr('aria-hidden', 'true');
							$li.addClass('rwd-subviewopen').parents('.rwd-subviewopen:first').removeClass('rwd-subviewopen').addClass('rwd-subview');
							$li.children('ol').attr('aria-hidden', 'false');
							$flyin.remove();
							$li.find('.openThePageLink').focus();
						};

					setTimeout(function () {
						$flyin.addClass(self.options.animationClasses.classin);
						self.$menu.addClass(self.options.animationClasses.classout);
						if (self.supportAnimations) {
							self.$menu.bind(self.animEndEventName, onAnimationEndFn);
						} else {
							onAnimationEndFn.call();
						}

						self.options.onLevelClick($li, $li.children('a:first').text());
					});

					return false;

				} else {
					self.options.onLinkClick($li, event);
				}

			};

			this.clickBack = function (event) {

				var $this = $(this),
					$submenu = $this.parents('ol.rwd-submenu:first'),
					$item = $submenu.parent(),
					$flyin = $submenu.clone().insertAfter(self.$menu);

				var onAnimationEndFn = function () {
					self.$menu.unbind(self.animEndEventName).removeClass(self.options.animationClasses.classin);
					$flyin.remove();
				};

				setTimeout(function () {
					$flyin.addClass(self.options.animationClasses.classout);
					self.$menu.addClass(self.options.animationClasses.classin);
					if (self.supportAnimations) {
						self.$menu.bind(self.animEndEventName, onAnimationEndFn);
					} else {
						onAnimationEndFn.call();
					}

					$item.removeClass('rwd-subviewopen').children('ol').attr('aria-hidden', 'true');

					var $subview = $this.parents('.rwd-subview:first');
					if ($subview.is('li')) {
						$subview.addClass('rwd-subviewopen').children('ol').attr('aria-hidden', 'false');
					}
					$subview.removeClass('rwd-subview');
					$('ol#mainNavMenu').find('li > a').first().focus();
				});

				return false;
			};

			this._initEvents();

		},
		_config: function () {
			this.$menu = this.$el;// this.$el.children('ol.rwd-menu');
			this.$menuitems = this.$menu.find('li.topMenuItem');
			this.$menu.addClass('rwd-menu');
		},
		_initEvents: function () {

			var self = this;

			this.$menuitems.bind('click.rwdmenu', self.clickMenuItem);
		},
		destroy: function () {
			//Remove classes, other events, not needed lis (back, to parent) and place back into hidden div.
			this.$menu.removeClass('rwd-menu rwd-subview');
			this.$menu.find('li').removeClass('rwd-subviewopen rwd-subview').unbind('.rwdmenu');
			this.$menu.find('li.rwd-back').remove();
			this.$menu.find('li.toParent').remove();
			this.$menu.find('ol').removeClass('rwd-submenu').each(function () {
				menuManager.$divListSubMenus.append($(this));
			});
		}
	};

	var logError = function (message) {
		if (window.console) {
			window.console.error(message);
		}
	};

	$.fn.rwdmenu = function (options) {
		if (typeof options === 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				var instance = $.data(this, 'rwdmenu');
				if (!instance) {
					logError("cannot call methods on rwdmenu prior to initialization; " +
					"attempted to call method '" + options + "'");
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					logError("no such method '" + options + "' for rwdmenu instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		}
		else {
			this.each(function () {
				var instance = $.data(this, 'rwdmenu');
				if (instance) {
					instance._init();
				}
				else {
					instance = $.data(this, 'rwdmenu', new $.RWDMenu(options, this));
				}
			});
		}
		return this;
	};

})(jQuery, window);
/*global jQuery:false, alert:false */

/*
 * Default text - jQuery plugin for html5 dragging files from desktop to browser
 *
 * Author: Weixi Yen
 *
 * Email: [Firstname][Lastname]@gmail.com
 *
 * Copyright (c) 2010 Resopollution
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.github.com/weixiyen/jquery-filedrop
 *
 * Version:  0.1.0
 *
 * Features:
 *      Allows sending of extra parameters with file.
 *      Works with Firefox 3.6+
 *      Future-compliant with HTML5 spec (will work with Webkit browsers and IE9)
 * Usage:
 *  See README at project homepage
 *
 */
;(function($) {

  var default_opts = {
        fallback_id: '',
        fallback_dropzoneClick : true,
        url: '',
        refresh: 1000,
        paramname: 'userfile',
        requestType: 'POST',    // just in case you want to use another HTTP verb
        allowedfileextensions:[],
        allowedfiletypes:[],
        maxfiles: 25,           // Ignored if queuefiles is set > 0
        maxfilesize: 1,         // MB file size limit
        queuefiles: 0,          // Max files before queueing (for large volume uploads)
        queuewait: 200,         // Queue wait time if full
        data: {},
        headers: {},
        drop: empty,
        dragStart: empty,
        dragEnter: empty,
        dragOver: empty,
        dragLeave: empty,
        docEnter: empty,
        docOver: empty,
        docLeave: empty,
        beforeEach: empty,
        afterAll: empty,
        rename: empty,
        error: function(err, file, i, status) {
          alert(err);
        },
        uploadStarted: empty,
        uploadFinished: empty,
        progressUpdated: empty,
        globalProgressUpdated: empty,
        speedUpdated: empty
      },
      errors = ["BrowserNotSupported", "TooManyFiles", "FileTooLarge", "FileTypeNotAllowed", "NotFound", "NotReadable", "AbortError", "ReadError", "FileExtensionNotAllowed"];

  $.fn.filedrop = function(options) {
    var opts = $.extend({}, default_opts, options),
        global_progress = [],
        doc_leave_timer, stop_loop = false,
        files_count = 0,
        files;

    if ( opts.fallback_id )
    {
      if ( opts.fallback_dropzoneClick === true )
      {
        $('#' + opts.fallback_id).css({
          display: 'none',
          width: 0,
          height: 0
        });
      }




      if ( opts.fallback_dropzoneClick === true )
      {
        if ( this.find('#' + opts.fallback_id).length > 0 )
        {
          throw "Fallback element ["+opts.fallback_id+"] cannot be inside dropzone, unless option fallback_dropzoneClick is false";
        }
        else
        {
          this.on('click', function(e){
            $('#' + opts.fallback_id).trigger(e);
          });
        }
      }

      $('#' + opts.fallback_id).change(function(e) {
        opts.drop(e);
        files = e.target.files;
        files_count = files.length;
        upload();
      });
    }

    this.on('drop', drop).on('dragstart', opts.dragStart).on('dragenter', dragEnter).on('dragover', dragOver).on('dragleave', dragLeave);
    $(document).on('drop', docDrop).on('dragenter', docEnter).on('dragover', docOver).on('dragleave', docLeave);

    function drop(e) {
      if( opts.drop.call(this, e) === false ) return false;
      if(!e.originalEvent.dataTransfer)
        return;
      files = e.originalEvent.dataTransfer.files;
      if (files === null || files === undefined || files.length === 0) {
        opts.error(errors[0]);
        return false;
      }
      files_count = files.length;
      upload();
      e.preventDefault();
      return false;
    }

    function getBuilder(filename, filedata, mime, boundary) {
      var dashdash = '--',
          crlf = '\r\n',
          builder = '',
          paramname = opts.paramname;

      if (opts.data) {
        var params = $.param(opts.data).replace(/\+/g, '%20').split(/&/);

        $.each(params, function() {
          var pair = this.split("=", 2),
              name = decodeURIComponent(pair[0]),
              val  = decodeURIComponent(pair[1]);

          if (pair.length !== 2) {
            return;
          }

          builder += dashdash;
          builder += boundary;
          builder += crlf;
          builder += 'Content-Disposition: form-data; name="' + name + '"';
          builder += crlf;
          builder += crlf;
          builder += val;
          builder += crlf;
        });
      }

      if (jQuery.isFunction(paramname)){
        paramname = paramname(filename);
      }

      builder += dashdash;
      builder += boundary;
      builder += crlf;
      builder += 'Content-Disposition: form-data; name="' + (paramname||"") + '"';
      builder += '; filename="' + encodeURIComponent(filename) + '"';
      builder += crlf;

      builder += 'Content-Type: ' + mime;
      builder += crlf;
      builder += crlf;

      builder += filedata;
      builder += crlf;

      builder += dashdash;
      builder += boundary;
      builder += dashdash;
      builder += crlf;
      return builder;
    }

    function progress(e) {
      if (e.lengthComputable) {
        var percentage = Math.round((e.loaded * 100) / e.total);
        if (this.currentProgress !== percentage) {

          this.currentProgress = percentage;
          opts.progressUpdated(this.index, this.file, this.currentProgress);

          global_progress[this.global_progress_index] = this.currentProgress;
          globalProgress();

          var elapsed = new Date().getTime();
          var diffTime = elapsed - this.currentStart;
          if (diffTime >= opts.refresh) {
            var diffData = e.loaded - this.startData;
            var speed = diffData / diffTime; // KB per second
            opts.speedUpdated(this.index, this.file, speed);
            this.startData = e.loaded;
            this.currentStart = elapsed;
          }
        }
      }
    }

    function globalProgress() {
      if (global_progress.length === 0) {
        return;
      }

      var total = 0, index;
      for (index in global_progress) {
        if(global_progress.hasOwnProperty(index)) {
          total = total + global_progress[index];
        }
      }

      opts.globalProgressUpdated(Math.round(total / global_progress.length));
    }

    // Respond to an upload
    function upload() {
      stop_loop = false;

      if (!files) {
        opts.error(errors[0]);
        return false;
      }

      if (opts.allowedfiletypes.push && opts.allowedfiletypes.length) {
        for(var fileIndex = files.length;fileIndex--;) {
          if(!files[fileIndex].type || $.inArray(files[fileIndex].type, opts.allowedfiletypes) < 0) {
            opts.error(errors[3], files[fileIndex]);
            return false;
          }
        }
      }

      if (opts.allowedfileextensions.push && opts.allowedfileextensions.length) {
        for(var fileIndex = files.length;fileIndex--;) {
          var allowedextension = false;
          for (i=0;i<opts.allowedfileextensions.length;i++){
            if (files[fileIndex].name.substr(files[fileIndex].name.length-opts.allowedfileextensions[i].length).toLowerCase()
                == opts.allowedfileextensions[i].toLowerCase()
            ) {
              allowedextension = true;
            }
          }
          if (!allowedextension){
            opts.error(errors[8], files[fileIndex]);
            return false;
          }
        }
      }

      var filesDone = 0,
          filesRejected = 0;

      if (files_count > opts.maxfiles && opts.queuefiles === 0) {
        opts.error(errors[1]);
        return false;
      }

      // Define queues to manage upload process
      var workQueue = [];
      var processingQueue = [];
      var doneQueue = [];

      // Add everything to the workQueue
      for (var i = 0; i < files_count; i++) {
        workQueue.push(i);
      }

      // Helper function to enable pause of processing to wait
      // for in process queue to complete
      var pause = function(timeout) {
        setTimeout(process, timeout);
        return;
      };

      // Process an upload, recursive
      var process = function() {

        var fileIndex;

        if (stop_loop) {
          return false;
        }

        // Check to see if are in queue mode
        if (opts.queuefiles > 0 && processingQueue.length >= opts.queuefiles) {
          return pause(opts.queuewait);
        } else {
          // Take first thing off work queue
          fileIndex = workQueue[0];
          workQueue.splice(0, 1);

          // Add to processing queue
          processingQueue.push(fileIndex);
        }

        try {
          if (beforeEach(files[fileIndex]) !== false) {
            if (fileIndex === files_count) {
              return;
            }
            var reader = new FileReader(),
                max_file_size = 1048576 * opts.maxfilesize;

            reader.index = fileIndex;
            if (files[fileIndex].size > max_file_size) {
              opts.error(errors[2], files[fileIndex], fileIndex);
              // Remove from queue
              processingQueue.forEach(function(value, key) {
                if (value === fileIndex) {
                  processingQueue.splice(key, 1);
                }
              });
              filesRejected++;
              return true;
            }

            reader.onerror = function(e) {
              switch(e.target.error.code) {
                case e.target.error.NOT_FOUND_ERR:
                  opts.error(errors[4]);
                  return false;
                case e.target.error.NOT_READABLE_ERR:
                  opts.error(errors[5]);
                  return false;
                case e.target.error.ABORT_ERR:
                  opts.error(errors[6]);
                  return false;
                default:
                  opts.error(errors[7]);
                  return false;
              };
            };

            reader.onloadend = !opts.beforeSend ? send : function (e) {
              opts.beforeSend(files[fileIndex], fileIndex, function () { send(e); });
            };

            reader.readAsDataURL(files[fileIndex]);

          } else {
            filesRejected++;
          }
        } catch (err) {
          // Remove from queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) {
              processingQueue.splice(key, 1);
            }
          });
          opts.error(errors[0]);
          return false;
        }

        // If we still have work to do,
        if (workQueue.length > 0) {
          process();
        }
      };

      var send = function(e) {

        var fileIndex = (e.srcElement || e.target).index;

        // Sometimes the index is not attached to the
        // event object. Find it by size. Hack for sure.
        if (e.target.index === undefined) {
          e.target.index = getIndexBySize(e.total);
        }

        var xhr = new XMLHttpRequest(),
            upload = xhr.upload,
            file = files[e.target.index],
            index = e.target.index,
            start_time = new Date().getTime(),
            boundary = '------multipartformboundary' + (new Date()).getTime(),
            global_progress_index = global_progress.length,
            builder,
            newName = rename(file.name),
            mime = file.type;

        if (opts.withCredentials) {
          xhr.withCredentials = opts.withCredentials;
        }

        var encodedString = e.target.result.split(',')[1];
        var data = encodedString === undefined ? '' : atob(encodedString);
        if (typeof newName === "string") {
          builder = getBuilder(newName, data, mime, boundary);
        } else {
          builder = getBuilder(file.name, data, mime, boundary);
        }

        upload.index = index;
        upload.file = file;
        upload.downloadStartTime = start_time;
        upload.currentStart = start_time;
        upload.currentProgress = 0;
        upload.global_progress_index = global_progress_index;
        upload.startData = 0;
        upload.addEventListener("progress", progress, false);

        // Allow url to be a method
        if (jQuery.isFunction(opts.url)) {
          xhr.open(opts.requestType, opts.url(upload), true);
        } else {
          xhr.open(opts.requestType, opts.url, true);
        }

        xhr.setRequestHeader('content-type', 'multipart/form-data; boundary=' + boundary);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        // Add headers
        $.each(opts.headers, function(k, v) {
          xhr.setRequestHeader(k, v);
        });

        if(!xhr.sendAsBinary){
          xhr.sendAsBinary = function(datastr) {
            function byteValue(x) {
              return x.charCodeAt(0) & 0xff;
            }
            var ords = Array.prototype.map.call(datastr, byteValue);
            var ui8a = new Uint8Array(ords);
            this.send(ui8a.buffer);
          }
        }

        xhr.sendAsBinary(builder);

        global_progress[global_progress_index] = 0;
        globalProgress();

        opts.uploadStarted(index, file, files_count);

        xhr.onload = function() {
          var serverResponse = null;

          if (xhr.responseText) {
            try {
              serverResponse = jQuery.parseJSON(xhr.responseText);
            }
            catch (e) {
              serverResponse = xhr.responseText;
            }
          }

          var now = new Date().getTime(),
              timeDiff = now - start_time,
              result = opts.uploadFinished(index, file, serverResponse, timeDiff, xhr);
          filesDone++;

          // Remove from processing queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) {
              processingQueue.splice(key, 1);
            }
          });

          // Add to donequeue
          doneQueue.push(fileIndex);

          // Make sure the global progress is updated
          global_progress[global_progress_index] = 100;
          globalProgress();

          if (filesDone === (files_count - filesRejected)) {
            afterAll();
          }
          if (result === false) {
            stop_loop = true;
          }


          // Pass any errors to the error option
          if (xhr.status < 200 || xhr.status > 299) {
            opts.error(xhr.statusText, file, fileIndex, xhr.status);
          }
        };
      };

      // Initiate the processing loop
      process();
    }

    function getIndexBySize(size) {
      for (var i = 0; i < files_count; i++) {
        if (files[i].size === size) {
          return i;
        }
      }

      return undefined;
    }

    function rename(name) {
      return opts.rename(name);
    }

    function beforeEach(file) {
      return opts.beforeEach(file);
    }

    function afterAll() {
      return opts.afterAll();
    }

    function dragEnter(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.dragEnter.call(this, e);
    }

    function dragOver(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docOver.call(this, e);
      opts.dragOver.call(this, e);
    }

    function dragLeave(e) {
      clearTimeout(doc_leave_timer);
      opts.dragLeave.call(this, e);
      e.stopPropagation();
    }

    function docDrop(e) {
      e.preventDefault();
      opts.docLeave.call(this, e);
      return false;
    }

    function docEnter(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docEnter.call(this, e);
      return false;
    }

    function docOver(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docOver.call(this, e);
      return false;
    }

    function docLeave(e) {
      doc_leave_timer = setTimeout((function(_this) {
        return function() {
          opts.docLeave.call(_this, e);
        };
      })(this), 200);
    }

    return this;
  };

  function empty() {}

  try {
    if (XMLHttpRequest.prototype.sendAsBinary) {
      return;
    }
    XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
      function byteValue(x) {
        return x.charCodeAt(0) & 0xff;
      }
      var ords = Array.prototype.map.call(datastr, byteValue);
      var ui8a = new Uint8Array(ords);

      // Not pretty: Chrome 22 deprecated sending ArrayBuffer, moving instead
      // to sending ArrayBufferView.  Sadly, no proper way to detect this
      // functionality has been discovered.  Happily, Chrome 22 also introduced
      // the base ArrayBufferView class, not present in Chrome 21.
      if ('ArrayBufferView' in window)
        this.send(ui8a);
      else
        this.send(ui8a.buffer);
    };
  } catch (e) {}

})(jQuery);
;
/*!
 * Javascript Cookie v1.5.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(n){var i,r,t;if(typeof define=="function"&&define.amd)define(["jquery"],n);else if(typeof exports=="object"){try{i=require("jquery")}catch(u){}module.exports=n(i)}else r=window.Cookies,t=window.Cookies=n(window.jQuery),t.noConflict=function(){return window.Cookies=r,t}})(function(n){function i(n){return t.raw?n:encodeURIComponent(n)}function o(n){return t.raw?n:decodeURIComponent(n)}function s(n){return i(t.json?JSON.stringify(n):String(n))}function h(n){n.indexOf('"')===0&&(n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return n=decodeURIComponent(n.replace(e," ")),t.json?JSON.parse(n):n}catch(i){}}function r(n,i){var r=t.raw?n:h(n);return f(i)?i(r):r}function u(){for(var n,t,i=0,r={};i<arguments.length;i++){t=arguments[i];for(n in t)r[n]=t[n]}return r}function f(n){return Object.prototype.toString.call(n)==="[object Function]"}var e=/\+/g,t=function(n,e,h){var y,l;if(arguments.length>1&&!f(e))return h=u(t.defaults,h),typeof h.expires=="number"&&(y=h.expires,l=h.expires=new Date,l.setMilliseconds(l.getMilliseconds()+y*864e5)),document.cookie=[i(n),"=",s(e),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("");for(var a=n?undefined:{},p=document.cookie?document.cookie.split("; "):[],v=0,k=p.length;v<k;v++){var w=p[v].split("="),b=o(w.shift()),c=w.join("=");if(n===b){a=r(c,e);break}n||(c=r(c))===undefined||(a[b]=c)}return a};return t.get=t.set=t,t.defaults={},t.remove=function(n,i){return t(n,"",u(i,{expires:-1})),!t(n)},n&&(n.cookie=t,n.removeCookie=t.remove),t});
/*! jQuery UI - v1.14.1 - 2024-10-30
* https://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright OpenJS Foundation and other contributors; Licensed MIT */

(t=>{"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(V){V.ui=V.ui||{};V.ui.version="1.14.1";var n,s,x,k,o,a,r,l,h,i,E=0,N=Array.prototype.hasOwnProperty,c=Array.prototype.slice;V.cleanData=(n=V.cleanData,function(t){for(var e,i,s=0;null!=(i=t[s]);s++)(e=V._data(i,"events"))&&e.remove&&V(i).triggerHandler("remove");n(t)}),V.widget=function(t,i,e){var s,n,o,a,r={},l=t.split(".")[0];return"__proto__"===(t=t.split(".")[1])||"constructor"===t?V.error("Invalid widget name: "+t):(a=l+"-"+t,e||(e=i,i=V.Widget),Array.isArray(e)&&(e=V.extend.apply(null,[{}].concat(e))),V.expr.pseudos[a.toLowerCase()]=function(t){return!!V.data(t,a)},V[l]=V[l]||{},s=V[l][t],n=V[l][t]=function(t,e){if(!this||!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},V.extend(n,s,{version:e.version,_proto:V.extend({},e),_childConstructors:[]}),(o=new i).options=V.widget.extend({},o.options),V.each(e,function(e,s){function n(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof s?s:function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=o,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}}),n.prototype=V.widget.extend(o,{widgetEventPrefix:s&&o.widgetEventPrefix||t},r,{constructor:n,namespace:l,widgetName:t,widgetFullName:a}),s?(V.each(s._childConstructors,function(t,e){var i=e.prototype;V.widget(i.namespace+"."+i.widgetName,n,e._proto)}),delete s._childConstructors):i._childConstructors.push(n),V.widget.bridge(t,n),n)},V.widget.extend=function(t){for(var e,i,s=c.call(arguments,1),n=0,o=s.length;n<o;n++)for(e in s[n])i=s[n][e],N.call(s[n],e)&&void 0!==i&&(V.isPlainObject(i)?t[e]=V.isPlainObject(t[e])?V.widget.extend({},t[e],i):V.widget.extend({},i):t[e]=i);return t},V.widget.bridge=function(o,e){var a=e.prototype.widgetFullName||o;V.fn[o]=function(i){var t="string"==typeof i,s=c.call(arguments,1),n=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=V.data(this,a);return"instance"===i?(n=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?V.error("no such method '"+i+"' for "+o+" widget instance"):(t=e[i].apply(e,s))!==e&&void 0!==t?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:V.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=V.widget.extend.apply(null,[i].concat(s))),this.each(function(){var t=V.data(this,a);t?(t.option(i||{}),t._init&&t._init()):V.data(this,a,new e(i,this))})),n}},V.Widget=function(){},V.Widget._childConstructors=[],V.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=V(e||this.defaultElement||this)[0],this.element=V(e),this.uuid=E++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=V(),this.hoverable=V(),this.focusable=V(),this.classesElementLookup={},e!==this&&(V.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=V(e.style?e.ownerDocument:e.document||e),this.window=V(this.document[0].defaultView||this.document[0].parentWindow)),this.options=V.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:V.noop,_create:V.noop,_init:V.noop,destroy:function(){var i=this;this._destroy(),V.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:V.noop,widget:function(){return this.element},option:function(t,e){var i,s,n,o=t;if(0===arguments.length)return V.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(s=o[t]=V.widget.extend({},this.options[t]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(t=i.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,s;for(e in t)s=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&s&&s.length&&(i=V(s.get()),this._removeClass(s,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(n){var o=[],a=this;function t(t,e){for(var i,s=0;s<t.length;s++)i=a.classesElementLookup[t[s]]||V(),i=n.add?((()=>{var i=[];n.element.each(function(t,e){V.map(a.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),a._on(V(i),{remove:"_untrackClassesElement"})})(),V(V.uniqueSort(i.get().concat(n.element.get())))):V(i.not(n.element).get()),a.classesElementLookup[t[s]]=i,o.push(t[s]),e&&n.classes[t[s]]&&o.push(n.classes[t[s]])}return(n=V.extend({element:this.element,classes:this.options.classes||{}},n)).keys&&t(n.keys.match(/\S+/g)||[],!0),n.extra&&t(n.extra.match(/\S+/g)||[]),o.join(" ")},_untrackClassesElement:function(i){var s=this;V.each(s.classesElementLookup,function(t,e){-1!==V.inArray(i.target,e)&&(s.classesElementLookup[t]=V(e.not(i.target).get()))}),this._off(V(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){var n="string"==typeof t||null===t,e={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s="boolean"==typeof s?s:i};return e.element.toggleClass(this._classes(e),s),this},_on:function(n,o,t){var a,r=this;"boolean"!=typeof n&&(t=o,o=n,n=!1),t?(o=a=V(o),this.bindings=this.bindings.add(o)):(t=o,o=this.element,a=this.widget()),V.each(t,function(t,e){function i(){if(n||!0!==r.options.disabled&&!V(this).hasClass("ui-state-disabled"))return("string"==typeof e?r[e]:e).apply(r,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||V.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),s=t[1]+r.eventNamespace,t=t[2];t?a.on(s,t,i):o.on(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=V(this.bindings.not(t).get()),this.focusable=V(this.focusable.not(t).get()),this.hoverable=V(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(V(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(V(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(V(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(V(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var s,n,o=this.options[t];if(i=i||{},(e=V.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(s in n)s in e||(e[s]=n[s]);return this.element.trigger(e,i),!("function"==typeof o&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},V.each({show:"fadeIn",hide:"fadeOut"},function(o,a){V.Widget.prototype["_"+o]=function(e,t,i){var s,n=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||a:o;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),s=!V.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&V.effects&&V.effects.effect[n]?e[o](t):n!==o&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){V(this)[o](),i&&i.call(e[0]),t()})}}),V.widget;function C(t,e,i){return[parseFloat(t[0])*(h.test(t[0])?e/100:1),parseFloat(t[1])*(h.test(t[1])?i/100:1)]}function D(t,e){return parseInt(V.css(t,e),10)||0}function I(t){return null!=t&&t===t.window}x=Math.max,k=Math.abs,o=/left|center|right/,a=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,h=/%$/,i=V.fn.position,V.position={scrollbarWidth:function(){var t,e,i;return void 0!==s?s:(i=(e=V("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],V("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),s=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?V.position.scrollbarWidth():0,height:e?V.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=V(t||window),i=I(e[0]),s=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:s,offset:!i&&!s?V(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},V.fn.position=function(u){var d,p,f,g,m,_,v,b,y,w,t,e;return u&&u.of?(_="string"==typeof(u=V.extend({},u)).of?V(document).find(u.of):V(u.of),v=V.position.getWithinInfo(u.within),b=V.position.getScrollInfo(v),y=(u.collision||"flip").split(" "),w={},e=9===(e=(t=_)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:I(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},_[0].preventDefault&&(u.at="left top"),p=e.width,f=e.height,m=V.extend({},g=e.offset),V.each(["my","at"],function(){var t,e,i=(u[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):a.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=a.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],u[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===u.at[0]?m.left+=p:"center"===u.at[0]&&(m.left+=p/2),"bottom"===u.at[1]?m.top+=f:"center"===u.at[1]&&(m.top+=f/2),d=C(w.at,p,f),m.left+=d[0],m.top+=d[1],this.each(function(){var i,t,a=V(this),r=a.outerWidth(),l=a.outerHeight(),e=D(this,"marginLeft"),s=D(this,"marginTop"),n=r+e+D(this,"marginRight")+b.width,o=l+s+D(this,"marginBottom")+b.height,h=V.extend({},m),c=C(w.my,a.outerWidth(),a.outerHeight());"right"===u.my[0]?h.left-=r:"center"===u.my[0]&&(h.left-=r/2),"bottom"===u.my[1]?h.top-=l:"center"===u.my[1]&&(h.top-=l/2),h.left+=c[0],h.top+=c[1],i={marginLeft:e,marginTop:s},V.each(["left","top"],function(t,e){V.ui.position[y[t]]&&V.ui.position[y[t]][e](h,{targetWidth:p,targetHeight:f,elemWidth:r,elemHeight:l,collisionPosition:i,collisionWidth:n,collisionHeight:o,offset:[d[0]+c[0],d[1]+c[1]],my:u.my,at:u.at,within:v,elem:a})}),u.using&&(t=function(t){var e=g.left-h.left,i=e+p-r,s=g.top-h.top,n=s+f-l,o={target:{element:_,left:g.left,top:g.top,width:p,height:f},element:{element:a,left:h.left,top:h.top,width:r,height:l},horizontal:i<0?"left":0<e?"right":"center",vertical:n<0?"top":0<s?"bottom":"middle"};p<r&&k(e+i)<p&&(o.horizontal="center"),f<l&&k(s+n)<f&&(o.vertical="middle"),x(k(e),k(i))>x(k(s),k(n))?o.important="horizontal":o.important="vertical",u.using.call(this,t,o)}),a.offset(V.extend(h,{using:t}))})):i.apply(this,arguments)},V.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,s=s.width,o=t.left-e.collisionPosition.marginLeft,a=n-o,r=o+e.collisionWidth-s-n;s<e.collisionWidth?0<a&&r<=0?(i=t.left+a+e.collisionWidth-s-n,t.left+=a-i):t.left=!(0<r&&a<=0)&&r<a?n+s-e.collisionWidth:n:0<a?t.left+=a:0<r?t.left-=r:t.left=x(t.left-o,t.left)},top:function(t,e){var i,s=e.within,s=s.isWindow?s.scrollTop:s.offset.top,n=e.within.height,o=t.top-e.collisionPosition.marginTop,a=s-o,r=o+e.collisionHeight-n-s;n<e.collisionHeight?0<a&&r<=0?(i=t.top+a+e.collisionHeight-n-s,t.top+=a-i):t.top=!(0<r&&a<=0)&&r<a?s+n-e.collisionHeight:s:0<a?t.top+=a:0<r?t.top-=r:t.top=x(t.top-o,t.top)}},flip:{left:function(t,e){var i=e.within,s=i.offset.left+i.scrollLeft,n=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,o=t.left-e.collisionPosition.marginLeft,a=o-i,o=o+e.collisionWidth-n-i,r="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,l="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];a<0?((n=t.left+r+l+h+e.collisionWidth-n-s)<0||n<k(a))&&(t.left+=r+l+h):0<o&&(0<(s=t.left-e.collisionPosition.marginLeft+r+l+h-i)||k(s)<o)&&(t.left+=r+l+h)},top:function(t,e){var i=e.within,s=i.offset.top+i.scrollTop,n=i.height,i=i.isWindow?i.scrollTop:i.offset.top,o=t.top-e.collisionPosition.marginTop,a=o-i,o=o+e.collisionHeight-n-i,r="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,l="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];a<0?((n=t.top+r+l+h+e.collisionHeight-n-s)<0||n<k(a))&&(t.top+=r+l+h):0<o&&(0<(s=t.top-e.collisionPosition.marginTop+r+l+h-i)||k(s)<o)&&(t.top+=r+l+h)}},flipfit:{left:function(){V.ui.position.flip.left.apply(this,arguments),V.ui.position.fit.left.apply(this,arguments)},top:function(){V.ui.position.flip.top.apply(this,arguments),V.ui.position.fit.top.apply(this,arguments)}}};V.ui.position,V.extend(V.expr.pseudos,{data:V.expr.createPseudo(function(e){return function(t){return!!V.data(t,e)}})}),V.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}});var t,u=V,d={},W=d.toString,F=/^([\-+])=\s*(\d+\.?\d*)/,L=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),t[4]?(parseInt(t[4],16)/255).toFixed(2):1]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),t[4]?(parseInt(t[4]+t[4],16)/255).toFixed(2):1]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],p=u.Color=function(t,e,i,s){return new u.Color.fn.parse(t,e,i,s)},f={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},R={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},g=u.each;function m(t){return null==t?t+"":"object"==typeof t?d[W.call(t)]||"object":typeof t}function _(t,e,i){var s=R[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),s.mod?(t+s.mod)%s.mod:Math.min(s.max,Math.max(0,t)))}function Y(s){var n=p(),o=n._rgba=[];return s=s.toLowerCase(),g(L,function(t,e){var i=e.re.exec(s),i=i&&e.parse(i),e=e.space||"rgba";if(i)return i=n[e](i),n[f[e].cache]=i[f[e].cache],o=n._rgba=i._rgba,!1}),o.length?("0,0,0,0"===o.join()&&u.extend(o,y.transparent),n):y[s]}function v(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}g(f,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){d["[object "+e+"]"]=e.toLowerCase()}),p.fn=u.extend(p.prototype,{parse:function(n,t,e,i){if(void 0===n)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=u(n).css(t),t=void 0);var o=this,s=m(n),a=this._rgba=[];return void 0!==t&&(n=[n,t,e,i],s="array"),"string"===s?this.parse(Y(n)||y._default):"array"===s?(g(f.rgba.props,function(t,e){a[e.idx]=_(n[e.idx],e)}),this):"object"===s?(n instanceof p?g(f,function(t,e){n[e.cache]&&(o[e.cache]=n[e.cache].slice())}):g(f,function(t,i){var s=i.cache;g(i.props,function(t,e){if(!o[s]&&i.to){if("alpha"===t||null==n[t])return;o[s]=i.to(o._rgba)}o[s][e.idx]=_(n[t],e,!0)}),o[s]&&u.inArray(null,o[s].slice(0,3))<0&&(null==o[s][3]&&(o[s][3]=1),i.from)&&(o._rgba=i.from(o[s]))}),this):void 0},is:function(t){var n=p(t),o=!0,a=this;return g(f,function(t,e){var i,s=n[e.cache];return s&&(i=a[e.cache]||e.to&&e.to(a._rgba)||[],g(e.props,function(t,e){if(null!=s[e.idx])return o=s[e.idx]===i[e.idx]})),o}),o},_space:function(){var i=[],s=this;return g(f,function(t,e){s[e.cache]&&i.push(t)}),i.pop()},transition:function(t,a){var t=(h=p(t))._space(),e=f[t],i=0===this.alpha()?p("transparent"):this,r=i[e.cache]||e.to(i._rgba),l=r.slice(),h=h[e.cache];return g(e.props,function(t,e){var i=e.idx,s=r[i],n=h[i],o=R[e.type]||{};null!==n&&(null===s?l[i]=n:(o.mod&&(n-s>o.mod/2?s+=o.mod:s-n>o.mod/2&&(s-=o.mod)),l[i]=_((n-s)*a+s,e)))}),this[t](l)},blend:function(t){var e,i,s;return 1===this._rgba[3]?this:(e=this._rgba.slice(),i=e.pop(),s=p(t)._rgba,p(u.map(e,function(t,e){return(1-i)*s[e]+i*t})))},toRgbaString:function(){var t="rgba(",e=u.map(this._rgba,function(t,e){return null!=t?t:2<e?1:0});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join(", ")+")"},toHslaString:function(){var t="hsla(",e=u.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),t=e&&e<3?Math.round(100*t)+"%":t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join(", ")+")"},toHexString:function(t){var e=this._rgba.slice(),i=e.pop();return t&&e.push(~~(255*i)),"#"+u.map(e,function(t){return("0"+(t||0).toString(16)).substr(-2)}).join("")},toString:function(){return this.toRgbaString()}}),p.fn.parse.prototype=p.fn,f.hsla.to=function(t){var e,i,s,n,o,a,r,l;return null==t[0]||null==t[1]||null==t[2]?[null,null,null,t[3]]:(e=t[0]/255,i=t[1]/255,s=t[2]/255,t=t[3],n=(l=Math.max(e,i,s))-(r=Math.min(e,i,s)),a=.5*(o=l+r),r=r===l?0:e===l?60*(i-s)/n+360:i===l?60*(s-e)/n+120:60*(e-i)/n+240,l=0==n?0:a<=.5?n/o:n/(2-o),[Math.round(r)%360,l,a,null==t?1:t])},f.hsla.from=function(t){var e,i,s;return null==t[0]||null==t[1]||null==t[2]?[null,null,null,t[3]]:(e=t[0]/360,s=t[1],i=t[3],s=2*(t=t[2])-(t=t<=.5?t*(1+s):t+s-t*s),[Math.round(255*v(s,t,e+1/3)),Math.round(255*v(s,t,e)),Math.round(255*v(s,t,e-1/3)),i])},g(f,function(r,t){var e=t.props,o=t.cache,a=t.to,l=t.from;p.fn[r]=function(t){var i,s,n;return a&&!this[o]&&(this[o]=a(this._rgba)),void 0===t?this[o].slice():(i=m(t),s="array"===i||"object"===i?t:arguments,n=this[o].slice(),g(e,function(t,e){t=s["object"===i?t:e.idx];null==t&&(t=n[e.idx]),n[e.idx]=_(t,e)}),l?((t=p(l(n)))[o]=n,t):p(n))},g(e,function(o,a){p.fn[o]||(p.fn[o]=function(t){var e=m(t),i="alpha"===o?this._hsla?"hsla":"rgba":r,s=this[i](),n=s[a.idx];return"undefined"===e?n:("function"===e&&(e=m(t=t.call(this,n))),null==t&&a.empty?this:("string"===e&&(e=F.exec(t))&&(t=n+parseFloat(e[2])*("+"===e[1]?1:-1)),s[a.idx]=t,this[i](s)))})})}),p.hook=function(t){t=t.split(" ");g(t,function(t,s){u.cssHooks[s]={set:function(t,e){var i;"transparent"===e||"string"===m(e)&&!(i=Y(e))||(e=(e=p(i||e)).toRgbaString()),t.style[s]=e}},u.fx.step[s]=function(t){t.colorInit||(t.start=p(t.elem,s),t.end=p(t.end),t.colorInit=!0),u.cssHooks[s].set(t.elem,t.start.transition(t.end,t.pos))}})},p.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),u.cssHooks.borderColor={expand:function(i){var s={};return g(["Top","Right","Bottom","Left"],function(t,e){s["border"+e+"Color"]=i}),s}};var B,j,q,K,U,X,$,G,Q,b,y=u.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},w="ui-effects-",e="ui-effects-style",T="ui-effects-animated";function J(t){for(var e,i=t.ownerDocument.defaultView.getComputedStyle(t),s={},n=i.length;n--;)"string"==typeof i[e=i[n]]&&(s[e.replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=i[e]);return s}function P(t,e,i,s){return t={effect:t=V.isPlainObject(t)?(e=t).effect:t},"function"==typeof(e=null==e?{}:e)&&(s=e,i=null,e={}),"number"!=typeof e&&!V.fx.speeds[e]||(s=i,i=e,e={}),"function"==typeof i&&(s=i,i=null),e&&V.extend(t,e),i=i||e.duration,t.duration=V.fx.off?0:"number"==typeof i?i:i in V.fx.speeds?V.fx.speeds[i]:V.fx.speeds._default,t.complete=s||e.complete,t}function M(t){return!t||"number"==typeof t||V.fx.speeds[t]||"string"==typeof t&&!V.effects.effect[t]||"function"==typeof t||"object"==typeof t&&!t.effect}function Z(t,e){var i=e.outerWidth(),e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?i:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}V.effects={effect:{}},K=["add","remove","toggle"],U={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},V.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){V.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(u.style(t.elem,e,t.end),t.setAttr=!0)}}),V.effects.animateClass=function(n,t,e,i){var o=V.speed(t,e,i);return this.queue(function(){var i=V(this),t=i.attr("class")||"",e=(e=o.children?i.find("*").addBack():i).map(function(){return{el:V(this),start:J(this)}}),s=function(){V.each(K,function(t,e){n[e]&&i[e+"Class"](n[e])})};s(),e=e.map(function(){return this.end=J(this.el[0]),this.diff=((t,e)=>{var i,s,n={};for(i in e)s=e[i],t[i]===s||U[i]||!V.fx.step[i]&&isNaN(parseFloat(s))||(n[i]=s);return n})(this.start,this.end),this}),i.attr("class",t),e=e.map(function(){var t=this,e=V.Deferred(),i=V.extend({},o,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,i),e.promise()}),V.when.apply(V,e.get()).done(function(){s(),V.each(arguments,function(){var e=this.el;V.each(this.diff,function(t){e.css(t,"")})}),o.complete.call(i[0])})})},V.fn.extend({addClass:(q=V.fn.addClass,function(t,e,i,s){return e?V.effects.animateClass.call(this,{add:t},e,i,s):q.apply(this,arguments)}),removeClass:(j=V.fn.removeClass,function(t,e,i,s){return 1<arguments.length?V.effects.animateClass.call(this,{remove:t},e,i,s):j.apply(this,arguments)}),toggleClass:(B=V.fn.toggleClass,function(t,e,i,s,n){return"boolean"==typeof e||void 0===e?i?V.effects.animateClass.call(this,e?{add:t}:{remove:t},i,s,n):B.apply(this,arguments):V.effects.animateClass.call(this,{toggle:t},e,i,s)}),switchClass:function(t,e,i,s,n){return V.effects.animateClass.call(this,{add:e,remove:t},i,s,n)}}),V.expr&&V.expr.pseudos&&V.expr.pseudos.animated&&(V.expr.pseudos.animated=(X=V.expr.pseudos.animated,function(t){return!!V(t).data(T)||X(t)})),!0===V.uiBackCompat&&V.extend(V.effects,{save:function(t,e){for(var i=0,s=e.length;i<s;i++)null!==e[i]&&t.data(w+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;s<n;s++)null!==e[s]&&(i=t.data(w+e[s]),t.css(e[s],i))},setMode:function(t,e){return e="toggle"===e?t.is(":hidden")?"show":"hide":e},createWrapper:function(i){if(i.parent().is(".ui-effects-wrapper"))return i.parent();var s={width:i.outerWidth(!0),height:i.outerHeight(!0),float:i.css("float")},t=V("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:i.width(),height:i.height()},n=document.activeElement;try{n.id}catch(t){n=document.body}return i.wrap(t),i[0]!==n&&!V.contains(i[0],n)||V(n).trigger("focus"),t=i.parent(),"static"===i.css("position")?(t.css({position:"relative"}),i.css({position:"relative"})):(V.extend(s,{position:i.css("position"),zIndex:i.css("z-index")}),V.each(["top","left","bottom","right"],function(t,e){s[e]=i.css(e),isNaN(parseInt(s[e],10))&&(s[e]="auto")}),i.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),i.css(e),t.css(s).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!V.contains(t[0],e)||V(e).trigger("focus")),t}}),V.extend(V.effects,{version:"1.14.1",define:function(t,e,i){return i||(i=e,e="effect"),V.effects.effect[t]=i,V.effects.effect[t].mode=e,i},scaledDimensions:function(t,e,i){var s;return 0===e?{height:0,width:0,outerHeight:0,outerWidth:0}:(s="horizontal"!==i?(e||100)/100:1,i="vertical"!==i?(e||100)/100:1,{height:t.height()*i,width:t.width()*s,outerHeight:t.outerHeight()*i,outerWidth:t.outerWidth()*s})},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();1<e&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(e,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(e)||"",t.removeData(e)},mode:function(t,e){t=t.is(":hidden");return"toggle"===e&&(e=t?"show":"hide"),e=(t?"hide"===e:"show"===e)?"none":e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(t){var e,i=t.css("position"),s=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",e=V("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(w+"placeholder",e)),t.css({position:i,left:s.left,top:s.top}),e},removePlaceholder:function(t){var e=w+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(t){V.effects.restoreStyle(t),V.effects.removePlaceholder(t)},setTransition:function(s,t,n,o){return o=o||{},V.each(t,function(t,e){var i=s.cssUnit(e);0<i[0]&&(o[e]=i[0]*n+i[1])}),o}}),V.fn.extend({effect:function(){function t(t){var e=V(this),i=V.effects.mode(e,r)||o;e.data(T,!0),l.push(i),o&&("show"===i||i===o&&"hide"===i)&&e.show(),o&&"none"===i||V.effects.saveStyle(e),"function"==typeof t&&t()}var s=P.apply(this,arguments),n=V.effects.effect[s.effect],o=n.mode,e=s.queue,i=e||"fx",a=s.complete,r=s.mode,l=[];return V.fx.off||!n?r?this[r](s.duration,a):this.each(function(){a&&a.call(this)}):!1===e?this.each(t).each(h):this.queue(i,t).queue(i,h);function h(t){var e=V(this);function i(){"function"==typeof a&&a.call(e[0]),"function"==typeof t&&t()}s.mode=l.shift(),!0!==V.uiBackCompat||o?"none"===s.mode?(e[r](),i()):n.call(e[0],s,function(){e.removeData(T),V.effects.cleanUp(e),"hide"===s.mode&&e.hide(),i()}):(e.is(":hidden")?"hide"===r:"show"===r)?(e[r](),i()):n.call(e[0],s,i)}},show:(Q=V.fn.show,function(t){return M(t)?Q.apply(this,arguments):((t=P.apply(this,arguments)).mode="show",this.effect.call(this,t))}),hide:(G=V.fn.hide,function(t){return M(t)?G.apply(this,arguments):((t=P.apply(this,arguments)).mode="hide",this.effect.call(this,t))}),toggle:($=V.fn.toggle,function(t){return M(t)||"boolean"==typeof t?$.apply(this,arguments):((t=P.apply(this,arguments)).mode="toggle",this.effect.call(this,t))}),cssUnit:function(t){var i=this.css(t),s=[];return V.each(["em","px","%","pt"],function(t,e){0<i.indexOf(e)&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):Z(this.css("clip"),this)},transfer:function(t,e){var i=V(this),s=V(t.to),n="fixed"===s.css("position"),o=V("body"),a=n?o.scrollTop():0,o=n?o.scrollLeft():0,r=s.offset(),r={top:r.top-a,left:r.left-o,height:s.innerHeight(),width:s.innerWidth()},s=i.offset(),l=V("<div class='ui-effects-transfer'></div>");l.appendTo("body").addClass(t.className).css({top:s.top-a,left:s.left-o,height:i.innerHeight(),width:i.innerWidth(),position:n?"fixed":"absolute"}).animate(r,t.duration,t.easing,function(){l.remove(),"function"==typeof e&&e()})}}),V.fx.step.clip=function(t){t.clipInit||(t.start=V(t.elem).cssClip(),"string"==typeof t.end&&(t.end=Z(t.end,t.elem)),t.clipInit=!0),V(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},b={},V.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){b[t]=function(t){return Math.pow(t,e+2)}}),V.extend(b,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),V.each(b,function(t,e){V.easing["easeIn"+t]=e,V.easing["easeOut"+t]=function(t){return 1-e(1-t)},V.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});var tt,et,S,it=V.effects,st=(V.effects.define("blind","hide",function(t,e){var i={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},s=V(this),n=t.direction||"up",o=s.cssClip(),a={clip:V.extend({},o)},r=V.effects.createPlaceholder(s);a.clip[i[n][0]]=a.clip[i[n][1]],"show"===t.mode&&(s.cssClip(a.clip),r&&r.css(V.effects.clipToBox(a)),a.clip=o),r&&r.animate(V.effects.clipToBox(a),t.duration,t.easing),s.animate(a,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),V.effects.define("bounce",function(t,e){var i,s,n=V(this),o=t.mode,a="hide"===o,o="show"===o,r=t.direction||"up",l=t.distance,h=t.times||5,c=2*h+(o||a?1:0),u=t.duration/c,d=t.easing,p="up"===r||"down"===r?"top":"left",f="up"===r||"left"===r,g=0,t=n.queue().length;for(V.effects.createPlaceholder(n),r=n.css(p),l=l||n["top"==p?"outerHeight":"outerWidth"]()/3,o&&((s={opacity:1})[p]=r,n.css("opacity",0).css(p,f?2*-l:2*l).animate(s,u,d)),a&&(l/=Math.pow(2,h-1)),(s={})[p]=r;g<h;g++)(i={})[p]=(f?"-=":"+=")+l,n.animate(i,u,d).animate(s,u,d),l=a?2*l:l/2;a&&((i={opacity:0})[p]=(f?"-=":"+=")+l,n.animate(i,u,d)),n.queue(e),V.effects.unshift(n,t,1+c)}),V.effects.define("clip","hide",function(t,e){var i={},s=V(this),n=t.direction||"vertical",o="both"===n,a=o||"horizontal"===n,o=o||"vertical"===n,n=s.cssClip();i.clip={top:o?(n.bottom-n.top)/2:n.top,right:a?(n.right-n.left)/2:n.right,bottom:o?(n.bottom-n.top)/2:n.bottom,left:a?(n.right-n.left)/2:n.left},V.effects.createPlaceholder(s),"show"===t.mode&&(s.cssClip(i.clip),i.clip=n),s.animate(i,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),V.effects.define("drop","hide",function(t,e){var i,s=V(this),n="show"===t.mode,o=t.direction||"left",a="up"===o||"down"===o?"top":"left",o="up"===o||"left"===o?"-=":"+=",r="+="==o?"-=":"+=",l={opacity:0};V.effects.createPlaceholder(s),i=t.distance||s["top"==a?"outerHeight":"outerWidth"](!0)/2,l[a]=o+i,n&&(s.css(l),l[a]=r+i,l.opacity=1),s.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),V.effects.define("explode","hide",function(t,e){var i,s,n,o,a,r,l=t.pieces?Math.round(Math.sqrt(t.pieces)):3,h=l,c=V(this),u="show"===t.mode,d=c.show().css("visibility","hidden").offset(),p=Math.ceil(c.outerWidth()/h),f=Math.ceil(c.outerHeight()/l),g=[];function m(){g.push(this),g.length===l*h&&(c.css({visibility:"visible"}),V(g).remove(),e())}for(i=0;i<l;i++)for(o=d.top+i*f,r=i-(l-1)/2,s=0;s<h;s++)n=d.left+s*p,a=s-(h-1)/2,c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*p,top:-i*f}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:p,height:f,left:n+(u?a*p:0),top:o+(u?r*f:0),opacity:u?0:1}).animate({left:n+(u?0:a*p),top:o+(u?0:r*f),opacity:u?1:0},t.duration||500,t.easing,m)}),V.effects.define("fade","toggle",function(t,e){var i="show"===t.mode;V(this).css("opacity",i?0:1).animate({opacity:i?1:0},{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),V.effects.define("fold","hide",function(e,t){var i=V(this),s=e.mode,n="show"===s,s="hide"===s,o=e.size||15,a=/([0-9]+)%/.exec(o),r=!!e.horizFirst?["right","bottom"]:["bottom","right"],l=e.duration/2,h=V.effects.createPlaceholder(i),c=i.cssClip(),u={clip:V.extend({},c)},d={clip:V.extend({},c)},p=[c[r[0]],c[r[1]]],f=i.queue().length;a&&(o=parseInt(a[1],10)/100*p[s?0:1]),u.clip[r[0]]=o,d.clip[r[0]]=o,d.clip[r[1]]=0,n&&(i.cssClip(d.clip),h&&h.css(V.effects.clipToBox(d)),d.clip=c),i.queue(function(t){h&&h.animate(V.effects.clipToBox(u),l,e.easing).animate(V.effects.clipToBox(d),l,e.easing),t()}).animate(u,l,e.easing).animate(d,l,e.easing).queue(t),V.effects.unshift(i,f,4)}),V.effects.define("highlight","show",function(t,e){var i=V(this),s={backgroundColor:i.css("backgroundColor")};"hide"===t.mode&&(s.opacity=0),V.effects.saveStyle(i),i.css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),V.effects.define("size",function(s,e){var n,i=V(this),t=["fontSize"],o=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],a=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],r=s.mode,l="effect"!==r,h=s.scale||"both",c=s.origin||["middle","center"],u=i.css("position"),d=i.position(),p=V.effects.scaledDimensions(i),f=s.from||p,g=s.to||V.effects.scaledDimensions(i,0);V.effects.createPlaceholder(i),"show"===r&&(r=f,f=g,g=r),n={from:{y:f.height/p.height,x:f.width/p.width},to:{y:g.height/p.height,x:g.width/p.width}},"box"!==h&&"both"!==h||(n.from.y!==n.to.y&&(f=V.effects.setTransition(i,o,n.from.y,f),g=V.effects.setTransition(i,o,n.to.y,g)),n.from.x!==n.to.x&&(f=V.effects.setTransition(i,a,n.from.x,f),g=V.effects.setTransition(i,a,n.to.x,g))),"content"!==h&&"both"!==h||n.from.y!==n.to.y&&(f=V.effects.setTransition(i,t,n.from.y,f),g=V.effects.setTransition(i,t,n.to.y,g)),c&&(r=V.effects.getBaseline(c,p),f.top=(p.outerHeight-f.outerHeight)*r.y+d.top,f.left=(p.outerWidth-f.outerWidth)*r.x+d.left,g.top=(p.outerHeight-g.outerHeight)*r.y+d.top,g.left=(p.outerWidth-g.outerWidth)*r.x+d.left),delete f.outerHeight,delete f.outerWidth,i.css(f),"content"!==h&&"both"!==h||(o=o.concat(["marginTop","marginBottom"]).concat(t),a=a.concat(["marginLeft","marginRight"]),i.find("*[width]").each(function(){var t=V(this),e=V.effects.scaledDimensions(t),i={height:e.height*n.from.y,width:e.width*n.from.x,outerHeight:e.outerHeight*n.from.y,outerWidth:e.outerWidth*n.from.x},e={height:e.height*n.to.y,width:e.width*n.to.x,outerHeight:e.height*n.to.y,outerWidth:e.width*n.to.x};n.from.y!==n.to.y&&(i=V.effects.setTransition(t,o,n.from.y,i),e=V.effects.setTransition(t,o,n.to.y,e)),n.from.x!==n.to.x&&(i=V.effects.setTransition(t,a,n.from.x,i),e=V.effects.setTransition(t,a,n.to.x,e)),l&&V.effects.saveStyle(t),t.css(i),t.animate(e,s.duration,s.easing,function(){l&&V.effects.restoreStyle(t)})})),i.animate(g,{queue:!1,duration:s.duration,easing:s.easing,complete:function(){var t=i.offset();0===g.opacity&&i.css("opacity",f.opacity),l||(i.css("position","static"===u?"relative":u).offset(t),V.effects.saveStyle(i)),e()}})}),V.effects.define("scale",function(t,e){var i=V(this),s=t.mode,s=parseInt(t.percent,10)||(0===parseInt(t.percent,10)||"effect"!==s?0:100),i=V.extend(!0,{from:V.effects.scaledDimensions(i),to:V.effects.scaledDimensions(i,s,t.direction||"both"),origin:t.origin||["middle","center"]},t);t.fade&&(i.from.opacity=1,i.to.opacity=0),V.effects.effect.size.call(this,i,e)}),V.effects.define("puff","hide",function(t,e){t=V.extend(!0,{},t,{fade:!0,percent:parseInt(t.percent,10)||150});V.effects.effect.scale.call(this,t,e)}),V.effects.define("pulsate","show",function(t,e){var i=V(this),s=t.mode,n="show"===s,o=2*(t.times||5)+(n||"hide"===s?1:0),a=t.duration/o,r=0,l=1,s=i.queue().length;for(!n&&i.is(":visible")||(i.css("opacity",0).show(),r=1);l<o;l++)i.animate({opacity:r},a,t.easing),r=1-r;i.animate({opacity:r},a,t.easing),i.queue(e),V.effects.unshift(i,s,1+o)}),V.effects.define("shake",function(t,e){var i=1,s=V(this),n=t.direction||"left",o=t.distance||20,a=t.times||3,r=2*a+1,l=Math.round(t.duration/r),h="up"===n||"down"===n?"top":"left",n="up"===n||"left"===n,c={},u={},d={},p=s.queue().length;for(V.effects.createPlaceholder(s),c[h]=(n?"-=":"+=")+o,u[h]=(n?"+=":"-=")+2*o,d[h]=(n?"-=":"+=")+2*o,s.animate(c,l,t.easing);i<a;i++)s.animate(u,l,t.easing).animate(d,l,t.easing);s.animate(u,l,t.easing).animate(c,l/2,t.easing).queue(e),V.effects.unshift(s,p,1+r)}),V.effects.define("slide","show",function(t,e){var i,s,n=V(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=t.mode,r=t.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r,c=t.distance||n["top"==l?"outerHeight":"outerWidth"](!0),u={};V.effects.createPlaceholder(n),i=n.cssClip(),s=n.position()[l],u[l]=(h?-1:1)*c+s,u.clip=n.cssClip(),u.clip[o[r][1]]=u.clip[o[r][0]],"show"===a&&(n.cssClip(u.clip),n.css(l,u[l]),u.clip=i,u[l]=s),n.animate(u,{queue:!1,duration:t.duration,easing:t.easing,complete:e})}),it=!0===V.uiBackCompat?V.effects.define("transfer",function(t,e){V(this).transfer(t,e)}):it,V.ui.focusable=function(t,e){var i,s,n,o=t.nodeName.toLowerCase();return"area"===o?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&0<(i=V("img[usemap='#"+n+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(o)?(s=!t.disabled)&&(n=V(t).closest("fieldset")[0])&&(s=!n.disabled):s="a"===o&&t.href||e,s&&V(t).is(":visible")&&"visible"===V(t).css("visibility"))},V.extend(V.expr.pseudos,{focusable:function(t){return V.ui.focusable(t,null!=V.attr(t,"tabindex"))}}),V.ui.focusable,V.ui.formResetMixin={_formResetHandler:function(){var e=V(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");V.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=V(this.element.prop("form")),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(V.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},V.escapeSelector||(V.escapeSelector=function(t){return CSS.escape(t+"")}),V.fn.even&&V.fn.odd||V.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),V.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},V.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+CSS.escape(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},V.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=V(this);return(!i||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:V(this[0].ownerDocument||document)},V.extend(V.expr.pseudos,{tabbable:function(t){var e=V.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&V.ui.focusable(t,i)}}),V.fn.extend({uniqueId:(tt=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++tt)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&V(this).removeAttr("id")})}}),V.widget("ui.accordion",{version:"1.14.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:function(t){return t.find("> li > :first-child").add(t.find("> :not(li)").filter(function(t){return t%2==0}))},heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=V(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),t.collapsible||!1!==t.active&&null!=t.active||(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():V()}},_createIcons:function(){var t,e=this.options.icons;e&&(t=V("<span>"),this._addClass(t,"ui-accordion-header-icon","ui-icon "+e.header),t.prependTo(this.headers),t=this.active.children(".ui-accordion-header-icon"),this._removeClass(t,e.header)._addClass(t,null,e.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){"active"===t?this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),"icons"===t&&(this._destroyIcons(),e)&&this._createIcons())},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var e=V.ui.keyCode,i=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case e.RIGHT:case e.DOWN:n=this.headers[(s+1)%i];break;case e.LEFT:case e.UP:n=this.headers[(s-1+i)%i];break;case e.SPACE:case e.ENTER:this._eventHandler(t);break;case e.HOME:n=this.headers[0];break;case e.END:n=this.headers[i-1]}n&&(V(t.target).attr("tabIndex",-1),V(n).attr("tabIndex",0),V(n).trigger("focus"),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===V.ui.keyCode.UP&&t.ctrlKey&&V(t.currentTarget).prev().trigger("focus")},refresh:function(){var t=this.options;this._processPanels(),!1===t.active&&!0===t.collapsible||!this.headers.length?(t.active=!1,this.active=V()):!1===t.active?this._activate(0):this.active.length&&!V.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=V()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;"function"==typeof this.options.header?this.headers=this.options.header(this.element):this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var i,t=this.options,e=t.heightStyle,s=this.element.parent();this.active=this._findActive(t.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var t=V(this),e=t.uniqueId().attr("id"),i=t.next(),s=i.uniqueId().attr("id");t.attr("aria-controls",s),i.attr("aria-labelledby",e)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(t.event),"fill"===e?(i=s.height(),this.element.siblings(":visible").each(function(){var t=V(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.headers.each(function(){i-=V(this).outerHeight(!0)}),this.headers.next().each(function(){V(this).height(Math.max(0,i-V(this).innerHeight()+V(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.headers.next().each(function(){var t=V(this).is(":visible");t||V(this).show(),i=Math.max(i,V(this).css("height","").height()),t||V(this).hide()}).height(i))},_activate:function(t){t=this._findActive(t)[0];t!==this.active[0]&&(t=t||this.active[0],this._eventHandler({target:t,currentTarget:t,preventDefault:V.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):V()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&V.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var e=this.options,i=this.active,s=V(t.currentTarget),n=s[0]===i[0],o=n&&e.collapsible,a=o?V():s.next(),r=i.next(),r={oldHeader:i,oldPanel:r,newHeader:o?V():s,newPanel:a};t.preventDefault(),n&&!e.collapsible||!1===this._trigger("beforeActivate",t,r)||(e.active=!o&&this.headers.index(s),this.active=n?V():s,this._toggle(r),this._removeClass(i,"ui-accordion-header-active","ui-state-active"),e.icons&&(a=i.children(".ui-accordion-header-icon"),this._removeClass(a,null,e.icons.activeHeader)._addClass(a,null,e.icons.header)),n)||(this._removeClass(s,"ui-accordion-header-collapsed")._addClass(s,"ui-accordion-header-active","ui-state-active"),e.icons&&(t=s.children(".ui-accordion-header-icon"),this._removeClass(t,null,e.icons.header)._addClass(t,null,e.icons.activeHeader)),this._addClass(s.next(),"ui-accordion-content-active"))},_toggle:function(t){var e=t.newPanel,i=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=e,this.prevHide=i,this.options.animate?this._animate(e,i,t):(i.hide(),e.show(),this._toggleComplete(t)),i.attr({"aria-hidden":"true"}),i.prev().attr({"aria-selected":"false","aria-expanded":"false"}),e.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):e.length&&this.headers.filter(function(){return 0===parseInt(V(this).attr("tabIndex"),10)}).attr("tabIndex",-1),e.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,i,e){function s(){o._toggleComplete(e)}var n,o=this,a=0,r=t.css("box-sizing"),l=t.length&&(!i.length||t.index()<i.index()),h=this.options.animate||{},l=l&&h.down||h,c=(c="string"==typeof l?l:c)||l.easing||h.easing,u=(u="number"==typeof l?l:u)||l.duration||h.duration;return i.length?t.length?(n=t.show().outerHeight(),i.animate(this.hideProps,{duration:u,easing:c,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:u,easing:c,complete:s,step:function(t,e){e.now=Math.round(t),"height"!==e.prop?"content-box"===r&&(a+=e.now):"content"!==o.options.heightStyle&&(e.now=Math.round(n-i.outerHeight()-a),a=0)}})):i.animate(this.hideProps,u,c,s):t.animate(this.showProps,u,c,s)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),this._trigger("activate",null,t)}}),V.widget("ui.menu",{version:"1.14.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault(),this._activateItem(t)},"click .ui-menu-item":function(t){var e=V(t.target),i=V(this.document[0].activeElement);!this.mouseHandled&&e.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),e.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&i.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active)&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this._menuItems().first();e||this.focus(t,i)},blur:function(t){this._delay(function(){V.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t,!0),this.mouseHandled=!1}})},_activateItem:function(t){var e,i;this.previousFilter||t.clientX===this.lastMousePosition.x&&t.clientY===this.lastMousePosition.y||(this.lastMousePosition={x:t.clientX,y:t.clientY},e=V(t.target).closest(".ui-menu-item"),i=V(t.currentTarget),e[0]!==i[0])||i.is(".ui-state-active")||(this._removeClass(i.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,i))},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each(function(){var t=V(this);t.data("ui-menu-submenu-caret")&&t.remove()})},_keydown:function(t){var e,i,s,n=!0;switch(t.keyCode){case V.ui.keyCode.PAGE_UP:this.previousPage(t);break;case V.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case V.ui.keyCode.HOME:this._move("first","first",t);break;case V.ui.keyCode.END:this._move("last","last",t);break;case V.ui.keyCode.UP:this.previous(t);break;case V.ui.keyCode.DOWN:this.next(t);break;case V.ui.keyCode.LEFT:this.collapse(t);break;case V.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case V.ui.keyCode.ENTER:case V.ui.keyCode.SPACE:this._activate(t);break;case V.ui.keyCode.ESCAPE:this.collapse(t);break;default:e=this.previousFilter||"",s=n=!1,i=96<=t.keyCode&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),i===e?s=!0:i=e+i,e=this._filterMenuItems(i),(e=s&&-1!==e.index(this.active.next())?this.active.nextAll(".ui-menu-item"):e).length||(i=String.fromCharCode(t.keyCode),e=this._filterMenuItems(i)),e.length?(this.focus(t,e),this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}n&&t.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var t,e,s=this,n=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),t=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=V(this),e=t.prev(),i=V("<span>").data("ui-menu-submenu-caret",!0);s._addClass(i,"ui-menu-icon","ui-icon "+n),e.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",e.attr("id"))}),this._addClass(t,"ui-menu","ui-widget ui-widget-content ui-front"),(t=i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var t=V(this);s._isDivider(t)&&s._addClass(t,"ui-menu-divider","ui-widget-content")}),e=(i=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(i,"ui-menu-item")._addClass(e,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!V.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){var i;"icons"===t&&(i=this.element.find(".ui-menu-icon"),this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",String(t)),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),i=this.active.children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),i=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,s;this._hasScroll()&&(e=parseFloat(V.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(V.css(this.activeMenu[0],"paddingTop"))||0,e=t.offset().top-this.activeMenu.offset().top-e-i,i=this.activeMenu.scrollTop(),s=this.activeMenu.height(),t=t.outerHeight(),e<0?this.activeMenu.scrollTop(i+e):s<e+t&&this.activeMenu.scrollTop(i+e-s+t))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(t){var e=V.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var t=i?this.element:V(e&&e.target).closest(this.element.find(".ui-menu"));t.length||(t=this.element),this._close(t),this.blur(e),this._removeClass(t.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=t},i?0:this.delay)},_close:function(t){(t=t||(this.active?this.active.parent():this.element)).find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!V(t.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this._menuItems(this.active.children(".ui-menu")).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(t){return(t||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(t,e,i){var s;(s=this.active?"first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").last():this.active[t+"All"](".ui-menu-item").first():s)&&s.length&&this.active||(s=this._menuItems(this.activeMenu)[e]()),this.focus(i,s)},nextPage:function(t){var e,i,s;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===V.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each(function(){return(e=V(this)).offset().top-i-s<0}),this.focus(t,e)):this.focus(t,this._menuItems(this.activeMenu)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var e,i,s;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===V.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each(function(){return 0<(e=V(this)).offset().top-i+s}),this.focus(t,e)):this.focus(t,this._menuItems(this.activeMenu).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||V(t.target).closest(".ui-menu-item");var e={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,e)},_filterMenuItems:function(t){var t=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),e=new RegExp("^"+t,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return e.test(String.prototype.trim.call(V(this).children(".ui-menu-item-wrapper").text()))})}}),V.widget("ui.autocomplete",{version:"1.14.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var i,s,n,t=this.element[0].nodeName.toLowerCase(),e="textarea"===t,t="input"===t;this.isMultiLine=e||!t&&"true"===this.element.prop("contentEditable"),this.valueMethod=this.element[e||t?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(t){if(this.element.prop("readOnly"))s=n=i=!0;else{s=n=i=!1;var e=V.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:i=!0,this._move("previousPage",t);break;case e.PAGE_DOWN:i=!0,this._move("nextPage",t);break;case e.UP:i=!0,this._keyEvent("previous",t);break;case e.DOWN:i=!0,this._keyEvent("next",t);break;case e.ENTER:this.menu.active&&(i=!0,t.preventDefault(),this.menu.select(t));break;case e.TAB:this.menu.active&&this.menu.select(t);break;case e.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(t),t.preventDefault());break;default:s=!0,this._searchTimeout(t)}}},keypress:function(t){if(i)i=!1,this.isMultiLine&&!this.menu.element.is(":visible")||t.preventDefault();else if(!s){var e=V.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:this._move("previousPage",t);break;case e.PAGE_DOWN:this._move("nextPage",t);break;case e.UP:this._keyEvent("previous",t);break;case e.DOWN:this._keyEvent("next",t)}}},input:function(t){n?(n=!1,t.preventDefault()):this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){clearTimeout(this.searching),this.close(t),this._change(t)}}),this._initSource(),this.menu=V("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault()},menufocus:function(t,e){var i,s;this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent)&&/^mouse/.test(t.originalEvent.type)?(this.menu.blur(),this.document.one("mousemove",function(){V(t.target).trigger(t.originalEvent)})):(s=e.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:s})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value),(i=e.item.attr("aria-label")||s.value)&&String.prototype.trim.call(i).length&&(clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html(V("<div>").text(i))},100)))},menuselect:function(t,e){var e=e.item.data("ui-autocomplete-item"),i=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.trigger("focus"),this.previous=i),!1!==this._trigger("select",t,{item:e})&&this._value(e.value),this.term=this._value(),this.close(t),this.selectedItem=e}}),this.liveRegion=V("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var e=this.menu.element[0];return t.target===this.element[0]||t.target===e||V.contains(e,t.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var t=this.options.appendTo;return t=(t=(t=t&&(t.jquery||t.nodeType?V(t):this.document.find(t).eq(0)))&&t[0]?t:this.element.closest(".ui-front, dialog")).length?t:this.document[0].body},_initSource:function(){var i,s,n=this;Array.isArray(this.options.source)?(i=this.options.source,this.source=function(t,e){e(V.ui.autocomplete.filter(i,t.term))}):"string"==typeof this.options.source?(s=this.options.source,this.source=function(t,e){n.xhr&&n.xhr.abort(),n.xhr=V.ajax({url:s,data:t,dataType:"json",success:function(t){e(t)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(s){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),e=this.menu.element.is(":visible"),i=s.altKey||s.ctrlKey||s.metaKey||s.shiftKey;t&&(e||i)||(this.selectedItem=null,this.search(null,s))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}.bind(this)},__response:function(t){t=t&&this._normalize(t),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:V.map(t,function(t){return"string"==typeof t?{label:t,value:t}:V.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var e=this.menu.element.empty();this._renderMenu(e,t),this.isNewMenu=!0,this.menu.refresh(),e.show(),this._resizeMenu(),e.position(V.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,t){var s=this;V.each(t,function(t,e){s._renderItemData(i,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(t,e){return V("<li>").append(V("<div>").text(e.label)).appendTo(t)},_move:function(t,e){this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur()):this.menu[t](e):this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),e.preventDefault())}}),V.extend(V.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,e){var i=new RegExp(V.ui.autocomplete.escapeRegex(e),"i");return V.grep(t,function(t){return i.test(t.label||t.value||t)})}}),V.widget("ui.autocomplete",V.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(1<t?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html(V("<div>").text(e))},100))}}),V.ui.autocomplete,/ui-corner-([a-z]){2,6}/g);V.widget("ui.controlgroup",{version:"1.14.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var o=this,a=[];V.each(this.options.items,function(s,t){var e,n={};t&&("controlgroupLabel"===s?((e=o.element.find(t)).each(function(){var t=V(this);t.children(".ui-controlgroup-label-contents").length||t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),o._addClass(e,null,"ui-widget ui-widget-content ui-state-default"),a=a.concat(e.get())):V.fn[s]&&(n=o["_"+s+"Options"]?o["_"+s+"Options"]("middle"):{classes:{}},o.element.find(t).each(function(){var t=V(this),e=t[s]("instance"),i=V.widget.extend({},n);"button"===s&&t.parent(".ui-spinner").length||((e=e||t[s]()[s]("instance"))&&(i.classes=o._resolveClassesValues(i.classes,e)),t[s](i),i=t[s]("widget"),V.data(i[0],"ui-controlgroup-data",e||t[s]("instance")),a.push(i[0]))})))}),this.childWidgets=V(V.uniqueSort(a)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var t=V(this).data("ui-controlgroup-data");t&&t[e]&&t[e]()})},_updateCornerClass:function(t,e){e=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,e)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){t=this._buildSimpleOptions(t,"ui-spinner");return t.classes["ui-spinner-up"]="",t.classes["ui-spinner-down"]="",t},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,s){var n={};return V.each(i,function(t){var e=s.options.classes[t]||"",e=String.prototype.trim.call(e.replace(st,""));n[t]=(e+" "+i[t]).replace(/\s+/g," ")}),n},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?this._callChildMethod(e?"disable":"enable"):this.refresh()},refresh:function(){var n,o=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),n=this.childWidgets,(n=this.options.onlyVisible?n.filter(":visible"):n).length&&(V.each(["first","last"],function(t,e){var i,s=n[e]().data("ui-controlgroup-data");s&&o["_"+s.widgetName+"Options"]?((i=o["_"+s.widgetName+"Options"](1===n.length?"only":e)).classes=o._resolveClassesValues(i.classes,s),s.element[s.widgetName](i)):o._updateCornerClass(n[e](),e)}),this._callChildMethod("refresh"))}}),V.widget("ui.checkboxradio",[V.ui.formResetMixin,{version:"1.14.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var t,e=this._super()||{};return this._readType(),t=this.element.labels(),this.label=V(t[t.length-1]),this.label.length||V.error("No label found for checkboxradio widget"),this.originalLabel="",(t=this.label.contents().not(this.element[0])).length&&(this.originalLabel+=t.clone().wrapAll("<div></div>").parent().html()),this.originalLabel&&(e.label=this.originalLabel),null!=(t=this.element[0].disabled)&&(e.disabled=t),e},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var t=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===t&&/radio|checkbox/.test(this.type)||V.error("Can't create checkboxradio on element.nodeName="+t+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var t=this.element[0].name,e="input[name='"+CSS.escape(t)+"']";return t?(this.form.length?V(this.form[0].elements).filter(e):V(e).filter(function(){return 0===V(V(this).prop("form")).length})).not(this.element):V([])},_toggleClasses:function(){var t=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",t)._toggleClass(this.icon,null,"ui-icon-blank",!t),"radio"===this.type&&this._getRadioGroup().each(function(){var t=V(this).checkboxradio("instance");t&&t._removeClass(t.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){"label"===t&&!e||(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e):this.refresh())},_updateIcon:function(t){var e="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=V("<span>"),this.iconSpace=V("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(e+=t?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,t?"ui-icon-blank":"ui-icon-check")):e+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",e),t||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),(t=this.iconSpace?t.not(this.iconSpace[0]):t).remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),V.ui.checkboxradio,V.widget("ui.button",{version:"1.14.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(t){t.keyCode===V.ui.keyCode.SPACE&&(t.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(t,e){var t="iconPosition"!==t,i=t?this.options.iconPosition:e,s="top"===i||"bottom"===i;this.icon?t&&this._removeClass(this.icon,null,this.options.icon):(this.icon=V("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),t&&this._addClass(this.icon,null,e),this._attachIcon(i),s?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=V("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(i))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=(void 0===t.showLabel?this.options:t).showLabel,i=(void 0===t.icon?this.options:t).icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace)&&this.iconSpace.remove()),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e)&&this.element.trigger("blur")},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!0===V.uiBackCompat&&(V.widget("ui.button",V.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){"text"===t?this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments))}}),V.fn.button=(et=V.fn.button,function(i){var t="string"==typeof i,s=Array.prototype.slice.call(arguments,1),n=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=V(this).attr("type"),e=V.data(this,"ui-"+("checkbox"!==e&&"radio"!==e?"button":"checkboxradio"));return"instance"===i?(n=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?V.error("no such method '"+i+"' for button widget instance"):(t=e[i].apply(e,s))!==e&&void 0!==t?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:V.error("cannot call methods on button prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=V.widget.extend.apply(null,[i].concat(s))),this.each(function(){var t=V(this).attr("type"),t="checkbox"!==t&&"radio"!==t?"button":"checkboxradio",e=V.data(this,"ui-"+t);e?(e.option(i||{}),e._init&&e._init()):"button"==t?et.call(V(this),i):V(this).checkboxradio(V.extend({icon:!1},i))})),n}),V.fn.buttonset=function(){return V.ui.controlgroup||V.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),V.ui.button;function nt(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",selectMonthLabel:"Select month",selectYearLabel:"Select year"},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,onUpdateDatepicker:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},V.extend(this._defaults,this.regional[""]),this.regional.en=V.extend(!0,{},this.regional[""]),this.regional["en-US"]=V.extend(!0,{},this.regional.en),this.dpDiv=ot(V("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function ot(t){var e="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.on("mouseout",e,function(){V(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&V(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&V(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",e,at)}function at(){V.datepicker._isDisabledDatepicker((S.inline?S.dpDiv.parent():S.input)[0])||(V(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),V(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&V(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&V(this).addClass("ui-datepicker-next-hover"))}function H(t,e){for(var i in V.extend(t,e),e)null==e[i]&&(t[i]=e[i])}V.extend(V.ui,{datepicker:{version:"1.14.1"}}),V.extend(nt.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return H(this._defaults,t||{}),this},_attachDatepicker:function(t,e){var i,s=t.nodeName.toLowerCase(),n="div"===s||"span"===s;t.id||(this.uuid+=1,t.id="dp"+this.uuid),(i=this._newInst(V(t),n)).settings=V.extend({},e||{}),"input"===s?this._connectDatepicker(t,i):n&&this._inlineDatepicker(t,i)},_newInst:function(t,e){return{id:t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:e,dpDiv:e?ot(V("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,e){var i=V(t);e.append=V([]),e.trigger=V([]),i.hasClass(this.markerClassName)||(this._attachments(i,e),i.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(e),V.data(t,"datepicker",e),e.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,e){var i,s=this._get(e,"appendText"),n=this._get(e,"isRTL");e.append&&e.append.remove(),s&&(e.append=V("<span>").addClass(this._appendClass).text(s),t[n?"before":"after"](e.append)),t.off("focus",this._showDatepicker),e.trigger&&e.trigger.remove(),"focus"!==(s=this._get(e,"showOn"))&&"both"!==s||t.on("focus",this._showDatepicker),"button"!==s&&"both"!==s||(s=this._get(e,"buttonText"),i=this._get(e,"buttonImage"),this._get(e,"buttonImageOnly")?e.trigger=V("<img>").addClass(this._triggerClass).attr({src:i,alt:s,title:s}):(e.trigger=V("<button type='button'>").addClass(this._triggerClass),i?e.trigger.html(V("<img>").attr({src:i,alt:s,title:s})):e.trigger.text(s)),t[n?"before":"after"](e.trigger),e.trigger.on("click",function(){return V.datepicker._datepickerShowing&&V.datepicker._lastInput===t[0]?V.datepicker._hideDatepicker():(V.datepicker._datepickerShowing&&V.datepicker._lastInput!==t[0]&&V.datepicker._hideDatepicker(),V.datepicker._showDatepicker(t[0])),!1}))},_autoSize:function(t){var e,i,s,n,o,a;this._get(t,"autoSize")&&!t.inline&&(o=new Date(2009,11,20),(a=this._get(t,"dateFormat")).match(/[DM]/)&&(o.setMonth((e=function(t){for(n=s=i=0;n<t.length;n++)t[n].length>i&&(i=t[n].length,s=n);return s})(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length))},_inlineDatepicker:function(t,e){var i=V(t);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(e.dpDiv),V.data(t,"datepicker",e),this._setDate(e,this._getDefaultDate(e),!0),this._updateDatepicker(e),this._updateAlternate(e),e.settings.disabled&&this._disableDatepicker(t),e.dpDiv.css("display","block"))},_dialogDatepicker:function(t,e,i,s,n){var o,a=this._dialogInst;return a||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=V("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),V("body").append(this._dialogInput),(a=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},V.data(this._dialogInput[0],"datepicker",a)),H(a.settings,s||{}),e=e&&e.constructor===Date?this._formatDate(a,e):e,this._dialogInput.val(e),this._pos=n?n.length?n:[n.pageX,n.pageY]:null,this._pos||(o=document.documentElement.clientWidth,s=document.documentElement.clientHeight,e=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[o/2-100+e,s/2-150+n]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),a.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),V.blockUI&&V.blockUI(this.dpDiv),V.data(this._dialogInput[0],"datepicker",a),this},_destroyDatepicker:function(t){var e,i=V(t),s=V.data(t,"datepicker");i.hasClass(this.markerClassName)&&(e=t.nodeName.toLowerCase(),V.removeData(t,"datepicker"),"input"===e?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==e&&"span"!==e||i.removeClass(this.markerClassName).empty(),V.datepicker._hideDatepicker(),S===s)&&(S=null,this._curInst=null)},_enableDatepicker:function(e){var t,i=V(e),s=V.data(e,"datepicker");i.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!1,s.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==t&&"span"!==t||((s=i.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=V.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var t,i=V(e),s=V.data(e,"datepicker");i.hasClass(this.markerClassName)&&("input"===(t=e.nodeName.toLowerCase())?(e.disabled=!0,s.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==t&&"span"!==t||((s=i.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=V.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(t)for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(t){try{return V.data(t,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,e,i){var s,n,o=this._getInst(t);if(2===arguments.length&&"string"==typeof e)return"defaults"===e?V.extend({},V.datepicker._defaults):o?"all"===e?V.extend({},o.settings):this._get(o,e):null;s=e||{},"string"==typeof e&&((s={})[e]=i),o&&(this._curInst===o&&this._hideDatepicker(),e=this._getDateDatepicker(t,!0),i=this._getMinMaxDate(o,"min"),n=this._getMinMaxDate(o,"max"),H(o.settings,s),null!==i&&void 0!==s.dateFormat&&void 0===s.minDate&&(o.settings.minDate=this._formatDate(o,i)),null!==n&&void 0!==s.dateFormat&&void 0===s.maxDate&&(o.settings.maxDate=this._formatDate(o,n)),"disabled"in s&&(s.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(V(t),o),this._autoSize(o),this._setDate(o,e),this._updateAlternate(o),this._updateDatepicker(o))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){t=this._getInst(t);t&&this._updateDatepicker(t)},_setDateDatepicker:function(t,e){t=this._getInst(t);t&&(this._setDate(t,e),this._updateDatepicker(t),this._updateAlternate(t))},_getDateDatepicker:function(t,e){t=this._getInst(t);return t&&!t.inline&&this._setDateFromField(t,e),t?this._getDate(t):null},_doKeyDown:function(t){var e,i,s=V.datepicker._getInst(t.target),n=!0,o=s.dpDiv.is(".ui-datepicker-rtl");if(s._keyEvent=!0,V.datepicker._datepickerShowing)switch(t.keyCode){case 9:V.datepicker._hideDatepicker(),n=!1;break;case 13:return(i=V("td."+V.datepicker._dayOverClass+":not(."+V.datepicker._currentClass+")",s.dpDiv))[0]&&V.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,i[0]),(i=V.datepicker._get(s,"onSelect"))?(e=V.datepicker._formatDate(s),i.apply(s.input?s.input[0]:null,[e,s])):V.datepicker._hideDatepicker(),!1;case 27:V.datepicker._hideDatepicker();break;case 33:V.datepicker._adjustDate(t.target,t.ctrlKey?-V.datepicker._get(s,"stepBigMonths"):-V.datepicker._get(s,"stepMonths"),"M");break;case 34:V.datepicker._adjustDate(t.target,t.ctrlKey?+V.datepicker._get(s,"stepBigMonths"):+V.datepicker._get(s,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&V.datepicker._clearDate(t.target),n=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&V.datepicker._gotoToday(t.target),n=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&V.datepicker._adjustDate(t.target,o?1:-1,"D"),n=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&V.datepicker._adjustDate(t.target,t.ctrlKey?-V.datepicker._get(s,"stepBigMonths"):-V.datepicker._get(s,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&V.datepicker._adjustDate(t.target,-7,"D"),n=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&V.datepicker._adjustDate(t.target,o?-1:1,"D"),n=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&V.datepicker._adjustDate(t.target,t.ctrlKey?+V.datepicker._get(s,"stepBigMonths"):+V.datepicker._get(s,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&V.datepicker._adjustDate(t.target,7,"D"),n=t.ctrlKey||t.metaKey;break;default:n=!1}else 36===t.keyCode&&t.ctrlKey?V.datepicker._showDatepicker(this):n=!1;n&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var e,i=V.datepicker._getInst(t.target);if(V.datepicker._get(i,"constrainInput"))return i=V.datepicker._possibleChars(V.datepicker._get(i,"dateFormat")),e=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||e<" "||!i||-1<i.indexOf(e)},_doKeyUp:function(t){t=V.datepicker._getInst(t.target);if(t.input.val()!==t.lastVal)try{V.datepicker.parseDate(V.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,V.datepicker._getFormatConfig(t))&&(V.datepicker._setDateFromField(t),V.datepicker._updateAlternate(t),V.datepicker._updateDatepicker(t))}catch(t){}return!0},_showDatepicker:function(t){var e,i,s,n;"input"!==(t=t.target||t).nodeName.toLowerCase()&&(t=V("input",t.parentNode)[0]),V.datepicker._isDisabledDatepicker(t)||V.datepicker._lastInput===t||(n=V.datepicker._getInst(t),V.datepicker._curInst&&V.datepicker._curInst!==n&&(V.datepicker._curInst.dpDiv.stop(!0,!0),n)&&V.datepicker._datepickerShowing&&V.datepicker._hideDatepicker(V.datepicker._curInst.input[0]),!1===(i=(i=V.datepicker._get(n,"beforeShow"))?i.apply(t,[t,n]):{}))||(H(n.settings,i),n.lastVal=null,V.datepicker._lastInput=t,V.datepicker._setDateFromField(n),V.datepicker._inDialog&&(t.value=""),V.datepicker._pos||(V.datepicker._pos=V.datepicker._findPos(t),V.datepicker._pos[1]+=t.offsetHeight),e=!1,V(t).parents().each(function(){return!(e|="fixed"===V(this).css("position"))}),i={left:V.datepicker._pos[0],top:V.datepicker._pos[1]},V.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),V.datepicker._updateDatepicker(n),i=V.datepicker._checkOffset(n,i,e),n.dpDiv.css({position:V.datepicker._inDialog&&V.blockUI?"static":e?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),n.inline)||(i=V.datepicker._get(n,"showAnim"),s=V.datepicker._get(n,"duration"),n.dpDiv.css("z-index",(t=>{for(var e;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(e=parseInt(t.css("zIndex"),10),!isNaN(e))&&0!==e)return e;t=t.parent()}return 0})(V(t))+1),V.datepicker._datepickerShowing=!0,V.effects&&V.effects.effect[i]?n.dpDiv.show(i,V.datepicker._get(n,"showOptions"),s):n.dpDiv[i||"show"](i?s:null),V.datepicker._shouldFocusInput(n)&&n.input.trigger("focus"),V.datepicker._curInst=n)},_updateDatepicker:function(t){this.maxRows=4,(S=t).dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var e,i=this._getNumberOfMonths(t),s=i[1],n=t.dpDiv.find("."+this._dayOverClass+" a"),o=V.datepicker._get(t,"onUpdateDatepicker");0<n.length&&at.apply(n.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),1<s&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",17*s+"em"),t.dpDiv[(1!==i[0]||1!==i[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===V.datepicker._curInst&&V.datepicker._datepickerShowing&&V.datepicker._shouldFocusInput(t)&&t.input.trigger("focus"),t.yearshtml&&(e=t.yearshtml,setTimeout(function(){e===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year").first().replaceWith(t.yearshtml),e=t.yearshtml=null},0)),o&&o.apply(t.input?t.input[0]:null,[t])},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")},_checkOffset:function(t,e,i){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,a=t.input?t.input.outerHeight():0,r=document.documentElement.clientWidth+(i?0:V(document).scrollLeft()),l=document.documentElement.clientHeight+(i?0:V(document).scrollTop());return e.left-=this._get(t,"isRTL")?s-o:0,e.left-=i&&e.left===t.input.offset().left?V(document).scrollLeft():0,e.top-=i&&e.top===t.input.offset().top+a?V(document).scrollTop():0,e.left-=Math.min(e.left,r<e.left+s&&s<r?Math.abs(e.left+s-r):0),e.top-=Math.min(e.top,l<e.top+n&&n<l?Math.abs(n+a):0),e},_findPos:function(t){for(var e=this._getInst(t),i=this._get(e,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||V.expr.pseudos.hidden(t));)t=t[i?"previousSibling":"nextSibling"];return[(e=V(t).offset()).left,e.top]},_hideDatepicker:function(t){var e,i,s=this._curInst;!s||t&&s!==V.data(t,"datepicker")||this._datepickerShowing&&(t=this._get(s,"showAnim"),i=this._get(s,"duration"),e=function(){V.datepicker._tidyDialog(s)},V.effects&&V.effects.effect[t]?s.dpDiv.hide(t,V.datepicker._get(s,"showOptions"),i,e):s.dpDiv["slideDown"===t?"slideUp":"fadeIn"===t?"fadeOut":"hide"](t?i:null,e),t||e(),this._datepickerShowing=!1,(i=this._get(s,"onClose"))&&i.apply(s.input?s.input[0]:null,[s.input?s.input.val():"",s]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),V.blockUI)&&(V.unblockUI(),V("body").append(this.dpDiv)),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(t){var e;V.datepicker._curInst&&(t=V(t.target),e=V.datepicker._getInst(t[0]),!(t[0].id===V.datepicker._mainDivId||0!==t.parents("#"+V.datepicker._mainDivId).length||t.hasClass(V.datepicker.markerClassName)||t.closest("."+V.datepicker._triggerClass).length||!V.datepicker._datepickerShowing||V.datepicker._inDialog&&V.blockUI)||t.hasClass(V.datepicker.markerClassName)&&V.datepicker._curInst!==e)&&V.datepicker._hideDatepicker()},_adjustDate:function(t,e,i){var t=V(t),s=this._getInst(t[0]);this._isDisabledDatepicker(t[0])||(this._adjustInstDate(s,e,i),this._updateDatepicker(s))},_gotoToday:function(t){var e,t=V(t),i=this._getInst(t[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(e=new Date,i.selectedDay=e.getDate(),i.drawMonth=i.selectedMonth=e.getMonth(),i.drawYear=i.selectedYear=e.getFullYear()),this._notifyChange(i),this._adjustDate(t)},_selectMonthYear:function(t,e,i){var t=V(t),s=this._getInst(t[0]);s["selected"+("M"===i?"Month":"Year")]=s["draw"+("M"===i?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(t)},_selectDay:function(t,e,i,s){var n=V(t);V(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(n[0])||((n=this._getInst(n[0])).selectedDay=n.currentDay=parseInt(V("a",s).attr("data-date")),n.selectedMonth=n.currentMonth=e,n.selectedYear=n.currentYear=i,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){t=V(t);this._selectDate(t,"")},_selectDate:function(t,e){var i,t=V(t),t=this._getInst(t[0]);e=null!=e?e:this._formatDate(t),t.input&&t.input.val(e),this._updateAlternate(t),(i=this._get(t,"onSelect"))?i.apply(t.input?t.input[0]:null,[e,t]):t.input&&t.input.trigger("change"),t.inline?this._updateDatepicker(t):(this._hideDatepicker(),this._lastInput=t.input[0],"object"!=typeof t.input[0]&&t.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(t){var e,i,s=this._get(t,"altField");s&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),e=this._getDate(t),i=this.formatDate(i,e,this._getFormatConfig(t)),V(document).find(s).val(i))},noWeekends:function(t){t=t.getDay();return[0<t&&t<6,""]},iso8601Week:function(t){var e,t=new Date(t.getTime());return t.setDate(t.getDate()+4-(t.getDay()||7)),e=t.getTime(),t.setMonth(0),t.setDate(1),Math.floor(Math.round((e-t)/864e5)/7)+1},parseDate:function(e,n,t){if(null==e||null==n)throw"Invalid arguments";if(""===(n="object"==typeof n?n.toString():n+""))return null;for(var i,s,o=0,a=(t?t.shortYearCutoff:null)||this._defaults.shortYearCutoff,a="string"!=typeof a?a:(new Date).getFullYear()%100+parseInt(a,10),r=(t?t.dayNamesShort:null)||this._defaults.dayNamesShort,l=(t?t.dayNames:null)||this._defaults.dayNames,h=(t?t.monthNamesShort:null)||this._defaults.monthNamesShort,c=(t?t.monthNames:null)||this._defaults.monthNames,u=-1,d=-1,p=-1,f=-1,g=!1,m=function(t){t=y+1<e.length&&e.charAt(y+1)===t;return t&&y++,t},_=function(t){var e=m(t),e="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,t=new RegExp("^\\d{"+("y"===t?e:1)+","+e+"}"),e=n.substring(o).match(t);if(e)return o+=e[0].length,parseInt(e[0],10);throw"Missing number at position "+o},v=function(t,e,i){var s=-1,t=V.map(m(t)?i:e,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(V.each(t,function(t,e){var i=e[1];if(n.substr(o,i.length).toLowerCase()===i.toLowerCase())return s=e[0],o+=i.length,!1}),-1!==s)return s+1;throw"Unknown name at position "+o},b=function(){if(n.charAt(o)!==e.charAt(y))throw"Unexpected literal at position "+o;o++},y=0;y<e.length;y++)if(g)"'"!==e.charAt(y)||m("'")?b():g=!1;else switch(e.charAt(y)){case"d":p=_("d");break;case"D":v("D",r,l);break;case"o":f=_("o");break;case"m":d=_("m");break;case"M":d=v("M",h,c);break;case"y":u=_("y");break;case"@":u=(s=new Date(_("@"))).getFullYear(),d=s.getMonth()+1,p=s.getDate();break;case"!":u=(s=new Date((_("!")-this._ticksTo1970)/1e4)).getFullYear(),d=s.getMonth()+1,p=s.getDate();break;case"'":m("'")?b():g=!0;break;default:b()}if(o<n.length&&(t=n.substr(o),!/^\s+/.test(t)))throw"Extra/unparsed characters found in date: "+t;if(-1===u?u=(new Date).getFullYear():u<100&&(u+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u<=a?0:-100)),-1<f)for(d=1,p=f;;){if(p<=(i=this._getDaysInMonth(u,d-1)))break;d++,p-=i}if((s=this._daylightSavingAdjust(new Date(u,d-1,p))).getFullYear()!==u||s.getMonth()+1!==d||s.getDate()!==p)throw"Invalid date";return s},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(e,t,i){if(!t)return"";function s(t,e,i){var s=""+e;if(c(t))for(;s.length<i;)s="0"+s;return s}function n(t,e,i,s){return(c(t)?s:i)[e]}var o,a=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,r=(i?i.dayNames:null)||this._defaults.dayNames,l=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,h=(i?i.monthNames:null)||this._defaults.monthNames,c=function(t){t=o+1<e.length&&e.charAt(o+1)===t;return t&&o++,t},u="",d=!1;if(t)for(o=0;o<e.length;o++)if(d)"'"!==e.charAt(o)||c("'")?u+=e.charAt(o):d=!1;else switch(e.charAt(o)){case"d":u+=s("d",t.getDate(),2);break;case"D":u+=n("D",t.getDay(),a,r);break;case"o":u+=s("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=s("m",t.getMonth()+1,2);break;case"M":u+=n("M",t.getMonth(),l,h);break;case"y":u+=c("y")?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100;break;case"@":u+=t.getTime();break;case"!":u+=1e4*t.getTime()+this._ticksTo1970;break;case"'":c("'")?u+="'":d=!0;break;default:u+=e.charAt(o)}return u},_possibleChars:function(e){for(var t="",i=!1,s=function(t){t=n+1<e.length&&e.charAt(n+1)===t;return t&&n++,t},n=0;n<e.length;n++)if(i)"'"!==e.charAt(n)||s("'")?t+=e.charAt(n):i=!1;else switch(e.charAt(n)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":s("'")?t+="'":i=!0;break;default:t+=e.charAt(n)}return t},_get:function(t,e){return(void 0!==t.settings[e]?t.settings:this._defaults)[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(t){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(r,t,e){var i,s=null==t||""===t?e:"string"==typeof t?(t=>{try{return V.datepicker.parseDate(V.datepicker._get(r,"dateFormat"),t,V.datepicker._getFormatConfig(r))}catch(t){}for(var e=(t.toLowerCase().match(/^c/)?V.datepicker._getDate(r):null)||new Date,i=e.getFullYear(),s=e.getMonth(),n=e.getDate(),o=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=o.exec(t);a;){switch(a[2]||"d"){case"d":case"D":n+=parseInt(a[1],10);break;case"w":case"W":n+=7*parseInt(a[1],10);break;case"m":case"M":s+=parseInt(a[1],10),n=Math.min(n,V.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),n=Math.min(n,V.datepicker._getDaysInMonth(i,s))}a=o.exec(t)}return new Date(i,s,n)})(t):"number"==typeof t?isNaN(t)?e:(s=t,(i=new Date).setDate(i.getDate()+s),i):new Date(t.getTime());return(s=s&&"Invalid Date"===s.toString()?e:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(t){return t?(t.setHours(12<t.getHours()?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,e=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=e.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=e.getMonth(),t.drawYear=t.selectedYear=t.currentYear=e.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(t){var e=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){V.datepicker._adjustDate(i,-e,"M")},next:function(){V.datepicker._adjustDate(i,+e,"M")},hide:function(){V.datepicker._hideDatepicker()},today:function(){V.datepicker._gotoToday(i)},selectDay:function(){return V.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return V.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return V.datepicker._selectMonthYear(i,this,"Y"),!1}};V(this).on(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,N,W,F,L,a,r,R,l,h,c,u,d,p,f,g,m,_,Y,v,b,B,y,j,q,w,x,k,C=new Date,K=this._daylightSavingAdjust(new Date(C.getFullYear(),C.getMonth(),C.getDate())),D=this._get(t,"isRTL"),C=this._get(t,"showButtonPanel"),I=this._get(t,"hideIfNoPrevNext"),T=this._get(t,"navigationAsDateFormat"),P=this._getNumberOfMonths(t),M=this._get(t,"showCurrentAtPos"),S=this._get(t,"stepMonths"),U=1!==P[0]||1!==P[1],H=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),z=this._getMinMaxDate(t,"min"),O=this._getMinMaxDate(t,"max"),A=t.drawMonth-M,E=t.drawYear;if(A<0&&(A+=12,E--),O)for(e=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth()-P[0]*P[1]+1,O.getDate())),e=z&&e<z?z:e;this._daylightSavingAdjust(new Date(E,A,1))>e;)--A<0&&(A=11,E--);for(t.drawMonth=A,t.drawYear=E,M=this._get(t,"prevText"),M=T?this.formatDate(M,this._daylightSavingAdjust(new Date(E,A-S,1)),this._getFormatConfig(t)):M,i=this._canAdjustMonth(t,-1,E,A)?V("<a>").attr({class:"ui-datepicker-prev ui-corner-all","data-handler":"prev","data-event":"click",title:M}).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(D?"e":"w")).text(M))[0].outerHTML:I?"":V("<a>").attr({class:"ui-datepicker-prev ui-corner-all ui-state-disabled",title:M}).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(D?"e":"w")).text(M))[0].outerHTML,M=this._get(t,"nextText"),M=T?this.formatDate(M,this._daylightSavingAdjust(new Date(E,A+S,1)),this._getFormatConfig(t)):M,s=this._canAdjustMonth(t,1,E,A)?V("<a>").attr({class:"ui-datepicker-next ui-corner-all","data-handler":"next","data-event":"click",title:M}).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(D?"w":"e")).text(M))[0].outerHTML:I?"":V("<a>").attr({class:"ui-datepicker-next ui-corner-all ui-state-disabled",title:M}).append(V("<span>").attr("class","ui-icon ui-icon-circle-triangle-"+(D?"w":"e")).text(M))[0].outerHTML,S=this._get(t,"currentText"),I=this._get(t,"gotoCurrent")&&t.currentDay?H:K,S=T?this.formatDate(S,I,this._getFormatConfig(t)):S,M="",t.inline||(M=V("<button>").attr({type:"button",class:"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all","data-handler":"hide","data-event":"click"}).text(this._get(t,"closeText"))[0].outerHTML),T="",C&&(T=V("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(D?M:"").append(this._isInRange(t,I)?V("<button>").attr({type:"button",class:"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all","data-handler":"today","data-event":"click"}).text(S):"").append(D?"":M)[0].outerHTML),n=parseInt(this._get(t,"firstDay"),10),n=isNaN(n)?0:n,o=this._get(t,"showWeek"),N=this._get(t,"dayNames"),W=this._get(t,"dayNamesMin"),F=this._get(t,"monthNames"),L=this._get(t,"monthNamesShort"),a=this._get(t,"beforeShowDay"),r=this._get(t,"showOtherMonths"),R=this._get(t,"selectOtherMonths"),l=this._getDefaultDate(t),h="",u=0;u<P[0];u++){for(d="",this.maxRows=4,p=0;p<P[1];p++){if(f=this._daylightSavingAdjust(new Date(E,A,t.selectedDay)),g=" ui-corner-all",m="",U){if(m+="<div class='ui-datepicker-group",1<P[1])switch(p){case 0:m+=" ui-datepicker-group-first",g=" ui-corner-"+(D?"right":"left");break;case P[1]-1:m+=" ui-datepicker-group-last",g=" ui-corner-"+(D?"left":"right");break;default:m+=" ui-datepicker-group-middle",g=""}m+="'>"}for(m+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+g+"'>"+(/all|left/.test(g)&&0===u?D?s:i:"")+(/all|right/.test(g)&&0===u?D?i:s:"")+this._generateMonthYearHeader(t,A,E,z,O,0<u||0<p,F,L)+"</div><table class='ui-datepicker-calendar'><thead><tr>",_=o?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",c=0;c<7;c++)_+="<th scope='col'"+(5<=(c+n+6)%7?" class='ui-datepicker-week-end'":"")+"><span title='"+N[Y=(c+n)%7]+"'>"+W[Y]+"</span></th>";for(m+=_+"</tr></thead><tbody>",b=this._getDaysInMonth(E,A),E===t.selectedYear&&A===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,b)),v=(this._getFirstDayOfMonth(E,A)-n+7)%7,b=Math.ceil((v+b)/7),B=U&&this.maxRows>b?this.maxRows:b,this.maxRows=B,y=this._daylightSavingAdjust(new Date(E,A,1-v)),j=0;j<B;j++){for(m+="<tr>",q=o?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(y)+"</td>":"",c=0;c<7;c++)w=a?a.apply(t.input?t.input[0]:null,[y]):[!0,""],k=(x=y.getMonth()!==A)&&!R||!w[0]||z&&y<z||O&&O<y,q+="<td class='"+(5<=(c+n+6)%7?" ui-datepicker-week-end":"")+(x?" ui-datepicker-other-month":"")+(y.getTime()===f.getTime()&&A===t.selectedMonth&&t._keyEvent||l.getTime()===y.getTime()&&l.getTime()===f.getTime()?" "+this._dayOverClass:"")+(k?" "+this._unselectableClass+" ui-state-disabled":"")+(x&&!r?"":" "+w[1]+(y.getTime()===H.getTime()?" "+this._currentClass:"")+(y.getTime()===K.getTime()?" ui-datepicker-today":""))+"'"+(x&&!r||!w[2]?"":" title='"+w[2].replace(/'/g,"&#39;")+"'")+(k?"":" data-handler='selectDay' data-event='click' data-month='"+y.getMonth()+"' data-year='"+y.getFullYear()+"'")+">"+(x&&!r?"&#xa0;":k?"<span class='ui-state-default'>"+y.getDate()+"</span>":"<a class='ui-state-default"+(y.getTime()===K.getTime()?" ui-state-highlight":"")+(y.getTime()===H.getTime()?" ui-state-active":"")+(x?" ui-priority-secondary":"")+"' href='#' aria-current='"+(y.getTime()===H.getTime()?"true":"false")+"' data-date='"+y.getDate()+"'>"+y.getDate()+"</a>")+"</td>",y.setDate(y.getDate()+1),y=this._daylightSavingAdjust(y);m+=q+"</tr>"}11<++A&&(A=0,E++),d+=m+="</tbody></table>"+(U?"</div>"+(0<P[0]&&p===P[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}h+=d}return h+=T,t._keyEvent=!1,h},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f=this._get(t,"changeMonth"),g=this._get(t,"changeYear"),m=this._get(t,"showMonthAfterYear"),_=this._get(t,"selectMonthLabel"),v=this._get(t,"selectYearLabel"),b="<div class='ui-datepicker-title'>",y="";if(o||!f)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' aria-label='"+_+"' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!l||c>=s.getMonth())&&(!h||c<=n.getMonth())&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(m||(b+=y+(!o&&f&&g?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!g)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(a=this._get(t,"yearRange").split(":"),u=(new Date).getFullYear(),d=(_=function(t){t=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?u+parseInt(t,10):parseInt(t,10);return isNaN(t)?u:t})(a[0]),p=Math.max(d,_(a[1]||"")),d=s?Math.max(d,s.getFullYear()):d,p=n?Math.min(p,n.getFullYear()):p,t.yearshtml+="<select class='ui-datepicker-year' aria-label='"+v+"' data-handler='selectYear' data-event='change'>";d<=p;d++)t.yearshtml+="<option value='"+d+"'"+(d===i?" selected='selected'":"")+">"+d+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),m&&(b+=(!o&&f&&g?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),e=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),s=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,e)));t.selectedDay=s.getDate(),t.drawMonth=t.selectedMonth=s.getMonth(),t.drawYear=t.selectedYear=s.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),t=this._getMinMaxDate(t,"max"),i=i&&e<i?i:e;return t&&t<i?t:i},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){t=this._get(t,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),i=this._daylightSavingAdjust(new Date(i,s+(e<0?e:n[0]*n[1]),1));return e<0&&i.setDate(this._getDaysInMonth(i.getFullYear(),i.getMonth())),this._isInRange(t,i)},_isInRange:function(t,e){var i,s=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),o=null,a=null,t=this._get(t,"yearRange");return t&&(t=t.split(":"),i=(new Date).getFullYear(),o=parseInt(t[0],10),a=parseInt(t[1],10),t[0].match(/[+\-].*/)&&(o+=i),t[1].match(/[+\-].*/))&&(a+=i),(!s||e.getTime()>=s.getTime())&&(!n||e.getTime()<=n.getTime())&&(!o||e.getFullYear()>=o)&&(!a||e.getFullYear()<=a)},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:"string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),V.fn.datepicker=function(t){if(!this.length)return this;V.datepicker.initialized||(V(document).on("mousedown",V.datepicker._checkExternalClick),V.datepicker.initialized=!0),0===V("#"+V.datepicker._mainDivId).length&&V("body").append(V.datepicker.dpDiv);var e=Array.prototype.slice.call(arguments,1);return"string"==typeof t&&("isDisabled"===t||"getDate"===t||"widget"===t)||"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?V.datepicker["_"+t+"Datepicker"].apply(V.datepicker,[this[0]].concat(e)):this.each(function(){"string"==typeof t?V.datepicker["_"+t+"Datepicker"].apply(V.datepicker,[this].concat(e)):V.datepicker._attachDatepicker(this,t)})},V.datepicker=new nt,V.datepicker.initialized=!1,V.datepicker.uuid=(new Date).getTime(),V.datepicker.version="1.14.1";var z=!1;V(document).on("mouseup",function(){z=!1}),V.widget("ui.mouse",{version:"1.14.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(t){if(!0===V.data(t.target,e.widgetName+".preventClickEvent"))return V.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){var e,i,s;if(!z)return this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),i=1===(this._mouseDownEvent=t).which,s="string"==typeof(e=this).options.cancel&&V(t.target).closest(this.options.cancel).length,i&&!s&&this._mouseCapture(t)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?t.preventDefault():(!0===V.data(t.target,this.widgetName+".preventClickEvent")&&V.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),z=!0)),!0},_mouseMove:function(t){if(this._mouseMoved&&!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t);return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&V.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,z=!1,t.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),V.ui.plugin={add:function(t,e,i){var s,n=V.ui[t].prototype;for(s in i)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([e,i[s]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},V.widget("ui.draggable",V.ui.mouse,{version:"1.14.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return!(this.helper||e.disabled||0<V(t.target).closest(".ui-resizable-handle").length||(this.handle=this._getHandle(t),!this.handle)||(this._blurActiveElement(t),this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=V(this);return V("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=this.document[0].activeElement;V(t.target).closest(e).length||V(e).trigger("blur")},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),V.ui.ddmanager&&(V.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===V(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),V.ui.ddmanager&&!e.dropBehaviour&&V.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),V.ui.ddmanager&&V.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){e=this._uiHash();if(!1===this._trigger("drag",t,e))return this._mouseUp(new V.Event("mouseup",t)),!1;this.position=e.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",V.ui.ddmanager&&V.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,i=!1;return V.ui.ddmanager&&!this.options.dropBehaviour&&(i=V.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||"function"==typeof this.options.revert&&this.options.revert.call(this.element,i)?V(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),V.ui.ddmanager&&V.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.trigger("focus"),V.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new V.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!V(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(t){var e=this.options,i="function"==typeof e.helper,t=i?V(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return t.parents("body").length||t.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),i&&t[0]===this.element[0]&&this._setPositionRelative(),t[0]===this.element[0]||/(fixed|absolute)/.test(t.css("position"))||t.css("position","absolute"),t},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),"left"in(t=Array.isArray(t)?{left:+t[0],top:+t[1]||0}:t)&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&V.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),{top:(t=this._isRootNode(this.offsetParent[0])?{top:0,left:0}:t).top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){var t,e;return"relative"!==this.cssPosition?{top:0,left:0}:(t=this.element.position(),e=this._isRootNode(this.scrollParent[0]),{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())})},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e=this.options,i=this.document[0];this.relativeContainer=null,e.containment?"window"===e.containment?this.containment=[V(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,V(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,V(window).scrollLeft()+V(window).width()-this.helperProportions.width-this.margins.left,V(window).scrollTop()+(V(window).height()||i.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:"document"===e.containment?this.containment=[0,0,V(i).width()-this.helperProportions.width-this.margins.left,(V(i).height()||i.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:e.containment.constructor===Array?this.containment=e.containment:("parent"===e.containment&&(e.containment=this.helper[0].parentNode),(e=(i=V(e.containment))[0])&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i)):this.containment=null},_convertPositionTo:function(t,e){e=e||this.position;var t="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*t+this.offset.parent.top*t-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*t,left:e.left+this.offset.relative.left*t+this.offset.parent.left*t-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*t}},_generatePosition:function(t,e){var i,s=this.options,n=this._isRootNode(this.scrollParent[0]),o=t.pageX,a=t.pageY;return n&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),{top:(a=e&&(this.containment&&(i=this.relativeContainer?(e=this.relativeContainer.offset(),[this.containment[0]+e.left,this.containment[1]+e.top,this.containment[2]+e.left,this.containment[3]+e.top]):this.containment,t.pageX-this.offset.click.left<i[0]&&(o=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(a=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(o=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3])&&(a=i[3]+this.offset.click.top),s.grid&&(e=s.grid[1]?this.originalPageY+Math.round((a-this.originalPageY)/s.grid[1])*s.grid[1]:this.originalPageY,a=!i||e-this.offset.click.top>=i[1]||e-this.offset.click.top>i[3]?e:e-this.offset.click.top>=i[1]?e-s.grid[1]:e+s.grid[1],t=s.grid[0]?this.originalPageX+Math.round((o-this.originalPageX)/s.grid[0])*s.grid[0]:this.originalPageX,o=!i||t-this.offset.click.left>=i[0]||t-this.offset.click.left>i[2]?t:t-this.offset.click.left>=i[0]?t-s.grid[0]:t+s.grid[0]),"y"===s.axis&&(o=this.originalPageX),"x"===s.axis)?this.originalPageY:a)-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,e,i){return i=i||this._uiHash(),V.ui.plugin.call(this,t,[e,i,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),V.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),V.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,i){var s=V.extend({},t,{item:i.element});i.sortables=[],V(i.options.connectToSortable).each(function(){var t=V(this).sortable("instance");t&&!t.options.disabled&&(i.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,s))})},stop:function(e,t,i){var s=V.extend({},t,{item:i.element});i.cancelHelperRemoval=!1,V.each(i.sortables,function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))})},drag:function(i,s,n){V.each(n.sortables,function(){var t=!1,e=this;e.positionAbs=n.positionAbs,e.helperProportions=n.helperProportions,e.offset.click=n.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,V.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,t=this!==e&&this._intersectsWith(this.containerCache)&&V.contains(e.element[0],this.element[0])?!1:t})),t?(e.isOver||(e.isOver=1,n._parent=s.helper.parent(),e.currentItem=s.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return s.helper[0]},i.target=e.currentItem[0],e._mouseCapture(i,!0),e._mouseStart(i,!0,!0),e.offset.click.top=n.offset.click.top,e.offset.click.left=n.offset.click.left,e.offset.parent.left-=n.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=n.offset.parent.top-e.offset.parent.top,n._trigger("toSortable",i),n.dropped=e.element,V.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,e.fromOutside=n),e.currentItem&&(e._mouseDrag(i),s.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",i,e._uiHash(e)),e._mouseStop(i,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),s.helper.appendTo(n._parent),n._refreshOffsets(i),s.position=n._generatePosition(i,!0),n._trigger("fromSortable",i),n.dropped=!1,V.each(n.sortables,function(){this.refreshPositions()}))})}}),V.ui.plugin.add("draggable","cursor",{start:function(t,e,i){var s=V("body"),i=i.options;s.css("cursor")&&(i._cursor=s.css("cursor")),s.css("cursor",i.cursor)},stop:function(t,e,i){i=i.options;i._cursor&&V("body").css("cursor",i._cursor)}}),V.ui.plugin.add("draggable","opacity",{start:function(t,e,i){e=V(e.helper),i=i.options;e.css("opacity")&&(i._opacity=e.css("opacity")),e.css("opacity",i.opacity)},stop:function(t,e,i){i=i.options;i._opacity&&V(e.helper).css("opacity",i._opacity)}}),V.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,e,i){var s=i.options,n=!1,o=i.scrollParentNotHidden[0],a=i.document[0];o!==a&&"HTML"!==o.tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+o.offsetHeight-t.pageY<s.scrollSensitivity?o.scrollTop=n=o.scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(o.scrollTop=n=o.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+o.offsetWidth-t.pageX<s.scrollSensitivity?o.scrollLeft=n=o.scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(o.scrollLeft=n=o.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-V(a).scrollTop()<s.scrollSensitivity?n=V(a).scrollTop(V(a).scrollTop()-s.scrollSpeed):V(window).height()-(t.pageY-V(a).scrollTop())<s.scrollSensitivity&&(n=V(a).scrollTop(V(a).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-V(a).scrollLeft()<s.scrollSensitivity?n=V(a).scrollLeft(V(a).scrollLeft()-s.scrollSpeed):V(window).width()-(t.pageX-V(a).scrollLeft())<s.scrollSensitivity&&(n=V(a).scrollLeft(V(a).scrollLeft()+s.scrollSpeed)))),!1!==n&&V.ui.ddmanager&&!s.dropBehaviour&&V.ui.ddmanager.prepareOffsets(i,t)}}),V.ui.plugin.add("draggable","snap",{start:function(t,e,i){var s=i.options;i.snapElements=[],V(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var t=V(this),e=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,i){for(var s,n,o,a,r,l,h,c,u,d=i.options,p=d.snapTolerance,f=e.offset.left,g=f+i.helperProportions.width,m=e.offset.top,_=m+i.helperProportions.height,v=i.snapElements.length-1;0<=v;v--)l=(r=i.snapElements[v].left-i.margins.left)+i.snapElements[v].width,c=(h=i.snapElements[v].top-i.margins.top)+i.snapElements[v].height,g<r-p||l+p<f||_<h-p||c+p<m||!V.contains(i.snapElements[v].item.ownerDocument,i.snapElements[v].item)?(i.snapElements[v].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,V.extend(i._uiHash(),{snapItem:i.snapElements[v].item})),i.snapElements[v].snapping=!1):("inner"!==d.snapMode&&(s=Math.abs(h-_)<=p,n=Math.abs(c-m)<=p,o=Math.abs(r-g)<=p,a=Math.abs(l-f)<=p,s&&(e.position.top=i._convertPositionTo("relative",{top:h-i.helperProportions.height,left:0}).top),n&&(e.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r-i.helperProportions.width}).left),a)&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l}).left),u=s||n||o||a,"outer"!==d.snapMode&&(s=Math.abs(h-m)<=p,n=Math.abs(c-_)<=p,o=Math.abs(r-f)<=p,a=Math.abs(l-g)<=p,s&&(e.position.top=i._convertPositionTo("relative",{top:h,left:0}).top),n&&(e.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r}).left),a)&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left),!i.snapElements[v].snapping&&(s||n||o||a||u)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,V.extend(i._uiHash(),{snapItem:i.snapElements[v].item})),i.snapElements[v].snapping=s||n||o||a||u)}}),V.ui.plugin.add("draggable","stack",{start:function(t,e,i){var s,i=i.options,i=V.makeArray(V(i.stack)).sort(function(t,e){return(parseInt(V(t).css("zIndex"),10)||0)-(parseInt(V(e).css("zIndex"),10)||0)});i.length&&(s=parseInt(V(i[0]).css("zIndex"),10)||0,V(i).each(function(t){V(this).css("zIndex",s+t)}),this.css("zIndex",s+i.length))}}),V.ui.plugin.add("draggable","zIndex",{start:function(t,e,i){e=V(e.helper),i=i.options;e.css("zIndex")&&(i._zIndex=e.css("zIndex")),e.css("zIndex",i.zIndex)},stop:function(t,e,i){i=i.options;i._zIndex&&V(e.helper).css("zIndex",i._zIndex)}}),V.ui.draggable,V.widget("ui.resizable",V.ui.mouse,{version:"1.14.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(t,e){var i=!1,s=V(t).css("overflow");if("hidden"===s)return!1;if("scroll"===s)return!0;if(0<t[s=e&&"left"===e?"scrollLeft":"scrollTop"])return!0;try{t[s]=1,i=0<t[s],t[s]=0}catch(t){}return i},_create:function(){var t,e=this.options,i=this;this._addClass("ui-resizable"),V.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(V("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,t={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(t),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this._proportionallyResize()),this._setupHandles(),e.autoHide&&V(this.element).on("mouseenter",function(){e.disabled||(i._removeClass("ui-resizable-autohide"),i._handles.show())}).on("mouseleave",function(){e.disabled||i.resizing||(i._addClass("ui-resizable-autohide"),i._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy(),this._addedHandles.remove();function t(t){V(t).removeData("resizable").removeData("ui-resizable").off(".resizable")}var e;return this.elementIsWrapper&&(t(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;case"aspectRatio":this._aspectRatio=!!e}},_setupHandles:function(){var t,e,i,s,n,o=this.options,a=this;if(this.handles=o.handles||(V(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=V(),this._addedHandles=V(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),i=this.handles.split(","),this.handles={},e=0;e<i.length;e++)s="ui-resizable-"+(t=String.prototype.trim.call(i[e])),n=V("<div>"),this._addClass(n,"ui-resizable-handle "+s),n.css({zIndex:o.zIndex}),this.handles[t]=".ui-resizable-"+t,this.element.children(this.handles[t]).length||(this.element.append(n),this._addedHandles=this._addedHandles.add(n));this._renderAxis=function(t){var e,i,s;for(e in t=t||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=V(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=V(this.handles[e],this.element),s=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth(),i=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._addedHandles.remove()},_mouseCapture:function(t){var e,i,s=!1;for(e in this.handles)(i=V(this.handles[e])[0])!==t.target&&!V.contains(i,t.target)||(s=!0);return!this.options.disabled&&s},_mouseStart:function(t){var e,i,s,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),i=this._num(this.helper.css("top")),n.containment&&(e+=V(n.containment).scrollLeft()||0,i+=V(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:i},this._helper||(s=this._calculateAdjustedElementDimensions(o)),this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:s.width,height:s.height},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:s.width,height:s.height},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:i},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=V(".ui-resizable-"+this.axis).css("cursor"),V("body").css("cursor","auto"===s?this.axis+"-resize":s),this._addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var e=this.originalMousePosition,i=this.axis,s=t.pageX-e.left||0,e=t.pageY-e.top||0,i=this._change[i];return this._updatePrevProperties(),i&&(i=i.apply(this,[t,s,e]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),V.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges())),!1},_mouseStop:function(t){this.resizing=!1;var e,i,s,n=this.options,o=this;return this._helper&&(i=(e=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:o.sizeDiff.height,e=e?0:o.sizeDiff.width,e={width:o.helper.width()-e,height:o.helper.height()-i},i=parseFloat(o.element.css("left"))+(o.position.left-o.originalPosition.left)||null,s=parseFloat(o.element.css("top"))+(o.position.top-o.originalPosition.top)||null,n.animate||this.element.css(V.extend(e,{top:s,left:i})),o.helper.height(o.size.height),o.helper.width(o.size.width),this._helper)&&!n.animate&&this._proportionallyResize(),V("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.helper.css(t),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px",this.helper.width(t.width)),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px",this.helper.height(t.height)),t},_updateVirtualBoundaries:function(t){var e,i,s,n=this.options,n={minWidth:this._isNumber(n.minWidth)?n.minWidth:0,maxWidth:this._isNumber(n.maxWidth)?n.maxWidth:1/0,minHeight:this._isNumber(n.minHeight)?n.minHeight:0,maxHeight:this._isNumber(n.maxHeight)?n.maxHeight:1/0};(this._aspectRatio||t)&&(t=n.minHeight*this.aspectRatio,i=n.minWidth/this.aspectRatio,e=n.maxHeight*this.aspectRatio,s=n.maxWidth/this.aspectRatio,n.minWidth<t&&(n.minWidth=t),n.minHeight<i&&(n.minHeight=i),e<n.maxWidth&&(n.maxWidth=e),s<n.maxHeight)&&(n.maxHeight=s),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),i=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&i&&(t.top=l-e.minHeight),n&&i&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_calculateAdjustedElementDimensions:function(t){var e,i,s=t.get(0);return"content-box"!==t.css("box-sizing")||!this._hasScroll(s)&&!this._hasScroll(s,"left")?{height:parseFloat(t.css("height")),width:parseFloat(t.css("width"))}:(e=parseFloat(s.style.width),s=parseFloat(s.style.height),i=this._getPaddingPlusBorderDimensions(t),e=isNaN(e)?this._getElementTheoreticalSize(t,i,"width"):e,{height:isNaN(s)?this._getElementTheoreticalSize(t,i,"height"):s,width:e})},_getElementTheoreticalSize:function(t,e,i){return Math.max(0,Math.ceil(t.get(0)["offset"+i[0].toUpperCase()+i.slice(1)]-e[i]-.5))||0},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||V("<div></div>").css({overflow:"hidden"}),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return V.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return V.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return V.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return V.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){V.ui.plugin.call(this,t,[e,this.ui()]),"resize"!==t&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),V.ui.plugin.add("resizable","animate",{stop:function(e){var i=V(this).resizable("instance"),t=i.options,s=i._proportionallyResizeElements,n=s.length&&/textarea/i.test(s[0].nodeName),o=n&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,n=n?0:i.sizeDiff.width,n={width:i.size.width-n,height:i.size.height-o},o=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,a=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(V.extend(n,a&&o?{top:a,left:o}:{}),{duration:t.animateDuration,easing:t.animateEasing,step:function(){var t={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};s&&s.length&&V(s[0]).css({width:t.width,height:t.height}),i._updateCache(t),i._propagate("resize",e)}})}}),V.ui.plugin.add("resizable","containment",{start:function(){var i,s,t,e,n=V(this).resizable("instance"),o=n.options,a=n.element,o=o.containment,a=o instanceof V?o.get(0):/parent/.test(o)?a.parent().get(0):o;a&&(n.containerElement=V(a),/document/.test(o)||o===document?(n.containerOffset={left:0,top:0},n.containerPosition={left:0,top:0},n.parentData={element:V(document),left:0,top:0,width:V(document).width(),height:V(document).height()||document.body.parentNode.scrollHeight}):(i=V(a),s=[],V(["Top","Right","Left","Bottom"]).each(function(t,e){s[t]=n._num(i.css("padding"+e))}),n.containerOffset=i.offset(),n.containerPosition=i.position(),n.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},o=n.containerOffset,e=n.containerSize.height,t=n.containerSize.width,t=n._hasScroll(a,"left")?a.scrollWidth:t,e=n._hasScroll(a)?a.scrollHeight:e,n.parentData={element:a,left:o.left,top:o.top,width:t,height:e}))},resize:function(t){var e=V(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.position,t=e._aspectRatio||t.shiftKey,o={top:0,left:0},a=e.containerElement,r=!0;a[0]!==document&&/static/.test(a.css("position"))&&(o=s),n.left<(e._helper?s.left:0)&&(e.size.width=e.size.width+(e._helper?e.position.left-s.left:e.position.left-o.left),t&&(e.size.height=e.size.width/e.aspectRatio,r=!1),e.position.left=i.helper?s.left:0),n.top<(e._helper?s.top:0)&&(e.size.height=e.size.height+(e._helper?e.position.top-s.top:e.position.top),t&&(e.size.width=e.size.height*e.aspectRatio,r=!1),e.position.top=e._helper?s.top:0),a=e.containerElement.get(0)===e.element.parent().get(0),i=/relative|absolute/.test(e.containerElement.css("position")),a&&i?(e.offset.left=e.parentData.left+e.position.left,e.offset.top=e.parentData.top+e.position.top):(e.offset.left=e.element.offset().left,e.offset.top=e.element.offset().top),n=Math.abs(e.sizeDiff.width+(e._helper?e.offset.left-o.left:e.offset.left-s.left)),a=Math.abs(e.sizeDiff.height+(e._helper?e.offset.top-o.top:e.offset.top-s.top)),n+e.size.width>=e.parentData.width&&(e.size.width=e.parentData.width-n,t)&&(e.size.height=e.size.width/e.aspectRatio,r=!1),a+e.size.height>=e.parentData.height&&(e.size.height=e.parentData.height-a,t)&&(e.size.width=e.size.height*e.aspectRatio,r=!1),r||(e.position.left=e.prevPosition.left,e.position.top=e.prevPosition.top,e.size.width=e.prevSize.width,e.size.height=e.prevSize.height)},stop:function(){var t=V(this).resizable("instance"),e=t.options,i=t.containerOffset,s=t.containerPosition,n=t.containerElement,o=V(t.helper),a=o.offset(),r=o.outerWidth()-t.sizeDiff.width,o=o.outerHeight()-t.sizeDiff.height;t._helper&&!e.animate&&/relative/.test(n.css("position"))&&V(this).css({left:a.left-s.left-i.left,width:r,height:o}),t._helper&&!e.animate&&/static/.test(n.css("position"))&&V(this).css({left:a.left-s.left-i.left,width:r,height:o})}}),V.ui.plugin.add("resizable","alsoResize",{start:function(){var i=V(this).resizable("instance"),t=i.options;V(t.alsoResize).each(function(){var t=V(this),e=i._calculateAdjustedElementDimensions(t);t.data("ui-resizable-alsoresize",{width:e.width,height:e.height,left:parseFloat(t.css("left")),top:parseFloat(t.css("top"))})})},resize:function(t,i){var e=V(this).resizable("instance"),s=e.options,n=e.originalSize,o=e.originalPosition,a={height:e.size.height-n.height||0,width:e.size.width-n.width||0,top:e.position.top-o.top||0,left:e.position.left-o.left||0};V(s.alsoResize).each(function(){var t=V(this),s=V(this).data("ui-resizable-alsoresize"),n={},e=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];V.each(e,function(t,e){var i=(s[e]||0)+(a[e]||0);i&&0<=i&&(n[e]=i||null)}),t.css(n)})},stop:function(){V(this).removeData("ui-resizable-alsoresize")}}),V.ui.plugin.add("resizable","ghost",{start:function(){var t=V(this).resizable("instance"),e=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),t._addClass(t.ghost,"ui-resizable-ghost"),!0===V.uiBackCompat&&"string"==typeof t.options.ghost&&t.ghost.addClass(this.options.ghost),t.ghost.appendTo(t.helper)},resize:function(){var t=V(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=V(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),V.ui.plugin.add("resizable","grid",{resize:function(){var t,e=V(this).resizable("instance"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,l=r[0]||1,h=r[1]||1,c=Math.round((s.width-n.width)/l)*l,s=Math.round((s.height-n.height)/h)*h,u=n.width+c,d=n.height+s,p=i.maxWidth&&i.maxWidth<u,f=i.maxHeight&&i.maxHeight<d,g=i.minWidth&&i.minWidth>u,m=i.minHeight&&i.minHeight>d;i.grid=r,g&&(u+=l),m&&(d+=h),p&&(u-=l),f&&(d-=h),/^(se|s|e)$/.test(a)?(e.size.width=u,e.size.height=d):/^(ne)$/.test(a)?(e.size.width=u,e.size.height=d,e.position.top=o.top-s):/^(sw)$/.test(a)?(e.size.width=u,e.size.height=d,e.position.left=o.left-c):((d-h<=0||u-l<=0)&&(t=e._getPaddingPlusBorderDimensions(this)),0<d-h?(e.size.height=d,e.position.top=o.top-s):(d=h-t.height,e.size.height=d,e.position.top=o.top+n.height-d),0<u-l?(e.size.width=u,e.position.left=o.left-c):(u=l-t.width,e.size.width=u,e.position.left=o.left+n.width-u))}}),V.ui.resizable,V.widget("ui.dialog",{version:"1.14.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=V(this).css(t).offset().top;e<0&&V(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,uiDialogTitleHeadingLevel:0,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&V.fn.draggable&&this._makeDraggable(),this.options.resizable&&V.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?V(t):this.document.find(t||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:V.noop,enable:V.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||V(this.document[0].activeElement).trigger("blur"),this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",t)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+V(this).css("z-index")}).get(),s=Math.max.apply(null,s);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),i=!0),i&&!e&&this._trigger("focus",t),i},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=V(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;(t=(t=(t=(t=(t=t||this.element.find("[autofocus]")).length?t:this.element.find(":tabbable")).length?t:this.uiDialogButtonPane.find(":tabbable")).length?t:this.uiDialogTitlebarClose.filter(":tabbable")).length?t:this.uiDialog).eq(0).trigger("focus")},_restoreTabbableFocus:function(){var t=this.document[0].activeElement;this.uiDialog[0]===t||V.contains(this.uiDialog[0],t)||this._focusTabbable()},_keepFocus:function(t){t.preventDefault(),this._restoreTabbableFocus()},_createWrapper:function(){this.uiDialog=V("<div>").hide().attr({tabIndex:-1,role:"dialog","aria-modal":this.options.modal?"true":null}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){var e,i,s;this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===V.ui.keyCode.ESCAPE?(t.preventDefault(),this.close(t)):t.keyCode!==V.ui.keyCode.TAB||t.isDefaultPrevented()||(e=this.uiDialog.find(":tabbable"),i=e.first(),s=e.last(),t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==i[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){s.trigger("focus")}),t.preventDefault()):(this._delay(function(){i.trigger("focus")}),t.preventDefault()))},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){this.uiDialogTitlebar=V("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){V(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=V("<button type='button'></button>").button({label:V("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}});var t=Number.isInteger(this.options.uiDialogTitleHeadingLevel)&&0<this.options.uiDialogTitleHeadingLevel&&this.options.uiDialogTitleHeadingLevel<=6?"h"+this.options.uiDialogTitleHeadingLevel:"span",t=V("<"+t+">").uniqueId().prependTo(this.uiDialogTitlebar);this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=V("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=V("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var s=this,t=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),V.isEmptyObject(t)||Array.isArray(t)&&!t.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(V.each(t,function(t,e){var i;e=V.extend({type:"button"},e="function"==typeof e?{click:e,text:t}:e),i=e.click,t={icon:e.icon,iconPosition:e.iconPosition,showLabel:e.showLabel,icons:e.icons,text:e.text},delete e.click,delete e.icon,delete e.iconPosition,delete e.showLabel,delete e.icons,"boolean"==typeof e.text&&delete e.text,V("<button></button>",e).button(t).appendTo(s.uiButtonSet).on("click",function(){i.apply(s.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var n=this,o=this.options;function a(t){return{position:t.position,offset:t.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(t,e){n._addClass(V(this),"ui-dialog-dragging"),n._blockFrames(),n._trigger("dragStart",t,a(e))},drag:function(t,e){n._trigger("drag",t,a(e))},stop:function(t,e){var i=e.offset.left-n.document.scrollLeft(),s=e.offset.top-n.document.scrollTop();o.position={my:"left top",at:"left"+(0<=i?"+":"")+i+" top"+(0<=s?"+":"")+s,of:n.window},n._removeClass(V(this),"ui-dialog-dragging"),n._unblockFrames(),n._trigger("dragStop",t,a(e))}})},_makeResizable:function(){var n=this,o=this.options,t=o.resizable,e=this.uiDialog.css("position"),t="string"==typeof t?t:"n,e,s,w,se,sw,ne,nw";function a(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:o.maxWidth,maxHeight:o.maxHeight,minWidth:o.minWidth,minHeight:this._minHeight(),handles:t,start:function(t,e){n._addClass(V(this),"ui-dialog-resizing"),n._blockFrames(),n._trigger("resizeStart",t,a(e))},resize:function(t,e){n._trigger("resize",t,a(e))},stop:function(t,e){var i=n.uiDialog.offset(),s=i.left-n.document.scrollLeft(),i=i.top-n.document.scrollTop();o.height=n.uiDialog.height(),o.width=n.uiDialog.width(),o.position={my:"left top",at:"left"+(0<=s?"+":"")+s+" top"+(0<=i?"+":"")+i,of:n.window},n._removeClass(V(this),"ui-dialog-resizing"),n._unblockFrames(),n._trigger("resizeStop",t,a(e))}}).css("position",e)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=V(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=V.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||this.document.data("ui-dialog-instances",t=[]),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};V.each(t,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(t,e){var i,s=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:V("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((i=s.is(":data(ui-draggable)"))&&!e&&s.draggable("destroy"),!i)&&e&&this._makeDraggable(),"position"===t&&this._position(),"resizable"===t&&((i=s.is(":data(ui-resizable)"))&&!e&&s.resizable("destroy"),i&&"string"==typeof e&&s.resizable("option","handles",e),i||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")),"modal"===t)&&s.attr("aria-modal",e?"true":null)},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=V(this);return V("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!V(t.target).closest(".ui-dialog").length||!!V(t.target).closest(".ui-datepicker").length},_createOverlay:function(){var i;this.options.modal&&(i=!0,this._delay(function(){i=!1}),this.document.data("ui-dialog-overlays")||this.document.on("focusin.ui-dialog",function(t){var e;i||(e=this._trackingInstances()[0])._allowInteraction(t)||(t.preventDefault(),e._focusTabbable())}.bind(this)),this.overlay=V("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1))},_destroyOverlay:function(){var t;this.options.modal&&this.overlay&&((t=this.document.data("ui-dialog-overlays")-1)?this.document.data("ui-dialog-overlays",t):(this.document.off("focusin.ui-dialog"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null)}}),!0===V.uiBackCompat&&V.widget("ui.dialog",V.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),V.ui.dialog;function rt(t,e,i){return e<=t&&t<e+i}V.widget("ui.droppable",{version:"1.14.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept="function"==typeof i?i:function(t){return t.is(i)},this.proportions=function(){if(!arguments.length)return t=t||{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};t=arguments[0]},this._addToManager(e.scope),e.addClasses&&this._addClass("ui-droppable")},_addToManager:function(t){V.ui.ddmanager.droppables[t]=V.ui.ddmanager.droppables[t]||[],V.ui.ddmanager.droppables[t].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var t=V.ui.ddmanager.droppables[this.options.scope];this._splice(t)},_setOption:function(t,e){var i;"accept"===t?this.accept="function"==typeof e?e:function(t){return t.is(e)}:"scope"===t&&(i=V.ui.ddmanager.droppables[this.options.scope],this._splice(i),this._addToManager(e)),this._super(t,e)},_activate:function(t){var e=V.ui.ddmanager.current;this._addActiveClass(),e&&this._trigger("activate",t,this.ui(e))},_deactivate:function(t){var e=V.ui.ddmanager.current;this._removeActiveClass(),e&&this._trigger("deactivate",t,this.ui(e))},_over:function(t){var e=V.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this._addHoverClass(),this._trigger("over",t,this.ui(e)))},_out:function(t){var e=V.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this._removeHoverClass(),this._trigger("out",t,this.ui(e)))},_drop:function(e,t){var i=t||V.ui.ddmanager.current,s=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0]||(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=V(this).droppable("instance");if(t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&V.ui.intersect(i,V.extend(t,{offset:t.element.offset()}),t.options.tolerance,e))return!(s=!0)}),s)||!this.accept.call(this.element[0],i.currentItem||i.element))&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(i)),this.element)},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}}),V.ui.intersect=function(t,e,i,s){if(!e.offset)return!1;var n=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,a=n+t.helperProportions.width,r=o+t.helperProportions.height,l=e.offset.left,h=e.offset.top,c=l+e.proportions().width,u=h+e.proportions().height;switch(i){case"fit":return l<=n&&a<=c&&h<=o&&r<=u;case"intersect":return l<n+t.helperProportions.width/2&&a-t.helperProportions.width/2<c&&h<o+t.helperProportions.height/2&&r-t.helperProportions.height/2<u;case"pointer":return rt(s.pageY,h,e.proportions().height)&&rt(s.pageX,l,e.proportions().width);case"touch":return(h<=o&&o<=u||h<=r&&r<=u||o<h&&u<r)&&(l<=n&&n<=c||l<=a&&a<=c||n<l&&c<a);default:return!1}},V.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,e){var i,s,n=V.ui.ddmanager.droppables[t.options.scope]||[],o=e?e.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();t:for(i=0;i<n.length;i++)if(!(n[i].options.disabled||t&&!n[i].accept.call(n[i].element[0],t.currentItem||t.element))){for(s=0;s<a.length;s++)if(a[s]===n[i].element[0]){n[i].proportions().height=0;continue t}n[i].visible="none"!==n[i].element.css("display"),n[i].visible&&("mousedown"===o&&n[i]._activate.call(n[i],e),n[i].offset=n[i].element.offset(),n[i].proportions({width:n[i].element[0].offsetWidth,height:n[i].element[0].offsetHeight}))}},drop:function(t,e){var i=!1;return V.each((V.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&V.ui.intersect(t,this,this.options.tolerance,e)&&(i=this._drop.call(this,e)||i),!this.options.disabled)&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,e))}),i},dragStart:function(t,e){t.element.parentsUntil("body").on("scroll.droppable",function(){t.options.refreshPositions||V.ui.ddmanager.prepareOffsets(t,e)})},drag:function(n,o){n.options.refreshPositions&&V.ui.ddmanager.prepareOffsets(n,o),V.each(V.ui.ddmanager.droppables[n.options.scope]||[],function(){var t,e,i,s;this.options.disabled||this.greedyChild||!this.visible||(s=!(s=V.ui.intersect(n,this,this.options.tolerance,o))&&this.isover?"isout":s&&!this.isover?"isover":null)&&(this.options.greedy&&(e=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return V(this).droppable("instance").options.scope===e})).length)&&((t=V(i[0]).droppable("instance")).greedyChild="isover"===s),t&&"isover"===s&&(t.isover=!1,t.isout=!0,t._out.call(t,o)),this[s]=!0,this["isout"===s?"isover":"isout"]=!1,this["isover"===s?"_over":"_out"].call(this,o),t)&&"isout"===s&&(t.isout=!1,t.isover=!0,t._over.call(t,o))})},dragStop:function(t,e){t.element.parentsUntil("body").off("scroll.droppable"),t.options.refreshPositions||V.ui.ddmanager.prepareOffsets(t,e)}},!0===V.uiBackCompat&&V.widget("ui.droppable",V.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}});V.ui.droppable,V.widget("ui.progressbar",{version:"1.14.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=V("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){if(void 0===t)return this.options.value;this.options.value=this._constrainedValue(t),this._refreshValue()},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,e=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).width(e.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,t===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=V("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),V.widget("ui.selectable",V.ui.mouse,{version:"1.14.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var i=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){i.elementPos=V(i.element[0]).offset(),i.selectees=V(i.options.filter,i.element[0]),i._addClass(i.selectees,"ui-selectee"),i.selectees.each(function(){var t=V(this),e=t.offset(),e={left:e.left-i.elementPos.left,top:e.top-i.elementPos.top};V.data(this,"selectable-item",{element:this,$element:t,left:e.left,top:e.top,right:e.left+t.outerWidth(),bottom:e.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=V("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(i){var s=this,t=this.options;this.opos=[i.pageX,i.pageY],this.elementPos=V(this.element[0]).offset(),this.options.disabled||(this.selectees=V(t.filter,this.element[0]),this._trigger("start",i),V(t.appendTo).append(this.helper),this.helper.css({left:i.pageX,top:i.pageY,width:0,height:0}),t.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var t=V.data(this,"selectable-item");t.startselected=!0,i.metaKey||i.ctrlKey||(s._removeClass(t.$element,"ui-selected"),t.selected=!1,s._addClass(t.$element,"ui-unselecting"),t.unselecting=!0,s._trigger("unselecting",i,{unselecting:t.element}))}),V(i.target).parents().addBack().each(function(){var t,e=V.data(this,"selectable-item");if(e)return t=!i.metaKey&&!i.ctrlKey||!e.$element.hasClass("ui-selected"),s._removeClass(e.$element,t?"ui-unselecting":"ui-selected")._addClass(e.$element,t?"ui-selecting":"ui-unselecting"),e.unselecting=!t,e.selecting=t,(e.selected=t)?s._trigger("selecting",i,{selecting:e.element}):s._trigger("unselecting",i,{unselecting:e.element}),!1}))},_mouseDrag:function(s){var t,n,o,a,r,l,h;if(this.dragged=!0,!this.options.disabled)return o=(n=this).options,a=this.opos[0],r=this.opos[1],(l=s.pageX)<a&&(t=l,l=a,a=t),(h=s.pageY)<r&&(t=h,h=r,r=t),this.helper.css({left:a,top:r,width:l-a,height:h-r}),this.selectees.each(function(){var t=V.data(this,"selectable-item"),e=!1,i={};t&&t.element!==n.element[0]&&(i.left=t.left+n.elementPos.left,i.right=t.right+n.elementPos.left,i.top=t.top+n.elementPos.top,i.bottom=t.bottom+n.elementPos.top,"touch"===o.tolerance?e=!(l<i.left||i.right<a||h<i.top||i.bottom<r):"fit"===o.tolerance&&(e=a<i.left&&i.right<l&&r<i.top&&i.bottom<h),e?(t.selected&&(n._removeClass(t.$element,"ui-selected"),t.selected=!1),t.unselecting&&(n._removeClass(t.$element,"ui-unselecting"),t.unselecting=!1),t.selecting||(n._addClass(t.$element,"ui-selecting"),t.selecting=!0,n._trigger("selecting",s,{selecting:t.element}))):(t.selecting&&((s.metaKey||s.ctrlKey)&&t.startselected?(n._removeClass(t.$element,"ui-selecting"),t.selecting=!1,n._addClass(t.$element,"ui-selected"),t.selected=!0):(n._removeClass(t.$element,"ui-selecting"),t.selecting=!1,t.startselected&&(n._addClass(t.$element,"ui-unselecting"),t.unselecting=!0),n._trigger("unselecting",s,{unselecting:t.element}))),!t.selected||s.metaKey||s.ctrlKey||t.startselected||(n._removeClass(t.$element,"ui-selected"),t.selected=!1,n._addClass(t.$element,"ui-unselecting"),t.unselecting=!0,n._trigger("unselecting",s,{unselecting:t.element}))))}),!1},_mouseStop:function(e){var i=this;return this.dragged=!1,V(".ui-unselecting",this.element[0]).each(function(){var t=V.data(this,"selectable-item");i._removeClass(t.$element,"ui-unselecting"),t.unselecting=!1,t.startselected=!1,i._trigger("unselected",e,{unselected:t.element})}),V(".ui-selecting",this.element[0]).each(function(){var t=V.data(this,"selectable-item");i._removeClass(t.$element,"ui-selecting")._addClass(t.$element,"ui-selected"),t.selecting=!1,t.selected=!0,t.startselected=!0,i._trigger("selected",e,{selected:t.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),V.widget("ui.selectmenu",[V.ui.formResetMixin,{version:"1.14.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=V()},_drawButton:function(){var t,e=this,i=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.trigger("focus"),t.preventDefault()}}),this.element.hide(),this.button=V("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),t=V("<span>").appendTo(this.button),this._addClass(t,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(i).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){e._rendered||e._refreshMenu()})},_drawMenu:function(){var i=this;this.menu=V("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=V("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,e){t.preventDefault(),i._select(e.item.data("ui-selectmenu-item"),t)},focus:function(t,e){e=e.item.data("ui-selectmenu-item");null!=i.focusIndex&&e.index!==i.focusIndex&&(i._trigger("focus",t,{item:e}),i.isOpen||i._select(e,t)),i.focusIndex=e.index,i.button.attr("aria-activedescendant",i.menuItems.eq(e.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t=this.element.find("option");this.menu.empty(),this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,t.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(V.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(t){var e=V("<span>");return this._setText(e,t.label),this._addClass(e,"ui-selectmenu-text"),e},_renderMenu:function(s,t){var n=this,o="";V.each(t,function(t,e){var i;e.optgroup!==o&&(i=V("<li>",{text:e.optgroup}),n._addClass(i,"ui-selectmenu-optgroup","ui-menu-divider"+(e.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),i.appendTo(s),o=e.optgroup),n._renderItemData(s,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(t,e){var i=V("<li>"),s=V("<div>",{title:e.element.attr("title")});return e.disabled&&this._addClass(i,null,"ui-state-disabled"),e.hidden?i.prop("hidden",!0):this._setText(s,e.label),i.append(s).appendTo(t)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),(i="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,i)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&((t=window.getSelection()).removeAllRanges(),t.addRange(this.range))},_documentClick:{mousedown:function(t){!this.isOpen||V(t.target).closest(".ui-selectmenu-menu, #"+CSS.escape(this.ids.button)).length||this.close(t)}},_buttonEvents:{mousedown:function(){var t=window.getSelection();t.rangeCount&&(this.range=t.getRangeAt(0))},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(t){var e=!0;switch(t.keyCode){case V.ui.keyCode.TAB:case V.ui.keyCode.ESCAPE:this.close(t),e=!1;break;case V.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case V.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case V.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case V.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case V.ui.keyCode.LEFT:this._move("prev",t);break;case V.ui.keyCode.RIGHT:this._move("next",t);break;case V.ui.keyCode.HOME:case V.ui.keyCode.PAGE_UP:this._move("first",t);break;case V.ui.keyCode.END:case V.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),e=!1}e&&t.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){t=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(t,e){var i;"icons"===t&&(i=this.button.find("span.ui-icon"),this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)),this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var t=this.options.appendTo;return t=(t=(t=t&&(t.jquery||t.nodeType?V(t):this.document.find(t).eq(0)))&&t[0]?t:this.element.closest(".ui-front, dialog")).length?t:this.document[0].body},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;!1===t?this.button.css("width",""):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(t){var i=this,s=[];t.each(function(t,e){s.push(i._parseOption(V(e),t))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),hidden:i.prop("hidden")||t.prop("hidden"),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),V.widget("ui.slider",V.ui.mouse,{version:"1.14.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,e=this.options,i=this.element.find(".ui-slider-handle"),s=[],n=e.values&&e.values.length||1;for(i.length>n&&(i.slice(n).remove(),i=i.slice(0,n)),t=i.length;t<n;t++)s.push("<span tabindex='0'></span>");this.handles=i.add(V(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(t){V(this).data("ui-slider-handle-index",t).attr("tabIndex",0)})},_createRange:function(){var t=this.options;t.range?(!0===t.range&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:Array.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=V("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==t.range&&"max"!==t.range||this._addClass(this.range,"ui-slider-range-"+t.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,o,e,a,r=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(i-r.values(t));(e<s||s===e&&(t===r._lastChangedValue||r.values(t)===l.min))&&(s=e,n=V(this),o=t)}),!1!==this._start(t,o))&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(n,null,"ui-state-active"),n.trigger("focus"),e=n.offset(),a=!V(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=a?{left:0,top:0}:{left:t.pageX-e.left-n.width()/2,top:t.pageY-e.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,i),this._animateOff=!0)},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},e=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,e),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,t="horizontal"===this.orientation?(e=this.elementSize.width,t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),t=t/e;return(t=1<t?1:t)<0&&(t=0),"vertical"===this.orientation&&(t=1-t),e=this._valueMax()-this._valueMin(),t=this._valueMin()+t*e,this._trimAlignValue(t)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n=this.value(),o=this.values();this._hasMultipleValues()&&(s=this.values(e?0:1),n=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(s,i):Math.max(s,i)),o[e]=i),i!==n&&!1!==this._trigger("slide",t,this._uiHash(e,i,o))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){if(!arguments.length)return this._value();this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0)},values:function(t,e){var i,s,n;if(1<arguments.length)this.options.values[t]=this._trimAlignValue(e),this._refreshValue(),this._change(null,t);else{if(!arguments.length)return this._values();if(!Array.isArray(t))return this._hasMultipleValues()?this._values(t):this.value();for(i=this.options.values,s=t,n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()}},_setOption:function(t,e){var i,s=0;switch("range"===t&&!0===this.options.range&&("min"===e?(this.options.value=this._values(0),this.options.values=null):"max"===e&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),Array.isArray(this.options.values)&&(s=this.options.values.length),this._super(t,e),t){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(e),this.handles.css("horizontal"===e?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=s-1;0<=i;i--)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return this._trimAlignValue(t)},_values:function(t){var e,i;if(arguments.length)return t=this.options.values[t],this._trimAlignValue(t);if(this._hasMultipleValues()){for(e=this.options.values.slice(),i=0;i<e.length;i+=1)e[i]=this._trimAlignValue(e[i]);return e}return[]},_trimAlignValue:function(t){var e,i;return t<=this._valueMin()?this._valueMin():t>=this._valueMax()?this._valueMax():(e=0<this.options.step?this.options.step:1,i=t-(t=(t-this._valueMin())%e),2*Math.abs(t)>=e&&(i+=0<t?e:-e),parseFloat(i.toFixed(5)))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;(t=Math.round((t-e)/i)*i+e)>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return t=null!==this.options.min?Math.max(t,this._precisionOf(this.options.min)):t},_precisionOf:function(t){var t=t.toString(),e=t.indexOf(".");return-1===e?0:t.length-e-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,t,s,n,o=this.options.range,a=this.options,r=this,l=!this._animateOff&&a.animate,h={};this._hasMultipleValues()?this.handles.each(function(t){i=(r.values(t)-r._valueMin())/(r._valueMax()-r._valueMin())*100,h["horizontal"===r.orientation?"left":"bottom"]=i+"%",V(this).stop(1,1)[l?"animate":"css"](h,a.animate),!0===r.options.range&&("horizontal"===r.orientation?(0===t&&r.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},a.animate),1===t&&r.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===t&&r.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},a.animate),1===t&&r.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(t=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(t-s)/(n-s)*100:0,h["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](h,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},a.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(t){var e,i,s,n=V(t.target).data("ui-slider-handle-index");switch(t.keyCode){case V.ui.keyCode.HOME:case V.ui.keyCode.END:case V.ui.keyCode.PAGE_UP:case V.ui.keyCode.PAGE_DOWN:case V.ui.keyCode.UP:case V.ui.keyCode.RIGHT:case V.ui.keyCode.DOWN:case V.ui.keyCode.LEFT:if(t.preventDefault(),this._keySliding||(this._keySliding=!0,this._addClass(V(t.target),null,"ui-state-active"),!1!==this._start(t,n)))break;return}switch(s=this.options.step,e=i=this._hasMultipleValues()?this.values(n):this.value(),t.keyCode){case V.ui.keyCode.HOME:i=this._valueMin();break;case V.ui.keyCode.END:i=this._valueMax();break;case V.ui.keyCode.PAGE_UP:i=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/this.numPages);break;case V.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/this.numPages);break;case V.ui.keyCode.UP:case V.ui.keyCode.RIGHT:if(e===this._valueMax())return;i=this._trimAlignValue(e+s);break;case V.ui.keyCode.DOWN:case V.ui.keyCode.LEFT:if(e===this._valueMin())return;i=this._trimAlignValue(e-s)}this._slide(t,n,i)},keyup:function(t){var e=V(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,e),this._change(t,e),this._removeClass(V(t.target),null,"ui-state-active"))}}}),V.widget("ui.sortable",V.ui.mouse,{version:"1.14.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return e<=t&&t<e+i},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var t=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),V.each(this.items,function(){t._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;0<=t;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,e){var i=null,s=!1,n=this;return!(this.reverting||this.options.disabled||"static"===this.options.type||(this._refreshItems(t),V(t.target).parents().each(function(){if(V.data(this,n.widgetName+"-item")===n)return i=V(this),!1}),!(i=V.data(t.target,n.widgetName+"-item")===n?V(t.target):i))||(this.options.handle&&!e&&(V(this.options.handle,i).find("*").addBack().each(function(){this===t.target&&(s=!0)}),!s)||(this.currentItem=i,this._removeCurrentsFromItems(),0)))},_mouseStart:function(t,e,i){var s,n,o=this.options;if((this.currentContainer=this).refreshPositions(),this.appendTo=V("parent"!==o.appendTo?o.appendTo:this.currentItem.parent()),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},V.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),this.scrollParent=this.placeholder.scrollParent(),V.extend(this.offset,{parent:this._getParentOffset()}),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(n=this.document.find("body"),this._storedStylesheet=V("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(n)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!i)for(s=this.containers.length-1;0<=s;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return V.ui.ddmanager&&(V.ui.ddmanager.current=this),V.ui.ddmanager&&!o.dropBehaviour&&V.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this.helper.parent().is(this.appendTo)||(this.helper.detach().appendTo(this.appendTo),this.offset.parent=this._getParentOffset()),this.position=this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,this.lastPositionAbs=this.positionAbs=this._convertPositionTo("absolute"),this._mouseDrag(t),!0},_scroll:function(t){var e=this.options,i=!1;return this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<e.scrollSensitivity?this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop+e.scrollSpeed:t.pageY-this.overflowOffset.top<e.scrollSensitivity&&(this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop-e.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<e.scrollSensitivity?this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft+e.scrollSpeed:t.pageX-this.overflowOffset.left<e.scrollSensitivity&&(this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft-e.scrollSpeed)):(t.pageY-this.document.scrollTop()<e.scrollSensitivity?i=this.document.scrollTop(this.document.scrollTop()-e.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<e.scrollSensitivity&&(i=this.document.scrollTop(this.document.scrollTop()+e.scrollSpeed)),t.pageX-this.document.scrollLeft()<e.scrollSensitivity?i=this.document.scrollLeft(this.document.scrollLeft()-e.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<e.scrollSensitivity&&(i=this.document.scrollLeft(this.document.scrollLeft()+e.scrollSpeed))),i},_mouseDrag:function(t){var e,i,s,n,o=this.options;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),o.scroll&&!1!==this._scroll(t)&&(this._refreshItemPositions(!0),V.ui.ddmanager)&&!o.dropBehaviour&&V.ui.ddmanager.prepareOffsets(this,t),this.dragDirection={vertical:this._getDragVerticalDirection(),horizontal:this._getDragHorizontalDirection()},e=this.items.length-1;0<=e;e--)if(s=(i=this.items[e]).item[0],(n=this._intersectsWithPointer(i))&&i.instance===this.currentContainer&&!(s===this.currentItem[0]||this.placeholder[1===n?"next":"prev"]()[0]===s||V.contains(this.placeholder[0],s)||"semi-dynamic"===this.options.type&&V.contains(this.element[0],s))){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(i))break;this._rearrange(t,i),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),V.ui.ddmanager&&V.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,e){var i,s,n,o;if(t)return V.ui.ddmanager&&!this.options.dropBehaviour&&V.ui.ddmanager.drop(this,t),this.options.revert?(s=(i=this).placeholder.offset(),o={},(n=this.options.axis)&&"x"!==n||(o.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(o.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,V(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){i._clear(t)})):this._clear(t,e),!1},cancel:function(){if(this.dragging){this._mouseUp(new V.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var t=this.containers.length-1;0<=t;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),V.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?V(this.domPosition.prev).after(this.currentItem):V(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var t=this._getItemsAsjQuery(e&&e.connected),i=[];return e=e||{},V(t).each(function(){var t=(V(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);t&&i.push((e.key||t[1]+"[]")+"="+(e.key&&e.expression?t[1]:t[2]))}),!i.length&&e.key&&i.push(e.key+"="),i.join("&")},toArray:function(t){var e=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},e.each(function(){i.push(V(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,h="x"===this.options.axis||r<s+h&&s+h<l,c="y"===this.options.axis||o<e+c&&e+c<a;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?h&&c:o<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<a&&r<s+this.helperProportions.height/2&&n-this.helperProportions.height/2<l},_intersectsWithPointer:function(t){var e="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),t="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width);return!(!e||!t)&&(e=this.dragDirection.vertical,t=this.dragDirection.horizontal,this.floating?"right"===t||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),t=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this.dragDirection.vertical,s=this.dragDirection.horizontal;return this.floating&&s?"right"===s&&t||"left"===s&&!t:i&&("down"===i&&e||"up"===i&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!=t&&(0<t?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!=t&&(0<t?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(t){var e,i,s,n,o=[],a=[],r=this._connectWith();if(r&&t)for(e=r.length-1;0<=e;e--)for(i=(s=V(r[e],this.document[0])).length-1;0<=i;i--)(n=V.data(s[i],this.widgetFullName))&&n!==this&&!n.options.disabled&&a.push(["function"==typeof n.options.items?n.options.items.call(n.element):V(n.options.items,n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),n]);function l(){o.push(this)}for(a.push(["function"==typeof this.options.items?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):V(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),e=a.length-1;0<=e;e--)a[e][0].each(l);return V(o)},_removeCurrentsFromItems:function(){var i=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=V.grep(this.items,function(t){for(var e=0;e<i.length;e++)if(i[e]===t.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var e,i,s,n,o,a,r,l,h=this.items,c=[["function"==typeof this.options.items?this.options.items.call(this.element[0],t,{item:this.currentItem}):V(this.options.items,this.element),this]],u=this._connectWith();if(u&&this.ready)for(e=u.length-1;0<=e;e--)for(i=(s=V(u[e],this.document[0])).length-1;0<=i;i--)(n=V.data(s[i],this.widgetFullName))&&n!==this&&!n.options.disabled&&(c.push(["function"==typeof n.options.items?n.options.items.call(n.element[0],t,{item:this.currentItem}):V(n.options.items,n.element),n]),this.containers.push(n));for(e=c.length-1;0<=e;e--)for(o=c[e][1],l=(a=c[e][i=0]).length;i<l;i++)(r=V(a[i])).data(this.widgetName+"-item",o),h.push({item:r,instance:o,width:0,height:0,left:0,top:0})},_refreshItemPositions:function(t){for(var e,i,s=this.items.length-1;0<=s;s--)e=this.items[s],this.currentContainer&&e.instance!==this.currentContainer&&e.item[0]!==this.currentItem[0]||(i=this.options.toleranceElement?V(this.options.toleranceElement,e.item):e.item,t||(e.width=i.outerWidth(),e.height=i.outerHeight()),i=i.offset(),e.left=i.left,e.top=i.top)},refreshPositions:function(t){var e,i;if(this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),this._refreshItemPositions(t),this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=this.containers.length-1;0<=e;e--)i=this.containers[e].element.offset(),this.containers[e].containerCache.left=i.left,this.containers[e].containerCache.top=i.top,this.containers[e].containerCache.width=this.containers[e].element.outerWidth(),this.containers[e].containerCache.height=this.containers[e].element.outerHeight();return this},_createPlaceholder:function(i){var s,n,o=(i=i||this).options;o.placeholder&&o.placeholder.constructor!==String||(s=o.placeholder,n=i.currentItem[0].nodeName.toLowerCase(),o.placeholder={element:function(){var t=V("<"+n+">",i.document[0]);return i._addClass(t,"ui-sortable-placeholder",s||i.currentItem[0].className)._removeClass(t,"ui-sortable-helper"),"tbody"===n?i._createTrPlaceholder(i.currentItem.find("tr").eq(0),V("<tr>",i.document[0]).appendTo(t)):"tr"===n?i._createTrPlaceholder(i.currentItem,t):"img"===n&&t.attr("src",i.currentItem.attr("src")),s||t.css("visibility","hidden"),t},update:function(t,e){s&&!o.forcePlaceholderSize||(e.height()&&(!o.forcePlaceholderSize||"tbody"!==n&&"tr"!==n)||e.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),e.width())||e.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10))}}),i.placeholder=V(o.placeholder.element.call(i.element,i.currentItem)),i.currentItem.after(i.placeholder),o.placeholder.update(i,i.placeholder)},_createTrPlaceholder:function(t,e){var i=this;t.children().each(function(){V("<td>&#160;</td>",i.document[0]).attr("colspan",V(this).attr("colspan")||1).appendTo(e)})},_contactContainers:function(t){for(var e,i,s,n,o,a,r,l,h,c=null,u=null,d=this.containers.length-1;0<=d;d--)V.contains(this.currentItem[0],this.containers[d].element[0])||(this._intersectsWith(this.containers[d].containerCache)?c&&V.contains(this.containers[d].element[0],c.element[0])||(c=this.containers[d],u=d):this.containers[d].containerCache.over&&(this.containers[d]._trigger("out",t,this._uiHash(this)),this.containers[d].containerCache.over=0));if(c)if(1===this.containers.length)this.containers[u].containerCache.over||(this.containers[u]._trigger("over",t,this._uiHash(this)),this.containers[u].containerCache.over=1);else{for(i=1e4,s=null,n=(l=c.floating||this._isFloating(this.currentItem))?"left":"top",o=l?"width":"height",h=l?"pageX":"pageY",e=this.items.length-1;0<=e;e--)V.contains(this.containers[u].element[0],this.items[e].item[0])&&this.items[e].item[0]!==this.currentItem[0]&&(a=this.items[e].item.offset()[n],r=!1,t[h]-a>this.items[e][o]/2&&(r=!0),Math.abs(t[h]-a)<i)&&(i=Math.abs(t[h]-a),s=this.items[e],this.direction=r?"up":"down");(s||this.options.dropOnEmpty)&&(this.currentContainer===this.containers[u]?this.currentContainer.containerCache.over||(this.containers[u]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1):(s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[u].element,!0),this._trigger("change",t,this._uiHash()),this.containers[u]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[u],this.options.placeholder.update(this.currentContainer,this.placeholder),this.scrollParent=this.placeholder.scrollParent(),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this.containers[u]._trigger("over",t,this._uiHash(this)),this.containers[u].containerCache.over=1))}},_createHelper:function(t){var e=this.options,t="function"==typeof e.helper?V(e.helper.apply(this.element[0],[t,this.currentItem])):"clone"===e.helper?this.currentItem.clone():this.currentItem;return t.parents("body").length||this.appendTo[0].appendChild(t[0]),t[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),t[0].style.width&&!e.forceHelperSize||t.width(this.currentItem.width()),t[0].style.height&&!e.forceHelperSize||t.height(this.currentItem.height()),t},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),"left"in(t=Array.isArray(t)?{left:+t[0],top:+t[1]||0}:t)&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&V.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),{top:(t=this.offsetParent[0]===this.document[0].body?{top:0,left:0}:t).top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){var t;return"relative"===this.cssPosition?{top:(t=this.currentItem.position()).top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}:{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i=this.options;"parent"===i.containment&&(i.containment=this.helper[0].parentNode),"document"!==i.containment&&"window"!==i.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===i.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===i.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(i.containment)||(t=V(i.containment)[0],i=V(i.containment).offset(),e="hidden"!==V(t).css("overflow"),this.containment=[i.left+(parseInt(V(t).css("borderLeftWidth"),10)||0)+(parseInt(V(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(V(t).css("borderTopWidth"),10)||0)+(parseInt(V(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(e?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(V(t).css("borderLeftWidth"),10)||0)-(parseInt(V(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(e?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(V(t).css("borderTopWidth"),10)||0)-(parseInt(V(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,e){e=e||this.position;var t="absolute"===t?1:-1,i="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&V.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:e.top+this.offset.relative.top*t+this.offset.parent.top*t-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():s?0:i.scrollTop())*t,left:e.left+this.offset.relative.left*t+this.offset.parent.left*t-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*t}},_generatePosition:function(t){var e=this.options,i=t.pageX,s=t.pageY,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&V.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(i=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(s=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(i=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3])&&(s=this.containment[3]+this.offset.click.top),e.grid)&&(t=this.originalPageY+Math.round((s-this.originalPageY)/e.grid[1])*e.grid[1],s=!this.containment||t-this.offset.click.top>=this.containment[1]&&t-this.offset.click.top<=this.containment[3]?t:t-this.offset.click.top>=this.containment[1]?t-e.grid[1]:t+e.grid[1],t=this.originalPageX+Math.round((i-this.originalPageX)/e.grid[0])*e.grid[0],i=!this.containment||t-this.offset.click.left>=this.containment[0]&&t-this.offset.click.left<=this.containment[2]?t:t-this.offset.click.left>=this.containment[0]?t-e.grid[0]:t+e.grid[0]),{top:s-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop()),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)"auto"!==this._storedCSS[i]&&"static"!==this._storedCSS[i]||(this._storedCSS[i]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();function n(e,i,s){return function(t){s._trigger(e,t,i._uiHash(i))}}for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this===this.currentContainer||e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))),i=this.containers.length-1;0<=i;i--)e||s.push(n("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(n("out",this,this.containers[i])),this.containers[i].containerCache.over=0);if(this._storedStylesheet&&(this._storedStylesheet.remove(),this._storedStylesheet=null),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(i=0;i<s.length;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===V.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(t){var e=t||this;return{helper:e.helper,placeholder:e.placeholder||V([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:t?t.element:null}}});function O(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}V.widget("ui.spinner",{version:"1.14.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var s=this._super(),n=this.element;return V.each(["min","max","step"],function(t,e){var i=n.attr(e);null!=i&&i.length&&(s[e]=i)}),s},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t)},mousewheel:function(t,e){var i=this.document[0].activeElement;if(this.element[0]===i&&e){if(!this.spinning&&!this._start(t))return!1;this._spin((0<e?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(t){var e;e=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),function(){this.element[0]!==this.document[0].activeElement&&(this.element.trigger("focus"),this.previous=e)}.call(this),!1!==this._start(t)&&this._repeat(null,V(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(V(t.currentTarget).hasClass("ui-state-active"))return!1!==this._start(t)&&void this._repeat(null,V(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&0<this.uiSpinner.height()&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(t){var e=this.options,i=V.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,e.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-e.page,t),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(t){var e=this.options.incremental;return e?"function"==typeof e?e(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return t=null!==this.options.min?Math.max(t,this._precisionOf(this.options.min)):t},_precisionOf:function(t){var t=t.toString(),e=t.indexOf(".");return-1===e?0:t.length-e-1},_adjustValue:function(t){var e=this.options,i=null!==e.min?e.min:0,s=t-i;return t=i+Math.round(s/e.step)*e.step,t=parseFloat(t.toFixed(this._precision())),null!==e.max&&t>e.max?e.max:null!==e.min&&t<e.min?e.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i;"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i))):("max"!==t&&"min"!==t&&"step"!==t||"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(i=this.buttons.first().find(".ui-icon"),this._removeClass(i,null,this.options.icons.up),this._addClass(i,null,e.up),i=this.buttons.last().find(".ui-icon"),this._removeClass(i,null,this.options.icons.down),this._addClass(i,null,e.down)),this._super(t,e))},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:O(function(t){this._super(t)}),_parse:function(t){return""===(t="string"==typeof t&&""!==t?window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t:t)||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:O(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:O(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:O(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:O(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){if(!arguments.length)return this._parse(this.element.val());O(this._value).call(this,t)},widget:function(){return this.uiSpinner}}),!0===V.uiBackCompat&&V.widget("ui.spinner",V.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}});var A;V.ui.spinner,V.widget("ui.tabs",{version:"1.14.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(A=/#.*$/,function(t){var e=t.href.replace(A,""),i=location.href.replace(A,"");try{e=decodeURIComponent(e)}catch(t){}try{i=decodeURIComponent(i)}catch(t){}return 1<t.hash.length&&e===i}),_create:function(){var e=this,t=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,t.collapsible),this._processTabs(),t.active=this._initialActive(),Array.isArray(t.disabled)&&(t.disabled=V.uniqueSort(t.disabled.concat(V.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(t.active):this.active=V(),this._refresh(),this.active.length&&this.load(t.active)},_initialActive:function(){var i=this.options.active,t=this.options.collapsible,s=decodeURIComponent(location.hash.substring(1));return null===i&&(s&&this.tabs.each(function(t,e){if(V(e).attr("aria-controls")===s)return i=t,!1}),null!==(i=null===i?this.tabs.index(this.tabs.filter(".ui-tabs-active")):i)&&-1!==i||(i=!!this.tabs.length&&0)),!1!==i&&-1===(i=this.tabs.index(this.tabs.eq(i)))&&(i=!t&&0),i=!t&&!1===i&&this.anchors.length?0:i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):V()}},_tabKeydown:function(t){var e=V(this.document[0].activeElement).closest("li"),i=this.tabs.index(e),s=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case V.ui.keyCode.RIGHT:case V.ui.keyCode.DOWN:i++;break;case V.ui.keyCode.UP:case V.ui.keyCode.LEFT:s=!1,i--;break;case V.ui.keyCode.END:i=this.anchors.length-1;break;case V.ui.keyCode.HOME:i=0;break;case V.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i);case V.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i!==this.options.active&&i);default:return}t.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,s),t.ctrlKey||t.metaKey||(e.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===V.ui.keyCode.UP&&(t.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(t){return t.altKey&&t.keyCode===V.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===V.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,e){var i=this.tabs.length-1;for(;-1!==V.inArray(t=(t=i<t?0:t)<0?i:t,this.options.disabled);)t=e?t+1:t-1;return t},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){"active"===t?this._activate(e):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e))},refresh:function(){var t=this.options,e=this.tablist.children(":has(a[href])");t.disabled=V.map(e.filter(".ui-state-disabled"),function(t){return e.index(t)}),this._processTabs(),!1!==t.active&&this.anchors.length?this.active.length&&!V.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=V()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=V()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var r=this,t=this.tabs,e=this.anchors,i=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(t){V(this).is(".ui-state-disabled")&&t.preventDefault()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return V("a",this)[0]}).attr({tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=V(),this.anchors.each(function(t,e){var i,s,n=V(e).uniqueId().attr("id"),o=V(e).closest("li"),a=o.attr("aria-controls");r._isLocal(e)?(s=decodeURIComponent(e.hash).substring(1),i=r.element.find("#"+CSS.escape(s))):(s=o.attr("aria-controls")||V({}).uniqueId()[0].id,(i=r.element.find("#"+s)).length||(i=r._createPanel(s)).insertAfter(r.panels[t-1]||r.tablist),i.attr("aria-live","polite")),i.length&&(r.panels=r.panels.add(i)),a&&o.data("ui-tabs-aria-controls",a),o.attr({"aria-controls":s,"aria-labelledby":n}),i.attr("aria-labelledby",n)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),t&&(this._off(t.not(this.tabs)),this._off(e.not(this.anchors)),this._off(i.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(t){return V("<div>").attr("id",t).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(t){var e,i;for(Array.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1),i=0;e=this.tabs[i];i++)e=V(e),!0===t||-1!==V.inArray(i,t)?(e.attr("aria-disabled","true"),this._addClass(e,null,"ui-state-disabled")):(e.removeAttr("aria-disabled"),this._removeClass(e,null,"ui-state-disabled"));this.options.disabled=t,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===t)},_setupEvents:function(t){var i={};t&&V.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,e=this.element.parent();"fill"===t?(i=e.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=V(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=V(this).outerHeight(!0)}),this.panels.each(function(){V(this).height(Math.max(0,i-V(this).innerHeight()+V(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,V(this).height("").height())}).height(i))},_eventHandler:function(t){var e=this.options,i=this.active,s=V(t.currentTarget).closest("li"),n=s[0]===i[0],o=n&&e.collapsible,a=o?V():this._getPanelForTab(s),r=i.length?this._getPanelForTab(i):V(),i={oldTab:i,oldPanel:r,newTab:o?V():s,newPanel:a};t.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||n&&!e.collapsible||!1===this._trigger("beforeActivate",t,i)||(e.active=!o&&this.tabs.index(s),this.active=n?V():s,this.xhr&&this.xhr.abort(),r.length||a.length||V.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,i))},_toggle:function(t,e){var i=this,s=e.newPanel,n=e.oldPanel;function o(){i.running=!1,i._trigger("activate",t,e)}function a(){i._addClass(e.newTab.closest("li"),"ui-tabs-active","ui-state-active"),s.length&&i.options.show?i._show(s,i.options.show,o):(s.show(),o())}this.running=!0,n.length&&this.options.hide?this._hide(n,this.options.hide,function(){i._removeClass(e.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),a()}):(this._removeClass(e.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n.hide(),a()),n.attr("aria-hidden","true"),e.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),s.length&&n.length?e.oldTab.attr("tabIndex",-1):s.length&&this.tabs.filter(function(){return 0===V(this).attr("tabIndex")}).attr("tabIndex",-1),s.attr("aria-hidden","false"),e.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var t=this._findActive(t);t[0]!==this.active[0]&&(t=(t=t.length?t:this.active).find(".ui-tabs-anchor")[0],this._eventHandler({target:t,currentTarget:t,preventDefault:V.noop}))},_findActive:function(t){return!1===t?V():this.tabs.eq(t)},_getIndex:function(t){return t="string"==typeof t?this.anchors.index(this.anchors.filter("[href$='"+CSS.escape(t)+"']")):t},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){V.data(this,"ui-tabs-destroy")?V(this).remove():V(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var t=V(this),e=t.data("ui-tabs-aria-controls");e?t.attr("aria-controls",e).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var t=this.options.disabled;!1!==t&&(t=void 0!==i&&(i=this._getIndex(i),Array.isArray(t)?V.map(t,function(t){return t!==i?t:null}):V.map(this.tabs,function(t,e){return e!==i?e:null})),this._setOptionDisabled(t))},disable:function(t){var e=this.options.disabled;if(!0!==e){if(void 0===t)e=!0;else{if(t=this._getIndex(t),-1!==V.inArray(t,e))return;e=Array.isArray(e)?V.merge([t],e).sort():[t]}this._setOptionDisabled(e)}},load:function(t,s){t=this._getIndex(t);function n(t,e){"abort"===e&&o.panels.stop(!1,!0),o._removeClass(i,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===o.xhr&&delete o.xhr}var o=this,i=this.tabs.eq(t),t=i.find(".ui-tabs-anchor"),a=this._getPanelForTab(i),r={tab:i,panel:a};this._isLocal(t[0])||(this.xhr=V.ajax(this._ajaxSettings(t,s,r)),"canceled"!==this.xhr.statusText&&(this._addClass(i,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,i){a.html(t),o._trigger("load",s,r),n(i,e)}).fail(function(t,e){n(t,e)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,e){return n._trigger("beforeLoad",i,V.extend({jqXHR:t,ajaxSettings:e},s))}}},_getPanelForTab:function(t){t=V(t).attr("aria-controls");return this.element.find("#"+CSS.escape(t))}}),!0===V.uiBackCompat&&V.widget("ui.tabs",V.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),V.ui.tabs,V.widget("ui.tooltip",{version:"1.14.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var t=V(this).attr("title");return V("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(t,e){var i=(t.attr("aria-describedby")||"").split(/\s+/);i.push(e),t.data("ui-tooltip-id",e).attr("aria-describedby",String.prototype.trim.call(i.join(" ")))},_removeDescribedBy:function(t){var e=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),e=V.inArray(e,i);-1!==e&&i.splice(e,1),t.removeData("ui-tooltip-id"),(i=String.prototype.trim.call(i.join(" ")))?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=V("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=V([])},_setOption:function(t,e){var i=this;this._super(t,e),"content"===t&&V.each(this.tooltips,function(t,e){i._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var s=this;V.each(this.tooltips,function(t,e){var i=V.Event("blur");i.target=i.currentTarget=e.element[0],s.close(i,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var t=V(this);if(t.is("[title]"))return t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var t=V(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))}),this.disabledTitles=V([])},open:function(t){var i=this,e=V(t?t.target:this.element).closest(this.options.items);e.length&&!e.data("ui-tooltip-id")&&(e.attr("title")&&e.data("ui-tooltip-title",e.attr("title")),e.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&e.parents().each(function(){var t,e=V(this);e.data("ui-tooltip-open")&&((t=V.Event("blur")).target=t.currentTarget=this,i.close(t,!0)),e.attr("title")&&(e.uniqueId(),i.parents[this.id]={element:this,title:e.attr("title")},e.attr("title",""))}),this._registerCloseHandlers(t,e),this._updateContent(e,t))},_updateContent:function(e,i){var t=this.options.content,s=this,n=i?i.type:null;if("string"==typeof t||t.nodeType||t.jquery)return this._open(i,e,t);(t=t.call(e[0],function(t){e.data("ui-tooltip-open")&&(i&&(i.type=n),s._open(i,e,t))}))&&this._open(i,e,t)},_open:function(t,e,i){var s,n,o,a=V.extend({},this.options.position);function r(t){a.of=t,s.is(":hidden")||s.position(a)}i&&((o=this._find(e))?o.tooltip.find(".ui-tooltip-content").html(i):(e.is("[title]")&&(t&&"mouseover"===t.type?e.attr("title",""):e.removeAttr("title")),o=this._tooltip(e),s=o.tooltip,this._addDescribedBy(e,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.liveRegion.children().hide(),(o=V("<div>").html(s.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),o.removeAttr("id").find("[id]").removeAttr("id"),o.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:r}),r(t)):s.position(V.extend({of:e},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(n=this.delayedShow=setInterval(function(){s.is(":visible")&&(r(a.of),clearInterval(n))},13)),this._trigger("open",t,{tooltip:s})))},_registerCloseHandlers:function(t,e){var i={keyup:function(t){t.keyCode===V.ui.keyCode.ESCAPE&&((t=V.Event(t)).currentTarget=e[0],this.close(t,!0))}};e[0]!==this.element[0]&&(i.remove=function(){var t=this._find(e);t&&this._removeTooltip(t.tooltip)}),t&&"mouseover"!==t.type||(i.mouseleave="close"),t&&"focusin"!==t.type||(i.focusout="close"),this._on(!0,e,i)},close:function(t){var e,i=this,s=V(t?t.currentTarget:this.element),n=this._find(s);n?(e=n.tooltip,n.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&!s.attr("title")&&s.attr("title",s.data("ui-tooltip-title")),this._removeDescribedBy(s),n.hiding=!0,e.stop(!0),this._hide(e,this.options.hide,function(){i._removeTooltip(V(this))}),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&V.each(this.parents,function(t,e){V(e.element).attr("title",e.title),delete i.parents[t]}),n.closing=!0,this._trigger("close",t,{tooltip:e}),n.hiding)||(n.closing=!1)):s.removeData("ui-tooltip-open")},_tooltip:function(t){var e=V("<div>").attr("role","tooltip"),i=V("<div>").appendTo(e),s=e.uniqueId().attr("id");return this._addClass(i,"ui-tooltip-content"),this._addClass(e,"ui-tooltip","ui-widget ui-widget-content"),e.appendTo(this._appendTo(t)),this.tooltips[s]={element:t,tooltip:e}},_find:function(t){t=t.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(t){clearInterval(this.delayedShow),t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){t=t.closest(".ui-front, dialog");return t=t.length?t:this.document[0].body},_destroy:function(){var s=this;V.each(this.tooltips,function(t,e){var i=V.Event("blur"),e=e.element;i.target=i.currentTarget=e[0],s.close(i,!0),V("#"+t).remove(),e.data("ui-tooltip-title")&&(e.attr("title")||e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!0===V.uiBackCompat&&V.widget("ui.tooltip",V.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),V.ui.tooltip});
$(document).ready(function () {
    var $body = $('body');
    var expiryDate = new Date('12/31/2999');    
    var size = Math.floor($('body').css('font-size').replace('px', ''));    

    //Append a class of cpTextResizeOn on body to get right styles for text resizer.
    $body.addClass('cpTextResizeOn');

    var factor = 1;
    if ($.cookie('sizeFactor') == null || $.cookie('sizeFactor') == '0') {
        //Do nothing.
    }
    else {
        factor = parseFloat($.cookie('sizeFactor'));
        size = size + factor;
        $body.css('font-size', '' + size + 'px');
}

    $('.cpTextResizer').find('a').click(function (e) {
        e.preventDefault();
        resizePageText(size, $(this));
    });
});

//Resize the text based on cookie value set.
function resizePageText(originalFontSize, $anchor) {
    var $body = $('body');
    var expiryDate = new Date('12/31/2999');
    var currentFontSize = $body.css('font-size');
    var bigOrSmall = $anchor.attr('id');
    var multiplier = 1;
    var fontSize;
    if (bigOrSmall == "makeTextSmaller") {        
        $.cookie('sizeFactor', parseInt($.cookie('sizeFactor') == null ? 0 : $.cookie('sizeFactor')) - 1, { path: '/', expires: expiryDate });
        fontSize = parseInt(currentFontSize.replace('px', '')) - 1;
    } else if (bigOrSmall == "makeTextBigger") {        
        $.cookie('sizeFactor', parseInt($.cookie('sizeFactor') == null ? 0 : $.cookie('sizeFactor')) + 1, { path: '/', expires: expiryDate });
        fontSize = parseInt(currentFontSize.replace('px', '')) +1;
    }    
     $body.css('font-size', '' + fontSize + 'px');

     if (!window.isRemoveSetHeights)
     	SetHeights();//Adjust heights of the containers.
};
var PopupBasedAuthentication = function () {
    var self = this;
    var popupWindow;
    var url;
    var paramSet;
    var jsCallback;

    self.requireLoggedIn = function (redirectUri, parameterSet) {
        if (redirectUri == null || redirectUri == '') {
        	redirectUri =  (window.location.pathname + window.location.search).replace(new RegExp('#\[^?]*', 'gi'), '');
        }
        self.setupParameters(redirectUri, parameterSet);
        self.checkLoggedIn();
    };

    self.setupParameters = function (redirectUri, parameterSet) {
        url = redirectUri;
        paramSet = parameterSet;
    };

    self.setupJsCallback = function (callback) {
    	jsCallback = callback;
    };

    self.checkLoggedIn = function () {
        $.ajax({
            url: '/Authentication/IsLoggedIn',
            type: 'GET',
            success: self.processCheckLoggedInResponse,
            async: false
        })
    };

    self.processCheckLoggedInResponse = function (loggedInResponse) {
    	if (loggedInResponse.loggedIn == true) {
    		if (jsCallback == null) {
    			window.location.href = url;
    		}
    		else {
    			jsCallback();
    		}
    	}
    	else if (loggedInResponse.UseIdentityServer) {
    		window.location.href = '/MyAccount?from=url&url=' + encodeURIComponent(url);
	    } else {
		    self.authenticate(loggedInResponse.domain);
	    }
    };

    self.authenticate = function (domain) {
        if (internetExplorerVersion == undefined) {
            self.setupEventToListenFromChildWindow();
        }

        self.disableScreen();

        var width = 500;
        var height = 420;

        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
		
        if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
			window.location = "/MyAccount?from=url&url=" + window.location.pathname + window.location.search;
			return;
		}

        popupWindow = window.open(
				'https://' + domain + '/Authentication/Popup?'
				+ 'redirectUri=' + encodeURIComponent(url)
				+ '&parameterSet=' + paramSet
				+ self.getUsernameFromCookie()
                + '&callingHost=' + window.location.protocol + '//' + window.location.hostname,
            'SignIn',
            'height=420,width=500,toolbar=no,menubar=no,left=' + left + ',top=' + top);

        self.checkBlockedPopup(popupWindow);
        self.attachOnCloseEvent(popupWindow);
    };

    self.getUsernameFromCookie = function () {
        var usernameCookieValue = cookieGet("CP");
        if (usernameCookieValue != null && usernameCookieValue.indexOf('uname=') == 0) {
            return '&prePopulatedUsername=' + usernameCookieValue.substring(6);
        } else {
            return '';
        }
    };

    self.attachOnCloseEvent = function (win) {
        var intervalId;
        function checkWindow() {
            if (win && win.closed) {
                window.clearInterval(intervalId);
                self.enableScreen();
            }
        }
        intervalId = window.setInterval(checkWindow, 500);
    };

    self.disableScreen = function () {
        $('#editItemBehavior_backgroundElement').show();
    };

    self.enableScreen = function () {
        $('#editItemBehavior_backgroundElement').hide();
    };

    self.checkBlockedPopup = function (popup) {
        setTimeout(function () {
        	if (!popup || popup.closed || popup.closed == 'undefined' || (popup.outerHeight && popup.outerHeight === 0)) {
                alert('Popup blocked');
                self.enableScreen();
            }
        }, 25);
    };

    self.setupEventToListenFromChildWindow = function () {
        window.addEventListener('message', function (msg) {
            if (msg.data.Type == 'Redirect') {
                self.handleResponseFromChild(msg.data);
            }
        }, true);
    };

    self.internetExplorerMessageHandling = function (data) {
        self.handleResponseFromChild(data);
    };

    self.handleResponseFromChild = function (data) {
        if (data.Type = 'Redirect') {
            window.location.href = data.Url.replace(/&amp;/g, '&');
        }
    };
};
/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */

var pressCount = 0; //this is used to track button presses for a specific table widget IE hack

shortcut = {
	'all_shortcuts':{},//All the shortcuts are stored in this array
	'add': function(shortcut_combination,callback,opt) {
		//Provide a set of default options
		var default_options = {
			'type':'keydown',
			'propagate':false,
			'disable_in_input':false,
			'target':document,
			'keycode':false
		}
		if(!opt) opt = default_options;
		else {
			for(var dfo in default_options) {
				if(typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
			}
		}

		var ele = opt.target;
		if(typeof opt.target == 'string') ele = document.getElementById(opt.target);
		var ths = this;
		shortcut_combination = shortcut_combination.toLowerCase();

		//The function to be called at keypress
		var func = function(e) {
			e = e || window.event;
			var character = null;
			
		    //this is an IE only hack that will fix double (<p>) vs single line (<br>) breaks in the table widget (<div contenteditable=true)
			if (detectIE() && e.keyCode == 13 && e.target.tagName == 'DIV' && e.target.contentEditable == "true") {
			    if ((pressCount) % 4 == 0) {
			        var node = document.createElement('br')
			        var positionNode = document.createTextNode('\u200B'); //used as a fake node to advance the cursor
			        node.appendChild(positionNode);
			        var selection = window.getSelection();
			        var range = selection.getRangeAt(0);
			        range.insertNode(node);
			        range.setStartAfter(node);
			        range.setEndAfter(node);
			        selection.removeAllRanges();
			        selection.addRange(range);
			    }
			    else {
			        e.preventDefault();
			    }

			    pressCount++;
			    return false;
			}

			if(opt['disable_in_input']) { //Don't enable shortcut keys in Input, Textarea fields
				var element;
				if(e.target) element=e.target;
				else if(e.srcElement) element=e.srcElement;
				if(element.nodeType==3) element=element.parentNode;

				if(element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;
			}
	
			//Find Which key is pressed
			if (e.keyCode) code = e.keyCode;
			else if (e.which) code = e.which;
			if (typeof (code) !== "undefined")
			{
				character = String.fromCharCode(code).toLowerCase();
				if (code == 188) character = ","; //If the user presses , when the type is onkeydown
				if (code == 190) character = "."; //If the user presses , when the type is onkeydown
			}

			var keys = shortcut_combination.split("+");
			//Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
			var kp = 0;
			
			//Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
			var shift_nums = {
				"`":"~",
				"1":"!",
				"2":"@",
				"3":"#",
				"4":"$",
				"5":"%",
				"6":"^",
				"7":"&",
				"8":"*",
				"9":"(",
				"0":")",
				"-":"_",
				"=":"+",
				";":":",
				"'":"\"",
				",":"<",
				".":">",
				"/":"?",
				"\\":"|"
			}
			//Special Keys - and their codes
			var special_keys = {
				'esc':27,
				'escape':27,
				'tab':9,
				'space':32,
				'return':13,
				'enter':13,
				'backspace':8,
	
				'scrolllock':145,
				'scroll_lock':145,
				'scroll':145,
				'capslock':20,
				'caps_lock':20,
				'caps':20,
				'numlock':144,
				'num_lock':144,
				'num':144,
				
				'pause':19,
				'break':19,
				
				'insert':45,
				'home':36,
				'delete':46,
				'end':35,
				
				'pageup':33,
				'page_up':33,
				'pu':33,
	
				'pagedown':34,
				'page_down':34,
				'pd':34,
	
				'left':37,
				'up':38,
				'right':39,
				'down':40,
	
				'f1':112,
				'f2':113,
				'f3':114,
				'f4':115,
				'f5':116,
				'f6':117,
				'f7':118,
				'f8':119,
				'f9':120,
				'f10':121,
				'f11':122,
				'f12':123
			}
	
			var modifiers = { 
				shift: { wanted:false, pressed:false},
				ctrl : { wanted:false, pressed:false},
				alt  : { wanted:false, pressed:false},
				meta : { wanted:false, pressed:false}	//Meta is Mac specific
			};
                        
			if(e.ctrlKey)	modifiers.ctrl.pressed = true;
			if(e.shiftKey)	modifiers.shift.pressed = true;
			if(e.altKey)	modifiers.alt.pressed = true;
			if(e.metaKey)   modifiers.meta.pressed = true;
                        
			for(var i=0; k=keys[i],i<keys.length; i++) {
				//Modifiers
				if(k == 'ctrl' || k == 'control') {
					kp++;
					modifiers.ctrl.wanted = true;

				} else if(k == 'shift') {
					kp++;
					modifiers.shift.wanted = true;

				} else if(k == 'alt') {
					kp++;
					modifiers.alt.wanted = true;
				} else if(k == 'meta') {
					kp++;
					modifiers.meta.wanted = true;
				} else if(k.length > 1) { //If it is a special key
					if(special_keys[k] == code) kp++;
					
				} else if(opt['keycode']) {
					if(opt['keycode'] == code) kp++;

				} else { //The special keys did not match
					if(character == k) kp++;
					else {
						if(shift_nums[character] && e.shiftKey) { //Stupid Shift key bug created by using lowercase
							character = shift_nums[character]; 
							if(character == k) kp++;
						}
					}
				}
			}
			
			if(kp == keys.length && 
						modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
						modifiers.shift.pressed == modifiers.shift.wanted &&
						modifiers.alt.pressed == modifiers.alt.wanted &&
						modifiers.meta.pressed == modifiers.meta.wanted) {
				callback(e);
	
				if(!opt['propagate']) { //Stop the event
					//e.cancelBubble is supported by IE - this will kill the bubbling process.
					e.cancelBubble = true;
					e.returnValue = false;
	
					//e.stopPropagation works in Firefox.
					if (e.stopPropagation) {
						e.stopPropagation();
						e.preventDefault();
					}
					return false;
				}
			}
		}
		this.all_shortcuts[shortcut_combination] = {
			'callback':func, 
			'target':ele, 
			'event': opt['type']
		};
		//Attach the function with the event
		if(ele.addEventListener) ele.addEventListener(opt['type'], func, false);
		else if(ele.attachEvent) ele.attachEvent('on'+opt['type'], func);
		else ele['on'+opt['type']] = func;
	},

	//Remove the shortcut - just specify the shortcut and I will remove the binding
	'remove':function(shortcut_combination) {
		shortcut_combination = shortcut_combination.toLowerCase();
		var binding = this.all_shortcuts[shortcut_combination];
		delete(this.all_shortcuts[shortcut_combination])
		if(!binding) return;
		var type = binding['event'];
		var ele = binding['target'];
		var callback = binding['callback'];

		if(ele.detachEvent) ele.detachEvent('on'+type, callback);
		else if(ele.removeEventListener) ele.removeEventListener(type, callback, false);
		else ele['on'+type] = false;
	}
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
;
// http://www.codinghorror.com/blog/2006/02/standard-browser-keyboard-shortcuts.html
// NOTE: Ctrl+Shift+T is used by browsers to reopen the last closed tab
// NOTE: Ctrl+Shift+B is used by several browsers for various functions

//Toggle live edit
shortcut.add("Ctrl+Shift+L", function () {
	enableLiveEdit($.cookie("enableLiveEdit") === "false");
});

//Toggle set heights
shortcut.add("Ctrl+Shift+S", function () {
	window.Core.performSetHeights = !window.Core.performSetHeights;
});

//Toggle bundling
shortcut.add("Ctrl+Shift+A", function () {
	if (window.location.href.indexOf('bundle=on') > -1) {
		window.location.href = window.location.href.replace('bundle=on', 'bundle=off');
	} else if (window.location.href.indexOf('bundle=off') > -1) {
		window.location.href = window.location.href.replace('bundle=off', 'bundle=on');
	} else {
		var value = $('script[src="/Assets/Scripts/Shared.js"]').length == 0 ? 'off' : 'on';
		var connector = window.location.href.indexOf('?') > -1 ? '&' : '?';
		window.location.href = window.location.href + connector + 'bundle=' + value;
	}
});

//Toggle mobile
shortcut.add("Ctrl+Shift+M", function () {
	if (window.location.href.indexOf('mobile=on') > -1) {
		window.location.href = window.location.href.replace('mobile=on', 'mobile=off');
	} else if (window.location.href.indexOf('mobile=off') > -1) {
		window.location.href = window.location.href.replace('mobile=off', 'mobile=on');
	} else {
		var value = $('body').hasClass('mobile') ? 'off' : 'on';
		var connector = window.location.href.indexOf('?') > -1 ? '&' : '?';
		window.location.href = window.location.href + connector + 'mobile=' + value;
	}
});
;
/// <reference path="jquery-1.3.2-vsdoc.js">
var needRegisterH5Exts = true;
var isAlreadyInitialized = false;

// Only register the placeholder attachment code once, regardless of include count.
// File shouldn't be included more than once, but it could happen.
if (needRegisterH5Exts) {
	$(document).ready(function () {
		// Register placeholder shims, if needed.
		if (needPlaceHoldersShim() && !isAlreadyInitialized) {
		    isAlreadyInitialized = true;

		    // Not all INPUTs/TEXTAREAs are automatically hooked into this,
			// since we have older implementations of placeholders and
			// overridding them would cause wierd behavior. Plus, it
			// would not make sense to hook to image/checkbox/radio/etc.

			// The attribute cp5ph (CivicPlus HTML5 PlaceHolder) is automatically placed on inputs
			// with placeholders through the CPHtml5TextInput() HTML extension.
			registerPlaceHoldersShim($('input[cp5ph]'));
			registerPlaceHoldersShim($('textarea[cp5ph]'));
		}
	});

	needRegisterH5Exts = false;
}

// Registers placeholders on fields inside a specific context.
function registerPlaceHoldersShimOnContainer($container) {
	registerPlaceHoldersShim($('input[cp5ph]', $container));
	registerPlaceHoldersShim($('textarea[cp5ph]', $container));
}

// Unregisters placeholders on fields inside a specific context.
function unregisterPlaceHoldersShimOnContainer($container) {
	unregisterPlaceHolderShim($('input[cp5ph]', $container));
	unregisterPlaceHolderShim($('textarea[cp5ph]', $container));
}

// Determines if placeholder shim is necessary.
function needPlaceHoldersShim() {
	var tmpElem = document.createElement('input');
	return !('placeholder' in tmpElem);
}

// Added due to a bug with IE 10's IE 7 document standards mode.  The elem.getAttribute('placeholder')
// always returns NULL if IE 10 in IE 7 document standards mode, but elem.attributes['placeholder'] 
// works.
function getPlaceholder(elem) {
    var placeholder = elem.getAttribute('placeholder')
    if (placeholder == null) {
        placeholder = elem.attributes['placeholder'];
        if (placeholder == null)
            return '';
        else
            return placeholder.value;
    }
    return placeholder;
}

// Unregisters placeholder shim hooks. Destroys event hooks and spawned placeholder element.
function unregisterPlaceHolderShim($elemsToHack) {
	// Get hooks.
	var hookData = $elemsToHack.data('cp5ph_hooks');

	if (hookData) {
		// Destroy all the hooks present.
		var attachedMSIE = hookData.ie == null ? [] : hookData.ie;
		var attachedSTD = hookData.std == null ? [] : hookData.std;
		var attachedJQR = hookData.jqr == null ? [] : hookData.jqr;
		var spawnedPHs = hookData.spawns == null ? [] : hookData.spawns;
		
		// Remove MSIE style events.
		for (var i = 0, len = attachedMSIE.length; i < len; i++) {
			if (attachedMSIE[i].element)
				attachedMSIE[i].element.detachEvent(attachedMSIE[i].event, attachedMSIE[i].method);
		}

		// Remove DOM standard (STD) events.
		for (var i = 0, len = attachedSTD.length; i < len; i++) {
			if (attachedSTD[i].element)
				attachedSTD[i].element.removeEventListener(attachedSTD[i].event, attachedSTD[i].method, false);
		}

		// Remove jQuery bindings.
		for (var i = 0, len = attachedJQR.length; i < len; i++) {
			if (attachedJQR[i].instance)
				attachedJQR[i].instance.unbind(attachedJQR[i].event, attachedJQR[i].method);
		}
		
		// Destroy placeholder spawned elements.
		for (var i = 0, len = spawnedPHs.length; i < len; i++) {
			if (spawnedPHs[i]) {
				spawnedPHs[i].innerHTML = "";
				spawnedPHs[i].style.display = "none";

				if (spawnedPHs[i].parentNode)
					spawnedPHs[i].parentNode.removeChild(spawnedPHs[i]);
			}
		}

		// Destroy hook data now that hooks have been cleaned.
		$elemsToHack.removeData('cp5ph_hooks');
	}
}

// Registers placeholder shims for jQuery element group specified.
// The shim is by no means perfect (won't catch things like attribute selectors causing changes).

function registerPlaceHoldersShim($elemsToHack) {
	// Track standard, MSIE, and jQuery event assignments so they can be cancelled/destroyed.
	// Also track any spawned placeholder elements since they too need to be cleaned up.
	var attachedMSIE = [];
	var attachedSTD = [];
	var attachedJQR = [];
	var spawnedPHs = [];

	// Hooks programmatic changes to the value property for browsers without 
	// placeholder support. jQuery did not seem to have a way to do this.
	var hookProgrammaticValueChange = function(elem, callback) {
		// Note: Browsers are buggy at this time with DOMControlValueChanged.

		// Handle Firefox Prior to 4 (which has built-in placeholder support).
		if (elem.__defineSetter__) {
			var oldSetter = elem.__lookupSetter__('value');

			if (oldSetter) {
				elem.__defineSetter__('value', function(v) {
					oldSetter.call(elem, v);
					callback();
				});
			}
		}

		// Handle IE, even up to IE 9.
		if (elem.attachEvent) {
			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: callback });
			elem.attachEvent('onpropertychange', callback);
		}
	};

	var displayAttrMatch = new RegExp('^(class|value|className|placeholder|id|style|style\\..*)$');

	// Hooks display changes for an element (placeholder may need to update itself).
	var hookDisplayUpdates = function(elem, callback) {
		if (elem.addEventListener) {
			var domAttrModifiedHook = function(event) {
				// Prevents an infinite loop due to bubbling.
				event.stopPropagation();

				// Another necessary escape hatch.
				if (event.target.className == '_ph_shim')
					return;

				if (displayAttrMatch.test(event.attrName))
					callback(event.attrName);
			};

			attachedSTD.push({ element: elem, event: 'DOMAttrModified', method: domAttrModifiedHook });
			elem.addEventListener('DOMAttrModified', domAttrModifiedHook, false);
		} else if (elem.attachEvent) {
			var propertyChangeHook = function(event) {
				if (displayAttrMatch.test(event.propertyName))
					callback(event.propertyName);
			};

			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: propertyChangeHook });
			elem.attachEvent('onpropertychange', propertyChangeHook);
		}
	};

	// Hooks display changes for an element or its parents.
	var hookDisplayUpdatesAndParents = function(elem, callback) {
		var node = elem;

		while (node && node != document.body) {
			hookDisplayUpdates(node, callback);

			node = node.parentNode;
		}
	};

	// Debouncer used to prevent the same placeholder updates from ocuring over and over again within a short time (30 ms).
	var debouncer = [];
	var isBouncy = function(element) {
		var now = function() {
			return new Date().getTime();
		};
		var getIndexOf = function(elem) {
			for (var i = 0; i < debouncer.length; i++) {
				if (debouncer[i].object === element) {
					return i;
				}
			}
			return -1;
		};
		var index = getIndexOf(element);
		if (index === -1) {
			var obj = { object: element, recentlyOccured: true };
			debouncer.push(obj);
			setTimeout(function () {
				obj.recentlyOccured = false;
			}
			,30);
			return false;
		} else if (debouncer[index].recentlyOccured) {
			return true;
		} else {
			debouncer[index].recentlyOccured = true;
			setTimeout(function () {
				debouncer[index].recentlyOccured = false;
			}
			, 30);
			return false;
		}
	};

	// Updates position/style of pseudo-element that acts as placeholder message.
	// Called when necessary to ensure placeholder looks right (e.g. styles changed).
	var updatePlaceHolderMessageElement = function (phElem, elem) {
		var $elem = $(elem);
		if (isBouncy(elem)) {
			return;
		}

		// TODO: Does $elem.is() not work if the element is not in the document?
		if (elem.parentNode != null && !elem._focus && $elem.is(':visible'))
			phElem.style.display = (elem.value == '' || elem.value == null ? 'block' : 'none');
		else {
			phElem.style.display = 'none';
			return;
		}

		// Determine where placeholder element should go.
		var shouldParent = $elem.offsetParent().get(0);

		// Placeholder element cannot go inside table rows, use cell instead.
		if (shouldParent.tagName == 'TR') {
			shouldParent = elem;

			while (shouldParent.tagName != 'TD')
				shouldParent = shouldParent.parentNode;
		}

		var phChanged = (phElem.getAttribute('_ph_val') != getPlaceholder(elem));

		if ((shouldParent != phElem.parentNode) || phChanged) {
			// Remove from old parent (or existing, if phChanged).
			// Necessary for phChanged since element may be inside a table,
			// and trying to set innerHTML in a table with IE causes trouble.
			phElem.parentNode.removeChild(phElem);

			// If placeholder changed, update innerHTML.
			if (phChanged)
			    phElem.innerHTML = getPlaceholder(elem);

			// Ensure pseudo-placeholder is placed in same offsetParent
			// that element resides within (positioning), and add it to
			// the end (resolves some possible z-index issues).
			shouldParent.appendChild(phElem);
		}

		phElem.style.width = elem.clientWidth + 'px';
		phElem.style.height = elem.clientHeight + 'px';
		phElem.style.verticalAlign = elem.style.verticalAlign;
		phElem.style.lineHeight = elem.style.lineHeight;
		phElem.style.textAlign = elem.style.textAlign;
		phElem.style.fontSize = elem.style.fontSize;
		phElem.style.fontFamily = elem.style.fontFamily;

		var compStyle = (window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle);
		var elemPaddingLeft = parseInt(compStyle.paddingLeft.replace(/px$/g, ''), 10);
		var elemPaddingTop = parseInt(compStyle.paddingTop.replace(/px$/g, ''), 10);
		var pos = $elem.position();

		phElem.style.top = (pos.top + elem.clientTop + elemPaddingTop - 2) + 'px';
		phElem.style.left = (pos.left + elem.clientLeft + elemPaddingLeft) + 'px';
	}

	// Creates pseudo-element that acts as placeholder message.
	var createPlaceHolderMessageElement = function(elem) {
		// Create pseudo-placeholder that will appear over the top of the control.
		var phElem = document.createElement('div');

		// Attach to element for reference.
		elem._ph_shim = phElem;

		// Ensure pseudo-placeholder is placed in same offsetParent
		// that element resides within (positioning), and add it to
		// the end (resolves some possible z-index issues).
		var phValue = getPlaceholder(elem);
		phElem.innerHTML = (phValue == null ? '' : phValue);
		phElem.setAttribute('_ph_val', 'phValue');

		phElem.setAttribute('id', 'ph_' + elem.id);
		phElem.setAttribute('name', 'ph_' + elem.id);

		var shouldParent = $(elem).offsetParent().get(0);
		shouldParent.appendChild(phElem);

		// Configure the pseudo-placeholder.
		phElem.className = '_ph_shim';
		phElem.style.position = 'absolute';
		phElem.style.color = '#aaa'; // Placeholder Text Color.
		phElem.style.backgroundColor = 'transparent';
		phElem.style.cssFloat = 'none';

		// Update appearance.
		updatePlaceHolderMessageElement(phElem, elem);

		// Set up events for pseudo-placeholder and element.
		var $phElem = $(phElem);

		var mouseDownHook = function(event) {
			phElem.style.display = 'none';

			// Mouse down is passed to the input control
			// the placeholder is shown on top of.
			$(elem).trigger('mousedown', event);

			// Hack: IE needs setTimeout to actually do this properly for TEXTAREA.
			setTimeout(function() {
				try {
					elem.focus()
				} catch(err) {
					//When the text box is readonly then the above focus code would throw error
					//so that error is only handled only for Center, if u happen to get this error please do ur implemntation below
					//NOTE: here we have checked only for /formcenter and so if there is any other place which uses readonly textbox and trys to focus also will get the same alert - This is known bug 
					//for DEtails talk to Akila or Robin - AK

					//**Please note the use of lowercase here**
					var url = (location.href).toLowerCase();

					if (url.indexOf("/admin/formcenter") > -1) {
						alert('You have selected the field input. Please select the field label or instructions.');
					}
				}
			}, 15);
		};

		$phElem.mousedown(mouseDownHook);

		attachedJQR.push({ instance: $phElem, event: 'mousedown', method: mouseDownHook });

		return phElem;
	};

	// Registers a shim placeholder for an element (private helper method).
	var registerPlaceHolder = function (elem) {
		// Create jQuery wrapper.
		var $elem = $(elem);

		// Create placeholder.
		var phElem = createPlaceHolderMessageElement(elem);

		// Track creation.
		spawnedPHs.push(phElem);

		var focusHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = true;

			phElem.style.display = 'none';
		};

		var blurHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = false;

			if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
				phElem.style.display = 'block';
		};

		$elem.focus(focusHook);
		$elem.blur(blurHook);

		attachedJQR.push({ instance: $elem, event: 'focus', method: focusHook });
		attachedJQR.push({ instance: $elem, event: 'blur', method: blurHook });

		// Ensure placeholder state is updated when the value
		// is changed programmatically.
		hookProgrammaticValueChange(elem, function () {
			if (elem._focus)
				phElem.style.display = 'none';
			else {
				if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
					phElem.style.display = 'block';
				else
					phElem.style.display = 'none';
			}
		});

		// Ensure placeholder UI updates correctly when display changes are made.
		hookDisplayUpdatesAndParents(elem, function () {
			updatePlaceHolderMessageElement(phElem, elem);
		});
	};

	// Attach shim to each wrapped element passed to the method.
	$elemsToHack.each(function () {
		registerPlaceHolder(this);
	});

	// Keep track of hooks so they can be destroyed.
	$elemsToHack.data('cp5ph_hooks', {
		ie: attachedMSIE,
		std: attachedSTD,
		jqr: attachedJQR,
		spawns: spawnedPHs 
	});
}


// Unregisters placeholder shim hooks. Destroys event hooks and spawned placeholder element.
function unregisterPlaceHoldersShimForEach($elemsToHack) {
	// Get hooks.
	$elemsToHack.each(function () {
		var hookData = $(this).data('cp5ph_hooks');

		if (hookData) {
			// Destroy all the hooks present.
			var attachedMSIE = hookData.ie == null ? [] : hookData.ie;
			var attachedSTD = hookData.std == null ? [] : hookData.std;
			var attachedJQR = hookData.jqr == null ? [] : hookData.jqr;
			var spawnedPHs = hookData.spawns == null ? [] : hookData.spawns;

			// Remove MSIE style events.
			for (var i = 0, len = attachedMSIE.length; i < len; i++) {
				if (attachedMSIE[i].element)
					attachedMSIE[i].element.detachEvent(attachedMSIE[i].event, attachedMSIE[i].method);
			}

			// Remove DOM standard (STD) events.
			for (var i = 0, len = attachedSTD.length; i < len; i++) {
				if (attachedSTD[i].element)
					attachedSTD[i].element.removeEventListener(attachedSTD[i].event, attachedSTD[i].method, false);
			}

			// Remove jQuery bindings.
			for (var i = 0, len = attachedJQR.length; i < len; i++) {
				if (attachedJQR[i].instance)
					attachedJQR[i].instance.unbind(attachedJQR[i].event, attachedJQR[i].method);
			}

			// Destroy placeholder spawned elements.
			for (var i = 0, len = spawnedPHs.length; i < len; i++) {
				if (spawnedPHs[i]) {
					spawnedPHs[i].innerHTML = "";
					spawnedPHs[i].style.display = "none";

					if (spawnedPHs[i].parentNode)
						spawnedPHs[i].parentNode.removeChild(spawnedPHs[i]);
				}
			}

			// Destroy hook data now that hooks have been cleaned.
			$(this).removeData('cp5ph_hooks');
		}
	});
}

// Registers placeholder shims for jQuery element group specified.
// The shim is by no means perfect (won't catch things like attribute selectors causing changes).
function registerPlaceHoldersShimForEach($elemsToHack) {
	// Track standard, MSIE, and jQuery event assignments so they can be cancelled/destroyed.
	// Also track any spawned placeholder elements since they too need to be cleaned up.
	var attachedMSIE = [];
	var attachedSTD = [];
	var attachedJQR = [];
	var spawnedPHs = [];

	// Hooks programmatic changes to the value property for browsers without 
	// placeholder support. jQuery did not seem to have a way to do this.
	var hookProgrammaticValueChange = function (elem, callback) {
		// Note: Browsers are buggy at this time with DOMControlValueChanged.

		// Handle Firefox Prior to 4 (which has built-in placeholder support).
		if (elem.__defineSetter__) {
			var oldSetter = elem.__lookupSetter__('value');

			if (oldSetter) {
				elem.__defineSetter__('value', function (v) {
					oldSetter.call(elem, v);
					callback();
				});
			}
		}

		// Handle IE, even up to IE 9.
		if (elem.attachEvent) {
			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: callback });
			elem.attachEvent('onpropertychange', callback);
		}
	};

	var displayAttrMatch = new RegExp('^(class|value|className|placeholder|id|style|style\\..*)$');

	// Hooks display changes for an element (placeholder may need to update itself).
	var hookDisplayUpdates = function (elem, callback) {
		if (elem.addEventListener) {
			var domAttrModifiedHook = function (event) {
				// Prevents an infinite loop due to bubbling.
				event.stopPropagation();

				// Another necessary escape hatch.
				if (event.target.className == '_ph_shim')
					return;

				if (displayAttrMatch.test(event.attrName))
					callback(event.attrName);
			};

			attachedSTD.push({ element: elem, event: 'DOMAttrModified', method: domAttrModifiedHook });
			elem.addEventListener('DOMAttrModified', domAttrModifiedHook, false);
		}
		else if (elem.attachEvent) {
			var propertyChangeHook = function (event) {
				if (displayAttrMatch.test(event.propertyName))
					callback(event.propertyName);
			};

			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: propertyChangeHook });
			elem.attachEvent('onpropertychange', propertyChangeHook);
		}
	};

	// Hooks display changes for an element or its parents.
	var hookDisplayUpdatesAndParents = function (elem, callback) {
		var node = elem;

		while (node && node != document.body) {
			hookDisplayUpdates(node, callback);

			node = node.parentNode;
		}
	};

	// Updates position/style of pseudo-element that acts as placeholder message.
	// Called when necessary to ensure placeholder looks right (e.g. styles changed).
	var updatePlaceHolderMessageElement = function (phElem, elem) {
		var $elem = $(elem);

		// TODO: Does $elem.is() not work if the element is not in the document?
		if (elem.parentNode != null && !elem._focus && $elem.is(':visible'))
			phElem.style.display = (elem.value == '' || elem.value == null ? 'block' : 'none');
		else {
			phElem.style.display = 'none';
			return;
		}

		// Determine where placeholder element should go.
		var shouldParent = $elem.offsetParent().get(0);

		// Placeholder element cannot go inside table rows, use cell instead.
		if (shouldParent.tagName == 'TR') {
			shouldParent = elem;

			while (shouldParent.tagName != 'TD')
				shouldParent = shouldParent.parentNode;
		}

		var phChanged = (phElem.getAttribute('_ph_val') != getPlaceholder(elem));

		if ((shouldParent != phElem.parentNode) || phChanged) {
			// Remove from old parent (or existing, if phChanged).
			// Necessary for phChanged since element may be inside a table,
			// and trying to set innerHTML in a table with IE causes trouble.
			phElem.parentNode.removeChild(phElem);

			// If placeholder changed, update innerHTML.
			if (phChanged)
				phElem.innerHTML = getPlaceholder(elem);

			// Ensure pseudo-placeholder is placed in same offsetParent
			// that element resides within (positioning), and add it to
			// the end (resolves some possible z-index issues).
			shouldParent.appendChild(phElem);
		}

		phElem.style.width = elem.clientWidth + 'px';
		phElem.style.height = elem.clientHeight + 'px';
		phElem.style.verticalAlign = elem.style.verticalAlign;
		phElem.style.lineHeight = elem.style.lineHeight;
		phElem.style.textAlign = elem.style.textAlign;
		phElem.style.fontSize = elem.style.fontSize;
		phElem.style.fontFamily = elem.style.fontFamily;

		var compStyle = (window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle);
		var elemPaddingLeft = parseInt(compStyle.paddingLeft.replace(/px$/g, ''), 10);
		var elemPaddingTop = parseInt(compStyle.paddingTop.replace(/px$/g, ''), 10);
		var pos = $elem.position();

		phElem.style.top = (pos.top + elem.clientTop + elemPaddingTop - 2) + 'px';
		phElem.style.left = (pos.left + elem.clientLeft + elemPaddingLeft) + 'px';
	}

	// Creates pseudo-element that acts as placeholder message.
	var createPlaceHolderMessageElement = function (elem) {
		// Create pseudo-placeholder that will appear over the top of the control.
		var phElem = document.createElement('div');

		// Attach to element for reference.
		elem._ph_shim = phElem;

		// Ensure pseudo-placeholder is placed in same offsetParent
		// that element resides within (positioning), and add it to
		// the end (resolves some possible z-index issues).
		var phValue = getPlaceholder(elem);
		phElem.innerHTML = (phValue == null ? '' : phValue);
		phElem.setAttribute('_ph_val', 'phValue');

		phElem.setAttribute('id', 'ph_' + elem.id);
		phElem.setAttribute('name', 'ph_' + elem.id);

		var shouldParent = $(elem).offsetParent().get(0);
		shouldParent.appendChild(phElem);

		// Configure the pseudo-placeholder.
		phElem.className = '_ph_shim';
		phElem.style.position = 'absolute';
		phElem.style.color = '#aaa'; // Placeholder Text Color.
		phElem.style.backgroundColor = 'transparent';
		phElem.style.cssFloat = 'none';

		// Update appearance.
		updatePlaceHolderMessageElement(phElem, elem);

		// Set up events for pseudo-placeholder and element.
		var $phElem = $(phElem);

		var mouseDownHook = function (event) {
			phElem.style.display = 'none';

			// Mouse down is passed to the input control
			// the placeholder is shown on top of.
			$(elem).trigger('mousedown', event);

			// Hack: IE needs setTimeout to actually do this properly for TEXTAREA.
			setTimeout(function () {
				try { elem.focus() } catch (err) {
					//When the text box is readonly then the above focus code would throw error
					//so that error is only handled only for Center, if u happen to get this error please do ur implemntation below
					//NOTE: here we have checked only for /formcenter and so if there is any other place which uses readonly textbox and trys to focus also will get the same alert - This is known bug 
					//for DEtails talk to Akila or Robin - AK

					//**Please note the use of lowercase here**
					var url = (location.href).toLowerCase();

					if (url.indexOf("/admin/formcenter") > -1) {
						alert('You have selected the field input. Please select the field label or instructions.');
					}
				}
			}, 15);
		};

		$phElem.mousedown(mouseDownHook);

		attachedJQR.push({ instance: $phElem, event: 'mousedown', method: mouseDownHook });

		return phElem;
	}

	// Registers a shim placeholder for an element (private helper method).
	var registerPlaceHolder = function (elem) {
		// Create jQuery wrapper.
		var $elem = $(elem);

		// Create placeholder.
		var phElem = createPlaceHolderMessageElement(elem);

		// Track creation.
		spawnedPHs.push(phElem);

		var focusHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = true;

			phElem.style.display = 'none';
		};

		var blurHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = false;

			if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
				phElem.style.display = 'block';
		};

		$elem.focus(focusHook);
		$elem.blur(blurHook);

		attachedJQR.push({ instance: $elem, event: 'focus', method: focusHook });
		attachedJQR.push({ instance: $elem, event: 'blur', method: blurHook });

		// Ensure placeholder state is updated when the value
		// is changed programmatically.
		hookProgrammaticValueChange(elem, function () {
			if (elem._focus)
				phElem.style.display = 'none';
			else {
				if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
					phElem.style.display = 'block';
				else
					phElem.style.display = 'none';
			}
		});

		// Ensure placeholder UI updates correctly when display changes are made.
		hookDisplayUpdatesAndParents(elem, function () {
			updatePlaceHolderMessageElement(phElem, elem);
		});
	};

	// Attach shim to each wrapped element passed to the method.
	$elemsToHack.each(function () {
		registerPlaceHolder(this);
	});

	// Keep track of hooks so they can be destroyed.
	$elemsToHack.each(function() {
		$(this).data('cp5ph_hooks', {
			ie: attachedMSIE,
			std: attachedSTD,
			jqr: attachedJQR,
			spawns: spawnedPHs
			});
	});
};

