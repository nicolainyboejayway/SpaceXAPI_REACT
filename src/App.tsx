import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import RenderRocketsLaunch from "./components/renderrocketslaunch";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
      <RenderRocketsLaunch />
    </ApolloProvider>
  );
}

export default App;
