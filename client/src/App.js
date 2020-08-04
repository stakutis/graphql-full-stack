import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import { Launches } from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Stakutis end-to-end GraphQL example</h1>
        </header>
        <div>
          Hi there
          <Launches />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
