import { midiMessages } from "./mididevice";

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

let capturedNotes = document.querySelector(".notes");

// if (status === 144 && velocity > 0) {
// 	let noteName = midiNoteToName(note);
// 	renderNote('Note On: ' + noteName);
//   } else if (status === 128 || (status === 144 && velocity === 0)) {
// 	let noteName = midiNoteToName(note);
// 	renderNote('Note Off: ' + noteName);
//   }

export function captureMidi() {
	const notes = midiMessages.map((midiMessage) => {
		console.log(
			`Note: ${midiMessage.note} ${midiMessage.velocity} ${midiMessage.status}`
		);
		return convertMidi(midiMessage.note);
	});

	console.log(notes);
	renderNotes(notes);
	midiMessages.length = 0;
}

export function convertMidi(midiNote: number): string {
	const octave = Math.floor(midiNote / 12) - 1;
	const number = midiNote % 12;
	return notes[number] + octave;
}

function renderNotes(notes: string[]) {
	for (let i = 0; i < notes.length; i++) {
		const note = document.createElement("div");
		note.className = "note";
		note.textContent = notes[i];
		capturedNotes?.appendChild(note);
	}
}

function downloadMidi() {
	// const blob = new Blob([Buffer.from(midi.toArray())], {
	// 	type: "audio/midi",
	// });
	// const downloadLink = document.createElement("a");
	// downloadLink.href = window.URL.createObjectURL(blob);
	// downloadLink.download = "midi.mid";
}

const button = document.querySelector(".capture-button");
const downloadButton = document.querySelector(".download-button");

button?.addEventListener("click", captureMidi);
downloadButton?.addEventListener("click", downloadMidi);
