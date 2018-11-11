import React, { Component } from 'react';
import ginger from './images/ginger.svg';
import squares from './images/squares.png';
import gadget from './images/gadget.png';
import autoRotate from './images/autoRotate.png';
import check from './images/check.png';
import circles from './images/circles.png';
import heart from './images/Heart.png';
import ML from './images/ML.png';
import photo from './images/photo.png';
import rocket from './images/rocket.png';
import UI from './images/UI.png';
import './ginger.css'

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
  ginger: {
    height: '38px',
    width: '238px'
  },
  helloGingerText: {
    color: "#FFBF13",
    fontWeight: 400,
    fontFamily: 'Courier, monospace',
    fontSize: '16px',
    cursor: 'default'
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
    fontSize: '4vw'
  },
  littleWhiteText: {
    color: "white",
    fontFamily: 'Courier, monospace',
    fontWeight: '400',
    marginLeft: '10%',
    lineHeight: '1.5',
    fontSize: '20px',
    letterSpacing: 0,
  },
  bigYellowText: {
    color: "rgb(255, 206, 46)",
    fontFamily: 'Courier-bold, monospace',
    marginLeft: '10%',
    lineHeight: '1.5',
    fontSize: '4vw'
  },
  bigBlueText: {
    color: "rgb(0, 32, 97)",
    fontFamily: 'Courier-bold, monospace',
    lineHeight: '1.5',
    fontSize: '4vw',
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
        <div style={styles.headerDiv}>
          <div style={{flexGrow: 1, marginLeft: '10%'}}>
            <img src={ginger} style={styles.ginger} alt={""}/>
          </div>
          <div style={{flexGrow: 2, textAlign: 'right', marginRight: '10%'}}>
            <span style={styles.helloGingerText}>hello@project-ginger.com</span>
          </div>
        </div>
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
              <div style={{marginTop: '30px'}}>
                <span style={styles.littleWhiteText}>coming soon...</span>
              </div>
            </div>
            <img style={{width: '65%', transform: 'translate(65%, -1075px) rotate(-39deg)'}} src={gadget} alt={""}/>
          </div>
        </div>
        <div style={{height: '695px', backgroundColor: 'black', display: 'flex', userSelect: 'none'}}>
          <span style={{...styles.littleWhiteText, margin: 'auto', padding: '10px'}}>
            Easy. Fast. Safe. Transparent. It's all about<br/>
            project: revolutionary interface will speed up how you<br/>
            make a payment; fast opening of payment account;<br/>
            effecting of SEPA payments; currency exchange with a<br/>
            maximum convenient rates. Project Ginger erases<br/>
            boundaries, becoming the number one banking<br/>
            alternative. Coming soon!
          </span>
        </div>
        <div style={{height: '705px', backgroundColor: 'rgba(0, 4, 30, 1.00)', display: 'block', userSelect: 'none'}}>
          <div style={{ display: 'block', textAlign: 'center', paddingTop: '7%'}}>
            <span style={styles.bigWhiteText2}>
              That's what we trust
            </span>
          </div>
          <div style={{ width: '72%', paddingTop: '7%', margin: 'auto'}}>
            <div style={{display: 'inline-grid', width: '17%'}}>
              <img style={styles.imageIcon} src={heart} alt={""}/>
              <span style={styles.iconText}>
                Support what<br/>
                really loves you
              </span>
            </div>
            <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
              <img style={{...styles.imageIcon, height: '40px', paddingBottom: '7.5px'}} src={UI} alt={""}/>
              <span style={styles.iconText}>
                Awesome user<br/>
                interface
              </span>
            </div>
            <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
              <img style={styles.imageIcon} src={rocket} alt={""}/>
              <span style={styles.iconText}>
                Fast account<br/>
                opening
              </span>
            </div>
            <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
              <img style={{...styles.imageIcon, width: '55px'}} src={photo} alt={""}/>
              <span style={styles.iconText}>
                The lowest<br/>
                fee
              </span>
            </div>
          </div>
          <div style={{ width: '72%', paddingTop: '5%', margin: 'auto', userSelect: 'none'}}>
            <div style={{display: 'inline-grid', width: '17%'}}>
              <img style={styles.imageIcon} src={check} alt={""}/>
              <span style={styles.iconText}>
                Easy SEPA<br/>
                payments
              </span>
            </div>
            <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
              <img style={styles.imageIcon} src={autoRotate} alt={""}/>
              <span style={styles.iconText}>
                Quick SWIFT<br/>
                transfers
              </span>
            </div>
            <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
              <img style={{...styles.imageIcon, height: '50px', paddingBottom: '2.5px'}} src={circles} alt={""}/>
              <span style={styles.iconText}>
                Secure<br/>
                cryptocurrencies
              </span>
            </div>
            <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
              <img style={{...styles.imageIcon, height: '40px', paddingBottom: '7.5px'}} src={ML} alt={""}/>
              <span style={styles.iconText}>
                Deep machine<br/>
                learning
              </span>
            </div>
          </div>
        </div>
        <div style={{height: '340px', backgroundColor: 'black', textAlign: 'center', display: 'flex', alignItems: 'center'}}>
          <div style={{display: 'inline-block', margin: 'auto'}}>
            <div style={{userSelect: 'none'}}>
              <span style={styles.bigWhiteText2}>
                Join our team
              </span>
            </div>
            <div style={{paddingTop: '8%'}}>
              <span style={{
                userSelect: 'none',
                color: "white",
                fontFamily: 'Courier, monospace',
                lineHeight: '1.5',
                fontSize: '20px',
              }}>Send us your CV to</span>
              <span style={{
                fontFamily: 'Courier-bold, monospace',
                fontSize: '20px',
                color: 'rgb(250, 206, 51)',
                cursor: 'text'
              }}> job@project-ginger.com</span>
            </div>
          </div>
        </div>
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