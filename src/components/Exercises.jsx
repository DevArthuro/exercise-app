import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExercisesCard from "./partials/ExercisesCard";

const Exercises = ({ filterExercises, currentPage, setCurrentPage }) => {
  const EXERCISES_PER_PAGE = 6;
  const lastIndexExercises = currentPage * EXERCISES_PER_PAGE;
  const firstIndexExercises = lastIndexExercises - EXERCISES_PER_PAGE;
  const currentExercises = filterExercises.slice(
    firstIndexExercises,
    lastIndexExercises
  );

  const paginateChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({ top: "1000", behavior: "smooth" });
  };
  return (
    <Box
      sx={{ mt: { lg: "110px", xs: "0" } }}
      mt="50px"
      p="20px"
      id="exercises"
    >
      <Typography variant="h4" textAlign="center" mb="46px">
        Ejercicios
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {filterExercises.length > EXERCISES_PER_PAGE && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(filterExercises.length / EXERCISES_PER_PAGE)}
            page={currentPage}
            onChange={(_, page) => paginateChange(page)}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

Exercises.propTypes = {
  filterExercises: PropTypes.any.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Exercises;
