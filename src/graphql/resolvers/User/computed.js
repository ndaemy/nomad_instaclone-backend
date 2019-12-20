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
    }
  }
};
