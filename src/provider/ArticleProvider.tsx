import React, { createContext, useContext, useEffect, useState } from 'react';
import { Article } from '../model/Article';
import { ApiContext } from './ApiProvider';

type Props = {
  children: React.ReactElement
};

const ArticleContext = createContext({ loading: true, article: {} as Article});

const ArticleProvider = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({} as Article);

  const api = useContext(ApiContext);

  useEffect(() => {
    api.get<Article>("string").then((article: Article) => {
      setLoading(false);
      setArticle(article);
    });
  }, []);

  return (
    <ArticleContext.Provider value={{ loading: true, article: article }}>{props.children}</ArticleContext.Provider>
    );
};