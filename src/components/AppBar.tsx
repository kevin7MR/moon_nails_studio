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
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import React from "react";
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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
  const labels = [
    { label: "Inicio", route: "/" },
    { label: "Nosotros", route: "/nosotros" },
    { label: "Servicios", route: "/servicios" },
    { label: "Galeria", route: "/galeria" },
  ];

  const services = [
    { label: "Manicura", route: "/servicios/manicura" },
    { label: "Pedicura", route: "/servicios/pedicura" },
    { label: "Uñas", route: "/servicios/uñas" },
    { label: "Cejas", route: "/servicios/cejas" },
  ];

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

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
              <Stack direction={"row"} spacing={2} alignItems={"center"} sx={{ flexGrow: 1 }}>
                <Box display={{ xs: 'flex', md: 'none' }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ color: trigger ? "white" : "black" }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <img
                  src={trigger ? "/img/logoWhite.png" : "/img/logoBlack.png"}
                  alt="logo"
                  width={"150px"}
                  height={"150px"}
                  style={{ marginTop: "16px" }}
                />
                <Divider orientation="vertical" sx={{ color: "black", display: { xs: 'none', md: 'block' } }} />
                <Grid
                  display={{ xs: 'none', md: 'flex' }}
                  justifyContent={"space-around"}
                >
                  {labels.map((item, index) => {
                    const isService = item.label === "Servicios";
                    return (
                      <Button
                        component={isService ? "button" : Link}
                        href={isService ? undefined : item.route}
                        onClick={isService ? handleClick : undefined}
                        sx={{
                          color: trigger ? "white" : "black",
                          textShadow: trigger ? "1px 1px 4px black" : "none",
                          fontSize: "16px",
                          textTransform: "capitalize",
                          display: "flex",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        {item.label}
                        {isService && (open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                      </Button>
                    );
                  })}
                </Grid>
              </Stack>
              <Stack direction={"row"} spacing={0} display={{ xs: 'none', md: 'flex' }}>
                <IconButton href="https://wa.me/3329303896" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon sx={{ color: trigger ? "white" : "black", fontSize: "24px" }} />
                </IconButton>
                <IconButton href="https://www.facebook.com/61560774849146" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon sx={{ color: trigger ? "white" : "black", fontSize: "24px" }} />
                </IconButton>
                <IconButton href="https://www.instagram.com/moonn_ailstudio/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon sx={{ color: trigger ? "white" : "black", fontSize: "24px" }} />
                </IconButton>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>{children}</Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, pt: 2 }}
          role="presentation"
        >
          <img
            src="/img/logoBlack.png"
            alt="logo"
            width="100px"
            style={{ display: 'block', margin: '0 auto 16px' }}
          />
          <Divider />
          <List>
            {labels.map((item, index) => {
              const isService = item.label === "Servicios";

              if (isService) {
                return (
                  <React.Fragment key={index}>
                    <ListItemButton onClick={handleServicesClick}>
                      <ListItemText primary={item.label} />
                      {servicesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {services.map((subItem, subIndex) => (
                          <ListItemButton
                            key={subIndex}
                            sx={{ pl: 4 }}
                            component={Link}
                            href={subItem.route}
                            onClick={toggleDrawer(false)}
                          >
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }

              return (
                <ListItemButton
                  key={index}
                  component={Link}
                  href={item.route}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" justifyContent="center" gap={1} mt={2} mb={2}>
            <IconButton href="https://wa.me/3329303896" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon sx={{ color: "black", fontSize: "32px", cursor: "pointer" }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/61560774849146" target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ color: "black", fontSize: "32px", cursor: "pointer" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/moonn_ailstudio/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: "black", fontSize: "32px", cursor: "pointer" }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundImage: "linear-gradient(to right, #eab8fe, #edcaa8)",
            color: 'white',
            width: '120px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8px',
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 'auto',
              left: '50%',
              width: 10,
              height: 10,
              bgcolor: '#eab8fe',
              transform: "translate(-50%, -50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {services.map(({ label, route }) => (
          <MenuItem
            key={label}
            onClick={handleClose}
            component={Link}
            href={route}
            sx={{ color: 'white', width: '100%', justifyContent: 'center', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
