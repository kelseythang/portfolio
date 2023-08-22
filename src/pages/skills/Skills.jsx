import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IndividualSkill from './IndividualSkill';
import SectionTitle from '../../components/SectionTitle';

const Skills = () => {
  const theme = useTheme();
  const containerTheme = { 
    bgcolor: theme.palette.mode === 'light' ? 'neutral.light' : 'neutral.dark', 
    borderRadius: '20px', 
    textAlign: 'center', 
    pb: 2
  }

  return (
    <Container sx={{ mb: 2 }}>
      <SectionTitle title='Skills' />
      <Stack direction={{ md: 'column', lg: 'row' }} spacing={{ xs: 1, sm: 2, md: 2 }} columnSpacing={2}>
        <Container sx={containerTheme}>
          <Typography variant='h5' color='secondary' sx={{ my: 1 }}>Front-End Development</Typography>
          <Grid container mt={2}>
            <Grid md={6}>
              <IndividualSkill skill='JavaScript' level='Intermediate' />
              <IndividualSkill skill='React' level='Intermediate' />
              <IndividualSkill skill='HTML' level='Intermediate' />
            </Grid>
            <Grid md={6}>
              <IndividualSkill skill='CSS' level='Intermediate' />
              <IndividualSkill skill='Material UI' level='Intermediate' />
            </Grid>
          </Grid>
        </Container>
        <Container sx={containerTheme}>
        <Typography variant='h5' color='secondary' sx={{ my: 1 }}>Back-End Development</Typography>
        <Grid container mt={2}>
          <Grid md={6}>
            <IndividualSkill skill='Ruby' level='Intermediate' />
            <IndividualSkill skill='Ruby on Rails' level='Intermediate' />
            <IndividualSkill skill='PostgreSQL' level='Intermediate' />
          </Grid>
          <Grid md={6}>
            <IndividualSkill skill='SQL' level='Basic' />
            <IndividualSkill skill='Python' level='Basic' />           
          </Grid>
        </Grid>
        </Container>
      </Stack>
    </Container>
  )
}

export default Skills;