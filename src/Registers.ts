export class Registers {
  generalPurposeRegister: Uint8Array;
  //Stack pointer
  SP: Uint8Array;
  //Program Counter
  PC: Uint16Array;
  //16 bit register for storing addresses
  I: Uint16Array;

  constructor() {
    this.generalPurposeRegister = new Uint8Array(16);
    this.SP = new Uint8Array(1)
    this.PC = new Uint16Array(1)
    this.I = new Uint16Array(1)
  }
}