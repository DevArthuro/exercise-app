import { Modal } from "@mui/material";
import PropTypes from "prop-types";

const ModalReproduceVideo = ({ showModal, setShowModal, videoId }) => {
  return (
    <Modal
      keepMounted
      open={showModal}
      onClose={() => {
        setShowModal(!showModal);
      }}
    >
      {/* This condition is top stop reproduce video */}
      {/* FIX: change or refactor this part use useRef and modify content iframe */}
      {!showModal ? (
        <></>
      ) : (
        <iframe
          //   ref={youtubeVideoRef} save data all iframe
          width={screen.width}
          height={screen.height > 500 ? "500px" : "100%"}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Vercel cometió un error..."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      )}
    </Modal>
  );
};

ModalReproduceVideo.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default ModalReproduceVideo;
