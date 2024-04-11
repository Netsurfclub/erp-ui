import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import App from "./components/App";

import { APPLICATION_NAME } from "./constants/app.constants";

import "./index.css";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: process.env.VITE_ERP_API_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App applicationName={APPLICATION_NAME} />
    </ApolloProvider>
  </React.StrictMode>,
);
