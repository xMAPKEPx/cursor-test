import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const StyledFooter = styled('footer')({
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  padding: '3rem 0',
  marginTop: 'auto',
});

const StyledRouterLink = styled(RouterLink)({
  color: '#FFFFFF',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  '&:hover': {
    color: '#D4AF37',
  },
});

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              MUSEUM
            </Typography>
            <Typography variant="body2">
              Онлайн-платформа для презентации выставочных проектов и музейных коллекций
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Навигация
            </Typography>
            <Box display="flex" flexDirection="column">
              <StyledRouterLink to="/exhibitions">
                Выставки
              </StyledRouterLink>
              <StyledRouterLink to="/collections">
                Коллекции
              </StyledRouterLink>
              <StyledRouterLink to="/about">
                О нас
              </StyledRouterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Контакты
            </Typography>
            <Typography variant="body2">
              Email: info@museum.com
            </Typography>
            <Typography variant="body2">
              Телефон: +7 (999) 123-45-67
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
            © {new Date().getFullYear()} MUSEUM. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
}

export default Footer; 