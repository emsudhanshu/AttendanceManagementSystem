import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Pagination,
    useTheme,
    Stack,
    TableSortLabel,
    Typography,
    Button
} from '@mui/material';
import { useStyles } from './style.js';
import { useState } from 'react';
import { useEffect } from 'react';
import usePagination from '../../hooks/usePagination.js';
import languageData from  "../../../strings/en.json";

const renderValue = (value) => {
    if (typeof value === "function") {
        // React Component
        const Component = value;
        return <Component />;
    }
    else if(Array.isArray(value)){
        return value?.join(', ')
    }
    // Direct text/number
    return value;
};

export default function ListView({ headings, rows, rowsPerPage = 5, setRows = () => { }, actions = {} }) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const rowsData = usePagination(rows, rowsPerPage);

    const pageChangeHandler = (page) => {
        rowsData.jump(page)
    }

    const [sortArr, setSortArr] = useState([]);

    useEffect(() => {
        let sortArr = [];

        Object.keys(headings)?.map(o => {
            sortArr?.push('desc')
            setSortArr(sortArr);
        })
    }, [headings])

    return (
        <Grid container>
            <TableContainer sx={classes.root}>
                <Table sx={classes.minW650}>
                    <TableHead>
                        <TableRow>
                            {Object?.keys?.(headings)?.map((heading, i) => (
                                <TableCell>
                                    <Stack direction='row' justifyContent='center' alignItems='center'>

                                        {headings?.[heading]?.sortable ? <TableSortLabel
                                            active={true}
                                            direction={sortArr?.[i]}
                                            onClick={() => {
                                                let sortArrTemp = JSON.parse(JSON.stringify(sortArr));
                                                sortArrTemp[i] = sortArr?.[i] == 'asc' ? "desc" : "asc"
                                                if (headings?.[heading]?.type == 'date') {
                                                    let sortedRows = [];
                                                    sortedRows = rows?.sort((a, b) => {
                                                        const returnVal = sortArrTemp?.[i] == 'asc' ? 1 : -1;
                                                        const a_timestamp = new Date(`${a?.[heading]?.split(' ')?.[0]} 1, ${a?.[heading]?.split(' ')?.[1]}`);
                                                        const b_timestamp = new Date(`${b?.[heading]?.split(' ')?.[0]} 1, ${b?.[heading]?.split(' ')?.[1]}`);
                                                        return (a_timestamp > b_timestamp) ? (0 - returnVal) : returnVal
                                                    })
                                                    setRows(sortedRows)
                                                }
                                                else {
                                                    //no sorting currentltly happending of fields other than date
                                                }
                                                setSortArr(sortArrTemp);
                                            }}
                                        >
                                            <Typography>
                                                {headings?.[heading]?.label}
                                            </Typography>
                                        </TableSortLabel> :
                                            <Typography>
                                                {headings?.[heading]?.label}
                                            </Typography>
                                        }

                                    </Stack>
                                </TableCell>
                            ))}

                            {(typeof (actions?.updateHandler) == `function` || typeof (actions?.updateHandler) == `function`) && (
                                <TableCell sx={{fontWeight: 900, fontFamily: 'arial !important'}}>{languageData?.common?.texts?.actions}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsData?.currentData()?.map(row => (
                            <TableRow>
                                {Object?.keys?.(headings)?.map((heading) => (
                                    <TableCell>
                                        <Typography>
                                            {renderValue(row?.[heading])}
                                        </Typography>
                                    </TableCell>
                                ))}
                                <TableCell>
                                    {typeof (actions?.updateHandler) == `function` &&
                                        (
                                            <Button variant="text" onClick={()=>actions?.updateHandler(row)}>
                                                {languageData?.common?.buttons?.update}
                                            </Button>
                                        )
                                    }

                                    {typeof (actions?.deleteHandler) == `function` &&
                                        (
                                            <Button variant="text" onClick={()=>actions?.deleteHandler(row)}>
                                                {languageData?.common?.buttons?.delete}
                                            </Button>
                                        )
                                    }
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container sx={classes.pagenationstyle}>
                <Pagination
                    count={rowsData?.maxPage}
                    page={rowsData?.currentPage}
                    color="primary"
                    showFirstButton
                    showLastButton
                    boundaryCount={2}
                    onChange={(event, value) => pageChangeHandler(value)}
                />
            </Grid>
        </Grid>
    );
}