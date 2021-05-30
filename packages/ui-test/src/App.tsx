import React, { FC, useState } from 'react';
import { Page, TabBar, TabButton, TabPanel, TabPanelControl } from "@ergodic/ui";


enum TabId {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
}

export const App: FC = () => {
  const [ tabId, setTabId ] = useState<TabId>(TabId.ONE);

  const onTabIdChange = (tabId: string) => {
    setTabId(tabId as TabId)
  }

  return (
    <Page>
      <TabBar tabId={tabId} onTabIdChange={onTabIdChange}>
        <TabButton tabId={TabId.ONE}>
          hello0hello0hello0hello0
        </TabButton>
        <TabButton tabId={TabId.TWO}>
          hello1hello0hello0
        </TabButton>
        <TabButton tabId={TabId.THREE}>
          hello2llo0
        </TabButton>
        <TabButton tabId={TabId.FOUR}>
          hello3
        </TabButton>
        <TabButton tabId={TabId.FIVE}>
          hello4hello0hello0hello0hello0hello0hello0
        </TabButton>
      </TabBar>
      <TabPanelControl tabId={tabId}>
        <TabPanel tabId={TabId.ONE}>
          <StateTest />
        </TabPanel>
        <TabPanel tabId={TabId.TWO}>
          <StateTest />
        </TabPanel>
        <TabPanel tabId={TabId.THREE}>
          <StateTest />
        </TabPanel>
      </TabPanelControl>
    </Page>
  );
}

const StateTest: FC = () => {
  const [ state, setState ] = useState(0)
  return (
    <button onClick={() => setState(state + 1)}>{ state }</button>
  )
}
