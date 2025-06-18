const useStyles = (theme) => ({
  root: {
    background: 'white',
    border: `1px solid ${theme.palette.grey['A200']}`,
    borderRadius: '4px',
    '& .MuiTableHead-root': {
      '& p': {
        fontWeight: '600',
        fontSize: '12px',
      },
      background: 'rgba(0,90,169,0.05)',
    },
    '& .MuiTableCell-root': {
      padding: '8px',
      textAlign: 'center',
      '& p': {
        fontSize: '12px',
      },
    },
    '& .MuiTableCell-head': {
      padding: '5px',
      color: '#133273',
      textAlign: 'center',
    },
    '& .MuiPagination-root.MuiPagination-text': {
      background: '#f7f8f8',
      padding: '3px',
      borderRadius: '4px',
    }
  },
  pagenationstyle: {
    justifyContent: 'center',
    padding: '5px',
    margin: '0 auto',
    marginTop: '30px'
  },
  minW650: {
    minWidth: '650px',
  }
});
export { useStyles };