const Cowtest = require('./../../cowtest/dist/').default;

const seedUrl = 'http://127.0.0.1:8080';
const tests = `${__dirname}/test_random.py`;
const connector = 'python';
const reporter = 'console';

Cowtest(
  seedUrl,
  tests,
  connector,
  reporter,
);
