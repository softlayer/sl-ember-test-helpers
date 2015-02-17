import {
  test
} from 'ember-qunit';

import {
    convertToArray,
    convertStringToArray,
    convertObjectKeysToArray,
    doArraysIntersect
} from '../../../../helpers/sl/utils/utils';

import requires from '../../../../helpers/sl/synchronous/requires';

module( 'Unit - utils:sl/utils/utils' );

test( 'convertToArray() exists', function( assert ) {
    assert.ok( convertToArray, 'it exists' );
});

test( 'convertStringToArray() exists', function( assert ) {
    assert.ok( convertStringToArray, 'it exists' );
});

test( 'convertObjectKeysToArray() exists', function( assert ) {
    assert.ok( convertObjectKeysToArray, 'it exists' );
});

test( 'doArraysIntersect() exists', function( assert ) {
    assert.ok( doArraysIntersect, 'it exists' );
});

test( 'convertToArray() requires either an Array, String, or Object to be provided', function( assert ) {
    requires( convertToArray, [ 'array', 'string', 'object' ] );
});

test( 'convertToArray() returns expected result', function( assert ) {
    var testResults1 = convertToArray( [ 'a', 'b' ] ),
        testResults2 = convertToArray( 'testing things' ),
        testResults3 = convertToArray( { a: 1, b: 2 } );

    assert.ok( Array.isArray( testResults1 ) );
    assert.deepEqual( [ 'a', 'b' ], testResults1 );

    assert.ok( Array.isArray( testResults2 ) );
    assert.deepEqual( [ 'testing', 'things' ], testResults2 );

    assert.ok( Array.isArray( testResults3 ) );
    assert.deepEqual( [ 'a', 'b' ], testResults3 );
});

test( 'convertStringToArray() requires a string to be provided', function( assert ) {
    requires( convertStringToArray, [ 'string' ] );
});

test( 'convertStringToArray() returns an array with a single element when passed a string without spaces', function( assert ) {
    assert.deepEqual( convertStringToArray( 'testString' ), [ 'testString' ] );
});

test( 'convertStringToArray() returns an array with as many elements as there are "words" represented in a string passed to it containing spaces', function( assert ) {
    assert.deepEqual( convertStringToArray( 'the test string' ), [ 'the', 'test', 'string' ] );
});

test( 'convertObjectKeysToArray() requires an object to be provided', function( assert ) {
    requires( convertObjectKeysToArray, [ 'object' ] );
});

test( 'convertObjectKeysToArray() returns an array of object properties', function( assert ) {
    assert.deepEqual( convertObjectKeysToArray( { testing: true, bird: 'duck' } ), [ 'testing', 'bird' ] );
    assert.deepEqual( convertObjectKeysToArray( { testing2: true, bird2: { feathers: true, tasty: false } } ), [ 'testing2', 'bird2' ] );
});

test( 'doArraysIntersect() requires both parameters to be Arrays', function( assert ) {
    // First parameter not an Array, second one is

    var assertionThrown = false;

    try {
        doArraysIntersect( '', [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'First parameter was not an Array' );

    // First parameter is an Array, second one is not

    assertionThrown = false;

    try {
        doArraysIntersect( [], '' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Second parameter was not an Array' );

    // Both parameters are Arrays

    assertionThrown = false;

    try {
        doArraysIntersect( [], [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'Both parameters were Arrays' );
});

test( 'doArraysIntersect() functions as expected', function( assert ) {
    assert.ok( doArraysIntersect( ['a','b','c'], ['a'] ), 'Single intersection into multiple' );
    assert.ok( doArraysIntersect( ['a','b','c'], ['a','c'] ), 'Multiple intersections into multiple' );
    assert.ok( doArraysIntersect( ['a','b','c'], ['a','c','d'] ), 'Multiple intersections into multiple with single non-intersection value' );
    assert.ok( !doArraysIntersect( ['a','b','c'], ['d'] ), 'Single non-intersection value into multiple' );
    assert.ok( !doArraysIntersect( ['d'], ['a'] ), 'Single non-intersection value into single, with non-intersection value' );
    assert.ok( doArraysIntersect( ['d'], ['a', 'd', 'e'] ), 'Multiple intersections into single, with single intersection value' );
});
