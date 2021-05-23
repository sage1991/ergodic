import React, { FC } from "react";


interface ToastProps {
  children: string;
}

export const Toast: FC<ToastProps> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}
