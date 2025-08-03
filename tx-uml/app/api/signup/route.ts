import {connect} from "../../dbConfig/dbConfig";
import User from "../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken"; 

connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);
        // check if user already exists
        const user = await User.findOne({email})

        if (user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // create new user
        const newUser = new User({
            username, 
            email,
            password: hashedPassword
        })
const savedUser = await newUser.save();
console.log(savedUser);

const tokenData = {
    id: savedUser._id,           // ✅ Correct object
    username: savedUser.username,
    email: savedUser.email
};

const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
    expiresIn: "1h"
});

const response = NextResponse.json({
    message: "User Created",
    success: true,
    data: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        isVerified: savedUser.isVerified,
    }
});

response.cookies.set("token", token, {
    httpOnly: true
});

return response;
        

    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500}
        )
    }
}