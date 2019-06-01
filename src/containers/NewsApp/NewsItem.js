import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const imgStyle = {
    height: 'auto',
    width: '60%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const ArticleStyle = styled.div`
  height: auto;
  width: 25%;
  color: olive;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  border: 2px solid olive;
`;

let NewsItem = ({ article }) => (
    article ?
        article.map((item, index) =>
                <ArticleStyle key={index} >
                        <h3>{item.title}</h3>
                        <img style={imgStyle} src={item.urlToImage} alt="" />
                        <h4>{item.description}</h4>
                        <a href={item.url} target="_blank">READ MORE</a>
                </ArticleStyle>
        )
        : null
);

const mapStateToProps = (state) => ({
    article: state.news,
});

NewsItem = connect(mapStateToProps,null)(NewsItem);

export default NewsItem;

/**
let NewsItem = ({ article }) => (
article ?
<article style={articleStyle} >
  <div>
    <h1>{article.title}</h1>
    <img style={imgStyle} src={article.urlToImage} alt="" />
    <h4>{article.description}</h4>
    <a href={article.url} target="_blank">READ MORE</a>
  </div>
</article> :
null
);
 * 
 * 
 */