import "./style.css";
import { getMidiDevices } from "./mididevice.ts";
import { captureMidi } from "./capturemidi.ts";

await getMidiDevices();
captureMidi();
