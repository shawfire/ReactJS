const Alert = require('./Alert')

test('Cretate an Alert Component', () => {
  expect(Alert({alert_type:"success",
      str:"Alert from stateless functional component."})
    .toBe(
      '<Alert alert_type="success" str="Alert from stateless functional component."/>');
});
