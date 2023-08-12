import IconButton from '@mui/material/IconButton';

const CustomIconButton = ({ link, button }) => {
  return (
    <IconButton 
      target='_blank' 
      href={link} 
      style={{ backgroundColor: 'transparent' }}
    >
      {button}
    </IconButton>
  )
}

export default CustomIconButton;