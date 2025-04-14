import { Grid, Stack, useTheme } from "@mui/material";
import useStyles from "./styles";

const RouteWrapper = ({ children, path }) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Grid>
            <Stack direction="column" justifyContent="space-between">
                <Grid>
                    <Grid sx={classes?.childrenContainer}>
                        {children}
                    </Grid>
                </Grid>
            </Stack>
        </Grid>
    )
};

export default RouteWrapper;