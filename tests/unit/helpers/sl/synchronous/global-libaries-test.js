import { test } from 'ember-qunit';
import * as globalLibraries from '../../../../helpers/sl/synchronous/global-libraries';

module( 'Unit | Helpers | sl/synchronous/global-libraries' );

test( 'it exists', function( assert ) {
    assert.ok(
        globalLibraries,
        'it exists'
    );
});

test( 'Functions as expected', function( assert ) {
    globalLibraries.setupSpies();

    globalLibraries.restoreSpies();

    assert.equal(
        globalLibraries.called,
        false,
        'There are no references to Ember.$, $ or jQuery'
    );
});
