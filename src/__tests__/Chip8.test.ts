import { Chip8 } from "../Chip8"
import { IO } from "../IO";

describe("Chip8", () => {
  it("Sets Up Correctly", () => {
    let IO: IO = {
      render: () => {},
      getInput: () => {},
      outputSound: () => {},
      quit: () => {},
    }

    new Chip8(IO);
  })
})