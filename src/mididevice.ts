type MidiData = {
	status: number;
	note: number;
	velocity: number;
};

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

		//using any here because typescript is giving msg the wrong type
		input.onmidimessage = (msg: any) => {
			//note status ie on off. Note/velocity are 0-127
			const [status, note, velocity] = msg.data;
			midiMessages.push({ status, note, velocity });
		};

		const selector = document.querySelector(".device-selector");
		selector?.appendChild(select);
	});
}

function captureMidi() {
	midiMessages.map((midiMessage) => {
		const { status, note, velocity } = midiMessage;
		console.log(`${status} ${note} ${velocity}`);
	});

	midiMessages.length = 0;
}

function convertToNotes() {}

const button = document.querySelector(".capture-button");
button?.addEventListener("click", captureMidi);
