import Ember from 'ember';
import sinon from 'sinon';

export let called;
export let jqueryAliasSpy;
export let jquerySpy;
export let emberJquery;

export function setupSpies() {
    jqueryAliasSpy = sinon.spy( window, '$' );
    jquerySpy = sinon.spy( window, 'jQuery' );
    emberJquery = sinon.spy( Ember, '$' );
}

export function restoreSpies() {
    called = jqueryAliasSpy.called || jquerySpy.called || emberJquery.called;

    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();
}
