// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset, palette, type ColorScale } from "@primeuix/themes";
import Material from "@primeuix/themes/material";
import type { MaterialBaseTokenSections } from "@primeuix/themes/material/base";
import tailwindcss from "@tailwindcss/vite";

const semanticPreset: MaterialBaseTokenSections.Semantic = {
  primary: palette("#191d24") as ColorScale,
  colorScheme: {
    light: {
      surface: palette("#6B7280") as ColorScale,
      formField: {
        borderColor: "#D1D5DB",
        hoverBorderColor: "#D1D5DB",
        focusBorderColor: "#D1D5DB",
      },
    },
  },
  formField: {
    borderRadius: "{border.radius.md}",
  },
};

const primitivePreset: MaterialBaseTokenSections.Primitive = {
  orange: palette("#FF4A40") as ColorScale,
};

const MyPreset = definePreset(Material, {
  semantic: semanticPreset,
  primitive: primitivePreset,
  components: {
    menu: {
      item: {
        focusBackground: "#ffffff",
        icon: { focusColor: "{orange.500}", color: "#838B9E" },
        borderRadius: "6px",
        padding: "12px",
      },
      root: {
        background: "transparent",
        borderColor: "transparent",
      },
    },
    button: {
      root: {
        label: {
          fontWeight: "bold",
        },
      },
      colorScheme: {
        light: {
          outlined: {
            secondary: {
              borderColor: "#E5EAF0",
              color: "{primary.500}",
            },
          },
          text: {
            secondary: {
              color: "{surface.500}",
            },
          },
        },
      },
    },
    inputgroup: {
      addon: {
        padding: "0 0 0 1rem",
        minWidth: "unset",
        borderRadius: "{border.radius.md}",
      },
    },
    togglebutton: {
      colorScheme: {
        light: {
          root: {
            checkedBackground: "{orange.500}",
            checkedColor: "#FFFFFF",
          },
        },
      },
    },
    chip: {
      colorScheme: {
        light: {
          root: {
            paddingY: "0.325rem",
            paddingX: "1rem",
            background: "#EFF3F8",
            color: "#4B5563",
            borderRadius: "1rem",
          },
        },
      },
    },
    tabs: {
      colorScheme: {
        light: {
          activeBar: {
            background: "{orange.500}",
          },
          tablist: {
            borderColor: "#E5E7EB"
          },
          tab: {
            activeColor: "{orange.500}",
            activeBorderColor: "{orange.500}",
            color: "#6B7280",
            borderColor: "#E5E7EB",
            fontWeight: "bold",
            padding: "1.125rem"
          }
        },
      },
    },
    avatar: {
      root: {
        width: "28px",
        height: "28px",
      },
      lg: {
        width: "42px",
        height: "42px",
      },
      xl: {
        width: "56px",
        height: "56px",
      },
      colorScheme: {
        light: {
          root: {
            color: "#4B5563",
            background: "#E5E7EB"
          }
        }
      }
    },
    badge: {
      colorScheme: {
        light: {
          warn: {
            background: "{orange.500}"
          }
        }
      }
    }
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    components: {
      prefix: "P",
    },
    options: {
      theme: {
        preset: MyPreset,
        options: {
          cssLayer: {
            name: "primevue",
            order: "theme, base, primevue",
          },
          darkModeSelector: '.p-dark'
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: true,
  },
  plugins: ['~/plugins/click-outside.client.ts'],
});

