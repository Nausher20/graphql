import { gql } from '@apollo/client';
import client from '../lib/apolloClient';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getRecipes(amount: 10) {
          id
          title
          description
        }
      }
    `,
  });

  return {
    props: {
      recipes: data.getRecipes || []
    },
  };
}

export default function Home({ recipes }) {
  if (!recipes.length) {
    return <p>No recipes found. Add some on the backend!</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Recipes from MongoDB</h1>
      {recipes.map((r) => (
        <div key={r.id} style={{ marginBottom: 20 }}>
          <h2>{r.title}</h2>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
}