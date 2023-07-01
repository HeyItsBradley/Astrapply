import { Job, User } from "../models";

const resolvers = {
  Query: {
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
    createUser: async (_, { userName }) => {
      try {
        const user = await User.create({
          userName,
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
    createJob: async (
      _,
      {
        authSub,
        title,
        description,
        company,
        applyMethod,
        contact,
        materials,
        notes,
      }
    ) => {
      try {
        const user = await User.findOne({ authSub: authSub });
        const job = await Job.create({
          title,
          description,
          company,
          applyMethod,
          contact,
          materials,
          notes,
        });
        if (!user || !job) {
          throw new Error("There was an error adding the job");
        }
        user.jobs.push(job._id);
        user.save();
        return job;
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
