import React, { useState } from "react";
import { Container, Tabs, Tab, TabContent } from "./styles";
import BannerSettings from "../BannerSettings";
import OtherSettings from "../OtherSettings";

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <h1>Configurações</h1>
      <Tabs>
        <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
          Banner
        </Tab>
        <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Outras Configurações
        </Tab>
      </Tabs>
      <TabContent>
        {activeTab === 0 && <BannerSettings />}
        {activeTab === 1 && <OtherSettings />}
      </TabContent>
    </Container>
  );
};

export default SettingsComponent;
