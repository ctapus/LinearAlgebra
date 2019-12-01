/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/exercises/imageProcessing.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/exercises/imageProcessing.ts":
/*!******************************************!*\
  !*** ./src/exercises/imageProcessing.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");


function imageDataToRGBA(imageData) {
    const imgR = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](imageData.width, imageData.height);
    const imgG = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](imageData.width, imageData.height);
    const imgB = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](imageData.width, imageData.height);
    const imgA = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](imageData.width, imageData.height);
    let idx = 0;
    for (let x = 0; x < imageData.width; x++) {
        imgR[x] = [];
        imgG[x] = [];
        imgB[x] = [];
        imgA[x] = [];
        for (let y = 0; y < imageData.height; y++) {
            imgR.elements[x][y] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](imageData.data[idx++]);
            imgG.elements[x][y] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](imageData.data[idx++]);
            imgB.elements[x][y] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](imageData.data[idx++]);
            imgA.elements[x][y] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](imageData.data[idx++]);
        }
    }
    return [imgR, imgG, imgB, imgA];
}
function imageDataFromRGBA(rgba) {
    const imgR = rgba[0];
    const imgG = rgba[1];
    const imgB = rgba[2];
    const imgA = rgba[3];
    const width = imgR.m;
    const height = imgR.n;
    const imageData = new ImageData(width, height);
    let idx = 0;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            imageData.data[idx++] = imgR.elements[x][y].toNumber();
            imageData.data[idx++] = imgG.elements[x][y].toNumber();
            imageData.data[idx++] = imgB.elements[x][y].toNumber();
            imageData.data[idx++] = imgA.elements[x][y].toNumber();
        }
    }
    return imageData;
}
$(document).ready(() => {
    const canvas1 = $("#canvas1")[0];
    const ctx1 = canvas1.getContext("2d");
    const image = new Image();
    image.onload = () => {
        canvas1.height = image.height;
        canvas1.width = image.width;
        ctx1.drawImage(image, 0, 0);
        const imgData1 = ctx1.getImageData(0, 0, image.width, image.height);
        const rgba = imageDataToRGBA(imgData1);
        // duplicate
        const imgData2 = imageDataFromRGBA(rgba);
        const canvas2 = $("#canvas2")[0];
        const ctx2 = canvas2.getContext("2d");
        canvas2.height = imgData2.height;
        canvas2.width = imgData2.width;
        ctx2.putImageData(imgData2, 0, 0);
        // convolute
        const canvas3 = $("#canvas3")[0];
        const ctx3 = canvas3.getContext("2d");
        const kernel = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](3, 3);
        kernel.elements[0][0] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[0][1] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[0][2] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[1][0] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[1][1] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](8);
        kernel.elements[1][2] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[2][0] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[2][1] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        kernel.elements[2][2] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](-1);
        /*kernel.elements[0][0] = new RationalNumber(0);
        kernel.elements[0][1] = new RationalNumber(0);
        kernel.elements[0][2] = new RationalNumber(0);
        kernel.elements[1][0] = new RationalNumber(0);
        kernel.elements[1][1] = new RationalNumber(1);
        kernel.elements[1][2] = new RationalNumber(0);
        kernel.elements[2][0] = new RationalNumber(0);
        kernel.elements[2][1] = new RationalNumber(0);
        kernel.elements[2][2] = new RationalNumber(0);*/
        const newRgba = [rgba[0].convolute(kernel), rgba[1].convolute(kernel), rgba[2].convolute(kernel), rgba[3].convolute(kernel)];
        const imgData3 = imageDataFromRGBA(newRgba);
        canvas3.height = imgData3.height;
        canvas3.width = imgData3.width;
        ctx3.putImageData(imgData3, 0, 0);
    };
    image.src = "data:image/png;base64," + encodedImg;
    // Other ways of doing it
    const imgSrc = $("#imgSource").attr("src").replace("data:image/png;base64,", "");
    const binSrc = atob(imgSrc);
    const img = Uint8Array.from(binSrc, (c) => c.charCodeAt(0));
    // reverse
    let binDest = "";
    for (const i of img) {
        binDest += String.fromCharCode(i);
    }
    // String.fromCharCode.apply(null, img); // throww "Maximum call stack size exceeded"
    const imgDest = btoa(binDest);
    $("#imgDestination").attr("src", "data:image/png;base64," + imgDest);
});
const encodedImg = "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";

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/structures/ArithmeticEvaluator.ts":
/*!***********************************************!*\
  !*** ./src/structures/ArithmeticEvaluator.ts ***!
  \***********************************************/
/*! exports provided: ArithmeticEvaluator, TokenType, Token, Lexer, Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArithmeticEvaluator", function() { return ArithmeticEvaluator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenType", function() { return TokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Queue */ "./src/structures/Queue.ts");
/* harmony import */ var _RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stack */ "./src/structures/Stack.ts");



