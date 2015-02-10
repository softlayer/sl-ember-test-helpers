import {
  test
} from 'ember-qunit';

import ajax from '../../../../helpers/sl/synchronous/ajax';

module( 'Unit - helpers:sl/synchronous/ajax' );

test( 'it exists', function() {
  ok( ajax, 'it exists' );
});

test( 'begin() with no parameter triggers "ajaxStart" event on document', function() {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.begin();

    equal( spy.args[0][0], 'ajaxStart' );

    $.prototype.trigger.restore();
});

test( 'begin() with parameter triggers "ajaxSend" event on document', function() {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.begin( 'testEndpoint');

    equal( spy.args[0][0], 'ajaxSend' );
    equal( spy.args[0][1][1]['url'], 'testEndpoint' );

    $.prototype.trigger.restore();
});

test( 'end() with no parameter triggers "ajaxStop" event on document', function() {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.end();

    equal( spy.args[0][0], 'ajaxStop' );

    $.prototype.trigger.restore();
});

test( 'end() with parameter triggers "ajaxComplete" event on document', function() {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.end( 'testEndpoint' );

    equal( spy.args[0][0], 'ajaxComplete' );
    equal( spy.args[0][1][1]['url'], 'testEndpoint' );

    $.prototype.trigger.restore();
});
