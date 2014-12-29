/* globals module */

var EOL = require('os').EOL;

module.exports = {
    description: 'Register test helpers',

    afterInstall: function( options ) {
            // Import statement
        var firstFile          = 'tests/helpers/start-app.js',
            firstText          = "import slregisterTestHelpers from './sl/register-test-helpers';",
            firstLocationText  = "import Ember from 'ember';" + EOL,

            // Execution of registration function
            secondFile         = 'tests/helpers/start-app.js',
            secondText         = "    slregisterTestHelpers();",
            secondLocationText = "application.setupForTesting();" + EOL,

            // .jshintrc file
            thirdFile          = 'tests/.jshintrc',
            thirdText          = '    "contains",',
            thirdLocationText  = '"predef": [' + EOL;

            // Import statement
        return this.insertIntoFile( firstFile, firstText, { after: firstLocationText } )

            // Execution of registration function
            .then( function() {
                return this.insertIntoFile( secondFile, secondText, { after: secondLocationText } );
            }.bind(this))

            // .jshintrc file
            .then( function() {
                return this.insertIntoFile( thirdFile, thirdText, { after: thirdLocationText } );
            }.bind(this));
    },

    normalizeEntityName: function() {}
};
