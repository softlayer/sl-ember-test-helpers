import Ember from 'ember';
import {
    convertToArray,
    convertStringToArray,
    convertObjectKeysToArray,
    doArraysIntersect
} from '../utils/utils';

/**
 * Test whether value(s) are contained in other values.
 *
 * Value(s) to test for can be a single value or an array of values.
 * All values must be present in the values being tested or the test will fail
 *
 * @function contains
 * @param {ember/Application} [app]
 * @param {Array|String|Object} underTest
 * @param {Array|String|Object} testFor
 * @throws {ember/Assert}
 * @returns {Boolean}
 */
export default function() {
    let index = ( 3 === arguments.length ) ? 1 : 0;
    let underTest = arguments[ index ];
    let testFor = arguments[ index + 1 ];

    Ember.assert(
        'First non-optional argument must be an array, string or object',
        'object' === Ember.typeOf( underTest ) || 'string' === Ember.typeOf( underTest ) || Array.isArray( underTest )
    );

    Ember.assert(
        'Second non-optional argument must be an array, string or object',
        'object' === Ember.typeOf( testFor ) || 'string' === Ember.typeOf( testFor ) || Array.isArray( testFor )
    );

    return doArraysIntersect( convertToArray( underTest ), convertToArray( testFor ) );
}