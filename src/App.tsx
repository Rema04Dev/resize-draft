import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./App.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/scss/bootstrap.scss";

const App = () => {
  const [isVisiblePanel, setVisiblePanel] = useState(false);
  const handleVisible = () => {
    setVisiblePanel((visible) => !visible);
  };
  
  return (
    <PanelGroup direction="horizontal">
      <Button onClick={handleVisible} className="panel-toggle" size="sm">
        {isVisiblePanel ? "Hide panel" : "Show"}
      </Button>
      <Panel 
      defaultSizePercentage={50}
      className="content pt-5">
        <h1>Content</h1>
      </Panel>

      {/* Раскоментируй код ниже */}

      {/* {isVisiblePanel && ( */}
        <>
          <PanelResizeHandle
            className={`divider ${isVisiblePanel && "visibled"}`}
          />
          <Panel
            className={`sidebar pt-5 ${isVisiblePanel && "visibled"}`}
          >
            <h1>Sidebar</h1>
          </Panel>
        </>
      {/* )} */}
    </PanelGroup>
  );
};

export default App;
