import React from 'react';
import { Container, Grid, Typography, Box, Button} from '@mui/material';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

const MainContent = styled(Box)({
  padding: '20px 0',
});

const ValuesSection = styled(Box)({
  padding: '40px 0',
});

const Footer = styled(Box)({
  padding: '20px 0',
  borderTop: '1px solid #ddd',
  marginTop: '40px',
});

const About = () => {
  return (
    <Container>
      <MainContent>
        <Typography variant="h2" gutterBottom>
          Foundation is a creative agency located in Nashville, TN offering branding and identity design services.
        </Typography>
        <Typography variant="h2" gutterBottom>
          Duis suscipit, erat vitae auctor tincidunt, urna lectus maximus augue, at mollis leo urna eu dolor.
        </Typography>
        <Box mt={4}>
          <img src="https://assets.website-files.com/60109710a199864c57acfa4d/60197faef5d7d99ad96d8cb8_you-x-ventures-CDq4ChZouXw-unsplash-p-1600.jpeg" alt="Office" width="100%" />
        </Box>
      </MainContent>

      <ValuesSection>
        <Typography variant="h1" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Clarity</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Sustainability</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Honesty</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Simplicity</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <img src="https://assets.website-files.com/60109710a199864c57acfa4d/60197faef5d7d99ad96d8cb8_you-x-ventures-CDq4ChZouXw-unsplash-p-1600.jpeg" alt="Office" width="100%" />
        </Box>
      </ValuesSection>

      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Interested in working with Foundation? We'd love to hear from you.
        </Typography>
        <Button color="inherit" component={Link} to="/hire-us" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Schedule a call →
          </Button>
      </Box>
    </Container>

    )}


export default About
