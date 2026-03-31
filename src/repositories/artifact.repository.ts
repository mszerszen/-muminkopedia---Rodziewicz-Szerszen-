import ArtifactModel, {Artifact} from "../models/Artifact";
import {Types} from "mongoose";

export async function getAllArtifacts(): Promise<Artifact[]> {
    return ArtifactModel.find()
}

export async function createArtifact(name: string, description: string, owner: Types.ObjectId): Promise<Artifact> {
    const newTask = new ArtifactModel({name, description, owner})
    return await newTask.save()
}

export async function updateArtifactById(id: string, updatedArtifact: Partial<Artifact>): Promise<Artifact | null> {
    return ArtifactModel.findByIdAndUpdate(id, updatedArtifact, {returnDocument: "after"})
}

export async function deleteArtifactById(id: string): Promise<Artifact | null> {
    return ArtifactModel.findByIdAndDelete(id)
}