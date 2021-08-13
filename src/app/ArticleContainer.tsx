import { useParams } from "react-router-dom";
import { ArticleProvider } from "../provider/ArticleProvider";
import Article from "./Article";

const ArticleContainer = () => {
  const { id } = useParams<{id: string}>();
  console.log(id)
  return (
      <div>
        <ArticleProvider articleId={id}>
          <Article />
        </ArticleProvider>
      </div>
    );
};

export default ArticleContainer;