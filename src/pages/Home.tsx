import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { StyledCardMedia } from '../components/StyledCardMedia';

const HeroSection = styled('div')({
  height: '100vh',
  width: '100%',
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero-bg.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
  position: 'relative',
});

const FeaturedCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(187, 134, 252, 0.3)',
  },
});

const MotionContainer = styled(motion.div)({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const ContentSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.7)',
});

function Home() {
  const featuredExhibitions = [
    {
      id: 1,
      title: 'Современное искусство',
      image: '/images/exhibition1.png',
      description: 'Выставка современных художников и их работ',
    },
    {
      id: 2,
      title: 'Классическая живопись',
      image: '/images/exhibition2.png',
      description: 'Коллекция классических произведений искусства',
    },
    {
      id: 3,
      title: 'Скульптура XX века',
      image: '/images/exhibition3.png',
      description: 'Уникальные скульптурные работы прошлого века',
    },
  ];

  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <Container maxWidth="xl">
          <Typography variant="h1" component="h1" gutterBottom sx={{ 
            fontSize: '4rem',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Добро пожаловать в MUSEUM
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ 
            fontSize: '1.5rem',
            color: '#FFFFFF',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Откройте для себя мир искусства и культуры
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/exhibitions"
            sx={{ 
              mt: 4, 
              py: 2, 
              px: 4, 
              fontSize: '1.2rem',
              backgroundColor: '#bb86fc',
              '&:hover': {
                backgroundColor: '#9b66fc'
              }
            }}
          >
            Посмотреть выставки
          </Button>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container maxWidth="xl" sx={{ my: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ 
            fontSize: '3rem',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Текущие выставки
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {featuredExhibitions.map((exhibition) => (
              <Grid item xs={12} sm={6} md={4} key={exhibition.id}>
                <FeaturedCard>
                  <StyledCardMedia
                    hasimage={Boolean(exhibition.image).toString()}
                    image={exhibition.image}
                    title={exhibition.title}
                    height={300}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#FFFFFF' }}>
                      {exhibition.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {exhibition.description}
                    </Typography>
                  </CardContent>
                </FeaturedCard>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ py: 8, flex: 1, backgroundColor: 'rgba(18, 18, 18, 0.8)' }}>
          <Container maxWidth="xl">
            <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ 
              fontSize: '3rem',
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              О нашем музее
            </Typography>
            <Typography variant="body1" align="center" sx={{ 
              maxWidth: '80%', 
              mx: 'auto', 
              mb: 4, 
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.87)'
            }}>
              Мы предоставляем уникальную возможность познакомиться с шедеврами мирового искусства,
              историческими артефактами и современными произведениями. Наша миссия - сделать искусство
              доступным для каждого.
            </Typography>
            <Box textAlign="center">
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/about"
                sx={{ 
                  py: 2, 
                  px: 4, 
                  fontSize: '1.2rem',
                  color: '#bb86fc',
                  borderColor: '#bb86fc',
                  '&:hover': {
                    borderColor: '#9b66fc',
                    backgroundColor: 'rgba(187, 134, 252, 0.08)'
                  }
                }}
              >
                Узнать больше
              </Button>
            </Box>
          </Container>
        </Box>
      </ContentSection>
    </MotionContainer>
  );
}

export default Home; 