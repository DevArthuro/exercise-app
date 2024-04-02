import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useState, useEffect } from "react";
import Loader from "../components/ui/Loader";
import { RapidApiExercises } from "../utils/fetchExercisesRapidapi";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [exercisesList, setExercisesList] = useState([]);
  const [filterExercises, setFilterExercises] = useState([]);
  const [bodyPartsMenu, setBodyPartsMenu] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const data = await new RapidApiExercises().onlyBodyParts();
        setBodyPartsMenu(["Todas", ...data]);
      } catch (error) {
        setBodyPartsMenu([]);
        return;
      }
    };

    fetchBodyParts();
  }, []);
  return (
    <>
      {!loader ? (
        <Box>
          <HeroBanner />
          <SearchExercises
            setLoader={setLoader}
            exercisesList={exercisesList}
            setExercisesList={setExercisesList}
            setFilterExercises={setFilterExercises}
          />
        </Box>
      ) : (
        <Box
          width="100%"
          textAlign="center"
          height="70vh"
          alignContent="center"
        >
          <Loader />
        </Box>
      )}
    </>
  );
};

export default Home;
