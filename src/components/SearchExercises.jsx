import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { RapidApiExercises } from "../utils/fetchExercisesRapidapi";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [resultRequest, setResultRequest] = useState("");
  const [filterExercises, setFilterExercises] = useState([]);

  const handleSearch = async () => {
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
      <Box position="relative" m="65px 0" flexDirection="row">
        <TextField
          sx={{
            height: "76px",
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170px", sm: "350px", xs: "100%" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
          }}
          placeholder="Busca un ejercicio en particular..."
          type="text"
        />
        <Button
          className="search-btn"
          variant="contained"
          color="error"
          sx={{
            height: "55px",
            background: "#FF2625",
            m: { sm: "0 5px", xs: "0" },
            width: { sm: "100px", xs: "100%" },
          }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
