import * as characterRepositories from "../repositories/characters-repositories";
import { Character } from "../utils/interfaces";
import * as characterErrors from "../errors/characters-errors"

export async function getCharacters() {
    const result = await characterRepositories.getCharactersDB();
    if (result.rowCount === 0) {
        characterErrors.notFoundError();
    };
    return result.rows;
};

export async function getCharacterById(id: number) {
    const result = await characterRepositories.getCharacterById(id);
    if (result.rowCount === 0) {
        characterErrors.notFoundError();
    };
    return result.rows[0];
}

export async function createNewCharacter(name: string, anime: string, role: string, status: string) {
    await characterRepositories.createNewCharacterDB(name, anime, role, status);
};

export async function updateCharacterById(id: number, name: string, anime: string, role: string, status: string) {
    await getCharacterById(id);
    const updatedInfo: { [key: string]: string } = {};

    if (name) {
        updatedInfo['name'] = name;
    };
    if (anime) {
        updatedInfo['anime'] = anime;
    };
    if (role) {
        updatedInfo['role'] = role;
    };
    if (status) {
        updatedInfo['status'] = status;
    };

    await characterRepositories.updateCharacterByIdDB(id, updatedInfo);
};

export async function deleteCharacterById(id: number) {
    const result = await characterRepositories.deleteCharacterByIdDB(id);
    if (result.rowCount === 0) {
        characterErrors.noMatchingError();
    }
    return result;
};