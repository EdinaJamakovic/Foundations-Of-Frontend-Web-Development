import React from 'react';
import './Services.css';
import { Container, Typography, Grid } from '@mui/material';

const projects = [
  { id: 1, title: 'Signspot', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/6025651e11400d9715e1c2ad_sign-1-p-800.jpeg' },
  { id: 2, title: 'Bettr', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/6025730af1c020594064b8ce_packaging-2-p-1080.jpeg' },
  { id: 3, title: 'Sportshop', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256a7dedbc6d26de0aca98_flag-1-p-1080.jpeg' },
  { id: 4, title: 'MadeUp', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/602565a222266a5777ee4d38_boxes-2-p-500.jpeg' },
  { id: 5, title: 'Builtt', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/6025661a57f89a4a8bd2c75b_hardhat-1-p-800.jpeg' },
  { id: 6, title: 'Clean & Jerk', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256f53bc06bc4794ddc589_protein-1-p-800.jpeg' },
  { id: 7, title: 'Beanwater', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/602570a591fb1c0c3ddb2d70_capsules-2-p-1080.jpeg' },
  { id: 8, title: 'Assumenda', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256f8101dde94e4a55641a_box-1-p-500.jpeg' },
  { id: 9, title: 'Printly', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/602566dff38baa5bf84dc1f5_booklet-2-p-500.jpeg' },
  { id: 10, title: 'Gravity', img: 'https://assets.website-files.com/6019c9f69260b2f746bb44c5/60256ccaedbc6d0af20ae0cd_papers-1-p-500.jpeg' }
];

const Services = () => {
  return (
    <>
      <Container sx={{ py: 4 }}>
        <Typography variant="h1" align="center" sx={{ mb: 4 }}>We offer...</Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <div className="project-card">
                <img src={project.img} alt={project.title} />
                <div>{project.title}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ backgroundColor: "black" }}>
        <Typography variant="h2" p={6} sx={{ color: "white" }}>We work directly with founders & visionaries.</Typography>
      </Container>
    </>
  );
};

export default Services;
