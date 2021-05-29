import React, { CSSProperties, FC } from "react";
import { CSSTransition } from "react-transition-group";
import { createUseStyles } from "react-jss";
import clsx from "clsx";


interface ToastProps {
  show?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: string;
  className?: string;
  style?: CSSProperties;
}

export const Toast: FC<ToastProps> = ({ show = true, onClick, className, style, children }) => {
  const { root, enter, enterActive, exit, exitActive } = useStyle();

  return (
    <CSSTransition in={show} timeout={1000} unmountOnExit
                   classNames={{ enter, enterActive, exit, exitActive }}>
      <div className={clsx(root, className)} onClick={onClick} style={style}>
        { children }
      </div>
    </CSSTransition>
  )
}


const useStyle = createUseStyles({
  root: {
    color: "#ffffff",
    padding: "5px 10px",
    borderRadius: 16,
    position: "fixed",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    cursor: "pointer"
  },
  enter: {
    opacity: 0
  },
  enterActive: {
    opacity: 1,
    transition: "opacity 1000ms"
  },
  exit: {
    opacity: 1,
  },
  exitActive: {
    opacity: 0,
    transition: "opacity 1000ms"
  }
}, { name: "ergodic-toast" })
