import { RapidApiExercises } from "../utils/fetchExercisesRapidapi";
import YoutubeApi from "../utils/fetchYoutubeApi";

// Rapid api consume

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

// Youtube api consume

const FetchYoutubeObject = new YoutubeApi();

export async function getVideosToSearch(id, maxResults) {
  const exercise = await getDetailExercise(id);
  const query = `The exercise ${exercise.name} with equipment ${exercise.equipment}`;
  const data = await FetchYoutubeObject.setSearch(query, maxResults);
  if (data.code === 403) {
    // Condition to message error
    return "Hemos superado el limite de uso permitido";
  }
  if (data.code === 500) {
    return "Error interno del programa";
  }
  const idToVideos = new Array();
  data.items.forEach((item) => {
    idToVideos.push({
      videoId: item.id.videoId,
      thumbnails: item.snippet.thumbnails.medium.url,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
    });
  });
  return idToVideos;
}
