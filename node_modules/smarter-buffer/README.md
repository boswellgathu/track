[![Build Status](https://travis-ci.org/alexbirkett/smarter-buffer.png)](https://travis-ci.org/alexbirkett/smarter-buffer)

smarter-buffer
==============

Adds smarterConcat method the Node.js Buffer object that ignores null and undefined list items

Motivation
==========
The Node.js Buffer.concat function balks when it encounters null or undefined items in the array. 

In the [Location IO project](https://github.com/alexbirkett/location.io), a buffer is used to store the unprocessed data from the socket. There can be several callbacks from the socket before the data is processed. After each callback, the buffer from the socket is concatenated with the existing buffer which contains the sum of the data from previous callbacks. When using the Buffer.concat function, the problem is the first callback from the socket. The buffer containing the unprocessed data is null (or undefined).

Usage
=====
    require('smarter-buffer');
    
    buffer1 = new Buffer("hello ");
    buffer2 = new Buffer("world");
    resultingBuffer = Buffer.smarterConcat([buffer1, null, undefined, buffer2]);
    
    // resultingBuffer contains "hello world"




