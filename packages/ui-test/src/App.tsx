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
          this is tab 1
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
