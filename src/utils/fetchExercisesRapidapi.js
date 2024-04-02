export class RapidApiExercises {
  constructor() {
    this.baseUrl = "https://exercisedb.p.rapidapi.com/exercises";
    this.options = {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_SECRET_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
  }

  async allExercises() {
    const aditionalOptions = {
      method: "GET",
    };
    const options = Object.assign({}, aditionalOptions, this.options);
    try {
      const responseExercises = await fetch(`${this.baseUrl}`, options);
      const data = responseExercises.json();
      return data;
    } catch (error) {
      return { error: error.message || "Error to request all exercises" };
    }
  }

  async onlyBodyParts() {
    const aditionalOptions = {
      method: "GET",
    };
    const options = Object.assign({}, aditionalOptions, this.options);
    try {
      const responseExercises = await fetch(
        `${this.baseUrl}/bodyPartList`,
        options
      );
      const data = responseExercises.json();
      return data;
    } catch (error) {
      return { error: error.message || "Error to request body parts" };
    }
  }
}
