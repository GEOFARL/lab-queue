import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: [true, 'Such an email already exists'],
    },
    password: {
      type: String,
      required: [true, 'Provide a password'],
    },
    imageUri: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
