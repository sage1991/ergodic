import React, { Children, FC, ReactElement } from "react";


interface Props {
  tabId: string;
  children: ReactElement<{ active?: boolean, tabId: string }>[]
}

export const TabPanelControl: FC<Props> = ({ tabId, children }) => {
  return (
    <>
      {
        Children.map(children, (child) => React.cloneElement(child, {
          ...child.props, active: child.props.tabId === tabId
        }))
      }
    </>
  )
}
