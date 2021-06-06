import { getKeyCodeSet, KeyCode } from "./KeyCode";
import axios from "axios";
import { PianoKey } from "./PianoKey";


interface KeySoundSource {
  code: KeyCode;
  source: Blob;
}


let pressed: number

export class Piano {
  private audio = new AudioContext()
  private keyMap: Map<KeyCode, PianoKey> = new Map()
  private isInitialized: boolean = false

  async init() {
    if (this.isInitialized) return

    // load sound file from server
    const sources: KeySoundSource[] = await Promise.all(getKeyCodeSet().map(loadSoundSource))

    await Promise.all(sources.map(({ source, code }) => {
      return (
        source
          .arrayBuffer()
          .then(buffer => this.audio.decodeAudioData(buffer))
          .then(audio => {
            const pianoKey = new PianoKey(code, this.audio.destination, audio)
            this.keyMap.set(code, pianoKey)
          })
      )
    }))

    this.isInitialized = true
    return this.audio.resume()
  }

  play(keyCode: KeyCode) {
    if (pressed) {
      Date.now() - pressed > 1000 && this.muteAll()
    }
    pressed = Date.now()

    const pianoKey = this.keyMap.get(keyCode)
    if (pianoKey) pianoKey.play();
  }

  mute(keyCode: KeyCode) {
    const pianoKey = this.keyMap.get(keyCode)
    if (pianoKey) pianoKey.mute();
  }

  muteAll() {
    getKeyCodeSet().forEach((code) => {
      this.mute(code)
    })
  }
}


const loadSoundSource = (code: KeyCode): Promise<KeySoundSource> => {
  return (
    loadFile(`${code}.mp3`)
      .then((source) => ({ code, source }))
  )
}

const loadFile = (fileName: string): Promise<Blob> => {
  return (
    axios
      .request<Blob>({
        url: `/assets/media/${fileName}`,
        method: "get",
        responseType: "blob"
      })
      .then((response) => response.data)
  )
}
