import React, { FC, ReactNode, useCallback, useRef, useState } from "react";
import { createUseStyles } from "react-jss";


interface RippleState {
  id: number;
  ripple: ReactNode;
}

export const RippleBase: FC = () => {
  const { root } = useStyle()
  const [ ripples, setRipples ] = useState<RippleState[]>([])
  const ref = useRef<HTMLSpanElement>(null);

  const onRippleEnd = useCallback((id: number) => {
    setRipples((prev) => {
      return prev.filter(state => state.id !== id)
    })
  }, [ setRipples ])

  const onClick = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    if (!ref.current) return

    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const rippleX = Math.round(clientX - left)
    const rippleY = Math.round(clientY - top)
    const size = Math.max(width * 2, height * 2)
    const id = Date.now()
    const ripple = <Ripple key={id} id={id} size={size}
                           rippleX={rippleX} rippleY={rippleY}
                           onRippleEnd={onRippleEnd} />
    setRipples((prev) => [
      ...prev,
      { id, ripple }
    ])
  }

  return (
    <span ref={ref} className={root} onClick={onClick}>
      { ripples.map(state => state.ripple) }
    </span>
  )
}


interface RippleProps {
  id: number;
  size: number;
  rippleX: number;
  rippleY: number;
  onRippleEnd: (id: number) => void;
}

const Ripple: FC<RippleProps> = ({ id, size, rippleX, rippleY, onRippleEnd }) => {
  const { ripple } = useStyle()

  const onAnimationEnd = () => {
    onRippleEnd(id);
  }

  return (
      <span className={ripple}
            style={{ width: size, height: size, left: rippleX - (size / 2), top: rippleY - (size / 2) }}
            onAnimationEnd={onAnimationEnd} />
  )
}


const useStyle = createUseStyles({
  root: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden"
  },
  ripple: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    animation: "$ripple 500ms linear",
    animationFillMode: "forwards"
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(0)",
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    "70%": {
      transform: "scale(0.9)",
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0,
    }
  }
}, { name: "ergodic-ripple" })
