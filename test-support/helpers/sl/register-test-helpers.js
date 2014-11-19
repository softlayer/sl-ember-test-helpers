import Ember from 'ember';
import contains from './synchronous/contains';

export default function() {
    Ember.Test.registerHelper( 'contains', contains );
}