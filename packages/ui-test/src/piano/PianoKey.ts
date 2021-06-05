import { KeyCode } from "./KeyCode";

export class PianoKey {
  private bufferSource: AudioBufferSourceNode;

  constructor(
    private keycode: KeyCode,
    private destination: AudioDestinationNode,
    private audioBuffer: AudioBuffer
  ) {}

  play() {
    this.mute()
    this.bufferSource = new AudioBufferSourceNode(this.destination.context, { buffer: this.audioBuffer })
    const amp = new GainNode(this.destination.context)
    this.bufferSource.connect(amp).connect(this.destination)
    this.bufferSource.start();
  }

  mute() {
    if (this.bufferSource) {
      this.bufferSource.stop()
    }
  }
}

