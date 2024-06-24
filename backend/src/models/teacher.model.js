import { Schema, model } from "mongoose"

const teacherSchema = new Schema(
    {
        employee_id: {
            type: String,
            required: true,
            lowecase: true,
            unique: true,
            trim: true,
            index: true
        },
        name: {
            type: String,
            required: true,
            index: true
        },
        image: {
            type: String,
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