/* globals module */

module.exports = {
    description: 'Register test helpers',

    afterInstall: function( options ) {
        var file,
            textToInsert,
            afterText;

        // Import statement
        file         = 'tests/helpers/start-app.js',
        textToInsert = "import sl-registerTestHelpers from '../../helpers/sl/register-test-helpers';",
        afterText    = "import Ember from 'ember';";

        return this.insertIntoFile( file, textToInsert, { after: afterText } );
    }
};
