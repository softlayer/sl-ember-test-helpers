import Ember from 'ember';
import { test } from 'ember-qunit';
import {
    convertToArray,
    convertStringToArray,
    convertObjectKeysToArray,
    doArraysIntersect
} from '../../../../helpers/sl/utils/utils';
import requires from '../../../../helpers/sl/synchronous/requires';

module( 'Unit | Utils | sl/utils/utils' );

test( 'convertToArray() exists', function( assert ) {
    assert.ok(
        convertToArray,
        'it exists'
    );
});

test( 'convertStringToArray() exists', function( assert ) {
    assert.ok(
        convertStringToArray,
        'it exists'
    );
});

test( 'convertObjectKeysToArray() exists', function( assert ) {
    assert.ok(
        convertObjectKeysToArray,
        'it exists'
    );
});

test( 'doArraysIntersect() exists', function( assert ) {
    assert.ok(
        doArraysIntersect,
        'it exists'
    );
});

test( 'convertToArray() requires either an Array, String, or Object to be provided', function( assert ) {
    const properties = Ember.Object.create({
        parameters: undefined
    });

    const callConvertToArray = () => convertToArray( properties.parameters );

    // null
    properties.set( 'parameters', null );
    
    assert.throws(
        callConvertToArray,
        'property was null'
    );

    // undefined
    properties.set( 'parameters', undefined );
    
    assert.throws(
        callConvertToArray,
        'property was undefined'
    );
    
    // Boolean
    properties.set( 'parameters', false );
    
    assert.throws(
        callConvertToArray,
        'property was a Boolean'
    );
    
    // Number
    properties.set( 'parameters', 132 );
    
    assert.throws(
        callConvertToArray,
        'property was a Number'
    );
    
    // Function
    properties.set( 'parameters', function(){} );
    
    assert.throws(
        callConvertToArray,
        'property was a Function'
    );

    // Array
    properties.set( 'parameters', [] );
    
    assert.ok(
        callConvertToArray(),
        'property was an Array'
    );
    
    // String
    properties.set( 'parameters', 'test string' );
    
    assert.ok(
        callConvertToArray(),
        'property was a String'
    );
    
    // Object
    properties.set( 'parameters', {} );
    
    assert.ok(
        callConvertToArray(),
        'property was an Object'
    );
});

test( 'convertToArray() returns expected result', function( assert ) {
    let testResults1 = convertToArray( [ 'a', 'b' ] );
    let testResults2 = convertToArray( 'testing things' );
    let testResults3 = convertToArray( { a: 1, b: 2 } );

    assert.ok(
        'array' === Ember.typeOf( testResults1 )
    );
    assert.deepEqual(
        [ 'a', 'b' ],
        testResults1
    );

    assert.ok(
        'array' === Ember.typeOf( testResults2 )
    );
    assert.deepEqual(
        [ 'testing', 'things' ],
        testResults2
    );

    assert.ok(
        'array' === Ember.typeOf( testResults3 )
    );
    assert.deepEqual(
        [ 'a', 'b' ],
        testResults3
    );
});

test( 'convertStringToArray() requires a string to be provided', function( assert ) {
    const properties = Ember.Object.create({
        parameters: undefined
    });

    const callConvertStringToArray = () => convertStringToArray( properties.parameters );

    // null
    properties.set( 'parameters', null );
    
    assert.throws(
        callConvertStringToArray,
        'property was null'
    );

    // undefined
    properties.set( 'parameters', undefined );
    
    assert.throws(
        callConvertStringToArray,
        'property was undefined'
    );
    
    // Boolean
    properties.set( 'parameters', false );
    
    assert.throws(
        callConvertStringToArray,
        'property was a Boolean'
    );
    
    // Number
    properties.set( 'parameters', 132 );
    
    assert.throws(
        callConvertStringToArray,
        'property was a Number'
    );
    
    // Function
    properties.set( 'parameters', function(){} );
    
    assert.throws(
        callConvertStringToArray,
        'property was a Function'
    );

    // Array
    properties.set( 'parameters', [] );
    
    assert.throws(
        callConvertStringToArray,
        'property was an Array'
    );
        
    // Object
    properties.set( 'parameters', {} );
    
    assert.throws(
        callConvertStringToArray,
        'property was an Object'
    );

    // String
    properties.set( 'parameters', 'test string' );
    
    assert.ok(
        callConvertStringToArray(),
        'property was a String'
    );
});

