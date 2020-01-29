import { prisma } from '../../../generated/prisma-client';

export default {
  User: {
    fullName: parent => {
      if (parent.firstName === null) {
        return parent.lastName;
      } else if (parent.lastName === null) {
        return parent.firstName;
      } else {
        return `${parent.firstName} ${parent.lastName}`;
      }
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
    isFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return await prisma.$exists.user({
        AND: [{ id: parentId }, { followers_some: { id: user.id } }]
      });
    }
  },
  Post: {
    isLiked: async (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return await prisma.$exists.like({
        AND: [{ user: { id: user.id } }, { post: { id } }]
      });
    },
    likeCount: async parent =>
      await prisma
        .likesConnection({
          where: { post: { id: parent.id } }
        })
        .aggregate()
        .count()
  }
};
