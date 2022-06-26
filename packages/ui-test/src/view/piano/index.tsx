import React, { FC, ReactNode, useEffect, useState } from "react";
import { Piano } from "../../piano";
import { KeyCode } from "../../piano/KeyCode";
import  "./piano.css"
import clsx from "clsx";

const piano = new Piano()
const keys = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./"

const map: any = {}
keys.split("").forEach((value, index) => {
  map[value] = index + 1
})

export const PianoTab: FC = () => {
  const [press, setPress] = useState<KeyCode>();
  useEffect(() => {
    window.addEventListener("keypress", (e: KeyboardEvent) => {
      if (map[e.key]) {
        piano.play(map[e.key])
      }
    })
    piano.init()
  }, [])


  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { keyCode } = (e.target as HTMLButtonElement).dataset
    piano.play(+keyCode! as KeyCode)
    setPress(+keyCode! as KeyCode)
  }

  const buttons: ReactNode[] = []
  for (let i = 0; i < 88; i++) {
    buttons.push(
      <button key={i}
              onClick={onButtonClick}
              data-key-code={i + 1}
              className={clsx(KeyCode[i + 1].includes("_SHARP")? "black" : "white",
                  press === i + 1? "pressed" : "")}>
        {KeyCode[i + 1]}
      </button>
    )
  }

  return (
    <>
      { buttons }
    </>
  )
}
