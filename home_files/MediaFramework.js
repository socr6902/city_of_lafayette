﻿

window.cpMedia = window.cpMedia || (function (global, documentElement) {

	var DEBUG = false;
	var matchMedia = global.matchMedia;

	function each(collection, fn) {
		var i = 0,
            length = collection.length,
            cont;

		for (i; i < length; i++) {
			cont = fn(collection[i], i);
			if (cont === false) {
				break; //allow early exit
			}
		}
	}

	function isArray(target) {
		return Object.prototype.toString.apply(target) === '[object Array]';
	}
	
	function isFunction(target) {
		return typeof target === 'function';
	}

	function evalMediaQueryOnElement(query, element) {
		var media = { all: true, screen: true, print: false };
		var coordinates;
		try {
			coordinates = element.getBoundingClientRect();
		} catch (e) {
			coordinates = {
				width: element.offsetWidth,
				height: element.offsetHeight
			};
		}

		media.thisWidth = coordinates.width || coordinates.right - coordinates.left;
		media.thisHeight = coordinates.height || coordinates.bottom - coordinates.top;
		media.thisAspectRatio = media.thisWidth / media.thisHeight,
		media.thisOrientation = media.thisWidth > media.thisHeight ? "landscape" : "portrait";

		var qReplaced = query
			.replace(/\(|\)/g, "")
			.replace(/\s*,\s*/g, ") || (")
			.replace(/\s+and\s+/gi, " && ")
			.replace(/min-(.*?):/gi, "$1>=")
			.replace(/max-(.*?):/gi, "$1<=")
			.replace(/above-(.*?):/gi, "$1>")
			.replace(/below-(.*?):/gi, "$1<")
			.replace(/min-|max-/gi, "")
			.replace(/(all|screen|print)/, "d.$1")
			.replace(/:/g, "==")
			.replace(/([\w-]+)\s*([<>=]+)\s*(\w+)/g, function ($0, $1, $2, $3) {
				return "d." + toCamelCase($1) + $2 + parseCSSNumber($3);
			})
			.replace(/([<>=]+)([A-z][\w-]*)/g, '$1"$2"');
		var a = Function("d", "return(" + qReplaced + ")")(media);
		return a;
	}
	
	function toCamelCase(value) {
		return value.toLowerCase().replace(/-[a-z]/g, function ($0) {
			return $0[1].toUpperCase();
		});
	}
	
	function parseCSSNumber(value) {
		return value.replace(/([\d\.]+)(%|em|in|pt|px)/, function ($0, $1, $2) {
			return ($2 == "em") ? $1 * 16 : ($2 == "in") ? $1 * 96 : ($2 == "pt") ? $1 * 96 / 72 : ($2 == "%") ? $1 / (scope.innerWidth || documentElement.clientWidth) : $1;
		});
	}
	
	function diag(message) {
		if (DEBUG) {
			console.log(message);
		}
	}

	function QueryHandler(options, elements) {
		this.options = options;
		!options.deferSetup && this.setup(elements);
	}
	QueryHandler.prototype = {

		setup: function (elements) {
			if (this.options.setup) {
				this.options.setup(elements);
			}
			this.initialised = true;
		},

		on: function (e, element) {
			!this.initialised && this.setup();
			this.options.match && this.options.match(e, element);
		},

		off: function (e, element) {
			this.options.unmatch && this.options.unmatch(e, element);
		},

		destroy: function () {
			this.options.destroy ? this.options.destroy() : this.off();
		},

		equals: function (target) {
			return this.options === target || this.options.match === target;
		}
	};

	function MediaQuery(query, isUnconditional) {
		this.query = query;
		this.isUnconditional = isUnconditional;
		this.handlers = [];
		this.mql = matchMedia(query);
		
		if (this.mql.media != query) {
			diag("Media query might be invalid=" + query + "\nParsed as=" + this.mql.media);
		}

		var self = this;
		this.listener = function (mql) {
			self.mql = mql;
			self.assess();
		};
		this.mql.addListener(this.listener);
	}
	MediaQuery.prototype = {
		addHandler: function (handler) {
			var qh = new QueryHandler(handler);
			this.handlers.push(qh);

			this.matches() && qh.on();
		},

		removeHandler: function (handler) {
			var handlers = this.handlers;
			each(handlers, function (h, i) {
				if (h.equals(handler)) {
					h.destroy();
					return !handlers.splice(i, 1); //remove from array and exit each early
				}
			});
		},

		matches: function () {
			return this.mql.matches || this.isUnconditional;
		},
		
		clear: function () {
			each(this.handlers, function (handler) {
				handler.destroy();
			});
			this.mql.removeListener(this.listener);
			this.handlers.length = 0; //clear array
		},

		assess: function () {
			var action = this.matches() ? 'on' : 'off';

			each(this.handlers, function (handler) {
				handler[action]();
			});
		}
	};

	function ElementWrapper (element, query, rawQuery) {
		this.element = element;
		this.matched = false;
		this.query = query;
		this.rawQuery = rawQuery;
		var rwdinfo = $(element).data('rwdinfo');
		if (rwdinfo == null) {
			rwdinfo = [];
		}
		rwdinfo.push(this);
		$(element).data('rwdinfo', rwdinfo);
	}

	function MediaElement(query, isUnconditional) {
		this.query = query;
		this.isUnconditional = isUnconditional;
		this.handlers = [];
		this.isMediaElement = true;
		this.elementWrappers = [];
		this.initElements();
	}
	MediaElement.prototype = {
		
		initElements : function () {
			var all,
				element,
				match = this.query.match(/(.+?):media\((.+?)\)/);
			this.elementWrappers = [];
			if (match && /this/.test(match[2])) {
				if (documentElement.querySelectorAll) {
					all = documentElement.querySelectorAll(match[1]);

					for (var index = 0; element = all[index]; ++index) {
						this.elementWrappers.push(new ElementWrapper(element, match[2], this.query));
					}
				}
			}
		},	
		addHandler: function (handler) {
			var elementWrappers = this.elementWrappers,
				index,
				elements = [];
			for (index = 0; index < elementWrappers.length; ++index) {
				elements.push(elementWrappers[index].element);
			}
			var qh = new QueryHandler(handler, elements);
			this.handlers.push(qh);

			this.assessOneHandler(null, qh);//this.matched && qh.on();
			//this.assessForce(null, qh); //performance decrease, but not cached elements
		},

		removeHandler: function (handler) {
			var handlers = this.handlers;
			each(handlers, function (h, i) {
				if (h.equals(handler)) {
					h.destroy();
					return !handlers.splice(i, 1); //remove from array and exit each early
				}
			});
		},

		clear: function () {
			each(this.handlers, function (handler) {
				handler.destroy();
			});
			//this.mql.removeListener(this.listener);
			this.handlers.length = 0; //clear array
		},

		/// Access and execute specific handler if matches media query on current elements
		assessOneHandler: function (e, handler) {
			var elementWrappers = this.elementWrappers,
				elementWrapper,
				index;

			for (index = 0; index < elementWrappers.length; ++index) {
				elementWrapper = elementWrappers[index];

				if (evalMediaQueryOnElement(elementWrapper.query, elementWrapper.element) || this.isUnconditional) {
					handler.on(e, elementWrapper.element);
					elementWrapper.matched = true;
				}
			}
		},

		/// Access and execute current handlers if matches or unmatched media query on current elements
		assess: function (e) {
			var elementWrappers = this.elementWrappers,
				elementWrapper,
				index;

			for (index = 0; index < elementWrappers.length; ++index) {
				elementWrapper = elementWrappers[index];

				if (evalMediaQueryOnElement(elementWrapper.query, elementWrapper.element) || this.isUnconditional) {
					this.match(e, elementWrapper);
				} else {
					this.unmatch(e, elementWrapper);
				}
			}
		},
		
		match: function (e, elementWrapper) {
			if (elementWrapper.matched) {
				return; //already on
			}

			each(this.handlers, function (handler) {
				handler.on(e, elementWrapper.element);
			});
			elementWrapper.matched = true;
		},

		unmatch: function (e, elementWrapper) {
			if (!elementWrapper.matched) {
				return; //already off
			}

			each(this.handlers, function (handler) {
				handler.off(e, elementWrapper.element);
			});
			elementWrapper.matched = false;
		},
		/// Access and execute current handlers if matches or unmatched media query on all elements (no cached)
		/// If handler provided, access and execute only that handler if matches media query on all elements (no cached)
		assessForce: function (e, handler) {
			var all,
				element,
				match = this.query.match(/(.+?):media\((.+?)\)/);
			if (match && /this/.test(match[2])) {
				if (documentElement.querySelectorAll) {
					all = documentElement.querySelectorAll(match[1]);

					for (var index = 0; element = all[index]; ++index) {
						var action = (evalMediaQueryOnElement(match[2], element) || this.isUnconditional) ? 'on' : 'off';
						if (!handler) {
							each(this.handlers, function (handler) {
								handler[action](e, element);
							});
						} else if (action === 'on') {
							handler[action](e, element);
						}
					}
				}
			}
		}
	};

	function MediaQueryDispatch() {
		if (!matchMedia) {
			throw new Error('matchMedia not present, legacy browsers require a polyfill');
		}
		this.queries = {};
		this.listening = false;
		this.browserIsIncapable = !matchMedia('only all').matches;

		this.fire = function (e) {
			var queries = this.queries,
				mediaQuery;

			for (mediaQuery in queries) {
				if (queries.hasOwnProperty(mediaQuery)) {
					queries[mediaQuery].isMediaElement && queries[mediaQuery].assess(e);
					//queries[mediaQuery].isMediaElement && queries[mediaQuery].assessForce(e, null); //performance decrease, but not cached elements
				}
			}
			return this;
		};

		this.fireQuery = function (mediaQuery, e) {
			var queries = this.queries;

			if (queries.hasOwnProperty(mediaQuery)) {
				queries[mediaQuery].isMediaElement && queries[mediaQuery].assess(e);
			}
			return this;
		};

		this.listen = function (timeout) {
			var self = this;

			timeout = timeout || 160;

			//creates closure for separate timed events
			function wireFire(event) {
				var timer;

				window.addEventListener(event, function (e) {
					timer && clearTimeout(timer);

					timer = setTimeout(function () {
						self.fire(e);
					}, timeout);
				}, false);
			}

			//prevent multiple event handlers
			if (this.listening) {
				return this;
			}

			// any browser that doesn't implement this
			// will not have media query support
			if (window.addEventListener) {
				wireFire('resize');
				wireFire('orientationChange');
			}

			self.fire();
			this.listening = true;

			return this;
		};
	}
	MediaQueryDispatch.prototype = {

		register: function (q, options, shouldDegrade) {
			var queries = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;
			
			if (!queries[q]) {
				if (/this/.test(q)) {
					queries[q] = new MediaElement(q, isUnconditional);
					this.listen();
				} else {
					queries[q] = new MediaQuery(q, isUnconditional);
				}
			}

			//normalize to object in an array
			if (isFunction(options)) {
				options = { match: options };
			}
			if (!isArray(options)) {
				options = [options];
			}
			each(options, function (handler) {
				queries[q].addHandler(handler);
			});

			return this;
		},

		unregister: function (q, handler) {
			var query = this.queries[q];

			if (query) {
				if (handler) {
					query.removeHandler(handler);
				}
				else {
					query.clear();
					delete this.queries[q];
				}
			}

			return this;
		},
		diag: function (message) {
			diag(message);
		}
	};

	return new MediaQueryDispatch();
}(this, document.documentElement));

