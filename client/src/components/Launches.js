import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      my_number
    }
  }
`;

export const Launches = (props) => {
  console.log("Launches rendering...");
  return (
    <>
      <div> Launches...</div>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          console.log("loading:", loading, "error:", error, "data:", data);
          if (loading) return <h1>LOADING!</h1>;
          return (
            <div>
              loading:{loading} error:{error ? "ERROR Happened" : "No error"}{" "}
              data:{data ? "DATA!" : "No data"}
            </div>
          );
        }}
      </Query>
    </>
  );
};
