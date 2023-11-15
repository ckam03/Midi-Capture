import { convertMidi } from "../src/capturemidi";
import { expect, test } from "vitest";

test("add c major scale", () => {
	expect(convertMidi(61)).toBe("C#");
});
