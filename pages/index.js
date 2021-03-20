import Head from 'next/head';
import ArticleList from '../components/ArticleList';

// Main view
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Next Crash Course</title>
        <meta name="keywords" content="next, learning react" />
      </Head>

      <ArticleList articles={props.articles} />
    </div>
  )
}

// fetch props
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
