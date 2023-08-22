import Typography from '@mui/material/Typography';

const SectionTitle = ({ title }) => {
  return (
    <Typography variant='h4' fontFamily='Anton' color='secondary' my={4} sx={{ textAlign: 'center' }}>{title}</Typography>
  )
}

export default SectionTitle;