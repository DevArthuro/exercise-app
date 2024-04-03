import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { RapidApiExercises } from "../utils/fetchExercisesRapidapi";
import PropTypes from "prop-types";
import SearchExercisesField from "./partials/SearchExercisesField";
import BodyPartsHorizontalScrooll from "./BodyPartsHorizontalScrooll";

const SearchExercises = ({
  setLoader,
  exercisesList,
  bodyPartList,
  setExercisesList,
  setFilterExercises,
  bodyPartSelected,
  setBodyPartSelected,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    setLoader(true);
    if (search) {
      try {
        const responseData =
          exercisesList.length > 0
            ? exercisesList
            : await new RapidApiExercises().allExercises();
        setExercisesList(responseData);
      } catch (error) {
        setExercisesList([]);
        setLoader(false);
        return;
      }
    }
    if (exercisesList) {
      const filterExercises = exercisesList.filter((exersices) => {
        return (
          exersices.bodyPart.includes(search) ||
          exersices.equipment.includes(search) ||
          exersices.name.includes(search) ||
          !exersices.secondaryMuscles.filter((muscles) =>
            muscles.includes(search)
          ).length === 0 ||
          exersices.target.includes(search)
        );
      });
      setSearch("");
      setFilterExercises(filterExercises.length > 0 ? filterExercises : []);
    }
    setLoader(false);
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
      <BodyPartsHorizontalScrooll
        bodyPartList={bodyPartList}
        bodyPartSelected={bodyPartSelected}
        setBodyPartSelected={setBodyPartSelected}
      />
    </Stack>
  );
};

SearchExercises.propTypes = {
  exercisesList: PropTypes.array.isRequired,
  bodyPartList: PropTypes.array.isRequired,
  bodyPartSelected: PropTypes.string.isRequired,
  setLoader: PropTypes.func.isRequired,
  setExercisesList: PropTypes.func.isRequired,
  setFilterExercises: PropTypes.func.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
};

export default SearchExercises;
