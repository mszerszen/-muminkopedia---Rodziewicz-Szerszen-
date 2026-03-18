import {Character} from "../models/Character";
import {fetchCharacters} from "../services/character.service";
import { Response, Request } from "express";

export async function getCharacters(req: Request, res: Response): Promise<void> {
    try {
        const characters = await fetchCharacters();
        res.status(200).json(characters);
    } catch (err) {
        res.status(500).json(err);
    }
}