import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from '@mui/material';
import { countries } from './data/countries';

const FormInputs = () => {
  const [submit, setSubmit] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [country, setCountry] = useState('');
  const [geography, setGeography] = useState('');
  const [desc, setDesc] = useState(false);
  const [newsletter, setNewsLetter] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  console.log(firstName.length);
  const submitForm = () => {
    if (
      firstName.length >= 3 &&
      (email.length > 5) & (company.length > 3) &&
      industry.length > 3 &&
      country.length > 3 &&
      privacy !== false
    ) {
      setSubmit(false);
    }
  };
  useEffect(() => {
    submitForm();
  }, [firstName, email, company, industry, country, privacy]);
  console.log(submit);
  return (
    <form>
      <Grid container spacing={3} px={{ xs: 0, sm: 1, md: 10 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="jobtitle"
            name="jobTitle"
            label="Job Title"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="CompanyName"
            name="company"
            label="Company Name"
            fullWidth
            autoComplete="Company Name"
            variant="standard"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/**/}
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Industry
            </InputLabel>
            <Select
              defaultValue=""
              required
              name="industry"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
              }}>
              <MenuItem value="Automative">Automative</MenuItem>
              <MenuItem value="">Banking</MenuItem>
              <MenuItem value="">Consulting</MenuItem>
              <MenuItem value="">Finance</MenuItem>
              <MenuItem value="">HealthCare</MenuItem>
              <MenuItem value="">Media/PR</MenuItem>
              <MenuItem value="">Retail</MenuItem>
              <MenuItem value="">Technology</MenuItem>
              <MenuItem value="">Telecommunucation</MenuItem>
              <MenuItem value="">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Country
            </InputLabel>
            <Select
              name="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}>
              {countries.map((country) => {
                return (
                  <MenuItem value={country.name}>
                    {country.emoji} {country.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Operating Geography
            </InputLabel>
            <Select
              onChange={(e) => {
                setGeography(e.target.value);
              }}
              name="geoGraphy"
              defaultValue=""
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard">
              <MenuItem value="National">National</MenuItem>
              <MenuItem value="Regional">Regional</MenuItem>
              <MenuItem value="Global">Global</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputLabel id="demo-simple-select-standard-label">
            What would you like to talk about?
          </InputLabel>
          <FormControl variant="standard" fullWidth>
            <TextField
              name="textArea"
              id="outlined-multiline-static"
              multiline
              rows={4}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  setPrivacy(e.target.value);
                }}
                color="secondary"
                name="saveAddress"
                value="yes"
              />
            }
            label={
              <div>
                <span>By submitting this form I accept </span>
                <a href={'https://tuumplatform.com/privacy-policy'}>
                  privacy policy and cookie policy.
                </a>
              </div>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                onChange={(e) => {
                  setNewsLetter(e.target.value);
                }}
                name="newLetter"
              />
            }
            label="I would like to receive your newsletter.
            "
          />
        </Grid>
        <Button disabled={submit} type="submit">
          <Typography va>Submit form</Typography>
        </Button>
      </Grid>
    </form>
  );
};

export default FormInputs;
