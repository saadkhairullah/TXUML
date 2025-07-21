// create user model here
import mongoose from "mongoose";
// import { unique } from "next/dist/build/utils";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Provide a Username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Provide an Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Provide a Password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifiedToken: String,
    verifiedTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;