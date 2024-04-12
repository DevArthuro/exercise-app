import { RapidApiExercises } from "../utils/fetchExercisesRapidapi";

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
  if (bodyPart === "all") {
    return listToExercises;
  }
  return listToExercises.filter((exercise) => exercise.bodyPart === bodyPart);
}

export async function getDetailExercise(id) {
  try {
    const data = await FetchApiObject.getDetailExercise(id);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
