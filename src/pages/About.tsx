import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const PageContainer = styled(motion.div)({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '64px',
});

const ContentContainer = styled(Container)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 0',
});

const InfoSection = styled(Box)({
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '2rem',
  borderRadius: '8px',
  marginBottom: '2rem',
});

const StyledSection = styled(Box)({
  marginBottom: '4rem',
});

const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  margin: '0 auto',
  marginBottom: '2rem',
});

const TeamMemberCard = styled(Card)({
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  transition: 'transform 0.3s ease-in-out',
  color: '#FFFFFF',
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  '& img': {
    margin: '0 auto'
  },
  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

function About() {
  const team = [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Директор музея',
      image: '/team1.jpg',
    },
    {
      id: 2,
      name: 'Михаил Иванов',
      position: 'Главный куратор',
      image: '/team2.jpg',
    },
    {
      id: 3,
      name: 'Елена Сидорова',
      position: 'Искусствовед',
      image: '/team3.jpg',
    },
  ];

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentContainer maxWidth="xl">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontSize: '3rem',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            mb: 4 
          }}
        >
          О нас
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <InfoSection>
              <Typography variant="h4" gutterBottom sx={{ 
                color: '#FFFFFF',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Наша миссия
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Мы стремимся сделать искусство доступным для всех, создавая уникальное пространство
                для диалога между прошлым и настоящим, художниками и зрителями, традициями и инновациями.
              </Typography>
            </InfoSection>

            <InfoSection>
              <Typography variant="h4" gutterBottom sx={{ 
                color: '#FFFFFF',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                История музея
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Основанный в начале XX века, наш музей прошел долгий путь развития и трансформации.
                Сегодня мы являемся одним из ведущих культурных центров, объединяющих классическое
                и современное искусство.
              </Typography>
            </InfoSection>
          </Grid>

          <Grid item xs={12} md={4}>
            <InfoSection>
              <Typography variant="h4" gutterBottom sx={{ 
                color: '#FFFFFF',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Контакты
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Адрес: ул. Музейная, 1
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Телефон: +7 (999) 123-45-67
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Email: info@museum.ru
              </Typography>
            </InfoSection>

            <InfoSection>
              <Typography variant="h4" gutterBottom sx={{ 
                color: '#FFFFFF',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                Часы работы
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Вторник - Воскресенье: 10:00 - 20:00
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                Понедельник: выходной
              </Typography>
            </InfoSection>
          </Grid>
        </Grid>

        <StyledSection>
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Наша команда
          </Typography>
          <Grid container spacing={4}>
            {team.map((member) => (
              <Grid item key={member.id} xs={12} sm={6} md={4}>
                <TeamMemberCard>
                  <CardContent>
                    <StyledAvatar
                      src={member.image}
                      alt={member.name}
                    />
                    <Typography variant="h5" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {member.position}
                    </Typography>
                  </CardContent>
                </TeamMemberCard>
              </Grid>
            ))}
          </Grid>
        </StyledSection>
      </ContentContainer>
    </PageContainer>
  );
}

export default About; 