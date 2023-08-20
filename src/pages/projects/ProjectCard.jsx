import { Box, Card, CardActions, CardContent, CardMedia, Stack, Typography, useMediaQuery } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube'
import LaunchIcon from '@mui/icons-material/Launch';
import { Slide } from 'react-slideshow-image';
import SkillSection from './SkillSection';
import ProjectButton from './ProjectButton';
import 'react-slideshow-image/dist/styles.css';

const ProjectCard = ({ images, title, description, skills, points, gitLink, demoLink, liveLink }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Card sx={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #29b6f6 30%, #FF8E53 90%)' }}>
      {!isMobile ? (
        <Slide autoplay={false}>
            {images.map(image => (
              <div key={image} className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${image})` }}></div>
              </div>
            ))}
          </Slide>
      ) : (
        <CardMedia
          sx={{ height: 150 }}
          image={images[0]}
          title='project'
        /> 
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
            {title}
          </Typography>
          <Stack direction='row' sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {skills.map(skill => (
              <SkillSection title={skill} key={skill} />
            ))}
          </Stack>
          <Typography variant='body1' color='secondary' my={2}> 
            {description}
          </Typography>
          {points.map(point => (
            <Typography variant='body2' color='secondary' key={point}><CheckIcon fontSize='small' /> {point}</Typography>
          ))}
        </CardContent>
        <CardActions sx={{ ml: 1, my: 2 }}>
          <ProjectButton icon={<GitHubIcon />} link={gitLink} title='GitHub' />
          {demoLink && <ProjectButton icon={<YouTubeIcon />} link={demoLink} title='Demo' />}
          {liveLink && <ProjectButton icon={<LaunchIcon />} link={liveLink} title='Live App' />}
        </CardActions>
      </Box>
    </Card>
  )
}

export default ProjectCard;