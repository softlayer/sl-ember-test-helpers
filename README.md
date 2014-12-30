Ember CLI version: **0.1.5**

License: [MIT](LICENSE.md)

---

[![Build Status](https://travis-ci.org/softlayer/sl-ember-test-helpers.svg?branch=develop)](https://travis-ci.org/softlayer/sl-ember-test-helpers) [![Code Climate](https://codeclimate.com/github/softlayer/sl-ember-test-helpers/badges/gpa.svg)](https://codeclimate.com/github/softlayer/sl-ember-test-helpers)

---

# What is sl-ember-test-helpers

This addon provides and registers QUnit test helpers for use in the testing of your application.


---

# Provided helpers

## Synchronous

### contains

```
contains( valuesUnderTest, valuesToTestFor, 'Message passed to ok()' );
```

Test whether values are contained in other values.  These values can be a combination of Arrays, Strings, or Objects (for which the keys are extracted).  All *valuesToTestFor* must exist in *valuesUnderTest* for this test to pass successfully.

This test would fail because the Object being tested does not contain keys matching the values of "a" and "b":

```
contains( { c: 1, b: 3 }, [ 'a', 'b' ], 'Contains expected values' );
```

This test would pass because the Array being tested contains the value of "b":

```
contains( [ 'a', 'b' ], 'b', 'Contains expected values' );
```

## Asynchronous

### contains

See description in *Synchronous* section



---

# Utilities

There are several utility functions provided in the */test-support/helpers/sl/utils/utils.js* file that, while used internally by the helpers themselves, can be imported as needed for use.  These include:

* convertToArray()
* convertStringToArray()
* convertObjectKeysToArray()
* doArraysIntersect()


---

# How to use this addon in your application

## Install this addon as a Node module

```
ember install:addon sl-ember-test-helpers
```

## If running Synchronous tests, such as Unit Tests

For each test helper you wish to use, you will need to import them into each individual Unit Tests. For example:

```
import { contains } from '../../helpers/sl/synchronous';
```

## If running Asynchronous tests, such as Acceptance Tests

Installing this addon via the `ember install:addon` command will automatically run the generator, which will make changes to the following files:

* tests/helpers/start-app.js
* tests/.jshintrc

If your application is under source control management, such as via Git, make sure to commit these changes.

The generator makes changes to the above files assuming the structure of them has not changed much from the default version created during the initial Ember application creation.  If too many changes have been made you will need to manually make the changes below:

* Add `import slregisterTestHelpers from './sl/register-test-helpers';` to the beginning of the *tests/helpers/start-app.js* file
* In the *tests/helpers/start-app.js* file, place `slregisterTestHelpers();` before the `application.injectTestHelpers()` line
* Add `"contains",` to the `predef` section of the */tests/.jshintrc* file


---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)

---

# Copyright and License
sl-ember-test-helpers and its source files are Copyright © 2014 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)


---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
