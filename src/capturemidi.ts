let midiMessages: MidiData[] = [];

//A0 start at 21 C0 is 24
let keys: string[] = [
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B",
];

//probably dont need the map actually
//can just check the array for keys[number]
const notes = new Map();

for (let i = 0; i < keys.length; i++) {
	notes.set(i, keys[i]);
}
console.log(notes);

export function captureMidi() {
	const notes = midiMessages.map((midiMessage) =>
		convertMidi(midiMessage.note)
	);

	console.log(notes);
	midiMessages.length = 0;
}

export function convertMidi(midiNote: number): string {
	const number = midiNote % 12;
	return keys[number];
}

const button = document.querySelector(".capture-button");
button?.addEventListener("click", captureMidi);
