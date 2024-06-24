import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        role: {
            type: String,
            enum: ["ADMIN", "EMPLOYEE", "TEACHER", "STUDENT"],
            required: true
        },
        refreshToken: {
            type: String
        }
    },
    { timestamps: true }
);

export const User = model("User", userSchema);