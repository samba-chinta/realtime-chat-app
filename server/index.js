import { config } from "dotenv";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import http from "http";
import cors from "cors";

// typedefs and resolvers for graphql
import { typeDefs } from "./graphql/typedefs.js";
import { resolvers } from "./graphql/resolvers.js";

// establishing the MongoDB connection
import "./database/mongodb.js";

// configuring dotenv
config();

// configuring servers (express, http, socket, graphql respectively)
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    },
});
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await apolloServer.start();
// enable cors & json
app.use(cors());
app.use(express.json());
app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
        context: async ({ req }) => ({ token: req.headers.token }),
    })
);

// base route
app.get("/", (req, res) => {
    res.send("Hey Hi! Welcome to GraphQl Server");
});

io.on("connection", (socket) => {
    console.log(`Connected to the Socket: ${socket.id}`);
    socket.on("set-user-id", ({ msg }) => {
        console.log(msg);
    });
});

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
