import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CustomIconButton from '../../components/CustomIconButton';

const Footer = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', mb: 2 }}>
      <Typography>© Kelsey Thang {!isMobile && '| Software Developer'}</Typography>
      <Box>
        <CustomIconButton link='https://github.com/kelseythang' button={<GitHubIcon className='icons' />} />
        <CustomIconButton link='https://www.linkedin.com/in/kelsey-thang/' button={<LinkedInIcon className='icons' />} />
      </Box>
    </Container>
  )
}

export default Footer;