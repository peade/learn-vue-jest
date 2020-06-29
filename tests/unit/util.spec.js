import { CheckPhone } from "@/utils/tools";

describe("CheckPhone", () => {
  it("check phon enumber when passed", () => {
    expect(CheckPhone("13512344321")).toBe(true);
  });
});
