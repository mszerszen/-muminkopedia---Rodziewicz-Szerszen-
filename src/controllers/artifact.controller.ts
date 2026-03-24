import {Artifact} from "../models/Artifact";
import {addArtifact, fetchArtifacts} from "../services/artifact.service";
import { Response, Request } from "express";

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
        res.status(500).json({error: e});
    }
}
