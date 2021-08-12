import { useRouteMatch } from "react-router-dom";
import { ArticleContext, ArticleProvider } from "../provider/ArticleProvider";

const ArticleContainer = () => {
  const { path } = useRouteMatch();
  return (
    <ArticleProvider articleId={path}>
      <Article />
    </ArticleProvider>
    );