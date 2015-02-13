import Ember from 'ember';
import {
    contains,
    ajax,
    requires
} from './synchronous';

export default function() {
    Ember.Test.registerHelper( 'contains', contains );
    Ember.Test.registerHelper( 'ajax', ajax );
    Ember.Test.registerHelper( 'requires', requires );
}