class ArithmeticEvaluator {
    static toReversePolishNotation(code) {
        const tokens = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
        let i = 0;
        const outputQueue = new _Queue__WEBPACK_IMPORTED_MODULE_0__["Queue"]();
        const operatorStack = new _Stack__WEBPACK_IMPORTED_MODULE_2__["Stack"]();
        while (i < tokens.length) {
            if (this.isNumber(tokens[i])) {
                outputQueue.enqueue(tokens[i]);
            }
            else if (this.isOperator(tokens[i])) {
                let op1 = tokens[i];
                while (!operatorStack.isEmpty() && this.isOperator(operatorStack.peek())) {
                    if ((this.isLeftAssociativeOperator(op1) && (this.precedence(op1) <= this.precedence(operatorStack.peek()))) ||
                        (this.isRightAssociativeOperator(op1) && (this.precedence(op1) < this.precedence(operatorStack.peek())))) {
                        outputQueue.enqueue(operatorStack.pop());
                    }
                    else {
                        break;
                    }
                }
                operatorStack.push(op1);
            }
            else if (tokens[i] === "(") {
                operatorStack.push(tokens[i]);
            }
            else if (tokens[i] === ")") {
                while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
                    outputQueue.enqueue(operatorStack.pop());
                }
                if (!operatorStack.isEmpty() && operatorStack.peek() === "(") {
                    operatorStack.pop();
                }
                else {
                    throw new Error("Mismatched parentheses.");
                }
            }
            i++;
        }
        while (!operatorStack.isEmpty()) {
            if (operatorStack.peek() === "(") {
                throw new Error("Mismatched parentheses.");
            }
            else {
                outputQueue.enqueue(operatorStack.pop());
            }
        }
        return outputQueue.toArray();
    }
    static evaluateFromRPN(tokens) {
        const stack = new _Stack__WEBPACK_IMPORTED_MODULE_2__["Stack"]();
        for (let i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) {
                stack.push(parseFloat(tokens[i]));
            }
            else {
                let op1 = stack.pop();
                let op2 = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(op2 + op1);
                        break;
                    case "-":
                        stack.push(op2 - op1);
                        break;
                    case "*":
                        stack.push(op2 * op1);
                        break;
                    case "/":
                        stack.push(op2 / op1);
                        break;
                    case "^":
                        stack.push(op2 ** op1);
                        break;
                }
            }
        }
        return stack.pop();
    }
    static isNumber(code) {
        return /^\d/.test(code);
    }
    static isOperator(code) {
        return /[\+\-\*\/\^]/.test(code);
    }
    static isLeftAssociativeOperator(operator) {
        return /[\+\-\*\/]/.test(operator);
    }
    static isRightAssociativeOperator(operator) {
        return /[\^]/.test(operator);
    }
    static precedence(operator) {
        if (/[\+\-]/.test(operator)) {
            return 1;
        }
        if (/[\*\/]/.test(operator)) {
            return 2;
        }
        if (/[\^]/.test(operator)) {
            return 3;
        }
        throw new Error("Unknown operator.");
    }
}
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Plus"] = 0] = "Plus";
    TokenType[TokenType["Minus"] = 1] = "Minus";
    TokenType[TokenType["Multiply"] = 2] = "Multiply";
    TokenType[TokenType["Divide"] = 3] = "Divide";
    TokenType[TokenType["Exponent"] = 4] = "Exponent";
    TokenType[TokenType["Number"] = 5] = "Number";
    TokenType[TokenType["LParen"] = 6] = "LParen";
    TokenType[TokenType["RParen"] = 7] = "RParen";
    TokenType[TokenType["End"] = 8] = "End";
    TokenType[TokenType["Unknown"] = 9] = "Unknown";
})(TokenType || (TokenType = {}));
class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
class Lexer {
    constructor(input) {
        this.tokens = input.replace(" ", "").match(/\(|\)|\d+(\.\d+)?|[\+\-\*\/\^]/g);
        this.tokenIndex = 0;
    }
    getNextToken() {
        if (this.tokens.length === this.tokenIndex) {
            return new Token(TokenType.End);
        }
        let input = this.tokens[this.tokenIndex++];
        return this.getToken(input);
    }
    getCurrentToken() {
        if (this.tokens.length - 1 === this.tokenIndex) {
            return new Token(TokenType.End);
        }
        let input = this.tokens[this.tokenIndex];
        return this.getToken(input);
    }
    revert() {
        if (this.tokenIndex <= 0) {
            throw Error("Index out of range");
        }
        this.tokenIndex--;
    }
    getToken(input) {
        if (/\+/.test(input)) {
            return new Token(TokenType.Plus);
        }
        if (/\-/.test(input)) {
            return new Token(TokenType.Minus);
        }
        if (/\*/.test(input)) {
            return new Token(TokenType.Multiply);
        }
        if (/\//.test(input)) {
            return new Token(TokenType.Divide);
        }
        if (/\^/.test(input)) {
            return new Token(TokenType.Exponent);
        }
        if (/\d+(\.\d+)?/.test(input)) {
            return new Token(TokenType.Number, parseFloat(input));
        }
        if (/\(/.test(input)) {
            return new Token(TokenType.LParen);
        }
        if (/\)/.test(input)) {
            return new Token(TokenType.RParen);
        }
        return new Token(TokenType.Unknown);
    }
}
class Parser {
    parse(code) {
        this.lex = new Lexer(code);
        const expression = this.fourthOrderOperators();
        const token = this.lex.getCurrentToken(); // is already advanced because of number()
        if (token.type === TokenType.End) {
            return expression;
        }
        throw Error("End expected");
    }
    // addition and substraction
    fourthOrderOperators() {
        let component1 = this.thirdOrderOperators();
        let token = this.lex.getNextToken();
        while (token.type === TokenType.Plus || token.type === TokenType.Minus) {
            let component2 = this.thirdOrderOperators();
            if (token.type === TokenType.Plus) {
                component1 = component1.add(component2);
            }
            else if (token.type === TokenType.Minus) {
                component1 = component1.sub(component2);
            }
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return component1;
    }
    // multiplication and division
    thirdOrderOperators() {
        let factor1 = this.secondOrderOperators();
        let token = this.lex.getNextToken();
        while (token.type === TokenType.Multiply || token.type === TokenType.Divide) {
            let factor2 = this.secondOrderOperators();
            if (token.type === TokenType.Multiply) {
                factor1 = factor1.mult(factor2);
            }
            else if (token.type === TokenType.Divide) {
                factor1 = factor1.div(factor2);
            }
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return factor1;
    }
    // exponents and roots
    secondOrderOperators() {
        let factor1 = this.firstOrderOperators();
        let token = this.lex.getNextToken();
        while (token.type === TokenType.Exponent) {
            let factor2 = this.firstOrderOperators();
            factor1 = factor1.exp(factor2);
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return factor1;
    }
    // numbers and parantheses
    firstOrderOperators() {
        let value = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](1);
        let token = this.lex.getNextToken();
        if (token.type === TokenType.Plus || token.type === TokenType.Minus) {
            if (token.type === TokenType.Minus) {
                value = value.mult(-1);
            }
            token = this.lex.getNextToken();
        }
        if (token.type === TokenType.LParen) {
            value = value.mult(this.fourthOrderOperators());
            token = this.lex.getNextToken();
            if (token.type !== TokenType.RParen) {
                throw Error("Unbalanced parenthesis");
            }
        }
        else {
            if (token.type === TokenType.Number) {
                value = value.mult(token.value);
            }
            else {
                throw Error("Not a number");
            }
        }
        return value;
    }
}
/*
    public static evaluate(expresion: string): RationalNumber {
    var digitPattern = new RegExp('0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9');
    var signPattern = new RegExp('\+|\-');
    var numberPattern = new RegExp('[' + signPattern + ']' + '{' + digitPattern + '}');
    var factorPattern = new RegExp(numberPattern + '|\(' + expressionPattern + '\)');
    var componentPattern = new RegExp(factorPattern + '[{( \* | \/ )' + factorPattern + '}]');
    var expressionPattern = new RegExp(componentPattern + '[{( \+ | \-)' + componentPattern + '}]');
}*/
/*
exprr: 4thORDER+;
4thORDER: component1=3rdORDER ((PLUS|MINUS) component2=3rdORDER)+;
3rdORDER: factor1=2NDORDER ((MULTIPLY|DIVIDE) factor1=2ndORDER)+
2ndORDER: factor1=1stORDER (EXPONENT factor2=1stORDER)+
1stORDER: (PLUS|MINUS|empty) (LPAREN value=4thORDER RPAREN| NUMBER)
*/ 


/***/ }),

