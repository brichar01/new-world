import React, { createContext, useContext, useEffect, useState } from 'react';
import { ArticleSummary } from '../model/Article';
import { ApiContext } from './ApiProvider';

type Props = {
  children: React.ReactElement,
  pageSize: number,
  pageNum: number,
};

export const ArticleSummaryContext = createContext({ loading: true, articles: [] as ArticleSummary[]});

export const ArticleSummaryProvider = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState({} as ArticleSummary[]);

  const api = useContext(ApiContext);

  useEffect(() => {
    api.get<ArticleSummary[]>('/article-summaries', new URLSearchParams({ pageSize: `${props.pageSize}`, pageNum: `${props.pageNum}` })).then((articles: ArticleSummary[]) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [api]);

  return (
    <ArticleSummaryContext.Provider value={{ loading: loading, articles: articles }}>{props.children}</ArticleSummaryContext.Provider>
    );
};

