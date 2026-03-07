'use client'
import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress,
    Typography,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

export const AVAILABLE_SERVICES = [
    { value: "manicura", label: "Manicura" },
    { value: "pedicura", label: "Pedicura" },
    { value: "cejas y pestañas", label: "Cejas & Pestañas" },
    { value: "maquillaje", label: "Maquillaje" },
    { value: "pircing nariz", label: "Pircing Nariz" },
    { value: "pircing oreja", label: "Pircing Oreja" },
    { value: "pircing ombligo", label: "Pircing Ombligo" },
];

interface AppointmentProps {
    open: boolean;
    handleClose: () => void;
    service?: string;
}

export function Appointment({ open, handleClose, service }: AppointmentProps) {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                Agendar Cita
            </DialogTitle>
            <DialogContent>
                <AppointmentForm service={service} onSuccess={handleClose} onCancel={handleClose} />
            </DialogContent>
        </Dialog>
    );
}

interface AppointmentFormProps {
    service?: string;
    onSuccess?: () => void;
    onCancel?: () => void;
}

export function AppointmentForm({ service, onSuccess, onCancel }: AppointmentFormProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        services: "",
        schedule: dayjs() as Dayjs | null,
    });

    useEffect(() => {
        if (service) {
            setFormData((prev) => ({ ...prev, services: service.toLowerCase() }));
        }
    }, [service]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (newValue: Dayjs | null) => {
        setFormData((prev) => ({ ...prev, schedule: newValue }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formattedDate = formData.schedule ? formData.schedule.format('DD/MM/YYYY HH:mm') : 'No especificada';

        // Construct WhatsApp message
        const message = `*Nueva Cita - Moon Nails Studio*%0A%0A` +
            `*Nombre:* ${formData.first_name} ${formData.last_name}%0A` +
            `*Correo:* ${formData.email}%0A` +
            `*Teléfono:* ${formData.phone_number}%0A` +
            `*Servicio:* ${formData.services}%0A` +
            `*Fecha y Hora:* ${formattedDate}`;

        const whatsappNumber = "523329619210";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Simulate loading for better UX and redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setLoading(false);
            if (onSuccess) onSuccess();
        }, 800);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="Nombre"
                        name="first_name"
                        required
                        fullWidth
                        value={formData.first_name}
                        onChange={handleChange}
                        margin="dense"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="Apellido"
                        name="last_name"
                        required
                        fullWidth
                        value={formData.last_name}
                        onChange={handleChange}
                        margin="dense"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        required
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        margin="dense"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="Número telefónico"
                        name="phone_number"
                        required
                        fullWidth
                        value={formData.phone_number}
                        onChange={handleChange}
                        margin="dense"
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth required margin="dense">
                        <InputLabel id="service-select-label">Servicio</InputLabel>
                        <Select
                            labelId="service-select-label"
                            id="service-select"
                            name="services"
                            value={formData.services}
                            label="Servicio"
                            onChange={handleChange}
                        >
                            {AVAILABLE_SERVICES.map((service) => (
                                <MenuItem key={service.value} value={service.value}>
                                    {service.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Fecha y Hora"
                            value={formData.schedule}
                            onChange={handleDateChange}
                            sx={{ width: '100%', mt: 2 }}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    required: true,
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
                        {onCancel && (
                            <Button
                                variant="outlined"
                                onClick={onCancel}
                                sx={{ borderRadius: "60px" }}
                            >
                                Cancelar
                            </Button>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                                borderRadius: "60px",
                                background: 'linear-gradient(45deg, #ff66ff 30%, #ffccff 90%)',
                                color: 'white',
                                fontWeight: 'bold',
                                minWidth: '150px'
                            }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Enviar a WhatsApp"}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
