export class PasswordChecker {
  containsUpperCaseLetters(password: string): boolean {
    return /[A-Z]/.test(password);
  }
  containsLowerCaseLetters(password: string): boolean {
    return /[a-z]/.test(password);
  }
  containsNumbers(password: string): boolean {
    return /\d/.test(password);
  }
  isLongerThanEightChars(password: string): boolean {
    const MINIMUM_PASSWORD_LENGTH = 8;
    return password.length > MINIMUM_PASSWORD_LENGTH;
  }
  checkPasswordSecurity(password: string): string {
    let validTestsCounter = 0;
    if (this.containsUpperCaseLetters(password)) {
      validTestsCounter++;
    }
    if (this.containsLowerCaseLetters(password)) {
      validTestsCounter++;
    }
    if (this.containsNumbers(password)) {
      validTestsCounter++;
    }
    if (this.isLongerThanEightChars(password)) {
      validTestsCounter++;
    }
    if (validTestsCounter >= 3) {
      return 'secure';
    } else {
      return 'insecure';
    }
  }
}
