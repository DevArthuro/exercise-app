import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ImageListItem, Stack, Button, Typography, Box } from "@mui/material";

const ExercisesCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <Box
        width={{ lg: "400px", xs: "300px" }}
        height="320px"
        overflow="hidden"
      >
        <ImageListItem>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </ImageListItem>
      </Box>
      <Stack direction="row">
        <Button
          sx={{
            ml: "25px",
            color: "#fff",
            background: "#ff2526",
            fontSize: "1rem",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          variant="contained"
          color="error"
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "25px",
            color: "#fff",
            fontSize: "1rem",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          variant="contained"
          color="success"
        >
          {exercise.equipment}
        </Button>
      </Stack>
      <Typography
        ml="25px"
        color="#000"
        fontWeight="bold"
        mt="10px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

ExercisesCard.propTypes = {
  exercise: PropTypes.object.isRequired,
};

export default ExercisesCard;
