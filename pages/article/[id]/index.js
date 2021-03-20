import Link from "next/link"; 
// import { useRouter } from "next/router";

const article = (props) => {
  /* Example of data being used with "getStaticProps" from index.  */
  // const router = useRouter();
  // const {id} = router.query;

  return (
    <>
      <h1>{props.article.title}</h1>
      <p>{props.article.body}</p>
      <br/>
      <Link href="/">Go Back</Link>
    </>
  )
}

// Fetch data on each request with server side props
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

/* EXTRA: Using staticProps and paths generation */

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// // Generates the data for dynamic paths. Use it together with getStaticProps. Good for static sites
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({params: {id: id.toString()}}));

//   return {
//     // paths: { params: { id: "1", id: "2" }} // The paths model. You need to create an object params like that from the json data
//     paths,
//     fallback: false
//   }
// }

export default article
