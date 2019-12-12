import generateSecret from '../../utils/generateSecret';
import { prisma } from '../../../generated/prisma-client';

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const emailSecret = generateSecret();

      try {
        await prisma.updateUser({ data: { emailSecret }, where: { email } });
        return true;
      } catch {
        return false;
      }
    }
  }
};
