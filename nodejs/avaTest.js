import test from 'ava';
import Nightmare from 'nightmare';
import w3cjs from 'w3cjs';

const URL = process.env.TEST_URL;

test('Console shouldn\'t output error logs', async (t) => {
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

    if (errors.length > 0) {
      t.fail(errors)
    } else {
      t.pass();
    }
});

test('Console shouldn\'t output warning logs', async (t) => {
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

  if (warnings.length > 0) {
    t.fail(warnings)
  } else {
    t.pass();
  }
});

test.serial('Should be validated by the W3C', async (t) => {
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
    t.fail(res.messages)
  } else {
    t.pass();
  }
});
