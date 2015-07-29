import Ember from 'ember';
import { test } from 'ember-qunit';
import contains from '../../../../helpers/sl/synchronous/contains';

let utils = require( 'dummy/tests/helpers/sl/utils/utils' );

module( 'Unit | Helper | sl/synchronous/contains' );

test( 'it exists', function( assert ) {
    assert.ok(
        contains,
        'it exists'
    );
});

test( 'First non-optional argument must be an array, string or object', function( assert ) {
    const testPropertyOne = Ember.Object.create({
        parameter: 'null'
    });

    const testPropertyTwo = Ember.Object.create({
        parameter: 'null'
    });

    const callContains = () => contains( testPropertyOne.parameter, testPropertyTwo.parameter );

    // Number
    testPropertyOne.set( 'parameter', 2 );
    testPropertyTwo.set( 'parameter', [] );

    assert.throws(
        callContains,
        'First parameter was a number'
    );

    // Function
    testPropertyOne.set( 'parameter', function(){} );
    testPropertyTwo.set( 'parameter', [] );

    assert.throws(
        callContains,
        'First parameter was a function'
    );
    
    // Boolean
    testPropertyOne.set( 'parameter', false );
    testPropertyTwo.set( 'parameter', [] );

    assert.throws(
        callContains,
        'First parameter was false'
    );

    // Undefined
    testPropertyOne.set( 'parameter', undefined );
    testPropertyTwo.set( 'parameter', [] );

    assert.throws(
        callContains,
        'First parameter was undefined'
    );

    // Array
    testPropertyOne.set( 'parameter', ['2'] );
    testPropertyTwo.set( 'parameter', ['2'] );

    assert.ok(
        callContains(),
        'First parameter was an array'
    );

    // Object
    testPropertyOne.set( 'parameter', { test: 'test' } );
    testPropertyTwo.set( 'parameter', { test: 'test' } );

    assert.ok(
        callContains(),
        'First parameter was an object'
    );

    // String
    testPropertyOne.set( 'parameter', 'testString' );
    testPropertyTwo.set( 'parameter', 'testString' );

    assert.ok(
        callContains(),
        'First parameter was a string'
    );
});

test( 'Second non-optional argument must be an array, string or object', function( assert ) {
    const testPropertyOne = Ember.Object.create({
        parameter: 'null'
    });

    const testPropertyTwo = Ember.Object.create({
        parameter: 'null'
    });

    const callContains = () => contains( testPropertyOne.parameter, testPropertyTwo.parameter );

    // Number
    testPropertyOne.set( 'parameter', [] );
    testPropertyTwo.set( 'parameter', 2 );

    assert.throws(
        callContains,
        'Second parameter was a number'
    );

    // Function
    testPropertyOne.set( 'parameter', [] );
    testPropertyTwo.set( 'parameter', function(){} );

    assert.throws(
        callContains,
        'second parameter was a function'
    );
    
    // Boolean
    testPropertyOne.set( 'parameter', [] );
    testPropertyTwo.set( 'parameter', false );

    assert.throws(
        callContains,
        'second parameter was false'
    );

    // Undefined
    testPropertyOne.set( 'parameter', [] );
    testPropertyTwo.set( 'parameter', undefined );

    assert.throws(
        callContains,
        'second parameter was undefined'
    );

    // Array
    testPropertyOne.set( 'parameter', ['2'] );
    testPropertyTwo.set( 'parameter', ['2'] );

    assert.ok(
        callContains(),
        'First parameter was an array'
    );

    // Object
    testPropertyOne.set( 'parameter', {test:'test'} );
    testPropertyTwo.set( 'parameter', {test: 'test'} );

    assert.ok(
        callContains(),
        'First parameter was an object'
    );

    // String
    testPropertyOne.set( 'parameter', 'testString' );
    testPropertyTwo.set( 'parameter', 'testString' );

    assert.ok(
        callContains(),
        'First parameter was a string'
    );
});

test( 'Returns value from call to doArraysIntersect()', function( assert ) {
    let spy = sinon.spy( utils, 'doArraysIntersect' );

    contains(
        [],
        []
    );

    assert.ok(
        spy.calledOnce,
        'doArraysIntersect() was called'
    );

    utils.doArraysIntersect.restore();
});

test( 'Arguments are passed to doArraysIntersect() in the correct order', function( assert ) {
    let spy = sinon.spy( utils, 'doArraysIntersect' );

    contains(
        'b',
        [ 'd', 'e' ]
    );

    assert.equal(
        spy.args[ 0 ][ 0 ],
        'b',
        'First argument'
    );
    assert.deepEqual(
        spy.args[ 0 ][ 1 ],
        [ 'd', 'e' ],
        'Second argument'
    );

    utils.doArraysIntersect.restore();
});

test( 'Returns a boolean', function( assert ) {
    let response;

    response = contains(
        'b',
        [ 'd', 'e' ]
    );

    assert.propEqual(
        response,
        false,
        'Is boolean false'
    );

    response = contains(
        [ 'd', 'e' ],
        'e'
    );

    assert.propEqual(
        response,
        true,
        'Is boolean true'
    );
});