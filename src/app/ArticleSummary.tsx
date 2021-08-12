import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArticleSummary } from '../model/Article';

type Props = {
    articleSummary: ArticleSummary
};

const ArticlePreview = (props: Props) => {
    const { summary, id } = props.articleSummary;
    return(
        <NavLink to={`/article/${id}`}>{summary}</NavLink>
    )
};

export default ArticlePreview;z