/* jshint node: true */
'use strict';

module.exports = {
    name: 'sl-ember-test-helpers',

    included: function( app ) {
        this._super.included( app );

        if ( app.env !== 'production' ) {
            app.import( 'bower_components/sinonjs/sinon.js', { type: 'test' } );
        }
    }
};
