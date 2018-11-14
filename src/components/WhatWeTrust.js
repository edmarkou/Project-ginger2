import React, { Component } from 'react';
import autoRotate from '../images/autoRotate.png';
import check from '../images/check.png';
import circles from '../images/circles.png';
import heart from '../images/Heart.png';
import ML from '../images/ML.png';
import photo from '../images/photo.png';
import rocket from '../images/rocket.png';
import UI from '../images/UI.png';
import MediaQuery from 'react-responsive';

const styles = {
  bigWhiteText2: {
    color: "white",
    fontWeight: 700,
    fontFamily: 'Courier-bold, Courier, monospace',
    lineHeight: '1.5',
    fontSize: '36px'
  },
  imageIcon: {
    height: '55px',
    width: '55px',
    margin: 'auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  iconText: {
    color: 'rgb(250, 206, 51)',
    fontFamily: 'Courier, monospace',
    fontSize: '16px',
    lineHeight: 1.5,
    marginTop: '10%'
  }
};

class WhatWeTrust extends Component {
  render() {
    return (
      <MediaQuery query={"(max-width: 610px)"}>
        {(matches) => {
          if (matches) {
            return (
              <div style={{height: '700px', backgroundColor: 'rgba(0, 4, 30, 1.00)', display: 'block', userSelect: 'none'}}>
                <div style={{ display: 'block', textAlign: 'center', paddingTop: '7%'}}>
                      <span style={styles.bigWhiteText2}>
                        That's what we trust
                      </span>
                </div>
                <div style={{ width: '90%', paddingTop: '7%', margin: 'auto'}}>
                  <div>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${heart})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                            Support what<br/>
                            really loves you
                          </span>
                    </div>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${UI})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                            Awesome user<br/>
                            interface
                          </span>
                    </div>
                  </div>
                  <div style={{paddingTop: '10%'}}>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${rocket})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                            Fast account<br/>
                            opening
                          </span>
                    </div>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${photo})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                            The lowest<br/>
                            fee
                          </span>
                    </div>
                  </div>
                </div>
                <div style={{ width: '90%', paddingTop: '10%', margin: 'auto', userSelect: 'none'}}>
                  <div>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${check})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                          Easy SEPA<br/>
                          payments
                        </span>
                    </div>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${autoRotate})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                          Quick SWIFT<br/>
                          transfers
                        </span>
                    </div>
                  </div>
                  <div style={{paddingTop: '10%'}}>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${circles})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                          Secure<br/>
                          cryptocurrencies
                        </span>
                    </div>
                    <div style={{display: 'inline-grid', width: '50%'}}>
                      <div style={{...styles.imageIcon, backgroundImage: `url(${ML})`}}/>
                      <span style={{ ...styles.iconText, fontSize: '12px', marginTop: '0px', textAlign: 'center'}}>
                          Deep machine<br/>
                          learning
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <MediaQuery query={"(max-width: 850px)"}>
                {(matches) => {
                  if (matches) {
                    return (
                      <div style={{height: '850px', backgroundColor: 'rgba(0, 4, 30, 1.00)', display: 'block', userSelect: 'none'}}>
                        <div style={{ display: 'block', textAlign: 'center', paddingTop: '7%'}}>
                      <span style={styles.bigWhiteText2}>
                        That's what we trust
                      </span>
                        </div>
                        <div style={{ width: '90%', paddingTop: '7%', margin: 'auto'}}>
                          <div>
                            <div style={{display: 'inline-grid', width: '160px', marginLeft: '20%'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${heart})`}}/>
                              <span style={styles.iconText}>
                                Support what<br/>
                                really loves you
                              </span>
                            </div>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${UI})`}}/>
                              <span style={styles.iconText}>
                                Awesome user<br/>
                                interface
                              </span>
                            </div>
                          </div>
                          <div style={{paddingTop: '3%'}}>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${rocket})`}}/>
                              <span style={styles.iconText}>
                                Fast account<br/>
                                opening
                              </span>
                            </div>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${photo})`}}/>
                              <span style={styles.iconText}>
                                The lowest<br/>
                                fee
                              </span>
                            </div>
                          </div>
                        </div>
                        <div style={{ width: '90%', paddingTop: '3%', margin: 'auto', userSelect: 'none'}}>
                          <div>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${check})`}}/>
                              <span style={styles.iconText}>
                                Easy SEPA<br/>
                                payments
                              </span>
                            </div>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${autoRotate})`}}/>
                              <span style={styles.iconText}>
                                Quick SWIFT<br/>
                                transfers
                              </span>
                            </div>
                          </div>
                          <div style={{paddingTop: '3%'}}>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${circles})`}}/>
                              <span style={styles.iconText}>
                                Secure<br/>
                                cryptocurrencies
                              </span>
                            </div>
                            <div style={{display: 'inline-grid', marginLeft: '20%', width: '160px'}}>
                              <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${ML})`}}/>
                              <span style={styles.iconText}>
                                Deep machine<br/>
                                learning
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div style={{height: '705px', backgroundColor: 'rgba(0, 4, 30, 1.00)', display: 'block', userSelect: 'none'}}>
                        <div style={{ display: 'block', textAlign: 'center', paddingTop: '7%'}}>
                          <span style={styles.bigWhiteText2}>
                            That's what we trust
                          </span>
                        </div>
                        <div style={{ width: '72%', paddingTop: '7%', margin: 'auto'}}>
                          <div style={{display: 'inline-grid', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${heart})`}}/>
                            <span style={styles.iconText}>
                              Support what<br/>
                              really loves you
                            </span>
                          </div>
                          <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${UI})`}}/>
                            <span style={styles.iconText}>
                              Awesome user<br/>
                              interface
                            </span>
                          </div>
                          <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${rocket})`}}/>
                            <span style={styles.iconText}>
                              Fast account<br/>
                              opening
                            </span>
                          </div>
                          <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${photo})`}}/>
                            <span style={styles.iconText}>
                              The lowest<br/>
                              fee
                            </span>
                          </div>
                        </div>
                        <div style={{ width: '72%', paddingTop: '5%', margin: 'auto', userSelect: 'none'}}>
                          <div style={{display: 'inline-grid', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${check})`}}/>                            <span style={styles.iconText}>
                              Easy SEPA<br/>
                              payments
                            </span>
                          </div>
                          <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${autoRotate})`}}/>
                            <span style={styles.iconText}>
                              Quick SWIFT<br/>
                              transfers
                            </span>
                          </div>
                          <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${circles})`}}/>
                            <span style={styles.iconText}>
                              Secure<br/>
                              cryptocurrencies
                            </span>
                          </div>
                          <div style={{display: 'inline-grid', marginLeft: '10%', width: '17%'}}>
                            <div style={{...styles.imageIcon, margin: '0', backgroundImage: `url(${ML})`}}/>
                            <span style={styles.iconText}>
                              Deep machine<br/>
                              learning
                            </span>
                          </div>
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

export default WhatWeTrust;