'use client'
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Appointment } from "./services/Appointment";

function Banner() {

  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpen = (serviceName: string) => {
    setSelectedService(serviceName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        component={Paper}
        elevation={5}
        sx={{
          width: "100%",
          height: "800px",
          backgroundImage: "linear-gradient(to right, #eab8fe, #edcaa8)",
          mt: -8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Grid mb={-15}>
            <img
              src="/img/banner.png"
              width={600}
              height={800}
              alt="" />
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: "600px", height: "300px", mt: -10 }}>
              <img src="/img/logo.png" alt="logo" width={"100%"} height={"160%"} />
            </Box>
            <Typography
              align="center"
              sx={{
                color: "white",
                textShadow: "1px 1px 4px grey",
                fontSize: "50px",
                fontStyle: "italic",
                p: "16px 0 ",
              }}
            >
              Estetica de uñas en el corazon de Guadalajara.
            </Typography>

            <Button
              variant='primaryButton'
              onClick={() => handleOpen("Manicura")}
              sx={{
                borderRadius: "60px",
                fontSize: "18px",
              }}
            >
              Cita online
            </Button>
          </Grid>
        </Container>
        <Appointment
          open={open}
          handleClose={handleClose}
          service={selectedService}
        />
      </Box>
    </>
  );
}

export default Banner;
