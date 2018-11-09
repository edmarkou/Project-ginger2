import React, { Component } from 'react';
import ginger from './ginger.svg';
import squares from './squares.png';
import gadget from './gadget.png';

const styles = {
  main: {
    userSelect: 'none',
    overflow: 'hidden',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: 'auto',
    transformOrigin: 'left top 0px',
    background: 'transparent'
  },
  headerDiv: {
    backgroundColor: 'rgb(0, 32, 97)',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  ginger: {
    height: '38px',
    width: '238px',
    marginLeft: '10%'
  },
  helloGingerText: {
    color: "#FFBF13",
    marginLeft: '45%',
    fontWeight: 400,
    fontFamily: 'Courier, monospace',
    fontSize: '16px',
    cursor: 'default',
  },
  imageSquareBackground: {
    height: '695px',
    width: '105%',
    backgroundImage: `url(${squares})`,
    backgroundSize: 'cover',
    userSelect: 'none',
    overflow: 'hidden',
    opacity: '0.2',
    transform: 'translate(-22px, -70%)'
  },
};
class App extends Component {
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.headerDiv}>
          <img src={ginger} style={styles.ginger} alt={""}/>
          <span style={styles.helloGingerText}>hello@project-ginger.com</span>
        </div>
        <div style={{backgroundColor: 'rgba(0, 4, 30, 1.00)'}}>
          <div style={{overflow: 'hidden'}}>
            <div>
                <img style={{width: '65%', transform: 'translate(65%, 10%) rotate(-39deg)'}} src={gadget}/>
              <div style={styles.imageSquareBackground}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
