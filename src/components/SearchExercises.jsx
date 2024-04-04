import { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import SearchExercisesField from "./partials/SearchExercisesField";
import BodyPartsHorizontalScrooll from "./BodyPartsHorizontalScrooll";
import { getAllExercises } from "../utils/handlerResquestApi";

const SearchExercises = ({
  setLoader,
  exercisesList,
  bodyPartList,
  setExercisesList,
  setFilterExercises,
  bodyPartSelected,
  setBodyPartSelected,
  setError,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      try {
        const responseData = await getAllExercises();
        setExercisesList(responseData);
      } catch (error) {
        setLoader(false);
        setError(error.message);
        return;
      }
    }
    if (exercisesList) {
      console.log(exercisesList);
      setBodyPartSelected("all");
      const filterExercises = exercisesList.filter((exercises) => {
        return (
          exercises.bodyPart.includes(search) ||
          exercises.equipment.includes(search) ||
          exercises.name.includes(search) ||
          !exercises.secondaryMuscles.filter((muscles) =>
            muscles.includes(search)
          ).length === 0 ||
          exercises.target.includes(search)
        );
      });
      setSearch("");
      setFilterExercises(filterExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", sx: "30PX" },
          m: { xl: "50px 0", lg: "100px 0" },
        }}
      >
        Te van a sorprender estos ejercicios
      </Typography>
      <SearchExercisesField
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Box position="relative" padding="20px" width="100%" height="200px">
        <BodyPartsHorizontalScrooll
          bodyPartList={bodyPartList}
          bodyPartSelected={bodyPartSelected}
          setBodyPartSelected={setBodyPartSelected}
        />
      </Box>
    </Stack>
  );
};

SearchExercises.propTypes = {
  exercisesList: PropTypes.any.isRequired, // can to be array or object
  bodyPartList: PropTypes.array.isRequired,
  bodyPartSelected: PropTypes.string.isRequired,
  setLoader: PropTypes.func.isRequired,
  setExercisesList: PropTypes.func.isRequired,
  setFilterExercises: PropTypes.func.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default SearchExercises;
