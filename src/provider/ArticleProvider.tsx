import React, { createContext, useContext, useEffect, useState } from 'react';
import { Article } from '../model/Article';
import { ApiContext } from './ApiProvider';

type Props = {
  children: React.ReactElement,
  pageSize: number
};

export const ArticleContext = createContext({ loading: true, article: {} as Article});

export const ArticleProvider = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({} as Article);

  const api = useContext(ApiContext);

  useEffect(() => {
    api.get<Article>("/article/60f65d0a29f6ceb3a004b5de").then((article: Article) => {
      console.log(article)
      setLoading(false);
      setArticle(article);
    });
  }, [api]);

  return (
    <ArticleContext.Provider value={{ loading: loading, article: article }}>{props.children}</ArticleContext.Provider>
    );
};

