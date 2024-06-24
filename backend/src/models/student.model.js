import { Schema, model } from "mongoose"

const acedemic_record_schema = new Schema({
    class_id: {
        type: Schema.Types.ObjectId,
        ref: "Class"
    },
    subject: String,
    Remarks: String
})

const studentSchema = new Schema(
    {
        studen_id: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        name: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        guradian_name: {
            type: String,
            required: true
        },
        guradian_relation: {
            type: String,
            required: true
        },
        guradian_contact: {
            type: String,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        acedemic_record: acedemic_record_schema
    },
    { timestamps: true }
);

export const Student = model("Student", studentSchema);