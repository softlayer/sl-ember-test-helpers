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
     * @param {String} endpoint
     * @returns {undefined}
     */
    begin( endpoint ) {
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
     * @param {String} endpoint
     * @returns {undefined}
     */
    end( endpoint ) {
        Ember.run( () => {
            if ( endpoint ) {
                Ember.$( document ).trigger( 'ajaxComplete', [ null, { url: endpoint } ] );
            } else {
                Ember.$( document ).trigger( 'ajaxStop' );
            }
        });
    }
}

let helper = new AjaxHelper();

export default helper;