test( 'convertStringToArray() returns an array with a single element when passed a string without spaces', function( assert ) {
    assert.deepEqual(
        convertStringToArray( 'testString' ),
        [ 'testString' ]
    );
});

test( 'convertStringToArray() returns an array with as many elements as there are "words" represented in a string passed to it containing spaces', function( assert ) {
    assert.deepEqual(
        convertStringToArray( 'the test string' ),
        [ 'the', 'test', 'string' ]
    );
});

test( 'convertObjectKeysToArray() requires an object to be provided', function( assert ) {
    let test = requires(
        convertObjectKeysToArray,
        [ 'object' ]
    );

    assert.ok (
        test.requires,
        test.messages
    );
});

test( 'convertObjectKeysToArray() returns an array of object properties', function( assert ) {
    assert.deepEqual(
        convertObjectKeysToArray({
            testing: true,
            bird: 'duck'
        }),
        [ 'testing', 'bird' ]
    );
    assert.deepEqual(
        convertObjectKeysToArray({
            testing2: true,
            bird2: {
                feathers: true,
                tasty: false
            }
        }),
        [ 'testing2', 'bird2' ]
    );
});

test( 'doArraysIntersect() requires both parameters to be Arrays', function( assert ) {
    const testPropertyOne = Ember.Object.create({
        parameter: undefined
    });

    const testPropertyTwo = Ember.Object.create({
        parameter: undefined
    });

    const callDoArraysIntersect = () => doArraysIntersect( testPropertyOne.parameter, testPropertyTwo.parameter );

    // Second parameter is not an array
    testPropertyOne.set( 'parameter', []);
    testPropertyTwo.set( 'parameter', '');

    assert.throws(
        callDoArraysIntersect,
        'Second parameter was a string'
    );

    // Both parameters are null
    testPropertyOne.set( 'parameter', null);
    testPropertyTwo.set( 'parameter', null);

    assert.throws(
        callDoArraysIntersect,
        'Both parameters are null'
    );

    // First parameter is not an array
    testPropertyOne.set( 'parameter', '');
    testPropertyTwo.set( 'parameter', []);

    assert.throws(
        callDoArraysIntersect,
        'First parameter was a string'
    );
        
    // Both parameters are arrays
    testPropertyOne.set( 'parameter', ['a'] );
    testPropertyTwo.set( 'parameter', ['a'] );
    
    assert.ok(
        callDoArraysIntersect(),
        'Parameters were both array'
    );
});

test( 'doArraysIntersect() functions as expected', function( assert ) {
    assert.ok(
        doArraysIntersect(
            ['a','b','c'],
            ['a'] ),
        'Single intersection into multiple'
    );

    assert.ok(
        doArraysIntersect(
            ['a','b','c'],
            ['a','c']
        ),
        'Multiple intersections into multiple'
    );

    assert.ok(
        doArraysIntersect(
            ['a','b','c'],
            ['a','c','d']
        ),
        'Multiple intersections into multiple with single non-intersection value'
    );

    assert.ok(
        !doArraysIntersect(
            ['a','b','c'],
            ['d']
        ),
        'Single non-intersection value into multiple'
    );

    assert.ok(
        !doArraysIntersect(
            ['d'],
            ['a']
        ),
        'Single non-intersection value into single, with non-intersection value'
    );

    assert.ok(
        doArraysIntersect(
            ['d'],
            ['a', 'd', 'e']
        ),
        'Multiple intersections into single, with single intersection value'
    );
});
