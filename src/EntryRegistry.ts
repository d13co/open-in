import { AlgoSurf } from './Entries/AlgoSurf.js';
import { Allo } from './Entries/Allo.js';
import { Flow } from './Entries/Flow.js';
import { Lora } from './Entries/Lora.js';
import { Pera } from './Entries/Pera.js';
import { OpenInEntry } from './AbstractOpenInEntry.js';

export const EntryRegistry: OpenInEntry[] = [
  new Allo(),
  new Pera(),
  new Lora(),
  new AlgoSurf(),

  new Flow(),
];
