import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.scss";

function AboutUs() {
  return (
    <>
      <Box className={styles.aboutUsSection}>
        <Container>
          <Box className={styles.mainContainer}>
            <Grid className={styles.textGrid}>
              <Typography className={styles.description}>
                <b>¿Buscas la máxima seguridad y calidad para tus uñas? </b>
                En Moon Nails Studio encontrarás un espacio pensado para tu bienestar, donde la tranquilidad, la calidad y la seguridad son nuestra prioridad.
                Trabajamos con estrictos protocolos de higiene y desinfección para ofrecerte un servicio profesional y confiable.
                <br /><br />
                Si buscas un lugar donde lucir uñas, pestañas y cejas increíbles mientras te relajas y disfrutas de tu tiempo, Moon Nails Studio es el lugar perfecto para ti.
              </Typography>
            </Grid>
            <Box
              component="img"
              src="/img/aboutus.jpg"
              alt="About Us"
              className={styles.aboutUsImage}
            />
          </Box>
        </Container>
      </Box>
      <Box
        component={Paper}
        elevation={5}
        className={styles.decorativeSection}
        sx={{
          display: { xs: "none", sm: "none", md: "block" }
        }}
      />
    </>
  );
}

export default AboutUs;
