import React from 'react'
import { Box, Stack, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube'
import LaunchIcon from '@mui/icons-material/Launch';
import SkillSection from './SkillSection';
import ProjectButton from './ProjectButton';

const ProjectCard = ({ image, title, description, skills, points, gitLink, demoLink, liveLink }) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Card sx={{ width: '100%', background: 'linear-gradient(45deg, #29b6f6 30%, #FF8E53 90%)', mb: 2 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        {isMobile ? (
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title='project'
          />
        ) : (
          <img src={image} alt='project' style={{ width: '40%' }} />
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
      </Stack>
    </Card>
  )
}

export default ProjectCard;