
import { styles } from './style';
import { Field } from "formik";
import {
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMemo, useState } from "react";

const computeOptionMap = (options) => {
  let map = {};
  options?.map(o => {
    map[o?.value] = o
  })
  return map;
};

const SelectDropDown = ({
  id = "",
  fieldId = "",
  disabled = false,
  label = "",
  placeholder = "",
  options = [],
  secondaryLabel = "",
  showSelectOptionsPlaceholder = false,
  onChange = ()=>1
}) => {

  const theme = useTheme();
  const classes = styles({
    theme,
    disabled
  });
  const optionsMap = useMemo(() => computeOptionMap(options), [options]);
  const [open, setOpen] = useState(false);

  return (
    <Field name={fieldId} sx={classes.container}>
      {(data) => {

        const fieldTouched = data?.form?.touched[fieldId];
        const fieldErrorValue = data?.form?.errors[fieldId];

        return (
          <Grid id={id} sx={{ position: 'relative' }}>
            {open && <Grid sx={classes.backdrop} onClick={() => setOpen(false)}></Grid>}
            <Stack direction='row' spacing={6} justifyContent='start' alignItems='center' mb={7}>
              <Typography variant="fieldLabel">{label}</Typography>
              <Typography variant="secondaryFieldLabel">{secondaryLabel?.length > 0 ? `(${secondaryLabel})` : ''}</Typography>
            </Stack>
            <Grid>
              <Stack sx={classes.fieldContainer}>
                <Stack
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(!open)
                  }}
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  sx={classes.fieldBox}
                >
                  {optionsMap?.[data.field.value]?.value?.length > 0 ?
                    <Typography>{optionsMap?.[data.field.value]?.label}</Typography> :
                    <Grid sx={classes.placeholder}>
                      <Typography>{showSelectOptionsPlaceholder ? 'Select Option' : placeholder?.length > 0 ? placeholder : `Select ${label}`}</Typography>
                    </Grid>}
                  <Grid sx={classes.dropDownArrowContainer}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </Grid>
                </Stack>
                {open && <Stack sx={classes.dropDown} direction='column' justifyContent={'space-around'}>
                  <Grid>
                    {options?.length > 0 ?
                      options?.map((o, i) => (
                        <Typography value={o?.value} onClick={(e) => {
                          onChange(o)
                          e.preventDefault()
                          setOpen(false)
                          console.log(e?.target?.getAttribute('value'))
                          data.form.setFieldValue(fieldId, e?.target?.getAttribute('value'));
                        }}>{o?.label}</Typography>
                      ))
                      : <Typography>{`No options available`}</Typography>}
                  </Grid>
                </Stack>}
              </Stack>
            </Grid>
            {fieldErrorValue && fieldTouched &&
              <Grid>
                <Typography variant="fieldError">
                  {fieldErrorValue}
                </Typography>
              </Grid>
            }
          </Grid>
        )
      }}
    </Field>
  );
};

export default SelectDropDown;