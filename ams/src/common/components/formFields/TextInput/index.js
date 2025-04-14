
import { Field } from 'formik';
import {
  FormControl,
  Grid,
  Stack,
  TextField,
  useTheme,
  Typography,
  Tooltip,
  Box,
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import { styles } from './style';
import { useEffect, useState } from 'react';
import { isAlphanumeric } from '../../../../helpers/utils';

const allowedButtons = ["ArrowLeft", "ArrowRight", "Backspace"];
const numberAllowedChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const amountAllowedChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const TextInput = ({
  onChange = () => 1,
  fieldId = "",
  label = "",
  secondaryLabel = "",
  maxLength = "20",
  placeholder = "",
  disabled = false,
  type = "text",  //text, number, amount, password
  footerText = '', // This text will appear below textfield
  width = '100% !important',
  alphanum = false,
  tooltipMsg = ""
}) => {
  const theme = useTheme();
  const classes = styles({
    theme,
    disabled,
    width,
    type
  });

  const [value, setvalue] = useState('');

  useEffect(() => {
    setvalue()
  }, [])

  const manipulateValue = (data) => {

    let val = data?.field?.value

    if (type == 'amount') {
      val = parseFloat(val)?.toFixed(2)
    }

    if (val == 'NaN') {
      val = "";
    }

    return val;
  }
  return (
    <Field name={fieldId} autoComplete='off'>
      {(data) => {
        const fieldTouched = data?.form?.touched[fieldId];
        const fieldErrorValue = data?.form?.errors[fieldId];
        return (
          <Stack
            sx={classes.fieldContainer}
          >
            <Stack direction='row' spacing={6} justifyContent='start' alignItems='center'>
              <Stack direction='row' spacing={6} alignItems='center'>
                <Typography variant="fieldLabel" >{label}</Typography>
                {tooltipMsg &&
                <Box sx={classes?.tooltip}>
                  <Tooltip placement="right-start" title={<Typography sx={classes?.tooltipMsg}>{tooltipMsg}</Typography>}>
                    <InfoIcon />
                  </Tooltip>
                </Box>
                }
              </Stack>
              <Typography variant="secondaryFieldLabel">{secondaryLabel?.length > 0 ? `(${secondaryLabel})` : ''}</Typography>
            </Stack>
            <FormControl fullWidth
              sx={classes.field}
            >
              
                <TextField
                  autoComplete='off'
                  value={(data?.field?.value)}
                  placeholder={placeholder?.length > 0 ? placeholder : `Enter ${label ? label : 'Text'}`}
                  onChange={(event) => {
                    let val = event.target.value;
                    // if (val?.length > 0) {
                    //   val = val?.trim();
                    // }

                    data.form.setFieldValue(fieldId, val);

                    onChange(val);
                  }}

                  onBlur={event => {
                    const value = manipulateValue(data)
                    data.form.setFieldValue(fieldId, value);
                  }
                  }

                  onKeyDown={(event) => {

                    if (!(allowedButtons?.includes(event?.key))) {
                      if (type == 'number') {
                        if (!(numberAllowedChars?.includes(event?.key))) {
                          event.preventDefault();
                        }
                      }

                      else if (type == 'amount') {
                        if (!(amountAllowedChars?.includes(event?.key))) {
                          event.preventDefault();
                        }
                        else if (event?.key == '.' && data?.form?.values?.[fieldId]?.split?.('')?.includes('.')) {
                          event.preventDefault();
                        }
                      }

                      else if (alphanum) {
                        if (!isAlphanumeric(event.key) && event.key != ' ') {
                          event.preventDefault();
                        }
                      }
                    }


                  }}
                  inputProps={
                    {
                      maxLength: type == 'amount' ? 16 : maxLength,
                      autocomplete: "off",
                      name: "hidden",
                      type: { type }
                    }
                  }

                  type={type == 'password' ? 'new-password' : 'text'}
                  autoFocus={false}
                  sx={type == 'password' ? {
                    '& input': {
                      textSecurity: 'disc',
                      '-moz-text-security': 'disc',
                      '-webkit-text-security': 'disc',
                    },
                  } : {}}
                />
            </FormControl>

            {fieldErrorValue && fieldTouched && (
              <Grid
              >
                <Typography variant="fieldError">
                  {fieldErrorValue}
                </Typography>
              </Grid>
            )}
            {footerText && (
              <Grid>
                <Typography variant="footerText" mt={'10px'} >
                  {footerText}
                </Typography>
              </Grid>
            )}

          </Stack>
        );
      }}
    </Field>
  );
};

export default TextInput;