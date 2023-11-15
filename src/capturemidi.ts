let midiMessages: MidiData[] = [];

const notes: string[] = [
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

export function captureMidi() {
	const notes = midiMessages.map((midiMessage) =>
		convertMidi(midiMessage.note)
	);

	console.log(notes);
	midiMessages.length = 0;
}

export function convertMidi(midiNote: number): string {
	const number = midiNote % 12;
	return notes[number];
}

const button = document.querySelector(".capture-button");
button?.addEventListener("click", captureMidi);
