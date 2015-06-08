import { test } from 'ember-qunit';
import contains from '../../../../helpers/sl/synchronous/contains';

var utils = require( 'dummy/tests/helpers/sl/utils/utils' );

module( 'Unit | Helper | sl/synchronous/contains' );

test( 'it exists', function( assert ) {
    assert.ok( contains, 'it exists' );
});

test( 'First non-optional argument must be an array, string or object', function( assert ) {

    // Number
    var assertionThrown = false;

    try {
        contains( 12 );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'First parameter was a number' );

    // String
    assertionThrown = false;

    try {
        contains( 'testString', {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'First parameter was a string' );

    // Array
    assertionThrown = false;

    try {
        contains( [], {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'First parameter was an array' );

    // Object
    assertionThrown = false;

    try {
        contains( {}, {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'First parameter was an object' );

    // Function
    assertionThrown = false;

    try {
        contains( function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'First parameter was a function' );

    // Undefined
    assertionThrown = false;

    try {
        contains( undefined );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'First parameter was undefined' );

    // Boolean
    assertionThrown = false;

    try {
        contains( true );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'First parameter was a boolean' );

});

test( 'Second non-optional argument must be an array, string or object', function( assert ) {

    // Number
    var assertionThrown = false;

    try {
        contains( {}, 12 );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Second parameter was a number' );

    // String
    assertionThrown = false;

    try {
        contains( {}, 'testString' );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'Second parameter was a string' );

    // Array
    assertionThrown = false;

    try {
        contains( {}, [] );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'Second parameter was an array' );

    // Object
    assertionThrown = false;

    try {
        contains( {}, {} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( !assertionThrown, 'Second parameter was an object' );

    // Function
    assertionThrown = false;

    try {
        contains( {}, function(){} );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Second parameter was a function' );

    // Undefined
    assertionThrown = false;

    try {
        contains( {}, undefined );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Second parameter was undefined' );

    // Boolean
    assertionThrown = false;

    try {
        contains( {}, true );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok( assertionThrown, 'Second parameter was a boolean' );

});

test( 'Returns value from call to doArraysIntersect()', function( assert ) {
    var spy = sinon.spy( utils, 'doArraysIntersect' );

    contains( [], [] );

    assert.ok( spy.calledOnce, 'doArraysIntersect() was called' );

    utils.doArraysIntersect.restore();
});

test( 'Arguments are passed to doArraysIntersect() in the correct order', function( assert ) {
    var spy = sinon.spy( utils, 'doArraysIntersect' );

    contains( 'b', [ 'd', 'e' ] );

    assert.equal( spy.args[0][0], 'b', 'First argument' );
    assert.deepEqual( spy.args[0][1], [ 'd', 'e' ], 'Second argument' );

    utils.doArraysIntersect.restore();
});

test( 'Returns a boolean', function( assert ) {
    var response;

    response = contains( 'b', [ 'd', 'e' ] );

    assert.propEqual( response, false, 'Is boolean false' );

    response = contains( [ 'd', 'e' ], 'e' );

    assert.propEqual( response, true, 'Is boolean true' );
});
