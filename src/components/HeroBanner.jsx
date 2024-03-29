import { Box, Stack, Typography, Button } from "@mui/material";
import ImageBanner from "../assets/images/banner-hero-image.png";

const HeroBanner = () => {
  return (
    <Stack
      direction={{ lg: "row", xs: "column" }}
      position="relative"
      zIndex={5}
      sx={{
        mb: { lg: "100px", xs: "20px" },
      }}
      justifyContent="space-around"
    >
      <Typography
        sx={{
          top: { lg: "95%" },
          opacity: "0.2",
        }}
        textAlign="center"
        display={{ lg: "block", xs: "none" }}
        fontWeight={600}
        color="#FF2625"
        position="absolute"
        zIndex={1}
        fontSize="100px"
        width="100%"
      >
        Práctico y al grano
      </Typography>
      <Box
        sx={{
          mt: { lg: "90px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="2rem">
          El club del cuidado físico
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: "44px", xs: "35px" },
          }}
        >
          Tu salud es nuestra prioridad
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>
          Los ejercicios más completos que verás
        </Typography>
        <Button
          variant="contained"
          href="#exercises"
          color="error"
          sx={{ background: "#FF2625" }}
        >
          Ver Ejercicios
        </Button>
      </Box>
      <Box display={{ lg: "block", xs: "none" }}>
        <img
          src={ImageBanner}
          alt="banner"
          className="hero-banner"
          width={800}
          height={500}
        />
      </Box>
    </Stack>
  );
};

export default HeroBanner;
