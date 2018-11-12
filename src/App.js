import React, { Component } from 'react';
import Header from "./components/Header";
import Description from "./components/Description";
import JobContacts from "./components/JobContacts";
import WhatWeTrust from "./components/WhatWeTrust";
import StylishDiv from "./components/StylishDiv";

const styles = {
  main: {
    overflow: 'hidden',
    display: 'block',
    position: 'absolute',
    width: '100%',
    background: 'transparent'
  },
  headerDiv: {
    backgroundColor: 'rgb(0, 32, 97)',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  }
};
class App extends Component {
  render() {
    return (
      <div style={styles.main}>
        <Header/>
        <StylishDiv/>
        <Description/>
        <WhatWeTrust/>
        <JobContacts/>
        <div style={styles.headerDiv}>
          <span style={{
            userSelect: 'none',
            margin: 'auto',
            fontFamily: 'Courier, monospace',
            fontSize: '14px',
            color: 'white',
            fontWeight: 400
          }}>
            Project Ginger | 2018
          </span>
        </div>
      </div>
    );
  }
}

export default App;