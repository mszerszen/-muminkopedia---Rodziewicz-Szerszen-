import {Character} from "../models/Character";
import {addCharacter, fetchCharacters, modifyCharacter, removeCharacter} from "../services/character.service";
import { Response, Request } from "express";
import {createCharacter, deleteCharacterById} from "../repositories/character.repository";

export async function getCharacters(req: Request, res: Response): Promise<void> {
    try {
        const characters = await fetchCharacters();
        res.status(200).json(characters);
    } catch (err) {
        res.status(500).json(err);
    }
}

export async function postCharacter(req: Request, res: Response): Promise<void> {
    try {
        const { name, description, species, inWinterSleep, bestFriend } = req.body;
        const newCharacter = await addCharacter(name, description, species, inWinterSleep, bestFriend);
        res.status(200).json(newCharacter);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd";
        res.status(500).json(err);
    }
}

export async function putCharacter(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id as string;
        const updatedData = req.body;

        const updatedCharacter = await modifyCharacter(id, updatedData);

        res.json(updatedCharacter);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd";

        res.status(500).json(errorMessage);
    }
}

export async function deleteCharacter(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id as string;
        const deletedCharacter = await removeCharacter(id);
        res.status(200).json(deletedCharacter);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Nieznany błąd";

        res.status(500).json(errorMessage);
    }
}