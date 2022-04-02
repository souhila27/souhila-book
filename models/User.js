const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get total count of friends and replies on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
