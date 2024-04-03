import { Box, Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

const SearchExercisesField = ({ search, setSearch, handleSearch }) => {
  return (
    <Box position="relative" m="65px 0" flexDirection="row">
      <TextField
        sx={{
          height: "76px",
          input: {
            fontWeight: 700,
            border: "none",
            borderRadius: "4px",
          },
          width: { lg: "1000px", sm: "350px", xs: "100%" },
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
  );
};

SearchExercisesField.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchExercisesField;
