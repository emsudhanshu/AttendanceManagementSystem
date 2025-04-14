

export const styles = ({ disabled, theme, width, type }) => {
    return {
      fieldContainer: {
        '& input': {
          background: disabled ? '#dfdfdf' : 'white',
          borderRadius: '5px',
          border: '1px solid #888888 !important',
          height: '50px',
          padding: '0px 17px 0px 17px !important',
          outline: 'none !important',
          fontSize: '15px',
          fontFamily: 'Open Sans !important',
          '&:focus': {
            outline: '1px solid transparent',
          },
          '&::placeholder': {
            opacity: '1',
            fontSize: '15px',
            color: '#b8b8b8',
            fontFamily: 'Open Sans !important',
          },
          '&::-ms-input-placeholder': {
            fontSize: '15px',
            color: '#b8b8b8',
            fontFamily: 'Open Sans !important',
          }
        },
        userSelect: 'none',
        width: width,
        "@media (min-width: 320px) and (max-width: 767px)": {
          width: '100% !impotant',
        },
  
      },
      field: {
        background: disabled ? '#dfdfdf' : 'white',
        // ...(type!='amount' && {
        //   background: 'white',
        // }),
        pointerEvents: disabled ? 'none' : 'all',
        marginTop: '10px !important'
      },
      tooltip: {
        height: '100%',
        '& svg': {
          paddingTop: '2px',
          height: '16px',
          color: theme?.palette?.primary?.lighter
        }
      },
      tooltipMsg: {
        fontSize: '12px'
      }
    };
  };