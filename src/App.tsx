import "bootstrap/scss/bootstrap.scss";
import { Button, Col } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import './App.css';

const MotionCol = motion(Col);

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
        <Panel>
          <MotionCol className="content pt-5">
            <h1>Content</h1>
          </MotionCol>
        </Panel>

        {/* Раскоментируй код ниже */}

        {isVisiblePanel && (
          <>
          <PanelResizeHandle className="divider"/>
            <Panel>
              <MotionCol
                initial={{
                  x: "100%",
                }}
                animate={{
                  x: 0,
                }}
                className={`sidebar pt-5 ${isVisiblePanel && "visibled"}`}
              >
                <h1>Sidebar</h1>
              </MotionCol>
            </Panel>
          </>
        )}
    </PanelGroup>
  );
};

export default App;
