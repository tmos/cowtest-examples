const Cowtest = require("./../../cowtest/dist/").default;

const seedUrl = "http://127.0.0.1:8080/";
const tests = `${__dirname}/avaTest.js`;
const connector = "ava";
const reporter = "html";
const dataSaveMethod = { method: 'jsonl', coStr: __dirname + '/data.jsonl' }

Cowtest({
  seedUrl,
  tests,
  connector,
  dataSaveMethod,
  reporter
});
