import Ember from 'ember';
import {
    contains,
    ajax
} from './synchronous';

export default function() {
    Ember.Test.registerHelper( 'contains', contains );
    Ember.Test.registerHelper( 'ajax', ajax );
}