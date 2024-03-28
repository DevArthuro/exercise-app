import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import MainLogo from "../assets/logos/arm.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
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
        <img
          src={MainLogo}
          alt="logo"
          style={{
            width: "100px",
            height: "80px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="1.8rem" alignItems="flex-end">
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
          href="#exersices"
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
