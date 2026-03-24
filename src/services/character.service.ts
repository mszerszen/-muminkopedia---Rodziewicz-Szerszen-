import character, {Character} from "../models/Character";
import {
    createCharacter,
    deleteCharacterById,
    getAllCharacters,
    updateCharacterById
} from "../repositories/character.repository";
import {Types} from "mongoose";

export async function fetchCharacters(): Promise<Character[]> {
    return await getAllCharacters();
}

export async function addCharacter(name: string, description: string, species: string, inWinterSleep: boolean, bestFriend: Types.ObjectId | null): Promise<Character> {
    if(!name || !description || !species) {
        throw new Error("Missing required fields");
    }

    return await createCharacter(name, description, species, inWinterSleep, bestFriend);
}

export async function modifyCharacter(id: string, updatedData: Partial<Character>): Promise<Character> {
    const updatedCharacter = await updateCharacterById(id, updatedData);

    if(!updatedCharacter) {
        throw new Error("Character not found");
    }

    return updatedCharacter;
}

export async function removeCharacter(id: string): Promise<Character> {
    const deletedCharacter = await deleteCharacterById(id);

    if(!deletedCharacter) {
        throw new Error("Character not found");
    }

    return deletedCharacter;
}