import { Grid, Typography } from "@mui/material"

export const Layout1 = ({
    title,
    children
}) => {
    return (
        <Grid>
            <Typography variant="heading1">{title}</Typography>
            {children}
        </Grid>
    )
}