import { Box, ImageListItem, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import ModalReproduceVideo from "./ModalReproduceYoutubeVideo";

const EmbedYoutubeVideos = ({ videoId, title, thumbnails, creator }) => {
  const [modal, setModal] = useState(false);
  return (
    <Box>
      <ModalReproduceVideo
        showModal={modal}
        setShowModal={setModal}
        videoId={videoId}
      />
      <Box
        onClick={() => {
          setModal(true);
        }}
      >
        <ImageListItem sx={{ width: "300px" }}>
          <img src={thumbnails} alt={title} loading="lazy" />
        </ImageListItem>
        <Typography
          width="300px"
          fontSize="1.2rem"
          textAlign="left"
          marginTop="20px"
          fontWeight="bold"
          overflow="scroll"
        >
          {title}
        </Typography>
        <Typography fontSize="0.8rem" textAlign="left">
          {creator}
        </Typography>
      </Box>
    </Box>
  );
};

EmbedYoutubeVideos.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  thumbnails: PropTypes.string.isRequired,
};

export default EmbedYoutubeVideos;
