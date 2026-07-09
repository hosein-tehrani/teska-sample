import { createTheme, type PaletteMode } from "@mui/material";

const BORDER_RADIUS = 4;
import type { ThemeMode, Language } from "@/store/appStore";

export const getTheme = (mode: PaletteMode, language: Language) =>
  createTheme({
    direction: language === "fa" ? "rtl" : "ltr",
    palette: {
      mode,

      ...(mode === "light"
        ? {
            primary: {
              main: "#7367F0",
              light: "#8E83F4",
              dark: "#5E50EE",
            },

            secondary: {
              main: "#A8AAAE",
            },

            success: {
              main: "#28C76F",
            },

            warning: {
              main: "#FF9F43",
            },

            error: {
              main: "#EA5455",
            },

            info: {
              main: "#00CFE8",
            },

            background: {
              default: "#F5F5F9",
              paper: "#FFFFFF",
            },

            text: {
              primary: "#444050",
              secondary: "#6D6B77",
            },

            divider: "#E6E6EF",
          }
        : {
            primary: {
              main: "#7367F0",
              light: "#8E83F4",
              dark: "#5E50EE",
            },

            secondary: {
              main: "#A8AAAE",
            },

            success: {
              main: "#28C76F",
            },

            warning: {
              main: "#FF9F43",
            },

            error: {
              main: "#EA5455",
            },

            info: {
              main: "#00CFE8",
            },

            background: {
              default: "#25293C",
              paper: "#2F3349",
            },

            text: {
              primary: "#D7D8E4",
              secondary: "#A8AAB8",
            },

            divider: "#44485F",
          }),
    },

    shape: {
      borderRadius: BORDER_RADIUS,
    },

    typography: {
      fontFamily:
        language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif",

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 700,
      },

      h6: {
        fontWeight: 600,
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color .25s,color .25s",
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS,
            boxShadow:
              mode === "light"
                ? "0 2px 12px rgba(47,43,61,.08)"
                : "0 2px 12px rgba(0,0,0,.30)",
          },
        },
      },

      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRadius: 0,
            borderRight: "none",
            backgroundImage: "none",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            boxShadow: "none",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS,
            textTransform: "none",
            boxShadow: "none",
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS - 2,
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS - 2,
          },
        },
      },

      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: BORDER_RADIUS,
          },
        },
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: BORDER_RADIUS + 2,
          },
        },
      },

      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            borderRadius: BORDER_RADIUS,
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 8,
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: BORDER_RADIUS,
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            opacity: 0.6,
          },
        },
      },
    },
  });
