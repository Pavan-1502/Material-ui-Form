import React from "react";
import "./Form.css";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Stack,
  TextField,
  Button,
  Box,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
  MenuItem,
  InputLabel,
  FormHelperText,
  Typography,
} from "@mui/material";

function MuiTextField(props) {
  const { formValues, formErrors, handleChange, handleSubmit } = props;

  return (
    <>
      <Box className="formbold-main-wrapper">
        <Box className="formbold-form-wrapper">
          <Box className="container">
            <Typography
              variant="h5"
              className="h3"
              sx={{
                fontFamily: "Raleway",
              }}
            >
              <b>Registration Form</b>
            </Typography>
            <form className="form" onSubmit={handleSubmit}>
              <Stack direction="row" spacing={1.5}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.firstName)}
                  helperText={formErrors.firstName}
                />

                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.lastName)}
                  helperText={formErrors.lastName}
                />
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <TextField
                  label="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                />
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.phoneNumber)}
                  helperText={formErrors.phoneNumber}
                />
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <Box width="450px">
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Birth Date"
                        name="birthDate"
                        renderInput={(params)=><TextField{...params}/>}
                        value={formValues.birthDate}
                        onChange={handleChange}
                        error={Boolean(formErrors.birthDate)}
                        helperText={formErrors.birthDate}
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ marginRight: "180px" }}
                  >
                    Birth Date
                  </InputLabel>
                  <TextField
                    name="birthDate"
                    type="date"
                    value={formValues.birthDate}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(formErrors.birthDate)}
                    helperText={formErrors.birthDate}
                  />
                </Box>

                <Box width="450px">
                  <FormControl>
                    <FormLabel
                      sx={{ marginRight: "200px", marginTop: "1px" }}
                      component="legend"
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup
                      sx={{ marginTop: "5px" }}
                      name="gender"
                      value={formValues.gender}
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio sx={{ transform: "scale(0.8)" }} />}
                        label="Male"
                        sx={{ marginRight: "10px" }}
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio sx={{ transform: "scale(0.8)" }} />}
                        label="Female"
                        sx={{ marginRight: "10px" }}
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio sx={{ transform: "scale(0.8)" }} />}
                        label="Other"
                        sx={{ marginRight: "10px" }}
                      />
                    </RadioGroup>
                    <FormHelperText
                      error
                      sx={{ p: "7.5px", marginLeft: "1px" }}
                    >
                      {formErrors.gender}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="column">
                <TextField
                  label="Address"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.address)}
                  helperText={formErrors.address}
                />
              </Stack> 

              <Stack direction="row" spacing={1.5}>
                <TextField
                  label="Country"
                  select
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                  error={Boolean(formErrors.country)}
                  helperText={formErrors.country}
                  fullWidth
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="New Zealand">New Zealand</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                </TextField>

                <TextField
                  label="City"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.city)}
                  helperText={formErrors.city}
                />
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <TextField
                  label="Region"
                  name="region"
                  value={formValues.region}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.region)}
                  helperText={formErrors.region}
                />
                <TextField
                  label="Postal Code"
                  name="postalCode"
                  value={formValues.postalCode}
                  onChange={handleChange}
                  fullWidth
                  error={Boolean(formErrors.postalCode)}
                  helperText={formErrors.postalCode}
                />
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ width: 120 }}
                >
                  Register
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MuiTextField;
