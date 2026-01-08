"use client";

import { gql, useQuery } from "@apollo/client";

const GET_POKEMONS = gql`
  query {
    pokemons(first: 5) {
      name
      image
    }
  }
`;

export default function Pokemon() {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h2>Pokémon List</h2>
      {data.pokemons.map((p: any) => (
        <div key={p.name}>
          <p>{p.name}</p>
          <img src={p.image} width={120} />
        </div>
      ))}
    </div>
  );
}