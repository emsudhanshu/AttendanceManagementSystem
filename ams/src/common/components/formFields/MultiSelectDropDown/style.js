export const styles = ({ theme, disabled }) => {
    return {
        fieldContainer: {
            position: "relative",
            background: 'white',
            userSelect: 'none'
        },
        fieldBox: {
            border: '1px solid #c9c9c9',
            borderRadius: '6px',
            height: '50px',
            padding: '0px 17px 0px 17px !important',
            background: disabled ? '#dfdfdf' : 'white',
            pointerEvents: disabled ? 'none' : 'all',
            boxShadow: 'none' // removes black outline
        },
        dropDown: {
            boxShadow: 'rgba(100, 100, 111, 0.7) 0px 7px 29px 0px',
            width: '100%',
            position: "absolute",
            borderRadius: '6px',
            border: '1px solid #c9c9c9',
            background: 'white',
            top: '50px',
            zIndex: '1001',
            boxSizing: 'border-box',
            '& >div:nth-child(1)': {
                background: 'white',
                maxHeight: '200px', // 5 items approx
                overflowY: 'auto',
            },
            '& p': {
                cursor: 'pointer',
                padding: '9px 17px 3px 9px',
                '&:hover': {
                    background: '#e2e2e2'
                },
                margin: `4px`,
                borderRadius: `10px`,
                border: `4px solid white`
            }
        },
        stylingFocusDropdown: {
            maxHeight: '200px',
            overflowY: 'auto'
        },
        dropDownArrowContainer: {
            cursor: 'pointer',
        },
        backdrop: {
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            opacity: '0',
            top: '0px',
            left: '0px',
            zIndex: '999'
        },
        placeholder: {
            color: '#b9b9b9'
        },
        searchBox: {
            '& .MuiInputBase-root': {
                background: 'white',
                boxShadow: 'none',
                borderRadius: '4px',
            }
        },
        selectedOption: {
            background: '#1976d2 !important', // Blue background for selected
            color: 'white'
        }
    };
};
