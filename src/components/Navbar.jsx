import { Link } from "react-router-dom";
import { Stack, ImageListItem } from "@mui/material";
import MainLogo from "../assets/logos/arm.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: {
          sm: "122px",
          xs: "25px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <ImageListItem
          sx={{
            width: { lg: "120px", xs: "70px" },
            height: { lg: "90px", xs: "60px" },
          }}
        >
          <img src={MainLogo} alt="logo" />
        </ImageListItem>
      </Link>
      <Stack
        direction="row"
        gap="25px"
        fontSize={{ lg: "2rem", sx: "1.4rem" }}
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Inicio
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Ejercicios
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
