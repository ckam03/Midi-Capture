export function getMidiDevices() {
	navigator.requestMIDIAccess().then((access) => {
		const select = document.createElement("select");

		access.inputs.forEach((input: MIDIInput) => {
			let option = document.createElement("option");
			let name = input.name as string;

			option.value = name;
			option.innerHTML = name;
			select.appendChild(option);
			
			input.onmidimessage = (msg) => {
				console.log(msg)
			}
		});

		const app = document.querySelector(".device-selector");
		app?.appendChild(select);
	});
}

export function getMidiMessages() {}
