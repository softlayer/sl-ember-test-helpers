import { test } from 'ember-qunit';
import ajax from '../../../../helpers/sl/synchronous/ajax';

module( 'Unit | Helper | sl/synchronous/ajax' );

test( 'it exists', function( assert ) {
    assert.ok( ajax, 'it exists' );
});

test( 'begin() with no parameter triggers "ajaxStart" event on document', function( assert ) {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.begin();

    assert.equal( spy.args[0][0], 'ajaxStart' );

    $.prototype.trigger.restore();
});

test( 'begin() with parameter triggers "ajaxSend" event on document', function( assert ) {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.begin( 'testEndpoint');

    assert.equal( spy.args[0][0], 'ajaxSend' );
    assert.equal( spy.args[0][1][1]['url'], 'testEndpoint' );

    $.prototype.trigger.restore();
});

test( 'end() with no parameter triggers "ajaxStop" event on document', function( assert ) {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.end();

    assert.equal( spy.args[0][0], 'ajaxStop' );

    $.prototype.trigger.restore();
});

test( 'end() with parameter triggers "ajaxComplete" event on document', function( assert ) {
    var spy = sinon.spy( $.prototype, 'trigger' );

    ajax.end( 'testEndpoint' );

    assert.equal( spy.args[0][0], 'ajaxComplete' );
    assert.equal( spy.args[0][1][1]['url'], 'testEndpoint' );

    $.prototype.trigger.restore();
});