function toggleClassMedia(className, mediaQueryElement, opts) {
	//Extending toggleClass with options.
	var defaults = {
		match: null,	// [function] code to execute when media query match on element
		unmatch: null	// [function] code to execute when media query unmatch on element
	};
	var options = $.extend(defaults, opts);
	cpMedia.register(mediaQueryElement, {
		setup: function (elements) {
			elements = elements || [];
			for (var i = 0; i < elements.length; i++) {
				$(elements[i]).removeClass(className);
				cpMedia.diag('$(element[' + i + ']).removeClass("' + className + '"), mediaQuery: ' + mediaQueryElement);
				if (options.unmatch != null && typeof (options.unmatch) === 'function') {
					options.unmatch(e, elements[i], className, null, mediaQueryElement);
					cpMedia.diag('options.unmatch(e, element[' + i + '], "' + className + '", null, "' + mediaQueryElement + '")');
				}
			}
		},
		match: function (e, element) {
			$(element).addClass(className);
			cpMedia.diag('$(element).addClass("' + className + '"), mediaQuery: ' + mediaQueryElement);
			if (options.match != null && typeof (options.match) === 'function') {
				options.match(e, element, className, null, mediaQueryElement);
				cpMedia.diag('options.match(e, element, "' + className + '", null, "' + mediaQueryElement + '")');
			}
		},
		unmatch: function (e, element) {
			$(element).removeClass(className);
			cpMedia.diag('$(element).removeClass("' + className + '"), mediaQuery: ' + mediaQueryElement);
			if (options.unmatch != null && typeof (options.unmatch) === 'function') {
				options.unmatch(e, element, className, null, mediaQueryElement);
				cpMedia.diag('options.unmatch(e, element, "' + className + '", null, "' + mediaQueryElement + '")');
			}
		}
	}, false);
}

