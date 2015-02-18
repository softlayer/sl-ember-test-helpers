import Ember from 'ember';

/**
 * Test that an argument passed to a function is of the required type(s).
 *
 * @param  {function} methodUnderTest
 * @param  {array}    requiredTypes
 * @return {object}
 */
export default function( methodUnderTest, requiredTypes ) {
    var typesToTest = {
            'number' : {
                required  : false,
                testValue : 123987465,
                message   : 'Parameter was a number'
            },
            'string' : {
                required  : false,
                testValue : 'testString',
                message   : 'Parameter was a string'
            },
            'array' : {
                required  : false,
                testValue : [],
                message   : 'Parameter was an array'
            },
            'object' : {
                required  : false,
                testValue : {},
                message   : 'Parameter was an object'
            },
            'function' : {
                required  : false,
                testValue : function(){},
                message   : 'Parameter was a function'
            },
            'undefined' : {
                required  : false,
                testValue : undefined,
                message   : 'Parameter was undefined'
            },
            'boolean' : {
                required  : false,
                testValue : true,
                message   : 'Parameter was a boolean'
            }
        },
        testsThatHaveFailed = [],
        assertionThrown,
        assertionPassed,
        property,
        parameter;

    Ember.assert( 'First argument must be a function', 'function' === typeof methodUnderTest );
    Ember.assert( 'Second argument must be an array', Array.isArray( requiredTypes ) );

    // Set required parameter types
    requiredTypes.forEach( function( item ) {
        typesToTest[item]['required'] = true;
    });

    // Test each parameter type
    for ( property in typesToTest ) {
        if ( typesToTest.hasOwnProperty( property ) ) {

            // Reset flag
            assertionThrown = false;

            // Assign cleaner object reference
            parameter = typesToTest[property];

            // Test parameter
            try {
                methodUnderTest( parameter['testValue'] );
            } catch( error ) {
                assertionThrown = true;
            }

            assertionPassed = ( parameter['required'] ) ? !assertionThrown : assertionThrown;

            if ( !assertionPassed ) {
                testsThatHaveFailed.push( parameter['message'] );
            }
        }
    }

    return {
        requires: ( 0 === testsThatHaveFailed.length ) ? true : false,
        messages: testsThatHaveFailed.join( '; ' )
    };
}