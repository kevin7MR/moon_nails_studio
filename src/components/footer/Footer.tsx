"use client"
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./MapLocation'), { ssr: false });

function Footer() {
  return (
    <>
      <Box
        component={Paper}
        elevation={5}
        sx={{
          height: '520px',
          backgroundImage: "url('/img/footerimg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} />

      <Box
        component={Paper}
        elevation={5}
        sx={{ minHeight: '400px', backgroundImage: "linear-gradient(to right, #eab8fe, #edcaa8)", py: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>


              <img src="/img/logoWhite.png" alt="logo" width={"250px"} height={"250px"} />

              <Stack direction={"column"} spacing={2} mt={-10}>
                <Typography
                  sx={{
                    color: "white",
                    textShadow: "1px 1px 4px black",
                    fontSize: "24px",
                    fontStyle: "italic",
                  }}
                >
                  <b>+52 1 33 2961 9210</b>
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    textShadow: "1px 1px 4px black",
                    fontSize: "24px",
                    fontStyle: "italic",
                  }}
                >
                  <b>email@gmail.com</b>
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    textShadow: "1px 1px 4px black",
                    fontSize: "24px",
                    fontStyle: "italic",
                  }}
                >
                  <b>Av. Juan Manuel 1380, Guadalajara, Jalisco</b>
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <DynamicMap />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ height: '70px', bgcolor: ' #ff66ff', display: 'flex', alignItems: 'center', mb: -20 }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            sx={{
              color: "white",
              textShadow: "1px 1px 4px grey",
              fontSize: "30px",
              fontStyle: "italic",
            }}
          >
            <b>moon nalis studio</b>
          </Typography>
          <Grid>

            <InstagramIcon fontSize='large' sx={{ color: 'white', m: '0 16px' }} />
            <WhatsAppIcon fontSize='large' sx={{ color: 'white' }} />

          </Grid>
        </Container>
      </Box></>
  )
}

export default Footer