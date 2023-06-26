import { User } from "../models";

const resolvers = {
  Query: {
    // getAllUsers: async () => {
    //   try {
    //     const users = await User.find({});
    //     return users;
    //   } catch (err) {
    //     if (err instanceof Error) {
    //       throw new Error(err.message);
    //     } else {
    //       throw new Error("An unknown error occurred.");
    //     }
    //   }
    // },
    getUser: async (_, { authSub }) => {
      try {
        const user = await User.findOne({ authSub: authSub }).populate("jobs");
        return user;
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        } else {
          throw new Error("An unknown error occurred.");
        }
      }
    },
  },
  Mutation: {
    createUser: async (_, { username }) => {
      try {
        const user = await User.create({
          username,
        });
        return user;
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        } else {
          throw new Error("An unknown error occurred.");
        }
      }
    },
  },
};

export { resolvers };
