import React, { createContext, useContext, useEffect, useState } from 'react';
import { Article } from '../model/Article';
import { ApiContext } from './ApiProvider';

type Props = {
  children: React.ReactElement,
  articleId: string
};

export const ArticleContext = createContext({ loading: true, article: {} as Article});

export const ArticleProvider = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({} as Article);

  const api = useContext(ApiContext);

  useEffect(() => {
    api.get<Article>(`/article/${props.articleId}`, null).then((article: Article) => {
      setArticle(article);
      setLoading(false);
    });
  }, [api]);

  return (
    <ArticleContext.Provider value={{ loading: loading, article: article }}>{props.children}</ArticleContext.Provider>
    );
};

