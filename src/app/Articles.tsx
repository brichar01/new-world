import React, { useContext } from 'react';
import { ArticleSummaryContext } from '../provider/ArticleSummaryProvider';

const Articles = () => {
  const { loading, articles } = useContext(ArticleSummaryContext);

  return (
    <div>
      {loading && (<div>Loading</div>)}
      {!loading && (
        <div>
          { articles.map((article) => { return (<div key={article.timeStamp}>{article.summary}</div>) } ) }
        </div>)}
    </div>)
}

export default Articles;