'use strict';

const FastBootAppServer = require('fastboot-app-server');
const config = require('./config/fastboot')(process.env.NODE_ENV);

let server = new FastBootAppServer(Object.assign({
  distPath: 'dist',
  port: process.env.PORT || 3000,
  gzip: true, // Optional - Enables gzip compression.
}, config));

server.start();
