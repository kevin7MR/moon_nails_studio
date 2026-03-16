"use client"
import { Box, Container, Typography, Grid } from "@mui/material";
import { imgn, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from "../../../public/img/Gallery/index"
import CollectionsIcon from "@mui/icons-material/Collections";
import type { StaticImageData } from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


function Gallery() {
  const itemData: (string | StaticImageData)[] = [imgn, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  let cols = 3;
  if (isSmallScreen) {
    cols = 1;
  } else if (isMediumScreen) {
    cols = 2;
  }
  return (
    <Box
      sx={{
        minHeight: "900px",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.22), #eab8fe), url(/img/gallerybg.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid pb={"24px"} alignItems={'center'}>
          <Typography fontSize={"24px"} color={"white"} sx={{
            textShadow: "1px 1px 4px grey", fontFamily: "var(--font-cinzel)",
            fontWeight: 800, color: "#000000"
          }}>
            <strong>Galeria</strong>
          </Typography>
        </Grid>
        <Box
          sx={{
            width: "100%",
            maxHeight: 650,
            overflowY: "scroll",
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#00000080',
              borderRadius: '4px',
            },
          }}
        >
          <ImageList variant="masonry" cols={cols} gap={8}>
            {itemData.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  srcSet={`${(item as StaticImageData).src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${(item as StaticImageData).src}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}

          </ImageList>
        </Box>
      </Container>
    </Box>
  );
}

export default Gallery;

