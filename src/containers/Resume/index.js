import React from 'react';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import ResumeContent from './content';

const AppWrapper = styled.section`
`;

const panes = [
    { menuItem: 'General', render: () => <Tab.Pane>{ResumeContent.GENERAL}</Tab.Pane> },
    { menuItem: 'Experience', render: () => <Tab.Pane>{ResumeContent.EXPERIENCE}</Tab.Pane> },
    { menuItem: 'Education', render: () => <Tab.Pane>{ResumeContent.EDUCATION}</Tab.Pane> },
    { menuItem: 'Computer Skills', render: () => <Tab.Pane>{ResumeContent.COMPUTER_SKILLS}</Tab.Pane> },
];

const Resume = () => (
    <Tab 
        menu={{ color: 'red', inverted: false, fluid: true, vertical: true, tabular: false, attached: true }}
        panes={panes} 
    />
);

export default Resume;