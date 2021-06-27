import React, { FC, useState } from 'react';
import { Page, TabBar, TabButton, TabPanel, TabPanelControl } from "@ergodic/ui";
import { PianoTab } from "./view/piano";
import { RippleTab } from "./view/ripple";


enum TabId {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
}

export const App: FC = () => {
  const [ tabId, setTabId ] = useState<TabId>(TabId.ONE)

  const onTabIdChange = (tabId: string) => {
    setTabId(tabId as TabId)
  }

  return (
    <Page>
      <TabBar tabId={tabId} onTabIdChange={onTabIdChange}>
        <TabButton tabId={TabId.ONE}>
          piano
        </TabButton>
        <TabButton tabId={TabId.TWO}>
          ripple
        </TabButton>
      </TabBar>
      <TabPanelControl tabId={tabId}>
        <TabPanel tabId={TabId.ONE}>
          <PianoTab />
        </TabPanel>
        <TabPanel tabId={TabId.TWO}>
          <RippleTab />
        </TabPanel>
      </TabPanelControl>
    </Page>
  );
}
