import test from 'ava';
import Nightmare from 'nightmare';
import w3cjs from 'w3cjs';
import http from 'http';
import got from 'got';

const URL = process.env.TEST_URL;

test('Console shouldn\'t output error or warning logs', async (t) => {
  const nightmare = Nightmare();
  const errors = [];
  const warnings = [];

  await nightmare
    .on('console', (type, message) => {
      if (type==='error')
        errors.push(message);

      if (type==='warn')
        warnings.push(message);
      })
    .goto(URL)
    .end();

  if (errors.length > 0 || errors.length > 0) {
    t.fail(JSON.stringify([ {errors}, {warnings} ], null, null));
  } else {
    t.pass();
  }
});

test('Should be validated by the W3C', async (t) => {
  function validate(validateUrl) {
    return new Promise(function(resolve, reject) {
      w3cjs.validate({
        file: validateUrl,
        output: 'json',
        callback: (err, res) => {
          resolve(res);
        }
      });
    });
  }

  const res = await validate(URL);
  if (res.messages.length > 0) {
    t.fail(JSON.stringify(res.messages, null, null));
  } else {
    t.pass();
  }
});
