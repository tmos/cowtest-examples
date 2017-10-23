import test from 'ava';
import Nightmare from 'nightmare';

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
    .goto(process.env.TEST_URL)
    .end();

  t.is(errors.length, 0);
  t.is(warnings.length, 0);
});
