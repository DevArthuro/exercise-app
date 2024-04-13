import { Box, ImageListItem, Typography } from "@mui/material";
import PropTypes from "prop-types";

const EmbedYoutubeVideos = ({ videoId, title, thumbnails, creator }) => {
  return (
    <Box>
      {/* <iframe
        width="350"
        height="180"
        allowFullScreen
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Lo que me hubiera gustado saber antes de programar | Entrevista con Rita Codes"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      /> */}
      <ImageListItem>
        <img src={thumbnails} alt={title} loading="lazy" />
      </ImageListItem>
      <Typography
        fontSize="1.2rem"
        textAlign="left"
        marginTop="20px"
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography fontSize="0.8rem" textAlign="left">
        {creator}
      </Typography>
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
