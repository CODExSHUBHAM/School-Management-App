import { Schema, model } from "mongoose"

const employeeSchema = new Schema(
    {
        employee_id: {
            type: String,
            required: true,
            lowecase: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
        },
        Department: {
            type: String,
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
        },
    },
    { timestamps: true }
);

export const Employee = model("Employee", employeeSchema);