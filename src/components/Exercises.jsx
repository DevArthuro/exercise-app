import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExercisesCard from "./partials/ExercisesCard";

const Exercises = ({ filterExercises }) => {
  console.log(filterExercises);
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
        {filterExercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

Exercises.propTypes = {
  filterExercises: PropTypes.any.isRequired,
};

export default Exercises;
