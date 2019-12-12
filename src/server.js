import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import logger from 'morgan';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

// import configurations from dotenv
dotenv.config();
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(logger('dev'));

server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}!`)
);
