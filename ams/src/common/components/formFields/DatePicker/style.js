import { createGenerateClassName } from '@material-ui/styles';
import { createTheme } from '@mui/material';
// import { createUseStyles } from 'react-jss';
import { theme as mainTheme } from '../../../../themes/index';
const materialTheme = () => {
  let theme = mainTheme;
  return createTheme({
    overrides: {
      MuiInputBase: {
        root: {
          fontFamily: 'Open Sans !important',
          fontWeight: 400
        },
        input: {
          color: `${theme.palette.black['customOne']} !important`,
          disabled: {
            color: `${theme.palette.black['customOne']} !important`,
          },
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: theme.palette.black['customTwo'],
        },
      },
      MuiOutlinedInput: {
        root: {
          backgroundColor: theme.palette.black['customTwo'],
          height: 45,
          lineHeight: '25px !important',
        },
        notchedOutline: {
          borderColor: theme.palette.black['customTwo'],
          error: {
            backgroundColor: theme.palette.black['customTwo'],
            height: 45,
          },
        },
        adornedEnd: {
          paddingRight: 0,
        },
        inputAdornedEnd: {
          height: 45,
        },
        input: {
          padding: '10px 8px',
          fontWeight: 500,
          fontFamily: 'Open Sans !important',
          fontSize: 14,
        },
      },
      MuiFormHelperText: {
        contained: {
          marginLeft: 0,
        },
        root: {
          fontFamily: 'Open Sans !important',
          fontWeight: 500,
          fontSize: 11,
        },
      },
      MuiIconButton: {
        disabled: {
          cursor: 'not-allowed !important',
        },
      },
      MuiButton: {
        endIcon: {
          marginRight: 0,
          marginLeft: 0,
        },
      },
      MuiInputAdornment: {
        positionEnd: {
          marginLeft: -5,
        },
      },
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: theme.palette.blue['customOne'],
          alignItems: 'flex-start',
          flexDirection: 'column',
          height: '0px !important',
        },
      },
      MuiPickersToolbarText: {
        toolbarTxt: {
          color: theme.palette.common.white,
        },
        toolbarBtnSelected: {
          color: theme.palette.common.white,
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 10,
        },
      },

      MuiGrid: {
        root: {
          marginTop: '0px !important',
        },
        container: {
          marginTop: '0px !important',
        },
      },

      MuiTypography: {
        body2: {
          fontFamily: 'Open Sans !important',
          fontWeight: 700,
          letterSpacing: 0.52,
          fontSize: 13,
        },
        h3: {
          marginTop: '2px !important',
          fontSize: '12px !important',
          color: `${theme.palette.common.white} !important`,
          opacity: 0.8,
        },
        h5: {
          fontSize: 14,
        },
        h4: {
          fontSize: '17px !important',
          fontFamily: 'Open Sans !important',
          fontWeight: 500,
          fontWeight: '500px !important',
          textAlign: 'left',
          color: '#ffffff',
          lineHeight: '34px',
        },
      },
      MuiPickersCalendarHeader: {
        dayLabel: {
          color: 'black',
        },
      },
      MuiPickersYear: {
        yearSelected: {
          fontFamily: 'Open Sans !important',
          color: theme.palette.blue['customTwo'],
          fontSize: 22,
          fontWeight: 700,
        },
        root: {
          fontFamily: 'Open Sans !important',
          color: theme.palette.black['customOne'],
          fontSize: 20,
          fontWeight: 520,
        },
      },
      MuiPickersMonth: {
        root: {
          fontFamily: 'Open Sans !important',
          color: theme.palette.black['customOne'],
          fontSize: 18,
          fontWeight: 500,
        },
        monthSelected: {
          fontFamily: 'Open Sans !important',
          color: theme.palette.blue['customTwo'],
          fontSize: 20,
          fontWeight: 600,
        },
      },

      MuiPickersDay: {
        day: {
          color: theme.palette.black['customOne'],
          fontFamily: 'Open Sans !important',
          opacity: 0.9,
        },
        daySelected: {
          backgroundColor: theme.palette.blue['customTwo'],
        },
        dayDisabled: {
          opacity: 0.3,
        },
        current: {
          color: theme.palette.blue['customTwo'],
        },
      },
    },
  });
};

const useStyles = () => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: () => ({
    color: `${mainTheme.palette.common.white} !important`,
  }),
  year: {
    marginLeft: 10,
  },
  heading: () => ({
    color: `${mainTheme.palette.common.white} !important`,
  }),
  calendarFieldInput: {
    fontSize: '14px',
    '& > *': {
      background: '#ffffff !important',
    },
    // background: theme.palette.common.white,
    borderRadius: '4px',
    width: '111%',
    height: '43.8px !important',
    // fontWeight: 500,
    color: `#1c2126 !important`,
    '& .Theme-DatePicker-MuiInputBase-root.Mui-disabled': {
      backgroundColor: `#ebebeb !important`,
      opacity: 1,
      cursor: 'not-allowed !important',
      color: `#1c2126 !important`,
    },
  },

  // SI we need to check why BG is not working


  calendarFieldInputSI: {
    fontSize: '14px',
    '& > *': {
      background: '#ffffff !important',
    },
    // background: theme.palette.common.white,
    borderRadius: '4px',
    width: '70%',
    height: '45px',
    // fontWeight: 500,
    color: `#1c2126 !important`,
    '& .Theme-DatePicker-MuiInputBase-root.Mui-disabled': {
      backgroundColor: `#ebebeb !important`,
      opacity: 1,
      cursor: 'not-allowed !important',
      color: `#1c2126 !important`,
    },
  },
  fieldContainer: {
    marginBottom: '17px !important',
  },
  fieldLabel: {
    color: '#888',
    width: '150px',
    fontSize: '15px',
    fontWeight: 400,
  },
  fieldInput: {
    '& .Theme-DatePicker-MuiFormControl-root': {
      width: '100% !important'
    },
    '& .Theme-DatePicker-MuiOutlinedInput-notchedOutline': {
      border: '1px solid #1C2126 !important'
    },
    '& .Theme-DatePicker-MuiOutlinedInput-root': {
      background: 'white !important',
    },
    width: '100%',
    '& .Mui-error': {
      color: '#D32F2F !important',
      fontSize: '14px !important'
    }
  },
});

const generateClassName = createGenerateClassName({
  seed: 'Theme-DatePicker',
});



const tooltipStyles = (theme) => {
  return {
    tooltip: {
      height: '100%',
      '& svg': {
        paddingTop: '2px',
        height: '16px',
        color: theme?.palette?.primary?.lighter
      }
    },
    tooltipMessage: {
      fontSize: '12px'
    }
  };
};

export { useStyles, materialTheme, generateClassName, tooltipStyles };
