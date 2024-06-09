import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

const MainContent = styled(Box)({
  padding: '40px 0',
});

const ProjectTitle = styled(Typography)({
  marginBottom: '20px',
});

const ProjectImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
});

const projects = [
  { title: 'Signspot', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/6025651e11400d9715e1c2ad_sign-1-p-800.jpeg' },
  { title: 'Bettr', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/6025730af1c020594064b8ce_packaging-2-p-1080.jpeg' },
  { title: 'Sportshop', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256a7dedbc6d26de0aca98_flag-1-p-1080.jpeg' },
  { title: 'MadeUp', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/602565a222266a5777ee4d38_boxes-2-p-1080.jpeg' },
  { title: 'BuiltIt', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/6025661a57f89a4a8bd2c75b_hardhat-1-p-800.jpeg' },
  { title: 'Clean & Jerk', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256f53bc06bc4794ddc589_protein-1-p-800.jpeg' },
  { title: 'Beanwater', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/602570a591fb1c0c3ddb2d70_capsules-2-p-1080.jpeg' },
  { title: 'Assumenda', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256f8101dde94e4a55641a_box-1-p-1080.jpeg' },
  { title: 'Printly', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/602566dff38baa5bf84dc1f5_booklet-2-p-1080.jpeg' },
  { title: 'Gravity', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256ccaedbc6d0af20ae0cd_papers-1-p-800.jpeg' },
];

const testimonials = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique. Duis suscipit, erat vitae auctor tincidunt.', author: 'Michael Scott, CEO @ Dunder Mifflin' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique. Duis suscipit, erat vitae auctor tincidunt.', author: 'Dwight Shrute, Founder @ Shrute Farms' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique. Duis suscipit, erat vitae auctor tincidunt.', author: 'Jim Halpert, Tuna @ Dunder Mifflin' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sit amet nibh sollicitudin tristique. Duis suscipit, erat vitae auctor tincidunt.', author: 'Pam Beasley, Secretary @ Dunder Mifflin' },
];

const Work = () => {
  return (
    <Container>
      <MainContent>
        <ProjectTitle variant="h2">Select Projects</ProjectTitle>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ProjectImage src={project.img} alt={project.title} />
              <Typography variant="h6" align="center">
                {project.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} p={4} sx={{backgroundColor:"black", color:"white"}}>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Typography variant="body1" gutterBottom>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle2" align="right">
                  {testimonial.author}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={6} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Interested in working with Foundation? We'd love to hear from you.
          </Typography>
          <Typography variant="body1" component={Link} to="/hire-us" sx={{ fontWeight: "bold", textDecoration: "none", color:"inherit" }}>
            Schedule a call →
          </Typography>
        </Box>
      </MainContent>
    </Container>
  );
};

export default Work;
