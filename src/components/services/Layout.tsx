"use client";
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { manicuremain, manicure, pedicure, mainpedicure, eyebrows, lamination, nailsmain, nails2 } from "../../../public/img/servicemenu/zindex";
import { Appointment } from "../home/services/Appointment";
import { usePathname } from "next/navigation";

const nails = [
    {
        title: "Uñas",
        subTitle: "Luce unas manos hermosas y elegantes con nuestros servicios profesionales de uñas.",
        text1: "En Moon Nail Studio cuidamos cada detalle para que tus uñas luzcan perfectas, utilizando productos de calidad y técnicas modernas que garantizan duración, brillo y un acabado impecable.",
        text2: "Ofrecemos desde gelish, uñas acrílicas y baños de acrílico, hasta retoques y spa para manos y pies. Ya sea que busques un estilo natural, elegante o algo más creativo, nuestro objetivo es que salgas con uñas que resalten tu estilo y personalidad.",
        text3: "Relájate, consiéntete y deja tus uñas en manos de profesionales. ¡Agenda tu cita y presume unas uñas increíbles!",
        img: nailsmain,
        subImg: nails2,
        items: [
            { name: "Gelish hands solid color", price: 100 },
            { name: "Rubber solid color", price: 150 },
            { name: "Acrylic nails", price: 300, priceFrom: true },
            { name: "Acrylic bath", price: 200, priceFrom: true },
            { name: "Acrylic retouch solid color", price: 250 },
            { name: "Acrylic removal", price: 100 },
        ],
    }
];

const pedicura = [
    {
        title: "Pedicura",
        subTitle: "Dale a tus pies el descanso y cuidado que se merecen con nuestro Pedi Spa",
        text1: "Este servicio incluye limpieza profunda, corte y forma de uñas, cuidado de cutículas, eliminación de durezas y una relajante exfoliación que dejará tus pies suaves, frescos y renovados.",
        text2: "En Moon Nail Studio combinamos técnicas profesionales con productos de calidad para brindarte una experiencia relajante mientras tus pies lucen saludables y hermosos.",
        text3: "Relájate, consiéntete y deja tus pies en manos de profesionales. ¡Agenda tu cita y presume unas uñas increíbles!",
        img: mainpedicure,
        subImg: pedicure,
        items: [
            { name: "Gelish feet solid color", price: 100 },
            { name: "Gelish feet french", price: 150 },
            { name: "Acrylic toes", price: 220 },
            { name: "Pedi spa", price: 380 },
        ],
    }
];

const manicura = [
    {
        title: "Manicura",
        subTitle: "Consiente tus manos con nuestro servicio profesional de manicure.",
        text1: "Incluye limpieza, corte y forma de uñas, cuidado de cutículas y un acabado impecable que dejará tus manos suaves, limpias y elegantes.",
        text2: "En Moon Nail Studio utilizamos productos de calidad y técnicas profesionales para que tus uñas luzcan hermosas y saludables. Es el servicio perfecto para mantener tus manos siempre cuidadas y listas para cualquier ocasión.",
        text3: "Relájate, consiéntete y deja tus manos en manos de profesionales. ¡Agenda tu cita y presume unas uñas increíbles!",
        img: manicuremain,
        subImg: manicure,
        items: [
            { name: "Manicura", price: 280 },
        ],
    }
];

const cejas = [
    {
        title: "Cejas",
        subTitle: "Consiente tus cejas con nuestro servicio profesional de cejas.",
        text1: "Incluye limpieza, corte y forma de cejas, cuidado de cutículas y un acabado impecable que dejará tus cejas suaves, limpias y elegantes.",
        text2: "En Moon Nail Studio utilizamos productos de calidad y técnicas profesionales para que tus cejas luzcan hermosas y saludables. Es el servicio perfecto para mantener tus cejas siempre cuidadas y listas para cualquier ocasión.",
        text3: "Relájate, consiéntete y deja tus cejas en manos de profesionales. ¡Agenda tu cita y presume unas uñas increíbles!",
        img: eyebrows,
        subImg: lamination,
        items: [
            { name: "Eyebrow lamination", price: 180 },
        ],
    }
];

