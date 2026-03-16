'use client'
import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { Appointment } from "../services/Appointment";
import styles from "./style.module.scss";

function Banner() {
  return (
    <>
      <Box
        className={styles.bannerContainer}
        component={Paper}
        elevation={5}
      >
        <Container className={styles.contentContainer}>

          <Stack display={'flex'} direction={"row"} justifyContent={'space-between'}>
            <Grid className={styles.imageGrid}>
              <img
                src="/img/banner.png"
                alt="banner" />
            </Grid>
            <Grid className={styles.textGrid}>
              <Box className={styles.logoBox}>
                <img src="/img/logoWhite.png" alt="logo" />
              </Box>
              <Typography
                align="center"
                className={styles.title}
              >
                Estetica de uñas en el corazon de Guadalajara.
              </Typography>

              <Appointment service="Manicura" />

            </Grid>

          </Stack>
          <Box className={styles.imageGridMobile}>
            <img src="/img/banner.png" alt="banner" />
          </Box>

        </Container>
      </Box>

    </>
  );
}

export default Banner;
