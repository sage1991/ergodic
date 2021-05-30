import React, { Children, CSSProperties, FC, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { PropsWithStyles } from "../types";


interface Props extends PropsWithStyles {
  indicatorProps?: {
    className?: string;
    style?: CSSProperties;
  };
  tabId: string;
  onTabIdChange?: (tabId: string) => void;
  children: React.ReactElement<{ tabId: string, active?: boolean }>[];
}

export const TabBar: FC<Props> = ({ className, style, children, indicatorProps, tabId, onTabIdChange }) => {
  const { root, indicator } = useStyle()
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const tabBar = useRef<HTMLDivElement>(null)
  const tabButtons = useRef<HTMLElement[]>([])
  const childrenIds = Children.map(children, (child) => child.props.tabId)


  useEffect(() => {
    if (!tabBar.current) return
    tabButtons.current = []
    Array.prototype.forEach.call(tabBar.current.children, (element: HTMLElement) => {
      if (element.dataset.role !== "indicator-container") {
        tabButtons.current.push(element)
      }
    })
  }, [ Children.count(children) ])


  useEffect(() => {
    if (!indicatorRef.current || tabButtons.current.length === 0) return

    const index = childrenIds.findIndex((childId) => childId === tabId)
    const { offsetWidth, offsetLeft } = tabButtons.current[index]
    changeIndicator(indicatorRef.current, offsetWidth, offsetLeft)
    tabButtons.current[index].scrollIntoView({ behavior: "smooth" })
  }, [ tabId ])


  const onTabBarClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.matches("[data-tab-id]")) return
    const { tabId } = target.dataset
    onTabIdChange && onTabIdChange(tabId!)
  }


  return (
    <div ref={tabBar} className={clsx(root, className)} style={style} onClick={onTabBarClick}>
      {
        Children.map(children, (child) => React.cloneElement(child, {
          ...child.props, active: child.props.tabId === tabId
        }))
      }
      <span ref={indicatorRef}
            className={clsx(indicator, indicatorProps && indicatorProps.className)}
            style={indicatorProps && indicatorProps.style} />
    </div>
  )
}

const changeIndicator = (indicator: HTMLSpanElement, width: number, translateX: number) => {
  indicator.style.cssText = `
    width: ${width}px;
    transform: translateX(${translateX}px);
  `
}

const useStyle = createUseStyles({
  root: {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    gap: 10
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 3,
    backgroundColor: "#000000",
    transition: "transform 400ms ease-in-out, width 400ms ease-in-out"
  }
}, { name: "ergodic-tabBar" })
