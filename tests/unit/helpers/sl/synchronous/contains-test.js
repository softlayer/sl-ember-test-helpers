import {
  test
} from 'ember-qunit';

import contains from '../../../../helpers/sl/synchronous/contains';

module( 'Unit - helpers:sl/synchronous/contains' );

test( 'it exists', function( assert ) {
    assert.ok( contains, 'it exists' );
});

test( 'EMPTY TEST', function( assert ) {
    assert.expect(0);

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