function toggleClassesMedia(classNameMatch, classNameUnmatch, mediaQueryElement, opts) {
	//Extending toggleClass with options.
	var defaults = {
		match: null,	// [function] code to execute when media query match on element
		unmatch: null	// [function] code to execute when media query unmatch on element
	};
	var options = $.extend(defaults, opts);
	cpMedia.register(mediaQueryElement, {
		setup: function (elements) {
			elements = elements || [];
			for (var i = 0; i < elements.length; i++) {
				$(elements[i]).addClass(classNameUnmatch).removeClass(classNameMatch);
				cpMedia.diag('$(elements[' + i + ']).removeClass("' + classNameMatch + '").addClass("' + classNameUnmatch + '"), mediaQuery: ' + mediaQueryElement);
				if (options.unmatch != null && typeof (options.unmatch) === 'function') {
					options.unmatch(null, elements[i], classNameMatch, classNameUnmatch, mediaQueryElement);
					cpMedia.diag('options.unmatch(e, element, "' + classNameUnmatch + '", "' + classNameUnmatch + '", "' + mediaQueryElement + '")');
				}
			}
		},
		match: function (e, element) {			
			$(element).addClass(classNameMatch).removeClass(classNameUnmatch);
			cpMedia.diag('$(element).addClass("' + classNameMatch + '").removeClass("' + classNameUnmatch + '"), mediaQuery: ' + mediaQueryElement);
			if (options.match != null && typeof (options.match) === 'function') {
				options.match(e, element, classNameMatch, classNameUnmatch, mediaQueryElement);
				cpMedia.diag('options.match(e, element, "' + classNameMatch + '", "' + classNameUnmatch + '", "' + mediaQueryElement + '")');
			}
		},
		unmatch: function (e, element) {		
			$(element).addClass(classNameUnmatch).removeClass(classNameMatch);
			cpMedia.diag('$(element).removeClass("' + classNameMatch + '").addClass("' + classNameUnmatch + '"), mediaQuery: ' + mediaQueryElement);
			if (options.unmatch != null && typeof (options.unmatch) === 'function') {
				options.unmatch(e, element, classNameMatch, classNameUnmatch, mediaQueryElement);
				cpMedia.diag('options.unmatch(e, element, "' + classNameUnmatch + '", "' + classNameUnmatch + '", " ' + mediaQueryElement + '")');
			}
		}
	}, false);
}

