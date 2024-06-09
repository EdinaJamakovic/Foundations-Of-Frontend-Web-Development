import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h1" mt={10} mb={10} mr={10} ml={0}>
      A design studio focused on pushing brands forward
    </Typography>
    <Grid container justifyContent="center">
      <Grid item>
        <Box
          component="img"
          src="https://assets.website-files.com/60109710a199864c57acfa4d/60197fae9ec779600ee6aae0_you-x-ventures-64201tp25Bw-unsplash.jpg"
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Grid>
    </Grid>
    <Grid container sx={{textAlign:"left"}}>
        <Grid sm={6} p={5} item>
            <Typography variant="h5" sx={{textAlign: "left"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </Grid>  
    </Grid>
    <Container sx={{backgroundColor:"black"}}>
        <Typography variant="h2" p={6} sx={{color:"white"}}>We work directly with founders & visionaries.</Typography>
    </Container>
  </Container>
);

export default Home;
