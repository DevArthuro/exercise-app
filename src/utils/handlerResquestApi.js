import { RapidApiExercises } from "./fetchExercisesRapidapi";

const FetchApiObject = new RapidApiExercises();

export async function getAllExercises() {
  try {
    const data = await FetchApiObject.allExercises();
    return data;
  } catch (error) {
    const message = error?.message || "No se pudieron encontrar los ejercicios";
    throw new Error(message);
  }
}

export async function getBodyPartsList() {
  try {
    const data = await FetchApiObject.onlyBodyParts();
    return data;
  } catch (error) {
    const message =
      error?.message ||
      "La lista con las partes del cuerpo no se pudieron encontrar";
    throw new Error(message);
  }
}

export function getFilterByBodyPart(bodyPart, listToExercises) {
  return listToExercises;
}
