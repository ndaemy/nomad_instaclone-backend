import { prisma } from '../../../../generated/prisma-client';
import generateJwt from '../../../utils/generateJwt';

export default {
  Mutation: {
    confirmEmail: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.emailSecret === secret) {
        return generateJwt(user.id);
      } else {
        return Error('Wrong email / secret combination.');
      }
    }
  }
};
