import React from 'react';
import Articles from './Articles';
import { ArticleSummaryProvider } from '../provider/ArticleSummaryProvider';

const ArticleSummaryList = () => {
    return(
      <ArticleSummaryProvider pageSize={5} pageNum={1}>
        <Articles />
      </ArticleSummaryProvider>
    )
};

export default ArticleSummaryList;