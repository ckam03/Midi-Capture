import "./style.css";
import { getMidiDevices } from "./mididevice.ts";
import { captureMidi } from "./capturemidi.ts";

getMidiDevices().then();
captureMidi();
