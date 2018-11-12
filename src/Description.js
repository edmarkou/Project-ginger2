import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

const styles = {
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
  div: {
    height: '695px',
    backgroundColor: 'black',
    display: 'flex',
    userSelect: 'none'
  }
};
class Description extends Component {
  render() {
    return (
      <MediaQuery query={"(max-width: 760px)"}>
        {(matches) => {
          if (matches) {
            return (
              <div style={styles.div}>
                  <span style={{...styles.littleWhiteText, textAlign: 'center',}}>
                    Easy. Fast. Safe.<br/>
                    Transparent.<br/>
                    It's all about project:<br/>
                    revolutionary interface will<br/>
                    speed up how you<br/>
                    make a payment;<br/>
                    fast opening of<br/>
                    payment account;<br/>
                    effecting of SEPA payments;<br/>
                    currency exchange with<br/>
                    maximum convenient rates.<br/>
                    Project Ginger erases<br/>
                    boundaries, becoming<br/>
                    the number one banking<br/>
                    alternative. Coming soon!
                  </span>
              </div>
            )
          } else {
            return (
              <div style={styles.div}>
                   <span style={styles.littleWhiteText}>
                     Easy. Fast. Safe. Transparent. It's all about<br/>
                     project: revolutionary interface will speed up how you<br/>
                     make a payment; fast opening of payment account;<br/>
                     effecting of SEPA payments; currency exchange with<br/>
                     maximum convenient rates. Project Ginger erases<br/>
                     boundaries, becoming the number one banking<br/>
                     alternative. Coming soon!
                   </span>
              </div>
            )
          }
        }}
      </MediaQuery>
    );
  }
}

export default Description;