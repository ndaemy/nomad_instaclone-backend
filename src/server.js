import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import logger from 'morgan';
import passport from 'passport';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import './utils/passport';

// import configurations from dotenv
dotenv.config();
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(logger('dev'));
server.express.use(passport.authenticate('jwt'));

server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}!`)
);
