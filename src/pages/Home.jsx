import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useState } from "react";
import Loader from "../components/ui/Loader";

const Home = () => {
  const [loader, setLoader] = useState(false);
  return (
    <>
      {!loader ? (
        <Box>
          <HeroBanner />
          <SearchExercises setLoader={setLoader} />
        </Box>
      ) : (
        <Box
          width="100%"
          textAlign="center"
          height="70vh"
          alignContent="center"
        >
          <Loader />
        </Box>
      )}
    </>
  );
};

export default Home;
