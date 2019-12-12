import { prisma } from '../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: (_, args) => {
      const { username, email, firstName, lastName, bio } = args;
      const user = prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio
      });
      return user;
    }
  }
};
