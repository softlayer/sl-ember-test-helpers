import Ember from 'ember';

var AjaxHelper = function() {};

/**
 * Emulate the beginning of an AJAX request
 *
 * @param   {Ember.String} endpoint
 * @returns {void}
 */
AjaxHelper.prototype.begin = function( endpoint ) {
    Ember.run( function() {
        if ( endpoint ) {
            $( document ).trigger( 'ajaxSend', [ null, { url: endpoint } ] );
        } else {
            $( document ).trigger( 'ajaxStart' );
        }
    });
};

/**
 * Emulate the conclusion of an AJAX request
 *
 * @param   {Ember.String} endpoint
 * @returns {void}
 */
AjaxHelper.prototype.end = function( endpoint ) {
    Ember.run( function() {
        if ( endpoint ) {
            $( document ).trigger( 'ajaxComplete', [ null, { url: endpoint } ] );
        } else {
            $( document ).trigger( 'ajaxStop' );
        }
    });
};

var helper = new AjaxHelper();

export default helper;