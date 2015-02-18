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
 * @param   {Ember.Application} app (optional)
 * @param   {array|string|object} underTest
 * @param   {mixed} testFor
 * @throws  {Ember.assert}
 * @returns {boolean}
 */
export default function() {
    var index     = ( 3 === arguments.length ) ? 1 : 0,
        underTest = arguments[index],
        testFor   = arguments[index+1];

    Ember.assert(
        'First non-optional argument must be an array, string or object',
        'object' === typeof underTest || 'string' === typeof underTest || Array.isArray( underTest )
    );

    Ember.assert(
        'Second non-optional argument must be an array, string or object',
        'object' === typeof testFor || 'string' === typeof testFor || Array.isArray( testFor )
    );

    return doArraysIntersect( convertToArray( underTest ), convertToArray( testFor ) );
}