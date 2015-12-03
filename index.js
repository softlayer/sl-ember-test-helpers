/* jshint node: true */
'use strict';

module.exports = {
    name: 'sl-ember-test-helpers',

    included: function( app ) {
        this._super.included( app );

        if ( app.env === 'development' ) {
            app.import( 'bower_components/sinonjs/sinon.js' );
        }
    }
};
