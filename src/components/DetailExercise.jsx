import PropTypes from "prop-types";

const DetailExercise = ({ exerciseDetail }) => {
  return <div>{exerciseDetail.name}</div>;
};

DetailExercise.propTypes = {
  exerciseDetail: PropTypes.object.isRequired,
};

export default DetailExercise;
