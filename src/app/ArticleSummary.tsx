import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleSummary } from '../model/Article';

type Props = {
    articleSummary: ArticleSummary
};

const ArticlePreview = (props: Props) => {
    const { summary, id } = props.articleSummary;
    return(
        <div>
            <Link to={`/new-world/article/${id}`}>{summary}</Link>
        </div>
        
    )
};

export default ArticlePreview;