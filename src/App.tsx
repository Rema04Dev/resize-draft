import "bootstrap/scss/bootstrap.scss";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import {motion} from 'framer-motion';

const MotionCol = motion(Col);

const App = () => {
  const [isVisiblePanel, setVisiblePanel] = useState(false);
  const handleVisible = () => {
    setVisiblePanel((visible) => !visible);
  };

  return (
    <Container>
      <Button onClick={handleVisible} className="panel-toggle" size="sm">
        {isVisiblePanel ? "Hide panel" : "Show"}
      </Button>
      <Row>
        <MotionCol 
        
        className="content pt-5">
          <h1>Content</h1>
        </MotionCol>

        {/* Раскоментируй код ниже */}

        {isVisiblePanel && (
          <>
            <MotionCol 
              initial={{
                x: '100%'
              }}
              animate={{
                x: 0
              }}
            className={`sidebar pt-5 ${isVisiblePanel && "visibled"}`}>
              <h1>Sidebar</h1>
            </MotionCol>
          </>
        )}
      </Row>
    </Container>
  );
};

export default App;
