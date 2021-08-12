import { useRouteMatch } from "react-router-dom";
import { ArticleProvider } from "../provider/ArticleProvider";
import Article from "./Article";

const ArticleContainer = () => {
  const { path } = useRouteMatch();
  return (
    <ArticleProvider articleId={path}>
      <Article />
    </ArticleProvider>
    );
};

export default ArticleContainer;