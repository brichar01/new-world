import { useParams } from "react-router-dom";
import { ArticleProvider } from "../provider/ArticleProvider";
import Article from "./Article";

const ArticleContainer = () => {
  const { id } = useParams<{id: string}>();
  console.log(id)
  return (
    <ArticleProvider articleId={id}>
      <Article />
    </ArticleProvider>
    );
};

export default ArticleContainer;