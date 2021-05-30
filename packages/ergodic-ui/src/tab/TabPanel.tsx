import React, { FC } from "react";


interface Props {
  tabId: string;
  active?: boolean;
}

export const TabPanel: FC<Props> = ({ children, active }) => {
  if (active) {
    return (
      <>
        { children }
      </>
    )
  }
  return null;
}
