import { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import SearchExercisesField from "./partials/SearchExercisesField";
import BodyPartsHorizontalScrooll from "./BodyPartsHorizontalScrooll";
import { getAllExercises } from "../handler/handlerResquestApi";

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
      setBodyPartSelected("");
      const filterExercises = exercisesList.filter((exercises) => {
        return (
          exercises.bodyPart.toLowerCase().includes(search) ||
          exercises.equipment.toLowerCase().includes(search) ||
          exercises.name.toLowerCase().includes(search) ||
          !exercises.secondaryMuscles.filter((muscles) =>
            muscles.toLowerCase().includes(search)
          ).length === 0 ||
          exercises.target.toLowerCase().includes(search)
        );
      });
      setSearch("");
      setFilterExercises(filterExercises);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
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
