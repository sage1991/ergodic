import React, { FC, ReactNode, useEffect } from "react";
import { Piano } from "../../piano";
import { KeyCode } from "../../piano/KeyCode";


const piano = new Piano()
const keys = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./"

const map: any = {}
keys.split("").forEach((value, index) => {
  map[value] = index + 1
})

export const PianoTab: FC = () => {

  useEffect(() => {
    window.addEventListener("keypress", (e: KeyboardEvent) => {
      if (map[e.key]) {
        piano.play(map[e.key])
      }
    })
  }, [])


  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { keyCode } = (e.target as HTMLButtonElement).dataset
    piano.play(+keyCode! as KeyCode)
  }

  const buttons: ReactNode[] = []
  for (let i = 0; i < 88; i++) {
    buttons.push(
      <button key={i}
              onClick={onButtonClick}
              data-key-code={i + 1}
              style={{ display: "inline-block", width: 100, padding: 10, marginRight: 10 }}>
        { i + 1 }
      </button>
    )
  }

  const onInitPianoButtonClick = () => {
    piano
      .init()
      .then(() => {
        piano.play(KeyCode.C_5)
        piano.play(KeyCode.E_5)
        piano.play(KeyCode.G_5)
      })
  }

  return (
    <>
      <button onClick={onInitPianoButtonClick}>let's play piano!!</button>
      { buttons }
    </>
  )
}
