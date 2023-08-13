import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactIcon from './ReactIcon';
import RailsIcon from './RailsIcon';
import MUIIcon from './MUIIcon';
import ConnectButton from './ConnectButton';
import ResumeButton from './ResumeButton';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme => theme.breakpoints.between('xs', 'sm', 'md'));

  return (
    <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant='h2' fontFamily='Anton' color='secondary'>
        I'm  <span style={{ color: theme.palette.primary.main }}>Kelsey Thang</span> a Full Stack Software Developer.
      </Typography>
      <Stack direction='row' spacing={4}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <ReactIcon />
          {!isMobile && <Typography>React</Typography>}
        </Stack>
        <Stack direction='row' alignItems='center' spacing={1}>
          <RailsIcon />
          {!isMobile && <Typography>Ruby on Rails</Typography>}
        </Stack>
        <Stack direction='row' alignItems='center' spacing={1}>
          <MUIIcon />
          {!isMobile && <Typography>Material UI</Typography>}
        </Stack>
      </Stack>
      <Typography variant='body1'>
        Junior Software Developer with a strong passion for creating applications that enhance the user experience. Proficiencies
        include JavaScript, React, MUI, Ruby on Rails, and PostgreSQL. Currently learning Python and related frameworks.
        <br /><br />
        Thank-you for reviewing my portfolio and feel free to contact me with questions and new opportunities!
      </Typography>
      <Box mt={2}>
        <ConnectButton />
        <ResumeButton />
      </Box>
    </Container>
  )
}

export default Home;