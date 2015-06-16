import Ember from 'ember';

/**
 * Converts provided parameter into an array
 *
 * @function
 * @param {Array|String|Object} underTest
 * @throws {Ember.assert} If not provided an Array, String or Object
 * @returns {Array}
 */
let convertToArray = function( underTest ) {
    let returnArray;

    if ( Array.isArray( underTest ) ) {
        returnArray = underTest;

    } else {
        switch( Ember.typeOf( underTest ) ) {
            case 'string':
                returnArray = convertStringToArray( underTest );
                break;

            case 'object':
                returnArray = convertObjectKeysToArray( underTest );
                break;
        }
    }

    Ember.assert( 'String, Object or Array must be supplied', 'undefined' !== Ember.typeOf( returnArray ) );

    return returnArray;
};

/**
 * Splits a string into an array of individual "words" as delineated by spaces
 *
 * Primarily exists to convert format of call to .prop( 'class' )
 *
 * @function
 * @param {String} underTest
 * @throws {Ember.assert} If argument is not provided or is not a string
 * @returns {Array}
 */
let convertStringToArray = function( underTest ) {

    Ember.assert( 'String must be supplied', 'string' === Ember.typeOf( underTest ) );

    return underTest.split( ' ' );
};

/**
 * Returns an array containing all of the property names of an object
 *
 * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
 *
 * @function
 * @param {Object} underTest
 * @throws {Ember.assert} If argument is not provided or is not an object
 * @returns {Array}
 */
let convertObjectKeysToArray = function( underTest ) {

    Ember.assert( 'Object must be supplied', 'object' === Ember.typeOf( underTest ) && !Array.isArray( underTest ) );

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
let doArraysIntersect = function( underTest, testFor ) {

    Ember.assert( 'Parameters must be Arrays', ( Array.isArray( underTest ) && Array.isArray( testFor ) ) );

    return testFor.some( function ( v ) {
        return underTest.indexOf( v ) >= 0;
    });
};

export {
    convertToArray,
    convertStringToArray,
    convertObjectKeysToArray,
    doArraysIntersect
};