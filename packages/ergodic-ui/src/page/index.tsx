import React, { CSSProperties, FC } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";


interface Props {
  className?: string;
  style?: CSSProperties;
  onScroll?: (e: React.UIEvent) => void;
}

export const Page: FC<Props> = ({ children, className, style, onScroll }) => {
  const { root } = useStyle()

  return (
    <div className={clsx(root, className)} style={style}
         onScroll={onScroll}>
      { children }
    </div>
  )
}

const useStyle = createUseStyles({
  root: {
    width: "100vw",
    height: "100vh",
    overflow: "auto"
  }
}, { name: "ergodic-page" })
