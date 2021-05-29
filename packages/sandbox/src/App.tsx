import React, { FC, useEffect, useState } from "react";
import { Toast } from "@ergodic/ui";


export const App: FC = () => {
  const [ show, setShow ] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000);
    setTimeout(() => {
      setShow(false)
    }, 6000);
  }, [])

  return (
    <div>
      <Toast show={show}>hi</Toast>
    </div>
  )
}
