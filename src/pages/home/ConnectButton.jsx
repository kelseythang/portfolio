import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ConnectButton = () => {
  return (
    <Button 
      variant='contained' 
      color='secondary' 
      sx={{ mr: 2 }} 
      startIcon={<SendIcon />}
      component='a'
      href='https://www.linkedin.com/in/kelsey-thang/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Connect
    </Button>
  )
}

export default ConnectButton;