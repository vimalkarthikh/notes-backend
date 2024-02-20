import { ObjectId } from "bson";
import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    document: { type: String, required: true },
    user:{type:ObjectId, ref:"Users"}
});

const Notes = mongoose.model("Notes",notesSchema);

export { Notes };