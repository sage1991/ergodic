import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { createUseStyles } from "react-jss";


interface ToastProps {
  children: string;
}

export const Toast: FC<ToastProps> = ({ children }) => {
  const { toast } = useStyle();
  return (
    <CSSTransition in timeout={300}>
      <div className={toast}>
        { children }
      </div>
    </CSSTransition>
  )
}


const useStyle = createUseStyles({
  toast: {
    border: "1px solid black",
    padding: 10
  }
}, { name: "ergodic" })
