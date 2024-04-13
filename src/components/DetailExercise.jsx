import PropTypes from "prop-types";
import { Typography, Stack, Button, ImageListItem } from "@mui/material";

import BodyPartImage from "../assets/Icons/bodyPart.png";
import EquipmentImage from "../assets/Icons/equipment.png";
import TargetImage from "../assets/Icons/target.png";

const DetailExercise = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

  return (
    <Stack
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <ImageListItem sx={{ width: { lg: "50%", ms: "100%" } }}>
        <img src={gifUrl} alt={name} loading="lazy" />
      </ImageListItem>
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2">{name}</Typography>
        <Typography>
          <Typography variant="h4">Instrucciones</Typography>
          {Array.isArray(instructions) &&
            instructions.map((item, index) => (
              <Typography key={index}>
                {index + 1}. {item}
              </Typography>
            ))}
        </Typography>

        {extraDetails.map((item, index) => (
          <Stack flexDirection="row" key={index} gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <ImageListItem sx={{ width: "50px", height: "50px" }}>
                <img src={item.icon} alt={item.name} />
              </ImageListItem>
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

DetailExercise.propTypes = {
  exerciseDetail: PropTypes.object.isRequired,
};

export default DetailExercise;
