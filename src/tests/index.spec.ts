import { Rechner } from '../index';

test('Erzeugen und 5 addieren', () => {
  const rechner = new Rechner(5);
  expect(rechner.addiereZurBasis(5)).toBe(10);
});
