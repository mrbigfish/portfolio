/**
 * 
 * Top Level Page Home. Only Center Section changes when page
 * changes.
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// Children .js files
import TopSection from './TopSection';
// import RightBar from './RightBar';
import Footer from './Footer';
import Home from '../Home';
import Resume from '../Resume/index';
import Apps from '../Apps';
import RefErr from '../RefErr';
import ContactMe from '../ContactMe';

const MidSectionContainer = styled.section`
display: block;
margin-left: auto;
margin-right: auto;
width: 93%;
min-height: 150px;
border: 1px solid black;
`;

const AppContainer = styled.section`
display: block;
margin: auto;
`;

const PageContainer = styled.section`
display: block;
width: auto;
margin: auto;
`;

const PageLayout = () => (
    <PageContainer>
        <TopSection />
        <MidSectionContainer>
            <AppContainer>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/resume' component={Resume} />
                    <Route path='/apps' component={Apps} />
                    <Route path='/contact' component={ContactMe} />
                    <Route component={RefErr} />
                </Switch>
            </AppContainer>
        </MidSectionContainer>
        <Footer />
    </PageContainer>
);

export default PageLayout;