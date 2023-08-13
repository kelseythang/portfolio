import Button from '@mui/material/Button';

const ProjectButton = ({ icon, link, title }) => {
  return (
    <Button 
      variant='contained' 
      color='secondary'
      size='small'
      startIcon={icon}
      component='a'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </Button>
  )
}

export default ProjectButton;