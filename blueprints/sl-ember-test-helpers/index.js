/* globals module */

let EOL = require('os').EOL;

module.exports = {
    description: 'Register test helpers',

    afterInstall( options ) {
        // Import statement
        let firstFile = 'tests/helpers/start-app.js';
        let firstText = "import slregisterTestHelpers from './sl/register-test-helpers';";
        let firstLocationText = "import Ember from 'ember';" + EOL;

        // Execution of registration function
        let secondFile = 'tests/helpers/start-app.js';
        let secondText = "    slregisterTestHelpers();";
        let secondLocationText = "application.setupForTesting();" + EOL;

        // .jshintrc file
        let thirdFile = 'tests/.jshintrc';
        let thirdText = '    "contains",' + EOL + '    "requires",';
        let thirdLocationText = '"predef": [' + EOL;

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
