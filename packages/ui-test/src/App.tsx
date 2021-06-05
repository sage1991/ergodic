import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Page, TabBar, TabButton, TabPanel, TabPanelControl } from "@ergodic/ui";
import { Piano } from "./piano";
import { KeyCode } from "./piano/KeyCode";


enum TabId {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
}

const piano = new Piano()
const keys = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./"

const map: any = {}
keys.split("").forEach((value, index) => {
  map[value] = index + 1
})

export const App: FC = () => {

  useEffect(() => {
    window.addEventListener("keypress", (e: KeyboardEvent) => {
      if (map[e.key]) {
        piano.play(map[e.key])
      }
    })
  }, [])

  const [ tabId, setTabId ] = useState<TabId>(TabId.ONE)

  const onTabIdChange = (tabId: string) => {
    setTabId(tabId as TabId)
  }

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { keyCode } = (e.target as HTMLButtonElement).dataset;
    piano.play(+keyCode! as KeyCode);
  }

  const buttons: ReactNode[] = []
  for (let i = 0; i < 88; i++) {
    buttons.push(
      <button key={i}
              onClick={onButtonClick}
              data-key-code={i + 1}
              style={{ display: "inline-block", width: 100, padding: 10, marginRight: 10 }}>
        { i + 1 }
      </button>
    )
  }


  return (
    <Page>
      <TabBar tabId={tabId} onTabIdChange={onTabIdChange}>
        <TabButton tabId={TabId.ONE}>
          tab1
        </TabButton>
        <TabButton tabId={TabId.TWO}>
          tab2
        </TabButton>
        <TabButton tabId={TabId.THREE}>
          tab3
        </TabButton>
        <TabButton tabId={TabId.FOUR}>
          tab4
        </TabButton>
        <TabButton tabId={TabId.FIVE}>
          tab5
        </TabButton>
      </TabBar>
      <TabPanelControl tabId={tabId}>
        <TabPanel tabId={TabId.ONE}>
          <button onClick={() => {
            piano.init().then(() => {
              console.log("piano is ready")
              piano.play(KeyCode.C_5);
              piano.play(KeyCode.E_5);
              piano.play(KeyCode.G_5);
            })
          }}>let's play piano</button>
          { buttons }
        </TabPanel>
        <TabPanel tabId={TabId.TWO}>
          this is tab 2
        </TabPanel>
        <TabPanel tabId={TabId.THREE}>
          this is tab 3
        </TabPanel>
        <TabPanel tabId={TabId.FOUR}>
          this is tab 4
        </TabPanel>
        <TabPanel tabId={TabId.FIVE}>
          this is tab 5
        </TabPanel>
      </TabPanelControl>
    </Page>
  );
}
