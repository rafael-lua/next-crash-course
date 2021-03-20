import ArticleItem from '../components/ArticleItem';
import articleStyles from "../styles/Article.module.css"; 

const ArticleList = (props) => {
  return (
    <div className={articleStyles.grid}>
      {props.articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
