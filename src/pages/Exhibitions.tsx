import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  MenuItem,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { StyledCardMedia } from '../components/StyledCardMedia';

const StyledCard = styled(Card)({
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

const FilterSection = styled(Box)({
  marginBottom: '2rem',
});

const PageContainer = styled(motion.div)({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const ContentContainer = styled(Container)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 0',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(18, 18, 18, 0.8)',
    backdropFilter: 'blur(10px)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(187, 134, 252, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#bb86fc',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
  '& .MuiMenuItem-root': {
    color: '#FFFFFF',
  },
});

function Exhibitions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const exhibitions = [
    {
      id: 1,
      title: 'Импрессионизм и современность',
      image: '/images/exhibition1.png',
      category: 'painting',
      date: '1 мая - 30 июня 2024',
      description: 'Выставка работ импрессионистов и их влияние на современное искусство',
    },
    {
      id: 2,
      title: 'Скульптуры античности',
      image: '/images/exhibition2.png',
      category: 'sculpture',
      date: '15 мая - 15 июля 2024',
      description: 'Коллекция античных скульптур и их современные интерпретации',
    },
    {
      id: 3,
      title: 'Цифровое искусство',
      image: '/images/exhibition3.png',
      category: 'digital',
      date: '1 июня - 31 августа 2024',
      description: 'Инновационные работы в области цифрового искусства',
    },
    {
      id: 4,
      title: 'Фотография XX века',
      image: '/images/exhibition4.png',
      category: 'photography',
      date: '10 июня - 10 сентября 2024',
      description: 'Ретроспектива фотографического искусства прошлого века',
    },
  ];

  const filteredExhibitions = exhibitions.filter((exhibition) => {
    const matchesSearch = exhibition.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || exhibition.category === category;
    return matchesSearch && matchesCategory;
  });

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
            mb: 4,
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          Выставки
        </Typography>

        <FilterSection>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Поиск выставки"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                select
                label="Категория"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="all">Все категории</MenuItem>
                <MenuItem value="painting">Живопись</MenuItem>
                <MenuItem value="sculpture">Скульптура</MenuItem>
                <MenuItem value="digital">Цифровое искусство</MenuItem>
                <MenuItem value="photography">Фотография</MenuItem>
              </StyledTextField>
            </Grid>
          </Grid>
        </FilterSection>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {filteredExhibitions.map((exhibition) => (
            <Grid item key={exhibition.id} xs={12} sm={6} md={4}>
              <StyledCard>
                <StyledCardMedia
                  hasimage={Boolean(exhibition.image).toString()}
                  image={exhibition.image}
                  title={exhibition.title}
                  height={300}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ 
                    fontSize: '1.5rem',
                    color: '#FFFFFF'
                  }}>
                    {exhibition.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ 
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {exhibition.date}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {exhibition.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button 
                    size="large" 
                    sx={{ 
                      fontSize: '1rem',
                      color: '#bb86fc',
                      '&:hover': {
                        backgroundColor: 'rgba(187, 134, 252, 0.08)'
                      }
                    }}
                  >
                    Подробнее
                  </Button>
                  <Button 
                    size="large" 
                    sx={{ 
                      fontSize: '1rem',
                      color: '#bb86fc',
                      '&:hover': {
                        backgroundColor: 'rgba(187, 134, 252, 0.08)'
                      }
                    }}
                  >
                    Купить билет
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
}

export default Exhibitions; 