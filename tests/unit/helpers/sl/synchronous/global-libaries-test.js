import Ember from 'ember';
import { test } from 'ember-qunit';
import * as globalLibraries from '../../../../helpers/sl/synchronous/global-libraries';
import sinon from 'sinon';

module( 'Unit | Helpers | sl/synchronous/global-libraries' );

test( 'it exists', function( assert ) {
    assert.ok(
        globalLibraries,
        'it exists'
    );
});

test( 'Passes when global libraries are not referenced', function( assert ) {
    const component = Ember.Object.extend().create({
        trigger: function() {}
    });

    globalLibraries.setupSpies();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});

test( 'triggerEvents triggers respective events', function( assert ) {
    const events = {
        'willInsertElement': sinon.spy(),
        'didInsertElement': sinon.spy(),
        'willClearRender': sinon.spy(),
        'willDestroyElement': sinon.spy()
    };

    const component = {
        trigger: function( eventName ) {
            this.events[ eventName ]();
        },

        events
    };

    globalLibraries.triggerEvents( component );

    Object.keys( events ).forEach( ( eventName ) => {
        const spy = events[ eventName ];
        assert.ok(
            spy.called,
            `${ eventName } was triggered`
        );
    });
});

test( 'called() returns true when $ is referenced', function( assert ) {
    globalLibraries.setupSpies();

    window.$();

    assert.ok(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});

test( 'called() returns true when jQuery is referenced', function( assert ) {
    globalLibraries.setupSpies();

    window.jQuery();

    assert.ok(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});

test( 'called() returns true when Ember.$ is referenced', function( assert ) {
    globalLibraries.setupSpies();

    Ember.$();

    assert.ok(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});

test( 'called() returns false when global libraries are not referenced', function( assert ) {
    globalLibraries.setupSpies();

    assert.notOk(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});
