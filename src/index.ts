export class Rechner {
  private basis: number;
  constructor(basis: number) {
    this.basis = basis;
  }
  public addiereZurBasis(zahl: number): number {
    debugger;
    return this.basis + zahl;
  }
}