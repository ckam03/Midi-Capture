import { convertMidi } from "../src/capturemidi";
import { expect, test } from "vitest";

test("Verify the correct notes are returned", () => {
	expect(convertMidi(61)).toBe("C#");
	expect(convertMidi(69)).toBe("A");
});
