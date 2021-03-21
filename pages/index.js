import ArticleList from '../components/ArticleList';

// Main view
export default function Home(props) {
  return (
    <div>
      <ArticleList articles={props.articles} />
    </div>
  )
}

// fetch props at build time
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  // will be passed to the page component as props
  return {
    props: {
      articles
    }
  }
}