function fireMediaElementQueriesOfChildren ($parent) {
	var fireIndividualMediaQuery = function ($element) {
		var rwdinfo = $element.data('rwdinfo');
		for (var i = 0; i < rwdinfo.length; i++) {
			window.cpMedia.fireQuery(rwdinfo[i].rawQuery);
		}
	};

	$parent.find('*').hasData('rwdinfo').each(function () {
		fireIndividualMediaQuery($(this));
	});
	if ($parent.hasData('rwdinfo').length == 1) {
		fireIndividualMediaQuery($parent);
	}
}

function fireAllMediaElementQueries() {
	window.cpMedia.fire();
}

function matchMultiColumn(e, element, classNameMatch, classNameUnmatch, mediaQueryElement) {
	$(element).find('div .row').addClass(classNameMatch);
	if (classNameUnmatch != null)
		$(element).find('div .row').removeClass(classNameUnmatch);
	cpMedia.diag('$(' + element + ').find("div .row").addClass("' + classNameMatch + '"), mediaQuery: ' + mediaQueryElement);
}

function unmatchMultiColumn(e, element, classNameMatch, classNameUnmatch, mediaQueryElement) {
	$(element).find('div .row').removeClass(classNameMatch);
	if (classNameUnmatch != null)
		$(element).find('div .row').addClass(classNameUnmatch);
	cpMedia.diag('$(' + element + ').find("div .row").removeClass("' + classNameMatch + '"), mediaQuery: ' + mediaQueryElement);
}

