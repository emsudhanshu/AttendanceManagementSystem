import { Button, Grid, Stack, Typography } from "@mui/material"

export const Layout1 = ({
    title,
    buttonTitle = "",
    buttonHandler = () => {},
    children
}) => {
    return (
        <Grid pb={20}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Typography sx={{fontSize: '20px', fontWeight: 700, paddingTop: '20px', paddingBottom: '20px'}} variant="heading1">{title}</Typography>
                {buttonTitle?.length > 0 && <Button variant="contained" onClick={buttonHandler}>{buttonTitle}</Button>}
            </Stack>
            {children}
        </Grid>
    )
}