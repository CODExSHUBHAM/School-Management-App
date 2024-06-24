import { Schema, model } from "mongoose"

const teacherSchema = new Schema(
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
        subject: {
            type: String,
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
        },
        assignedClasses: {
            type: [Schema.Types.ObjectId],
            ref: "Class"
        }
    },
    { timestamps: true }
);

export const Teacher = model("Teacher", teacherSchema);