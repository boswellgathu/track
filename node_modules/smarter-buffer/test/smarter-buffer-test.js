require('../smarter-buffer');
var assert = require('assert');
var vows = require('vows');

vows.describe('buffer').addBatch({
    'handles hello and world': {
        topic: function() {
        	buffer1 = new Buffer("hello ");
        	buffer2 = new Buffer("world");
        	return Buffer.smarterConcat([buffer1, buffer2]);
        },
        'should be hello world': function (buffer) {
           assert.equal(buffer.toString(),"hello world");
        }
    },
    'handles null': {
        topic: function() {
        	buffer1 = new Buffer("hello");
        	return Buffer.smarterConcat([buffer1, null]);
        },
        'hello and null should be hello': function (buffer) {
           assert.equal(buffer.toString(),"hello");
        }
    },
    'handles undefined': {
        topic: function() {
        	buffer1 = new Buffer("hello");
        	return Buffer.smarterConcat([buffer1, undefined]);
        },
        'hello and undefined should be hello': function (buffer) {
          assert.equal(buffer.toString(),"hello");
        }
    },
     'handles null and undefined in middle of array': {
        topic: function() {
        	buffer1 = new Buffer("hello ");
        	buffer2 = new Buffer("world");
        	return Buffer.smarterConcat([buffer1,null, undefined, buffer2]);
        },
        'should be hello world': function (buffer) {
           assert.equal(buffer.toString(),"hello world");
        }
    }
}).export(module); // Export the Suite