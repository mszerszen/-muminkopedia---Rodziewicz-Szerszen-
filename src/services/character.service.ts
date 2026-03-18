import {Character} from "../models/Character";
import {getAllCharacters} from "../repositories/character.repository";

export async function fetchCharacters(): Promise<Character[]> {
    return await getAllCharacters();
}