import Ember from 'ember';

/**
 * @module
 */

/**
 * Test that an argument passed to a function is of the required type(s).
 *
 * @function
 * @param {Function} methodUnderTest
 * @param {Array} requiredTypes
 * @returns {Object}
 */
const requiresHelper = function( methodUnderTest, requiredTypes ) {
    const typesToTest = {
        'number': {
            required: false,
            testValue: 123987465,
            message: 'Parameter was a number'
        },
        'string': {
            required: false,
            testValue: 'testString',
            message: 'Parameter was a string'
        },
        'array': {
            required: false,
            testValue: [],
            message: 'Parameter was an array'
        },
        'object': {
            required: false,
            testValue: {},
            message: 'Parameter was an object'
        },
        'function': {
            required: false,
            testValue() {},
            message: 'Parameter was a function'
        },
        'undefined': {
            required: false,
            testValue: undefined,
            message: 'Parameter was undefined'
        },
        'boolean': {
            required: false,
            testValue: true,
            message: 'Parameter was a boolean'
        },
        'null': {
            required: false,
            testValue: null,
            message: 'Parameter was null'
        }
    };

    Ember.assert(
        'First argument must be a function',
        'function' === Ember.typeOf( methodUnderTest )
    );
    Ember.assert(
        'Second argument must be an array',
        'array' === Ember.typeOf( requiredTypes )
    );

    // Set required parameter types
    requiredTypes.forEach( ( item ) => {
        typesToTest[item][ 'required' ] = true;
    });

    const testsThatHaveFailed = [];
    let property;

    // Test each parameter type
    for ( property in typesToTest ) {
        if ( typesToTest.hasOwnProperty( property ) ) {
            // Reset flag
            let assertionThrown;
            assertionThrown = false;

            // Assign cleaner object reference
            const parameter = typesToTest[property];

            // Test parameter
            try {
                methodUnderTest( parameter[ 'testValue' ] );
            } catch( error ) {
                assertionThrown = true;
            }

            let assertionPassed;
            assertionPassed = ( parameter[ 'required' ] ) ? !assertionThrown : assertionThrown;

            if ( !assertionPassed ) {
                testsThatHaveFailed.push( parameter[ 'message' ] );
            }
        }
    }

    return {
        requires: 0 === testsThatHaveFailed.length,
        messages: testsThatHaveFailed.join( '; ' )
    };
};

export default requiresHelper;