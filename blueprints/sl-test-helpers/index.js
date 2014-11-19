var file         = 'tests/helpers/start-app.js',
    textToInsert = "import sl-registerTestHelpers from '../../helpers/sl/register-test-helpers';" + EOL,
    afterText    = "import Ember from 'ember';" + EOL;

module.exports = {
    insertIntoFile( file, textToInsert, { after: afterText } );
};
