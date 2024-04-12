import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useState, useEffect } from "react";
import Loader from "../components/common/Loader";
import {
  getAllExercises,
  getBodyPartsList,
  getFilterByBodyPart,
} from "../handler/handlerResquestApi";
import Exercises from "../components/Exercises";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [exercisesList, setExercisesList] = useState([]);
  const [filterExercises, setFilterExercises] = useState([]);
  const [bodyPartsMenu, setBodyPartsMenu] = useState([]);
  const [bodyPartSelected, setBodyPartSelected] = useState("all");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const data = await getBodyPartsList();
        setBodyPartsMenu(["all", ...data]);
      } catch (error) {
        setBodyPartsMenu([]);
        setError(error.message);
        return;
      }
    };
    const requestAllExercises = async () => {
      try {
        const data = await getAllExercises();
        setExercisesList(data);
        setFilterExercises(data);
      } catch (error) {
        setError(error);
        return;
      }
    };

    setLoader(true);
    fetchBodyParts();
    requestAllExercises();
    setLoader(false);
  }, []);

  useEffect(() => {
    const result = getFilterByBodyPart(bodyPartSelected, exercisesList);

    if (result && !!bodyPartSelected) {
      setFilterExercises(result);
    }
  }, [filterExercises, bodyPartSelected, exercisesList]);

  return (
    <>
      {!loader ? (
        <Box>
          <HeroBanner />
          <SearchExercises
            setLoader={setLoader}
            exercisesList={exercisesList}
            bodyPartList={bodyPartsMenu}
            bodyPartSelected={bodyPartSelected}
            setExercisesList={setExercisesList}
            setFilterExercises={setFilterExercises}
            setBodyPartSelected={setBodyPartSelected}
            setError={setError}
          />
          <Exercises
            filterExercises={filterExercises}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
      {error}
    </>
  );
};

export default Home;
