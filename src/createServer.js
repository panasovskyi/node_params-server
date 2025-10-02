/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    const relativePath = new URL(req.url, 'http://localhost').pathname.slice(1);
    const params = new URL(req.url, 'http://localhost');
    const query = Object.fromEntries(params.searchParams);
    const parts = relativePath.split('/').filter(Boolean);

    const response = {
      parts,
      query,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = {
  createServer,
};
