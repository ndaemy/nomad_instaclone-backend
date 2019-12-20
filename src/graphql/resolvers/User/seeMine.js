import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeMine: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      };
    }
  }
};
