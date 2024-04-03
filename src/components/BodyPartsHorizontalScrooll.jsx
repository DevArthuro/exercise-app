import { Box } from "@mui/material";
import PropTypes from "prop-types";
import BodyPart from "./partials/BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const BodyPartsHorizontalScrooll = ({
  bodyPartList,
  bodyPartSelected,
  setBodyPartSelected,
}) => {
  return (
    <Box position="relative" padding="20px" width="100%">
      <ScrollMenu>
        {bodyPartList.map((bodyPart, index) => (
          <Box key={index} m={{ lg: "0 30px", sm: "0 20px", xs: "0 10px" }}>
            <BodyPart
              itemBodyPart={bodyPart}
              bodyPartSelected={bodyPartSelected}
              setBodyPartSelected={setBodyPartSelected}
            />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

BodyPartsHorizontalScrooll.propTypes = {
  bodyPartSelected: PropTypes.string.isRequired,
  bodyPartList: PropTypes.array.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
};

export default BodyPartsHorizontalScrooll;
