const Cowtest = require('./../../cowtest/dist/').default;

const seedUrl = 'http://127.0.0.1:8080/';
const tests = `${__dirname}/avatest.js`;
const connector = 'ava';
const reporter = 'html';

Cowtest(
  seedUrl,
  tests,
  connector,
  reporter,
);
