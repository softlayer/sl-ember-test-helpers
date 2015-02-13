import Ember from 'ember';
import { test } from 'ember-qunit';
import requires from '../../../../helpers/sl/synchronous/requires';

module( 'Unit - helpers:sl/synchronous/requires' );

test( 'it exists', function() {
  ok( requires, 'it exists' );
});

test( 'First argument must be a function', function() {

    // Number
    var assertionThrown = false;

    try {
        requires( 12, false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was a number' );

    // String
    assertionThrown = false;

    try {
        requires( 'testString', false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was a string' );

    // Array
    assertionThrown = false;

    try {
        requires( [], false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was an array' );

    // Object
    assertionThrown = false;

    try {
        requires( {}, false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was an object' );

    // Function
    assertionThrown = false;

    try {
        requires( function(){}, false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was a function' );

    // Undefined
    assertionThrown = false;

    try {
        requires( undefined, false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was undefined' );

    // Boolean
    assertionThrown = false;

    try {
        requires( true, false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'First parameter was a boolean' );

});

test( 'Second argument must be an array', function() {

    // Number
    var assertionThrown = false;

    try {
        requires( 12, 12 );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was a number' );

    // String
    assertionThrown = false;

    try {
        requires( 'testString', 'testString' );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was a string' );

    // Array
    assertionThrown = false;

    try {
        requires( [], [] );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was an array' );

    // Object
    assertionThrown = false;

    try {
        requires( {}, {} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was an object' );

    // Function
    assertionThrown = false;

    try {
        requires( function(){}, function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was a function' );

    // Undefined
    assertionThrown = false;

    try {
        requires( undefined, undefined );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was undefined' );

    // Boolean
    assertionThrown = false;

    try {
        requires( true, false );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( assertionThrown, 'Second parameter was a boolean' );

});

// @TODO Needs better test support.  See https://github.com/softlayer/sl-ember-test-helpers/issues/59
test( 'Functions as expected', function() {
    var testFunction = function( first ) {
        Ember.assert( 'Test argument must be a function', 'function' === typeof first || 'boolean' === typeof first );
    },
    assertionThrown  = false;

    try {
        requires( testFunction, [ 'function', 'boolean' ] );
    } catch( error ) {
        assertionThrown = true;
    }

    ok( !assertionThrown, 'Functioned as expected when passed desired argument types' );
});
