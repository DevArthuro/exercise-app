export class RapidApiExercises {
  constructor() {
    this.baseUrl =
      import.meta.env.VITE_SANDBOX_MOOD === "false"
        ? "https://exercisedb.p.rapidapi.com/exercises"
        : import.meta.env.VITE_SERVER_MOCK_URL;
    this.options =
      import.meta.env.VITE_SANDBOX_MOOD === "false"
        ? {
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_SECRET_KEY,
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
          }
        : {};
    this.sandbox = import.meta.env.VITE_SANDBOX_MOOD === "true";
  }

  async allExercises() {
    const aditionalOptions = {
      method: "GET",
    };
    const options = Object.assign({}, aditionalOptions, this.options);
    try {
      const responseExercises = await fetch(
        `${this.baseUrl}${this.sandbox ? "/exercises" : ""}`,
        options
      );
      const data = await responseExercises.json();
      return data;
    } catch (error) {
      throw new Error(error.message || "Error to request all exercises");
    }
  }

  async onlyBodyParts() {
    const aditionalOptions = {
      method: "GET",
    };
    const options = Object.assign({}, aditionalOptions, this.options);
    try {
      const responseExercises = await fetch(
        `${this.baseUrl}/bodyPartList${this.sandbox ? "/1" : ""}`,
        options
      );
      const data = await responseExercises.json();
      return data?.bodyParts || data;
    } catch (error) {
      throw new Error(error.message || "Error to request body parts");
    }
  }
}
