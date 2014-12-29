define("dummy/app", 
  ["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("dummy/initializers/export-application-global", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("dummy/router", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
    });

    __exports__["default"] = Router;
  });
define("dummy/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("<i class=\"fa fa-home\"></i> Home");
      }

      data.buffer.push("<br>\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"btn-group pull-right\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-reorder\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-test-helpers/blob/master/README.md\"><i class=\"fa fa-wrench\"></i> Get Started</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-test-helpers/blob/master/CONTRIBUTING.md\"><i class=\"fa fa-cog\"></i> Contribution Guide</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-test-helpers/stargazers\"><i class=\"fa fa-star\"></i> Star Our Repo</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-test-helpers/fork\"><i class=\"fa fa-code-fork\"></i> Fork Our Repo</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <p>npm install sl-ember-test-helpers</p>\n            <p><a href=\"https://github.com/softlayer/sl-ember-test-helpers/blob/master/LICENSE.md\">MIT Licensed</a></p>\n        </div>\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("dummy/templates/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>sl-ember-test-helpers</h1>\n        <p class=\"lead\">An Ember CLI Addon that provides and registers QUnit test helpers for use in the testing of your application.</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-test-helpers/blob/master/README.md\"><i class=\"fa fa-book fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-test-helpers/blob/master/README.md\"><b>Documentation</b></a></p>\n    </div>\n    <div class=\"col-md-6 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-test-helpers\"><i class=\"fa fa-github fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-test-helpers\"><b>Available on GitHub</b></a></p>\n    </div>\n</div>");
      
    });
  });
