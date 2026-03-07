import { Box, Container, Typography, Grid } from "@mui/material";
import { imgA } from "../../../public/img/Gallery/index"
import CollectionsIcon from "@mui/icons-material/Collections";
import type { StaticImageData } from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


function Gallery() {
  const itemData: (string | StaticImageData)[] = [imgA];
  return (
    <Box sx={{ height: '800px', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid display={"flex"} justifyContent={"space-between"} pb={'24px'}>
          <Typography fontSize={"24px"}>
            <b>Galeria</b>
          </Typography>
          <CollectionsIcon sx={{ fontSize: 28 }} />
        </Grid>
        <Box sx={{ width: '100%', height: 650, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
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
