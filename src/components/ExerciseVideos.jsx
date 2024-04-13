import { Box, ImageListItem, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import YoutubeVideosNotFound from "../assets/logos/youtubeNotFound.jpeg";
import EmbedYoutubeVideos from "./partials/EmbedYoutubeVideos";

const ExerciseVideos = ({ error, idVideosToSearch }) => {
  return (
    <Stack flexDirection="column" m={{ lg: "140px 40px", xs: "20px 0px" }}>
      <Typography variant="h4" mb="33px">
        Videos de <span style={{ color: "#ff2526" }}>YouTube</span> que te
        podrían ayudar
      </Typography>
      {error ? (
        <Stack
          width="100%"
          height="400px"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Typography
            fontSize={{ lg: "2rem", xs: "1.2rem" }}
            textAlign="center"
          >
            {error}
          </Typography>
          <ImageListItem sx={{ width: "300px" }}>
            <img
              src={YoutubeVideosNotFound}
              alt="Youtube logo not found"
              loading="lazy"
            />
          </ImageListItem>
        </Stack>
      ) : (
        <Box
          display="flex"
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {idVideosToSearch.map((videoObject) => {
            /*
              The structure of video is
              {
                videoId: "CywhB_MNJ6o",
                thumbnails: "https://i.ytimg.com/vi/CywhB_MNJ6o/mqdefault.jpg",
                title: "The Worst Triceps Mistake Everyone Is Making",
                channelTitle: "Jeff Nippard",
              },
            */
            return (
              <>
                <EmbedYoutubeVideos
                  videoId={videoObject.videoId}
                  key={videoObject.videoId}
                  title={videoObject.title}
                  thumbnails={videoObject.thumbnails}
                  creator={videoObject.channelTitle}
                />
              </>
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

ExerciseVideos.propTypes = {
  error: PropTypes.string.isRequired,
  idVideosToSearch: PropTypes.array.isRequired,
};

export default ExerciseVideos;
