import { PasswordChecker } from '../PasswordChecker';
test('AKZEPTRANZTEST Passwort ist sicher', () => {
  const passwordChecker = new PasswordChecker();
  expect(passwordChecker.checkPasswordSecurity('Abc12gjkdGD')).toBe('secure');
});

test('AKZEPTRANZTEST Passwort ist nicht sicher', () => {
  const passwordChecker = new PasswordChecker();
  expect(passwordChecker.checkPasswordSecurity('AbcgjkdG')).toBe('insecure');
});

// test('Passwort ist länger als 8 Zeichen, kein Fehler', () => {
//   const passwordChecker = new PasswordChecker();
//   expect(passwordChecker.isLongerThanEightChars('1234abcde')).toBe(true);
// });

// test('Passwort ist kürzer als 8 Zeichen, Fehler', () => {
//   const passwordChecker = new PasswordChecker();
//   expect(passwordChecker.isLongerThanEightChars('12345a')).toBe(false);
// });

// test('Passwort enthält mindestens eine Ziffer, kein Fehler', () => {
//   const passwortChecker = new PasswordChecker();
//   expect(passwortChecker.containsNumbers('a1bc')).toBe(true);
// });

// test('Passwort enthält keine Ziffer, Fehler', () => {
//   const passwortChecker = new PasswordChecker();
//   expect(passwortChecker.containsNumbers('abc')).toBe(false);
// });

// test('Passwort enthält mindestens einen Kleinbuchstaben, kein Fehler', () => {
//   const passwortChecker = new PasswordChecker();
//   expect(passwortChecker.containsLowerCaseLetters('aAAAA')).toBe(true);
// });

// test('Passwort enthält keinen Kleinbuchstaben, Fehler', () => {
//   const passwortChecker = new PasswordChecker();
//   expect(passwortChecker.containsLowerCaseLetters('1234')).toBe(false);
// });

// test('Passwort enthält mindestens einen Großbuchstaben, kein Fehler', () => {
//   const passwortChecker = new PasswordChecker();
//   expect(passwortChecker.containsUpperCaseLetters('aAAAA')).toBe(true);
// });

// test('Passwort enthält keinen Großbuchstaben, Fehler', () => {
//   const passwortChecker = new PasswordChecker();
//   expect(passwortChecker.containsUpperCaseLetters('1234')).toBe(false);
// });
