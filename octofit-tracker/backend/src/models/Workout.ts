import { model, Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    activities: [String],
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);