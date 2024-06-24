import { Schema, model } from "mongoose"

const classSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: "Teacher"
        }
    },
    { timestamps: true }

);

export const Class = model("Class", classSchema);