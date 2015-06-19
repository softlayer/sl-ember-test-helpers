import Ember from 'ember';

/**
 * @module
 */

/**
 * Sets up the Ajax events for unit tests
 *
 * @class
 */
class AjaxHelper {

    /**
     * Emulate the beginning of an AJAX request
     *
     * @function
     * @static
     * @param {String} [endpoint]
     * @returns {undefined}
     */
    static begin( endpoint ) {
        Ember.run( () => {
            if ( endpoint ) {
                Ember.$( document ).trigger( 'ajaxSend', [ null, { url: endpoint } ] );
            } else {
                Ember.$( document ).trigger( 'ajaxStart' );
            }
        });
    }

    /**
     * Emulate the conclusion of an AJAX request
     *
     * @function
     * @static
     * @param {String} [endpoint]
     * @returns {undefined}
     */
    static end( endpoint ) {
        Ember.run( () => {
            if ( endpoint ) {
                Ember.$( document ).trigger( 'ajaxComplete', [ null, { url: endpoint } ] );
            } else {
                Ember.$( document ).trigger( 'ajaxStop' );
            }
        });
    }
}

export default AjaxHelper;