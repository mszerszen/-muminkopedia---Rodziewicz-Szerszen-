import {Character} from "../models/Character";
import {
    createArtifact,
    deleteArtifactById,
    getAllArtifacts,
    updateArtifactById
} from "../repositories/artifact.repository";
import {Artifact} from "../models/Artifact";
import {Types} from "mongoose";

export async function fetchArtifacts(): Promise<Artifact[]>  {
    return await getAllArtifacts();
}

export async function addArtifact(title: string, description: string, owner: Types.ObjectId): Promise<Artifact> {
    if(!title || !description || !owner) {
        throw new Error("Missing fields");
    }
    return await createArtifact(title, description, owner);
}

export async function modifyArtifact(id: string, updatedArtifact: Partial<Artifact>): Promise<Artifact | null> {
    const updateArtifact = await updateArtifactById(id, updatedArtifact);

    if(!updateArtifact) {
        throw new Error("Missing fields");
    }

    return updateArtifact;
}

export async function removeArtifact(id: string): Promise<Artifact> {
    const deletedArtifact = await deleteArtifactById(id)

    if(!deletedArtifact) {
        throw new Error("No artifact found with ID");
    }

    return deletedArtifact;
}