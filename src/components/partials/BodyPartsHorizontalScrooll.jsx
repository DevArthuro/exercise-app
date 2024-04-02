import { Box } from "@mui/material";
import PropTypes from "prop-types";

const BodyPartsHorizontalScrooll = ({
  bodyPartList,
  bodyPartSelected,
  setBodyPartSelected,
}) => {
  return (
    <Box position="relative" padding="20px" width="100%">
      {bodyPartList.map((bodyPart, index) => {
        return (
          <Box key={index} m={{ lg: "0 50px", sm: "0 20px", xs: "0 10px" }}>
            {bodyPart}
          </Box>
        );
      })}
    </Box>
  );
};

BodyPartsHorizontalScrooll.propTypes = {
  bodyPartSelected: PropTypes.string.isRequired,
  bodyPartList: PropTypes.array.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
};

export default BodyPartsHorizontalScrooll;