/***/ "./src/structures/Matrix.ts":
/*!**********************************!*\
  !*** ./src/structures/Matrix.ts ***!
  \**********************************/
/*! exports provided: Matrix, MatrixIdentity, MatrixElimination, MatrixPermutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixIdentity", function() { return MatrixIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixElimination", function() { return MatrixElimination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixPermutation", function() { return MatrixPermutation; });
/* harmony import */ var _RationalNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/structures/Vector.ts");


class Matrix {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
        }
    }
    static augment(A, B) {
        if (A.m !== B.m) {
            throw new Error("The two matrices (vector) must have the same number of rows (elements).");
        }
        let ret = null;
        if (B instanceof Matrix) {
            ret = new Matrix(A.m, B.n + A.n);
            for (let i = 0; i < A.m; i++) {
                for (let j = 0; j < A.n; j++) {
                    ret.elements[i][j] = A.elements[i][j];
                }
            }
            for (let i = 0; i < B.m; i++) {
                for (let j = 0; j < B.n; j++) {
                    ret.elements[i][A.n + j] = B.elements[i][j];
                }
            }
        }
        else {
            if (B instanceof _Vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]) {
                ret = new Matrix(A.m, A.n + 1);
                for (let i = 0; i < A.m; i++) {
                    for (let j = 0; j < A.n; j++) {
                        ret.elements[i][j] = A.elements[i][j];
                    }
                }
                for (let j = 0; j < B.m; j++) {
                    ret.elements[j][A.n] = B.elements[j];
                }
            }
        }
        return ret;
    }
    // row-multiplying transformations
    static multiplication(n, row1, row2, mult) {
        if (n < row1 || n < row2) {
            throw new Error("Column index must be less or equalt than matrix size.");
        }
        const matrix = new MatrixIdentity(n);
        matrix.elements[row1][row2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](mult);
        return matrix;
    }
    static randomSquare() {
        const matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3); // minimum size 3x3 matrix
        for (let i = 0; i < matrix.m; i++) {
            for (let j = 0; j < matrix.n; j++) {
                matrix.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](Math.floor(Math.random() * 100 - 50));
            }
        }
        return matrix;
    }
    static random2() {
        const numberOfUnknowns = Math.floor(Math.random() * 4 + 3); // between 3 and 7 unknonws
        const unknowns = [];
        for (let i = 0; i < numberOfUnknowns; i++) {
            unknowns[i] = Math.floor(Math.random() * 20 - 10);
        }
        // todo: change below
        const matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3);
        return matrix;
    }
    equals(M) {
        if (this.m !== M.m || this.n !== M.n) {
            return false;
        }
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (!this.elements[i][j].equals(M.elements[i][j])) {
                    return false;
                }
            }
        }
        return true;
    }
    add(x) {
        if (this.m !== x.m || this.n !== x.n) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Matrix(this.m, this.n);
        for (let i = 0; i < res.m; i++) {
            for (let j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i][j].add(x.elements[i][j]);
            }
        }
        return res;
    }
    sub(x) {
        if (this.m !== x.m || this.n !== x.n) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Matrix(this.m, this.n);
        for (let i = 0; i < res.m; i++) {
            for (let j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i][j].sub(x.elements[i][j]);
            }
        }
        return res;
    }
    mult(x) {
        let res = null;
        if (typeof x === "number") {
            res = new Matrix(this.m, this.n);
            for (let i = 0; i < res.m; i++) {
                for (let j = 0; j < res.n; j++) {
                    res.elements[i][j] = this.elements[i][j].mult(x);
                }
            }
        }
        else if (x instanceof _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"]) {
            res = new Matrix(this.m, this.n);
            for (let i = 0; i < res.m; i++) {
                for (let j = 0; j < res.n; j++) {
                    res.elements[i][j] = this.elements[i][j].mult(x);
                }
            }
        }
        else {
            if (x instanceof Matrix) {
                if (this.n !== x.m) {
                    throw new Error("Mismatched dimensions.");
                }
                res = new Matrix(this.m, x.n);
                for (let i = 0; i < res.m; i++) {
                    for (let j = 0; j < res.n; j++) {
                        let sum = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
                        for (let k = 0; k < this.n; k++) {
                            sum = sum.add(this.elements[i][k].mult(x.elements[k][j]));
                        }
                        res.elements[i][j] = sum;
                    }
                }
            }
        }
        return res;
    }
    vectorProduct(v) {
        if (this.n !== v.m) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new _Vector__WEBPACK_IMPORTED_MODULE_1__["ColumnVector"](v.m);
        for (let i = 0; i < this.m; i++) {
            let sum = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
            for (let j = 0; j < this.n; j++) {
                sum = sum.add(this.elements[i][j].mult(v.elements[j]));
            }
            res.elements[i] = sum;
        }
        return res;
    }
    transpose() {
        const ret = new Matrix(this.n, this.m);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                ret.elements[j][i] = this.elements[i][j];
            }
        }
        return ret;
    }
    deepCopy() {
        const ret = new Matrix(this.m, this.n);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                ret.elements[i][j] = this.elements[i][j];
            }
        }
        return ret;
    }
    switchRows(idx1, idx2) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            const tmp = this.elements[idx1][i];
            this.elements[idx1][i] = this.elements[idx2][i];
            this.elements[idx2][i] = tmp;
        }
    }
    multiplyRow(idx, scalar) {
        if (this.m < idx) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            this.elements[idx][i] = this.elements[idx][i].mult(scalar).simplifiedForm();
        }
    }
    addRows(idx1, idx2, scalar) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            this.elements[idx1][i] = this.elements[idx2][i].mult(scalar).add(this.elements[idx1][i]).simplifiedForm();
        }
    }
    addRow1ToRow2(idx1, scalar1, idx2, scalar2) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            this.elements[idx2][i] = this.elements[idx2][i].mult(scalar2).add(this.elements[idx1][i].mult(scalar1)).simplifiedForm();
        }
    }
    // a square matrix is a matrix with the same number of rows and columns
    isSquare() {
        return this.m === this.n;
    }
    // a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero
    isDiagonal() {
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (i === j) {
                    continue;
                }
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                    return false;
                }
            }
        }
        return true;
    }
    // the identity matrix of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere
    // [ALIASES]: unit matrix
    isIdentity() {
        if (this.m !== this.n) {
            throw new Error("Not a square matrix.");
        }
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (i === j) {
                    if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1))) {
                        return false;
                    }
                    continue;
                }
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                    return false;
                }
            }
        }
        return true;
    }
    // a matrix is normal if it commutes with its conjugate transpose
    isNormal() {
        throw new Error("Not implemented");
    }
    // the conjugate transpose of an m-by-n matrix A with complex entries is the n-by-m matrix A∗ obtained from A
    // by taking the transpose and then taking the complex conjugate of each entry
    // [ALIASES]: Hermitian transpose
    toConjugateTranspose() {
        throw new Error("Not implemented");
    }
    isUpperTriangular() {
        // todo: check if definition is valid for a non square matrix
        // if (this.m !== this.n) { throw new Error("Not a square matrix."); }
        for (let i = 1; i < this.m; i++) {
            for (let j = 0; j < i; j++) {
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                    return false;
                }
            }
        }
        return true;
    }
    isLowerTriangular() {
        // todo: check if definition is valid for a non square matrix
        // if (this.m !== this.n) { throw new Error("Not a square matrix."); }
        for (let i = 0; i < this.m; i++) {
            for (let j = i + 1; j < this.n; j++) {
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                    return false;
                }
            }
        }
        return true;
    }
    // a symmetric matrix is a square matrix that is equal to its transpose
    isSymmetric() {
        if (this.m !== this.n) {
            throw new Error("Not a square matrix.");
        }
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (!this.elements[i][j].equals(this.elements[j][i])) {
                    return false;
                }
            }
        }
        return true;
    }
    // an orthogonal matrix is a square matrix with real entries whose columns and rows are orthogonal unit vectors
    // [ALIASES]: real orthogonal matrix
    isOrthogonal() {
        const MT = this.transpose();
        return this.mult(MT).isIdentity();
    }
    isRowEchelonForm() {
        let foundZeroRow = false;
        // all nonzero rows (rows with at least one nonzero element) are above any rows of all zeroes
        // (all zero rows, if any, belong at the bottom of the matrix)
        for (let i = 0; i < this.m; i++) {
            if (this.isZeroRow(i)) {
                foundZeroRow = true;
            }
            else {
                if (foundZeroRow) {
                    return false;
                }
            } // if current row is not zero, but a previous row is zero, then matrix is not in row echelon form
        }
        // the leading coefficient (the first nonzero number from the left, also called the pivot) of a nonzero row
        // is always strictly to the right of the leading coefficient of the row above it
        let previousIdx = -1;
        for (let i = 0; i < this.m; i++) {
            const currentPivotIdx = this.rowPivotPosition(i);
            if (0 > currentPivotIdx) {
                continue;
            } // this is a zero row, no pivot
            // leading coefficient must be 1
            if (!this.elements[i][currentPivotIdx].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1))) {
                return false;
            }
            if (previousIdx < currentPivotIdx) {
                previousIdx = currentPivotIdx;
            }
            else {
                return false;
            }
        }
        return true;
    }
    isReducedRowEchelonForm() {
        if (!this.isRowEchelonForm()) {
            return false;
        }
        // each leading coefficient is the only nonzero entry in its column
        for (let i = 0; i < this.m; i++) {
            const pivotPosition = this.rowPivotPosition(i);
            if (1 < this.numberOfNonZeroElementForColumn(pivotPosition)) {
                return false;
            }
        }
        return true;
    }
    toReducedRowEchelonForm() {
        const res = this.deepCopy();
        let lead = 0;
        for (let r = 0; r < res.m; r++) {
            if (res.n <= lead) {
                break;
            }
            let i = r;
            while (res.elements[i][lead].equals(0)) {
                i++;
                if (res.m === i) {
                    i = r;
                    lead++;
                    if (res.n === lead) {
                        lead--;
                        break;
                    }
                }
            }
            res.switchRows(i, r);
            if (!res.elements[r][lead].equals(0)) {
                res.multiplyRow(r, res.elements[r][lead].reciprocal());
            }
            for (let j = 0; j < res.m; j++) {
                if (j !== r) {
                    res.addRows(j, r, res.elements[j][lead].opposite());
                }
            }
            lead++;
        }
        return res;
    }
    determinant() {
        // todo: implement an optimized version, like A=PLU
        if (this.m !== this.n) {
            throw new Error("Determinant can only be calculated on a square matrix");
        }
        if (this.m === 1) {
            return this.elements[0][0];
        }
        let ret = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
        for (let i = 0; i < this.n; i++) {
            const minor = this.elements[0][i].mult(this.cofactor(0, i).determinant());
            ret = ret.add(minor.mult((-1) ** i));
        }
        return ret;
    }
    convolute(kernel) {
        if (kernel.m !== kernel.n) {
            throw new Error("Kernel is not a square matrix.");
        }
        if (kernel.m % 2 === 0) {
            throw new Error("Kernel is not an even size matrix.");
        }
        const sz = Math.floor(kernel.m / 2);
        const res = new Matrix(this.m, this.n);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                res.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
                for (let ti = 0; ti < kernel.m; ti++) {
                    if (i + ti - sz < 0 || i + ti - sz >= this.m) {
                        continue;
                    }
                    for (let tj = 0; tj < kernel.n; tj++) {
                        if (j + tj - sz < 0 || j + tj - sz >= this.n) {
                            continue;
                        }
                        res.elements[i][j] = res.elements[i][j].add(this.elements[i + ti - sz][j + tj - sz].mult(kernel.elements[ti][tj]));
                    }
                }
            }
        }
        return res;
    }
    isZeroRow(rowId) {
        for (let j = 0; j < this.n; j++) {
            if (!this.elements[rowId][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                return false;
            }
        }
        return true;
    }
    rowPivotPosition(rowId) {
        for (let j = 0; j < this.n; j++) {
            if (!this.elements[rowId][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                return j;
            }
        }
        return -1;
    }
    numberOfNonZeroElementForColumn(columnId) {
        let acc = 0;
        for (let j = 0; j < this.m; j++) {
            if (!this.elements[j][columnId].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0))) {
                acc++;
            }
        }
        return acc;
    }
    cofactor(rowId, columnId) {
        const ret = new Matrix(this.m - 1, this.n - 1);
        let rowOffset = 0;
        for (let i = 0; i < this.m - 1; i++) {
            if (i === rowId) {
                rowOffset = 1;
            }
            let columnOffset = 0;
            for (let j = 0; j < this.n - 1; j++) {
                if (j === columnId) {
                    columnOffset = 1;
                }
                ret.elements[i][j] = this.elements[i + rowOffset][j + columnOffset];
            }
        }
        return ret;
    }
}
class MatrixIdentity extends Matrix {
    constructor(m) {
        super(m, m);
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
            for (let j = 0; j < this.m; j++) {
                if (i === j) {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1);
                }
                else {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
                }
            }
        }
    }
}
// elimination - multiply on the left (E*A); Row-addition transformations
// to mult*(row2 of Matrix A) add (row1 of Matrix A)
class MatrixElimination extends Matrix {
    constructor(m, r1, r2, mult) {
        if (m < r1 || m < r2) {
            throw new Error("Column index must be less than or equal to the matrix size.");
        }
        super(m, m);
        this.row1 = r1;
        this.row2 = r2;
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
            for (let j = 0; j < this.m; j++) {
                if (i === j) {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1);
                }
                else {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
                }
            }
        }
        if (typeof mult === "number") {
            this.elements[r1][r2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](mult);
        }
        else {
            if (mult instanceof _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"]) {
                this.elements[r1][r2] = mult;
            }
        }
    }
}
// permutation - multiply on the right (A*P); Row-switching transformations
class MatrixPermutation extends Matrix {
    constructor(m, row1, row2) {
        if (m < row1 || m < row2) {
            throw new Error("Column index must be less than or equal to the matrix size.");
        }
        super(m, m);
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
            for (let j = 0; j < this.m; j++) {
                if (i === j) {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1);
                }
                else {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
                }
            }
        }
        this.elements[row1][row1] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
        this.elements[row1][row2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1);
        this.elements[row2][row2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](0);
        this.elements[row2][row1] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__["RationalNumber"](1);
    }
}


