import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://graphql-pokemon2.vercel.app/",
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
