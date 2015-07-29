import Ember from 'ember';
import { test } from 'ember-qunit';
import requires from '../../../../helpers/sl/synchronous/requires';

module( 'Unit | Helpers | sl/synchronous/requires' );

test( 'it exists', function( assert ) {
    assert.ok(
        requires,
        'it exists'
    );
});

test( 'First argument must be a function', function( assert ) {
    const testPropertyOne = Ember.Object.create({
        parameter: undefined
    });

    const testPropertyTwo = Ember.Object.create({
        parameter: undefined
    });

    const callRequires = () => requires( testPropertyOne.parameter, testPropertyTwo.parameter );

    // Number
    testPropertyOne.set( 'parameter', 123 );
    testPropertyTwo.set( 'parameter', false );

    assert.throws(
        callRequires,
        'First parameter was a number'
    );

    // String
    testPropertyOne.set( 'parameter', 'testString' );

    assert.throws(
        callRequires,
        'First parameter was a string'
    );

    // Array
    testPropertyOne.set( 'parameter', [] );

    assert.throws(
        callRequires,
        'First parameter was an array'
    );

    // Object
    testPropertyOne.set( 'parameter', {} );

    assert.throws(
        callRequires,
        'First parameter was an object'
    );

    // Function
    testPropertyOne.set( 'parameter', function() {} );

    assert.throws(
        callRequires,
        'First parameter was a function'
    );

    // Undefined
    testPropertyOne.set( 'parameter', undefined );

    assert.throws(
        callRequires,
        'First parameter was undefined'
    );

    // Boolean
    testPropertyOne.set( 'parameter', false );

    assert.throws(
        callRequires,
        'First parameter was a boolean'
    );

    // Function, Array
    testPropertyOne.set( 'parameter', function() {} );
    testPropertyTwo.set( 'parameter', [] );

    assert.ok(
        callRequires(),
        'First parameter was a function and second parameter is an array'
    );
});

test( 'Second argument must be an array', function( assert ) {
    const testPropertyOne = Ember.Object.create({
        parameter: undefined
    });

    const testPropertyTwo = Ember.Object.create({
        parameter: undefined
    });

    const callRequires = () => requires( testPropertyOne.parameter, testPropertyTwo.parameter );

    // Number
    testPropertyOne.set( 'parameter', 123 );
    testPropertyTwo.set( 'parameter', 123 );

    assert.throws(
        callRequires,
        'Second parameter was a number'
    );

    // String
    testPropertyOne.set( 'parameter', 'testString' );
    testPropertyTwo.set( 'parameter', 'testString' );

    assert.throws(
        callRequires,
        'Second parameter was a string'
    );

    // Array
    testPropertyOne.set( 'parameter', [] );
    testPropertyTwo.set( 'parameter', [] );

    assert.throws(
        callRequires,
        'Second parameter was an array'
    );

    // Object
    testPropertyOne.set( 'parameter', {} );
    testPropertyTwo.set( 'parameter', {} );

    assert.throws(
        callRequires,
        'Second parameter was an object'
    );

    // Function
    testPropertyOne.set( 'parameter', function() {} );
    testPropertyTwo.set( 'parameter', function() {} );

    assert.throws(
        callRequires,
        'Second parameter was a function'
    );

    // Undefined
    testPropertyOne.set( 'parameter', undefined );
    testPropertyTwo.set( 'parameter', undefined );

    assert.throws(
        callRequires,
        'Second parameter was undefined'
    );

    // Boolean
    testPropertyOne.set( 'parameter', false );
    testPropertyTwo.set( 'parameter', false );

    assert.throws(
        callRequires,
        'Second parameter was a boolean'
    );

    // Function, Array
    testPropertyOne.set( 'parameter', function() {} );
    testPropertyTwo.set( 'parameter', [] );

    assert.ok(
        callRequires(),
        'First parameter was a function and second parameter and array'
    );
});

test( 'Return type', function( assert ) {
    const testFunction = function( first ) {
        Ember.assert(
            'Test argument must be a function or boolean',
            'function' === Ember.typeOf( first ) ||
            'boolean' === Ember.typeOf( first )
        );
    };

    const returnTypeTest = requires(
        testFunction,
        [ 'function', 'boolean' ]
    );

    assert.deepEqual(
        returnTypeTest,
        { requires: true, messages: '' },
        'Returns expected object'
    );
});

test( 'Functions as expected', function( assert ) {
    const testFunction = function( first ) {
        Ember.assert(
            'Test argument must be a function or boolean',
            'function' === Ember.typeOf( first ) ||
            'boolean' === Ember.typeOf( first )
        );
    };

    let functionTest = requires(
        testFunction,
        [ 'function', 'boolean' ]
    );

    assert.ok(
        functionTest.requires,
        'Functioned as expected when passed desired argument types: ' + functionTest.messages
    );

    functionTest = requires(
        testFunction,
        [ 'function', 'boolean', 'string' ]
    );

    assert.ok(
        !functionTest.requires,
        'Functioned as expected when passed undesired argument types: ' + functionTest.messages
    );
});
