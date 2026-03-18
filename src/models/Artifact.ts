import mongoose, { Document, Types } from "mongoose"

export interface Artifact extends Document {
    name: string,
    description: string,
    owner: Types.ObjectId
}

const ArtifactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: "BestFriend", required: true },
})

export default mongoose.models