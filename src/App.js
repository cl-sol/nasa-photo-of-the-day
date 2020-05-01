import React from "react";
import "./App.css";
import styled from "styled-components";

import Photos from "./Components/Photos"

const NASATitle = styled.h1`
  color: #3333cc;
`;
function App() {
  return (
    <div className="App">
      
      <NASATitle>
        NASA Picture of the Day
      </NASATitle>

      <Photos />
    </div>
  );
}

export default App; 