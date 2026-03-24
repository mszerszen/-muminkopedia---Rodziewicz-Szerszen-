import CharacterModel, {Character} from "../models/Character";
import {Types} from "mongoose";

export async function getAllCharacters(): Promise<Character[]> {
    return CharacterModel.find();
}

export async function createCharacter(name: string, description: string, species: string, inWinterSleep: boolean, bestFriend: Types.ObjectId | null): Promise<Character> {
    const newCharacter = new CharacterModel({ name, description, species, inWinterSleep, bestFriend });
    return await newCharacter.save();
}

export async function updateCharacterById(id: string, updatedCharacter: Partial<Character>): Promise<Character | null> {
    return CharacterModel.findByIdAndUpdate(id, updatedCharacter, { returnDocument: "after" })
}

export async function deleteCharacterById(id: string): Promise<Character | null> {
    return CharacterModel.findByIdAndDelete(id)
}