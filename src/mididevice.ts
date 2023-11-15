let midiMessages: MidiData[] = [];

export async function getMidiDevices(): Promise<void> {
	const access = await navigator.requestMIDIAccess();
	const select = document.createElement("select");

	access.inputs.forEach((input: MIDIInput) => {
		let option: HTMLOptionElement = document.createElement("option");
		let name: string = input.name as string;

		option.value = name;
		option.innerHTML = name;
		select.appendChild(option);

		const selector = document.querySelector(".device-selector");
		selector?.appendChild(select);

		//listens for incoming midi events
		input.onmidimessage = onMidiSuccess;
	});
}

//using any here because typescript is giving msg the wrong type and not giving me the data property
function onMidiSuccess(msg: any) {
	const [status, note, velocity] = msg.data;
	midiMessages.push({ status, note, velocity });
}

function captureMidi() {
	midiMessages.map((midiMessage) => {
		const { status, note, velocity } = midiMessage;
		console.log(`${status} ${note} ${velocity}`);
		//convert then returned the new midi
		convertToNotes(midiMessage);
	});

	//print the converted notes to the console
	//resets the capture buffer to 0 after midi is captured
	midiMessages.length = 0;
}

function convertToNotes(midiMessage: MidiData) {
	//convert the notes
}
