import React, { Component } from 'react';
import squares from '../images/squares.png';
import gadget from '../images/gadget.png';
import MediaQuery from "react-responsive";

const styles = {
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
  }
};
class StylishDiv extends Component {
  render() {
    return (
      <MediaQuery query={"(max-width: 730px)"}>
        {(matches) => {
          if (matches) {
            return (
              <div style={{backgroundColor: 'rgba(0, 4, 30, 1)', height: '620px'}}>
                <div style={{overflow: 'hidden', position: 'relative', userSelect: 'none'}}>
                  <div style={{...styles.imageSquareBackground, height: '640px',}}/>
                  <div style={{marginTop: '25px', textAlign: 'center', transform: 'translate(0, -640px)'}}>
                    <span style={{...styles.bigWhiteText, marginLeft: '5%', fontSize: '40px'}}>We will change</span>
                    <br/>
                    <span style={{...styles.bigWhiteText, marginLeft: '5%', fontSize: '40px'}}>your approach</span>
                    <br/>
                    <span style={{...styles.bigYellowText, marginLeft: '5%', fontSize: '40px'}}>to payment</span>
                    <span style={{...styles.bigBlueText, fontSize: '40px'}}>|</span>
                    <br/>
                    <div style={{marginTop: '15px', marginLeft: '5%', fontSize: '16px'}}>
                      <span style={{...styles.littleWhiteText}}>coming soon...</span>
                    </div>
                  </div>
                  <img style={{width: '100%', transform: 'translate(0, -640px)'}} src={gadget} alt={""}/>
                </div>
              </div>
            )
          } else {
            return (
              <MediaQuery query={"(max-width: 1050px)"}>
                {(matches) => {
                  if (matches) {
                    return (
                      <div style={{backgroundColor: 'rgba(0, 4, 30, 1.00)', height: '550px'}}>
                        <div style={{overflow: 'hidden', position: 'relative', userSelect: 'none'}}>
                          <div style={{...styles.imageSquareBackground, height: '570px',}}/>
                          <div style={{marginTop: '100px', transform: 'translate(0, -570px)'}}>
                            <span style={{...styles.bigWhiteText, marginLeft: '5%', fontSize: '40px'}}>We will change</span>
                            <br/>
                            <span style={{...styles.bigWhiteText, marginLeft: '5%', fontSize: '40px'}}>your approach</span>
                            <br/>
                            <span style={{...styles.bigYellowText, marginLeft: '5%', fontSize: '40px'}}>to payment</span>
                            <span style={{...styles.bigBlueText, fontSize: '40px'}}>|</span>
                            <br/>
                            <div style={{marginTop: '30px', marginLeft: '5%', fontSize: '16px'}}>
                              <span style={{...styles.littleWhiteText}}>coming soon...</span>
                            </div>
                          </div>
                          <img style={{width: '65%', transform: 'translate(65%, -875px) rotate(-39deg)'}} src={gadget} alt={""}/>
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div style={{backgroundColor: 'rgba(0, 4, 30, 1.00)', height: '675px'}}>
                        <div style={{overflow: 'hidden', position: 'relative', userSelect: 'none'}}>
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
                    )
                  }
                }}
              </MediaQuery>
            )
          }
        }}
      </MediaQuery>
    );
  }
}

export default StylishDiv;