function applyElementQueryToChildren ($parent) {
	$parent.find("[data-elementquery]").each(function () {
		var jsonQuery = $(this).data("elementquery");
		if (jsonQuery != null && typeof(jsonQuery) === "object") {
			var elementId = $(this).attr("id");
			if (elementId == null || elementId == "") {
				throw new Error("data-elementquery attribute can only by used on elements with unique id.");
			}
			if ($(this).parents('.megaMenu').length > 0 && !isResolvedOrState(window)) {
				cpMedia.diag('#' + elementId + ' is inside megaMenu. MediaQuery: ' + $(this).attr("data-elementquery") + ' was not applied. Because the megaMenu has not been lazyLoaded');
				return;
			}
			var options = {};
			var matchFunction = $(this).data("elementquerymatch");
			var unmatchFunction = $(this).data("elementqueryunmatch");
			if (typeof matchFunction !== 'undefined' && matchFunction != '')
				options.match = window[matchFunction];
			if (typeof unmatchFunction !== 'undefined' && matchFunction != '')
				options.unmatch = window[unmatchFunction];
			for (var propertyName in jsonQuery) {
				var mq = jsonQuery[propertyName];
				mq = mq
					.replace("max-", "this-max-")
					.replace("min-", "this-min-")
					.replace("below-", "this-below-")
					.replace("above-", "this-above-");
				var elementMediaQuery = "#" + elementId + ":media(" + mq + ")";
				toggleClassMedia(propertyName, elementMediaQuery, options);
			}
		}
	});

	$parent.find("[data-elementqueryclasses]").each(function () {
		var jsonQuery = $(this).data("elementqueryclasses");
		if (jsonQuery != null && typeof (jsonQuery) === "object") {
			var elementId = $(this).attr("id");
			if (elementId == null || elementId == "") {
				throw new Error("data-elementqueryclasses attribute can only by used on elements with unique id.");
			}
			if ($(this).parents('.megaMenu').length > 0 && !isResolvedOrState(window.Pages.megaMenuLoaded)) {
				cpMedia.diag('#' + elementId + ' is inside megaMenu. MediaQuery: ' + $(this).attr("data-elementquery") + ' was not applied. Because the megaMenu has not been lazyLoaded');
				return;
			}
			var options = {};
			var matchFunction = $(this).data("elementquerymatch");
			var unmatchFunction = $(this).data("elementqueryunmatch");
			if (typeof matchFunction !== 'undefined' && matchFunction != '')
				options.match = window[matchFunction];
			if (typeof unmatchFunction !== 'undefined' && matchFunction != '')
				options.unmatch = window[unmatchFunction];
			for (var propertyName in jsonQuery) {
				var mq = jsonQuery[propertyName];
				mq = mq
					.replace("max-", "this-max-")
					.replace("min-", "this-min-")
					.replace("below-", "this-below-")
					.replace("above-", "this-above-");
				var elementMediaQuery = "#" + elementId + ":media(" + mq + ")";
				var propNameSplit = propertyName.split("-");
				if (propNameSplit.length != 2)
					throw new Error("data-elementqueryclasses attribute needs to have two classes separated by a dash (‘-‘)");

				toggleClassesMedia(propNameSplit[0], propNameSplit[1], elementMediaQuery, options);
			}
		}
	});
}

