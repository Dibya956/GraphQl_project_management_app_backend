import express from "express";
import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import colors from "colors";
import schema from "./schema/schema.js";
import { connectionDB } from "./config/db.js";

const port = process.env.PORT || 5000
const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port, () => { 
    connectionDB();
    console.log(`Server running on ${port}`);
});