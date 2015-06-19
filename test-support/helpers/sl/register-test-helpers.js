import Ember from 'ember';
import {
    contains,
    AjaxHelper,
    requires
} from './synchronous';

export default function() {
    Ember.Test.registerHelper( 'contains', contains );
    Ember.Test.registerHelper( 'Ajax', AjaxHelper );
    Ember.Test.registerHelper( 'requires', requires );
}