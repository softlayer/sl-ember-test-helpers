import Ember from 'ember';
import {
    contains
} from './synchronous';

export default function() {
    Ember.Test.registerHelper( 'contains', contains );
}