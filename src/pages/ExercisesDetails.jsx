import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import DetailExercise from "../components/DetailExercise";
import {
  getDetailExercise,
  getVideosToSearch,
} from "../handler/handlerResquestApi";
import ExerciseVideos from "../components/ExerciseVideos";

const ExercisesDetails = () => {
  const [error, setError] = useState("");
  const [exerciseDetail, setExercisseDetail] = useState({});
  const { id } = useParams();

  const [idVideosToSearch, setIdVideosToSearch] = useState([]);

  useEffect(() => {
    const searchVideosApi = async () => {
      const data = await getVideosToSearch(id, 3); // Id to exercise for to build query and number max responses
      return data;
    };
    searchVideosApi().then((data) => {
      if (Array.isArray(data)) {
        /*
        If the response is already okay the structure data normalize is 
        [
          {
            videoId: string,
            thumbnails: string // is a reference to logo it video 
          },
        ]
        */
        setIdVideosToSearch(data);
      } else {
        setError(data.message || data);
      }
    });
    window.scrollTo({ top: 0 }); // Solution fix whren use embed components for youtube
  }, []);

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
    <Stack justifyContent="center">
      <DetailExercise exerciseDetail={exerciseDetail} />
      <ExerciseVideos error={error} idVideosToSearch={idVideosToSearch} />
      {/*
      <SimilarExercises /> */}
    </Stack>
  );
};

export default ExercisesDetails;
