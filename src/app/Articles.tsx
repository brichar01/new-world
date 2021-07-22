import React, { useContext } from 'react';
import { ArticleContext } from '../provider/ArticleProvider';

const Articles = () => {
  const { loading, article } = useContext(ArticleContext);

  return (
    <div>
      {loading && (<div>Loading</div>)}
      {!loading && (
        <div>
          {article.articleContent}
        </div>)}
    </div>
    
    
   
    )
}

export default Articles;