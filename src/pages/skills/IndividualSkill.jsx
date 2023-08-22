import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';

const IndividualSkill = ({ skill, level }) => {
  return (
    <Container sx={{ textAlign: 'start', mb: 2 }}>
      <Typography variant='body1' color='secondary' sx={{ fontWeight: 100 }}><CheckIcon fontSize='body1'/> {skill}
      </Typography>
      <Typography variant='body1' color='primary' sx={{ ml: '20px' }}> ({level})</Typography>
    </Container>
  )
}

export default IndividualSkill;