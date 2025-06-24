import { styles } from './style';
import { Field } from "formik";
import {
  Grid,
  Stack,
  Typography,
  useTheme,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMemo, useState } from "react";

const computeOptionMap = (options) => {
  let map = {};
  options?.forEach(o => {
    map[o?.value] = o;
  });
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
  onChange = () => { }
}) => {

  const theme = useTheme();
  const classes = styles({
    theme,
    disabled
  });

  const optionsMap = useMemo(() => computeOptionMap(options), [options]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <Field name={fieldId} sx={classes.container}>
      {(data) => {
        const fieldTouched = data?.form?.touched[fieldId];
        const fieldErrorValue = data?.form?.errors[fieldId];
        const selectedValues = data.field.value || [];

        const toggleOption = (value) => {
          let newValues = [...selectedValues];
          if (newValues.includes(value)) {
            newValues = newValues.filter(v => v !== value);
          } else {
            newValues.push(value);
          }
          data.form.setFieldValue(fieldId, newValues);
          onChange(newValues);
        };

        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(search.toLowerCase())
        );

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
                    e.preventDefault();
                    setOpen(!open);
                  }}
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  sx={classes.fieldBox}
                >
                  {selectedValues.length > 0 ?
                    <Typography>{selectedValues?.map?.(val => optionsMap?.[val]?.label).join(', ')}</Typography>
                    :
                    <Grid sx={classes.placeholder}>
                      <Typography>
                        {showSelectOptionsPlaceholder ? 'Select Option' : placeholder?.length > 0 ? placeholder : `Select ${label}`}
                      </Typography>
                    </Grid>
                  }
                  <Grid sx={classes.dropDownArrowContainer}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </Grid>
                </Stack>
                {open && <Stack sx={classes.dropDown} direction='column'>
                  <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search...'
                    size='small'
                    fullWidth
                    sx={classes.searchBox}
                  />
                  <Grid sx={classes.stylingFocusDropdown}>
                    {filteredOptions.length > 0 ?
                      filteredOptions.map((o, i) => (
                        <Typography
                          key={i}
                          value={o?.value}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleOption(o.value);
                          }}
                          sx={selectedValues?.includes?.(o.value) ? classes.selectedOption : {}}
                        >
                          {o?.label}
                        </Typography>
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
