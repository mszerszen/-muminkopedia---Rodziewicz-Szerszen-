import {Artifact} from "../models/Artifact";
import {addArtifact, fetchArtifacts, modifyArtifact, removeArtifact} from "../services/artifact.service";
import { Response, Request } from "express";
import {deleteArtifactById, updateArtifactById} from "../repositories/artifact.repository";

export async function getArtifacts(req: Request, res: Response): Promise<void> {
    try {
        const artifacts = await fetchArtifacts();
        res.status(200).json(artifacts);

    } catch(e) {
        res.status(500).json({error: e});
    }
}

export async function postArtifact(req: Request, res: Response): Promise<void> {
    try {
        const {name, description, owner} = req.body;
        const newArtifact = await addArtifact(name, description, owner)
        res.status(200).json({message: `Added artifact: ${newArtifact}`});

    } catch(e) {
        res.status(500).json({error: "jakis blad"});
    }
}

export async function putArtifact(req: Request, res: Response): Promise<void> {
    try {
       const id = req.params.id as string;
       const updatedData = req.body;
       const updatedArtifact = await modifyArtifact(id, updatedData);
       res.status(200).json({message: `updated artifact: ${updatedArtifact}`});
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Jakis blad";
        res.status(500).json({error: errorMessage});
    }
}

export async function deleteArtifact(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id as string;
        const deletedArtifact = await removeArtifact(id)
        res.status(200).json({message: `Artifact deleted: ${deletedArtifact}`})
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Error deleting artifact";
        res.status(500).json({error: errorMessage});
    }

}
