import React, { FC, ReactNode, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { CSSTransition } from "react-transition-group";


export const RippleBase: FC = () => {
  const { root, ripple, rippleEnter, rippleEnterActive } = useStyle()
  const [ ripples, setRipples ] = useState<ReactNode[]>([])
  const ref = useRef<HTMLSpanElement>(null);

  const onClick = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { width, height } = ref.current.getBoundingClientRect()

    const size = Math.max(clientY, clientX);
    console.log(size);

    setRipples((prev) => [
      ...prev,
      <CSSTransition key={Date.now()} timeout={300}
                     classNames={{ enter: rippleEnter, enterActive: rippleEnterActive }}
                     onEntered={() => {

                     }}>
        <span className={ripple} style={{ width: "100%", height: "100%", left: clientX, top: clientY }} />
      </CSSTransition>
    ])
  }

  return (
    <span ref={ref} className={root} onClick={onClick}>
      { ripples }
    </span>
  )
}

const useStyle = createUseStyles({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  },
  ripple: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  rippleEnter: {
    transform: "scale(0)",
    opacity: 1
  },
  rippleEnterActive: {
    transform: "scale(1)",
    opacity: 0,
    transition: "transform 300ms, opacity 300ms"
  }
}, { name: "ergodic-ripple-base" })
