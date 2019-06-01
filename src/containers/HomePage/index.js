import React from 'react';
import styled from 'styled-components';
import App from '../../components/NewsApp.js';

const MidSectionContainer = styled.section`
display: flex;
min-height: 150px;
border: 3px solid pink;
`
const NavContainer = styled.section`
display: flex;
width: 20%;
border: 2px solid lightcoral;
`
const AppContainer = styled.section`
display: flex;
flex-wrap: wrap;
width: 60%;
border: 2px solid lightseagreen;
`
const RightContainer = styled.section`
display: flex;
width: 20%;
flex-direction: column;
border: 2px solid pink;
`
let MidSection = () => (
  <MidSectionContainer>
  </MidSectionContainer>
)
export default MidSection;


/**
 * 
 * 
 *     <NavContainer>
      NAV 
      <ul>
        Navigation
        <li>General Bio</li>
        <li>Resume</li>
          <ol>Computer Skills
            <li>Web Development</li>
          </ol>
          <ol>Experience
            <li>Continental</li>
          </ol>
        <li>Current Work</li>
        <li>Applications</li>
      </ul>
    </NavContainer>
    <AppContainer>
    </AppContainer>
    <RightContainer>
    <App />
    </RightContainer>
 */