import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/getNewsActions';

let Button=({ getNews })=>(
    <button type="submit" onClick={getNews}>Press to see news</button>
);
const mapDispatchToProps = {
    getNews,
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;