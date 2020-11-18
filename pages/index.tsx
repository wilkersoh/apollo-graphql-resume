import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import prismStyle from "react-syntax-highlighter/styles/prism/xonokai";

const ResumeQuery = gql`
  query Resume {
    bio {
      name
      email
      tagline
      website
      github
      linkedin
      objective
    }
    positions {
      id
      title
      company
      location
      years
      months
      startDate
      endDate
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);
  if (error) {
    return <span>Error...</span>;
  }

  if (loading) {
    return (
      <header>
        <h1>Is loading....</h1>
      </header>
    );
  }

  const { bio, positions } = data;

  return (
    <>
      <Head>
        <title>Graphql Resume</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <SyntaxHighlighter language='graphql' style={prismStyle}>
        {`query {bio { name }}`}
      </SyntaxHighlighter> */}
    </>
  );
}
