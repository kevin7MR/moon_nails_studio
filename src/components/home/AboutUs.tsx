import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function AboutUs() {
  return (
    <><Box sx={{ backgroundColor: "black" }}>
      <Container>
        <Box
          sx={{
            height: "800px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <Grid width={"50%"}>
            <Typography fontSize={"24px"} color={'white'}>
              <b style={{ fontSize: "48px" }}>¿Buscas la máxima seguridad y calidad para tus uñas? </b>
              <br />
              En Moon Nails Studio encontrarás un espacio pensado para tu bienestar, donde la tranquilidad, la calidad y la seguridad son nuestra prioridad.
              Trabajamos con estrictos protocolos de higiene y desinfección para ofrecerte un servicio profesional y confiable.

              Si buscas un lugar donde lucir uñas, pestañas y cejas increíbles mientras te relajas y disfrutas de tu tiempo, Moon Nails Studio es el lugar perfecto para ti.
            </Typography>
          </Grid>
          <Grid
            component="img"
            src="/img/aboutus.jpg"
            alt="Logo"
            sx={{ width: 380, height: "auto", borderRadius: "60px" }} />
        </Box>
      </Container>
    </Box><Box
        component={Paper}
        elevation={5}
        sx={{
          height: '399px',
          backgroundImage: "url('/img/dizza.png')",
          backgroundSize: 'contain',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} /></>
  );
}

export default AboutUs;
