import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["admin", "employee"], required: true},
    profilePicture: {type: String},
    createdOn: {type: Date, default: Date.now},
    updatedOn: {type: Date, default: Date.now},
})

const User = mongoose.model("user", userSchema)
export default User