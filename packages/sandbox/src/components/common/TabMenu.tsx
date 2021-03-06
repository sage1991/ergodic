import React, { useState } from "react";
import Tab, { Page, TabBar, TabButton, TabPanel, TabPanelControl } from "@ergodic/ui"
import { Food } from "../../pages/food";
import { PianoTab } from "@ergodic/ui-test/src/view/piano";



enum TabId {
    FOOD = "FOOD",
    PIANO = "PIANO"
}

const TabMenu = () => {

    const [ tabId, setTabId ] = useState<TabId>(TabId.PIANO)

    const onTabIdChange = (tabId: string) => {
        setTabId(tabId as TabId)
    }
    return (
        <>
            <TabBar tabId={tabId} onTabIdChange={onTabIdChange}>
                <TabButton tabId={TabId.FOOD}>
                   음식 정하기
                </TabButton>
                <TabButton tabId={TabId.PIANO}>
                   피아노
                </TabButton>
            </TabBar>
            <TabPanelControl tabId={tabId}>
                <TabPanel tabId={TabId.FOOD}>
                    <Food />
                </TabPanel>
                <TabPanel tabId={TabId.PIANO}>
                    <PianoTab />
                </TabPanel>
            </TabPanelControl>
        </>
    )
}

export default TabMenu;
