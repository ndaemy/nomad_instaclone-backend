import { prisma } from '../../../generated/prisma-client';

export default {
  Mutation: {
    confirmEmail: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.emailSecret === secret) {
        // JWT
        return 'TOKEN';
      } else {
        return Error('Wrong email / secret combination.');
      }
    }
  }
};