/***/ }),

/***/ "./src/structures/Queue.ts":
/*!*********************************!*\
  !*** ./src/structures/Queue.ts ***!
  \*********************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
class Queue {
    constructor() {
        this.queue = [];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue[0];
    }
    toArray() {
        return this.queue;
    }
}


/***/ }),

/***/ "./src/structures/RationalNumber.ts":
/*!******************************************!*\
  !*** ./src/structures/RationalNumber.ts ***!
  \******************************************/
/*! exports provided: RationalNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationalNumber", function() { return RationalNumber; });
/* harmony import */ var _ArithmeticEvaluator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArithmeticEvaluator */ "./src/structures/ArithmeticEvaluator.ts");
/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ "./src/structures/Queue.ts");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stack */ "./src/structures/Stack.ts");



class RationalNumber {
    constructor(n, d = 1) {
        if (d === 0) {
            throw new Error("Division by zero!");
        }
        // todo: potential for overflow. When Math.sign becomes available in TypeScript use it instead of the multiplication
        const sign = n * d >= 0 ? 1 : -1;
        this.numerator = sign * Math.abs(n);
        this.denominator = Math.abs(d);
    }
    static toReversePolishNotation(code) {
        const tokens = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
        let i = 0;
        const outputQueue = new _Queue__WEBPACK_IMPORTED_MODULE_1__["Queue"]();
        const operatorStack = new _Stack__WEBPACK_IMPORTED_MODULE_2__["Stack"]();
        while (i < tokens.length) {
            if (this.isNumber(tokens[i])) {
                outputQueue.enqueue(tokens[i]);
            }
            else if (this.isOperator(tokens[i])) {
                const op1 = tokens[i];
                while (!operatorStack.isEmpty() && this.isOperator(operatorStack.peek())) {
                    if ((this.isLeftAssociativeOperator(op1) && (this.precedence(op1) <= this.precedence(operatorStack.peek()))) ||
                        (this.isRightAssociativeOperator(op1) && (this.precedence(op1) < this.precedence(operatorStack.peek())))) {
                        outputQueue.enqueue(operatorStack.pop());
                    }
                    else {
                        break;
                    }
                }
                operatorStack.push(op1);
            }
            else if (tokens[i] === "(") {
                operatorStack.push(tokens[i]);
            }
            else if (tokens[i] === ")") {
                while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
                    outputQueue.enqueue(operatorStack.pop());
                }
                if (!operatorStack.isEmpty() && operatorStack.peek() === "(") {
                    operatorStack.pop();
                }
                else {
                    throw new Error("Mismatched parentheses.");
                }
            }
            i++;
        }
        while (!operatorStack.isEmpty()) {
            if (operatorStack.peek() === "(") {
                throw new Error("Mismatched parentheses.");
            }
            else {
                outputQueue.enqueue(operatorStack.pop());
            }
        }
        return outputQueue.toArray();
    }
    static fromString(code) {
        const p = new _ArithmeticEvaluator__WEBPACK_IMPORTED_MODULE_0__["Parser"]();
        return p.parse(code);
    }
    static greatestCommonDivisor(a, b) {
        return b ? RationalNumber.greatestCommonDivisor(b, a % b) : a;
    }
    static leastCommonMultiple(a, b) {
        return Math.abs(a * b / RationalNumber.greatestCommonDivisor(a, b));
    }
    static isNumber(code) {
        return /^\d/.test(code);
    }
    static isOperator(code) {
        return /[\+\-\*\/\^]/.test(code);
    }
    static isLeftAssociativeOperator(operator) {
        return /[\+\-\*\/]/.test(operator);
    }
    static isRightAssociativeOperator(operator) {
        return /[\^]/.test(operator);
    }
    static precedence(operator) {
        if (/[\+\-]/.test(operator)) {
            return 1;
        }
        if (/[\*\/]/.test(operator)) {
            return 2;
        }
        if (/[\^]/.test(operator)) {
            return 3;
        }
        throw new Error("Unknown operator.");
    }
    static evaluateFromRPN(tokens) {
        const stack = new _Stack__WEBPACK_IMPORTED_MODULE_2__["Stack"]();
        for (let i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) {
                stack.push(new RationalNumber(parseFloat(tokens[i])));
            }
            else {
                const op1 = stack.pop();
                const op2 = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(op2.add(op1));
                        break;
                    case "-":
                        stack.push(op2.sub(op1));
                        break;
                    case "*":
                        stack.push(op2.mult(op1));
                        break;
                    case "/":
                        stack.push(op2.div(op1));
                        break;
                    case "^":
                        stack.push(op2.exp(op1.toNumber()));
                        break;
                }
            }
        }
        return stack.pop().simplifiedForm();
    }
    simplifiedForm() {
        const gcd = RationalNumber.greatestCommonDivisor(this.numerator, this.denominator);
        return new RationalNumber(this.numerator / gcd, this.denominator / gcd);
    }
    equals(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator === x && rn1.denominator === 1;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator === rn2.numerator && rn1.denominator === rn2.denominator;
        }
    }
    lt(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator < x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator < rn2.numerator * rn1.denominator;
        }
    }
    le(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator <= x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator <= rn2.numerator * rn1.denominator;
        }
    }
    gt(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator > x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator > rn2.numerator * rn1.denominator;
        }
    }
    ge(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator >= x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator >= rn2.numerator * rn1.denominator;
        }
    }
    // multiplicative inverse
    reciprocal() {
        if (this.denominator === 0) {
            throw new Error("Division by zero!");
        }
        return new RationalNumber(this.denominator, this.numerator);
    }
    // additive inverse
    opposite() {
        return new RationalNumber(this.numerator * (-1), this.denominator);
    }
    add(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator + x * this.denominator), this.denominator);
        }
        else {
            const lcm = RationalNumber.leastCommonMultiple(this.denominator, x.denominator);
            const n1 = this.numerator * lcm / this.denominator;
            const n2 = x.numerator * lcm / x.denominator;
            return new RationalNumber(n1 + n2, lcm);
        }
    }
    sub(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator - x * this.denominator), this.denominator);
        }
        else {
            const lcm = RationalNumber.leastCommonMultiple(this.denominator, x.denominator);
            const n1 = this.numerator * lcm / this.denominator;
            const n2 = x.numerator * lcm / x.denominator;
            return new RationalNumber(n1 - n2, lcm);
        }
    }
    mult(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator * x), this.denominator);
        }
        else {
            return new RationalNumber((this.numerator * x.numerator), x.denominator * this.denominator);
        }
    }
    div(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator), this.denominator * x);
        }
        else {
            return new RationalNumber((this.numerator * x.denominator), x.numerator * this.denominator);
        }
    }
    exp(x) {
        if (typeof x === "number") {
            return new RationalNumber(this.numerator ** x, this.denominator ** x);
        }
        else {
            if (this.denominator !== 1) {
                throw Error("Exponentiation with rational powers not supported.");
            }
            return new RationalNumber(this.numerator ** x.numerator, this.denominator ** x.numerator);
        }
    }
    toNumber() {
        return this.numerator / this.denominator;
    }
    toString() {
        return this.numerator.toString() + (1 === this.denominator ? "" : "/" + this.denominator.toString());
    }
    deepCopy() {
        return new RationalNumber(this.numerator, this.denominator);
    }
}


