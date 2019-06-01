import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import PageLayout from "../containers/PageLayout";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <PageLayout />
        </Router>
    </Provider>
);

export default Root;
