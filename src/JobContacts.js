import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

const styles = {
  bigWhiteText: {
    color: "white",
    fontWeight: 700,
    fontFamily: 'Courier-bold, Courier, monospace',
    lineHeight: '1.5',
    fontSize: '36px'
  }
};
class JobContacts extends Component {
  render() {
    return (
      <div style={{height: '340px', backgroundColor: 'black', textAlign: 'center', display: 'flex', alignItems: 'center'}}>
        <div style={{display: 'inline-block', margin: 'auto'}}>
          <div style={{userSelect: 'none'}}>
              <span style={styles.bigWhiteText}>
                Join our team
              </span>
          </div>
          <div style={{paddingTop: '8%'}}>
            <MediaQuery query={"(max-width: 530px)"}>
              {(matches) => {
                if (matches) {
                  return (
                    <span style={{
                      userSelect: 'none',
                      color: "white",
                      fontFamily: 'Courier, monospace',
                      lineHeight: '1.5',
                      fontSize: '20px',
                    }}>Send us your CV to<br/></span>
                  )
                } else {
                  return (
                    <span style={{
                      userSelect: 'none',
                      color: "white",
                      fontFamily: 'Courier, monospace',
                      lineHeight: '1.5',
                      fontSize: '20px',
                    }}>Send us your CV to</span>
                  )
                }
              }}
            </MediaQuery>
            <span style={{
              fontFamily: 'Courier-bold, monospace',
              fontSize: '20px',
              color: 'rgb(250, 206, 51)',
              cursor: 'text'
            }}> job@project-ginger.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default JobContacts;