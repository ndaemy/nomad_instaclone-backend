import generateSecret from '../../utils/generateSecret';
import { prisma } from '../../../generated/prisma-client';
import sendSecretMail from '../../utils/sendSecretMail';

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const emailSecret = generateSecret();

      try {
        await sendSecretMail(email, emailSecret);
        await prisma.updateUser({ data: { emailSecret }, where: { email } });
        return true;
      } catch {
        return false;
      }
    }
  }
};
