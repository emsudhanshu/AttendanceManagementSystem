// import moment from 'moment';
// import { Field } from 'formik';
// import { Box, Grid, Stack, Tooltip, Typography, useTheme } from '@mui/material';
// import { useStyles, materialTheme, generateClassName, tooltipStyles } from './style';
// import DateFnsUtils from '@date-io/date-fns';
// import { StylesProvider, ThemeProvider } from '@material-ui/styles';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import PickerToolbar from '@material-ui/pickers/_shared/PickerToolbar';
// import ToolbarButton from '@material-ui/pickers/_shared/ToolbarButton';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import clsx from 'clsx';
// import InfoIcon from '@mui/icons-material/Info';

// const CustomToolbar = function (props) {
//   const { date, isLandscape, openView, setOpenView, title, views } = props;
//   const handleChangeViewClick = (view) => (e) => {
//     setOpenView?.(view);
//   };
//   const classes = useStyles();

//   return (
//     <PickerToolbar sx={classes.toolbar} title={title} isLandscape={isLandscape}>
      
//       <div>
//         <ToolbarButton
//           onClick={handleChangeViewClick('month')}
//           variant="h6"
//           label={moment(date).format('MMMM')}
//           selected={openView === 'month'}
//           endIcon={<KeyboardArrowDownIcon sx={classes.icon} />}
//         />

//         <ToolbarButton
//           onClick={handleChangeViewClick('year')}
//           variant="h6"
//           label={moment(date).format('YYYY')}
//           selected={openView === 'year'}
//           endIcon={<KeyboardArrowDownIcon sx={classes.icon} />}
//           sx={classes.year}
//         />
//       </div>
//     </PickerToolbar>
//   );
// };

// const DatePicker = ({
//   errors,
//   touched,
//   type = '',
//   label = '',
//   disabled = false,
//   placeholder = 'DD/MM/YYYY',
//   fieldDisabled = false,
//   format = 'DD-MM-YYYY',
//   disablePast = false,
//   disableFuture = false,
//   disableSpecificDates = null,
//   onChange,
//   value,
//   maxDate,
//   minDate,
//   flow,
//   tooltipMsg = ""
// }) => {
//   const theme = useTheme();
//   const classes = useStyles({ errors, touched, type });
//   const { calendarFieldInput, fieldContainer, fieldLabel, fieldInput, calendarFieldInputSI } = classes;
//   const { tooltip, tooltipMessage} = tooltipStyles(theme)
//   return (
//     <Stack
//       className={clsx({
//         [fieldContainer]: errors[type],
//       })}
//       spacing={2}
//       direction={'column'}>
//         <Grid pb={6}>
//           <Stack direction='row' spacing={6} alignItems='center'>
//             <Typography variant="fieldLabel">{label}</Typography>
//             {tooltipMsg && <Box sx={tooltip}>
//                 <Tooltip placement="right-start" title={<Typography sx={tooltipMessage}>{tooltipMsg}</Typography>}>
//                 <InfoIcon />
//               </Tooltip>
//             </Box>}
//           </Stack>
//         </Grid>
//       <Grid sx={fieldInput}>
//         <Field name={type} type="number">
//           {(data) => {
//             const fieldTouched = data?.form?.touched[type];
//             const fieldError = data?.form?.errors[type];
//             const year = data?.field?.value && data?.field?.value?.slice?.(6, 10);
//             const month = data?.field?.value && data?.field?.value?.slice?.(3, 5);
//             const day = data?.field?.value && data?.field?.value?.slice?.(0, 2);
//             const date = new Date(`${year}-${month}-${day}`);
//             return (
//               <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <StylesProvider generateClassName={generateClassName}>
//                   <ThemeProvider theme={materialTheme(errors, touched, type)}>
//                     <KeyboardDatePicker
//                       onBlur={(e) => {

//                         let val = e?.target?.value;

//                         if((new Date(moment(val).format('YYYY/MM/DD'))) > maxDate){
//                           data.form.setFieldValue(type, '')
//                         } 
//                         data.form.setTouched({ ...data.form.touched, [type]: true });
//                       }}
//                       variant="dialog"
//                       inputVariant="outlined"
//                       value={data?.field?.value ? date : value ? moment(value).format('YYYY-MM-DD') : null}
//                       onChange={(val) => {
//                         if(val?.toString()?.toLowerCase() == 'invalid date'){
//                           data.form.setFieldValue(type, '');
//                           data.form.setFieldError(type, 'invalid data is this')
//                         }

//                         else if(val)
//                           { 
//                             data.form.setFieldValue(type, moment(val).format(format))
//                             onChange(moment(val).format(format))
//                           }
//                          else { data.form.setFieldValue(type, '');
//                             onChange('')
//                         }
//                       }}
//                       minDate={minDate}
//                       maxDate = {maxDate}
//                       animateYearScrolling={true}
//                       format="dd/MM/yyyy"
//                       openTo="date"
//                       views={['year', 'month', 'date']}
//                       placeholder={placeholder}
//                       cancelLabel={'Close'}
//                       clearable = {true}
//                       ToolbarComponent={CustomToolbar}
//                       className={flow === "SI" ? calendarFieldInputSI : calendarFieldInput}
//                       disablePast={disablePast}
//                       disableFuture={disableFuture}
//                       shouldDisableDate={disableSpecificDates}
//                       disabled={fieldDisabled}
//                       {...(fieldError && fieldTouched ? { error: true } : {})}
//                       {...(fieldError && fieldTouched ? { helperText: fieldError } : {})}
//                     />
//                   </ThemeProvider>
//                 </StylesProvider>
//               </MuiPickersUtilsProvider>
//             );
//           }}
//         </Field>
//       </Grid>
//     </Stack>
//   );
// };

// export default DatePicker;
