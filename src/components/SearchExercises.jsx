import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { RapidApiExercises } from "../utils/fetchExercisesRapidapi";
import PropTypes from "prop-types";
import SearchExercisesField from "./partials/SearchExercisesField";

const SearchExercises = ({ setLoader }) => {
  const [search, setSearch] = useState("");
  const [resultRequest, setResultRequest] = useState("");
  const [filterExercises, setFilterExercises] = useState("");
  const [bodyPartsMenu, setBodyPartsMenu] = useState("");

  useEffect(() => {
    const fetchBodyParts = async () => {
      const data = await new RapidApiExercises().onlyBodyParts();
      setBodyPartsMenu(["Todas", ...data]);
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    setLoader(true);
    if (search) {
      const data =
        resultRequest || (await new RapidApiExercises().allExercises());
      setResultRequest(data);
    }
    if (resultRequest) {
      const filterExercises = resultRequest.filter((exersices) => {
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
    </Stack>
  );
};

SearchExercises.propTypes = {
  setLoader: PropTypes.func.isRequired,
};

export default SearchExercises;
