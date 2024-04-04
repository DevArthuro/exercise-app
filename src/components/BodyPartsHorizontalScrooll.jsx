import { Box, Typography, ImageListItem } from "@mui/material";
import PropTypes from "prop-types";
import BodyPart from "./partials/BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";

import LeftArrowLogo from "../assets/Icons/arrowLeft.png";
import RightArrowLogo from "../assets/Icons/arrowRight.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} alignContent="center" p="5px">
      <ImageListItem
        sx={{
          width: { sm: "40px", xs: "20px" },
          height: { sm: "40px", xs: "20px" },
        }}
      >
        <img src={LeftArrowLogo} alt="left arrow" />
      </ImageListItem>
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} alignContent="center" p="5px">
      <ImageListItem
        sx={{
          width: { sm: "40px", xs: "20px" },
          height: { sm: "40px", xs: "20px" },
        }}
      >
        <img src={RightArrowLogo} alt="left arrow" width="50px" />
      </ImageListItem>
    </Typography>
  );
};

const BodyPartsHorizontalScrooll = ({
  bodyPartList,
  bodyPartSelected,
  setBodyPartSelected,
  setError,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyPartList.map((bodyPart, index) => (
        <Box
          key={index}
          m={{ lg: "0 30px", sm: "0 20px", xs: "0 10px" }}
          itemId={bodyPart}
        >
          <BodyPart
            itemBodyPart={bodyPart}
            bodyPartSelected={bodyPartSelected}
            setBodyPartSelected={setBodyPartSelected}
            setError={setError}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

BodyPartsHorizontalScrooll.propTypes = {
  bodyPartSelected: PropTypes.string.isRequired,
  bodyPartList: PropTypes.array.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default BodyPartsHorizontalScrooll;
