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
  margin: 5%;
`

const Trivia = () => (
    <AppWrapper>
        TRIVIA PAGE
    </AppWrapper>
)

export default Trivia;