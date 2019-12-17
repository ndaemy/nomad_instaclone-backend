import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import logger from 'morgan';
import passport from 'passport';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import './utils/passport';
import { authenticateJwt } from './utils/passport';
import { isAuthenticated } from './middlewares';

// import configurations from dotenv
dotenv.config();
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => ({ request, isAuthenticated })
});

server.express.use(logger('dev'));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}!`)
);
