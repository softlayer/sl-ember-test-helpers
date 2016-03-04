
[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-test-helpers.svg)](https://github.com/softlayer/sl-ember-test-helpers/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-2.4.1-blue.svg) [![License](https://img.shields.io/npm/l/sl-ember-test-helpers.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-test-helpers.svg)](https://www.npmjs.com/package/sl-ember-test-helpers)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-test-helpers.svg)](https://david-dm.org/softlayer/sl-ember-test-helpers) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-test-helpers.svg)](https://david-dm.org/softlayer/sl-ember-test-helpers#info=devDependencies)

[![Build Status](https://img.shields.io/travis/softlayer/sl-ember-test-helpers/master.svg)](https://travis-ci.org/softlayer/sl-ember-test-helpers) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-test-helpers.svg)](https://codeclimate.com/github/softlayer/sl-ember-test-helpers) [![Ember Observer](http://emberobserver.com/badges/sl-ember-test-helpers.svg)](http://emberobserver.com/addons/sl-ember-test-helpers) [![Inch CI](http://inch-ci.org/github/softlayer/sl-ember-test-helpers.svg?branch=master)](http://inch-ci.org/github/softlayer/sl-ember-test-helpers)

We use [https://waffle.io/softlayer/sl-ember-test-helpers](https://waffle.io/softlayer/sl-ember-test-helpers) to work our issues.

[![Stories in Ready](https://badge.waffle.io/softlayer/sl-ember-test-helpers.png?label=ready&title=Ready)](https://waffle.io/softlayer/sl-ember-test-helpers) [![Stories in In Progress](https://badge.waffle.io/softlayer/sl-ember-test-helpers.png?label=in%20progress&title=In%20Progress)](https://waffle.io/softlayer/sl-ember-test-helpers) [![Stories in Ready For Review](https://badge.waffle.io/softlayer/sl-ember-test-helpers.png?label=ready%20for%20review&title=Ready%20For%20Review)](https://waffle.io/softlayer/sl-ember-test-helpers) [![Stories in In Review](https://badge.waffle.io/softlayer/sl-ember-test-helpers.png?label=in%20review&title=In%20Review)](https://waffle.io/softlayer/sl-ember-test-helpers)

[![Throughput Graph](https://graphs.waffle.io/softlayer/sl-ember-test-helpers/throughput.svg)](https://waffle.io/softlayer/sl-ember-test-helpers/metrics)


# What is sl-ember-test-helpers

This addon provides and registers test helpers for use in the testing of your application.  This addon is compatible with QUnit, Mocha, and any other testing framework you wish to use (or at least should be).



# Provided helpers

## Synchronous

### ajax

Emulates the beginning and completion of an AJAX request or requests.

* `Ajax.begin()` triggers the `ajaxStart` event on the document
* `Ajax.begin( 'endpointValue' )` triggers the `ajaxSend` event on the document, passing the supplied endpoint value
* `Ajax.end()` triggers the `ajaxStop` event on the document
* `Ajax.end( 'endpointValue' )` triggers the `ajaxComplete` event on the document, passing the supplied endpoint
value


### contains

```
contains( valuesUnderTest, valuesToTestFor );
```

Determine whether values are contained in other values.  These values can be a combination of Arrays, Strings, or
Objects (for which the keys are extracted).  All *valuesToTestFor* must exist in *valuesUnderTest* for this
determination to pass successfully.

Calls to `contains()` return a boolean which can then be used in your tests.

This call would fail because the Object being tested does not contain keys matching the values of "a" and "b":

```
contains( { c: 1, b: 3 }, [ 'a', 'b' ] );
```

This call would pass because the Array being tested contains the value of "b":

```
contains( [ 'a', 'b' ], 'b' );
```

### requires

Use this helper to test that an argument passed to a function is of the required type(s).  The first argument is the
function under test and the second argument is an array of types to test for.

```
requires( functionUnderTest, [ 'string', 'object', 'function' ] );
```

#### Types

* number
* string
* array
* object
* function
* undefined
* boolean

The call to `requires` returns an object:

```
{
    requires: <boolean: true if functionUnderTest requires the provided arguments, false if not>
    messages: <string: message per argument type that failed>
}
```

### Global Libraries

Use this helper in your unit tests to determine if a component called globally-scoped `Ember.$`, `$` or `jQuery`. You must wrap your component with references to the setup and removal functions.

```
const component = this.subject();

globalLibraries.setupSpies();

globalLibraries.triggerEvents( component );

assert.notOk(
    globalLibraries.called(),
    'There are no references to Ember.$, $ or jQuery'
);

globalLibraries.restoreSpies();
```

The `triggerEvents()` function takes a `component` as an argument and triggers the following events on it: `willInsertElement`, `didInsertElement`, `willClearRender` and `willDestroyElement`. Triggering of the various events
will ensure code that has handlers attached to those events will be exercised, making the helper more effective at detecting global references.

The call to `called()` returns a boolean that is the result of the sinon spies detecting `Ember.$`, `$`, or `jQuery`. Validate `false` to verify that the code within the component does not have global references to
`Ember.$`, `$` or `jQuery`.

```
<boolean: true if the spy detects a reference to the global scope, false if not>
```

## Asynchronous

### ajax

See description in *Synchronous* section

### contains

See description in *Synchronous* section

### requires

See description in *Synchronous* section



# Utilities

There are several utility functions provided in the */test-support/helpers/sl/utils/utils.js* file that, while used
internally by the helpers themselves, can be imported as needed for use.  These include:

* convertToArray()
* convertStringToArray()
* convertObjectKeysToArray()
* doArraysIntersect()



# How to use this addon in your application

## Install

```
ember install sl-ember-test-helpers
```

## If running Synchronous tests, such as Unit Tests

For each test helper you wish to use, you will need to import them into each individual Unit Tests. For example:

```
import { contains } from '../../helpers/sl/synchronous';
```

## If running Asynchronous tests, such as Acceptance Tests

Installing this addon via the `ember install:addon` command will automatically run the generator, which will make
changes to the following files:

* tests/helpers/start-app.js
* tests/.jshintrc

If your application is under source control management, such as via Git, make sure to commit these changes.

The generator makes changes to the above files assuming the structure of them has not changed much from the default
version created during the initial Ember application creation.  If too many changes have been made you will need to
manually make the changes below:

* Add `import slRegisterTestHelpers from './sl/register-test-helpers';` to the beginning of the *tests/helpers/start-
app.js* file
* In the *tests/helpers/start-app.js* file, place `slRegisterTestHelpers();` before the `application.
injectTestHelpers()` line
* Add `"contains",` to the `predef` section of the */tests/.jshintrc* file

## Generated documentation

This addon leverages the [ember-cli-jsdoc](https://github.com/softlayer/ember-cli-jsdoc) addon.  Simply run either
`ember ember-cli-jsdoc` or `npm run docs` (shortcut setup in this repo) and then visit *http://localhost:4200/docs*.



# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)


# Contribution
[See CONTRIBUTING.md](https://github.com/softlayer/sl-ember-test-helpers/blob/master/CONTRIBUTING.md)


# Copyright and License
sl-ember-test-helpers and its source files are Copyright © 2014-2015
[SoftLayer Technologies, Inc.](http://www.softlayer.com/). The software is
[MIT Licensed](https://github.com/softlayer/sl-ember-test-helpers/blob/master/LICENSE.md)



# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
