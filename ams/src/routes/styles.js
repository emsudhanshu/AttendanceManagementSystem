const useStyles = () => ({
  container: {
      background: '#ECF5FF',
      '& > div:nth-child(2)': {
        minHeight: 'calc(100vh)'
    }
  },
  contentMaxCoverage: {
    maxWidth: '1300px',
    margin: '0 auto',
  }
})

export default useStyles;