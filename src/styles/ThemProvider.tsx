"use client";
import { createTheme } from "@mui/material";
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primaryButton: true;
    secondaryButton: true;
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: "#aa833c",
      contrastText: "rgba(255, 253, 253, 1)",
    },
    secondary: {
      main: "#000000ff",
      contrastText: "#ffffffff",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primaryButton" },
          style: {
            alignItems: "center",
            borderRadius: "60px",
            fontWeight: "bold",
            fontSize: "14px",
            background: 'linear-gradient(45deg, #ff66ff 30%, #ffccff 90%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #ff33ff 30%, #ffbbff 90%)',
            },

            "&:disabled": {
              backgroundColor: "#aa833c",
              color: "#ffffffff",
              opacity: 0.7,
            },
          },
        },
        {
          props: { variant: "secondaryButton" },
          style: {
            borderRadius: "30px",
            backgroundColor: 'black',
            color: "#ffffffff",
            "&:disabled": {
              color: "black",
              opacity: 0.5,
            },
          },
        },
      ],
    },
  },
});
