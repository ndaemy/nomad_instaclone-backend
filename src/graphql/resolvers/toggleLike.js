import { isAuthenticated } from '../../middlewares';
import { prisma } from '../../../generated/prisma-client';

export default {
  Mutation: {
    toggleLike: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      try {
        const existLike = await prisma.$exists.like({
          AND: [
            {
              user: {
                id: user_id
              }
            },
            {
              post: {
                id: postId
              }
            }
          ]
        });
        if (existLike) {
          // TODO:
        } else {
          const newLike = await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }
        return true;
      } catch {
        return false;
      }
    }
  }
};
