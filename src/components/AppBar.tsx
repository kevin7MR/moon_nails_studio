"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface ElevationScrollProps {
  children: React.ReactElement<any>;
}



function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      background: trigger ? "rgba(0, 0, 0, 0.82)" : "transparent",
      transition: "background 0.3s ease",
      color: "#fff",
    },
  });
}

interface ElevateAppBarProps {
  children: React.ReactNode;
}

export default function ElevateAppBar({ children }: ElevateAppBarProps) {
  const labels: string[] = ["Inicio", "Nosotros", "Servicios", "Galeria",];
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                alignContent: "center",
                height: "60px",
              }}
            >
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img
                  src={trigger ? "/img/logoWhite.png" : "/img/logoBlack.png"}
                  alt="logo"
                  width={"150px"}
                  height={"150px"}
                  style={{ marginTop: "16px" }}
                />
                <Divider orientation="vertical" sx={{ color: "black" }} />
                <Grid
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-around"}
                >
                  {labels.map((value, index) => (
                    <Button
                      sx={{
                        color: trigger ? "white" : "black",
                        textShadow: trigger ? "1px 1px 4px black" : "none",
                        fontSize: "16px",
                        textTransform: "capitalize",
                      }}
                      key={index}
                    >
                      {value}
                    </Button>
                  ))}
                </Grid>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <WhatsAppIcon sx={{ color: trigger ? "white" : "black", fontSize: "24px" }} />
                <FacebookIcon sx={{ color: trigger ? "white" : "black", fontSize: "24px" }} />
                <InstagramIcon sx={{ color: trigger ? "white" : "black", fontSize: "24px" }} />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>{children}</Box>
    </>
  );
}
