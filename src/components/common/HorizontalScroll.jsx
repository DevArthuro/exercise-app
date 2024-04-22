import { Box, Typography, ImageListItem } from "@mui/material";
import PropTypes from "prop-types";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";

import LeftArrowLogo from "../../assets/Icons/arrowLeft.png";
import RightArrowLogo from "../../assets/Icons/arrowRight.png";

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

const HorizontalScroll = ({ children }) => {
  return (
    <Box position="relative" padding="20px" width="100%" height="200px">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {children}
      </ScrollMenu>
    </Box>
  );
};

HorizontalScroll.propTypes = {
  children: PropTypes.any.isRequired,
};

export default HorizontalScroll;
