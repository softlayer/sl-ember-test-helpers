Ember CLI version: **0.1.2**

NPM package name: **sl-test-helpers**

License: [MIT](LICENSE.md)


---

# What is sl-test-helpers

This addon registers QUnit test helpers for use in the testing of your application.

There are plans to make it test suite agnostic in the future.


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


---

# Utilities

There are several utility functions provided in the */test-support/helpers/sl/utils/utils.js* file that, while used internally by the helpers themselves, can be imported as needed for use.



---

# How to use this addon in your application

## Install this addon as a Node module

```
npm install --save sl-test-helpers

```

## Run its blueprint

```
ember generate sl-test-helpers

```


---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)

---

# Copyright and License
sl-test-helpers and its source files are Copyright © 2014 [SoftLayer Technologies, Inc.](http://www.softlayer.com/)
The software is [MIT Licensed](LICENSE.md)


---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.