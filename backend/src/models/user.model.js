import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["ADMIN", "EMPLOYEE", "TEACHER", "STUDENT"],
            required: true
        }
    },
    { timestamps: true }
);

export const User = model("User", userSchema);