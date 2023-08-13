import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/SaveAlt';
import resume from '../../assets/resume.pdf'

const ResumeButton = () => {
  return (
    <Button 
      variant='outlined' 
      color='secondary'
      startIcon={<SaveIcon />}
      component='a'
      href={resume}
      target='_blank'
      rel='noopener noreferrer'
    >
      Resume
    </Button>
  )
}

export default ResumeButton;