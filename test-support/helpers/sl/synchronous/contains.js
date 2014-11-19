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
 * @param   {array|string|object} underTest
 * @param   {mixed} testFor
 * @param   {string} message
 * @returns {void}
 */
export default function( underTest, testFor, message ) {
    underTest = convertToArray( underTest );
    testFor   = convertToArray( underTest );

    ok( doArraysIntersect( underTest, testFor ), message );
}