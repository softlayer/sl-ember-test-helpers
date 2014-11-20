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
 * @param   {string} message
 * @returns {void}
 */
export default function() {
    var index     = ( 3 === arguments.length ) ? 0 : 1,
        underTest = arguments[index],
        testFor   = arguments[index+1],
        message   = arguments[index+2];

    underTest = convertToArray( underTest );
    testFor   = convertToArray( testFor );

    ok( doArraysIntersect( underTest, testFor ), message );
}