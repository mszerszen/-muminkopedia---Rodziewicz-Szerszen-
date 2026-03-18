import CharacterModel, {Character} from "../models/Character";

export async function getAllCharacters(): Promise<Character[]> {
    return CharacterModel.find();
}