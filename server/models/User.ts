import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    authSub: {
      type: String,
    },
    joinDate: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => new Date(timeStamp).toDateString(),
    },
    jobs:[
      {
        type:Schema.Types.ObjectId,
        ref:"Job"
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const User = model("User", userSchema);

export { User };
