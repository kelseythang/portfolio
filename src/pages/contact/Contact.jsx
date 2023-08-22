import { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const REACT_APP_EMAILJS_PUBLIC_KEY = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
  const REACT_APP_EMAILJS_SERVICE_ID = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
  const REACT_APP_EMAILJS_TEMPLATE_ID = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        name: name,
        email: email,
        message: message,
      },
      REACT_APP_EMAILJS_PUBLIC_KEY 
    )
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <Container component='form' maxWidth='sm' sx={{textAlign: 'left'}} onSubmit={handleSubmit}>
      <Typography variant='h4' fontFamily='Anton' color='secondary' mt={2}>Contact Me</Typography>
      <TextField
        label='Your Name'
        variant='outlined'
        fullWidth
        margin='dense'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label='Your Email'
        variant='outlined'
        fullWidth
        margin='dense'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Message'
        variant='outlined'
        fullWidth
        margin='dense'
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        color='secondary'
        endIcon={<SendIcon />}
        sx={{ mt: 1 }}
      >
        Submit
      </Button>
    </Container>
  )
}

export default Contact;