import Ember from 'ember';
import sinon from 'sinon';

export let called;
export let jqueryAliasSpy;
export let jquerySpy;
export let emberJquerySpy;

export function setupSpies() {
    jqueryAliasSpy = sinon.spy( window, '$' );
    jquerySpy = sinon.spy( window, 'jQuery' );
    emberJquerySpy = sinon.spy( Ember, '$' );
}

export function triggerEvents( component ) {
    Ember.run(() => {
        [
          'willInsertElement',
          'didInsertElement',
          'willClearRender',
          'willDestroyElement'
        ].map(( event ) => {
            component.trigger( event );
        });
    });
}

export function called() {
    return jqueryAliasSpy.called || jquerySpy.called || emberJquerySpy.called;
}

export function restoreSpies() {
    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();
}

export function resetSpies() {
    jqueryAliasSpy.reset();
    jquerySpy.reset();
    emberJquerySpy.reset();
}

