import { KeyCode } from "./KeyCode";
import axios from "axios";
import { PianoKey } from "./PianoKey";


export class Piano {
  private audio = new AudioContext()
  private keys: Map<KeyCode, PianoKey> = new Map()
  private initDone: boolean = false

  async init() {
    if (this.initDone) return

    const keyCodes: number[] = []
    for (let i = 0; i < 88; i++) {
      keyCodes.push(i + 1);
    }

    const sources = await Promise.all(keyCodes.map(code => {
      return (
        axios
          .request<Blob>({
            url: `/assets/media/${code}.mp3`,
            method: "get",
            responseType: "blob"
          })
          .then(({ data }) => {
            return { code, data }
          })
      )
    }))

    for (let i = 0; i < sources.length; i++) {
      const arrayBuffer: ArrayBuffer = await sources[i].data.arrayBuffer()
      const audioBuffer: AudioBuffer = await this.audio.decodeAudioData(arrayBuffer)
      this.keys.set(
        sources[i].code as KeyCode,
        new PianoKey(sources[i].code as KeyCode, this.audio.destination, audioBuffer)
      )
    }

    this.initDone = true
    return this.audio.resume()
  }

  play(keyCode: KeyCode) {
    const pianoKey = this.keys.get(keyCode)
    if (pianoKey) pianoKey.play();
  }
}
