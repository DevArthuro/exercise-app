import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import DetailExercise from "../components/DetailExercise";
import { getDetailExercise } from "../handler/handlerResquestApi";

const ExercisesDetails = () => {
  const [error, setError] = useState("");
  const [exerciseDetail, setExercisseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const data = await getDetailExercise(id);
        setExercisseDetail(data);
        return true;
      } catch (error) {
        setError(error.message);
        return false;
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      {!error ? (
        <DetailExercise exerciseDetail={exerciseDetail} />
      ) : (
        <div>{error}</div>
      )}
      {/*
      <ExerciseVideos />
      <SimilarExercises /> */}
    </Box>
  );
};

export default ExercisesDetails;