const servicesMap: Record<string, any[]> = {
    "/servicios/manicura": manicura,
    "/servicios/pedicura": pedicura,
    "/servicios/cejas": cejas,
    "/servicios/uñas": nails
};

function Layout() {
    const pathname = usePathname();
    const decodedPathname = decodeURIComponent(pathname);
    const currentServiceData = servicesMap[decodedPathname] || [];

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
                {currentServiceData.map((service, index) => (
                    <Box key={index} sx={{ mb: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "var(--font-cinzel)",
                                textAlign: "center",
                                mb: { xs: 4, md: 6 },
                                fontSize: { xs: "36px", md: "52px" }
                            }}
                        >
                            {service.title}
                        </Typography>

                        {/* Primera sección - Imagen a la izquierda, Texto a la derecha en Desktop */}
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={{ xs: 4, md: 6 }}
                            alignItems="center"
                            justifyContent="space-between"
                            mb={6}
                        >
                            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
                                <img
                                    src={service.img.src || service.img}
                                    alt={service.title}
                                    style={{
                                        width: "100%",
                                        maxWidth: "500px",
                                        height: "600px",
                                        borderRadius: "16px",
                                        objectFit: "cover",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                                    }}
                                />
                            </Box>
                            <Grid display={"flex"} flexDirection={"column"} gap={3} sx={{ flex: 1 }}>
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-cinzel)",
                                        fontWeight: 800,
                                        color: "#000000",
                                        fontSize: { xs: "24px", md: "30px" },
                                        textAlign: { xs: "center", md: "left" },
                                        lineHeight: 1.3
                                    }}
                                >
                                    {service.subTitle}
                                </Typography>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" }, fontSize: { xs: "18px", md: "24px" }, color: "rgba(0,0,0,0.8)" }}>
                                    {service.text1}
                                </Typography>
                            </Grid>
                        </Stack>

                        {/* Segunda sección - Texto a la izquierda, Imagen a la derecha en Desktop */}
                        <Stack
                            direction={{ xs: "column-reverse", md: "row" }}
                            spacing={{ xs: 4, md: 6 }}
                            alignItems="center"
                            justifyContent="space-between"
                            mb={8}
                        >
                            <Grid display={"flex"} flexDirection={"column"} gap={3} sx={{ flex: 1 }}>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" }, fontSize: { xs: "18px", md: "24px" }, color: "rgba(0,0,0,0.8)" }}>
                                    {service.text2}
                                </Typography>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" }, fontSize: { xs: "18px", md: "24px" }, fontWeight: 600, color: "rgba(0,0,0,0.9)" }}>
                                    {service.text3}
                                </Typography>
                                <Appointment />
                            </Grid>
                            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
                                <img
                                    src={service.subImg.src || service.subImg}
                                    alt={service.title}
                                    style={{
                                        width: "100%",
                                        maxWidth: "500px",
                                        height: "600px",
                                        borderRadius: "16px",
                                        objectFit: "cover",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                                    }}
                                />
                            </Box>
                        </Stack>

                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "var(--font-cinzel)",
                                textAlign: "center",
                                mb: 4,
                                fontWeight: 700
                            }}
                        >
                            Lista de Precios
                        </Typography>

                        {/* Menú de precios en formato de tarjetas responsivas */}
                        <Grid container spacing={2} justifyContent="center" mb={6}>
                            {service.items && service.items.map((item: any, idx: number) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                    <Box
                                        sx={{
                                            bgcolor: "rgba(255, 255, 255, 0.5)",
                                            backdropFilter: "blur(4px)",
                                            p: 3,
                                            borderRadius: 3,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            height: "100%",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                            transition: "transform 0.2s",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                bgcolor: "rgba(255, 255, 255, 0.7)",
                                            }
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 600, fontSize: "18px", textAlign: "center", mb: 1 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 800, color: "#111", fontSize: "20px" }}>
                                            ${item.price}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}

                <Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Layout