$(function () {
	$("[data-contentcontainerbreakpoint]").each(function () {
		var $container = $(this);
		var breakpoint = $container.data("contentcontainerbreakpoint");
		if (breakpoint != null && typeof(breakpoint) === "number") {
			var elementId = $container.attr("id");
			if (elementId == null || elementId == "") {
				throw new Error("data-contentcontainerbreakpoint attribute can only by used on elements with unique id.");
			}
			var elementMediaQueryOuter = "#" + elementId + ":media(this-min-width:" + breakpoint + "em)";
			cpMedia.diag('register: ' + elementMediaQueryOuter);
			cpMedia.register(elementMediaQueryOuter, {
				setup: function () {
					$container.children('div.row.outer').removeClass('wide');
					cpMedia.diag('#' + elementId + ' div.row.outer .removeClass("wide")');
				},
				match: function (e, element) {
					$(element).children('div.row.outer').addClass('wide');
					cpMedia.diag('#' + elementId + ' div.row.outer .addClass("wide")');
				},
				unmatch: function (e, element) {
					$(element).children('div.row.outer').removeClass('wide');
					cpMedia.diag('#' + elementId + ' div.row.outer .removeClass("wide")');
				}
			});
			
			var innerBreakpoint = Math.round(breakpoint / 2);
			var elementMediaQueryInner = "#" + elementId + ":media(this-min-width:" + innerBreakpoint + "em)";
			cpMedia.diag('register: ' + elementMediaQueryInner);
			cpMedia.register(elementMediaQueryInner, {
				setup: function () {
					$container.find('div.row.nest').removeClass('wide');
					cpMedia.diag('#' + elementId + ' div.row.nest .removeClass("wide")');
				},
				match: function (e, element) {
					$(element).find('div.row.nest').addClass('wide');
					cpMedia.diag('#' + elementId + ' div.row.nest .addClass("wide")');
				},
				unmatch: function (e, element) {
					$(element).find('div.row.nest').removeClass('wide');
					cpMedia.diag('#' + elementId + ' div.row.nest .removeClass("wide")');
				}
			});
		}
	});

	$("[data-ajaxinclude]").each(function () {
		var jsonData = $(this).data("ajaxinclude");
		if (jsonData != null && typeof (jsonData) === "object") {
			var $div = $(this);
			var elementId = $(this).attr("id");
			if (elementId == null || elementId == "") {
				throw new Error("data-ajaxinclude attribute can only by used on elements with unique id.");
			}
			var url = jsonData.url;
			var query = jsonData.query;
			cpMedia.register(query, {
				setup: function () {
					cpMedia.diag('div setup init');
					AJAX(url, "GET", null, function (response) {
						var $newContent = $(response);
						/*$div.replaceWith($newContent); //1.) replace content with the div with ajax-include pattern
						$div = $newContent;
						$div.show();*/
						$div.append($newContent); //2.) append content in the div with ajax-include pattern
						console.log('div setup done');
					}, false);
				},
				deferSetup: true,
				match: function () {
					$div.show();
					cpMedia.diag('div show');
				},
				unmatch: function () {
					$div.hide();
					cpMedia.diag('div hide');
				}
			});
		}
	});

	applyElementQueryToChildren($('body'));

	//Setup execution of functions when resizing
	window.Pages = window.Pages || {};
	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	if (!window.isRemoveSetHeights) {
		window.Pages.onResizeHandlers.push(SetHeights);
	}
	if (typeof window.dynamicStretchContainers === 'function')
		window.Pages.onResizeHandlers.push(window.dynamicStretchContainers);
	
	if ($('#hdnWidgetManager').length == 0 && typeof rearrangeFlyoutsOnResizeEvents === 'function')
		window.Pages.onResizeHandlers.push(rearrangeFlyoutsOnResizeEvents);

	window.Pages.onResizeHandlersExecute = window.Pages.onResizeHandlersExecute || function () {
		for (var i = 0; i < window.Pages.onResizeHandlers.length; i++) {
			if (typeof (window.Pages.onResizeHandlers[i]) === 'function') {
				window.Pages.onResizeHandlers[i]();
			}
		}
	};

	var timeout = 250; //time out to debounce execution of resize events
	function executeOnResizeEvents(event) {
		var timer;

		window.addEventListener(event, function (e) {
			timer && clearTimeout(timer);

			timer = setTimeout(function () {
				window.Pages.onResizeHandlersExecute();
			}, timeout);
		}, false);
	}
	executeOnResizeEvents('resize');
	executeOnResizeEvents('orientationChange');

	$.when(window.Pages.rwdReady.resolve()).done(function () {
		window.Pages.rwdSetupComplete.resolve();
});
});
