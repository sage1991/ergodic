import React, { FC } from "react";
import { PropsWithStyles } from "../types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";


interface Props extends PropsWithStyles {
  tabId: string;
  onClick?: (e: React.MouseEvent) => void;
  active?: boolean;
}

export const TabButton: FC<Props> = ({ tabId, children, onClick, active, style, className }) => {
  const { root } = useStyle()

  return (
    <button data-tab-id={tabId}
            className={clsx(root, { active }, className)}
            style={style}
            onClick={onClick}>
      { children }
    </button>
  )
}


const useStyle = createUseStyles({
  root: {
    border: "none",
    backgroundColor: "#ffffff",
    padding: "5px 10px",
    color: "#cccccc",
    cursor: "pointer",
    transition: "color 400ms",
    "&.active": {
      color: "#000000",
    },
    "&:focus": {
      outline: "none",
    }
  },
}, { name: "ergodic-tab-button" })
