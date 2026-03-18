import mongoose, { Document, Types } from "mongoose"

export interface Character extends Document {
    name: string,
    description: string,
    species: string,
    inWinterSleep: boolean,
    bestFriend: Types.ObjectId
}

const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    species: { type: String, required: true },
    inWinterSleep: { type: Boolean, default: false },
    bestFriend: { type: Types.ObjectId, ref: "BestFriend", required: true },
})

export default mongoose.models