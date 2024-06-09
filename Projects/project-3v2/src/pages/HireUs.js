import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import './HireUs.css';

const HireUs = () => {
  return (
    <Container className="hire-us-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className="hire-us-heading">
            Get in touch
          </Typography>
          <Typography className="hire-us-contact-info">
            Studio
          </Typography>
          <Typography>
            7000 A Charlotte Pike<br />
            Nashville, TN 37209
          </Typography>
          <Typography>
            <a href="tel:+16153563860">+1 (615) 356-3860</a><br />
            <a href="mailto:info@foundation.co">info@foundation.co</a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form className="hire-us-form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              className="hire-us-field"
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              className="hire-us-field"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              className="hire-us-field"
            />
            <Button
              variant="contained"
              className="hire-us-button"
            >
              Submit →
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HireUs;

