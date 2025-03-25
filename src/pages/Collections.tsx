import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { StyledCardMedia } from '../components/StyledCardMedia';

const StyledTabs = styled(Tabs)({
  marginBottom: '2rem',
  '& .MuiTabs-indicator': {
    backgroundColor: '#bb86fc',
  },
  '& .MuiTab-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#FFFFFF',
    },
    '&:hover': {
      color: '#bb86fc',
    },
  },
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(187, 134, 252, 0.3)',
  },
});

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

const TagsContainer = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
  marginTop: '1rem',
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`collection-tabpanel-${index}`}
      aria-labelledby={`collection-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function Collections() {
  const [value, setValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const collections = {
    paintings: [
      {
        id: 1,
        title: 'Импрессионизм',
        image: '/images/exhibition1.png',
        period: '19 век',
        items: 45,
        tags: ['Моне', 'Ренуар', 'Дега'],
      },
      {
        id: 2,
        title: 'Русский авангард',
        image: '/images/exhibition2.png',
        period: '20 век',
        items: 32,
        tags: ['Малевич', 'Кандинский', 'Шагал'],
      },
    ],
    sculptures: [
      {
        id: 3,
        title: 'Античная скульптура',
        image: '/images/exhibition3.png',
        period: 'Древний мир',
        items: 28,
        tags: ['Греция', 'Рим', 'Мрамор'],
      },
      {
        id: 4,
        title: 'Современная скульптура',
        image: '/images/exhibition4.png',
        period: '21 век',
        items: 15,
        tags: ['Абстракция', 'Металл', 'Инсталляция'],
      },
    ],
    artifacts: [
      {
        id: 5,
        title: 'Египетские артефакты',
        image: '',
        period: 'Древний Египет',
        items: 60,
        tags: ['Мумии', 'Саркофаги', 'Украшения'],
      },
      {
        id: 6,
        title: 'Средневековые реликвии',
        image: '',
        period: 'Средние века',
        items: 40,
        tags: ['Оружие', 'Доспехи', 'Манускрипты'],
      },
    ],
  };

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
          Коллекции
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}>
          <StyledTabs
            value={value}
            onChange={handleTabChange}
            centered
          >
            <Tab label="Все коллекции" />
            <Tab label="Постоянная экспозиция" />
            <Tab label="Временные выставки" />
          </StyledTabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container spacing={4}>
            {collections.paintings.map((collection) => (
              <Grid item key={collection.id} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardMedia
                    hasimage={Boolean(collection.image).toString()}
                    image={collection.image}
                    title={collection.title}
                    height={300}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ 
                      color: '#FFFFFF',
                      fontSize: '1.5rem' 
                    }}>
                      {collection.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1rem'
                    }}>
                      Период: {collection.period}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1rem'
                    }}>
                      Количество экспонатов: {collection.items}
                    </Typography>
                    <TagsContainer>
                      {collection.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </TagsContainer>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
            Постоянная экспозиция музея
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
            Временные выставки и специальные экспозиции
          </Typography>
        </TabPanel>
      </ContentContainer>
    </PageContainer>
  );
}

export default Collections; 