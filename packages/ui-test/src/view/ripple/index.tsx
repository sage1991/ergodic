import React, { FC } from "react";
import { RippleBase } from "@ergodic/ui/dist/ripple";
import "./index.css";


export const RippleTab: FC = () => {
  return (
    <div className="ripple-container">
      <RippleBase />
      <button className="ripple-button">
        ripple 효과 버튼
        <RippleBase />
      </button>
    </div>
  )
}
