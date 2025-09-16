import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // at single place font I am setting, no need to setup at other places, only font weight need to control if required
          fontFamily: 'arial !important',
        },
      },
      variants: [
        {
          props: { variant: "subtitle1" },
          style: {
            fontSize: '14px !important',
            letterSpacing: '-0.05px',
            lineHeight: '25px'
          }
        },
        {
          props: { variant: "link" },
          style: {
            fontWeight: 600,
            fontSize: '14px',
            color: "#005AA9",
            cursor: "pointer",
          }
        },
        {
          props: { variant: "linkUnderlined" },
          style: {
            fontWeight: 600,
            fontSize: '14px',
            color: "#005AA9",
            cursor: "pointer",
            textDecoration: "underline"
          }
        },
        {
          props: { variant: "bold" },
          style: {
            fontWeight: 600,
            fontSize: '14px'
          }
        },
        {
          props: { variant: "heading1" },
          style: {
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '16px',
          }
        },
        {
          props: { variant: "heading2" },
          style: {
            fontWeight: 700,
            fontSize: '18px',
          }
        },
        {
          props: { variant: "fieldLabel" },
          style: {
            fontWeight: 500,
            fontSize: '14px'
          }
        },
        {
          props: { variant: "secondaryFieldLabel" },
          style: {
            fontSize: '13px',
            color: '#707070',
          }
        },
        {
          props: { variant: "fieldHeader" },
          style: {
            fontSize: '14px',
            color: '#333333'
          }
        },
        {
          props: { variant: "fieldValue" },
          style: {
            fontSize: '14px',
            fontWeight: 500,
          }
        },
        {
          props: { variant: "fieldError" },
          style: {
            color: '#D32F2F',
            fontSize: '14px'
          }
        },
        {
          props: { variant: "success" },
          style: {
            fontWeight: 500,
            color: '#133782',
            fontSize: '20px'
          }
        },
        {
          props: { variant: "footerText" },
          style: {
            fontWeight: 400,
            color: '#545454',
            fontSize: '12px'
          }
        }
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '600 !important',
          minWidth: '109px'
        },
      },
      variants: [
        {
          props: { variant: "buttonType2" },
          style: {
            backgroundColor: 'white !important',
            color: 'black !important',
            border: '1px solid #707070 !important',
            '&:hover': {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
            },
            '&.Mui-disabled': {
              border: '0px !important',
              color: 'rgba(0, 0, 0, 0.26) !important',
              backgroundColor: 'rgba(0, 0, 0, 0.12) !important'
            }
          }
        },
        {
          props: { variant: "buttonType2" },
          style: {
            backgroundColor: 'white !important',
            color: 'black !important',
            border: '1px solid #707070 !important',
            '&:hover': {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
            },
            '&.Mui-disabled': {
              border: '0px !important',
              color: 'rgba(0, 0, 0, 0.26) !important',
              backgroundColor: 'rgba(0, 0, 0, 0.12) !important'
            }
          }
        },
        {
          props: { variant: "lightBlue1" },
          style: {
            backgroundColor: '#005AA9 !important',
            color: 'white !important',
            border: '1px solid #707070 !important',
            '&:hover': {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
            },
            '&.Mui-disabled': {
              border: '0px !important',
              color: 'rgba(0, 0, 0, 0.26) !important',
              backgroundColor: 'rgba(0, 0, 0, 0.12) !important'
            }
          }
        },
        {
          props: { variant: "lightBlue2" },
          style: {
            backgroundColor: '#ECF5FF',
            color: '#005AA9',
            border: '1px solid #92ccff !important',
            '&:hover': {
              backgroundColor: '#ECF5FF',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
            },
            '&.Mui-disabled': {
              border: '0px !important',
              color: 'rgba(0, 0, 0, 0.26) !important',
              backgroundColor: 'rgba(0, 0, 0, 0.12) !important'
            }
          }
        },
        {
          props: { variant: "withRedIcon" },
          style: {
            backgroundColor: 'white !important',
            color: 'black !important',
            border: '1px solid #707070 !important',
            '&:hover': {
              backgroundColor: '#eee !important'
            },
            '& svg': {
              color: '#D32F2F'
            }
          }
        }
      ]
    }
  },
  spacing: 1,
  palette: {
    gradient: {
      background: "linear-gradient(90deg, rgba(182, 33, 39, 1) 60%, rgba(2, 46, 96, 1) 100%)",
      circleBG: 'linear-gradient(145deg, #FFFFFF, #D4E7F7)',
    },
    cancelBtnColor: '#fff',
    primary: {
      main: '#133273',
      lighter: '#005AA9',
      light: '#e8f5e9',
    },
    red: {
      customOne: "#D32F2F"
    },
    orange: {
      customOne: '#DD7700',
      customTwo: 'rgba(221,119,0,0.15)',
      customThree: 'rgba(211,47,47,0.15)'
    },
    black: {
      customOne: '#1c2126',
      customTwo: 'rgba(0,0,0,0.08)',
      customThree: 'rgba(0, 0, 0, 0.3)',
    },
    grey: {
      customOne: '#333333',
      customTwo: '#eee',
      customNine: '#707070',
    },
    blue: {
      customFour: 'rgba(51,122,183,0.10)',
      customThree: 'rgba(51,122,183,0.55)',
      customTwo: "#133782",
      customOne: '#337ab7',
      customFive: "#ECF5FF"
    },
    green: {
      customOne: '#00A97B',
    },
  },
});