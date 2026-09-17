import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    profile: {
      age: Number,
      fitnessGoal: String,
    },
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);