import React from 'react';
import { useContext } from 'react';
import { ArticleContext } from '../provider/ArticleProvider';

const Article = () => {
    const { article, loading } = useContext(ArticleContext);

    return(
         <div>{!loading && article}</div>
    );
};

export default Article;