define("dummy/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/sl/register-test-helpers.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers/sl');
    test('dummy/tests/helpers/sl/register-test-helpers.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/sl/register-test-helpers.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/sl/synchronous.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers/sl');
    test('dummy/tests/helpers/sl/synchronous.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/sl/synchronous.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/sl/synchronous/contains.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers/sl/synchronous');
    test('dummy/tests/helpers/sl/synchronous/contains.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/sl/synchronous/contains.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/sl/utils/utils.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers/sl/utils');
    test('dummy/tests/helpers/sl/utils/utils.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/sl/utils/utils.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests');
    test('dummy/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'dummy/tests/test-helper.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/helpers/sl/synchronous/contains-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/helpers/sl/synchronous');
    test('dummy/tests/unit/helpers/sl/synchronous/contains-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/helpers/sl/synchronous/contains-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/helpers/sl/utils/utils-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/helpers/sl/utils');
    test('dummy/tests/unit/helpers/sl/utils/utils-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/helpers/sl/utils/utils-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/helpers/resolver", 
  ["ember/resolver","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("dummy/tests/helpers/sl/register-test-helpers", 
  ["ember","dummy/tests/helpers/sl/synchronous","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var contains = __dependency2__.contains;

    __exports__["default"] = function() {
        Ember.Test.registerHelper( 'contains', contains );
    }
  });
define("dummy/tests/helpers/sl/synchronous", 
  ["dummy/tests/helpers/sl/synchronous/contains","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var contains = __dependency1__["default"];

    __exports__.contains = contains;
  });
define("dummy/tests/helpers/sl/synchronous/contains", 
  ["ember","dummy/tests/helpers/sl/utils/utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var convertToArray = __dependency2__.convertToArray;
    var convertStringToArray = __dependency2__.convertStringToArray;
    var convertObjectKeysToArray = __dependency2__.convertObjectKeysToArray;
    var doArraysIntersect = __dependency2__.doArraysIntersect;

    /**
     * Test whether value(s) are contained in other values.
     *
     * Value(s) to test for can be a single value or an array of values.
     * All values must be present in the values being tested or the test will fail
     *
     * @function contains
     * @param   {Ember.Application} app (optional)
     * @param   {array|string|object} underTest
     * @param   {mixed} testFor
     * @param   {string} message
     * @returns {void}
     */
    __exports__["default"] = function() {
        var index     = ( 3 === arguments.length ) ? 0 : 1,
            underTest = arguments[index],
            testFor   = arguments[index+1],
            message   = arguments[index+2];

        underTest = convertToArray( underTest );
        testFor   = convertToArray( testFor );

        ok( doArraysIntersect( underTest, testFor ), message );
    }
  });
define("dummy/tests/helpers/sl/utils/utils", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    /**
     * Converts provided parameter into an array
     *
     * @function convertToArray
     * @param   {array|string|object} underTest
     * @throws  {Ember.assert} If not provided an Array, String or Object
     * @returns {array}
     */
    var convertToArray = function( underTest ) {
        var returnArray;

        if ( Array.isArray( underTest ) ) {
            returnArray = underTest;

        } else {
            switch( typeof underTest ) {
                case 'string':
                        returnArray = convertStringToArray( underTest );
                    break;

                case 'object':
                        returnArray = convertObjectKeysToArray( underTest );
                    break;
            }
        }

        Ember.assert( 'String, Object or Array must be supplied', 'undefined' !== typeof returnArray );

        return returnArray;
    };

    /**
     * Splits a string into an array of individual "words" as delineated by spaces
     *
     * Primarily exists to convert format of call to .prop( 'class' )
     *
     * @function convertStringToArray
     * @param   {string} underTest
     * @throws  {Ember.assert} If argument is not provided or is not a string
     * @returns {array}
     */
    var convertStringToArray = function( underTest ) {

        Ember.assert( 'String must be supplied', 'string' === typeof underTest );

        return underTest.split( ' ' );
    };

    /**
     * Returns an array containing all of the property names of an object
     *
     * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
     *
     * @function convertObjectKeysToArray
     * @param   {object} underTest
     * @throws  {Ember.assert} If argument is not provided or is not an object
     * @returns {array}
     */
    var convertObjectKeysToArray = function( underTest ) {

        Ember.assert( 'Object must be supplied', 'object' === typeof underTest );

        return Object.keys( underTest );
    };

    /**
     * [doArraysIntersect description]
     *
     * @function doArraysIntersect
     * @param  {array} underTest
     * @param  {array} testFor
     * @return {boolean}
     */
    var doArraysIntersect = function( underTest, testFor ) {

        Ember.assert( 'Parameters must be Arrays', ( Array.isArray( underTest ) && Array.isArray( testFor ) ) );

        return testFor.some( function ( v ) {
            return underTest.indexOf( v ) >= 0;
        });
    };

    __exports__.convertToArray = convertToArray;
    __exports__.convertStringToArray = convertStringToArray;
    __exports__.convertObjectKeysToArray = convertObjectKeysToArray;
    __exports__.doArraysIntersect = doArraysIntersect;
  });
define("dummy/tests/helpers/start-app", 
  ["ember","dummy/app","dummy/router","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("dummy/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("dummy/tests/test-helper", 
  ["dummy/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
define("dummy/tests/unit/helpers/sl/synchronous/contains-test", 
  ["ember-qunit","dummy/tests/helpers/sl/synchronous/contains"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var test = __dependency1__.test;

    var contains = __dependency2__["default"];

    module( 'Unit - helpers:sl/synchronous/contains' );

    test( 'it exists', function() {
      ok( contains, 'it exists' );
    });

    test( 'EMPTY TEST', function() {
        expect(0);

        /*
        The reason this test is empty is because I have yet to find a good way to test the contains() helper.

        Conceptually, all that needs to be tested is whether or not contains() returns the correct boolean response when
        provided two values to compare.  In reality, I'm torn on whether to be a little more specific in the testing,
        ensuring that doArraysIntersect() is being called, and more importantly, with the arguments in the correct order.
        These checks would be done with stubs, spies, etc.

        Even without this more robust testing, the real problem is how to correctly test the call to ok() within contains().
        I've taken a few stabs at it and never got it quite right.  One workaround would be to just have contains() return
        a boolean and then use that within your tests in an ok() or other call.  This would solve the testing problem but
        my intention for this helper was not to serve as a utility class to return a boolean, but to actually be an assertion
        just like ok(), equals(), and others.

        That specific syntax of course locks the use of this addon into QUnit (as does the use of the message parameter),
        rather than being flexible and allowing use with other test adapters such as Mocha.  So either the testing suite
        being used for the application needs to be detected when the generator is ran and the correct syntax injected or it
        should be more of utility function.  This all of course assume default configuration of the testing suites.
         */
    });
  });
define("dummy/tests/unit/helpers/sl/utils/utils-test", 
  ["ember-qunit","dummy/tests/helpers/sl/utils/utils"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var test = __dependency1__.test;

    var convertToArray = __dependency2__.convertToArray;
    var convertStringToArray = __dependency2__.convertStringToArray;
    var convertObjectKeysToArray = __dependency2__.convertObjectKeysToArray;
    var doArraysIntersect = __dependency2__.doArraysIntersect;

    module( 'Unit - utils:sl/utils/utils' );

    test( 'convertToArray() exists', function() {
      ok( convertToArray, 'it exists' );
    });

    test( 'convertStringToArray() exists', function() {
      ok( convertStringToArray, 'it exists' );
    });

    test( 'convertObjectKeysToArray() exists', function() {
      ok( convertObjectKeysToArray, 'it exists' );
    });

    test( 'doArraysIntersect() exists', function() {
      ok( doArraysIntersect, 'it exists' );
    });

    test( 'convertToArray() requires either an Array, String, or Object to be provided', function() {
        // Empty parameter

        var assertionThrown = false;

        try {
            convertToArray();
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Parameter was empty' );

        // Number parameter

        assertionThrown = false;

        try {
            convertToArray( 4 );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Parameter was not an Array, String, or Object' );

        // Array Parameter

        assertionThrown = false;

        try {
            convertToArray( [] );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( !assertionThrown, 'Parameter was an Array' );

        // String Parameter

        assertionThrown = false;

        try {
            convertToArray( 'test' );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( !assertionThrown, 'Parameter was a String' );

        // Object Parameter

        assertionThrown = false;

        try {
            convertToArray( {} );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( !assertionThrown, 'Parameter was an Object' );
    });

    test( 'convertToArray() returns expected result', function() {
        var testResults1 = convertToArray( [ 'a', 'b' ] ),
            testResults2 = convertToArray( 'testing things' ),
            testResults3 = convertToArray( { a: 1, b: 2 } );

        ok( Array.isArray( testResults1 ) );
        deepEqual( [ 'a', 'b' ], testResults1 );

        ok( Array.isArray( testResults2 ) );
        deepEqual( [ 'testing', 'things' ], testResults2 );

        ok( Array.isArray( testResults3 ) );
        deepEqual( [ 'a', 'b' ], testResults3 );
    });

    test( 'convertStringToArray() requires a string to be provided', function() {
        // Empty argument

        var assertionThrown = false;

        try {
            convertStringToArray();
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Argument was empty' );

        // Non-string argument

        assertionThrown = false;

        try {
            convertStringToArray({test:true});
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Argument was not a string' );

        // String argument

        assertionThrown = false;

        try {
            convertStringToArray('test');
        } catch( error ) {
            assertionThrown = true;
        }

        ok( !assertionThrown, 'Argument was a string' );
    });

    test( 'convertStringToArray() returns an array with a single element when passed a string without spaces', function() {
        deepEqual( convertStringToArray( 'testString' ), [ 'testString' ] );
    });

    test( 'convertStringToArray() returns an array with as many arguments as there are "words" represented in a string passed to it containing spaces', function() {
        deepEqual( convertStringToArray( 'the test string' ), [ 'the', 'test', 'string' ] );
    });

    test( 'convertObjectKeysToArray() requires an object to be provided', function() {
        // Empty argument

        var assertionThrown = false;

        try {
            convertObjectKeysToArray();
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Argument was empty' );

        // Non-object argument

        assertionThrown = false;

        try {
            convertObjectKeysToArray('test');
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Argument was not an object' );

        // Object argument

        assertionThrown = false;

        try {
            convertObjectKeysToArray({test:true});
        } catch( error ) {
            assertionThrown = true;
        }

        ok( !assertionThrown, 'Argument was an object' );
    });

    test( 'convertObjectKeysToArray() returns an array of object properties', function() {
        deepEqual( convertObjectKeysToArray( { testing: true, bird: 'duck' } ), [ 'testing', 'bird' ] );
        deepEqual( convertObjectKeysToArray( { testing2: true, bird2: { feathers: true, tasty: false } } ), [ 'testing2', 'bird2' ] );
    });

    test( 'doArraysIntersect() requires both parameters to be Arrays', function() {
        // First parameter not an Array, second one is

        var assertionThrown = false;

        try {
            doArraysIntersect( '', [] );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'First parameter was not an Array' );

        // First parameter is an Array, second one is not

        assertionThrown = false;

        try {
            doArraysIntersect( [], '' );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( assertionThrown, 'Second parameter was not an Array' );

        // Both parameters are Arrays

        assertionThrown = false;

        try {
            doArraysIntersect( [], [] );
        } catch( error ) {
            assertionThrown = true;
        }

        ok( !assertionThrown, 'Both parameters were Arrays' );
    });

    test( 'doArraysIntersect() functions as expected', function() {
        ok( doArraysIntersect( ['a','b','c'], ['a'] ), 'Single intersection into multiple' );
        ok( doArraysIntersect( ['a','b','c'], ['a','c'] ), 'Multiple intersections into multiple' );
        ok( doArraysIntersect( ['a','b','c'], ['a','c','d'] ), 'Multiple intersections into multiple with single non-intersection value' );
        ok( !doArraysIntersect( ['a','b','c'], ['d'] ), 'Single non-intersection value into multiple' );
        ok( !doArraysIntersect( ['d'], ['a'] ), 'Single non-intersection value into single, with non-intersection value' );
        ok( doArraysIntersect( ['d'], ['a', 'd', 'e'] ), 'Multiple intersections into single, with single intersection value' );
    });
  });
/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map