import React, { FC, useEffect, useState } from "react";
import { ApplicationRoute } from "./components/common";


export const App: FC = () => {
  return (
      <ApplicationRoute />
  )
}

// [ 1단계 ]
// install react-route react-route-dom
// lerna add react-router --scope=@ergodic/sandbox
// lerna add react-router-dom --scope=@ergodic/sandbox

// [ 2단계 ]
// route 설정