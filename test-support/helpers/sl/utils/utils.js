import Ember from 'ember';

/**
 * Converts provided parameter into an array
 *
 * @function convertToArray
 * @param   {array|string|object} underTest
 * @throws  {Ember.assert} If not provided an Array, String or Object
 * @returns {array}
 */
var convertToArray = function( underTest ) {
    var returnArray;

    if ( Array.isArray( underTest ) ) {
        returnArray = underTest;

    } else {
        switch( typeof underTest ) {
            case 'string':
                    returnArray = convertStringToArray( underTest );
                break;

            case 'object':
                    returnArray = convertObjectKeysToArray( underTest );
                break;
        }
    }

    Ember.assert( 'String, Object or Array must be supplied', 'undefined' !== typeof returnArray );

    return returnArray;
};

/**
 * Splits a string into an array of individual "words" as delineated by spaces
 *
 * Primarily exists to convert format of call to .prop( 'class' )
 *
 * @function convertStringToArray
 * @param   {string} underTest
 * @throws  {Ember.assert} If argument is not provided or is not a string
 * @returns {array}
 */
var convertStringToArray = function( underTest ) {

    Ember.assert( 'String must be supplied', 'string' === typeof underTest );

    return underTest.split( ' ' );
};

/**
 * Returns an array containing all of the property names of an object
 *
 * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
 *
 * @function convertObjectKeysToArray
 * @param   {object} underTest
 * @throws  {Ember.assert} If argument is not provided or is not an object
 * @returns {array}
 */
var convertObjectKeysToArray = function( underTest ) {

    Ember.assert( 'Object must be supplied', 'object' === typeof underTest );

    return Object.keys( underTest );
};

/**
 * [doArraysIntersect description]
 *
 * @function doArraysIntersect
 * @param  {array} underTest
 * @param  {array} testFor
 * @return {boolean}
 */
var doArraysIntersect = function( underTest, testFor ) {

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