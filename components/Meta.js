import Head from "next/head";

const Meta = (props) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={props.keywords} />
      <meta name='description' content={props.description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{props.title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Next Crash Course",
  keywords: "next, learning react",
  description: "A project to learn next.js"
}

export default Meta
