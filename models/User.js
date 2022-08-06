import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String, 
  password: String, 
  emailAddress : String, 
  dob: Number, 
  address: String, 
});

const User =  mongoose.models.User || mongoose.model("User", UserSchema);

export default User; 