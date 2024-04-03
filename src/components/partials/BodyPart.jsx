import PropTypes from "prop-types";
import { Stack, Typography, ImageListItem } from "@mui/material";

import Icon from "../../assets/Icons/gym.png";

const BodyPart = ({ itemBodyPart, bodyPartSelected, setBodyPartSelected }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: itemBodyPart === bodyPartSelected && "4px solid #ff2625",
        background: "#FAD2CA ",
        width: { lg: "200px", sm: "150px", xs: "100px" },
        height: { lg: "200px", sm: "150px", xs: "100px" },
        borderRadius: "0 0 30px 30px",
        cursor: "pointer",
        gap: "30px",
      }}
    >
      <ImageListItem
        sx={{
          width: { lg: "75px", sm: "50px", xs: "25px" },
          height: { lg: "75px", sm: "50px", xs: "25px" },
        }}
      >
        <img src={Icon} alt={itemBodyPart} />
      </ImageListItem>
      {itemBodyPart}
    </Stack>
  );
};

BodyPart.propTypes = {
  itemBodyPart: PropTypes.string.isRequired,
  bodyPartSelected: PropTypes.string.isRequired,
  setBodyPartSelected: PropTypes.func.isRequired,
};

export default BodyPart;
