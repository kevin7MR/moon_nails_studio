'use client'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  service1,
  service2,
  service3,
  service4,
} from "../../../../public/img/services/index";
import type { StaticImageData } from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { AppointmentForm } from "./Appointment";


const SERVICES = [
  {
    title: "Uñas",
    img: service3,
    items: [
      { name: "Gelish hands solid color", price: 100 },
      { name: "Rubber solid color", price: 150 },
      { name: "Acrylic nails", price: 300, priceFrom: true },
      { name: "Acrylic bath", price: 200, priceFrom: true },
      { name: "Acrylic retouch solid color", price: 250 },
      { name: "Acrylic removal", price: 100 },
    ],
  },
  {
    title: "Pedicura",
    img: service2,
    items: [
      { name: "Gelish feet solid color", price: 100 },
      { name: "Gelish feet french", price: 150 },
      { name: "Acrylic toes", price: 220 },
      { name: "Pedi spa", price: 380 },
    ],
  },
  {
    title: "Manicura",
    img: service1,
    items: [
      { name: "Manicura", price: 280 },
    ],
  },
  {
    title: "Cejas",
    img: service4,
    items: [
      { name: "Eyebrow lamination", price: 180 },
    ],
  },
];

function Services() {
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
    <Box className={styles['container']}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          fontSize={"50px"}
          color="white"
          sx={{ textShadow: "1px 1px 4px black", pb: "40px", pt: "20px" }}
        >
          <b>Nuestros Servicios</b>
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {SERVICES.map((category, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  borderRadius: "27px",
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.02)' }
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={typeof category.img === "string" ? category.img : (category.img as StaticImageData).src}
                  title={category.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                  <Stack spacing={1}>
                    {category.items.map((item, idx) => (
                      <Box key={idx} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', ml: 1 }}>
                          {item.priceFrom ? `Desde $${item.price}` : `$${item.price}`}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box width={"100%"} display={"flex"} justifyContent={"center"} p={"40px 0"}>
          <Button
            variant={'secondaryButton' as any}
            sx={{
              borderRadius: "60px",
              padding: "10px 40px",
              fontSize: "18px",
            }}
          >
            Agendar Cita
          </Button>
        </Box>

        <AppointmentForm />
      </Container>
    </Box>
  );
}

export default Services;
