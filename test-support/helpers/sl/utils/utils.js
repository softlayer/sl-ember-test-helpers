import Ember from 'ember';

/**
 * @module
 */

/**
 * Converts provided parameter into an array
 *
 * @function
 * @param {Array|String|Object} underTest
 * @throws {ember.assert} If not provided an Array, String or Object
 * @returns {Array}
 */
const convertToArray = function( underTest ) {

    /* jshint ignore:start */
    Ember.assert(
        'Array, String, or Object must be supplied',
        (
            'array' === Ember.typeOf( underTest ) ||
            'string' === Ember.typeOf( underTest ) ||
            'object' === Ember.typeOf( underTest )
        ) &&
        'symbol' !== typeof underTest
    );
    /* jshint ignore:end */

    let returnArray = underTest;

    switch( Ember.typeOf( underTest ) ) {
        case 'array':
            returnArray = underTest;
            break;

        case 'string':
            returnArray = convertStringToArray( underTest );
            break;

        case 'object':
            returnArray = convertObjectKeysToArray( underTest );
            break;
    }

    return returnArray;
};

/**
 * Splits a string into an array of individual "words" as delineated by spaces
 *
 * Primarily exists to convert format of call to .prop( 'class' )
 *
 * @function
 * @param {String} underTest
 * @throws {ember.assert} If argument is not provided or is not a string
 * @returns {Array}
 */
const convertStringToArray = function( underTest ) {

    Ember.assert(
        'String must be supplied',
        'string' === Ember.typeOf( underTest )
    );

    return underTest.split( ' ' );
};

/**
 * Returns an array containing all of the property names of an object
 *
 * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
 *
 * @function
 * @param {Object} underTest
 * @throws {ember.assert} If argument is not provided or is not an object
 * @returns {Array}
 */
const convertObjectKeysToArray = function( underTest ) {

    /* jshint ignore:start */
    Ember.assert(
        'Object must be supplied',
        'object' === Ember.typeOf( underTest ) &&
        'array' !== Ember.typeOf( underTest ) &&
        'symbol' !== typeof underTest
    );
    /* jshint ignore:end */

    return Object.keys( underTest );
};

/**
 * Whether at least one element of the array exists in the other
 *
 * @function
 * @param {Array} underTest
 * @param {Array} testFor
 * @returns {Boolean}
 */
const doArraysIntersect = function( underTest, testFor ) {

    Ember.assert(
        'Parameters must be Arrays',
        'array' === Ember.typeOf( underTest ) &&
        'array' === Ember.typeOf( testFor )
    );

    return testFor.some( function( v ) {
        return underTest.indexOf( v ) >= 0;
    });
};

export {
    convertToArray,
    convertStringToArray,
    convertObjectKeysToArray,
    doArraysIntersect
};