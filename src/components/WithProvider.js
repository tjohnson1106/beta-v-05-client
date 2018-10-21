import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import { client } from "../graphql";

export default function WithProvider(WrappedComponent) {
  return class Cp extends Component {
    render() {
      return (
        <ApolloProvider>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
}
