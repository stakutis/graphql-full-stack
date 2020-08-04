const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const mySchema = require("./mySchema");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: mySchema,
    graphiql: true,
  })
);

app.listen(4000);
