import { IO } from "./IO";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
  io: IO;
  memory: Memory;
  registers: Registers;

  constructor(IO: IO) {
    this.io = IO;
    this.memory = new Memory();
    this.registers = new Registers();
  }



}