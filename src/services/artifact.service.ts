import {Character} from "../models/Character";
import {createArtifact, getAllArtifacts} from "../repositories/artifact.repository";
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