import React from "react";

import Tabs from "./components/Tabs";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Tabs defaultTabName="tab1">
          <Tabs.Tab tabName="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab tabName="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab tabName="tab3">Tab 3</Tabs.Tab>

          <Tabs.Panel tabName="tab1">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Tabs.Panel>
          <Tabs.Panel tabName="tab2">
            <div>
              <h2>Tab2</h2>

              <p>Teste de tab 2</p>
            </div>
          </Tabs.Panel>
          <Tabs.Panel tabName="tab3">
            <div>
              <h2>Tab3</h2>

              <Tabs defaultTabName="subtab1">
                <Tabs.Tab tabName="subtab1">SubTab 1</Tabs.Tab>
                <Tabs.Tab tabName="subtab2">SubTab 2</Tabs.Tab>

                <Tabs.Panel tabName="subtab1">
                  <div>
                    <h2>SubTab1</h2>

                    <p>Teste de subtab 1</p>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel tabName="subtab2">
                  <div>
                    <h2>SubTab2</h2>

                    <p>Teste de subtab 2</p>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
