/* globals module */

var EOL = require('os').EOL;

module.exports = {
    description: 'Register test helpers',

    afterInstall: function( options ) {
        // Import statement
        var firstFile = 'tests/helpers/start-app.js';
        var firstText = "import slRegisterTestHelpers from './sl/register-test-helpers';";
        var firstLocationText = "import Ember from 'ember';" + EOL;

        // Execution of registration function
        var secondFile = 'tests/helpers/start-app.js';
        var secondText = "    slRegisterTestHelpers();";
        var secondLocationText = "application.setupForTesting();" + EOL;

        // .jshintrc file
        var thirdFile = 'tests/.jshintrc';
        var thirdText = '    "contains",' + EOL + '    "requires",';
        var thirdLocationText = '"predef": [' + EOL;

        return this.insertIntoFile( firstFile, firstText, { after: firstLocationText } )
            // Execution of registration function
            .then( function() {
                return this.insertIntoFile( secondFile, secondText, { after: secondLocationText } );
            }.bind( this ))
            .then( function() {
                return this.insertIntoFile( thirdFile, thirdText, { after: thirdLocationText } );
            }.bind( this ))
            .then( function() {
                return this.addAddonToProject( 'ember-sinon' );
            }.bind( this ));
    },

    normalizeEntityName: function() {}
};
