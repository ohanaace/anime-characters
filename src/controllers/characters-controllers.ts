import { Request, Response } from "express";
import httpStatus from "http-status";
import * as characterServices from "../services/characters-services";
import { Character } from "../utils/interfaces";

export async function getCharacters(req: Request, res: Response) {
    const characters = await characterServices.getCharacters();
    return res.status(httpStatus.OK).send(characters);
};

export async function getCharacterById(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  const character = await characterServices.getCharacterById(id);
  return res.status(httpStatus.OK).send(character);
}

export async function createNewCharacter(req: Request, res: Response) {
  const {name, status, anime, role}: Character = req.body;
  await characterServices.createNewCharacter(name, anime, role, status);
  return res.sendStatus(httpStatus.CREATED);
};
export async function updateCharacterById(req: Request, res: Response) {
  const {name, status, anime, role}: Character = req.body;
  const id: number = parseInt(req.params.id);
  await characterServices.updateCharacterById(id, name, anime, role, status);
  return res.status(httpStatus.OK).send({message: 'Updated successfully!'});
};

export async function deleteCharacterById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    await characterServices.deleteCharacterById(id);
    return res.sendStatus(httpStatus.NO_CONTENT);
};