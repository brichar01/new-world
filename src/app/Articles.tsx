import React, { useContext } from 'react';
import { ArticleSummaryContext } from '../provider/ArticleSummaryProvider';
import ArticleSummary from './ArticleSummary';

const Articles = () => {
  const { loading, articles } = useContext(ArticleSummaryContext);

  return (
    <div>
      {loading && (<div>Loading</div>)}
      {!loading && (
        <div>
          { articles.map((article) => { return (<ArticleSummary key={article.id} articleSummary={article} />) } ) }
        </div>)}
    </div>)
}

export default Articles;