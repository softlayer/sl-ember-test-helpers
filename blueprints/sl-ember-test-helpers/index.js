/* globals module */

var EOL = require('os').EOL;

module.exports = {
    description: 'Register test helpers',

    afterInstall( options ) {
        // Import statement
        var firstFile = 'tests/helpers/start-app.js';
        var firstText = "import slregisterTestHelpers from './sl/register-test-helpers';";
        var firstLocationText = "import Ember from 'ember';" + EOL;

        // Execution of registration function
        var secondFile = 'tests/helpers/start-app.js';
        var secondText = "    slregisterTestHelpers();";
        var secondLocationText = "application.setupForTesting();" + EOL;

        // .jshintrc file
        var thirdFile = 'tests/.jshintrc';
        var thirdText = '    "contains",' + EOL + '    "requires",';
        var thirdLocationText = '"predef": [' + EOL;

        // Import statement
        return this.insertIntoFile( firstFile, firstText, { after: firstLocationText } )

            // Execution of registration function
            .then( () => {
                return this.insertIntoFile( secondFile, secondText, { after: secondLocationText } );
            })

            // .jshintrc file
            .then( () => {
                return this.insertIntoFile( thirdFile, thirdText, { after: thirdLocationText } );
            });
    },

    normalizeEntityName() {}
};
