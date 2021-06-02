import React, { useState } from "react";
import Tab, { Page, TabBar, TabButton, TabPanel, TabPanelControl } from "@ergodic/ui"
import { Food } from "../../pages/food";



enum TabId {
    FOOD = "FOOD",
    CORONA = "CORONA",
    PIANO = "PIANO"
}

const TabMenu = () => {

    const [ tabId, setTabId ] = useState<TabId>(TabId.FOOD)

    const onTabIdChange = (tabId: string) => {
        setTabId(tabId as TabId)
    }
    return (
        <>
            <TabBar tabId={tabId} onTabIdChange={onTabIdChange}>
                <TabButton tabId={TabId.FOOD}>
                   음식 정하기
                </TabButton>
                <TabButton tabId={TabId.CORONA}>
                    코로나
                </TabButton>
                <TabButton tabId={TabId.PIANO}>
                   피아노
                </TabButton>
            </TabBar>
            <TabPanelControl tabId={tabId}>
                <TabPanel tabId={TabId.FOOD}>
                    <Food />
                </TabPanel>
                <TabPanel tabId={TabId.CORONA}>
                    준비중입니다
                </TabPanel>
                <TabPanel tabId={TabId.PIANO}>
                    준비중이에요
                </TabPanel>
            </TabPanelControl>
        </>
    )
}

export default TabMenu;