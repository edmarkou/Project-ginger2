import React, { Component } from 'react';
import ginger from './images/ginger.svg';
import MediaQuery from 'react-responsive';

const styles = {
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
  }
};
class Header extends Component {
  render() {
    return (
        <MediaQuery query={"(max-width: 400px)"}>
          {(matches) => {
            if (matches) {
              return (
                <div style={{...styles.headerDiv, height: '90px'}}>
                  <div style={{flexGrow: 1, marginLeft: '2%', paddingTop: '5px'}}>
                    <img src={ginger} style={{height: '27px', width: '170px'}} alt={""}/>
                  </div>
                  <div style={{flexGrow: 2, textAlign: 'right', marginRight: '2%'}}>
                    <span style={{...styles.helloGingerText, fontSize: '12px'}}>hello@project-ginger.com</span>
                  </div>
                </div>
              )
            } else {
              return (
                <MediaQuery query={"(max-width: 690px)"}>
                  {(matches) => {
                    if (matches) {
                      return (
                        <div style={{...styles.headerDiv, height: '90px'}}>
                          <div style={{flexGrow: 1, marginLeft: '2%', paddingTop: '5px'}}>
                            <img src={ginger} style={{height: '30px', width: '190px'}} alt={""}/>
                          </div>
                          <div style={{flexGrow: 2, textAlign: 'right', marginRight: '2%'}}>
                            <span style={{...styles.helloGingerText, fontSize: '12px'}}>hello@project-ginger.com</span>
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <div style={styles.headerDiv}>
                          <div style={{flexGrow: 1, marginLeft: '10%'}}>
                            <img src={ginger} style={styles.ginger} alt={""}/>
                          </div>
                          <div style={{flexGrow: 2, textAlign: 'right', marginRight: '10%'}}>
                            <span style={styles.helloGingerText}>hello@project-ginger.com</span>
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

export default Header;