/***/ }),

/***/ "./src/structures/Stack.ts":
/*!*********************************!*\
  !*** ./src/structures/Stack.ts ***!
  \*********************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
class Stack {
    constructor() {
        this.stack = [];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }
    toArray() {
        return this.stack;
    }
}


/***/ }),

/***/ "./src/structures/Vector.ts":
/*!**********************************!*\
  !*** ./src/structures/Vector.ts ***!
  \**********************************/
/*! exports provided: Vector, ColumnVector, RowVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnVector", function() { return ColumnVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowVector", function() { return RowVector; });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RationalNumber */ "./src/structures/RationalNumber.ts");


class Vector {
    constructor(n) {
        if (typeof n === "number") {
            this.m = n;
            this.elements = [];
        }
        else if (n instanceof Array) {
            this.m = n.length;
            this.elements = [];
            for (let i = 0; i < this.m; i++) {
                this.elements[i] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](n[i]);
            }
        }
    }
    static areLinearlyIndependent(vectors) {
        const m = vectors.length;
        if (0 === m) {
            return true;
        }
        const n = vectors[0].m;
        for (let i = 1; i < vectors.length; i++) {
            if (n !== vectors[i].m) {
                throw new Error("Mismatched dimensions.");
            }
        }
        if (m > n) {
            return false;
        }
        throw new Error("Not implemented.");
    }
    add(x) {
        if (this.m !== x.m) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Vector(this.m);
        for (let i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].add(x.elements[i]);
        }
        return res;
    }
    sub(x) {
        if (this.m !== x.m) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Vector(this.m);
        for (let i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].sub(x.elements[i]);
        }
        return res;
    }
    mult(x) {
        const res = new Vector(this.m);
        for (let i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].mult(x);
        }
        return res;
    }
    // [ALIASES]: innerProduct, projectionProduct, scalarProduct
    dotProduct(x) {
        if (this.m !== x.m) {
            throw new Error("Mismatched dimensions.");
        }
        let res = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](0);
        for (let i = 0; i < x.m; i++) {
            res = res.add(this.elements[i].mult(x.elements[i]));
        }
        return res;
    }
    // [ALIASES]: directedAreaProduct, vectorProduct
    crossProduct(x) {
        throw new Error("Not implemented.");
    }
    // [ALIASES]: magnitude, norm
    length() {
        const length = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](0);
        for (let i = 0; i < this.m; i++) {
            length.add(this.elements[i]);
        }
        return length;
    }
    deepCopy() {
        const ret = new Vector(this.m);
        for (let i = 0; i < this.m; i++) {
            ret.elements[i] = this.elements[i];
        }
        return ret;
    }
    toMatrix() {
        const ret = new _Matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.m, 1);
        for (let i = 0; i < this.m; i++) {
            ret.elements[i][0] = this.elements[i];
        }
        return ret;
    }
}
class ColumnVector extends Vector {
}
class RowVector extends Vector {
    matrixProduct(m) {
        if (this.m !== m.n) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new RowVector(this.m);
        for (let i = 0; i < this.m; i++) {
            let sum = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__["RationalNumber"](0);
            for (let j = 0; j < m.n; j++) {
                sum = sum.add(m.elements[i][j].mult(this.elements[i]));
            }
            res.elements[i] = sum;
        }
        return res;
    }
}


/***/ })

/******/ });