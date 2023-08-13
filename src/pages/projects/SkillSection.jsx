import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SkillSection = ({ title }) => {
  return (
    <Box sx={{ display: 'inline-block', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: '5px' }}>
      <Typography sx={{ color: 'white', px: 1 }}>{title}</Typography>
    </Box>
  )
}

export default SkillSection;