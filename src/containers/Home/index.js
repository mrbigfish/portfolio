/**
 * 
 * This is the main hook for the Application...
 * 
 * NOTE: ALL Applications (minus the optional right bar) will stem
 * from this index.js file
 * 
 */
import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.section`
`

class Home extends React.Component {

  render() {
    return (
      <AppWrapper>
        THIS SHOULD BE DEFAULT PAGE AND HOME PAGE
      </AppWrapper>
    )
  }
};

export default Home;