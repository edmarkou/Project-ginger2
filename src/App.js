import React, { Component } from 'react';
import squares from './images/squares.png';
import gadget from './images/gadget.png';
import Header from "./Header";
import Description from "./Description";
import JobContacts from "./JobContacts";
import WhatWeTrust from "./WhatWeTrust";

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
  },
  imageSquareBackground: {
    height: '695px',
    width: '105%',
    backgroundImage: `url(${squares})`,
    backgroundSize: 'cover',
    userSelect: 'none',
    overflow: 'hidden',
    opacity: '0.2',
    transform: 'translate(-20px, -20px)'
  },
  bigWhiteText: {
    color: "white",
    fontFamily: 'Courier, monospace',
    marginLeft: '10%',
    lineHeight: '1.5',
    fontSize: '56px'
  },
  littleWhiteText: {
    color: "white",
    fontFamily: 'Courier, monospace',
    fontWeight: '400',
    marginLeft: '10%',
    lineHeight: '1.5',
    fontSize: '20px',
    margin: 'auto',
    letterSpacing: 0,
  },
  bigYellowText: {
    color: "rgb(255, 206, 46)",
    fontFamily: 'Courier-bold, monospace',
    marginLeft: '10%',
    lineHeight: '1.5',
    fontSize: '56px'
  },
  bigBlueText: {
    color: "rgb(0, 32, 97)",
    fontFamily: 'Courier-bold, monospace',
    lineHeight: '1.5',
    fontSize: '56px',
  },
  bigWhiteText2: {
    color: "white",
    fontWeight: 700,
    fontFamily: 'Courier-bold, Courier, monospace',
    lineHeight: '1.5',
    fontSize: '36px'
  },
  imageIcon: {
    width: '60px',
    height: '55px',
  },
  iconText: {
    color: 'rgb(250, 206, 51)',
    fontFamily: 'Courier, monospace',
    fontSize: '16px',
    lineHeight: 1.5,
    marginTop: '15%'
  }
};
class App extends Component {
  render() {
    return (
      <div style={styles.main}>
        <Header/>
        <div style={{backgroundColor: 'rgba(0, 4, 30, 1.00)', height: '675px'}}>
          <div style={{overflow: 'hidden', position: 'relative'}}>
            <div style={styles.imageSquareBackground}/>
            <div style={{marginTop: '150px', transform: 'translate(0, -695px)'}}>
              <span style={styles.bigWhiteText}>We will change</span>
              <br/>
              <span style={styles.bigWhiteText}>your approach</span>
              <br/>
              <span style={styles.bigYellowText}>to payment</span>
              <span style={styles.bigBlueText}>|</span>
              <br/>
              <div style={{marginTop: '30px', marginLeft: '10%' }}>
                <span style={{...styles.littleWhiteText}}>coming soon...</span>
              </div>
            </div>
            <img style={{width: '65%', transform: 'translate(65%, -1075px) rotate(-39deg)'}} src={gadget} alt={""}/>
          </div>
        </div>
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