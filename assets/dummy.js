/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

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

  exports['default'] = Router.map(function () {});

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-home");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
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
        dom.setAttribute(el7,"href","https://github.com/softlayer/sl-ember-test-helpers/blob/master/README.md");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-wrench");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Get Started");
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
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 1, 1, 3, 1]),0,0);
        var morph1 = dom.createMorphAt(element0,3,3);
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
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
        var el4 = dom.createTextNode("sl-ember-test-helpers");
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
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-test-helpers/blob/master/README.md");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-book fa-5x");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","https://github.com/softlayer/sl-ember-test-helpers/blob/master/README.md");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Documentation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
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
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
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

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/sl/register-test-helpers', ['exports', 'ember', 'dummy/tests/helpers/sl/synchronous'], function (exports, Ember, synchronous) {

    'use strict';

    exports['default'] = function () {
        Ember['default'].Test.registerHelper('contains', synchronous.contains);
        Ember['default'].Test.registerHelper('ajax', synchronous.ajax);
        Ember['default'].Test.registerHelper('requires', synchronous.requires);
    }

});
define('dummy/tests/helpers/sl/synchronous', ['exports', 'dummy/tests/helpers/sl/synchronous/contains', 'dummy/tests/helpers/sl/synchronous/ajax', 'dummy/tests/helpers/sl/synchronous/requires'], function (exports, contains, ajax, requires) {

	'use strict';



	exports.contains = contains['default'];
	exports.ajax = ajax['default'];
	exports.requires = requires['default'];

});
define('dummy/tests/helpers/sl/synchronous/ajax', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var AjaxHelper = function AjaxHelper() {};

    /**
     * Emulate the beginning of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.begin = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger('ajaxSend', [null, { url: endpoint }]);
            } else {
                $(document).trigger('ajaxStart');
            }
        });
    };

    /**
     * Emulate the conclusion of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.end = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger('ajaxComplete', [null, { url: endpoint }]);
            } else {
                $(document).trigger('ajaxStop');
            }
        });
    };

    var helper = new AjaxHelper();

    exports['default'] = helper;

});
define('dummy/tests/helpers/sl/synchronous/contains', ['exports', 'ember', 'dummy/tests/helpers/sl/utils/utils'], function (exports, Ember, utils) {

    'use strict';

    exports['default'] = function () {
        var index = 3 === arguments.length ? 1 : 0,
            underTest = arguments[index],
            testFor = arguments[index + 1];

        Ember['default'].assert('First non-optional argument must be an array, string or object', 'object' === typeof underTest || 'string' === typeof underTest || Array.isArray(underTest));

        Ember['default'].assert('Second non-optional argument must be an array, string or object', 'object' === typeof testFor || 'string' === typeof testFor || Array.isArray(testFor));

        return utils.doArraysIntersect(utils.convertToArray(underTest), utils.convertToArray(testFor));
    }

});
define('dummy/tests/helpers/sl/synchronous/requires', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = function (methodUnderTest, requiredTypes) {
        var typesToTest = {
            number: {
                required: false,
                testValue: 123987465,
                message: 'Parameter was a number'
            },
            string: {
                required: false,
                testValue: 'testString',
                message: 'Parameter was a string'
            },
            array: {
                required: false,
                testValue: [],
                message: 'Parameter was an array'
            },
            object: {
                required: false,
                testValue: {},
                message: 'Parameter was an object'
            },
            'function': {
                required: false,
                testValue: function testValue() {},
                message: 'Parameter was a function'
            },
            undefined: {
                required: false,
                testValue: undefined,
                message: 'Parameter was undefined'
            },
            boolean: {
                required: false,
                testValue: true,
                message: 'Parameter was a boolean'
            }
        },
            testsThatHaveFailed = [],
            assertionThrown,
            assertionPassed,
            property,
            parameter;

        Ember['default'].assert('First argument must be a function', 'function' === typeof methodUnderTest);
        Ember['default'].assert('Second argument must be an array', Array.isArray(requiredTypes));

        // Set required parameter types
        requiredTypes.forEach(function (item) {
            typesToTest[item].required = true;
        });

        // Test each parameter type
        for (property in typesToTest) {
            if (typesToTest.hasOwnProperty(property)) {

                // Reset flag
                assertionThrown = false;

                // Assign cleaner object reference
                parameter = typesToTest[property];

                // Test parameter
                try {
                    methodUnderTest(parameter.testValue);
                } catch (error) {
                    assertionThrown = true;
                }

                assertionPassed = parameter.required ? !assertionThrown : assertionThrown;

                if (!assertionPassed) {
                    testsThatHaveFailed.push(parameter.message);
                }
            }
        }

        return {
            requires: 0 === testsThatHaveFailed.length ? true : false,
            messages: testsThatHaveFailed.join('; ')
        };
    }

});
define('dummy/tests/helpers/sl/utils/utils', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var convertToArray = function convertToArray(underTest) {
        var returnArray;

        if (Array.isArray(underTest)) {
            returnArray = underTest;
        } else {
            switch (typeof underTest) {
                case 'string':
                    returnArray = convertStringToArray(underTest);
                    break;

                case 'object':
                    returnArray = convertObjectKeysToArray(underTest);
                    break;
            }
        }

        Ember['default'].assert('String, Object or Array must be supplied', 'undefined' !== typeof returnArray);

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
    var convertStringToArray = function convertStringToArray(underTest) {

        Ember['default'].assert('String must be supplied', 'string' === typeof underTest);

        return underTest.split(' ');
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
    var convertObjectKeysToArray = function convertObjectKeysToArray(underTest) {

        Ember['default'].assert('Object must be supplied', 'object' === typeof underTest && !Array.isArray(underTest));

        return Object.keys(underTest);
    };

    /**
     * [doArraysIntersect description]
     *
     * @function doArraysIntersect
     * @param  {array} underTest
     * @param  {array} testFor
     * @return {boolean}
     */
    var doArraysIntersect = function doArraysIntersect(underTest, testFor) {

        Ember['default'].assert('Parameters must be Arrays', Array.isArray(underTest) && Array.isArray(testFor));

        return testFor.some(function (v) {
            return underTest.indexOf(v) >= 0;
        });
    };

    exports.convertToArray = convertToArray;
    exports.convertStringToArray = convertStringToArray;
    exports.convertObjectKeysToArray = convertObjectKeysToArray;
    exports.doArraysIntersect = doArraysIntersect;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

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

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/ajax-test', ['ember-qunit', 'dummy/tests/helpers/sl/synchronous/ajax'], function (ember_qunit, ajax) {

    'use strict';

    module('Unit - helpers:sl/synchronous/ajax');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(ajax['default'], 'it exists');
    });

    ember_qunit.test('begin() with no parameter triggers "ajaxStart" event on document', function (assert) {
        var spy = sinon.spy($.prototype, 'trigger');

        ajax['default'].begin();

        assert.equal(spy.args[0][0], 'ajaxStart');

        $.prototype.trigger.restore();
    });

    ember_qunit.test('begin() with parameter triggers "ajaxSend" event on document', function (assert) {
        var spy = sinon.spy($.prototype, 'trigger');

        ajax['default'].begin('testEndpoint');

        assert.equal(spy.args[0][0], 'ajaxSend');
        assert.equal(spy.args[0][1][1].url, 'testEndpoint');

        $.prototype.trigger.restore();
    });

    ember_qunit.test('end() with no parameter triggers "ajaxStop" event on document', function (assert) {
        var spy = sinon.spy($.prototype, 'trigger');

        ajax['default'].end();

        assert.equal(spy.args[0][0], 'ajaxStop');

        $.prototype.trigger.restore();
    });

    ember_qunit.test('end() with parameter triggers "ajaxComplete" event on document', function (assert) {
        var spy = sinon.spy($.prototype, 'trigger');

        ajax['default'].end('testEndpoint');

        assert.equal(spy.args[0][0], 'ajaxComplete');
        assert.equal(spy.args[0][1][1].url, 'testEndpoint');

        $.prototype.trigger.restore();
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/ajax-test.jshint', function () {

  'use strict';

  module('JSHint - unit/helpers/sl/synchronous');
  test('unit/helpers/sl/synchronous/ajax-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/sl/synchronous/ajax-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/contains-test', ['ember-qunit', 'dummy/tests/helpers/sl/synchronous/contains'], function (ember_qunit, contains) {

    'use strict';

    var utils = require('dummy/tests/helpers/sl/utils/utils');

    module('Unit - helpers:sl/synchronous/contains');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(contains['default'], 'it exists');
    });

    ember_qunit.test('First non-optional argument must be an array, string or object', function (assert) {

        // Number
        var assertionThrown = false;

        try {
            contains['default'](12);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a number');

        // String
        assertionThrown = false;

        try {
            contains['default']('testString', {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'First parameter was a string');

        // Array
        assertionThrown = false;

        try {
            contains['default']([], {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'First parameter was an array');

        // Object
        assertionThrown = false;

        try {
            contains['default']({}, {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'First parameter was an object');

        // Function
        assertionThrown = false;

        try {
            contains['default'](function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a function');

        // Undefined
        assertionThrown = false;

        try {
            contains['default'](undefined);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was undefined');

        // Boolean
        assertionThrown = false;

        try {
            contains['default'](true);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a boolean');
    });

    ember_qunit.test('Second non-optional argument must be an array, string or object', function (assert) {

        // Number
        var assertionThrown = false;

        try {
            contains['default']({}, 12);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a number');

        // String
        assertionThrown = false;

        try {
            contains['default']({}, 'testString');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Second parameter was a string');

        // Array
        assertionThrown = false;

        try {
            contains['default']({}, []);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Second parameter was an array');

        // Object
        assertionThrown = false;

        try {
            contains['default']({}, {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Second parameter was an object');

        // Function
        assertionThrown = false;

        try {
            contains['default']({}, function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a function');

        // Undefined
        assertionThrown = false;

        try {
            contains['default']({}, undefined);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was undefined');

        // Boolean
        assertionThrown = false;

        try {
            contains['default']({}, true);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a boolean');
    });

    ember_qunit.test('Returns value from call to doArraysIntersect()', function (assert) {
        var spy = sinon.spy(utils, 'doArraysIntersect');

        contains['default']([], []);

        assert.ok(spy.calledOnce, 'doArraysIntersect() was called');

        utils.doArraysIntersect.restore();
    });

    ember_qunit.test('Arguments are passed to doArraysIntersect() in the correct order', function (assert) {
        var spy = sinon.spy(utils, 'doArraysIntersect');

        contains['default']('b', ['d', 'e']);

        assert.equal(spy.args[0][0], 'b', 'First argument');
        assert.deepEqual(spy.args[0][1], ['d', 'e'], 'Second argument');

        utils.doArraysIntersect.restore();
    });

    ember_qunit.test('Returns a boolean', function (assert) {
        var response;

        response = contains['default']('b', ['d', 'e']);

        assert.propEqual(response, false, 'Is boolean false');

        response = contains['default'](['d', 'e'], 'e');

        assert.propEqual(response, true, 'Is boolean true');
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/contains-test.jshint', function () {

  'use strict';

  module('JSHint - unit/helpers/sl/synchronous');
  test('unit/helpers/sl/synchronous/contains-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/sl/synchronous/contains-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/helpers/sl/synchronous/requires-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/sl/synchronous/requires'], function (Ember, ember_qunit, requires) {

    'use strict';

    module('Unit - helpers:sl/synchronous/requires');

    ember_qunit.test('it exists', function (assert) {
        assert.ok(requires['default'], 'it exists');
    });

    ember_qunit.test('First argument must be a function', function (assert) {

        // Number
        var assertionThrown = false;

        try {
            requires['default'](12, false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a number');

        // String
        assertionThrown = false;

        try {
            requires['default']('testString', false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a string');

        // Array
        assertionThrown = false;

        try {
            requires['default']([], false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was an array');

        // Object
        assertionThrown = false;

        try {
            requires['default']({}, false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was an object');

        // Function
        assertionThrown = false;

        try {
            requires['default'](function () {}, false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a function');

        // Undefined
        assertionThrown = false;

        try {
            requires['default'](undefined, false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was undefined');

        // Boolean
        assertionThrown = false;

        try {
            requires['default'](true, false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was a boolean');
    });

    ember_qunit.test('Second argument must be an array', function (assert) {

        // Number
        var assertionThrown = false;

        try {
            requires['default'](12, 12);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a number');

        // String
        assertionThrown = false;

        try {
            requires['default']('testString', 'testString');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a string');

        // Array
        assertionThrown = false;

        try {
            requires['default']([], []);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was an array');

        // Object
        assertionThrown = false;

        try {
            requires['default']({}, {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was an object');

        // Function
        assertionThrown = false;

        try {
            requires['default'](function () {}, function () {});
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a function');

        // Undefined
        assertionThrown = false;

        try {
            requires['default'](undefined, undefined);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was undefined');

        // Boolean
        assertionThrown = false;

        try {
            requires['default'](true, false);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was a boolean');
    });

    ember_qunit.test('Return type', function (assert) {
        var testFunction = function testFunction(first) {
            Ember['default'].assert('Test argument must be a function or boolean', 'function' === typeof first || 'boolean' === typeof first);
        },
            test = requires['default'](testFunction, ['function', 'boolean']);

        assert.deepEqual(test, { requires: true, messages: '' }, 'Returns expected object');
    });

    ember_qunit.test('Functions as expected', function (assert) {
        var testFunction = function testFunction(first) {
            Ember['default'].assert('Test argument must be a function or boolean', 'function' === typeof first || 'boolean' === typeof first);
        },
            test;

        test = requires['default'](testFunction, ['function', 'boolean']);
        assert.ok(test.requires, 'Functioned as expected when passed desired argument types: ' + test.messages);

        test = requires['default'](testFunction, ['function', 'boolean', 'string']);
        assert.ok(!test.requires, 'Functioned as expected when passed undesired argument types: ' + test.messages);
    });

});
define('dummy/tests/unit/helpers/sl/synchronous/requires-test.jshint', function () {

  'use strict';

  module('JSHint - unit/helpers/sl/synchronous');
  test('unit/helpers/sl/synchronous/requires-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/sl/synchronous/requires-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/helpers/sl/utils/utils-test', ['ember-qunit', 'dummy/tests/helpers/sl/utils/utils', 'dummy/tests/helpers/sl/synchronous/requires'], function (ember_qunit, utils, requires) {

    'use strict';

    module('Unit - utils:sl/utils/utils');

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
        var test = requires['default'](utils.convertToArray, ['array', 'string', 'object']);

        assert.ok(test.requires, test.messages);
    });

    ember_qunit.test('convertToArray() returns expected result', function (assert) {
        var testResults1 = utils.convertToArray(['a', 'b']),
            testResults2 = utils.convertToArray('testing things'),
            testResults3 = utils.convertToArray({ a: 1, b: 2 });

        assert.ok(Array.isArray(testResults1));
        assert.deepEqual(['a', 'b'], testResults1);

        assert.ok(Array.isArray(testResults2));
        assert.deepEqual(['testing', 'things'], testResults2);

        assert.ok(Array.isArray(testResults3));
        assert.deepEqual(['a', 'b'], testResults3);
    });

    ember_qunit.test('convertStringToArray() requires a string to be provided', function (assert) {
        var test = requires['default'](utils.convertStringToArray, ['string']);

        assert.ok(test.requires, test.messages);
    });

    ember_qunit.test('convertStringToArray() returns an array with a single element when passed a string without spaces', function (assert) {
        assert.deepEqual(utils.convertStringToArray('testString'), ['testString']);
    });

    ember_qunit.test('convertStringToArray() returns an array with as many elements as there are "words" represented in a string passed to it containing spaces', function (assert) {
        assert.deepEqual(utils.convertStringToArray('the test string'), ['the', 'test', 'string']);
    });

    ember_qunit.test('convertObjectKeysToArray() requires an object to be provided', function (assert) {
        var test = requires['default'](utils.convertObjectKeysToArray, ['object']);

        assert.ok(test.requires, test.messages);
    });

    ember_qunit.test('convertObjectKeysToArray() returns an array of object properties', function (assert) {
        assert.deepEqual(utils.convertObjectKeysToArray({ testing: true, bird: 'duck' }), ['testing', 'bird']);
        assert.deepEqual(utils.convertObjectKeysToArray({ testing2: true, bird2: { feathers: true, tasty: false } }), ['testing2', 'bird2']);
    });

    ember_qunit.test('doArraysIntersect() requires both parameters to be Arrays', function (assert) {
        // First parameter not an Array, second one is

        var assertionThrown = false;

        try {
            utils.doArraysIntersect('', []);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'First parameter was not an Array');

        // First parameter is an Array, second one is not

        assertionThrown = false;

        try {
            utils.doArraysIntersect([], '');
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(assertionThrown, 'Second parameter was not an Array');

        // Both parameters are Arrays

        assertionThrown = false;

        try {
            utils.doArraysIntersect([], []);
        } catch (error) {
            assertionThrown = true;
        }

        assert.ok(!assertionThrown, 'Both parameters were Arrays');
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

  module('JSHint - unit/helpers/sl/utils');
  test('unit/helpers/sl/utils/utils-test.js should pass jshint', function() { 
    ok(true, 'unit/helpers/sl/utils/utils-test.js should pass jshint.'); 
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
  require("dummy/app")["default"].create({"name":"sl-ember-test-helpers","version":"1.4.0.92d5d7c4"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map