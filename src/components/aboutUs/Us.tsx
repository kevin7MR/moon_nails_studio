import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

function Us() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                overflow: "hidden",
                backgroundImage: "linear-gradient(to right, #eab8fe, #edcaa8)",
                display: "flex",
                flexDirection: "column",
                pt: { xs: 12, md: 16 }, // Para que el AppBar no tape el contenido
                pb: { xs: 8, md: 12 },
                marginTop: "-64px",
            }}
        >
            <Container>
                <Grid
                    container
                    spacing={{ xs: 4, md: 8 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
                        <Box
                            component="img"
                            src="img/servicemenu/aboutUs.jpg"
                            alt="aboutUs"
                            sx={{
                                width: { xs: '100%', sm: '400px', md: '100%' },
                                maxWidth: '400px',
                                height: { xs: 'auto', sm: '500px', md: 'auto' },
                                maxHeight: '500px',
                                objectFit: 'cover',
                                borderRadius: 4,
                                boxShadow: 3
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography
                            sx={{
                                fontSize: { xs: 16, sm: 18, md: 20 },
                                fontWeight: "400",
                                textAlign: { xs: "center", md: "left" },
                                lineHeight: 1.6
                            }}
                        >
                            En <b>Moon Nail Studio</b> creemos que la belleza está en los detalles. Somos un espacio dedicado a resaltar tu estilo y confianza a través del cuidado profesional de uñas, manos, pies y cejas. Nuestro objetivo es que cada cliente viva una experiencia de relajación, calidad y atención personalizada desde el momento en que llega.
                            <br /><br />
                            Trabajamos con productos de alta calidad y técnicas modernas para ofrecer resultados duraderos y un acabado impecable. Cada servicio está pensado para que te sientas cómoda, consentida y salgas con un look que refleje tu personalidad.
                            <br /><br />
                            Más que un estudio de belleza, queremos ser tu lugar favorito para desconectarte del estrés y dedicarte un momento solo para ti. En Moon Nail Studio cada detalle cuenta, porque tu belleza merece lo mejor.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default Us