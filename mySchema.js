const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: {
      type: GraphQLInt,
    },
    my_number: {
      type: GraphQLInt,
    },
    my_name: {
      type: GraphQLString,
    },
    my_sub: {
      type: ASubType,
    },
  }),
});

const ASubType = new GraphQLObjectType({
  name: "Sub",
  fields: () => ({
    sub_number: {
      type: GraphQLInt,
    },
  }),
});

const StakutisType = new GraphQLObjectType({
  name: "ChrisType",
  fields: () => ({
    fish: {
      type: GraphQLString,
    },
  }),
});

// Root  Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return Promise.resolve([
          {
            flight_number: 1,
            fish: 12,
            my_number: 1,
            my_name: "one",
          },
          {
            flight_number: 2,
            my_number: 2,
            my_name: "two",
          },
        ]);
      },
    },
    stakutis: {
      type: StakutisType,
      resolve(parent, arg) {
        return Promise.resolve({ fish: "food" });
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Promise.resolve({
          flight_number: 1,
          fish: 12,
          my_number: 1,
          my_name: "one",
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
