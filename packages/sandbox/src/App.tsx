import React, { FC, useEffect } from "react";
import { Toast } from "@ergodic/ui";


const logAsync = (message: string) => {
  return new Promise((resolve) => {
    resolve(message);
  })
}

export const App: FC = () => {

  useEffect(() => {
    ca()
  }, [])

  const ca = async () => {
    const e = await logAsync("hi")
    console.log(e);
  }


  return (
    <div>
      <Toast>hi</Toast>
    </div>
  )
}
