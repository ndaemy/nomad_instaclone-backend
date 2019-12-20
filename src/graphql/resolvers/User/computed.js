import { prisma } from '../../../../generated/prisma-client';

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
    itsMe: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};
