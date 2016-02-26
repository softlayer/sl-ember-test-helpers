"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

    'use strict';

    var App = undefined;

    Ember['default'].MODEL_FACTORY_INJECTIONS = true;

    App = Ember['default'].Application.extend({
        modulePrefix: config['default'].modulePrefix,
        podModulePrefix: config['default'].podModulePrefix,
        Resolver: Resolver['default']
    });

    loadInitializers['default'](App, config['default'].modulePrefix);

    exports['default'] = App;

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    Router.map(function () {});

    exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 20
            },
            "end": {
              "line": 12,
              "column": 71
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-home");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","btn-group pull-right");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default dropdown-toggle");
        dom.setAttribute(el5,"data-toggle","dropdown");
        dom.setAttribute(el5,"aria-expanded","false");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-reorder");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"class","caret");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","dropdown-menu");
        dom.setAttribute(el5,"role","menu");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","http://softlayer.github.io/sl-ember-test-helpers/docs");
        dom.setAttribute(el7,"target","new");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-book");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Documentation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-test-helpers/blob/master/CONTRIBUTING.md");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-cog");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Contribution Guide");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-test-helpers/stargazers");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-star");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Star Our Repo");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-test-helpers/fork");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-code-fork");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Fork Our Repo");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12 text-center");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("ember install sl-ember-test-helpers");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","https://github.com/softlayer/sl-ember-test-helpers/blob/master/LICENSE.md");
        var el6 = dom.createTextNode("MIT Licensed");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1, 1, 3, 1]),0,0);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],[],0,null,["loc",[null,[12,20],[12,83]]]],
        ["content","outlet",["loc",[null,[22,4],[22,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("sl-ember-test-helpers 1.11.1");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","lead");
        var el4 = dom.createTextNode("An Ember CLI Addon that provides and registers test helpers for use in the testing of your application.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-6 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://softlayer.github.io/sl-ember-test-helpers/docs");
        dom.setAttribute(el4,"target","new");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-book fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://softlayer.github.io/sl-ember-test-helpers/docs");
        dom.setAttribute(el4,"target","new");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Documentation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-6 text-center");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-test-helpers");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-github fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-test-helpers");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Available on GitHub");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

    'use strict';

    var resolver = Resolver['default'].create();

    resolver.namespace = {
        modulePrefix: config['default'].modulePrefix,
        podModulePrefix: config['default'].podModulePrefix
    };

    exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });

});
define('dummy/tests/helpers/sl/register-test-helpers', ['exports', 'ember', 'dummy/tests/helpers/sl/synchronous'], function (exports, Ember, synchronous) {

    'use strict';

    exports['default'] = function () {
        Ember['default'].Test.registerHelper('contains', synchronous.contains);
        Ember['default'].Test.registerHelper('Ajax', synchronous.AjaxHelper);
        Ember['default'].Test.registerHelper('requires', synchronous.requires);
        Ember['default'].Test.registerHelper('globalLibraries', synchronous.globalLibraries);
    }

});
define('dummy/tests/helpers/sl/synchronous/ajax', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var AjaxHelper = (function () {
        function AjaxHelper() {
            _classCallCheck(this, AjaxHelper);
        }

        _createClass(AjaxHelper, null, [{
            key: 'begin',

            /**
             * Emulate the beginning of an AJAX request
             *
             * @function
             * @static
             * @param {String} [endpoint]
             * @returns {undefined}
             */
            value: function begin(endpoint) {
                Ember['default'].run(function () {
                    if (endpoint) {
                        Ember['default'].$(document).trigger('ajaxSend', [null, { url: endpoint }]);
                    } else {
                        Ember['default'].$(document).trigger('ajaxStart');
                    }
                });
            }

            /**
             * Emulate the conclusion of an AJAX request
             *
             * @function
             * @static
             * @param {String} [endpoint]
             * @returns {undefined}
             */
        }, {
            key: 'end',
            value: function end(endpoint) {
                Ember['default'].run(function () {
                    if (endpoint) {
                        Ember['default'].$(document).trigger('ajaxComplete', [null, { url: endpoint }]);
                    } else {
                        Ember['default'].$(document).trigger('ajaxStop');
                    }
                });
            }
        }]);

        return AjaxHelper;
    })();

    exports['default'] = AjaxHelper;

});
define('dummy/tests/helpers/sl/synchronous/contains', ['exports', 'ember', 'dummy/tests/helpers/sl/utils/utils'], function (exports, Ember, utils) {

    'use strict';

    exports['default'] = function () {
        var index = 3 === arguments.length ? 1 : 0;
        var underTest = arguments[index];
        var testFor = arguments[index + 1];

        /* jshint ignore:start */
        Ember['default'].assert('First non-optional argument must be an array, string or object', ('object' === Ember['default'].typeOf(underTest) || 'string' === Ember['default'].typeOf(underTest) || 'array' === Ember['default'].typeOf(underTest)) && 'symbol' !== typeof underTest);

        Ember['default'].assert('Second non-optional argument must be an array, string or object', ('object' === Ember['default'].typeOf(testFor) || 'string' === Ember['default'].typeOf(testFor) || 'array' === Ember['default'].typeOf(testFor)) && 'symbol' !== typeof testFor);
        /* jshint ignore:end */

        return utils.doArraysIntersect(utils.convertToArray(underTest), utils.convertToArray(testFor));
    }

});
define('dummy/tests/helpers/sl/synchronous/global-libraries', ['exports', 'ember', 'sinon'], function (exports, Ember, sinon) {

    'use strict';

    exports.setupSpies = setupSpies;
    exports.triggerEvents = triggerEvents;
    exports.called = called;
    exports.restoreSpies = restoreSpies;
    exports.resetSpies = resetSpies;

    var called = undefined;
    var jqueryAliasSpy = undefined;
    var jquerySpy = undefined;
    var emberJquerySpy = undefined;

    function setupSpies() {
        exports.jqueryAliasSpy = jqueryAliasSpy = sinon['default'].spy(window, '$');
        exports.jquerySpy = jquerySpy = sinon['default'].spy(window, 'jQuery');
        exports.emberJquerySpy = emberJquerySpy = sinon['default'].spy(Ember['default'], '$');
    }

    function triggerEvents(component) {
        Ember['default'].run(function () {
            ['willInsertElement', 'didInsertElement', 'willClearRender', 'willDestroyElement'].map(function (event) {
                component.trigger(event);
            });
        });
    }

    function called() {
        return jqueryAliasSpy.called || jquerySpy.called || emberJquerySpy.called;
    }

    function restoreSpies() {
        window.$.restore();
        window.jQuery.restore();
        Ember['default'].$.restore();
    }

    function resetSpies() {
        jqueryAliasSpy.reset();
        jquerySpy.reset();
        emberJquerySpy.reset();
    }

    exports.jqueryAliasSpy = jqueryAliasSpy;
    exports.jquerySpy = jquerySpy;
    exports.emberJquerySpy = emberJquerySpy;

});
define('dummy/tests/helpers/sl/synchronous/requires', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var requiresHelper = function requiresHelper(methodUnderTest, requiredTypes) {
        var typesToTest = {
            'number': {
                required: false,
                testValue: 123987465,
                message: 'Parameter was a number'
            },
            'string': {
                required: false,
                testValue: 'testString',
                message: 'Parameter was a string'
            },
            'array': {
                required: false,
                testValue: [],
                message: 'Parameter was an array'
            },
            'object': {
                required: false,
                testValue: {},
                message: 'Parameter was an object'
            },
            'function': {
                required: false,
                testValue: function testValue() {},
                message: 'Parameter was a function'
            },
            'undefined': {
                required: false,
                testValue: undefined,
                message: 'Parameter was undefined'
            },
            'boolean': {
                required: false,
                testValue: true,
                message: 'Parameter was a boolean'
            },
            'null': {
                required: false,
                testValue: null,
                message: 'Parameter was null'
            }
        };

        Ember['default'].assert('First argument must be a function', 'function' === Ember['default'].typeOf(methodUnderTest));
        Ember['default'].assert('Second argument must be an array', 'array' === Ember['default'].typeOf(requiredTypes));

        // Set required parameter types
        requiredTypes.forEach(function (item) {
            typesToTest[item]['required'] = true;
        });

        var testsThatHaveFailed = [];
        var property = undefined;

        // Test each parameter type
        for (property in typesToTest) {
            if (typesToTest.hasOwnProperty(property)) {
                // Reset flag
                var assertionThrown = undefined;
                assertionThrown = false;

                // Assign cleaner object reference
                var parameter = typesToTest[property];

                // Test parameter
                try {
                    methodUnderTest(parameter['testValue']);
                } catch (error) {
                    assertionThrown = true;
                }

                var assertionPassed = undefined;
                assertionPassed = parameter['required'] ? !assertionThrown : assertionThrown;

                if (!assertionPassed) {
                    testsThatHaveFailed.push(parameter['message']);
                }
            }
        }

        return {
            requires: 0 === testsThatHaveFailed.length,
            messages: testsThatHaveFailed.join('; ')
        };
    };

    exports['default'] = requiresHelper;

});
define('dummy/tests/helpers/sl/synchronous', ['exports', 'dummy/tests/helpers/sl/synchronous/ajax', 'dummy/tests/helpers/sl/synchronous/contains', 'dummy/tests/helpers/sl/synchronous/requires', 'dummy/tests/helpers/sl/synchronous/global-libraries'], function (exports, AjaxHelper, contains, requires, globalLibraries) {

	'use strict';



	exports.AjaxHelper = AjaxHelper['default'];
	exports.contains = contains['default'];
	exports.requires = requires['default'];
	exports.globalLibraries = globalLibraries;

});
define('dummy/tests/helpers/sl/utils/utils', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var convertToArray = function convertToArray(underTest) {

        /* jshint ignore:start */
        Ember['default'].assert('Array, String, or Object must be supplied', ('array' === Ember['default'].typeOf(underTest) || 'string' === Ember['default'].typeOf(underTest) || 'object' === Ember['default'].typeOf(underTest)) && 'symbol' !== typeof underTest);
        /* jshint ignore:end */

        var returnArray = underTest;

        switch (Ember['default'].typeOf(underTest)) {
            case 'array':
                returnArray = underTest;
                break;

            case 'string':
                returnArray = convertStringToArray(underTest);
                break;

            case 'object':
                returnArray = convertObjectKeysToArray(underTest);
                break;
        }

        return returnArray;
    };

    /**
     * Splits a string into an array of individual "words" as delineated by spaces
     *
     * Primarily exists to convert format of call to .prop( 'class' )
     *
     * @function
     * @param {String} underTest
     * @throws {ember.assert} If argument is not provided or is not a string
     * @returns {Array}
     */
    var convertStringToArray = function convertStringToArray(underTest) {

        Ember['default'].assert('String must be supplied', 'string' === Ember['default'].typeOf(underTest));

        return underTest.split(' ');
    };

    /**
     * Returns an array containing all of the property names of an object
     *
     * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
     *
     * @function
     * @param {Object} underTest
     * @throws {ember.assert} If argument is not provided or is not an object
     * @returns {Array}
     */
    var convertObjectKeysToArray = function convertObjectKeysToArray(underTest) {

        /* jshint ignore:start */
        Ember['default'].assert('Object must be supplied', 'object' === Ember['default'].typeOf(underTest) && 'array' !== Ember['default'].typeOf(underTest) && 'symbol' !== typeof underTest);
        /* jshint ignore:end */

        return Object.keys(underTest);
    };

    /**
     * Whether at least one element of the array exists in the other
     *
     * @function
     * @param {Array} underTest
     * @param {Array} testFor
     * @returns {Boolean}
     */
    var doArraysIntersect = function doArraysIntersect(underTest, testFor) {

        Ember['default'].assert('Parameters must be Arrays', 'array' === Ember['default'].typeOf(underTest) && 'array' === Ember['default'].typeOf(testFor));

        return testFor.some(function (v) {
            return underTest.indexOf(v) >= 0;
        });
    };

    exports.convertToArray = convertToArray;
    exports.convertStringToArray = convertStringToArray;
    exports.convertObjectKeysToArray = convertObjectKeysToArray;
    exports.doArraysIntersect = doArraysIntersect;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

    'use strict';



    exports['default'] = startApp;
    function startApp(attrs) {
        var application = undefined;

        var attributes = Ember['default'].merge({}, config['default'].APP);
        attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

        Ember['default'].run(function () {
            application = Application['default'].create(attributes);
            application.setupForTesting();
            application.injectTestHelpers();
        });

        return application;
    }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/ajax-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/sl/synchronous/ajax', 'sinon'], function (Ember, ember_qunit, AjaxHelper, sinon) {

    'use strict';

    module('Unit | Helper | sl/synchronous/ajax');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(AjaxHelper['default'], 'it exists');
    });

    ember_qunit.test('begin() with no parameter triggers "ajaxStart" event on document', function (assert) {
        var spy = sinon['default'].spy(Ember['default'].$.prototype, 'trigger');

        AjaxHelper['default'].begin();

        assert.strictEqual(spy.args[0][0], 'ajaxStart');

        Ember['default'].$.prototype.trigger.restore();
    });

    ember_qunit.test('begin() with parameter triggers "ajaxSend" event on document', function (assert) {
        var spy = sinon['default'].spy(Ember['default'].$.prototype, 'trigger');

        AjaxHelper['default'].begin('testEndpoint');

        assert.strictEqual(spy.args[0][0], 'ajaxSend');
        assert.strictEqual(spy.args[0][1][1].url, 'testEndpoint');

        Ember['default'].$.prototype.trigger.restore();
    });

    ember_qunit.test('end() with no parameter triggers "ajaxStop" event on document', function (assert) {
        var spy = sinon['default'].spy(Ember['default'].$.prototype, 'trigger');

        AjaxHelper['default'].end();

        assert.strictEqual(spy.args[0][0], 'ajaxStop');

        Ember['default'].$.prototype.trigger.restore();
    });

    ember_qunit.test('end() with parameter triggers "ajaxComplete" event on document', function (assert) {
        var spy = sinon['default'].spy(Ember['default'].$.prototype, 'trigger');

        AjaxHelper['default'].end('testEndpoint');

        assert.strictEqual(spy.args[0][0], 'ajaxComplete');
        assert.strictEqual(spy.args[0][1][1].url, 'testEndpoint');

        Ember['default'].$.prototype.trigger.restore();
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/ajax-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers/sl/synchronous');
  QUnit.test('unit/helpers/sl/synchronous/ajax-test.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sl/synchronous/ajax-test.js should pass jshint.');
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/contains-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/sl/synchronous/contains'], function (Ember, ember_qunit, contains) {

    'use strict';

    var utils = require('dummy/tests/helpers/sl/utils/utils');

    module('Unit | Helper | sl/synchronous/contains');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(contains['default'], 'it exists');
    });

    ember_qunit.test('First non-optional argument must be an array, string or object', function (assert) {
        var testPropertyOne = Ember['default'].Object.create({
            parameter: 'null'
        });

        var testPropertyTwo = Ember['default'].Object.create({
            parameter: 'null'
        });

        var callContains = function callContains() {
            return contains['default'](testPropertyOne.parameter, testPropertyTwo.parameter);
        };

        // Number
        testPropertyOne.set('parameter', 2);
        testPropertyTwo.set('parameter', []);

        assert.throws(callContains, 'First parameter was a number');

        // function
        testPropertyOne.set('parameter', function () {});
        testPropertyTwo.set('parameter', []);

        assert.throws(callContains, 'First parameter was a function');

        // boolean
        testPropertyOne.set('parameter', false);
        testPropertyTwo.set('parameter', []);

        assert.throws(callContains, 'First parameter was false');

        // undefined
        testPropertyOne.set('parameter', undefined);
        testPropertyTwo.set('parameter', []);

        assert.throws(callContains, 'First parameter was undefined');

        // Array
        testPropertyOne.set('parameter', ['2']);
        testPropertyTwo.set('parameter', ['2']);

        assert.ok(callContains(), 'First parameter was an array');

        // Object
        testPropertyOne.set('parameter', { test: 'test' });
        testPropertyTwo.set('parameter', { test: 'test' });

        assert.ok(callContains(), 'First parameter was an object');

        // String
        testPropertyOne.set('parameter', 'testString');
        testPropertyTwo.set('parameter', 'testString');

        assert.ok(callContains(), 'First parameter was a string');
    });

    ember_qunit.test('Second non-optional argument must be an array, string or object', function (assert) {
        var testPropertyOne = Ember['default'].Object.create({
            parameter: 'null'
        });

        var testPropertyTwo = Ember['default'].Object.create({
            parameter: 'null'
        });

        var callContains = function callContains() {
            return contains['default'](testPropertyOne.parameter, testPropertyTwo.parameter);
        };

        // Number
        testPropertyOne.set('parameter', []);
        testPropertyTwo.set('parameter', 2);

        assert.throws(callContains, 'Second parameter was a number');

        // function
        testPropertyOne.set('parameter', []);
        testPropertyTwo.set('parameter', function () {});

        assert.throws(callContains, 'second parameter was a function');

        // boolean
        testPropertyOne.set('parameter', []);
        testPropertyTwo.set('parameter', false);

        assert.throws(callContains, 'second parameter was false');

        // undefined
        testPropertyOne.set('parameter', []);
        testPropertyTwo.set('parameter', undefined);

        assert.throws(callContains, 'second parameter was undefined');

        // Array
        testPropertyOne.set('parameter', ['2']);
        testPropertyTwo.set('parameter', ['2']);

        assert.ok(callContains(), 'First parameter was an array');

        // Object
        testPropertyOne.set('parameter', { test: 'test' });
        testPropertyTwo.set('parameter', { test: 'test' });

        assert.ok(callContains(), 'First parameter was an object');

        // String
        testPropertyOne.set('parameter', 'testString');
        testPropertyTwo.set('parameter', 'testString');

        assert.ok(callContains(), 'First parameter was a string');
    });

    ember_qunit.test('Returns value from call to doArraysIntersect()', function (assert) {
        var spy = window.sinon.spy(utils, 'doArraysIntersect');

        contains['default']([], []);

        assert.ok(spy.calledOnce, 'doArraysIntersect() was called');

        utils.doArraysIntersect.restore();
    });

    ember_qunit.test('Arguments are passed to doArraysIntersect() in the correct order', function (assert) {
        var spy = window.sinon.spy(utils, 'doArraysIntersect');

        contains['default']('b', ['d', 'e']);

        assert.strictEqual(spy.args[0][0][0], 'b', 'First argument');

        assert.deepEqual(spy.args[0][1], ['d', 'e'], 'Second argument');

        utils.doArraysIntersect.restore();
    });

    ember_qunit.test('Returns a boolean', function (assert) {
        var response = undefined;

        response = contains['default']('b', ['d', 'e']);

        assert.propEqual(response, false, 'Is boolean false');

        response = contains['default'](['d', 'e'], 'e');

        assert.propEqual(response, true, 'Is boolean true');
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/contains-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers/sl/synchronous');
  QUnit.test('unit/helpers/sl/synchronous/contains-test.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sl/synchronous/contains-test.js should pass jshint.');
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/global-libaries-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/sl/synchronous/global-libraries', 'sinon'], function (Ember, ember_qunit, globalLibraries, sinon) {

    'use strict';

    module('Unit | Helpers | sl/synchronous/global-libraries');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(globalLibraries, 'it exists');
    });

    ember_qunit.test('Passes when global libraries are not referenced', function (assert) {
        var component = Ember['default'].Object.extend().create({
            trigger: function trigger() {}
        });

        globalLibraries.setupSpies();

        globalLibraries.triggerEvents(component);

        assert.notOk(globalLibraries.called());

        globalLibraries.restoreSpies();
    });

    ember_qunit.test('triggerEvents triggers respective events', function (assert) {
        var events = {
            'willInsertElement': sinon['default'].spy(),
            'didInsertElement': sinon['default'].spy(),
            'willClearRender': sinon['default'].spy(),
            'willDestroyElement': sinon['default'].spy()
        };

        var component = {
            trigger: function trigger(eventName) {
                this.events[eventName]();
            },

            events: events
        };

        globalLibraries.triggerEvents(component);

        Object.keys(events).forEach(function (eventName) {
            var spy = events[eventName];
            assert.ok(spy.called, eventName + ' was triggered');
        });
    });

    ember_qunit.test('called() returns true when $ is referenced', function (assert) {
        globalLibraries.setupSpies();

        window.$();

        assert.ok(globalLibraries.called());

        globalLibraries.restoreSpies();
    });

    ember_qunit.test('called() returns true when jQuery is referenced', function (assert) {
        globalLibraries.setupSpies();

        window.jQuery();

        assert.ok(globalLibraries.called());

        globalLibraries.restoreSpies();
    });

    ember_qunit.test('called() returns true when Ember.$ is referenced', function (assert) {
        globalLibraries.setupSpies();

        Ember['default'].$();

        assert.ok(globalLibraries.called());

        globalLibraries.restoreSpies();
    });

    ember_qunit.test('called() returns false when global libraries are not referenced', function (assert) {
        globalLibraries.setupSpies();

        assert.notOk(globalLibraries.called());

        globalLibraries.restoreSpies();
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/global-libaries-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers/sl/synchronous');
  QUnit.test('unit/helpers/sl/synchronous/global-libaries-test.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sl/synchronous/global-libaries-test.js should pass jshint.');
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/requires-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/sl/synchronous/requires'], function (Ember, ember_qunit, requires) {

    'use strict';

    module('Unit | Helpers | sl/synchronous/requires');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(requires['default'], 'it exists');
    });

    ember_qunit.test('First argument must be a function', function (assert) {
        var testPropertyOne = Ember['default'].Object.create({
            parameter: undefined
        });

        var testPropertyTwo = Ember['default'].Object.create({
            parameter: undefined
        });

        var callRequires = function callRequires() {
            return requires['default'](testPropertyOne.parameter, testPropertyTwo.parameter);
        };

        // Number
        testPropertyOne.set('parameter', 123);
        testPropertyTwo.set('parameter', []);

        assert.throws(callRequires, 'First parameter was a number');

        // String
        testPropertyOne.set('parameter', 'testString');

        assert.throws(callRequires, 'First parameter was a string');

        // Array
        testPropertyOne.set('parameter', []);

        assert.throws(callRequires, 'First parameter was an array');

        // Object
        testPropertyOne.set('parameter', {});

        assert.throws(callRequires, 'First parameter was an object');

        // Undefined
        testPropertyOne.set('parameter', undefined);

        assert.throws(callRequires, 'First parameter was undefined');

        // Boolean
        testPropertyOne.set('parameter', false);

        assert.throws(callRequires, 'First parameter was a boolean');

        // Function
        testPropertyOne.set('parameter', function () {});

        assert.ok(callRequires(), 'First parameter was a function');
    });

    ember_qunit.test('Second argument must be an array', function (assert) {
        var testPropertyOne = Ember['default'].Object.create({
            parameter: undefined
        });

        var testPropertyTwo = Ember['default'].Object.create({
            parameter: undefined
        });

        var callRequires = function callRequires() {
            return requires['default'](testPropertyOne.parameter, testPropertyTwo.parameter);
        };

        // Number
        testPropertyOne.set('parameter', function () {});
        testPropertyTwo.set('parameter', 123);

        assert.throws(callRequires, 'Second parameter was a number');

        // String
        testPropertyTwo.set('parameter', 'testString');

        assert.throws(callRequires, 'Second parameter was a string');

        // Object
        testPropertyTwo.set('parameter', {});

        assert.throws(callRequires, 'Second parameter was an object');

        // Function
        testPropertyTwo.set('parameter', function () {});

        assert.throws(callRequires, 'Second parameter was a function');

        // Undefined
        testPropertyTwo.set('parameter', undefined);

        assert.throws(callRequires, 'Second parameter was undefined');

        // Boolean
        testPropertyTwo.set('parameter', false);

        assert.throws(callRequires, 'Second parameter was a boolean');

        // Array
        testPropertyTwo.set('parameter', []);

        assert.ok(callRequires(), 'Second parameter was an array');
    });

    ember_qunit.test('Return type', function (assert) {
        var testFunction = function testFunction(first) {
            Ember['default'].assert('Test argument must be a function or boolean', 'function' === Ember['default'].typeOf(first) || 'boolean' === Ember['default'].typeOf(first));
        };

        var returnTypeTest = requires['default'](testFunction, ['function', 'boolean']);

        assert.deepEqual(returnTypeTest, { requires: true, messages: '' }, 'Returns expected object');
    });

    ember_qunit.test('Functions as expected', function (assert) {
        var testFunction = function testFunction(first) {
            Ember['default'].assert('Test argument must be a function or boolean', 'function' === Ember['default'].typeOf(first) || 'boolean' === Ember['default'].typeOf(first));
        };

        var functionTest = requires['default'](testFunction, ['function', 'boolean']);

        assert.ok(functionTest.requires, 'Functioned as expected when passed desired argument types: ' + functionTest.messages);

        functionTest = requires['default'](testFunction, ['function', 'boolean', 'string']);

        assert.ok(!functionTest.requires, 'Functioned as expected when passed undesired argument types: ' + functionTest.messages);
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/requires-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers/sl/synchronous');
  QUnit.test('unit/helpers/sl/synchronous/requires-test.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sl/synchronous/requires-test.js should pass jshint.');
  });

});
define('dummy/tests/unit/helpers/sl/utils/utils-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/sl/utils/utils', 'dummy/tests/helpers/sl/synchronous/requires'], function (Ember, ember_qunit, utils, requires) {

    'use strict';

    module('Unit | Utils | sl/utils/utils');

    ember_qunit.test('convertToArray() exists', function (assert) {
        assert.ok(utils.convertToArray, 'it exists');
    });

    ember_qunit.test('convertStringToArray() exists', function (assert) {
        assert.ok(utils.convertStringToArray, 'it exists');
    });

    ember_qunit.test('convertObjectKeysToArray() exists', function (assert) {
        assert.ok(utils.convertObjectKeysToArray, 'it exists');
    });

    ember_qunit.test('doArraysIntersect() exists', function (assert) {
        assert.ok(utils.doArraysIntersect, 'it exists');
    });

    ember_qunit.test('convertToArray() requires either an Array, String, or Object to be provided', function (assert) {
        var properties = Ember['default'].Object.create({
            parameters: undefined
        });

        var callConvertToArray = function callConvertToArray() {
            return utils.convertToArray(properties.parameters);
        };

        // null
        properties.set('parameters', null);

        assert.throws(callConvertToArray, 'property was null');

        // undefined
        properties.set('parameters', undefined);

        assert.throws(callConvertToArray, 'property was undefined');

        // Boolean
        properties.set('parameters', false);

        assert.throws(callConvertToArray, 'property was a Boolean');

        // Number
        properties.set('parameters', 132);

        assert.throws(callConvertToArray, 'property was a Number');

        // Function
        properties.set('parameters', function () {});

        assert.throws(callConvertToArray, 'property was a Function');

        // Array
        properties.set('parameters', []);

        assert.ok(callConvertToArray(), 'property was an Array');

        // String
        properties.set('parameters', 'test string');

        assert.ok(callConvertToArray(), 'property was a String');

        // Object
        properties.set('parameters', {});

        assert.ok(callConvertToArray(), 'property was an Object');
    });

    ember_qunit.test('convertToArray() returns expected result', function (assert) {
        var testResults1 = utils.convertToArray(['a', 'b']);
        var testResults2 = utils.convertToArray('testing things');
        var testResults3 = utils.convertToArray({ a: 1, b: 2 });

        assert.ok('array' === Ember['default'].typeOf(testResults1));
        assert.deepEqual(['a', 'b'], testResults1);

        assert.ok('array' === Ember['default'].typeOf(testResults2));
        assert.deepEqual(['testing', 'things'], testResults2);

        assert.ok('array' === Ember['default'].typeOf(testResults3));
        assert.deepEqual(['a', 'b'], testResults3);
    });

    ember_qunit.test('convertStringToArray() requires a string to be provided', function (assert) {
        var properties = Ember['default'].Object.create({
            parameters: undefined
        });

        var callConvertStringToArray = function callConvertStringToArray() {
            return utils.convertStringToArray(properties.parameters);
        };

        // null
        properties.set('parameters', null);

        assert.throws(callConvertStringToArray, 'property was null');

        // undefined
        properties.set('parameters', undefined);

        assert.throws(callConvertStringToArray, 'property was undefined');

        // Boolean
        properties.set('parameters', false);

        assert.throws(callConvertStringToArray, 'property was a Boolean');

        // Number
        properties.set('parameters', 132);

        assert.throws(callConvertStringToArray, 'property was a Number');

        // Function
        properties.set('parameters', function () {});

        assert.throws(callConvertStringToArray, 'property was a Function');

        // Array
        properties.set('parameters', []);

        assert.throws(callConvertStringToArray, 'property was an Array');

        // Object
        properties.set('parameters', {});

        assert.throws(callConvertStringToArray, 'property was an Object');

        // String
        properties.set('parameters', 'test string');

        assert.ok(callConvertStringToArray(), 'property was a String');
    });

    var testName1 = 'convertStringToArray() returns an array with a single' + 'element when passed a string without spaces';

    ember_qunit.test(testName1, function (assert) {
        assert.deepEqual(utils.convertStringToArray('testString'), ['testString']);
    });

    var testName2 = 'convertStringToArray() returns an array with as many elements as there' + 'are "words" represented in a string passed to it containing spaces';

    ember_qunit.test(testName2, function (assert) {
        assert.deepEqual(utils.convertStringToArray('the test string'), ['the', 'test', 'string']);
    });

    ember_qunit.test('convertObjectKeysToArray() requires an object to be provided', function (assert) {
        var requiredObjectTest = requires['default'](utils.convertObjectKeysToArray, ['object']);

        assert.ok(requiredObjectTest.requires, requiredObjectTest.messages);
    });

    ember_qunit.test('convertObjectKeysToArray() returns an array of object properties', function (assert) {
        assert.deepEqual(utils.convertObjectKeysToArray({
            testing: true,
            bird: 'duck'
        }), ['testing', 'bird']);
        assert.deepEqual(utils.convertObjectKeysToArray({
            testing2: true,
            bird2: {
                feathers: true,
                tasty: false
            }
        }), ['testing2', 'bird2']);
    });

    ember_qunit.test('doArraysIntersect() requires both parameters to be Arrays', function (assert) {
        var testPropertyOne = Ember['default'].Object.create({
            parameter: undefined
        });

        var testPropertyTwo = Ember['default'].Object.create({
            parameter: undefined
        });

        var callDoArraysIntersect = function callDoArraysIntersect() {
            return utils.doArraysIntersect(testPropertyOne.parameter, testPropertyTwo.parameter);
        };

        // Second Parameter is not an array
        testPropertyOne.set('parameter', []);
        testPropertyTwo.set('parameter', '');

        assert.throws(callDoArraysIntersect, 'Second parameter was a string');

        // First Parameter is not an array
        testPropertyOne.set('parameter', '');
        testPropertyTwo.set('parameter', []);

        assert.throws(callDoArraysIntersect, 'First parameter was a string');

        // Both Parameters are arrays
        testPropertyOne.set('parameter', ['a']);
        testPropertyTwo.set('parameter', ['a']);

        assert.ok(callDoArraysIntersect(), 'Parameters were both array');
    });

    ember_qunit.test('doArraysIntersect() functions as expected', function (assert) {
        assert.ok(utils.doArraysIntersect(['a', 'b', 'c'], ['a']), 'Single intersection into multiple');

        assert.ok(utils.doArraysIntersect(['a', 'b', 'c'], ['a', 'c']), 'Multiple intersections into multiple');

        assert.ok(utils.doArraysIntersect(['a', 'b', 'c'], ['a', 'c', 'd']), 'Multiple intersections into multiple with single non-intersection value');

        assert.ok(!utils.doArraysIntersect(['a', 'b', 'c'], ['d']), 'Single non-intersection value into multiple');

        assert.ok(!utils.doArraysIntersect(['d'], ['a']), 'Single non-intersection value into single, with non-intersection value');

        assert.ok(utils.doArraysIntersect(['d'], ['a', 'd', 'e']), 'Multiple intersections into single, with single intersection value');
    });

});
define('dummy/tests/unit/helpers/sl/utils/utils-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/helpers/sl/utils');
  QUnit.test('unit/helpers/sl/utils/utils-test.js should pass jshint', function(assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/sl/utils/utils-test.js should pass jshint.');
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

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
  require("dummy/app")["default"].create({"name":"sl-ember-test-helpers","version":"v1.11.1"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
