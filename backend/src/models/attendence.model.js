import { Schema, model } from "mongoose"

const attendenceSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            Enum: ["PRESENT", "ABSENT", "lEAVE"],
            required: true
        },
        check_in_time: {
            type: String,
        },
        check_out_time: {
            type: String,
        }
    },
    { timestamps: true }
);

export const Attendence = model("Attendence", attendenceSchema);