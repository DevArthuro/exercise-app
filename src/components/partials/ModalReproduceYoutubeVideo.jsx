import { Box, Button, Modal } from "@mui/material";
import PropTypes from "prop-types";

const ModalReproduceVideo = ({ showModal, setShowModal, videoId }) => {
  // This operation is to center the video youtube repect the Viewport height        s
  const viewPortCenterVideoYoutubeMUI = screen.height / 4 / 2;
  const handlerClose = () => {
    setShowModal(!showModal);
  };
  return (
    <Modal
      onClick={handlerClose}
      sx={{
        height: screen.height,
        width: screen.width,
        background: "rgba(0, 0, 0, 0.5)",
      }}
      keepMounted
      open={showModal}
      onClose={handlerClose}
    >
      {/* This condition is top stop reproduce video */}
      {/* FIX: change or refactor this part use useRef and modify content iframe */}
      <>
        <Box width="100%" textAlign="center" position="absolute" m="30px 0px">
          <Button variant="contained" onClick={handlerClose}>
            Cerrar
          </Button>
        </Box>
        {showModal && (
          <iframe
            // Center the iframe, that component is native not have breakpoints
            style={{ padding: `${viewPortCenterVideoYoutubeMUI}px 0px` }}
            //  ref={youtubeVideoRef} save data all iframe
            //  Apply calculate size viewport and include it at video
            width={screen.width}
            height={(screen.height / 4) * 3.25}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Vercel cometió un error..."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        )}
      </>
    </Modal>
  );
};

ModalReproduceVideo.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default ModalReproduceVideo;
